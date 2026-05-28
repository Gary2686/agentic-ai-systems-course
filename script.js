const ui = {
  zh: {
    brandSub: "互動式雙語教材",
    referenceNav: "參考來源與版權",
    progress: "學習進度",
    conceptMap: "概念圖",
    conceptMapSub: "Concept Map",
    definitions: "核心定義",
    definitionsSub: "Key Definitions",
    steps: "學習步驟",
    stepsSub: "Learning Steps",
    examples: "容易吸收的例子",
    examplesSub: "Examples",
    takeaways: "章節重點",
    takeawaysSub: "Takeaways",
    referenceTitle: "參考來源與版權",
    quizTitle: "章末小測驗",
    quizSub: "Random single-choice quiz",
    nextQuestion: "下一題",
    resetQuiz: "重新測驗",
    correct: "答對了",
    incorrect: "再想一下",
    score: "目前分數",
    completed: "本章測驗完成",
    referenceText:
      "本網站為《Building Agentic AI Systems: Create intelligent, autonomous AI agents that can reason, plan, and adapt》（Anjanava Biswas, Wrick Talukdar）之教學導讀與課程 companion，內容以原創整理、教學改寫、課堂範例與測驗設計呈現，並非原書全文重製。網頁教材版權所有 © 葉欲禾（Gary Yu-Ho Yeh）。"
  },
  en: {
    brandSub: "Interactive bilingual course",
    referenceNav: "Reference & Copyright",
    progress: "Progress",
    conceptMap: "Concept Map",
    conceptMapSub: "概念圖",
    definitions: "Key Definitions",
    definitionsSub: "核心定義",
    steps: "Learning Steps",
    stepsSub: "學習步驟",
    examples: "Examples",
    examplesSub: "容易吸收的例子",
    takeaways: "Takeaways",
    takeawaysSub: "章節重點",
    referenceTitle: "Reference & Copyright",
    quizTitle: "Chapter Quiz",
    quizSub: "隨機單選題",
    nextQuestion: "Next Question",
    resetQuiz: "Restart Quiz",
    correct: "Correct",
    incorrect: "Not quite",
    score: "Current score",
    completed: "Chapter quiz completed",
    referenceText:
      "This website is an instructional course companion inspired by Building Agentic AI Systems: Create intelligent, autonomous AI agents that can reason, plan, and adapt by Anjanava Biswas and Wrick Talukdar. It uses original explanations, teaching examples, diagrams, and quizzes, and does not reproduce the full book text. Web course copyright © Gary Yu-Ho Yeh."
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

const chapters = [
  {
    id: 1,
    zh: {
      title: "生成式 AI 基礎",
      lead:
        "本章建立生成式 AI 的共同語言：模型如何產生內容、Transformer 與大型語言模型為何重要，以及這些能力如何成為智能代理的推理與溝通核心。",
      stats: ["25 分鐘", "4 個模型族群", "5 個限制議題"],
      map: [
        ["資料", "模型從資料分布中學習文字、影像、聲音或程式碼的模式。"],
        ["模型", "VAE、GAN、自回歸模型與 Transformer 代表不同的生成方式。"],
        ["生成", "模型根據提示與上下文產出新內容，而不是只查詢既有答案。"],
        ["限制", "偏誤、隱私、成本、幻覺與倫理限制會影響可靠性。"]
      ],
      definitions: [
        ["生成式 AI", "能根據學習到的模式產生新內容的 AI 系統，例如文字、圖片、音樂或程式碼。"],
        ["Transformer", "以注意力機制處理序列資料的模型架構，讓 LLM 能在大量上下文中捕捉關聯。"],
        ["AI Agent", "能感知任務情境、推理、規劃並採取行動的系統；LLM 常作為其語言與推理核心。"]
      ],
      steps: [
        ["辨識輸入與輸出", "先問：模型接收什麼形式的提示？要產生什麼形式的結果？"],
        ["理解模型家族", "比較 VAE、GAN、自回歸模型與 Transformer 的生成邏輯。"],
        ["連到 Agent", "思考 LLM 如何讓 agent 具備對話、工具選擇與任務分解能力。"],
        ["檢查限制", "任何生成結果都要評估資料品質、偏誤、隱私與可信度。"]
      ],
      examples: [
        ["✍", "課程助教", "LLM 可根據教材產生摘要與測驗，但教師仍需檢查是否扭曲概念。"],
        ["🧪", "研究構想產生器", "研究者可要求模型列出假說，再用方法論與文獻檢驗可行性。"],
        ["💻", "程式碼草稿", "模型能生成函式雛形；測試、資安與邊界條件仍需工程驗證。"]
      ],
      takeaways: [
        "生成式 AI 的價值不只在產出內容，也在於能成為 agent 的推理介面。",
        "Transformer 讓模型能以注意力機制處理長距離語意關係。",
        "生成能力必須搭配人類審查、測試與安全設計。"
      ],
      quiz: [
        ["哪一項最能描述生成式 AI？", ["只能分類資料", "能依據學習到的模式產生新內容", "只能搜尋網頁", "只能執行數值運算"], 1, "生成式 AI 的核心是產生新內容，而不是只做分類或搜尋。"],
        ["Transformer 的關鍵能力來自哪個機制？", ["注意力機制", "硬碟快取", "隨機排序", "手動規則表"], 0, "注意力機制讓模型能評估不同 token 之間的關聯。"],
        ["把 LLM 放進 agent 系統時，最需要補強的是什麼？", ["螢幕亮度", "驗證、工具邊界與安全控制", "更多字型", "更長檔名"], 1, "LLM 的輸出需要被驗證，工具使用也要有明確權限。"]
      ]
    },
    en: {
      title: "Fundamentals of Generative AI",
      lead:
        "This chapter builds a shared vocabulary for generative AI: how models create content, why Transformers and LLMs matter, and how these capabilities become the reasoning and communication core of agents.",
      stats: ["25 min", "4 model families", "5 limitation topics"],
      map: [
        ["Data", "Models learn patterns from distributions of text, images, audio, or code."],
        ["Model", "VAEs, GANs, autoregressive models, and Transformers generate in different ways."],
        ["Generation", "The model creates new output from prompts and context instead of only retrieving answers."],
        ["Limits", "Bias, privacy, cost, hallucination, and ethics shape reliability."]
      ],
      definitions: [
        ["Generative AI", "AI systems that create new content such as text, images, music, or code from learned patterns."],
        ["Transformer", "A sequence model architecture based on attention, enabling LLMs to track relationships across context."],
        ["AI Agent", "A system that perceives a task context, reasons, plans, and acts; LLMs often serve as its language and reasoning core."]
      ],
      steps: [
        ["Identify input and output", "Ask what the model receives and what result it must produce."],
        ["Compare model families", "Contrast VAEs, GANs, autoregressive models, and Transformers."],
        ["Connect to agents", "Explain how LLMs support dialogue, tool choice, and task decomposition."],
        ["Check limitations", "Assess data quality, bias, privacy, and trust for every generated result."]
      ],
      examples: [
        ["✍", "Course assistant", "An LLM can draft summaries and quizzes, while the teacher checks conceptual accuracy."],
        ["🧪", "Research ideation", "A researcher asks for hypotheses, then validates them against methods and literature."],
        ["💻", "Code drafting", "The model drafts a function; tests, security, and edge cases remain engineering work."]
      ],
      takeaways: [
        "Generative AI matters not only for content creation but also as an agent reasoning interface.",
        "Transformers use attention to model long-range semantic relationships.",
        "Generation must be paired with review, testing, and safety design."
      ],
      quiz: [
        ["Which best describes generative AI?", ["It only classifies data", "It creates new content from learned patterns", "It only searches the web", "It only performs arithmetic"], 1, "The core of generative AI is creating new content."],
        ["What mechanism is central to Transformers?", ["Attention", "Disk caching", "Random sorting", "Manual rule tables"], 0, "Attention lets the model weigh relationships among tokens."],
        ["What should be added when using an LLM inside an agent?", ["Screen brightness", "Validation, tool boundaries, and safety controls", "More fonts", "Longer file names"], 1, "LLM output needs validation and tool use needs permissions."]
      ]
    }
  },
  {
    id: 2,
    zh: {
      title: "自主型系統原理",
      lead:
        "本章說明自我治理、能動性與自主性的差異，並介紹反應式、審議式與混合式 agent 架構，以及多代理系統如何協調互動。",
      stats: ["30 分鐘", "3 種架構", "2 種協作層次"],
      map: [
        ["感知", "Agent 從環境或使用者取得狀態與目標。"],
        ["能動性", "系統不只是回應，也能主動選擇下一步。"],
        ["自主性", "在規則與目標邊界內獨立做決策。"],
        ["協作", "多個 agent 透過通訊、分工與協商完成複雜任務。"]
      ],
      definitions: [
        ["自我治理", "系統根據內部規則、政策或目標調整自身行為。"],
        ["能動性", "系統具有發起行動、選擇行動並追求目標的能力。"],
        ["多代理系統", "多個具角色或能力差異的 agent 透過互動共同解題。"]
      ],
      steps: [
        ["界定環境", "確認 agent 可以看見哪些狀態、事件與限制。"],
        ["定義目標", "把任務成功條件寫成可評估的結果。"],
        ["選擇架構", "反應式適合即時反應，審議式適合長程規劃，混合式兼顧兩者。"],
        ["設計互動", "多代理系統要明確定義訊息格式、交接點與衝突處理。"]
      ],
      examples: [
        ["🚗", "自動駕駛輔助", "反應式模組處理煞車，審議式模組規劃路線。"],
        ["🏥", "醫療分診 agent", "一個 agent 收集症狀，另一個檢查風險規則，最後交由醫師判斷。"],
        ["📦", "供應鏈協調", "需求預測、庫存與配送 agent 共享狀態以降低缺貨。"]
      ],
      takeaways: [
        "自主不等於無限制，好的 agent 必須在明確邊界內行動。",
        "架構選擇要依任務是否需要即時反應、規劃或兩者兼具。",
        "多代理系統的關鍵是互動協議，而不是單純增加 agent 數量。"
      ],
      quiz: [
        ["自主性最精準的意思是什麼？", ["完全不受限制", "在目標與規則邊界內獨立決策", "只照腳本回覆", "只能等待人類指令"], 1, "自主性需要決策能力，但仍受目標、政策與安全邊界限制。"],
        ["哪種架構最適合結合即時反應與長程規劃？", ["混合式架構", "只用表格", "單一反應式規則", "完全離線架構"], 0, "混合式架構整合反應式與審議式優點。"],
        ["多代理系統最需要先設計什麼？", ["代理之間的通訊與協調規則", "更多顏色", "更長輸出", "固定字數"], 0, "沒有協調規則，代理增加反而可能造成混亂。"]
      ]
    },
    en: {
      title: "Principles of Agentic Systems",
      lead:
        "This chapter distinguishes self-governance, agency, and autonomy, then introduces reactive, deliberative, and hybrid agent architectures plus coordination in multi-agent systems.",
      stats: ["30 min", "3 architectures", "2 collaboration levels"],
      map: [
        ["Perception", "Agents obtain state and goals from environments or users."],
        ["Agency", "The system can initiate and choose next actions, not only respond."],
        ["Autonomy", "The system makes decisions within goals, rules, and constraints."],
        ["Collaboration", "Multiple agents communicate, divide work, and negotiate tasks."]
      ],
      definitions: [
        ["Self-governance", "A system adjusts behavior according to internal rules, policies, or goals."],
        ["Agency", "The ability to initiate actions, choose actions, and pursue goals."],
        ["Multi-agent system", "Multiple agents with different roles or capabilities interact to solve problems."]
      ],
      steps: [
        ["Define the environment", "Clarify visible states, events, and constraints."],
        ["Define goals", "Write success conditions as evaluable outcomes."],
        ["Choose an architecture", "Reactive for immediate response, deliberative for planning, hybrid for both."],
        ["Design interaction", "Specify message formats, handoffs, and conflict handling."]
      ],
      examples: [
        ["🚗", "Driving assistance", "Reactive modules brake quickly while deliberative modules plan the route."],
        ["🏥", "Clinical triage", "One agent collects symptoms, another checks risk rules, and a clinician decides."],
        ["📦", "Supply chain coordination", "Demand, inventory, and delivery agents share state to reduce stockouts."]
      ],
      takeaways: [
        "Autonomy is bounded decision-making, not unrestricted behavior.",
        "Architecture depends on whether the task needs reaction, planning, or both.",
        "Multi-agent systems rely on protocols, not just more agents."
      ],
      quiz: [
        ["What does autonomy mean in agent design?", ["No limits at all", "Independent decisions within goals and rules", "Only scripted replies", "Waiting for human commands"], 1, "Autonomy is bounded by goals, policy, and safety constraints."],
        ["Which architecture combines fast response and planning?", ["Hybrid architecture", "A table only", "A single reactive rule", "Fully offline architecture"], 0, "Hybrid designs combine reactive and deliberative strengths."],
        ["What should be designed first for multi-agent systems?", ["Communication and coordination rules", "More colors", "Longer output", "Fixed word counts"], 0, "Without coordination, extra agents add confusion."]
      ]
    }
  },
  {
    id: 3,
    zh: {
      title: "智能代理的必要元件",
      lead:
        "本章把 agent 拆成知識表示、推理、學習、決策與規劃五個元件，讓學生能看懂 agent 不只是聊天模型，而是一組可組合的認知與行動能力。",
      stats: ["35 分鐘", "5 個元件", "3 種推理"],
      map: [
        ["知識", "用語意網路、框架或邏輯表示世界。"],
        ["推理", "演繹、歸納與溯因支援不同類型判斷。"],
        ["學習", "從資料、互動或回饋中調整策略。"],
        ["規劃", "在目標、成本與限制下選擇行動序列。"]
      ],
      definitions: [
        ["知識表示", "把世界、規則、物件與關係轉成 agent 可操作的結構。"],
        ["效用函數", "把不同結果轉成可比較的價值，用來選擇較佳行動。"],
        ["規劃演算法", "搜尋可達成目標的一連串行動，例如任務分解或路徑規劃。"]
      ],
      steps: [
        ["列出任務知識", "找出必要概念、關係、規則與資料來源。"],
        ["選擇推理方式", "已知規則用演繹，從樣本找趨勢用歸納，找最佳解釋用溯因。"],
        ["定義決策標準", "把準確度、成本、時間、風險轉成可比較的分數。"],
        ["加入學習迴路", "用使用者回饋、測試結果或環境變化更新 agent。"]
      ],
      examples: [
        ["🧭", "旅遊規劃", "知識表示保存地點與限制，效用函數平衡預算、時間與偏好。"],
        ["🔎", "客服診斷", "溯因推理根據症狀推測最可能問題，再要求更多資訊確認。"],
        ["📈", "投資輔助", "規劃模組比較策略，但風險邊界必須由人類與政策設定。"]
      ],
      takeaways: [
        "Agent 的能力來自元件組合，不只是單一模型能力。",
        "不同推理方式適合不同問題型態。",
        "決策必須把價值、成本與風險明確化。"
      ],
      quiz: [
        ["從症狀推測最可能原因屬於哪種推理？", ["溯因推理", "字型推理", "壓縮推理", "排序推理"], 0, "溯因推理是在可能解釋中尋找最合理者。"],
        ["效用函數的目的為何？", ["比較不同行動或結果的價值", "改變螢幕解析度", "隱藏錯誤", "刪除資料"], 0, "效用函數讓 agent 能根據價值做選擇。"],
        ["知識表示主要在做什麼？", ["把世界資訊轉成可操作結構", "增加動畫", "縮短標題", "產生密碼"], 0, "知識表示讓 agent 能理解關係、規則與狀態。"]
      ]
    },
    en: {
      title: "Essential Components of Intelligent Agents",
      lead:
        "This chapter decomposes agents into knowledge representation, reasoning, learning, decision-making, and planning so students see agents as composable cognitive and action capabilities.",
      stats: ["35 min", "5 components", "3 reasoning modes"],
      map: [
        ["Knowledge", "Represent the world with semantic networks, frames, or logic."],
        ["Reasoning", "Deduction, induction, and abduction support different judgments."],
        ["Learning", "Update strategy from data, interaction, or feedback."],
        ["Planning", "Choose action sequences under goals, costs, and constraints."]
      ],
      definitions: [
        ["Knowledge representation", "Encoding the world, rules, objects, and relations into structures agents can use."],
        ["Utility function", "A way to compare outcomes by converting them into values."],
        ["Planning algorithm", "A method that searches for a sequence of actions to reach a goal."]
      ],
      steps: [
        ["List task knowledge", "Identify concepts, relations, rules, and data sources."],
        ["Choose reasoning mode", "Use deduction for rules, induction for patterns, and abduction for likely explanations."],
        ["Define decision criteria", "Turn accuracy, cost, time, and risk into comparable scores."],
        ["Add a learning loop", "Update the agent from feedback, tests, or environmental change."]
      ],
      examples: [
        ["🧭", "Travel planning", "Knowledge stores places and constraints; utility balances budget, time, and preference."],
        ["🔎", "Support diagnosis", "Abduction infers likely issues from symptoms, then asks confirming questions."],
        ["📈", "Investment support", "Planning compares strategies, while risk boundaries remain human-governed."]
      ],
      takeaways: [
        "Agent capability comes from component composition, not just one model.",
        "Different reasoning modes fit different problems.",
        "Decision-making must make value, cost, and risk explicit."
      ],
      quiz: [
        ["Inferring the likely cause from symptoms is which reasoning type?", ["Abductive reasoning", "Font reasoning", "Compression reasoning", "Sorting reasoning"], 0, "Abduction searches for the most plausible explanation."],
        ["What is a utility function for?", ["Comparing the value of actions or outcomes", "Changing screen resolution", "Hiding errors", "Deleting data"], 0, "Utility functions support value-based choices."],
        ["What does knowledge representation do?", ["Turns world information into usable structures", "Adds animation", "Shortens titles", "Creates passwords"], 0, "It encodes relations, rules, and states."]
      ]
    }
  }
];

const remaining = [
  ["Reflection and Introspection in Agents", "反思與內省：讓 Agent 檢查自己的推理", ["reflection", "introspection", "meta-reasoning", "self-explanation"]],
  ["Enabling Tool Use and Planning in Agents", "工具使用與規劃：讓 Agent 從回答走向行動", ["tools", "function calling", "planning", "LangGraph"]],
  ["Coordinator, Worker, and Delegator Approach", "協調者、工作者與委派者：多角色協作模式", ["coordinator", "worker", "delegator", "handoff"]],
  ["Effective Agentic System Design Techniques", "有效的 Agentic System 設計技巧", ["prompts", "state space", "memory", "workflow"]],
  ["Building Trust in Generative AI Systems", "建立信任：透明、解釋與不確定性管理", ["trust", "explainability", "uncertainty", "consent"]],
  ["Managing Safety and Ethical Considerations", "安全與倫理：風險、隱私與責任", ["safety", "ethics", "privacy", "misinformation"]],
  ["Common Use Cases and Applications", "常見應用：創作、對話、機器人與決策支援", ["creative", "conversation", "robotics", "decision support"]],
  ["Conclusion and Future Outlook", "總結與未來展望：多模態、AGI 與產業機會", ["future", "multimodal", "AGI", "opportunities"]]
];

remaining.forEach((item, index) => {
  const id = index + 4;
  const [enTitle, zhTitle, keys] = item;
  chapters.push({
    id,
    zh: makeChapterZh(id, zhTitle, keys),
    en: makeChapterEn(id, enTitle, keys)
  });
});

function makeChapterZh(id, title, keys) {
  return {
    title,
    lead: `本章聚焦 ${title.split("：")[0]}。學生會學到如何把 ${keys
      .slice(0, 3)
      .join("、")} 轉化為可設計、可測試、可治理的 agentic AI 能力。`,
    stats: ["30 分鐘", "4 個核心概念", "3 個實作提醒"],
    map: [
      ["目標", "先界定 agent 要改善的任務成果，而不是先選工具。"],
      ["機制", `將 ${keys[0]} 與 ${keys[1]} 設計成明確流程。`],
      ["控制", "加入邊界、檢查點、權限與人類覆核。"],
      ["迭代", "用測試、紀錄與回饋修正 prompt、流程與資料。"]
    ],
    definitions: [
      [keys[0], `本章中的 ${keys[0]} 是 agent 完成任務時不可缺少的設計元素。`],
      [keys[1], `${keys[1]} 代表系統把能力落地為流程、工具或互動規則的方法。`],
      ["治理邊界", "明確規定 agent 可以做什麼、不能做什麼，以及何時需要人類介入。"]
    ],
    steps: [
      ["定義使用情境", "描述使用者、任務、輸入、輸出與失敗成本。"],
      ["拆成可觀察步驟", "將抽象能力拆成可紀錄、可測試的小步驟。"],
      ["設計安全檢查", "在高風險行動前加入驗證、權限與回滾機制。"],
      ["用案例測試", "用正常案例、邊界案例與錯誤案例檢查 agent 的表現。"]
    ],
    examples: [
      ["🧩", "課堂任務分解", "把一個大型作業拆成資料收集、分析、撰寫與檢查四個 agent 步驟。"],
      ["🛠", "工具型助理", "讓 agent 在查詢資料前先說明理由，執行後再回報來源與限制。"],
      ["✅", "品質檢查", "在輸出前用 rubric 檢查完整性、正確性與倫理風險。"]
    ],
    takeaways: [
      "Agentic system 的設計重點是可控流程，不是只追求更聰明的回答。",
      "每個能力都要能被觀察、測試與調整。",
      "高風險情境必須保留人類覆核與明確責任。"
    ],
    quiz: [
      [`學習「${title}」時，最好的第一步是什麼？`, ["先定義任務與成功標準", "直接增加 agent 數量", "隱藏所有紀錄", "取消測試"], 0, "任務與成功標準清楚，後面的架構選擇才有依據。"],
      ["為什麼要把 agent 流程拆成可觀察步驟？", ["方便測試、除錯與治理", "讓頁面變長", "讓輸出更模糊", "避免使用者理解"], 0, "可觀察步驟能讓系統更容易被改進與負責。"],
      ["高風險 action 之前應該加入什麼？", ["驗證、權限與人類覆核", "隨機等待", "更多形容詞", "關閉紀錄"], 0, "高風險行動需要控制點，避免不可逆錯誤。"]
    ]
  };
}

function makeChapterEn(id, title, keys) {
  return {
    title,
    lead: `This chapter focuses on ${title.toLowerCase()}. Students learn how to turn ${keys
      .slice(0, 3)
      .join(", ")} into agentic AI capabilities that can be designed, tested, and governed.`,
    stats: ["30 min", "4 core ideas", "3 implementation notes"],
    map: [
      ["Goal", "Define the task outcome before choosing tools."],
      ["Mechanism", `Turn ${keys[0]} and ${keys[1]} into explicit workflow steps.`],
      ["Control", "Add boundaries, checkpoints, permissions, and human review."],
      ["Iteration", "Improve prompts, workflows, and data through tests and feedback."]
    ],
    definitions: [
      [keys[0], `${keys[0]} is a core design element for the agent capability in this chapter.`],
      [keys[1], `${keys[1]} describes how the system operationalizes capability through workflows, tools, or interaction rules.`],
      ["Governance boundary", "A clear rule for what the agent may do, may not do, and when humans must intervene."]
    ],
    steps: [
      ["Define the use case", "Describe the user, task, inputs, outputs, and cost of failure."],
      ["Make steps observable", "Break abstract capability into testable and loggable actions."],
      ["Design safety checks", "Add validation, permissions, and rollback before risky actions."],
      ["Test with cases", "Use normal, edge, and failure cases to inspect behavior."]
    ],
    examples: [
      ["🧩", "Class assignment workflow", "Split a large assignment into data gathering, analysis, writing, and review agent steps."],
      ["🛠", "Tool-using assistant", "Ask the agent to explain why it needs a tool, then report sources and limitations."],
      ["✅", "Quality review", "Use a rubric to check completeness, correctness, and ethical risks before output."]
    ],
    takeaways: [
      "Agentic system design is about controllable workflows, not just smarter answers.",
      "Every capability should be observable, testable, and adjustable.",
      "High-risk settings require human review and clear accountability."
    ],
    quiz: [
      [`What is the best first step when learning ${title}?`, ["Define task and success criteria", "Add more agents immediately", "Hide all logs", "Skip testing"], 0, "Clear criteria guide architecture choices."],
      ["Why make agent workflows observable?", ["To support testing, debugging, and governance", "To make pages longer", "To make output vague", "To prevent understanding"], 0, "Observable steps make improvement and accountability possible."],
      ["What belongs before high-risk actions?", ["Validation, permissions, and human review", "Random waiting", "More adjectives", "Disabled logs"], 0, "Risky actions need control points."]
    ]
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
  definitions: document.getElementById("definitions"),
  steps: document.getElementById("steps"),
  examples: document.getElementById("examples"),
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
    partTitle.innerHTML = `<span class="part-dot"></span><span>${part[lang]}</span>`;
    els.nav.appendChild(partTitle);

    part.chapters.forEach((id) => {
      const chapter = chapters.find((item) => item.id === id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `chapter-button ${activeChapter === id ? "active" : ""} ${completed.has(id) ? "done" : ""}`;
      button.innerHTML = `
        <strong>${id}.</strong>
        <span>${chapter[lang].title}<small>${chapter.en.title}</small></span>
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
    .map((stat, index) => `<div class="stat"><svg viewBox="0 0 24 24">${statIcon(index)}</svg><div><strong>${stat}</strong><span>${index === 0 ? "Time" : index === 1 ? "Focus" : "Scope"}</span></div></div>`)
    .join("");

  els.map.innerHTML = content.map
    .map(([name, text]) => `<div class="concept-node"><strong>${name}</strong><p>${text}</p></div>`)
    .join("");

  els.definitions.innerHTML = content.definitions
    .map(([name, text]) => `<div class="definition-item"><strong>${name}</strong><p>${text}</p></div>`)
    .join("");

  els.steps.innerHTML = content.steps
    .map(([name, text]) => `<li><strong>${name}</strong><p>${text}</p></li>`)
    .join("");

  els.examples.innerHTML = content.examples
    .map(([icon, name, text]) => `<article class="example-card"><div class="example-icon">${icon}</div><h3>${name}</h3><p>${text}</p></article>`)
    .join("");

  els.takeaways.innerHTML = content.takeaways.map((item) => `<li>${item}</li>`).join("");
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
        `<button class="option-button" type="button" data-index="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`
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
