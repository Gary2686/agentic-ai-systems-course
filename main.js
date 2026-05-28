/* ============================================================
   Building Agentic AI Systems — Interactive Bilingual Course
   App controller (ES module)
   ============================================================ */

import { part1Chapters } from "./data/part1.js";
import { part2Chapters } from "./data/part2.js";
import { part3Chapters } from "./data/part3.js";
import { diagrams } from "./data/diagrams.js";

// -----------------------------------------------------------
// State + UI strings
// -----------------------------------------------------------
const state = {
  lang: localStorage.getItem("aas_lang") || "zh",
  mode: localStorage.getItem("aas_mode") || "single",
  chapterIdx: 0,
  visited: new Set(JSON.parse(localStorage.getItem("aas_visited") || "[]")),
  quizState: {}, // chapterId -> { answered: [], score: 0, current: 0 }
};

const I18N = {
  zh: {
    brandTag: "互動式雙語教材 · Interactive Bilingual Course",
    aboutLink: "關於本教材",
    aboutTitle: "關於本教材",
    overview: "本章導論",
    objectives: "學習目標",
    keyTakeaways: "本章重點整理",
    pitfalls: "常見誤解",
    analogy: "生活化比喻",
    example: "工作範例",
    procedure: "操作步驟",
    quiz: "章末自我檢測",
    quizSub: "做完整套題目以鞏固本章學習",
    next: "下一題",
    prev: "上一題",
    restart: "重新測驗",
    answer: "送出作答",
    showResult: "查看結果",
    correct: "答對了",
    incorrect: "再想一下",
    progressLabel: "完成度",
    prevChapter: "上一章",
    nextChapter: "下一章",
    score: "本章得分",
    perfect: "全對！",
    finishQuiz: "完成測驗",
    course: "課程",
  },
  en: {
    brandTag: "Interactive Bilingual Course · 互動式雙語教材",
    aboutLink: "About",
    aboutTitle: "About this course",
    overview: "Overview",
    objectives: "Learning objectives",
    keyTakeaways: "Key takeaways",
    pitfalls: "Common pitfalls",
    analogy: "Analogy",
    example: "Worked example",
    procedure: "Procedure",
    quiz: "Chapter self-check",
    quizSub: "Work through the full set to reinforce this chapter",
    next: "Next",
    prev: "Previous",
    restart: "Restart",
    answer: "Submit",
    showResult: "Show result",
    correct: "Correct",
    incorrect: "Not quite",
    progressLabel: "Progress",
    prevChapter: "Previous chapter",
    nextChapter: "Next chapter",
    score: "Score",
    perfect: "Perfect score!",
    finishQuiz: "Finish quiz",
    course: "Course",
  },
};

const t = (key) => I18N[state.lang][key] || I18N.zh[key] || key;

// -----------------------------------------------------------
// Chapter list and parts
// -----------------------------------------------------------
const allChapters = [...part1Chapters, ...part2Chapters, ...part3Chapters];

const parts = [
  {
    id: 1,
    title_zh: "Part I 基礎：生成式 AI 與自主型系統",
    title_en: "Part I — Foundations of Generative AI & Agentic Systems",
    chapterIds: [1, 2, 3],
  },
  {
    id: 2,
    title_zh: "Part II 設計：建構生成式 AI 代理人",
    title_en: "Part II — Designing & Implementing GenAI Agents",
    chapterIds: [4, 5, 6, 7],
  },
  {
    id: 3,
    title_zh: "Part III 信任、安全、倫理與應用",
    title_en: "Part III — Trust, Safety, Ethics, and Applications",
    chapterIds: [8, 9, 10, 11],
  },
];

const findChapterById = (id) => allChapters.find((c) => c.id === id);
const partForChapter = (id) =>
  parts.find((p) => p.chapterIds.includes(id)) || parts[0];

// -----------------------------------------------------------
// Rendering helpers
// -----------------------------------------------------------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function")
      node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v != null) node.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child == null) continue;
    node.appendChild(
      typeof child === "string" ? document.createTextNode(child) : child
    );
  }
  return node;
}

function bilingualP(zh, en) {
  return el(
    "div",
    { class: "bilingual" },
    el("div", { class: "zh-only" }, ...zh.split("\n\n").map((p) => el("p", {}, p))),
    el("div", { class: "en-only" }, ...en.split("\n\n").map((p) => el("p", {}, p)))
  );
}

// -----------------------------------------------------------
// TOC sidebar
// -----------------------------------------------------------
function renderTOC() {
  const toc = $("#toc");
  toc.innerHTML = "";
  for (const part of parts) {
    const partTitle = el(
      "div",
      { class: "toc-part" },
      state.lang === "en" ? part.title_en : part.title_zh
    );
    toc.appendChild(partTitle);

    for (const chId of part.chapterIds) {
      const ch = findChapterById(chId);
      if (!ch) continue;
      const idx = allChapters.indexOf(ch);
      const btn = el(
        "button",
        {
          class: "toc-item" + (idx === state.chapterIdx ? " active" : ""),
          type: "button",
          onclick: () => goToChapter(idx),
        },
        el("span", { class: "toc-num" }, String(ch.id)),
        el(
          "span",
          { class: "toc-title" },
          state.lang === "en" ? ch.title_en : ch.title_zh,
          el(
            "small",
            {},
            state.lang === "en" ? ch.title_zh : ch.title_en
          )
        )
      );
      toc.appendChild(btn);
    }
  }
}

// -----------------------------------------------------------
// Chapter rendering
// -----------------------------------------------------------
function iconSvg(path, viewBox = "0 0 24 24") {
  const wrap = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  wrap.setAttribute("viewBox", viewBox);
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", path);
  wrap.appendChild(p);
  return wrap;
}

function renderChapter() {
  const ch = allChapters[state.chapterIdx];
  const part = partForChapter(ch.id);
  const root = $("#chapterRoot");
  root.innerHTML = "";

  // Cover
  const cover = el(
    "header",
    { class: "cover" },
    el(
      "span",
      { class: "cover-kicker" },
      `Chapter ${ch.id} · ${state.lang === "en" ? part.title_en : part.title_zh}`
    ),
    el(
      "h1",
      {},
      el("span", { class: "zh-only" }, ch.title_zh),
      el("span", { class: "en-only" }, ch.title_en)
    ),
    el(
      "p",
      { class: "subtitle" },
      el("span", { class: "zh-only" }, ch.subtitle_zh),
      el("span", { class: "en-only" }, ch.subtitle_en)
    ),
    el(
      "div",
      { class: "cover-meta" },
      metaCard(t("course"), `${ch.id} / ${allChapters.length}`),
      metaCard(
        state.lang === "en" ? "Sections" : "小節數",
        String(ch.sections.length)
      ),
      metaCard(
        state.lang === "en" ? "Quiz items" : "測驗題數",
        String(ch.quiz.length)
      )
    )
  );
  root.appendChild(cover);

  // Overview
  const overview = el(
    "section",
    { class: "overview" },
    el("h2", {}, t("overview")),
    bilingualP(ch.overview_zh, ch.overview_en)
  );
  root.appendChild(overview);

  // Objectives
  const objectives = el(
    "section",
    { class: "objectives" },
    el("h2", {}, t("objectives"))
  );
  const objs = state.lang === "en" ? ch.learning_objectives_en : ch.learning_objectives_zh;
  const objsAlt = state.lang === "en" ? ch.learning_objectives_zh : ch.learning_objectives_en;
  const ul = el("ul", {});
  (state.mode === "dual" ? ch.learning_objectives_zh : objs).forEach((o, i) => {
    if (state.mode === "dual") {
      const li = el(
        "li",
        {},
        el("div", {}, el("strong", {}, o)),
        el("div", { style: "margin-top:4px;color:var(--muted);font-size:13px;" }, ch.learning_objectives_en[i])
      );
      ul.appendChild(li);
    } else {
      ul.appendChild(el("li", {}, o));
    }
  });
  objectives.appendChild(ul);
  root.appendChild(objectives);

  // Sections
  ch.sections.forEach((sec) => {
    const node = el(
      "section",
      { class: "section", id: `sec-${sec.id}` },
      el("span", { class: "section-num" }, sec.id),
      el(
        "h2",
        {},
        el("span", { class: "zh-only" }, sec.heading_zh),
        el("span", { class: "en-only" }, sec.heading_en),
        // mini subtitle in the other language
        state.mode === "single"
          ? el(
              "span",
              { class: "en-sub" + (state.lang === "en" ? " zh-only" : " en-only") },
              state.lang === "en" ? sec.heading_zh : sec.heading_en
            )
          : null
      ),
      el(
        "div",
        { class: "body" },
        bilingualP(sec.explanation_zh, sec.explanation_en)
      )
    );

    if (sec.analogy_zh) {
      node.appendChild(
        el(
          "div",
          { class: "callout analogy" },
          el(
            "div",
            { class: "callout-label" },
            iconSvg("M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"),
            t("analogy")
          ),
          bilingualP(sec.analogy_zh, sec.analogy_en)
        )
      );
    }

    // Diagram (if a key exists in diagrams.js for this section)
    const diagKey = `${sec.id}`;
    if (diagrams[diagKey]) {
      const dWrap = el("figure", { class: "diagram" });
      dWrap.innerHTML = diagrams[diagKey].svg;
      const cap = el(
        "figcaption",
        { class: "diagram-caption" },
        el("span", { class: "zh-only" }, diagrams[diagKey].caption_zh),
        el("span", { class: "en-only" }, diagrams[diagKey].caption_en)
      );
      dWrap.appendChild(cap);
      node.appendChild(dWrap);
    }

    if (sec.worked_example_zh) {
      node.appendChild(
        el(
          "div",
          { class: "callout example" },
          el(
            "div",
            { class: "callout-label" },
            iconSvg("M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"),
            t("example")
          ),
          bilingualP(sec.worked_example_zh, sec.worked_example_en)
        )
      );
    }

    root.appendChild(node);
  });

  // Procedure / code
  if (ch.code_or_procedure_zh) {
    const proc = el(
      "section",
      { class: "procedure" },
      el(
        "h3",
        {},
        el(
          "span",
          { class: "icon-circle" },
          iconSvg("M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11")
        ),
        t("procedure")
      ),
      bilingualP(ch.code_or_procedure_zh, ch.code_or_procedure_en)
    );
    root.appendChild(proc);
  }

  // Takeaways + pitfalls grid
  const sumGrid = el(
    "section",
    { class: "summary-grid" },
    el(
      "div",
      { class: "summary-card takeaways" },
      el(
        "h3",
        {},
        el(
          "span",
          { class: "badge" },
          iconSvg("M20 6L9 17l-5-5")
        ),
        t("keyTakeaways")
      ),
      ulFor(ch.key_takeaways_zh, ch.key_takeaways_en)
    ),
    el(
      "div",
      { class: "summary-card pitfalls" },
      el(
        "h3",
        {},
        el(
          "span",
          { class: "badge" },
          iconSvg("M12 9v4 M12 17h.01 M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z")
        ),
        t("pitfalls")
      ),
      ulFor(ch.common_pitfalls_zh, ch.common_pitfalls_en)
    )
  );
  root.appendChild(sumGrid);

  // Quiz
  root.appendChild(renderQuiz(ch));

  // Pager
  renderPager(ch);

  // Mark visited
  state.visited.add(ch.id);
  localStorage.setItem("aas_visited", JSON.stringify([...state.visited]));
  updateProgress();

  // Scroll to top of chapter
  window.scrollTo({ top: 0, behavior: "instant" });
}

function metaCard(label, value) {
  return el(
    "div",
    { class: "meta-card" },
    el("span", {}, label),
    el("strong", {}, value)
  );
}

function ulFor(zhArr, enArr) {
  const ul = el("ul", {});
  if (state.mode === "dual") {
    zhArr.forEach((z, i) => {
      const li = el(
        "li",
        {},
        z,
        el(
          "div",
          { style: "margin-top:4px;color:var(--muted);font-size:12.5px;line-height:1.5;" },
          enArr[i] || ""
        )
      );
      ul.appendChild(li);
    });
  } else {
    const arr = state.lang === "en" ? enArr : zhArr;
    arr.forEach((x) => ul.appendChild(el("li", {}, x)));
  }
  return ul;
}

// -----------------------------------------------------------
// Quiz
// -----------------------------------------------------------
function renderQuiz(ch) {
  const qid = ch.id;
  if (!state.quizState[qid]) {
    state.quizState[qid] = { answered: [], score: 0, current: 0, finished: false };
  }
  const qs = state.quizState[qid];

  const wrap = el("section", { class: "quiz", id: "chapter-quiz" });

  // Head
  wrap.appendChild(
    el(
      "div",
      { class: "quiz-head" },
      el(
        "div",
        {},
        el("h2", {}, t("quiz")),
        el("em", {}, t("quizSub"))
      ),
      el(
        "div",
        { class: "quiz-meta" },
        el("span", {}, qs.finished ? t("finishQuiz") : `${qs.current + 1} / ${ch.quiz.length}`),
        el("strong", {}, `${qs.score}/${ch.quiz.length}`)
      )
    )
  );

  if (qs.finished) {
    wrap.appendChild(
      el(
        "div",
        { class: "quiz-result" },
        el(
          "div",
          { class: "score" },
          String(qs.score),
          el("small", {}, ` / ${ch.quiz.length}`)
        ),
        el(
          "div",
          { class: "label" },
          qs.score === ch.quiz.length ? t("perfect") : `${t("score")}`
        ),
        el(
          "button",
          {
            class: "btn btn-primary",
            type: "button",
            onclick: () => {
              state.quizState[qid] = { answered: [], score: 0, current: 0, finished: false };
              renderChapter();
            },
          },
          t("restart")
        )
      )
    );
    return wrap;
  }

  const q = ch.quiz[qs.current];
  const answered = qs.answered[qs.current];

  wrap.appendChild(
    el(
      "p",
      { class: "quiz-question" },
      el("span", { class: "zh-only" }, q.question_zh),
      el("span", { class: "en-only" }, q.question_en)
    )
  );

  const optsWrap = el("div", { class: "quiz-options" });
  const optionLetters = ["A", "B", "C", "D"];
  q.options_zh.forEach((opt, idx) => {
    const btn = el(
      "button",
      {
        class:
          "quiz-option" +
          (answered != null && idx === q.answer_index ? " correct" : "") +
          (answered != null && answered === idx && answered !== q.answer_index ? " incorrect" : ""),
        type: "button",
        disabled: answered != null ? "true" : null,
        onclick: () => answerQuiz(ch, idx),
      },
      el("span", { class: "letter" }, optionLetters[idx]),
      el(
        "span",
        {},
        el("span", { class: "zh-only" }, opt),
        el("span", { class: "en-only" }, q.options_en[idx]),
        state.mode === "single"
          ? el(
              "span",
              { class: "opt-en " + (state.lang === "en" ? "zh-only" : "en-only") },
              state.lang === "en" ? opt : q.options_en[idx]
            )
          : null
      )
    );
    optsWrap.appendChild(btn);
  });
  wrap.appendChild(optsWrap);

  if (answered != null) {
    const ok = answered === q.answer_index;
    wrap.appendChild(
      el(
        "div",
        { class: "quiz-feedback" + (ok ? "" : " bad") },
        el(
          "p",
          {},
          el("strong", {}, ok ? t("correct") : t("incorrect"))
        ),
        bilingualP(q.explanation_zh, q.explanation_en)
      )
    );

    const controls = el("div", { class: "quiz-controls" });
    if (qs.current < ch.quiz.length - 1) {
      controls.appendChild(
        el(
          "button",
          {
            class: "btn btn-primary",
            type: "button",
            onclick: () => {
              qs.current += 1;
              renderChapter();
            },
          },
          t("next")
        )
      );
    } else {
      controls.appendChild(
        el(
          "button",
          {
            class: "btn btn-primary",
            type: "button",
            onclick: () => {
              qs.finished = true;
              renderChapter();
            },
          },
          t("showResult")
        )
      );
    }
    controls.appendChild(
      el(
        "button",
        {
          class: "btn btn-ghost",
          type: "button",
          onclick: () => {
            state.quizState[qid] = { answered: [], score: 0, current: 0, finished: false };
            renderChapter();
          },
        },
        t("restart")
      )
    );
    wrap.appendChild(controls);
  }

  return wrap;
}

function answerQuiz(ch, idx) {
  const qs = state.quizState[ch.id];
  if (qs.answered[qs.current] != null) return;
  qs.answered[qs.current] = idx;
  if (idx === ch.quiz[qs.current].answer_index) qs.score += 1;
  renderChapter();
}

// -----------------------------------------------------------
// Pager
// -----------------------------------------------------------
function renderPager(ch) {
  const pager = $("#chapterPager");
  pager.innerHTML = "";
  const prev = state.chapterIdx > 0 ? allChapters[state.chapterIdx - 1] : null;
  const next = state.chapterIdx < allChapters.length - 1 ? allChapters[state.chapterIdx + 1] : null;

  pager.appendChild(
    prev
      ? el(
          "a",
          {
            class: "pager-link prev",
            href: "#",
            onclick: (e) => {
              e.preventDefault();
              goToChapter(state.chapterIdx - 1);
            },
          },
          el("span", {}, `← ${t("prevChapter")} · Ch.${prev.id}`),
          el("strong", {}, state.lang === "en" ? prev.title_en : prev.title_zh)
        )
      : el("div", { class: "pager-link disabled" })
  );

  pager.appendChild(
    next
      ? el(
          "a",
          {
            class: "pager-link next",
            href: "#",
            onclick: (e) => {
              e.preventDefault();
              goToChapter(state.chapterIdx + 1);
            },
          },
          el("span", {}, `${t("nextChapter")} · Ch.${next.id} →`),
          el("strong", {}, state.lang === "en" ? next.title_en : next.title_zh)
        )
      : el("div", { class: "pager-link disabled" })
  );
}

// -----------------------------------------------------------
// Progress + navigation
// -----------------------------------------------------------
function updateProgress() {
  const pct = Math.round((state.visited.size / allChapters.length) * 100);
  $("#progressFill").style.width = `${pct}%`;
  $("#progressLabel").textContent = `${pct}%`;
}

function goToChapter(idx) {
  if (idx < 0 || idx >= allChapters.length) return;
  state.chapterIdx = idx;
  location.hash = `chapter-${allChapters[idx].id}`;
  renderTOC();
  renderChapter();
  $("#sidebar").classList.remove("open");
}

function readHash() {
  const m = location.hash.match(/chapter-(\d+)/);
  if (m) {
    const id = Number(m[1]);
    const idx = allChapters.findIndex((c) => c.id === id);
    if (idx >= 0) state.chapterIdx = idx;
  }
}

// -----------------------------------------------------------
// i18n DOM hooks
// -----------------------------------------------------------
function applyStaticI18n() {
  document.body.setAttribute("data-lang", state.lang);
  document.body.setAttribute("data-mode", state.mode);
  document.documentElement.setAttribute(
    "lang",
    state.lang === "en" ? "en" : "zh-Hant"
  );
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  $$("[data-lang-btn]").forEach((b) => {
    const target = b.getAttribute("data-lang-btn");
    b.classList.toggle("active", target === (state.mode === "dual" ? "dual" : state.lang));
  });
}

function setLanguage(target) {
  if (target === "dual") {
    state.mode = "dual";
  } else {
    state.lang = target;
    state.mode = "single";
  }
  localStorage.setItem("aas_lang", state.lang);
  localStorage.setItem("aas_mode", state.mode);
  applyStaticI18n();
  renderTOC();
  renderChapter();
}

// -----------------------------------------------------------
// Boot
// -----------------------------------------------------------
function boot() {
  readHash();
  applyStaticI18n();
  renderTOC();
  renderChapter();
  updateProgress();

  // Language buttons
  $$("[data-lang-btn]").forEach((b) => {
    b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang-btn")));
  });

  // Menu toggle
  $("#menuBtn").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
  });

  // Scroll-to-top
  const scrollBtn = $("#scrollTop");
  window.addEventListener("scroll", () => {
    scrollBtn.hidden = window.scrollY < 400;
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Hash change (browser back/forward)
  window.addEventListener("hashchange", () => {
    readHash();
    renderTOC();
    renderChapter();
  });
}

boot();
