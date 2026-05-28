const ui = {
  zh: {
    brandSub: "互動式雙語教材",
    referenceNav: "版權說明",
    progress: "學習進度",
    conceptMap: "概念圖",
    conceptMapSub: "Concept Map",
    deepDive: "細部主題講解",
    deepDiveSub: "Detailed Lesson Modules",
    definitions: "核心定義",
    definitionsSub: "Key Definitions",
    steps: "學習步驟",
    stepsSub: "Learning Steps",
    examples: "容易吸收的例子",
    examplesSub: "Examples",
    misconceptions: "常見誤解",
    misconceptionsSub: "Misconceptions",
    practice: "課堂練習",
    practiceSub: "In-class Practice",
    takeaways: "章節重點",
    takeawaysSub: "Takeaways",
    referenceTitle: "版權說明",
    quizTitle: "章末小測驗",
    quizSub: "Random single-choice quiz",
    nextQuestion: "下一題",
    resetQuiz: "重新測驗",
    correct: "答對了",
    incorrect: "再想一下",
    score: "目前分數",
    completed: "本章測驗完成",
    referenceText:
      "本網站為葉欲禾（Gary Yu-Ho Yeh）自編之網路教材，內容包含原創教學整理、課堂範例、概念圖與測驗設計。本站不提供原書檔案、原書教材連結，亦不重製可替代原書的逐字內容。網頁教材版權所有 © 葉欲禾（Gary Yu-Ho Yeh）。"
  },
  en: {
    brandSub: "Interactive bilingual course",
    referenceNav: "Copyright",
    progress: "Progress",
    conceptMap: "Concept Map",
    conceptMapSub: "概念圖",
    deepDive: "Detailed Lesson Modules",
    deepDiveSub: "細部主題講解",
    definitions: "Key Definitions",
    definitionsSub: "核心定義",
    steps: "Learning Steps",
    stepsSub: "學習步驟",
    examples: "Examples",
    examplesSub: "容易吸收的例子",
    misconceptions: "Misconceptions",
    misconceptionsSub: "常見誤解",
    practice: "In-class Practice",
    practiceSub: "課堂練習",
    takeaways: "Takeaways",
    takeawaysSub: "章節重點",
    referenceTitle: "Copyright",
    quizTitle: "Chapter Quiz",
    quizSub: "隨機單選題",
    nextQuestion: "Next Question",
    resetQuiz: "Restart Quiz",
    correct: "Correct",
    incorrect: "Not quite",
    score: "Current score",
    completed: "Chapter quiz completed",
    referenceText:
      "This website is an original online course site created by Gary Yu-Ho Yeh. It contains original instructional synthesis, classroom examples, concept diagrams, and quiz design. It does not provide book files, book-material links, or verbatim replacement content for any copyrighted source. Web course copyright © Gary Yu-Ho Yeh."
  }
};

const parts = [
  {
    zh: "Part 1 基礎：生成式 AI 與自主型系統",
    en: "Part 1 Foundations: Generative AI and Agentic Systems",
    chapters: [1, 2, 3]
  },
  {
    zh: "Part 2 設計：生成式 AI Agent 的實作架構",
    en: "Part 2 Design: Implementing Generative AI Agents",
    chapters: [4, 5, 6, 7]
  },
  {
    zh: "Part 3 信任、安全、倫理與應用",
    en: "Part 3 Trust, Safety, Ethics, and Applications",
    chapters: [8, 9, 10, 11]
  }
];

const compactProfiles = {
  4: {
    zhLead: "本章深入說明反思與內省如何讓 agent 檢查自己的推理品質。學生要理解反思不是讓模型多說幾句理由，而是建立評估、修正與自我說明的迴路。",
    enLead: "This chapter explains how reflection and introspection help agents inspect reasoning quality. Reflection is not simply producing more rationale; it is an evaluation, revision, and self-explanation loop.",
    modules: [
      ["反思迴路", "反思的基本流程是：先產出初步答案，再根據目標、限制與評估標準檢查，最後修正輸出或改變下一步行動。", ["適合用在複雜推理、長任務與高錯誤成本情境。", "不適合把反思當成無限重試，必須設定停止條件。"], "Reflection loop", "The basic loop is draft, inspect against goals and constraints, then revise output or next action.", ["Useful for complex reasoning, long tasks, and high error cost.", "Reflection is not unlimited retry; stopping criteria are required."]],
      ["後設推理", "後設推理是 agent 對自己的推理策略做判斷，例如發現資訊不足時改為查詢工具，而不是硬回答。", ["關鍵問題：我是否有足夠資訊？目前策略是否會造成風險？", "可用信心分數、缺漏清單與檢查表輔助。"], "Meta-reasoning", "Meta-reasoning lets the agent judge its own reasoning strategy, such as using a tool when information is insufficient.", ["Key questions: Do I have enough information? Is this strategy risky?", "Confidence scores, missing-information lists, and checklists help."]],
      ["自我說明", "自我說明不是把所有思考過程公開，而是用學生可理解的方式說明依據、限制與下一步。", ["說明要服務學習與信任，不是製造冗長文字。", "高風險情境應說明不確定性與需要人類判斷之處。"], "Self-explanation", "Self-explanation is not exposing every internal step; it explains evidence, limits, and next steps in learner-friendly language.", ["Explanation should support learning and trust, not verbosity.", "High-risk cases should state uncertainty and human judgment needs."]]
    ],
    examples: [
      ["R1", "客服回覆檢查", "Agent 回覆前先檢查是否引用了不存在的政策，若不確定就要求查詢知識庫。", "Support response check", "Before replying, the agent checks whether it cited a non-existent policy and queries the knowledge base if unsure."],
      ["R2", "研究摘要修正", "Agent 先產生摘要，再逐項檢查研究目的、方法、結果是否都有涵蓋。", "Research summary revision", "The agent drafts a summary, then checks whether purpose, method, and results are covered."],
      ["R3", "價格策略檢討", "Agent 提出價格策略後，反思是否忽略競爭者、庫存或倫理風險。", "Pricing strategy review", "After proposing pricing, the agent reflects on competitors, inventory, and ethical risks."]
    ],
    misconceptions: [
      ["誤解：反思就是讓模型輸出更長。", "真正的反思要有評估標準、修正動作與停止條件。", "Misconception: reflection just means longer output.", "Real reflection needs evaluation criteria, revision actions, and stopping conditions."],
      ["誤解：自我說明等於揭露全部內部推理。", "教學上需要的是可理解的依據與限制，而不是冗長或敏感的內部內容。", "Misconception: self-explanation means exposing all internal reasoning.", "Instruction needs understandable evidence and limits, not lengthy or sensitive internals."]
    ],
    practice: ["請學生設計一個反思檢查表，用於檢查 AI 產生的研究摘要是否完整、正確且沒有過度推論。", "Ask students to design a reflection checklist for checking whether an AI-generated research summary is complete, accurate, and not overclaimed."],
    zhTakeaways: ["反思是評估與修正迴路，不是單純延長回答。", "後設推理讓 agent 知道何時要查工具、停下來或請人類判斷。", "自我說明應該清楚呈現依據、限制與不確定性。"],
    enTakeaways: ["Reflection is an evaluate-and-revise loop, not longer answers.", "Meta-reasoning helps agents know when to use tools, stop, or ask humans.", "Self-explanation should clarify evidence, limits, and uncertainty."]
  },
  5: {
    zhLead: "本章說明 agent 如何從『回答問題』進一步變成『使用工具完成任務』。學生要理解工具定義、函式呼叫、規劃演算法與工具選擇之間的關係。",
    enLead: "This chapter explains how agents move from answering questions to using tools to complete tasks. Students learn the relationship among tool definitions, function calling, planning algorithms, and tool selection.",
    modules: [
      ["工具定義", "工具必須有清楚名稱、用途、輸入格式、輸出格式、錯誤條件與權限限制。", ["工具描述太模糊會導致 agent 選錯工具。", "輸入 schema 是控制錯誤的重要設計。"], "Tool definition", "Tools need clear names, purpose, input schema, output format, error conditions, and permissions.", ["Vague tool descriptions lead to wrong tool choice.", "Input schemas are important error controls."]],
      ["函式呼叫", "函式呼叫讓模型把自然語言意圖轉為結構化參數，再交給外部程式執行。", ["模型不應直接假裝工具結果。", "工具回傳後要驗證與摘要。"], "Function calling", "Function calling turns natural-language intent into structured parameters for external execution.", ["The model should not pretend tool results.", "Tool returns need validation and summarization."]],
      ["工具規劃", "多步驟任務需要決定工具順序，例如先搜尋、再篩選、再計算、最後生成報告。", ["規劃要考慮成本、延遲與失敗回復。", "有些任務適合 sequential，有些適合 parallel。"], "Tool planning", "Multi-step tasks require tool order, such as search, filter, calculate, then report.", ["Planning must consider cost, latency, and recovery.", "Some tasks are sequential; others can be parallel."]]
    ],
    examples: [
      ["T1", "航班規劃", "先查航班，再查住宿，最後依預算與時間排序。", "Flight planning", "Search flights, then lodging, then rank by budget and time."],
      ["T2", "資料分析", "Agent 呼叫試算表工具讀取資料，再呼叫統計函式產生摘要。", "Data analysis", "The agent calls spreadsheet tools, then statistical functions for summary."],
      ["T3", "課堂助教", "先查課綱，再根據章節建立測驗，不可憑空捏造授課規定。", "Teaching assistant", "Look up syllabus first, then create quizzes; do not invent course policy."]
    ],
    misconceptions: [
      ["誤解：工具越多越好。", "工具越多，選擇錯誤與權限風險越高；要只提供任務需要的工具。", "Misconception: more tools are always better.", "More tools increase wrong-selection and permission risks; expose only task-needed tools."],
      ["誤解：函式呼叫後就一定正確。", "工具可能失敗、資料可能過期、參數可能錯誤，所以仍需驗證。", "Misconception: function calls are always correct.", "Tools can fail, data can be stale, and parameters can be wrong, so validation remains necessary."]
    ],
    practice: ["請學生為『產生期末報告提醒』設計三個工具：查詢名單、查詢繳交狀態、寄送提醒，並寫出每個工具的輸入與輸出。", "Ask students to design three tools for final-report reminders: roster lookup, submission-status lookup, and reminder sending, with inputs and outputs."],
    zhTakeaways: ["工具讓 agent 能行動，但也引入權限與錯誤風險。", "函式呼叫的核心是把意圖轉成結構化參數。", "工具規劃要考慮順序、成本、延遲與失敗回復。"],
    enTakeaways: ["Tools let agents act, but introduce permission and error risks.", "Function calling turns intent into structured parameters.", "Tool planning must consider order, cost, latency, and recovery."]
  },
  6: {
    zhLead: "本章介紹協調者、工作者與委派者模型，說明多代理系統如何透過角色分工完成複雜任務。學生要能設計角色責任、交接格式與衝突處理。",
    enLead: "This chapter introduces the coordinator-worker-delegator model and how multi-agent systems solve complex tasks through role division. Students learn to design responsibilities, handoff formats, and conflict handling.",
    modules: [
      ["協調者", "協調者負責理解總目標、拆解任務、分派工作、整合結果與監控品質。", ["協調者不一定做最多工作，但負責保持方向一致。", "它需要知道何時重新分派或要求重做。"], "Coordinator", "The coordinator understands the overall goal, decomposes tasks, assigns work, integrates results, and monitors quality.", ["It may not do the most work, but keeps direction aligned.", "It must know when to reassign or request revision."]],
      ["工作者", "工作者是專門處理子任務的 agent，例如搜尋、寫作、程式、評估或翻譯。", ["工作者輸出要有標準格式。", "角色太重疊會造成重工與衝突。"], "Worker", "Workers handle subtasks such as search, writing, coding, evaluation, or translation.", ["Worker outputs need a standard format.", "Overlapping roles cause rework and conflict."]],
      ["委派與交接", "委派者把任務交給最適合的 agent，交接內容必須包含目標、上下文、限制與完成標準。", ["交接不清楚會讓下游 agent 猜測。", "衝突處理應事先定義，而不是出事後才補。"], "Delegation and handoff", "Delegation sends work to the best-fit agent; handoff must include goal, context, constraints, and done criteria.", ["Unclear handoff makes downstream agents guess.", "Conflict handling should be predefined."]
      ]
    ],
    examples: [
      ["C1", "旅遊 agent", "協調者整合預算與偏好，工作者分別查景點、交通、住宿。", "Travel agent", "The coordinator integrates budget and preferences; workers search attractions, transport, and lodging."],
      ["C2", "研究團隊", "文獻 agent 找資料，方法 agent 檢查研究設計，寫作 agent 產生草稿。", "Research team", "A literature agent finds papers, a method agent checks design, and a writing agent drafts."],
      ["C3", "軟體開發", "規劃 agent 拆需求，實作 agent 寫程式，測試 agent 找缺陷。", "Software development", "A planning agent decomposes requirements, implementation agent writes code, and testing agent finds defects."]
    ],
    misconceptions: [
      ["誤解：多代理就是把同一個模型複製多份。", "多代理的價值來自角色差異、資訊流與協調規則。", "Misconception: multi-agent means copying the same model many times.", "Value comes from role differences, information flow, and coordination rules."],
      ["誤解：協調者一定比工作者聰明。", "協調者的重點是任務管理與整合，不一定擁有最深的專業知識。", "Misconception: coordinators must be smarter than workers.", "Coordination is about task management and integration, not necessarily deepest expertise."]
    ],
    practice: ["請學生為『製作一份 AI 倫理簡報』設計 CWD 架構，列出每個角色的責任、輸入、輸出與交接格式。", "Ask students to design a CWD architecture for creating an AI ethics slide deck, listing each role's responsibility, input, output, and handoff format."],
    zhTakeaways: ["CWD 模型用角色分工降低複雜度。", "交接格式決定多代理協作是否穩定。", "衝突處理與品質整合是協調者的核心責任。"],
    enTakeaways: ["The CWD model reduces complexity through role division.", "Handoff format determines multi-agent stability.", "Conflict handling and quality integration are core coordinator responsibilities."]
  },
  7: {
    zhLead: "本章說明有效 agentic system 的設計技巧：聚焦的系統提示、狀態空間、環境模型、記憶架構、上下文管理，以及 sequential / parallel workflow 的取捨。",
    enLead: "This chapter explains design techniques for effective agentic systems: focused system prompts, state spaces, environment models, memory architecture, context management, and sequential versus parallel workflow trade-offs.",
    modules: [
      ["系統提示", "系統提示不是口號，而是 agent 的角色、目標、規則、限制、輸出格式與升級條件。", ["好的提示能降低模糊行為。", "提示不能取代權限與程式檢查。"], "System prompts", "System prompts define role, goals, rules, constraints, output format, and escalation conditions.", ["Good prompts reduce ambiguity.", "Prompts do not replace permissions and programmatic checks."]],
      ["狀態與環境", "狀態空間描述 agent 目前知道什麼、任務進展到哪裡、環境有哪些可變因素。", ["沒有狀態，agent 容易重複或忘記任務。", "環境模型決定 agent 能感知與改變什麼。"], "State and environment", "State space describes what the agent knows, task progress, and changing environmental factors.", ["Without state, agents repeat or forget tasks.", "Environment models define what agents perceive and change."]],
      ["記憶與上下文", "短期記憶處理當前任務，長期記憶保存可重用知識，情節記憶保存互動歷史。", ["記憶要可更新、可刪除、可追溯。", "上下文管理要避免把無關資訊塞滿。"], "Memory and context", "Working memory handles current tasks, long-term memory stores reusable knowledge, and episodic memory stores interaction history.", ["Memory should be updateable, deletable, and traceable.", "Context management should avoid irrelevant stuffing."]]
    ],
    examples: [
      ["D1", "論文助理", "短期記憶保存當前段落，長期記憶保存研究主題與引用格式。", "Paper assistant", "Working memory stores the current paragraph; long-term memory stores research themes and citation style."],
      ["D2", "並行審查", "多個 agent 同時檢查事實、語氣、格式，再由協調者整合。", "Parallel review", "Multiple agents check facts, tone, and format in parallel, then a coordinator integrates."],
      ["D3", "流程監控", "每一步保存狀態，若工具失敗可回到上一個可用狀態。", "Workflow monitoring", "Each step saves state so tool failure can roll back to a usable state."]
    ],
    misconceptions: [
      ["誤解：prompt 寫得夠長就會穩定。", "過長提示可能造成注意力分散；穩定性需要狀態、測試與工具邊界。", "Misconception: longer prompts guarantee stability.", "Long prompts can distract attention; stability needs state, tests, and tool boundaries."],
      ["誤解：記憶越多越好。", "記憶需要篩選、更新與刪除，否則會污染上下文。", "Misconception: more memory is always better.", "Memory needs filtering, updating, and deletion, or it contaminates context."]
    ],
    practice: ["請學生設計一個課程助教 agent 的記憶架構：哪些資訊是短期、長期、情節記憶？哪些不應保存？", "Ask students to design memory architecture for a course assistant: what belongs in working, long-term, episodic memory, and what should not be stored?"],
    zhTakeaways: ["有效提示要定義角色、規則、格式與升級條件。", "狀態空間讓 agent 能追蹤進度與避免重複。", "記憶架構必須兼顧有用性、隱私與可刪除性。"],
    enTakeaways: ["Effective prompts define role, rules, format, and escalation.", "State spaces let agents track progress and avoid repetition.", "Memory architecture must balance usefulness, privacy, and deletability."]
  },
  8: {
    zhLead: "本章說明如何建立使用者對生成式 AI 系統的信任。重點包含透明度、可解釋性、不確定性表達、偏誤處理、使用者控制與同意。",
    enLead: "This chapter explains how to build trust in generative AI systems through transparency, explainability, uncertainty communication, bias handling, user control, and consent.",
    modules: [
      ["透明度", "透明不是公開所有技術細節，而是讓使用者知道系統做了什麼、根據什麼、不能保證什麼。", ["要標示 AI 參與程度。", "要說明資料來源與限制。"], "Transparency", "Transparency does not mean exposing every technical detail; it means users know what the system did, based on what, and what it cannot guarantee.", ["Disclose AI involvement.", "Explain data sources and limits."]],
      ["可解釋性", "可解釋性要依使用者調整：學生需要概念理由，管理者需要風險摘要，工程師需要紀錄與錯誤訊息。", ["解釋要對決策有用。", "過度解釋反而降低理解。"], "Explainability", "Explainability should fit users: students need conceptual reasons, managers need risk summaries, engineers need logs and errors.", ["Explanations should support decisions.", "Over-explanation can reduce understanding."]],
      ["不確定性", "可信系統要能承認不知道，並提供下一步查證方式。", ["不確定時應降低語氣肯定度。", "必要時交由人類或工具驗證。"], "Uncertainty", "Trustworthy systems admit uncertainty and offer next verification steps.", ["Use less certainty when unsure.", "Escalate to humans or tools when needed."]]
    ],
    examples: [
      ["TR1", "學生問答", "回答後標示哪些是課堂概念、哪些需要查資料。", "Student Q&A", "After answering, mark what is course concept and what needs lookup."],
      ["TR2", "推薦系統", "說明推薦原因與使用者可調整的偏好。", "Recommender", "Explain recommendation reasons and user-adjustable preferences."],
      ["TR3", "報告產生", "附上限制聲明與需要人工確認的項目。", "Report generation", "Attach limitations and items requiring human confirmation."]
    ],
    misconceptions: [
      ["誤解：信任就是讓使用者相信 AI。", "信任應該是校準的：知道何時可用、何時不可用。", "Misconception: trust means making users believe AI.", "Trust should be calibrated: knowing when to rely and when not to."],
      ["誤解：解釋越多越透明。", "好的解釋是剛好足夠、和任務相關、能支持判斷。", "Misconception: more explanation is more transparent.", "Good explanation is sufficient, relevant, and decision-supporting."]
    ],
    practice: ["請學生把一段 AI 回覆改寫成『可信回覆』：加入依據、限制、不確定性與下一步查證。", "Ask students to rewrite an AI response into a trustworthy response with evidence, limits, uncertainty, and next verification steps."],
    zhTakeaways: ["信任需要透明、可解釋與可控制。", "不確定性表達是可信系統的一部分。", "使用者同意與控制權能降低權力不對稱。"],
    enTakeaways: ["Trust requires transparency, explainability, and control.", "Uncertainty communication is part of trustworthy systems.", "Consent and user control reduce power asymmetry."]
  },
  9: {
    zhLead: "本章討論 agentic AI 的安全與倫理風險：對抗攻擊、偏誤歧視、錯誤資訊、隱私外洩、智慧財產與責任歸屬。學生要能把倫理原則轉成設計控制。",
    enLead: "This chapter examines safety and ethics risks in agentic AI: adversarial attacks, bias, misinformation, privacy leakage, intellectual property, and accountability. Students learn to translate ethics into design controls.",
    modules: [
      ["風險分類", "先分辨風險來源：輸入惡意、資料偏誤、模型幻覺、工具權限過大或使用情境不當。", ["不同風險需要不同控制。", "不能只靠一句安全提示。"], "Risk taxonomy", "Classify risk sources: malicious input, biased data, hallucination, excessive tool permission, or inappropriate context.", ["Different risks need different controls.", "A single safety prompt is insufficient."]],
      ["隱私與安全", "Agent 可能讀取、保存、傳送資料；因此必須限制資料最小化、遮蔽敏感資訊與保留稽核紀錄。", ["個資不應無限制進入 prompt。", "工具輸出要檢查是否洩漏敏感資訊。"], "Privacy and security", "Agents may read, store, and transmit data, so they need data minimization, masking, and audit logs.", ["Personal data should not freely enter prompts.", "Tool outputs must be checked for sensitive leakage."]],
      ["責任與治理", "倫理不是抽象價值，而是誰能批准、誰能監督、錯誤如何回報、誰負責修正。", ["高風險任務要有人工決策者。", "紀錄可支持事後追蹤與學習。"], "Accountability and governance", "Ethics means who approves, who monitors, how errors are reported, and who fixes them.", ["High-risk tasks need human decision-makers.", "Logs support post-incident learning."]
      ]
    ],
    examples: [
      ["S1", "Prompt injection", "使用者要求 agent 忽略規則並外洩資料，系統應拒絕並記錄。", "Prompt injection", "A user asks the agent to ignore rules and leak data; the system should refuse and log."],
      ["S2", "偏誤招募", "履歷篩選 agent 若使用歷史偏誤資料，可能複製歧視。", "Biased hiring", "A resume-screening agent trained on biased history can reproduce discrimination."],
      ["S3", "錯誤資訊", "Agent 產生看似可信的錯誤政策說明，會造成使用者錯誤行動。", "Misinformation", "An agent produces plausible but wrong policy explanations, leading users to wrong actions."]
    ],
    misconceptions: [
      ["誤解：倫理只要寫在原則文件就好。", "倫理必須落地成資料限制、工具權限、測試案例與責任流程。", "Misconception: ethics belongs only in principle documents.", "Ethics must become data limits, tool permissions, test cases, and responsibility workflows."],
      ["誤解：安全會阻礙創新。", "好的安全設計讓系統能在可接受風險內被使用，反而加速採用。", "Misconception: safety blocks innovation.", "Good safety enables use within acceptable risk and accelerates adoption."]
    ],
    practice: ["請學生為一個校園 AI 助理建立風險登錄表：風險、影響、控制措施、負責人與測試方法。", "Ask students to create a risk register for a campus AI assistant: risk, impact, controls, owner, and test method."],
    zhTakeaways: ["安全風險來自資料、模型、工具、使用者與情境。", "隱私保護需要資料最小化、遮蔽與稽核。", "倫理原則必須轉成可執行的控制與責任流程。"],
    enTakeaways: ["Safety risks come from data, models, tools, users, and context.", "Privacy protection needs minimization, masking, and audit.", "Ethical principles must become executable controls and accountability workflows."]
  },
  10: {
    zhLead: "本章整理 agentic AI 的常見應用，包含創作、自然語言與對話、機器人與自主系統、決策支援與最佳化。學生要能判斷應用場景的價值、風險與適合的系統架構。",
    enLead: "This chapter surveys common agentic AI applications: creative work, natural language and conversational agents, robotics and autonomous systems, and decision support and optimization. Students learn to judge value, risk, and suitable architecture.",
    modules: [
      ["創作應用", "創作 agent 可協助構想、草稿、變體與風格探索，但需要人類判斷原創性、版權與品質。", ["適合輔助，不宜把責任完全交給模型。", "輸出應保留修改與追蹤。"], "Creative applications", "Creative agents assist ideation, drafting, variation, and style exploration, but humans judge originality, copyright, and quality.", ["Best as support, not total responsibility transfer.", "Outputs should remain editable and traceable."]],
      ["對話 agent", "對話 agent 的挑戰不是會聊天，而是能維持上下文、查證資訊、處理情緒與正確轉介。", ["需要明確升級條件。", "要避免假裝具有專業權威。"], "Conversational agents", "The challenge is not chatting, but maintaining context, verifying information, handling emotion, and escalating correctly.", ["Escalation rules are required.", "Avoid pretending professional authority."]],
      ["決策支援", "決策 agent 可整合資料與評估方案，但不應取代高責任決策者。", ["適合提供比較、模擬與敏感度分析。", "必須說明假設與資料限制。"], "Decision support", "Decision agents can integrate data and compare options, but should not replace accountable decision-makers.", ["Good for comparison, simulation, and sensitivity analysis.", "Must explain assumptions and data limits."]
      ]
    ],
    examples: [
      ["A1", "行銷文案", "產生多個文案版本，由人類檢查品牌一致性與法規。", "Marketing copy", "Generate variants, then humans check brand consistency and regulation."],
      ["A2", "客服對話", "先辨識問題類型，查詢知識庫，再產生可追溯回答。", "Support conversation", "Classify issue, query knowledge base, then generate traceable response."],
      ["A3", "庫存最佳化", "預測需求並建議補貨，但異常情境需人工審核。", "Inventory optimization", "Forecast demand and suggest replenishment, while anomalies require human review."]
    ],
    misconceptions: [
      ["誤解：所有應用都適合完全自動化。", "應用要依風險、可逆性、責任與資料品質決定自動化程度。", "Misconception: every application should be fully automated.", "Automation level depends on risk, reversibility, accountability, and data quality."],
      ["誤解：對話流暢就代表應用成功。", "真正成功要看任務完成率、錯誤率、使用者理解與安全性。", "Misconception: fluent conversation means application success.", "Success depends on task completion, error rate, user understanding, and safety."]
    ],
    practice: ["請學生選一個產業應用，畫出價值主張、使用者、資料來源、agent 行動與風險控制。", "Ask students to choose an industry application and map value proposition, users, data sources, agent actions, and risk controls."],
    zhTakeaways: ["不同應用場景需要不同自主等級。", "對話流暢只是表層，任務完成與安全才是核心。", "高責任應用應以決策支援為主，而非完全取代人類。"],
    enTakeaways: ["Different applications need different autonomy levels.", "Fluent dialogue is surface-level; task completion and safety matter more.", "High-accountability applications should support decisions, not replace humans."]
  },
  11: {
    zhLead: "本章總結 agentic AI 的核心概念，並討論多模態智能、進階語言理解、強化學習、產業實務與 AGI 邊界。學生要能把未來趨勢與當前可行系統區分開來。",
    enLead: "This chapter synthesizes core agentic AI concepts and discusses multimodal intelligence, advanced language understanding, reinforcement learning, industry practice, and AGI boundaries. Students learn to distinguish future trends from currently feasible systems.",
    modules: [
      ["多模態 agent", "未來 agent 會整合文字、影像、聲音、表格與環境訊號，但多模態也會增加資料對齊與錯誤來源。", ["輸入越多，驗證越重要。", "不同模態的證據可能互相矛盾。"], "Multimodal agents", "Future agents integrate text, images, audio, tables, and environmental signals, but multimodality increases alignment and error sources.", ["More inputs make validation more important.", "Evidence from modalities can conflict."]],
      ["學習與適應", "Agent 的未來重點不是只回答更好，而是能從回饋中調整策略，但這需要安全的學習邊界。", ["線上學習可能引入污染。", "回饋品質會影響適應方向。"], "Learning and adaptation", "Future agents must adapt strategies from feedback, not only answer better, but this needs safe learning boundaries.", ["Online learning can introduce contamination.", "Feedback quality shapes adaptation."]],
      ["AGI 與現實邊界", "AGI 是長期研究方向；課堂上應區分願景、研究挑戰與現階段可部署的窄任務 agent。", ["不要把未來願景當成目前能力。", "當前設計仍需任務邊界與評估。"], "AGI and real boundaries", "AGI is a long-term research direction; teaching should distinguish vision, research challenges, and deployable narrow-task agents.", ["Do not treat future vision as current capability.", "Current design still needs task boundaries and evaluation."]
      ]
    ],
    examples: [
      ["F1", "多模態客服", "使用者上傳照片與文字描述，agent 判斷問題並要求缺少資訊。", "Multimodal support", "A user uploads a photo and text; the agent diagnoses and asks for missing information."],
      ["F2", "自我改進助教", "根據學生錯題調整下一輪練習，但不能保存不必要個資。", "Adaptive tutor", "It adjusts practice from student mistakes without storing unnecessary personal data."],
      ["F3", "產業導入", "從低風險內部助理開始，逐步擴大到有審核的外部流程。", "Industry adoption", "Start with low-risk internal assistants, then expand to reviewed external workflows."]
    ],
    misconceptions: [
      ["誤解：AGI 快到了，所以現在不需設計邊界。", "越接近強能力系統，越需要清楚邊界、評估與治理。", "Misconception: AGI is near, so boundaries are unnecessary.", "The stronger systems become, the more boundaries, evaluation, and governance matter."],
      ["誤解：未來趨勢等於現在可用。", "教材應訓練學生區分研究方向、產品宣稱與可驗證能力。", "Misconception: future trends are current capabilities.", "Students must distinguish research directions, product claims, and verified capability."]
    ],
    practice: ["請學生設計一份 agentic AI 導入路線圖：短期可做、中期需資料治理、長期研究挑戰，並標出風險。", "Ask students to design an agentic AI adoption roadmap: short-term feasible, mid-term data governance, long-term research challenges, with risks marked."],
    zhTakeaways: ["未來 agent 會更多模態、更能適應，但也更需要治理。", "AGI 願景不能取代目前系統的任務邊界與測試。", "導入策略應從低風險、高價值、可衡量場景開始。"],
    enTakeaways: ["Future agents will be more multimodal and adaptive, but need more governance.", "AGI vision does not replace current task boundaries and testing.", "Adoption should start with low-risk, high-value, measurable use cases."]
  }
};

const chapters = [
  lesson(
    1,
    "生成式 AI 基礎",
    "Fundamentals of Generative AI",
    "本章先建立共同語言：生成式 AI 如何從資料中學習模式、如何產生新內容、Transformer 與大型語言模型為何成為 agentic AI 的核心，並理解偏誤、幻覺、隱私與運算成本等限制。",
    "This chapter establishes the shared vocabulary: how generative AI learns patterns from data, creates new content, why Transformers and LLMs became central to agentic AI, and how bias, hallucination, privacy, and compute cost constrain use.",
    ["40 分鐘", "4 類生成模型", "5 個限制議題"],
    ["40 min", "4 model families", "5 limitation topics"],
    [
      ["資料分布", "模型不是背答案，而是學習資料中反覆出現的結構、關係與機率。", "Data distribution", "A model does not simply memorize answers; it learns recurring structures, relations, and probabilities."],
      ["生成機制", "VAE、GAN、自回歸模型與 Transformer 代表不同的內容生成思路。", "Generation mechanism", "VAEs, GANs, autoregressive models, and Transformers represent different approaches to generation."],
      ["語言模型", "LLM 將文字視為序列，根據上下文預測後續 token，形成回答、摘要、推理草稿。", "Language model", "LLMs treat text as sequences and predict next tokens from context to form answers, summaries, and reasoning drafts."],
      ["使用限制", "輸出可能受訓練資料、提示方式、上下文不足與安全政策影響。", "Use limits", "Outputs are shaped by training data, prompts, missing context, and safety policies."]
    ],
    [
      ["生成式 AI", "能根據已學得的資料模式產生新內容的 AI 系統，內容可包含文字、圖片、聲音、程式碼或結構化資料。", "Generative AI", "AI systems that create new content from learned data patterns, including text, images, audio, code, or structured data."],
      ["自回歸生成", "一次產生一小段輸出，並把已產生的內容放回上下文，逐步形成完整結果。", "Autoregressive generation", "Producing output piece by piece, feeding generated content back into context until a complete result emerges."],
      ["注意力機制", "模型在處理每個 token 時，會分配權重給上下文中較相關的 token。", "Attention", "When processing each token, the model assigns weight to more relevant tokens in the context."]
    ],
    [
      ["從資料看模型能力", "問學生：如果訓練資料缺少某領域案例，模型在該領域會有什麼風險？", "Start from data", "Ask students what risks appear when training data lacks examples from a domain."],
      ["比較模型類型", "用「圖片生成、文字續寫、資料壓縮」對照不同模型家族的強項。", "Compare model types", "Contrast image generation, text continuation, and data compression to clarify model strengths."],
      ["連結到 agent", "說明 LLM 為 agent 提供語言理解、任務分解、工具選擇與自我檢查的介面。", "Connect to agents", "Explain how LLMs provide interfaces for language understanding, task decomposition, tool choice, and self-checking."],
      ["建立驗證習慣", "任何生成內容都要問：來源是否可靠？是否可能缺漏？是否需要人工確認？", "Build verification habits", "For any output, ask whether the source is reliable, what may be missing, and whether human review is needed."]
    ],
    [
      ["模型不等於知識庫", "LLM 會產生看似合理的文字，但合理不等於正確；課堂上可讓學生比較模型回答與可信資料來源。", ["當題目需要即時資料或精確引用時，必須接工具或資料庫。", "當題目是概念解釋時，LLM 可先提供草稿，但仍要檢查定義。"], "A model is not a knowledge base", "An LLM can produce plausible text, but plausibility is not accuracy. Students should compare model answers with trusted sources.", ["Real-time facts or exact citations require tools or databases.", "For conceptual explanations, LLMs can draft, but definitions still need review."]],
      ["Transformer 的直覺", "把注意力想成閱讀時畫重點：回答某句話時，模型會把較高權重放在與答案最相關的字詞。", ["這不是人類理解，而是一種統計式關聯運算。", "上下文越雜，注意力可能被無關資訊稀釋。"], "Transformer intuition", "Think of attention as highlighting while reading: the model gives more weight to words most relevant to the answer.", ["This is not human understanding; it is statistical relation processing.", "Noisy context can dilute attention toward irrelevant content."]],
      ["限制要變成設計條件", "偏誤、隱私與幻覺不是章末附註，而是設計 agent 時必須內建的測試條件。", ["例如：客服 agent 不應在不確定時編造政策。", "醫療、法律、金融情境必須有更高驗證門檻。"], "Limits become design constraints", "Bias, privacy, and hallucination are not footnotes; they must become agent design tests.", ["A support agent should not invent policy when uncertain.", "Medical, legal, and financial contexts need higher verification thresholds."]]
    ],
    [
      ["課程助教", "讓模型產生一段章節摘要，再要求學生標出：哪些是定義、哪些是推論、哪些需要查證。", "Course assistant", "Have the model draft a summary, then ask students to label definitions, inferences, and claims needing verification."],
      ["研究構想", "請模型列出 5 個研究假說，再用研究方法課的標準判斷哪些可操作、可測量。", "Research ideation", "Ask the model for five hypotheses, then evaluate which are operationalizable and measurable."],
      ["程式草稿", "模型可產生函式雛形，但單元測試、資安風險與例外處理仍由工程流程把關。", "Code drafting", "A model can draft functions, but unit tests, security risks, and exception handling remain engineering work."]
    ],
    [
      ["誤解：生成式 AI 會真的理解所有內容。", "更精準的說法是：它能根據統計模式產生高度流暢的內容，但是否理解、是否正確，要靠外部驗證。", "Misconception: generative AI truly understands everything.", "More precisely, it generates fluent content from statistical patterns; understanding and correctness require external validation."],
      ["誤解：模型越大就一定越可靠。", "模型規模可能提升能力，但資料品質、任務設計、工具接入與評估流程同樣重要。", "Misconception: bigger models are always more reliable.", "Scale can improve capability, but data quality, task design, tool access, and evaluation are equally important."]
    ],
    ["比較三個生成式 AI 產出：摘要、建議、程式碼。請學生分組寫出每一類輸出最需要的驗證方法。", "Compare three generative AI outputs: summary, recommendation, and code. Ask groups to write the most important validation method for each."],
    [
      "生成式 AI 的核心是依據資料模式產生內容，而不是保證事實正確。",
      "Transformer 與注意力機制讓 LLM 能利用上下文，但仍會受提示與資料限制影響。",
      "把生成式 AI 放入 agent 系統時，必須補上工具、驗證、權限與人類覆核。"
    ],
    [
      "Generative AI creates content from data patterns; it does not guarantee factual correctness.",
      "Transformers and attention help LLMs use context, but prompts and data limits still shape behavior.",
      "When adding generative AI to agents, tools, validation, permissions, and human review are necessary."
    ],
    [
      ["哪個說法最正確？", ["LLM 等於可驗證資料庫", "生成式 AI 會依據模式產生內容，但仍需驗證", "模型輸出永遠代表最新事實", "模型越大就不會出錯"], 1, "生成內容可能很流暢，但正確性仍需要驗證。"],
      ["Transformer 中注意力機制的主要作用是什麼？", ["刪除不重要資料", "決定上下文中哪些 token 較相關", "保證回答一定正確", "讓模型連上網路"], 1, "注意力機制用權重表示上下文 token 的相對重要性。"],
      ["將 LLM 用於 agent 系統時，最應該加入什麼？", ["驗證、工具邊界與安全控制", "更多裝飾文字", "固定每次輸出長度", "移除所有紀錄"], 0, "Agent 會行動，因此需要比純聊天更強的控制與驗證。"],
      ["下列何者屬於生成式 AI 的限制？", ["資料偏誤", "幻覺", "隱私風險", "以上皆是"], 3, "偏誤、幻覺與隱私都是重要限制。"]
    ],
    [
      ["Which statement is most accurate?", ["An LLM is a verified database", "Generative AI creates content from patterns but still needs verification", "Model output is always current fact", "Bigger models never fail"], 1, "Fluent content still requires correctness checks."],
      ["What does attention mainly do in Transformers?", ["Deletes unimportant data", "Weights which context tokens are more relevant", "Guarantees truth", "Connects the model to the internet"], 1, "Attention weights represent relative contextual relevance."],
      ["What should be added when using LLMs in agent systems?", ["Validation, tool boundaries, and safety controls", "More decorative text", "Fixed output length", "Removing all logs"], 0, "Agents act, so they need stronger control than chat-only systems."],
      ["Which is a limitation of generative AI?", ["Data bias", "Hallucination", "Privacy risk", "All of the above"], 3, "All three are important limitations."]
    ]
  ),
  lesson(
    2,
    "自主型系統原理",
    "Principles of Agentic Systems",
    "本章釐清自我治理、能動性與自主性的差異，並將 agent 架構拆成感知、狀態、目標、決策與行動。學生要能判斷何時用反應式、審議式或混合式架構，以及多代理系統為何需要協調協議。",
    "This chapter distinguishes self-governance, agency, and autonomy, then decomposes agent architecture into perception, state, goals, decisions, and actions. Students learn when to use reactive, deliberative, or hybrid architectures and why multi-agent systems need coordination protocols.",
    ["45 分鐘", "3 種架構", "5 個 agent 元件"],
    ["45 min", "3 architectures", "5 agent elements"],
    [
      ["環境", "Agent 的行動不是孤立發生，而是在使用者、資料、工具與限制組成的環境中發生。", "Environment", "Agent actions happen inside an environment made of users, data, tools, and constraints."],
      ["目標", "目標定義 agent 要追求的結果，也決定如何評估成功或失敗。", "Goal", "Goals define desired outcomes and how success or failure is evaluated."],
      ["自主性", "自主性是有限邊界內的決策能力，不代表不受控制。", "Autonomy", "Autonomy is bounded decision-making, not absence of control."],
      ["協調", "多代理系統需要角色、訊息格式、交接規則與衝突處理。", "Coordination", "Multi-agent systems need roles, message formats, handoff rules, and conflict handling."]
    ],
    [
      ["能動性", "系統能主動選擇下一步，而不是只依照固定問答模式被動回應。", "Agency", "The system can choose next actions instead of passively following a fixed question-answer pattern."],
      ["自主性", "在目標、規則、權限與風險邊界內獨立做決策的能力。", "Autonomy", "The ability to make decisions within goals, rules, permissions, and risk boundaries."],
      ["混合式架構", "同時結合快速反應與長程規劃的 agent 架構。", "Hybrid architecture", "An agent architecture that combines fast reaction with longer-term planning."]
    ],
    [
      ["畫出環境邊界", "列出 agent 能讀取的資料、可使用的工具、不可碰觸的資源與需要人類批准的行動。", "Draw environment boundaries", "List readable data, usable tools, prohibited resources, and actions requiring human approval."],
      ["區分反應與規劃", "即時、低風險、規則明確的任務可用反應式；多步驟、目標導向任務需規劃。", "Separate reaction and planning", "Immediate low-risk rule-based tasks can be reactive; multi-step goal-driven tasks need planning."],
      ["設定自主等級", "把 agent 能自己完成、需確認、不可執行的行動分層。", "Set autonomy levels", "Separate what the agent may do alone, must confirm, and must never execute."],
      ["設計多代理通訊", "定義每個 agent 輸入輸出格式，避免代理之間互相丟模糊訊息。", "Design multi-agent communication", "Define each agent's input and output format to avoid vague handoffs."]
    ],
    [
      ["反應式架構", "像煞車輔助：偵測到危險就立即反應。優點是快，缺點是難處理長程依賴。", ["適合：警示、格式檢查、即時分類。", "不適合：多步驟談判、研究規劃。"], "Reactive architecture", "Like brake assistance: detect danger and respond immediately. It is fast but weak at long-term dependencies.", ["Good for alerts, format checks, and real-time classification.", "Weak for negotiation or research planning."]],
      ["審議式架構", "先建立目標與世界狀態，再搜尋可能行動。優點是可解釋，缺點是成本較高。", ["適合：旅遊規劃、排程、策略比較。", "需要：狀態表示、效用標準、停止條件。"], "Deliberative architecture", "It builds goals and world state before searching possible actions. It is explainable but more costly.", ["Good for travel planning, scheduling, and strategy comparison.", "Needs state representation, utility criteria, and stopping conditions."]],
      ["混合式架構", "真實系統常同時需要快速反應與規劃，例如客服 agent 先快速辨識意圖，再規劃查詢與回覆步驟。", ["關鍵：哪些任務交給規則，哪些交給 LLM 推理。", "要避免：每件小事都呼叫昂貴推理。"], "Hybrid architecture", "Real systems often need both reaction and planning; a support agent may classify intent quickly, then plan lookup and response.", ["Key question: what belongs to rules and what belongs to LLM reasoning.", "Avoid using expensive reasoning for every tiny action."]]
    ],
    [
      ["自動排程", "反應式模組先排除不可用時段，審議式模組再根據優先順序找最佳安排。", "Automatic scheduling", "A reactive module filters unavailable slots; a deliberative module optimizes by priority."],
      ["醫療分診", "Agent 可協助蒐集症狀與風險訊號，但高風險判斷必須交給專業人員。", "Clinical triage", "An agent can gather symptoms and risk signals, but high-risk judgment must go to professionals."],
      ["供應鏈協調", "需求、庫存與配送 agent 分工，但必須共享同一套狀態定義。", "Supply chain coordination", "Demand, inventory, and delivery agents divide work but must share state definitions."]
    ],
    [
      ["誤解：自主 agent 就是完全不需要人。", "自主性應該分級；越高風險的行動，越需要授權、紀錄與覆核。", "Misconception: autonomous agents need no humans.", "Autonomy should be tiered; higher-risk actions require permission, logging, and review."],
      ["誤解：多加幾個 agent 就會更聰明。", "如果沒有角色分工與通訊規則，多代理系統只會增加混亂。", "Misconception: more agents automatically make the system smarter.", "Without roles and communication rules, multi-agent systems increase confusion."]
    ],
    ["請學生設計一個「研究助理 agent」的自主等級表：哪些事情可自動做？哪些要先問老師？哪些永遠不能做？", "Ask students to design autonomy levels for a research assistant agent: what can it do automatically, what requires teacher approval, and what is prohibited?"],
    [
      "自主性是受目標、權限與風險邊界限制的決策能力。",
      "反應式、審議式與混合式架構各有適用情境。",
      "多代理系統的核心不是數量，而是協調規則與共享狀態。"
    ],
    [
      "Autonomy is decision-making bounded by goals, permissions, and risk.",
      "Reactive, deliberative, and hybrid architectures fit different situations.",
      "Multi-agent systems depend on coordination rules and shared state, not sheer quantity."
    ],
    [
      ["自主性的最佳定義是什麼？", ["完全不受限制", "在邊界內獨立決策", "只回覆固定句子", "不需要任何紀錄"], 1, "自主性必須被目標、權限與風險控制。"],
      ["混合式架構適合什麼任務？", ["同時需要即時反應與多步驟規劃的任務", "完全沒有狀態的任務", "只需要改字型", "不需要任何決策的任務"], 0, "混合式架構整合反應式與審議式優點。"],
      ["多代理系統最先要設計什麼？", ["角色、訊息格式與交接規則", "更多模型名稱", "更多顏色", "更長回答"], 0, "協調協議是多代理系統的骨架。"],
      ["哪個任務最適合反應式架構？", ["偵測格式錯誤並提醒", "規劃一學期研究策略", "長期投資決策", "跨部門協商"], 0, "格式錯誤偵測是即時、規則明確的反應式任務。"]
    ],
    [
      ["What is the best definition of autonomy?", ["No constraints", "Independent decisions within boundaries", "Only fixed replies", "No logging"], 1, "Autonomy must be bounded by goals, permissions, and risk."],
      ["What task fits a hybrid architecture?", ["A task needing both immediate response and multi-step planning", "A stateless task", "Changing fonts", "A task needing no decisions"], 0, "Hybrid architectures combine reactive and deliberative strengths."],
      ["What should be designed first in a multi-agent system?", ["Roles, message formats, and handoff rules", "More model names", "More colors", "Longer answers"], 0, "Coordination protocol is the skeleton of multi-agent systems."],
      ["Which task best fits a reactive architecture?", ["Detecting a format error and warning", "Planning a semester research strategy", "Long-term investment decision", "Cross-team negotiation"], 0, "Format checks are immediate and rule-clear."]
    ]
  ),
  lesson(
    3,
    "智能代理的必要元件",
    "Essential Components of Intelligent Agents",
    "本章把智能代理拆成知識表示、推理、學習、決策與規劃。學生要能看出 agent 不是單一聊天模型，而是一組把資訊轉成行動的元件系統。",
    "This chapter decomposes intelligent agents into knowledge representation, reasoning, learning, decision-making, and planning. Students should see agents not as a single chat model but as component systems that turn information into action.",
    ["45 分鐘", "5 個元件", "3 種推理"],
    ["45 min", "5 components", "3 reasoning modes"],
    [
      ["知識表示", "把任務世界轉成 agent 可操作的概念、關係、規則與狀態。", "Knowledge representation", "Turns the task world into concepts, relations, rules, and states the agent can use."],
      ["推理", "根據規則、案例或觀察形成結論。", "Reasoning", "Forms conclusions from rules, cases, or observations."],
      ["決策", "在多個可行行動中根據效用、成本與風險選擇。", "Decision-making", "Chooses among possible actions using utility, cost, and risk."],
      ["學習", "從回饋或新資料中修正策略。", "Learning", "Updates strategies from feedback or new data."]
    ],
    [
      ["演繹推理", "從一般規則推出特定結論，例如「若資料含個資，則需遮蔽」。", "Deductive reasoning", "Deriving a specific conclusion from general rules, such as masking data if it contains personal information."],
      ["歸納推理", "從多個案例整理出可能規律，例如從客服紀錄發現常見問題類型。", "Inductive reasoning", "Finding likely patterns across cases, such as common issue types in support logs."],
      ["溯因推理", "從觀察結果推測最可能原因，例如根據錯誤訊息推測系統故障點。", "Abductive reasoning", "Inferring the most likely cause from observations, such as diagnosing a failure from an error message."]
    ],
    [
      ["建立任務本體", "列出物件、關係、限制與狀態，例如使用者、任務、工具、資料來源。", "Build a task ontology", "List objects, relations, constraints, and states such as users, tasks, tools, and data sources."],
      ["決定推理類型", "規則明確用演繹，案例學習用歸納，診斷問題用溯因。", "Choose reasoning type", "Use deduction for clear rules, induction for cases, and abduction for diagnosis."],
      ["設計效用函數", "把準確度、時間、成本、風險與使用者滿意度轉成可比較標準。", "Design utility", "Translate accuracy, time, cost, risk, and satisfaction into comparable criteria."],
      ["規劃與監控", "規劃不是一次完成；agent 執行後要回看狀態是否偏離目標。", "Plan and monitor", "Planning is not one-shot; after acting, the agent checks whether state drifted from the goal."]
    ],
    [
      ["知識表示的取捨", "語意網路適合呈現關係，框架適合固定物件屬性，邏輯規則適合需要嚴格判斷的場景。", ["教學重點：沒有單一最好表示法，要看任務。", "實作上常把結構化資料、向量資料庫與 prompt 規則混合使用。"], "Trade-offs in representation", "Semantic networks show relations, frames capture object attributes, and logic rules fit strict judgment.", ["Teaching point: no representation is always best; it depends on the task.", "In practice, structured data, vector stores, and prompt rules are often combined."]],
      ["推理不是同一種能力", "學生常把推理視為單一概念；實際上演繹、歸納與溯因回答不同問題。", ["演繹問：規則套用後得到什麼？", "歸納問：案例顯示什麼趨勢？", "溯因問：哪個原因最能解釋觀察？"], "Reasoning is not one ability", "Students often treat reasoning as one thing; deduction, induction, and abduction answer different questions.", ["Deduction asks what follows from rules.", "Induction asks what trend cases suggest.", "Abduction asks what cause best explains observations."]],
      ["效用函數讓價值顯性化", "如果沒有決策標準，agent 可能只追求表面完成任務，而忽略成本、風險或公平性。", ["例如：推薦系統不能只最大化點擊率。", "教育 agent 不能只追求快速答案，也要追求理解。"], "Utility makes value explicit", "Without decision criteria, agents may optimize superficial completion while ignoring cost, risk, or fairness.", ["A recommender should not only maximize clicks.", "An education agent should optimize understanding, not just fast answers."]]
    ],
    [
      ["旅遊規劃", "知識表示保存景點、交通、預算與偏好；規劃模組排列行程；效用函數平衡時間與花費。", "Travel planning", "Representation stores places, transport, budget, and preferences; planning orders the trip; utility balances time and cost."],
      ["客服診斷", "溯因推理根據症狀找可能原因，再要求使用者提供關鍵資訊確認。", "Support diagnosis", "Abduction finds likely causes from symptoms, then asks for key information to confirm."],
      ["研究助理", "歸納推理從文獻摘要找出主題群，決策模組選出最值得深入閱讀的文獻。", "Research assistant", "Induction groups themes from abstracts; decision-making selects papers worth deeper reading."]
    ],
    [
      ["誤解：有 LLM 就不需要知識表示。", "LLM 可以處理語言，但複雜任務仍需要明確狀態、規則與資料結構。", "Misconception: LLMs remove the need for representation.", "LLMs handle language, but complex tasks still need explicit state, rules, and data structures."],
      ["誤解：規劃只是在回答前想久一點。", "規劃需要目標、可行行動、狀態轉移與停止條件，不只是輸出較長推理。", "Misconception: planning just means thinking longer.", "Planning needs goals, possible actions, state transitions, and stopping criteria; it is not merely longer reasoning."]
    ],
    ["給定一個「找文獻並產生簡報」任務，請學生列出：需要哪些知識表示？用哪種推理？效用函數包含哪些標準？", "Given a task of finding papers and creating slides, ask students to list needed representation, reasoning type, and utility criteria."],
    [
      "智能代理由知識、推理、學習、決策與規劃組成。",
      "不同推理類型回答不同問題，不能混為一談。",
      "效用函數與規劃讓 agent 的行動選擇可被討論與測試。"
    ],
    [
      "Intelligent agents combine knowledge, reasoning, learning, decision-making, and planning.",
      "Different reasoning types answer different questions and should not be conflated.",
      "Utility and planning make agent action choices discussable and testable."
    ],
    [
      ["從錯誤訊息推測最可能故障原因屬於哪種推理？", ["演繹", "歸納", "溯因", "隨機"], 2, "溯因推理尋找最能解釋觀察的原因。"],
      ["效用函數的作用是什麼？", ["把價值標準轉為可比較依據", "讓模型變大", "刪除資料", "取消規劃"], 0, "效用函數讓 agent 能比較行動結果。"],
      ["知識表示主要解決什麼問題？", ["把世界資訊轉成可操作結構", "讓版面更漂亮", "縮短所有回答", "自動登入"], 0, "知識表示讓 agent 能使用規則、關係與狀態。"],
      ["若任務需要嚴格遵守法規，哪種表示最有用？", ["邏輯規則", "隨機文字", "純裝飾圖", "無結構記憶"], 0, "邏輯規則適合明確約束與判斷。"]
    ],
    [
      ["Inferring the most likely cause from an error message is what reasoning?", ["Deduction", "Induction", "Abduction", "Randomness"], 2, "Abduction searches for the cause that best explains observations."],
      ["What does a utility function do?", ["Turns values into comparable criteria", "Makes a model bigger", "Deletes data", "Cancels planning"], 0, "Utility lets agents compare action outcomes."],
      ["What problem does knowledge representation solve?", ["Turning world information into usable structure", "Making layouts prettier", "Shortening all answers", "Automatic login"], 0, "Representation lets agents use rules, relations, and state."],
      ["If a task must strictly follow regulations, which representation helps most?", ["Logic rules", "Random text", "Decorative images", "Unstructured memory"], 0, "Logic rules fit explicit constraints and judgments."]
    ]
  ),
  compactLesson(4, "反思與內省：讓 Agent 檢查自己的推理", "Reflection and Introspection in Agents", "reflection", "meta-reasoning", "self-explanation"),
  compactLesson(5, "工具使用與規劃：讓 Agent 從回答走向行動", "Enabling Tool Use and Planning in Agents", "tool use", "function calling", "planning"),
  compactLesson(6, "協調者、工作者與委派者：多角色協作模式", "Coordinator, Worker, and Delegator Approach", "coordination", "worker roles", "delegation"),
  compactLesson(7, "有效的 Agentic System 設計技巧", "Effective Agentic System Design Techniques", "system prompts", "state space", "memory architecture"),
  compactLesson(8, "建立信任：透明、解釋與不確定性管理", "Building Trust in Generative AI Systems", "trust", "explainability", "uncertainty"),
  compactLesson(9, "安全與倫理：風險、隱私與責任", "Managing Safety and Ethical Considerations", "safety", "privacy", "accountability"),
  compactLesson(10, "常見應用：創作、對話、機器人與決策支援", "Common Use Cases and Applications", "applications", "workflow fit", "domain risk"),
  compactLesson(11, "總結與未來展望：多模態、AGI 與產業機會", "Conclusion and Future Outlook", "future trends", "multimodal agents", "AGI boundaries")
];

function compactLesson(id, zhTitle, enTitle, keyA, keyB, keyC) {
  const profile = compactProfiles[id];
  const zhFocus = zhTitle.split("：")[0];
  return lesson(
    id,
    zhTitle,
    enTitle,
    profile.zhLead,
    profile.enLead,
    ["45 分鐘", "4 個設計面向", "4 題章末測驗"],
    ["45 min", "4 design dimensions", "4 quiz questions"],
    [
      ["任務", `先界定 ${zhFocus} 要改善哪個任務結果。`, "Task", `Define which task outcome ${enTitle.toLowerCase()} should improve.`],
      ["機制", `把 ${keyA} 與 ${keyB} 拆成可觀察步驟。`, "Mechanism", `Break ${keyA} and ${keyB} into observable steps.`],
      ["控制", "用權限、紀錄、評估與人類覆核避免錯誤擴大。", "Control", "Use permissions, logging, evaluation, and human review to prevent error amplification."],
      ["迭代", "根據測試案例與學生回饋修正 prompt、工具與流程。", "Iteration", "Revise prompts, tools, and workflows from test cases and student feedback."]
    ],
    [
      [keyA, `本章中的 ${keyA} 指 agent 在完成任務時需要被設計、觀察與評估的能力。`, keyA, `${keyA} is a capability that must be designed, observed, and evaluated in an agent task.`],
      [keyB, `${keyB} 是把抽象能力落地為流程、工具或角色分工的方法。`, keyB, `${keyB} turns abstract capability into workflow, tool use, or role division.`],
      ["治理邊界", "明確規定 agent 可以做什麼、不能做什麼、何時要停下來請人類決定。", "Governance boundary", "Defines what the agent may do, may not do, and when it must stop for human decision."]
    ],
    [
      ["定義情境", "寫出使用者、任務、輸入、輸出、失敗成本與成功標準。", "Define the context", "Write the user, task, input, output, failure cost, and success criteria."],
      ["拆解流程", `將 ${keyA}、${keyB}、${keyC} 拆成可以紀錄與測試的小步驟。`, "Decompose the workflow", `Break ${keyA}, ${keyB}, and ${keyC} into loggable and testable steps.`],
      ["加入檢查點", "在工具呼叫、外部輸出、高風險判斷前加入確認與回滾設計。", "Add checkpoints", "Add confirmation and rollback before tool calls, external output, and high-risk judgment."],
      ["用案例驗證", "用正常案例、邊界案例、錯誤案例測試 agent 是否穩定。", "Validate with cases", "Test stability with normal, edge, and failure cases."]
    ],
    profile.modules,
    profile.examples,
    profile.misconceptions,
    profile.practice,
    profile.zhTakeaways,
    profile.enTakeaways,
    [
      [`學習「${zhTitle}」時，第一步應該做什麼？`, ["定義任務與成功標準", "直接增加 agent 數量", "刪除紀錄", "只看 demo"], 0, "任務與成功標準清楚，才能判斷設計是否有效。"],
      [`為什麼 ${keyB} 需要檢查點？`, ["它可能放大錯誤或造成外部影響", "它只影響字型", "它不會失敗", "它不需要紀錄"], 0, "越接近行動的能力越需要控制點。"],
      ["好的課堂測試案例應包含什麼？", ["正常、邊界與失敗案例", "只有成功案例", "只有漂亮截圖", "只有模型名稱"], 0, "多種案例能暴露系統穩定性。"],
      ["高風險行動前最需要什麼？", ["授權、驗證與人類覆核", "更長文字", "更多顏色", "關閉日誌"], 0, "高風險行動要保留控制與責任。"]
    ],
    [
      [`What is the first step when learning ${enTitle}?`, ["Define task and success criteria", "Add more agents immediately", "Delete logs", "Only watch demos"], 0, "Clear criteria let us judge design effectiveness."],
      [`Why does ${keyB} need checkpoints?`, ["It can amplify errors or affect the outside world", "It only changes fonts", "It never fails", "It needs no logs"], 0, "Action-oriented capabilities need control points."],
      ["What should good classroom test cases include?", ["Normal, edge, and failure cases", "Only success cases", "Only pretty screenshots", "Only model names"], 0, "Multiple cases reveal stability."],
      ["What is most needed before high-risk actions?", ["Authorization, validation, and human review", "Longer text", "More colors", "Disabled logs"], 0, "High-risk action requires control and accountability."]
    ]
  );
}

function lesson(id, zhTitle, enTitle, zhLead, enLead, zhStats, enStats, mapRows, definitions, steps, modules, examples, misconceptions, practice, zhTakeaways, enTakeaways, zhQuiz, enQuiz) {
  return {
    id,
    zh: {
      title: zhTitle,
      lead: zhLead,
      stats: zhStats,
      map: mapRows.map(([zhName, zhText]) => [zhName, zhText]),
      definitions: definitions.map(([zhName, zhText]) => [zhName, zhText]),
      steps: steps.map(([zhName, zhText]) => [zhName, zhText]),
      modules: modules.map(([zhTitle, zhText, zhBullets]) => ({ title: zhTitle, text: zhText, bullets: zhBullets })),
      examples: examples.map(([zhIcon, zhName, zhText]) => [zhIcon, zhName, zhText]),
      misconceptions: misconceptions.map(([zhName, zhText]) => [zhName, zhText]),
      practice: practice[0],
      takeaways: zhTakeaways,
      quiz: zhQuiz
    },
    en: {
      title: enTitle,
      lead: enLead,
      stats: enStats,
      map: mapRows.map(([, , enName, enText]) => [enName, enText]),
      definitions: definitions.map(([, , enName, enText]) => [enName, enText]),
      steps: steps.map(([, , enName, enText]) => [enName, enText]),
      modules: modules.map(([, , , enTitle, enText, enBullets]) => ({ title: enTitle, text: enText, bullets: enBullets })),
      examples: examples.map(([icon, , , enName, enText]) => [icon, enName, enText]),
      misconceptions: misconceptions.map(([, , enName, enText]) => [enName, enText]),
      practice: practice[1],
      takeaways: enTakeaways,
      quiz: enQuiz
    }
  };
}

let lang = "zh";
let activeChapter = 1;
let quizOrder = [];
let quizIndex = 0;
let score = 0;
const completed = new Set();

const els = {
  nav: document.getElementById("chapterNav"),
  title: document.getElementById("chapterTitle"),
  lead: document.getElementById("chapterLead"),
  partLabel: document.getElementById("partLabel"),
  stats: document.getElementById("statsRow"),
  map: document.getElementById("conceptMap"),
  modules: document.getElementById("modules"),
  definitions: document.getElementById("definitions"),
  steps: document.getElementById("steps"),
  examples: document.getElementById("examples"),
  misconceptions: document.getElementById("misconceptions"),
  practice: document.getElementById("practiceBox"),
  takeaways: document.getElementById("takeaways"),
  quizQuestion: document.getElementById("quizQuestion"),
  quizOptions: document.getElementById("quizOptions"),
  quizResult: document.getElementById("quizResult"),
  quizProgress: document.getElementById("quizProgress"),
  nextQuiz: document.getElementById("nextQuiz"),
  resetQuiz: document.getElementById("resetQuiz"),
  referenceText: document.getElementById("referenceText"),
  progressText: document.getElementById("progressText"),
  progressBar: document.getElementById("progressBar"),
  sidebar: document.querySelector(".sidebar")
};

function t(key) {
  return ui[lang][key];
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function renderStaticText() {
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.getElementById("zhButton").classList.toggle("active", lang === "zh");
  document.getElementById("enButton").classList.toggle("active", lang === "en");
  els.referenceText.textContent = t("referenceText");
}

function partForChapter(id) {
  return parts.find((part) => part.chapters.includes(id));
}

function renderNav() {
  els.nav.innerHTML = "";
  parts.forEach((part) => {
    const partTitle = document.createElement("div");
    partTitle.className = "part-title";
    partTitle.innerHTML = `<span class="part-dot"></span><span>${esc(part[lang])}</span>`;
    els.nav.appendChild(partTitle);

    part.chapters.forEach((id) => {
      const chapter = chapters.find((item) => item.id === id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `chapter-button ${activeChapter === id ? "active" : ""} ${completed.has(id) ? "done" : ""}`;
      button.innerHTML = `
        <strong>${id}.</strong>
        <span>${esc(chapter[lang].title)}<small>${esc(chapter.en.title)}</small></span>
        <span class="chapter-status" aria-hidden="true"></span>
      `;
      button.addEventListener("click", () => {
        activeChapter = id;
        startQuiz();
        render();
        els.sidebar.classList.remove("open");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      els.nav.appendChild(button);
    });
  });
}

function renderChapter() {
  const chapter = chapters.find((item) => item.id === activeChapter);
  const content = chapter[lang];
  els.partLabel.textContent = partForChapter(activeChapter)[lang];
  els.title.textContent = content.title;
  els.lead.textContent = content.lead;

  els.stats.innerHTML = content.stats
    .map((stat, index) => `<div class="stat"><svg viewBox="0 0 24 24">${statIcon(index)}</svg><div><strong>${esc(stat)}</strong><span>${index === 0 ? "Time" : index === 1 ? "Focus" : "Scope"}</span></div></div>`)
    .join("");

  els.map.innerHTML = content.map
    .map(([name, text]) => `<div class="concept-node"><strong>${esc(name)}</strong><p>${esc(text)}</p></div>`)
    .join("");

  els.modules.innerHTML = content.modules
    .map((module, index) => `
      <article class="module-card">
        <strong>${lang === "zh" ? "主題" : "Module"} ${index + 1}</strong>
        <div>
          <h3>${esc(module.title)}</h3>
          <p>${esc(module.text)}</p>
          <ul>${module.bullets.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
      </article>
    `)
    .join("");

  els.definitions.innerHTML = content.definitions
    .map(([name, text]) => `<div class="definition-item"><strong>${esc(name)}</strong><p>${esc(text)}</p></div>`)
    .join("");

  els.steps.innerHTML = content.steps
    .map(([name, text]) => `<li><strong>${esc(name)}</strong><p>${esc(text)}</p></li>`)
    .join("");

  els.examples.innerHTML = content.examples
    .map(([icon, name, text]) => `<article class="example-card"><div class="example-icon">${esc(icon)}</div><h3>${esc(name)}</h3><p>${esc(text)}</p></article>`)
    .join("");

  els.misconceptions.innerHTML = content.misconceptions
    .map(([name, text]) => `<div class="misconception-item"><strong>${esc(name)}</strong><p>${esc(text)}</p></div>`)
    .join("");

  els.practice.innerHTML = `<strong>${lang === "zh" ? "活動任務" : "Activity"}</strong><p>${esc(content.practice)}</p>`;
  els.takeaways.innerHTML = content.takeaways.map((item) => `<li>${esc(item)}</li>`).join("");
}

function statIcon(index) {
  const icons = [
    '<path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="9"/>',
    '<path d="M4 19.5V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2Z"/><path d="M8 7h6M8 11h8"/>',
    '<path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2Z"/>'
  ];
  return icons[index] || icons[0];
}

function shuffledIndexes(length) {
  return Array.from({ length }, (_, i) => i).sort(() => Math.random() - 0.5);
}

function startQuiz() {
  const qLength = chapters.find((item) => item.id === activeChapter)[lang].quiz.length;
  quizOrder = shuffledIndexes(qLength);
  quizIndex = 0;
  score = 0;
}

function renderQuiz() {
  const chapter = chapters.find((item) => item.id === activeChapter);
  const quiz = chapter[lang].quiz;
  const isDone = quizIndex >= quizOrder.length;

  if (isDone) {
    completed.add(activeChapter);
    els.quizProgress.textContent = `${quiz.length} / ${quiz.length}`;
    els.quizQuestion.textContent = `${t("completed")}：${score} / ${quiz.length}`;
    els.quizOptions.innerHTML = "";
    els.quizResult.hidden = false;
    els.quizResult.textContent = `${t("score")}：${score} / ${quiz.length}`;
    els.nextQuiz.disabled = true;
    updateProgress();
    renderNav();
    return;
  }

  const current = quiz[quizOrder[quizIndex]];
  els.quizProgress.textContent = `${quizIndex + 1} / ${quiz.length}`;
  els.quizQuestion.textContent = current[0];
  els.quizResult.hidden = true;
  els.quizResult.textContent = "";
  els.nextQuiz.disabled = true;
  els.quizOptions.innerHTML = current[1]
    .map(
      (option, index) =>
        `<button class="option-button" type="button" data-index="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${esc(option)}</span></button>`
    )
    .join("");

  els.quizOptions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.index)));
  });
}

function answerQuestion(answer) {
  const quiz = chapters.find((item) => item.id === activeChapter)[lang].quiz;
  const current = quiz[quizOrder[quizIndex]];
  const correct = current[2];
  els.quizOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    const index = Number(button.dataset.index);
    if (index === correct) button.classList.add("correct");
    if (index === answer && index !== correct) button.classList.add("incorrect");
  });
  if (answer === correct) score += 1;
  els.quizResult.hidden = false;
  els.quizResult.textContent = `${answer === correct ? t("correct") : t("incorrect")}。${current[3]} ${t("score")}：${score} / ${quiz.length}`;
  els.nextQuiz.disabled = false;
}

function updateProgress() {
  const pct = Math.round((completed.size / chapters.length) * 100);
  els.progressText.textContent = `${pct}%`;
  els.progressBar.style.width = `${pct}%`;
}

function render() {
  renderStaticText();
  renderNav();
  renderChapter();
  renderQuiz();
  updateProgress();
}

document.getElementById("zhButton").addEventListener("click", () => {
  lang = "zh";
  startQuiz();
  render();
});

document.getElementById("enButton").addEventListener("click", () => {
  lang = "en";
  startQuiz();
  render();
});

els.nextQuiz.addEventListener("click", () => {
  quizIndex += 1;
  renderQuiz();
});

els.resetQuiz.addEventListener("click", () => {
  startQuiz();
  renderQuiz();
});

document.getElementById("menuButton").addEventListener("click", () => {
  els.sidebar.classList.toggle("open");
});

startQuiz();
render();
