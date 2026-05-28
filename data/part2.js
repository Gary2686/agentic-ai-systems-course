// Part 2: Designing Agentic Systems
// Source: "Building Agentic AI Systems" by Biswas & Talukdar (Packt, 2025), Chapters 4-7
// Bilingual teaching content for the interactive course website

const chapter4 = {
  id: 4,
  title_zh: "代理人的反思與內省",
  title_en: "Reflection and Introspection in Agents",
  subtitle_zh: "讓 AI 代理人學會「想想自己剛剛在想什麼」,從失敗中學習、隨環境調整。",
  subtitle_en: "Teach AI agents to think about their own thinking — learning from failure and adapting to change.",
  overview_zh: "第三章介紹了代理人的「感知、推理、行動」三大基本能力。本章接著問:如果代理人只會執行任務,卻不會回頭檢視自己做得好不好,它就永遠是個聰明的執行者,而不是真正會「成長」的智慧體。反思 (Reflection) 與內省 (Introspection) 就是讓代理人擁有「後設認知」的關鍵——也就是「想想自己剛剛是怎麼想的」。本章以一個貫穿全書的「智慧旅遊代理人」為例,說明為什麼具備自我評估能力的代理人能在動態環境中持續改善決策、處理倫理議題、適應使用者偏好、與人類更自然地互動。你會學到三個核心技術:後設推理 (meta-reasoning)、自我解釋 (self-explanation)、自我建模 (self-modeling),並透過 CrewAI 框架看到實際程式碼如何讓代理人在收到使用者回饋後自動調整內部權重,讓推薦越來越貼近使用者真正喜歡的東西。",
  overview_en: "Chapter 3 introduced the trio of perception, reasoning, and action. This chapter pushes further: an agent that merely executes tasks without examining its own behavior will stay clever but never truly grow. Reflection and introspection give agents metacognition — the ability to think about their own thinking. Using a running intelligent travel agent example, the chapter explains why self-assessment enables continuous decision improvement, ethical alignment, adaptation to changing user preferences, and richer human-AI interaction. You will learn three core techniques: meta-reasoning, self-explanation, and self-modeling. A concrete CrewAI implementation shows how an agent can adjust internal preference weights based on user feedback so that future recommendations align ever more closely with what the user actually wants.",
  learning_objectives_zh: [
    "解釋反思與內省對 LLM 代理人的四大效益 (決策、適應、倫理、人機互動)",
    "區分傳統推理 (task-oriented) 與後設推理 (meta-reasoning) 的差別",
    "說明自我解釋的兩種目的——對外的「透明度」與對內的「學習修正」",
    "理解自我建模如何透過目標管理與知識更新讓代理人持續演化",
    "用 CrewAI 寫出一個能根據使用者回饋自動更新權重的反思型代理人"
  ],
  learning_objectives_en: [
    "Articulate the four benefits of reflection: enhanced decision-making, adaptation, ethics, and HCI",
    "Distinguish task-oriented traditional reasoning from meta-reasoning",
    "Identify the two purposes of self-explanation: outward transparency vs. inward learning",
    "Explain how self-modeling combines goal management with knowledge updates",
    "Implement a CrewAI agent that updates preference weights from user feedback"
  ],
  sections: [
    {
      id: "4.1",
      heading_zh: "反思為什麼對代理人這麼重要?",
      heading_en: "Why Reflection Matters in Agents",
      explanation_zh: "反思指代理人「檢視自己思考過程、評估行為、調整做法」的能力。就像一個人會在心裡說:「上次那樣做不太順,這次換個方法試試」,反思型 LLM 代理人能分析自己的輸出、辨識策略無效之處,並修正行為。沒有反思,代理人就像一台固定規則的機器——輸入什麼就輸出什麼,環境一變就失靈。反思帶來四大效益:第一,**增強決策**——代理人能回顧過去的判斷與結果,類似人類的後設認知,逐步辨識自己的偏見與盲點。第二,**適應性**——動態環境 (股市、疫情、旅遊禁令) 中,反思型代理人會主動察覺使用者抱怨、取消率上升等訊號,暫停推薦受影響的選項。第三,**倫理判斷**——它會檢視自己的推薦是否造成過度旅遊或破壞當地文化,進而修正方向。第四,**自然互動**——透過讀懂使用者語氣與情緒,反思型代理人能切換溝通風格,讓對話更像跟一位真正關心你的顧問交談。",
      explanation_en: "Reflection is the agent's ability to examine its own thought process, evaluate its actions, and adjust its approach. Just as a person might think, 'that didn't work, let me try differently,' a reflective LLM agent can analyze its outputs, notice when strategies fail, and modify behavior. Without reflection, agents stay rigid input-output machines that break when the environment changes. The chapter highlights four benefits. First, enhanced decision-making — agents replay past deliberations to surface biases and weaknesses. Second, adaptation — in dynamic environments (markets, pandemics, travel advisories) reflective agents pick up signals like rising complaints and pause affected recommendations. Third, ethical consideration — the agent can detect when its suggestions contribute to over-tourism or cultural insensitivity and pivot. Fourth, human-computer interaction — by reading emotional cues, it adapts tone and style to feel like a thoughtful advisor rather than a vending machine.",
      analogy_zh: "想像一位剛入行的料理新手 vs. 老師傅。新手每次都照食譜做;老師傅卻會在每一道菜後想:「今天客人覺得太鹹,可能因為高湯本身已經有鹽。下次先嚐高湯再加鹽。」反思就是這份「煮完還會回頭想」的能力。",
      analogy_en: "Picture a rookie cook versus a master chef. The rookie follows the recipe every time; the master tastes after each plate and thinks, 'too salty today — the stock already had salt; next time taste before seasoning.' Reflection is that habit of looking back after the dish leaves the pass.",
      worked_example_zh: "旅遊代理人初始給 Alice 推薦巴黎的五星酒店,因為她預算寬鬆。旅行結束 Alice 給差評,說酒店離地鐵太遠。反思型代理人不僅紀錄這次失敗,還回頭分析:「我是不是太依賴『價格』與『星級』兩個因子,忽略了『公共交通便利性』?」它於是在內部模型中為「交通便利性」加權,並把這個學習套用到下一次像 Alice 這樣不愛開車的旅客身上,主動推薦近地鐵的精品酒店。從此後,Alice 與類似客群的滿意度持續上升。",
      worked_example_en: "Initially, the travel agent recommends a 5-star Paris hotel to Alice because her budget is generous. After the trip, Alice rates it poorly because the hotel was far from the metro. A reflective agent doesn't just log the failure — it asks, 'Did I overweight price and star rating and ignore transit access?' It then increases the weight of transit proximity for non-driving travelers like Alice. The next time a similar customer appears, the agent proactively favors metro-adjacent boutique hotels, and satisfaction scores climb.",
      diagram_description: "A loop diagram: user query -> agent action -> outcome -> feedback -> reflection module -> updated internal weights -> next agent action. Highlight the reflection module as a separate box that reads outcome + feedback and writes updated weights back into the agent."
    },
    {
      id: "4.2",
      heading_zh: "內省:代理人怎麼「審視自己」?",
      heading_en: "Introspection: How Agents Examine Themselves",
      explanation_zh: "內省 (Introspection) 比反思更聚焦在「過程」上——代理人不只是檢查結果好不好,還要拆解「我當時是怎麼推到這個結論的?」這讓代理人能在面對含糊或不確定的情境時,發展出更穩健的策略。內省的核心是「事後分析」(post-hoc analysis):每次任務結束後,代理人會問自己幾個問題——這個決定的邏輯鏈是什麼?哪個假設可能錯了?在哪個步驟我其實缺資料卻硬猜?這種習慣讓代理人從「反應式」(reactive,被動回應) 進化成「主動式」(proactive,事先預備)。例如旅遊代理人會發現自己在「家庭旅遊」場景中常常忽略「兒童活動」這個維度,於是主動補上資料來源、調整查詢模板。內省也讓代理人能識別自己的「知識缺口」——它知道「自己不知道什麼」,並能主動向人類專家求助或抓取新資料,而不是硬掰一個錯誤的回答。",
      explanation_en: "Introspection sharpens reflection by focusing on the reasoning process itself. The agent doesn't only check whether the outcome was good — it dissects 'how did I get to that conclusion?' This makes agents more robust under ambiguity. The mechanism is post-hoc analysis: after each task the agent asks what its chain of reasoning was, which assumption might have been wrong, and where it had to guess due to missing data. This habit promotes agents from reactive responders to proactive learners. A travel agent might notice it consistently overlooks 'kid-friendly activities' for family trips, then add new data sources and templates. Crucially, introspection helps agents recognize their own knowledge gaps — they know what they don't know — so they can request human input or fetch external information rather than confabulate.",
      analogy_zh: "像考完試後的「檢討筆記」。光知道考幾分沒用,真正進步的是回頭看每一題:「我為什麼選 C?是真懂還是猜的?哪個觀念其實沒讀熟?」內省就是代理人版本的考後檢討。",
      analogy_en: "Like a student's post-exam review notebook. Knowing your score isn't enough — real progress comes from auditing each question: 'Why did I pick C? Did I actually understand or was I guessing?' Introspection is the agent's version of post-exam review.",
      worked_example_zh: "旅遊代理人推薦了東京七日遊,使用者旅行後留言:「行程太趕,每天都疲憊。」內省型代理人不只記錄「太趕」這個結果,而是回頭追問:當初為什麼把行程排得這麼緊?是因為我假設使用者『想看越多越好』嗎?它接著檢視推理鏈,發現它套用了一個過時的「日本=高效率旅行」模板。代理人於是更新內部規則:面對 40 歲以上、首次造訪日本的旅客,放慢節奏,並在行程中加入半天的自由時間。",
      worked_example_en: "The agent recommends a 7-day Tokyo trip; the user reports back that the schedule was exhausting. An introspective agent doesn't just log 'too packed' — it asks why it built such a dense itinerary. Tracing the reasoning chain, it finds it applied a stale 'Japan = high-efficiency travel' template. It updates a rule: for first-time visitors aged 40+, slow the pace and include half-day free blocks. The next family trip benefits from the lesson.",
      diagram_description: "A two-pane diagram: left pane shows the linear action flow (input -> reasoning steps S1, S2, S3 -> output). Right pane shows the introspection process zooming into each step Si, with arrows labeled 'assumption check', 'data availability', 'confidence level' feeding into an 'updated reasoning template' box."
    },
    {
      id: "4.3",
      heading_zh: "後設推理:用 CrewAI 實作會自我調整的代理人",
      heading_en: "Meta-Reasoning: Building a Self-Adjusting Agent with CrewAI",
      explanation_zh: "傳統推理 (traditional reasoning) 解決「眼前的問題」——使用者問洛杉磯到紐約的機票,代理人就照價格、時間排序給出答案,結束。後設推理 (meta-reasoning) 多一層:它監督「推理過程本身」,讓代理人能評估「我推薦的方法管用嗎?要不要改?」。書中的範例給三個目的地 (Paris, Bangkok, New York) 與三個維度權重 (budget, luxury, adventure)。一開始三個維度各佔 0.33。使用者收到推薦後給 1 (滿意) 或 -1 (不滿意)。後設推理代理人不僅做出推薦,還會根據回饋決定一個 `adjustment_factor` (0 到 1 之間),把對應的權重往上或往下調。若推薦了「冒險型」目的地且使用者按讚,「adventure」權重就提升,代理人記住「這位使用者真的偏好冒險」。後設推理也能管理運算資源:複雜的多國行程值得多花算力,單純的週末小旅行就用簡單規則,避免過度工程。",
      explanation_en: "Traditional reasoning solves the problem in front of it — show me LA to NYC flights, sort by price, done. Meta-reasoning adds a layer above: it monitors the reasoning itself, asking 'is my strategy working? should I change?' The book's example uses three destinations (Paris, Bangkok, New York) and three preference dimensions (budget, luxury, adventure), each starting at weight ~0.33. After each recommendation the user replies +1 (satisfied) or -1 (dissatisfied). The meta-reasoning agent not only recommends but also picks an `adjustment_factor` between 0 and 1, nudging the relevant weight up or down. If it suggested an adventurous destination and the user loved it, the 'adventure' weight rises, encoding the user's preference for future runs. Meta-reasoning also governs compute: invest deep analysis for a complex multi-country itinerary, fall back to simple heuristics for a weekend getaway.",
      analogy_zh: "像健身教練調訓練菜單。第一週給平均的菜單;觀察學員每次訓練後的疲勞與進步,教練再「上修腿部訓練、下修上半身」。教練做的不是訓練本身,而是「決定怎麼調整訓練計畫」——這就是後設推理。",
      analogy_en: "Like a personal trainer iterating on a workout plan. Week one is a balanced template; based on how the client recovers and progresses, the trainer 'increases leg volume, decreases upper-body sets.' The trainer isn't doing the workout — they're deciding how to adjust the plan. That's meta-reasoning.",
      worked_example_zh: "Bob 是新使用者。代理人初始權重為 budget=0.33, luxury=0.33, adventure=0.34,推薦「New York」(因為 adventure 略高)。Bob 回饋 +1。後設推理代理人選 adjustment_factor=0.1,把 adventure 提升 10%,並重新正規化:budget≈0.32, luxury≈0.32, adventure≈0.36。下次 Bob 再來,系統已經更傾向給他冒險型目的地。經過五輪互動,adventure 已升到 0.55,Bob 收到 Patagonia 健行行程的推薦——這正是後設推理累積出來的個人化。",
      worked_example_en: "Bob is new. Initial weights: budget=0.33, luxury=0.33, adventure=0.34, so the agent recommends New York. Bob replies +1. The meta-reasoning agent picks adjustment_factor=0.1, raising adventure 10% and renormalizing to roughly budget=0.32, luxury=0.32, adventure=0.36. Next visit, the system tilts further toward adventurous picks. After five iterations adventure has climbed to 0.55, and Bob now gets a Patagonia trekking proposal — personalization compounded through meta-reasoning.",
      diagram_description: "Flow diagram with two agents inside a CrewAI Crew: Preference Agent (uses recommend_destination tool with current weights) -> outputs destination; User feedback (+1/-1) flows into Meta-Reasoning Agent which uses update_weights_on_feedback tool with chosen adjustment_factor; updated weights loop back to Preference Agent for the next round."
    },
    {
      id: "4.4",
      heading_zh: "自我解釋:透明度與學習的雙重引擎",
      heading_en: "Self-Explanation: Engine for Transparency and Learning",
      explanation_zh: "自我解釋是代理人「把自己的推理過程用語言講出來」的能力,有兩個截然不同的目的。**目的一:對外透明**——讓使用者理解「為什麼推薦這家飯店?」當代理人說「我選 Hotel du Petit Moulin,因為它是符合您 $300/晚預算的唯一巴黎飯店,位於第三區,距最近地鐵站約 1.9 公里」,使用者就會更信任這個建議,也更願意提供回饋。**目的二:對內學習**——當使用者抱怨某個推薦時,代理人回頭讀自己當初的解釋,可能發現「啊,我把『價格』看得太重,完全沒考慮交通便利」。這個發現變成下次決策的修正方向。書中用 CrewAI 實作了一個 `travel_agent`,在 `backstory` 中明確要求「You always explain the steps you take to arrive at a conclusion」,模型輸出就自然帶上推理鏈。把這個透明度流程再串上「使用者回饋 → 修正策略」就形成完整的學習迴圈。",
      explanation_en: "Self-explanation is the agent's ability to verbalize its reasoning, serving two distinct purposes. First, outward transparency — letting the user understand 'why this hotel?' When the agent says 'I chose Hotel du Petit Moulin because it's the only Paris hotel within your $300/night budget, located in the 3rd arrondissement, about 1.9km from the nearest metro,' trust rises and feedback flows. Second, inward learning — when complaints arrive, the agent rereads its own explanation and may find 'I overweighted price and ignored transit.' That insight becomes input for the next decision. The CrewAI example sets `backstory` to 'You always explain the steps you take to arrive at a conclusion,' so the output automatically carries the reasoning chain. Wire that transparency loop into 'user feedback -> strategy refinement' and you have a complete learning cycle.",
      analogy_zh: "像數學考卷上「請列出計算過程」的規定。寫出過程一方面讓老師看懂你怎麼想 (透明度);另一方面當你答錯時,老師能準確指出「在第三步把分母分子搞錯了」,你下次才知道要避開哪個陷阱 (學習修正)。",
      analogy_en: "Like the 'show your work' rule on math exams. Writing out the steps both lets the teacher follow your thinking (transparency) and pinpoints where you slipped — 'step 3, you flipped numerator and denominator' — so you know what to fix (learning).",
      worked_example_zh: "使用者問:「我想找巴黎一晚 $300 以內的飯店。」代理人推薦 Hotel du Petit Moulin,並輸出:「我搜了幾家,大多超過 $300。Hotel du Petit Moulin 剛好 $300/晚,位於第三區,離最近地鐵站 Saint-Sébastien Froissart 約 1.9 公里——交通便利度中等。對重視預算又想體驗巴黎魅力的旅客是理想選擇。」使用者回覆:「太遠了,我願多付 $50 換近地鐵的。」代理人回頭分析自己的解釋,發現「中等交通便利」應該被視為負面訊號;它於是更新策略:預算上限往上拉 15%,並把『地鐵 < 500m』設為硬條件。下次推薦立即改善。",
      worked_example_en: "User asks for a Paris hotel under $300/night. The agent recommends Hotel du Petit Moulin and explains: 'Most Paris hotels exceed $300. Hotel du Petit Moulin is exactly $300/night, in the 3rd arrondissement, about 1.9km from the nearest metro Saint-Sébastien Froissart — moderate transit convenience. A great choice for budget-conscious travelers who still want Parisian charm.' The user replies: 'Too far. I'd pay $50 more to be near a metro.' Re-reading its own explanation, the agent sees 'moderate transit' should have been a red flag. It updates: raise budget ceiling by 15% and treat 'metro < 500m' as a hard constraint. Next recommendation lands much better.",
      diagram_description: "Two parallel branches stemming from the agent's recommendation: Branch A (Transparency) flows out to the user with an 'explanation cycle' box. Branch B (Learning) feeds the same explanation plus user feedback back into a 'strategy refinement' box that writes updated rules into the agent's policy store."
    },
    {
      id: "4.5",
      heading_zh: "自我建模:目標管理與知識更新",
      heading_en: "Self-Modeling: Goal Management and Knowledge Update",
      explanation_zh: "自我建模是代理人對「自己的目標、信念、知識」維持一份內部表徵,並隨情境更新。可以想成代理人有一張隨時更新的「自畫像」。這張自畫像包含兩個部分:**目標管理**——代理人的目標不是固定的。若使用者中途調整預算或日期,代理人會重新評估目標 (例如從『極致享受』轉成『性價比優先』);若使用者表達出對環保旅遊的新興趣,代理人就將「永續性」加入目標清單。**知識更新**——代理人持續累積關於目的地、住宿、活動、使用者偏好的知識。若某飯店被多位用戶差評,它會降低該飯店的評分權重,甚至從推薦池中移除;若某景點普遍獲好評,它強化對該景點的信心。自我建模也讓代理人能識別「我這部分的資料是不是過時了?」並主動補強。多代理人系統中,自畫像可以是各自獨立的 (individual internal states),也可以是共享的 (shared internal states)——後者讓團隊有共同的「世界觀」。",
      explanation_en: "Self-modeling means the agent maintains an internal representation of its goals, beliefs, and knowledge — picture a constantly updated self-portrait. The portrait has two parts. Goal management: goals aren't fixed. If the user shifts budget or dates mid-planning, the agent re-evaluates objectives (from 'maximize luxury' to 'maximize value'). If the user voices new interest in sustainability, the agent adds 'eco-friendly' to its goal list. Knowledge update: the agent accumulates evolving knowledge about destinations, properties, activities, and user preferences. Repeated negative reviews drop a hotel's weight or remove it entirely; widespread praise reinforces confidence in a venue. Self-modeling also lets the agent ask 'is this slice of my knowledge stale?' and proactively refresh it. In multi-agent setups, the self-model can be individual per agent or shared across the team — the latter giving the squad a common worldview.",
      analogy_zh: "像每年更新一次的個人履歷。你的技能、目標、職涯方向會隨時間改變——前年你可能寫『熟練 Python』,今年加了『領導 5 人團隊』,明年可能寫『轉向 AI 產品經理』。代理人的自我建模就是這份不斷更新的履歷,而且更新得更頻繁。",
      analogy_en: "Like a CV you keep updating. Your skills, goals, and direction shift over time — last year 'proficient in Python,' this year add 'led a 5-person team,' next year pivot to 'AI product manager.' Self-modeling is the agent's CV, refreshed continuously.",
      worked_example_zh: "原本代理人對 Carla 的自畫像是「喜歡奢華、預算 $5000」。三次互動後,Carla 取消了豪華 Spa 行程、改訂瑜伽營;在峇里島留下「希望多接觸當地文化」的回饋;並表示下次想試膠囊旅館。代理人更新自畫像:`goals = [authentic_culture, wellness, mid-budget]`,且為 Carla 增加新知識條目「對膠囊住宿持正面態度」。下次 Carla 詢問東京行,代理人不再丟出大倉飯店,而是推薦下北澤的設計型膠囊旅館加一日陶藝體驗——精準命中她「升級後的版本」。",
      worked_example_en: "The agent's initial self-model for Carla: 'prefers luxury, $5000 budget.' After three trips, Carla cancels a luxury spa for a yoga retreat, leaves feedback in Bali asking for more cultural depth, and mentions wanting to try a capsule hotel. The agent updates its model: goals = [authentic_culture, wellness, mid-budget], and adds a new knowledge entry: 'open to capsule accommodations.' Next time Carla asks about Tokyo, the agent skips the Okura and proposes a designer capsule in Shimokitazawa plus a half-day pottery workshop — hitting the new version of Carla precisely.",
      diagram_description: "Show a central 'Self-Model' container with two sub-boxes: Goal Management (current goals list, priority order) and Knowledge Base (destinations, providers, user preferences). Arrows show two inputs feeding the self-model: 'task outcomes' and 'user feedback'. One arrow exits to 'next decision'. A dashed line shows individual self-models inside each agent and a shared self-model accessible by a multi-agent crew."
    },
    {
      id: "4.6",
      heading_zh: "真實世界的反思型代理人:四個業務範例",
      heading_en: "Reflective Agents in the Wild: Four Business Cases",
      explanation_zh: "反思能力不是學術概念,已經在多個行業落地。**(1) 客服聊天機器人**——Zendesk、Drift 的 AI 客服分析每次對話的情緒與滿意度,辨識「使用者在哪類問題上頻繁不滿」,自動修正回應模板與語氣。**(2) 個人化行銷代理人**——Amazon 的推薦系統不只看你買過什麼,還回頭分析「上一波 email 行銷,訊息、發送時間、客群分眾是否有效」,據此調整下一波的訊息設計與目標群。**(3) 金融交易系統**——對沖基金 Renaissance Technologies 的交易代理人持續回顧過去交易在各種市場條件下的表現,辨識「哪些策略在哪種情境失效」,動態調整風險權重與資料來源。**(4) 銷售預測 / 電商定價**——Salesforce Einstein Analytics 比對歷史預測與實際銷售,找出誤差來源並重新校準模型;Walmart、Target 的定價代理人即時監看競爭者促銷、消費者反應,在「不過度漲價」與「不錯失利潤」之間動態調整。共同點是:都靠著「先做、後檢、再調」的反思迴圈,從靜態規則系統進化成持續學習的智慧體。",
      explanation_en: "Reflection isn't academic — it's shipping in production. (1) Customer service chatbots: Zendesk and Drift agents analyze sentiment and satisfaction per conversation, isolate where users repeatedly get frustrated, and auto-revise templates and tone. (2) Personalized marketing agents: Amazon's recommender doesn't just track purchases — it audits the last email campaign (message, timing, segmentation) to redesign the next one. (3) Financial trading systems: Renaissance Technologies' agents review past trades across market regimes, flag which strategies failed under which conditions, and re-weight risk and data sources accordingly. (4) Sales forecasting / e-commerce pricing: Salesforce Einstein Analytics compares forecasts to actuals, locates error sources, and recalibrates; Walmart and Target pricing agents monitor competitor promotions and customer response in real time, balancing 'don't price-gouge' with 'don't leave money on the table.' Common thread: a 'do, review, adjust' loop that converts static rule systems into continuously learning intelligence.",
      analogy_zh: "像棒球隊的數據分析師。每場賽後,他不只看勝負,還回頭看每一打席:打者的揮棒選球、投手的配球熱區、守備站位。下一場前,教練拿這份分析調整打線、配球。反思型代理人就是 24 小時不下班的數據分析師。",
      analogy_en: "Like a baseball analytics team. After every game they don't just check the score — they dissect each at-bat: hitter's swing decisions, pitcher's hot zones, fielding alignment. Before the next game the manager adjusts lineup and pitch mix. A reflective agent is that analytics team working 24/7.",
      worked_example_zh: "電商定價代理人觀察到競爭對手在週末對某款耳機降價 15%。它的歷史資料顯示:過去三個月在相同情境下,維持原價導致該款銷量下滑 20%;若跟進降價 10%,銷量回穩且毛利仍正。代理人回頭反思:「上次我跟降 15%,毛利轉負;只跟降 10% 反而最佳。」它於是設定本次跟降 10%,並在 48 小時後監控銷量與毛利。若毛利仍佳,將此策略寫入「週末競爭性促銷」的標準回應規則庫;若毛利不如預期,進一步反思並嘗試動態跟降 (按時段調整)。",
      worked_example_en: "A pricing agent sees a competitor drop a headphone model 15% over the weekend. Its history shows that in similar situations, holding the price killed sales by 20%, while matching with -10% stabilized sales and kept margins positive — better than the -15% match that wiped margin. The agent reflects: 'last time -15% lost money; -10% was optimal.' It cuts 10% and monitors sales and margin over 48 hours. If margin holds, it codifies '-10% match' as the playbook for weekend competitive promotions; if not, it reflects further and tries a time-of-day-varying response.",
      diagram_description: "A 2x2 grid showing the four business cases. For each cell include: (a) the agent type, (b) the data it observes (feedback signal), (c) the reflection step (what it analyzes), (d) the adjustment (what changes). Color-code each case differently to emphasize they share the same loop structure despite different domains."
    }
  ],
  code_or_procedure_zh: "用 CrewAI 實作一個會根據使用者回饋自動調整偏好權重的反思型旅遊代理人。**步驟一:定義兩個代理人**。`preference_agent` 是推薦者 (role='Travel destination recommender', goal='Provide the best travel destination based on user preferences and weights', tools=[recommend_destination])。`meta_agent` 是後設推理者 (role='Preference weight adjuster', goal='Reflect on feedback and adjust the preference weights', tools=[update_weights_on_feedback])。兩者都用 gpt-4o-mini。**步驟二:定義兩個任務**。`generate_recommendation` 指定 `preference_agent` 用目前權重產出推薦目的地;`adjust_weights` 指定 `meta_agent` 讀取「目的地 + 使用者回饋」並決定 0~1 之間的 adjustment_factor,呼叫工具更新權重。**步驟三:組成 Crew 並啟動**。`crew = Crew(agents=[preference_agent, meta_agent], tasks=[generate_recommendation, adjust_weights], verbose=True); crew.kickoff()`。**執行範例**:初始權重 {budget:0.04, luxury:0.02, adventure:0.94} → 推薦 New York → 使用者按讚 (+1) → meta_agent 選 adjustment_factor=0.1 → 工具回傳更新後權重 {budget:0.33, luxury:0.32, adventure:0.34}。**步驟四:加上自我解釋**。在 `travel_agent.backstory` 加上 'You always explain the steps you take to arrive at a conclusion',輸出就會自動帶上「推薦理由」,既達到透明度,也產生可被下次反思利用的紀錄。**步驟五:持久化**。把每次 (推薦, 回饋, 新權重) 存入資料庫,讓代理人跨 session 累積知識。",
  code_or_procedure_en: "Build a reflective CrewAI travel agent that updates preference weights from feedback. Step 1: define two agents. `preference_agent` recommends (role='Travel destination recommender', tool=recommend_destination). `meta_agent` reflects (role='Preference weight adjuster', tool=update_weights_on_feedback). Both use gpt-4o-mini. Step 2: define two tasks. `generate_recommendation` has `preference_agent` produce a destination from current weights; `adjust_weights` has `meta_agent` read (destination, feedback) and choose an adjustment_factor in [0,1] to update weights via the tool. Step 3: assemble and run. `crew = Crew(agents=[preference_agent, meta_agent], tasks=[generate_recommendation, adjust_weights], verbose=True); crew.kickoff()`. Sample trace: starting weights {budget:0.04, luxury:0.02, adventure:0.94} → recommends New York → user +1 → meta_agent picks adjustment_factor=0.1 → tool returns {budget:0.33, luxury:0.32, adventure:0.34}. Step 4: layer in self-explanation by adding 'You always explain the steps you take to arrive at a conclusion' to the agent's backstory; outputs now carry reasoning, supporting both transparency and downstream reflection. Step 5: persist (recommendation, feedback, new weights) to a store so learning compounds across sessions.",
  key_takeaways_zh: [
    "反思讓代理人從『靜態規則執行者』升級為『會自我修正的學習體』",
    "內省關注『過程』而非『結果』,讓代理人面對不確定性更穩健",
    "後設推理在『推理之上』再加一層監督,動態調整策略與運算資源",
    "自我解釋有兩個目的——對外建立信任,對內驅動學習修正",
    "自我建模 = 目標管理 + 知識更新,讓代理人的『自畫像』持續演化"
  ],
  key_takeaways_en: [
    "Reflection upgrades agents from static rule executors to self-correcting learners",
    "Introspection focuses on process, not just outcome — robust under uncertainty",
    "Meta-reasoning sits above reasoning, dynamically tuning strategy and compute",
    "Self-explanation serves two purposes: outward trust and inward learning",
    "Self-modeling = goal management + knowledge updates, evolving an internal self-portrait"
  ],
  common_pitfalls_zh: [
    "把『反思』當成『多生成一次輸出』——真正的反思必須改變下一次的決策權重或規則",
    "讓 LLM 自由選 adjustment_factor 卻沒設邊界,可能過度修正或來回震盪",
    "自我解釋寫得很漂亮卻沒人讀、也沒回饋進系統,變成『裝飾用透明度』毫無學習價值"
  ],
  common_pitfalls_en: [
    "Treating 'reflection' as 'generate one more output' — true reflection must change future decision weights or rules",
    "Letting the LLM pick adjustment_factor with no bounds — risks overshoot or oscillation",
    "Producing beautiful self-explanations that nobody reads and that don't feed back into the system — decorative transparency without learning"
  ],
  quiz: [
    {
      question_zh: "下列何者最能區分『傳統推理』與『後設推理』?",
      question_en: "Which best distinguishes traditional reasoning from meta-reasoning?",
      options_zh: [
        "傳統推理用規則,後設推理用神經網路",
        "傳統推理只發生一次,後設推理會重複多次",
        "傳統推理解決眼前任務,後設推理監督並調整推理過程本身",
        "傳統推理需要 GPU,後設推理只需 CPU"
      ],
      options_en: [
        "Traditional uses rules, meta-reasoning uses neural networks",
        "Traditional happens once, meta-reasoning repeats many times",
        "Traditional solves the immediate task; meta-reasoning monitors and adjusts the reasoning process itself",
        "Traditional needs a GPU; meta-reasoning needs only a CPU"
      ],
      answer_index: 2,
      explanation_zh: "後設推理 = 『關於推理的推理』,它在傳統推理之上加一層監督與調整;不是換演算法或多跑幾次。",
      explanation_en: "Meta-reasoning is 'reasoning about reasoning' — a supervisory layer that monitors and adjusts; it isn't just a different algorithm or repeated execution."
    },
    {
      question_zh: "在書中的 CrewAI 範例,`meta_agent` 的主要職責是什麼?",
      question_en: "In the CrewAI example, what is the main job of `meta_agent`?",
      options_zh: [
        "直接推薦目的地給使用者",
        "根據使用者回饋決定 adjustment_factor 並更新偏好權重",
        "儲存使用者的個資與信用卡資料",
        "翻譯使用者的查詢成多國語言"
      ],
      options_en: [
        "Recommend the destination directly to the user",
        "Choose an adjustment_factor from user feedback and update the preference weights",
        "Store the user's personal and credit-card data",
        "Translate the user query into multiple languages"
      ],
      answer_index: 1,
      explanation_zh: "meta_agent 是後設推理者:看推薦結果與回饋,決定 0~1 的 adjustment_factor,呼叫 update_weights_on_feedback 工具修正內部權重。",
      explanation_en: "The meta_agent reflects on the (recommendation, feedback) pair, picks an adjustment_factor in [0,1], and calls update_weights_on_feedback to revise the internal weights."
    },
    {
      question_zh: "自我解釋的『對內學習』面向最直接的價值為何?",
      question_en: "What is the most direct value of the 'inward learning' aspect of self-explanation?",
      options_zh: [
        "讓使用者感到被尊重,提升 NPS",
        "增加回應字數,讓對話看起來更專業",
        "代理人可以回頭讀自己的解釋,辨識推理瑕疵並修正策略",
        "符合 GDPR 透明度法規"
      ],
      options_en: [
        "Make users feel respected and raise NPS",
        "Pad responses to look more professional",
        "Let the agent reread its own explanation to spot reasoning flaws and revise strategy",
        "Comply with GDPR transparency requirements"
      ],
      answer_index: 2,
      explanation_zh: "對外透明度針對使用者信任;對內學習則是讓代理人讀自己的解釋找出問題、修正內部規則,是反思迴圈的關鍵。",
      explanation_en: "Outward transparency builds user trust; inward learning lets the agent audit its own explanation to find flaws and revise rules — the heart of the reflection loop."
    },
    {
      question_zh: "自我建模 (self-modeling) 包含哪兩個主要元件?",
      question_en: "Which two components make up self-modeling?",
      options_zh: [
        "前端 UI 與後端 API",
        "目標管理 + 知識更新",
        "感知與行動",
        "Prompt + Fine-tuning"
      ],
      options_en: [
        "Front-end UI and back-end API",
        "Goal management + knowledge update",
        "Perception and action",
        "Prompt + fine-tuning"
      ],
      answer_index: 1,
      explanation_zh: "書中明確將自我建模拆成兩部分:目標管理 (隨情境動態調整目標) 與知識更新 (持續累積與修正內部知識庫)。",
      explanation_en: "The chapter splits self-modeling into goal management (dynamically reframing goals) and knowledge update (continuously refining the internal knowledge base)."
    },
    {
      question_zh: "下列何者不是書中提到的反思型代理人實際應用?",
      question_en: "Which is NOT mentioned in the chapter as a real-world reflective-agent application?",
      options_zh: [
        "Zendesk / Drift 的客服聊天機器人",
        "Amazon 的個人化推薦",
        "Renaissance Technologies 的交易代理人",
        "Tesla 的自動駕駛路線規劃"
      ],
      options_en: [
        "Zendesk / Drift customer service chatbots",
        "Amazon personalized recommendations",
        "Renaissance Technologies trading agents",
        "Tesla autonomous-driving route planning"
      ],
      answer_index: 3,
      explanation_zh: "書中列舉的四大案例是客服機器人、個人化行銷、金融交易、銷售預測與電商定價;Tesla 自駕雖屬 AI 應用但不在本章舉例範圍。",
      explanation_en: "The four cases in the chapter are customer-service bots, personalized marketing, financial trading, and sales forecasting / e-commerce pricing. Tesla autonomous driving, while an AI application, is not one of the chapter's examples."
    }
  ]
};

const chapter5 = {
  id: 5,
  title_zh: "讓代理人會用工具與規劃任務",
  title_en: "Enabling Tool Use and Planning in Agents",
  subtitle_zh: "拆解工具呼叫、規劃演算法,並用 CrewAI / AutoGen / LangGraph 三大框架實作旅遊規劃。",
  subtitle_en: "Master tool/function calling and planning algorithms, then ship the same travel planner three ways: CrewAI, AutoGen, LangGraph.",
  overview_zh: "LLM 在訓練資料截止後就停止學習了。如果你問它「明天紐約天氣?」,它要嘛瞎掰、要嘛說不知道。本章告訴你怎麼讓代理人「長出手腳」:用工具 (tools) 連到外部 API、資料庫、檔案系統,即時取得最新資訊與執行具體動作。我們會先解釋工具呼叫 (tool calling) 與函式呼叫 (function calling) 的細微差別——LLM 本身不執行程式碼,它只「生成一個結構化的呼叫指令」,真正的執行交給 Agent Controller。接著盤點五大類工具:API、資料庫、效用函式、整合工具、硬體介面。光有工具還不夠,代理人需要「規劃」才能把多個工具串成有意義的工作流。本章評估七種規劃演算法,依「對 LLM 代理人的實用性」分三類:不實用的 (STRIPS、A*、GraphPlan、MCTS)、中等的 (Fast Forward, FF)、最實用的 (LLM-based planning 與 HTN)。最後,我們用同一個「旅遊規劃」任務,分別在 CrewAI、AutoGen、LangGraph 三個框架上實作,讓你親眼看到三種設計哲學的差異。",
  overview_en: "An LLM stops learning when its training cutoff ends. Ask it 'what's the weather in NYC tomorrow?' and it either fabricates or admits ignorance. This chapter gives agents hands and feet: tools that connect to external APIs, databases, and file systems for live data and concrete actions. We start by clarifying tool calling versus function calling — the LLM itself never executes code; it generates a structured call instruction, and an Agent Controller actually runs it. We then survey five tool categories: APIs, databases, utility functions, integration tools, and hardware interfaces. Tools alone aren't enough — agents need planning to chain them into meaningful workflows. The chapter rates seven planning algorithms by LLM practicality: impractical (STRIPS, A*, GraphPlan, MCTS), moderately practical (Fast Forward, FF), and most practical (LLM-based planning and HTN). Finally we ship the same travel-planning task on CrewAI, AutoGen, and LangGraph so you can compare three design philosophies side by side.",
  learning_objectives_zh: [
    "區分工具呼叫 (tool calling) 與函式呼叫 (function calling),理解 Agent Controller 的角色",
    "盤點五大類代理人工具與它們適合的場景",
    "比較七種規劃演算法,說明為何 LLM-based planning 與 HTN 最實用",
    "用 docstring 或 JSON schema 兩種方式定義工具",
    "用 CrewAI、AutoGen、LangGraph 三種框架實作旅遊規劃代理人,並比較其差異"
  ],
  learning_objectives_en: [
    "Distinguish tool calling from function calling and explain the Agent Controller's role",
    "Catalog the five categories of agent tools and their use cases",
    "Compare seven planning algorithms and justify why LLM-based planning and HTN are most practical",
    "Define tools two ways: docstrings (framework style) and JSON schema (direct LLM API)",
    "Implement the same travel-planning agent in CrewAI, AutoGen, and LangGraph"
  ],
  sections: [
    {
      id: "5.1",
      heading_zh: "工具:讓代理人突破訓練資料的限制",
      heading_en: "Tools: Breaking Through the Training Data Wall",
      explanation_zh: "想像把 LLM 鎖在房間裡——它能用的只有「訓練時記住的知識」。問它「今天巴黎天氣?」、「我的銀行戶頭餘額?」、「請幫我訂這班機票」,它都無能為力。工具 (tools) 就是窗戶與門:透過 API、資料庫、函式,代理人能查即時資訊、執行操作、操作其他系統。書中清楚定義五大類工具:(1) **API**——對接航空公司、付款處理、地圖等外部服務;(2) **資料庫工具**——讀寫客戶檔案、交易紀錄、產品目錄,讓代理人擁有持久記憶;(3) **效用函式**——本地端的計算、格式轉換、NLP 處理等通用積木;(4) **整合工具**——銜接行事曆、文件、檔案系統等多系統工作流;(5) **硬體介面**——控制 IoT、機器人、感測器,讓代理人從數位世界延伸到實體世界。工具的選擇取決於代理人的角色與任務複雜度——複雜任務通常需要多種工具串接 (tool chaining),例如旅遊代理人會先用 API 查航班,再用資料庫取使用者偏好,最後用效用函式算出最佳行程。",
      explanation_en: "Imagine locking an LLM in a room — all it has is what it memorized at training time. Ask it 'what's the weather in Paris today?', 'what's my bank balance?', or 'book this flight,' and it's helpless. Tools are the windows and doors: through APIs, databases, and functions, the agent can fetch live data, execute actions, and operate other systems. The book identifies five tool categories. (1) APIs — connect to airline, payment, mapping, and other external services. (2) Database tools — read/write customer profiles, transactions, product catalogs, giving agents persistent memory. (3) Utility functions — local building blocks for calculation, format conversion, and NLP. (4) Integration tools — bridge calendars, document processing, and file management across systems. (5) Hardware interface tools — control IoT, robotics, and sensors, extending the agent into the physical world. Tool choice depends on the agent's role and task complexity. Complex tasks usually require tool chaining — a travel agent might first hit an API for flights, then a database for user preferences, then a utility function to compute the optimal itinerary.",
      analogy_zh: "想像你是個記憶力超強但被關在房間的學者——你會背誦十萬本書,但回答不了「現在外面下雨嗎?」工具就像房間裡的電話、網路、視訊。沒有它們,你只能引用陳年知識;有了它們,你才能應對活生生的世界。",
      analogy_en: "Imagine you're a scholar with photographic memory but locked in a sealed room — you've memorized 100,000 books, but you can't answer 'is it raining outside?' Tools are the phone, the internet, the video feed. Without them, you cite dusty knowledge; with them, you engage with the living world.",
      worked_example_zh: "使用者問 ChatGPT (沒工具):「波士頓現在天氣?」回答可能是「我無法取得即時資料」或胡亂編一個。給它一個 `weather_lookup(location, date)` 工具後,模型自動生成結構化呼叫:`{\"function\": \"weather_lookup\", \"parameters\": {\"location\": \"Boston\", \"date\": \"10/01/2024\"}}`。Agent Controller 解析這個 JSON,呼叫真正的 OpenWeather API,取得 JSON 回應,把它塞回對話脈絡。LLM 再用自然語言回答:「波士頓現在 18°C、多雲、5 mph 東風。」整個流程裡 LLM 從未自己跑程式碼,但對使用者來說它「就像會查天氣」。",
      worked_example_en: "Ask vanilla ChatGPT 'what's the weather in Boston right now?' — you get 'I can't fetch live data' or a confabulation. Give it a `weather_lookup(location, date)` tool and the model now emits a structured call: `{\"function\": \"weather_lookup\", \"parameters\": {\"location\": \"Boston\", \"date\": \"10/01/2024\"}}`. The Agent Controller parses that JSON, hits the real OpenWeather API, and stuffs the JSON response back into the conversation. The LLM then says naturally: 'Boston is 18°C, cloudy, with a 5 mph easterly wind.' The model never executed code itself, but from the user's view, it 'knows the weather.'",
      diagram_description: "Two-panel comparison. Left: an LLM alone with an X over an outgoing 'weather query' — output is a guess. Right: same LLM with arrows to a tool box and to an Agent Controller; LLM emits a JSON call -> Agent Controller -> OpenWeather API -> JSON response -> LLM -> natural-language answer to user."
    },
    {
      id: "5.2",
      heading_zh: "工具呼叫 vs. 函式呼叫:LLM 到底在做什麼?",
      heading_en: "Tool Calling vs. Function Calling: What the LLM Actually Does",
      explanation_zh: "這兩個詞在實務上常被互換使用,但有細微差別。**函式呼叫 (function calling)** 指 LLM 生成對「同一執行階段內預定義函式」的結構化呼叫,通常是內部任務,例如從本地資料庫撈使用者資料、做一個計算。**工具呼叫 (tool calling)** 涵蓋更廣——LLM 與「外部 API、服務、系統」互動,取即時資料或執行專業任務。實作上更關鍵的觀念是:LLM 本身永遠不執行任何程式碼。它只「生成一段結構化文字」,告訴系統:「我想用哪個函式 / 工具」、「該傳什麼參數」、「參數格式為何」。真正的執行交給 Agent Controller (或框架的 runtime)。把 LLM 想成寫指令給秘書的老闆——老闆不會親自打電話訂機票,他寫便條給秘書:「請打電話訂 6/15 紐約飛羅馬,經濟艙,午後出發」。LLM 是老闆,Controller 是秘書。並非所有 LLM 都擅長這件事——GPT-4、Claude、Llama 3 等大型模型有明確訓練過工具呼叫;較小或未訓練的模型可以靠激進的 prompt engineering 模擬,但成功率參差不齊。",
      explanation_en: "The terms are often swapped, but there's a subtle distinction. Function calling: the LLM generates a structured call to a predefined function within the same runtime, usually for internal tasks like a local DB lookup or calculation. Tool calling: broader — the LLM talks to external APIs, services, or systems for live data or specialized tasks. The key implementation insight: the LLM never executes code itself. It only emits a structured text response saying which function/tool it wants, what parameters to pass, and in what format. Actual execution is the Agent Controller's job (or the framework's runtime). Think of the LLM as a boss writing notes to a secretary — the boss never picks up the phone; she scribbles 'please book NYC→Rome June 15, economy, afternoon departure.' The LLM is the boss, the Controller is the secretary. Not every LLM is good at this — GPT-4, Claude, and Llama 3 are explicitly trained for tool use; smaller or untrained models can mimic it with aggressive prompt engineering, but with uneven reliability.",
      analogy_zh: "像點餐:你 (LLM) 看菜單,寫下「一份義大利麵、要辣、不要起司」遞給服務生 (Agent Controller)。你自己不會跑進廚房煮——你只負責清楚表達「點什麼、怎麼做」。如果你寫得不清楚 (參數錯),廚房做不出來;如果服務生看不懂 (Controller 不會解析),也行不通。",
      analogy_en: "Like ordering at a restaurant. You (LLM) read the menu and write 'one pasta, spicy, no cheese' on a ticket to the waiter (Agent Controller). You don't go into the kitchen — your job is to specify clearly what to make. If your ticket is ambiguous (wrong parameters), the kitchen can't cook it; if the waiter can't parse it (Controller misreads), nothing happens.",
      worked_example_zh: "定義 `weather_lookup` 函式 (Python):接收 location、date,呼叫 OpenWeather API,回傳 JSON。當使用者問「波士頓天氣?」時,LLM 不會自己呼叫 `requests.get(...)`——它輸出 `{\"function\": \"weather_lookup\", \"parameters\": {\"location\": \"Boston\"}}`。CrewAI / LangGraph / AutoGen 等框架的 runtime 攔截這個 JSON,執行 Python 函式,將回應 JSON 注入對話脈絡。LLM 再把它翻譯成「波士頓現在 18°C…」。如果 LLM 在 parameters 漏了必填欄位,Controller 會回拒並要求補齊——這就是為什麼好的工具描述 (docstring 或 JSON schema) 至關重要。",
      worked_example_en: "Define `weather_lookup` in Python: takes location and date, calls OpenWeather, returns JSON. When the user asks 'weather in Boston?', the LLM does NOT call `requests.get(...)` itself — it emits `{\"function\": \"weather_lookup\", \"parameters\": {\"location\": \"Boston\"}}`. The CrewAI / LangGraph / AutoGen runtime intercepts that JSON, runs the Python function, and injects the response back into context. The LLM then phrases the answer naturally: 'Boston is 18°C…'. If the LLM omits a required parameter, the Controller rejects and asks for completion — which is why clean tool descriptions (docstrings or JSON schema) are crucial.",
      diagram_description: "Three lanes: (1) LLM — emits structured JSON call. (2) Agent Controller / Runtime — parses, validates parameters, invokes the real function. (3) Tool / External Service — does the work, returns result. Arrows go LLM -> Controller -> Tool -> Controller -> LLM -> final user-facing answer."
    },
    {
      id: "5.3",
      heading_zh: "工具如何定義?Docstring 與 JSON Schema 兩條路",
      heading_en: "Defining Tools: Docstrings vs. JSON Schema",
      explanation_zh: "代理人要能正確選用工具,必須在 prompt 看到「這個工具是幹嘛的、要傳什麼參數、回傳什麼結構」。兩種主流做法:**(1) 框架路線——用 docstring**。在 CrewAI、LangGraph 等框架裡,你寫一個 Python 函式,在三個引號 \"\"\"\\...\"\"\" 裡描述工具用途、必填/選填參數、回傳格式。框架會把 docstring 自動轉成 LLM 看得懂的工具描述。優點:寫法符合一般 Python 慣例,維護成本低。**(2) 直接 LLM API 路線——用 JSON schema**。如果你不透過框架,直接呼叫 OpenAI / Anthropic API,就要用嚴格的 JSON schema 描述工具:`{\"name\": \"weather_lookup\", \"description\": \"...\", \"input_schema\": {\"type\": \"object\", \"properties\": {\"location\": {\"type\": \"string\", \"description\": \"...\"}}, \"required\": [\"location\"]}}`。多工具用陣列 (list of JSON schemas)。要注意每個模型供應商的 schema 格式略有不同,跨模型專案會變得難維護,這正是大家偏好框架的理由。",
      explanation_en: "For agents to pick the right tool, the prompt must describe what each tool does, what parameters it needs, and what it returns. Two approaches dominate. (1) Framework style — docstrings. In CrewAI or LangGraph you write a Python function and document it in a triple-quoted \"\"\"\\...\"\"\" docstring covering purpose, required/optional parameters, and return format. The framework converts that into LLM-readable tool descriptions. Advantage: it follows normal Python idioms; maintenance is cheap. (2) Direct LLM API style — JSON schema. Without a framework, you call OpenAI / Anthropic APIs directly and must define tools via strict JSON schema: `{\"name\": \"weather_lookup\", \"description\": \"...\", \"input_schema\": {\"type\": \"object\", \"properties\": {\"location\": {\"type\": \"string\", ...}}, \"required\": [\"location\"]}}`. Multiple tools form an array. Each provider's schema differs slightly, so multi-model projects become painful to maintain — which is exactly why frameworks shine.",
      analogy_zh: "像寫履歷:框架的 docstring 像在 Notion 直接打字 (簡單、可讀);JSON schema 像填政府的正式表格 (一格不能錯,但所有單位都認得)。前者寫起來舒服,後者跨系統互通。",
      analogy_en: "Like writing a résumé: a docstring is typing freely in Notion (easy, readable), while a JSON schema is filling out a government form (every field must be exact, but every agency accepts it). The first is comfortable to write; the second is universally interoperable.",
      worked_example_zh: "**Docstring 寫法 (CrewAI / LangGraph)**:\n```python\n@tool\ndef weather_lookup(location: str, date: str = None):\n    \"\"\"\n    A tool that can lookup real-time weather data.\n    Arguments:\n        location (str): The location to lookup weather for\n        date (str) Optional: The date in MM/DD/YYYY format\n    \"\"\"\n    # call API ...\n```\n**JSON schema 寫法 (Anthropic / OpenAI 直接 API)**:\n```json\n{\n  \"name\": \"weather_lookup\",\n  \"description\": \"A tool that can lookup real-time weather data\",\n  \"input_schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"location\": {\"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\"}\n    },\n    \"required\": [\"location\"]\n  }\n}\n```\n兩者目的相同——讓 LLM 知道工具的存在與用法。",
      worked_example_en: "Docstring style (CrewAI / LangGraph):\n```python\n@tool\ndef weather_lookup(location: str, date: str = None):\n    \"\"\"\n    A tool that can lookup real-time weather data.\n    Arguments:\n        location (str): The location to lookup weather for\n        date (str) Optional: The date in MM/DD/YYYY format\n    \"\"\"\n    # call API ...\n```\nJSON schema style (direct Anthropic / OpenAI API):\n```json\n{\n  \"name\": \"weather_lookup\",\n  \"description\": \"A tool that can lookup real-time weather data\",\n  \"input_schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"location\": {\"type\": \"string\", \"description\": \"The city and state, e.g. San Francisco, CA\"}\n    },\n    \"required\": [\"location\"]\n  }\n}\n```\nSame goal either way: make the LLM aware of the tool's existence and proper use.",
      diagram_description: "Side-by-side comparison: Left column 'Docstring (Framework)' showing the Python function with highlighted docstring; right column 'JSON Schema (Direct API)' showing the JSON. Bottom arrow notes both feed into the LLM's prompt context."
    },
    {
      id: "5.4",
      heading_zh: "規劃演算法:七種選項,三種實用性",
      heading_en: "Planning Algorithms: Seven Options, Three Tiers of Practicality",
      explanation_zh: "光有工具不夠,代理人要能「依目標把工具串成有意義的順序」。書中盤點七種規劃演算法,並依「對 LLM 代理人的實用性」分三類。**不實用 (less practical)**:STRIPS、A*、GraphPlan、MCTS。STRIPS 用邏輯謂詞表達狀態,只能處理 true/false,自然語言「有點滿意」這種模糊狀態硬塞不進去;A* 需要明確的成本函式與啟發式,「兩個對話狀態的距離」根本沒辦法量化;GraphPlan 假設動作-效應可清楚分層,語言的組合爆炸讓它在運算上不可行;MCTS 需要大量模擬,在 LLM 場景每次模擬都是 API 呼叫,費用爆表。**中等實用 (moderately practical)**:Fast Forward (FF)。它用啟發式搜尋,目標導向、簡化問題的特性與 LLM 的任務完成方式契合,但「刪除效應」如何在自然語言中定義仍是難題。**最實用 (most practical)**:LLM-based planning 與 HTN (Hierarchical Task Network)。LLM-based 直接用模型生計畫,擁抱自然語言的模糊性;HTN 把複雜任務遞迴拆成子任務,符合 LLM 思考方式,也方便人類介入修正。",
      explanation_en: "Tools without planning don't help — the agent must sequence them toward the goal. The chapter rates seven algorithms across three practicality tiers. Less practical: STRIPS, A*, GraphPlan, MCTS. STRIPS uses logical predicates with only true/false; 'somewhat satisfied' cannot be encoded. A* requires explicit cost and heuristic functions — quantifying 'distance between two conversation states' is meaningless. GraphPlan assumes clean action-effect layering, but language's combinatorial explosion makes it computationally intractable. MCTS needs many simulations; in an LLM setting each simulation is an API call — cost-prohibitive. Moderately practical: Fast Forward (FF). Its heuristic, goal-oriented, simplified-problem nature aligns with how LLMs complete tasks, but defining 'delete effects' for natural language remains hard. Most practical: LLM-based planning and HTN (Hierarchical Task Network). LLM-based uses the model itself to generate plans, embracing language's ambiguity. HTN recursively decomposes complex tasks into subtasks, mirroring how LLMs think and making human intervention easy.",
      analogy_zh: "像帶不同隊伍登山。STRIPS / A* 像「軍隊作戰手冊」——條件清楚才能用,模糊地形就罷工;FF 像「老登山客的經驗法則」——大方向對就行,細節隨機應變,但要訓練;LLM-based 像「資深嚮導臨場判斷」——對話、看天色、與隊員協商,雖然非絕對最優卻最靈活;HTN 像「分階段團隊作戰」——主嚮導定大綱、副嚮導執行子任務,層層分工,人類隨時能插手。LLM 代理人的山勢瞬息萬變,所以後兩種最好用。",
      analogy_en: "Like leading expeditions up a mountain. STRIPS / A* are 'military playbooks' — they need crisp conditions; on ambiguous terrain they stall. FF is 'a veteran climber's rules of thumb' — good for direction, flexible on details, but takes training to use well. LLM-based is 'a seasoned guide making field calls' — talks with the team, reads the weather, negotiates choices; not provably optimal but maximally adaptable. HTN is 'tiered teamwork' — head guide drafts the outline, sub-guides own subtasks, humans can intervene at any layer. The mountain that LLM agents face changes by the minute, so the last two work best.",
      worked_example_zh: "用 FF 改造給 LLM 代理人:`LLMFastForward` 類別有兩個方法。`create_relaxed_plan(current_state, goal)` 把當下狀態與目標餵給 LLM,讓它產出「忽略複雜度的簡化步驟序列」;`select_next_action(relaxed_plan)` 從計畫中挑下一步行動。例如目標是「為使用者規劃峇里島五日遊」,FF 可能產出:「1. 查機票 2. 訂飯店 3. 排活動 4. 安排接駁 5. 寄行程表」。簡化計畫忽略「機票漲價怎辦」、「飯店訂滿怎辦」等真實複雜性,但作為導航藍圖夠用。LLM 在執行時再隨機應變補上細節——這就是 FF 給 LLM 代理人的中等實用性:能用,但要大改。",
      worked_example_en: "FF adapted for LLM agents: `LLMFastForward` has two methods. `create_relaxed_plan(current_state, goal)` feeds the state and goal to the LLM and asks for a simplified step sequence ignoring complications; `select_next_action(relaxed_plan)` picks the next step. Goal: 'plan a 5-day Bali trip.' FF might emit: '1. find flights, 2. book hotel, 3. schedule activities, 4. arrange transfers, 5. send itinerary.' The relaxed plan ignores 'what if flights spike?' or 'what if the hotel sells out?' but serves as a navigation map. The LLM fills in details at execution time — that's FF's moderate practicality: usable, but needs significant adaptation.",
      diagram_description: "A triangle stack: top (Most Practical) = LLM-based planning + HTN; middle (Moderate) = FF; bottom (Less Practical) = STRIPS, A*, GraphPlan, MCTS. Annotations on the right side list reasons (e.g., 'language ambiguity' for the bottom tier, 'cost-prohibitive simulations' for MCTS)."
    },
    {
      id: "5.5",
      heading_zh: "HTN 階層式任務分解:LLM 代理人的最佳拍檔",
      heading_en: "HTN: Hierarchical Task Decomposition, an LLM Agent's Best Friend",
      explanation_zh: "HTN (Hierarchical Task Network) 的核心觀念:把複雜任務逐層拆成子任務,直到剩下可直接執行的「原子任務」(primitive tasks)。書中用「買菜」當入門例子:`buy_groceries_task` 拆成 `go_to_store → select_items → checkout → return_home`;`select_items` 再拆成 `check_list → find_item → add_to_cart`。這種「樹狀分解」貼近人類思考方式,LLM 在做這件事時非常自然。在 CrewAI 裡,HTN 對應到「階層式處理」(`Process.hierarchical`):你定義一個 `manager`(可以是 agent 或直接是 LLM),它負責拆解使用者請求並把子任務分派給專業 worker agents。例如旅遊規劃 manager 看到「規劃巴黎五日遊」,自動拆成「找航班 (給 flight_specialist)、訂飯店 (給 accommodation_specialist)、排活動 (給 activity_specialist)」。Manager 是 agent 還是 LLM 各有優缺:agent manager 可控性高、可寫進業務邏輯;LLM manager 靈活但較難預測。HTN 的優勢:(1) 結構直觀、易維護;(2) 把搜尋空間切小,提升效率;(3) 可重用子任務模板;(4) 同一系統可在抽象與具體層次自由切換。",
      explanation_en: "HTN's core idea: recursively break a complex task into subtasks until you hit primitive tasks the agent can execute directly. The book uses 'buy groceries' as the gentle intro: `buy_groceries_task` decomposes into `go_to_store → select_items → checkout → return_home`; `select_items` further into `check_list → find_item → add_to_cart`. This tree-shaped decomposition mirrors how humans think and how LLMs naturally process tasks. In CrewAI, HTN maps to hierarchical processing (`Process.hierarchical`): you define a manager (either an agent or the LLM directly) that breaks down the user request and delegates subtasks to specialist worker agents. A travel-planning manager sees 'plan a 5-day Paris trip' and auto-decomposes into 'find flights (flight_specialist), book hotel (accommodation_specialist), arrange activities (activity_specialist).' Choosing agent-manager vs. LLM-manager is a trade-off: agent-manager is more controllable and lets you encode business logic; LLM-manager is more flexible but less predictable. HTN strengths: (1) intuitive structure, easy maintenance; (2) shrinks the search space for efficiency; (3) reusable subtask templates; (4) seamless movement between abstract and concrete levels.",
      analogy_zh: "像辦婚禮。新人說「我要辦個夢幻婚禮」(抽象任務),婚禮顧問拆成「場地、餐飲、攝影、音樂」(子任務);場地再拆「室內 or 戶外、座位、佈置」(更小子任務);最後到「訂第 23 號蝴蝶蘭十盆」這種可直接執行的原子任務。HTN 就是這層層拆解的思考骨架。",
      analogy_en: "Like planning a wedding. The couple says 'we want a dream wedding' (abstract task). The planner breaks it into 'venue, catering, photography, music' (subtasks). Venue splits into 'indoor or outdoor, seating, decor' (smaller subtasks). Eventually you reach primitive tasks like 'order 10 pots of butterfly orchids #23.' HTN is the skeleton of that layered breakdown.",
      worked_example_zh: "建立 HTN 風格的旅遊規劃 Crew:三個專業 worker——`flight_specialist`、`accommodation_specialist`、`activity_specialist`,各自有 role / goal / backstory。然後用 `manager_llm = ChatOpenAI(model='gpt-4o-mini')` 設一個 LLM 經理。定義一個高階任務 `travel_planning_task`,描述「規劃完整行程,包含航班、住宿、其他組件」,並把 `agent` 設為 None——這個訊號告訴 CrewAI「讓 manager 自行拆解並分派」。組成 `Crew(agents=[...三位專家...], tasks=[travel_planning_task], process=Process.hierarchical, manager_llm=manager_llm)` 後執行 `crew.kickoff()`。LLM manager 會自動產出像「我先請 flight_specialist 找紐約到巴黎航班、同時請 accommodation_specialist 找飯店、再請 activity_specialist 安排凡爾賽日遊」的計畫,並整合結果成完整旅遊行程。書中範例輸出包含航班總額 $2960、飯店 $800、接駁 $100、日遊 $364.20 等估算 (注意:沒接外部工具時內容是虛構的,真實系統需要搭配第 5.6 節的工具呼叫)。",
      worked_example_en: "Build an HTN-style travel Crew: three specialist workers — `flight_specialist`, `accommodation_specialist`, `activity_specialist` — each with role / goal / backstory. Then set an LLM manager: `manager_llm = ChatOpenAI(model='gpt-4o-mini')`. Define a high-level task `travel_planning_task` describing 'plan a comprehensive itinerary covering flights, accommodation, other components' and set `agent=None` — this tells CrewAI 'let the manager decompose and delegate.' Compose `Crew(agents=[...the three specialists...], tasks=[travel_planning_task], process=Process.hierarchical, manager_llm=manager_llm)` and run `crew.kickoff()`. The LLM manager produces a plan like 'first ask flight_specialist for NYC-Paris flights, in parallel ask accommodation_specialist for a hotel, then ask activity_specialist to design a Versailles day trip,' and integrates results into a full itinerary. The book's sample output includes total flights $2,960, hotel $800, transfers $100, day trip ~$364.20 — note that without external tools these numbers are fabricated, so production systems pair HTN with the tool-calling pattern from section 5.6.",
      diagram_description: "A tree diagram: root node 'Plan 5-day Paris trip' branches into 'Flights', 'Accommodation', 'Activities', 'Transportation'. 'Flights' further branches into 'Outbound', 'Return', 'Seat selection'. 'Activities' branches into 'Day 1 Louvre', 'Day 3 Versailles', etc. Mark each leaf as a 'primitive task' that maps to a worker agent's tool call."
    },
    {
      id: "5.6",
      heading_zh: "三大框架實作旅遊代理人:CrewAI、AutoGen、LangGraph",
      heading_en: "Three Frameworks, One Travel Agent: CrewAI, AutoGen, LangGraph",
      explanation_zh: "同一個「規劃旅程」的需求,用三個熱門框架實作,你會立刻看到設計哲學的差異。**CrewAI**——以「角色 + 任務 + Crew」為單位。用 `@tool` 裝飾器定義工具,把工具掛在 agent 上,任務描述清楚就能跑。其執行模型偏「層次化任務分工」(manager-worker),適合明確流程。**AutoGen**——以「多 agent 對話」為單位。用 `RoundRobinGroupChat`,各專業 agent 輪流發言,直到一個 agent 講出「TERMINATE」結束。工具直接在初始化時掛給 agent。設計哲學偏向「對話協作」,適合需要多視角討論的場景。**LangGraph**——把整個工作流定義成「狀態機 / 有向圖」。節點 (nodes) 是處理單元 (agent 節點、tool 節點等),邊 (edges) 是流程跳轉。條件邊可決定「下一步是再呼叫工具還是結束」。`MemorySaver` 提供 checkpoint 讓狀態可跨執行持久化。設計偏向「明確流程控制」,可視化好、適合複雜工作流,但前期 setup 較重。三者的差異總結成表 5.1:狀態管理 (LangGraph 顯式 / CrewAI 透過 agent 與 task / AutoGen 透過群聊歷史);工具整合 (LangGraph 專用 tool 節點 / CrewAI 裝飾器 / AutoGen 直接掛在 agent);流程控制 (LangGraph 圖形 / CrewAI 層次或順序 / AutoGen 輪詢)。",
      explanation_en: "Same 'plan a trip' requirement, three popular frameworks — the design philosophies leap out. CrewAI: unit of organization is 'role + task + Crew.' Define tools with `@tool`, attach them to agents, write clear task descriptions, and run. Execution model leans hierarchical (manager-worker), great for well-defined pipelines. AutoGen: unit of organization is 'multi-agent conversation.' Use `RoundRobinGroupChat` so specialist agents take turns until one emits 'TERMINATE.' Tools are bound at agent initialization. Philosophy emphasizes conversational collaboration — ideal when multiple viewpoints must negotiate. LangGraph: defines the entire workflow as a state machine / directed graph. Nodes are processing units (agent node, tool node), edges are flow transitions. A conditional edge can route 'call tool again or end.' `MemorySaver` provides checkpoints so state persists across runs. Philosophy emphasizes explicit flow control — great visualization and robust for complex workflows, but more setup. Table 5.1 sums it up: state management (LangGraph explicit / CrewAI via agent + task context / AutoGen via chat history); tool integration (LangGraph tool node / CrewAI decorator / AutoGen direct binding); flow control (LangGraph graph / CrewAI hierarchical or sequential / AutoGen round-robin).",
      analogy_zh: "想像三個音樂團體演奏同一首曲子。CrewAI 像古典交響樂團——指揮 (manager) 點頭、各聲部 (workers) 按譜演奏,流程明確。AutoGen 像爵士四重奏——四位樂手即興輪流獨奏,彼此回應,直到鼓手收尾。LangGraph 像舞台劇——每個場景 (node) 寫死,演員依劇本走位,場景間用明確的觸發條件 (edge) 切換。同一個故事可用三種方式講出來,各有所長。",
      analogy_en: "Three ensembles playing the same piece. CrewAI = symphony orchestra — the conductor (manager) nods, each section (workers) plays its score; flow is explicit. AutoGen = jazz quartet — four musicians take turns improvising, responding to each other until the drummer ends it. LangGraph = stage play — every scene (node) is scripted, actors hit their marks, transitions between scenes use clear triggers (edges). Same story told three ways, each with its strengths.",
      worked_example_zh: "CrewAI 範例:`@tool(\"Search for available flights\")` 三個工具 search_flights / find_hotels / find_activities,掛在 `travel_concierge` 上,任務描述「規劃完整行程」,呼叫 `crew.kickoff()`,CrewAI 自動串接工具。AutoGen 範例:四個 agent (flight_agent, hotel_agent, activities_agent, summary_agent) 各自掛 tools,組成 `RoundRobinGroupChat`,設 `TextMentionTermination('TERMINATE')`,呼叫 `await Console(group_chat.run_stream(task='I need to plan a trip to Paris from New York for 5 days.'))`,agents 輪流對話直到 summary_agent 說 TERMINATE。LangGraph 範例:用 `@tool` 定義同樣工具;`workflow = StateGraph(MessagesState)` 加 `agent` 節點與 `tools` 節點,`add_edge(START, 'agent')`,`add_conditional_edges('agent', should_continue)` 決定下一步,`add_edge('tools', 'agent')` 形成迴圈;`MemorySaver` 做檢查點;`app.invoke({...})` 啟動。三段代碼解決同一問題,但抽象層次各異——理解三者讓你能依專案選最合適的框架。",
      worked_example_en: "CrewAI snippet: `@tool(\"Search for available flights\")` for three tools — search_flights, find_hotels, find_activities — attached to a `travel_concierge` agent. Task description: 'plan a comprehensive itinerary.' Run `crew.kickoff()` and CrewAI chains tool calls automatically. AutoGen snippet: four agents (flight_agent, hotel_agent, activities_agent, summary_agent), each with bound tools, composed into a `RoundRobinGroupChat` with `TextMentionTermination('TERMINATE')`. Run `await Console(group_chat.run_stream(task='I need to plan a trip to Paris from New York for 5 days.'))` — agents converse in turn until summary_agent emits TERMINATE. LangGraph snippet: same `@tool`-decorated functions; `workflow = StateGraph(MessagesState)`, add `agent` and `tools` nodes, `add_edge(START, 'agent')`, `add_conditional_edges('agent', should_continue)` to decide the next hop, `add_edge('tools', 'agent')` to close the loop; `MemorySaver` for checkpoints; `app.invoke({...})` to run. Three code samples, same problem, different abstractions — understanding all three lets you pick the right tool for the project.",
      diagram_description: "Three columns side-by-side. Column 1 (CrewAI): hierarchical box diagram with Manager on top, three Workers below, Tools as leaves. Column 2 (AutoGen): four agents in a circle with arrows showing round-robin turn-taking, and a TERMINATE trigger leaving the circle. Column 3 (LangGraph): an explicit directed graph with START -> agent node, agent node -> tools node (conditional), tools node -> agent node (loop), agent node -> END (conditional)."
    }
  ],
  code_or_procedure_zh: "**CrewAI 完整實作 (旅遊規劃)**:\n```python\nfrom crewai import Agent, Task, Crew\nfrom crewai_tools import tool\n\n@tool(\"Search for available flights between cities\")\ndef search_flights(origin: str, destination: str, date: str) -> dict:\n    \"\"\"Search for flights between cities.\"\"\"\n    # call flight API ...\n\n@tool(\"Find available hotels in a location\")\ndef find_hotels(location: str, check_in: str, check_out: str) -> dict:\n    \"\"\"Search for hotels in a location.\"\"\"\n    # call hotel API ...\n\n@tool(\"Find available activities in a location\")\ndef find_activities(location: str, dates: list) -> dict:\n    \"\"\"Find activities in a location.\"\"\"\n    # call activities API ...\n\ntravel_agent = Agent(\n    role='An expert travel concierge',\n    goal='Handle all aspects of travel planning',\n    backstory='Expert in flights, hotels, and activity bookings.',\n    tools=[search_flights, find_hotels, find_activities])\n\ntravel_task = Task(\n    description='Plan a 5-day trip to Paris from New York including flights, accommodation, and activities.',\n    expected_output='A detailed travel itinerary',\n    agent=travel_agent)\n\ncrew = Crew(agents=[travel_agent], tasks=[travel_task])\nresult = crew.kickoff()\n```\n\n**AutoGen 完整實作**:\n```python\nfrom autogen_agentchat.agents import AssistantAgent\nfrom autogen_agentchat.teams import RoundRobinGroupChat\nfrom autogen_agentchat.conditions import TextMentionTermination\n\nflight_agent = AssistantAgent(name='flight_planner', model_client=model_client,\n    tools=[search_flights], system_message='Plan flight itineraries.')\nhotel_agent = AssistantAgent(name='hotel_planner', model_client=model_client,\n    tools=[find_hotels], system_message='Find hotels.')\nactivities_agent = AssistantAgent(name='activities_planner', model_client=model_client,\n    tools=[find_activities], system_message='Plan activities.')\nsummary_agent = AssistantAgent(name='summary', model_client=model_client,\n    system_message='Compile the final plan. End with TERMINATE.')\n\ntermination = TextMentionTermination('TERMINATE')\ngroup_chat = RoundRobinGroupChat(\n    [flight_agent, hotel_agent, activities_agent, summary_agent],\n    termination_condition=termination)\nawait group_chat.run_stream(task='Plan a 5-day Paris trip from NYC.')\n```\n\n**LangGraph 完整實作**:\n```python\nfrom langgraph.graph import StateGraph, START, MessagesState\nfrom langgraph.prebuilt import ToolNode\nfrom langgraph.checkpoint.memory import MemorySaver\n\ntools = [search_flights, find_hotels, find_activities]\ntool_node = ToolNode(tools)\n\ndef call_model(state): ...    # LLM picks action or finishes\ndef should_continue(state): return 'tools' if needs_tool(state) else 'END'\n\nworkflow = StateGraph(MessagesState)\nworkflow.add_node('agent', call_model)\nworkflow.add_node('tools', tool_node)\nworkflow.add_edge(START, 'agent')\nworkflow.add_conditional_edges('agent', should_continue)\nworkflow.add_edge('tools', 'agent')\n\ncheckpointer = MemorySaver()\napp = workflow.compile(checkpointer=checkpointer)\nfinal_state = app.invoke(\n    {'messages': [HumanMessage(content='Plan a 5-day Paris trip from NYC')]},\n    config={'configurable': {'thread_id': 42}})\n```",
  code_or_procedure_en: "Same content as code_or_procedure_zh — three complete implementations side by side: CrewAI uses @tool decorators and a Crew with role-based agents; AutoGen uses RoundRobinGroupChat with TextMentionTermination; LangGraph compiles an explicit state graph with agent and tools nodes plus a MemorySaver checkpoint. Refer to the zh version for the full annotated code (the comments are language-neutral).",
  key_takeaways_zh: [
    "LLM 不執行程式碼,它只生成結構化呼叫;真正執行由 Agent Controller 負責",
    "工具有五大類:API、資料庫、效用函式、整合工具、硬體介面",
    "對 LLM 代理人最實用的規劃演算法是 LLM-based planning 與 HTN",
    "HTN 把複雜任務拆成子任務樹,符合 LLM 的思考方式且便於人類介入",
    "CrewAI 偏層次化、AutoGen 偏對話協作、LangGraph 偏明確圖形流程——選對工具事半功倍"
  ],
  key_takeaways_en: [
    "LLMs don't execute code — they emit structured calls; the Agent Controller runs them",
    "Five tool categories: APIs, databases, utility functions, integration tools, hardware interfaces",
    "Most practical planning for LLM agents: LLM-based planning and HTN",
    "HTN decomposes complex tasks into subtask trees, matching how LLMs think and enabling human intervention",
    "CrewAI leans hierarchical, AutoGen leans conversational, LangGraph leans explicit graph control — pick to fit"
  ],
  common_pitfalls_zh: [
    "以為 LLM 真的在跑程式碼——它只是生成 JSON,你必須有 runtime 去執行",
    "把所有規劃問題都塞給 STRIPS / A*——這些古典演算法在自然語言情境失效",
    "純用 HTN 拆任務卻沒接工具,結果像書中範例那樣產出『看似完整但全是虛構』的行程"
  ],
  common_pitfalls_en: [
    "Believing the LLM actually runs the code — it only emits JSON; you need a runtime to execute",
    "Forcing all planning into STRIPS / A* — classical algorithms fail in natural-language settings",
    "Running pure HTN without tools — you get plausible-looking but entirely fabricated itineraries, exactly as the book warns"
  ],
  quiz: [
    {
      question_zh: "下列何者最準確描述工具呼叫 (tool calling) 的執行流程?",
      question_en: "Which best describes how tool calling actually executes?",
      options_zh: [
        "LLM 直接呼叫 Python 函式並接收回傳值",
        "LLM 生成結構化呼叫指令,Agent Controller 或 runtime 執行實際工具",
        "LLM 把 Python 程式碼編譯成 binary 後在 GPU 上跑",
        "工具自動偵測 LLM 意圖,不需要任何指令"
      ],
      options_en: [
        "The LLM directly calls Python functions and receives return values",
        "The LLM emits a structured call instruction; an Agent Controller or runtime executes the actual tool",
        "The LLM compiles Python code to binary and runs it on the GPU",
        "The tool auto-detects the LLM's intent without any instruction"
      ],
      answer_index: 1,
      explanation_zh: "LLM 永遠只生成『要呼叫哪個工具、傳什麼參數』的結構化文字 (JSON 等);實際執行由 Agent Controller 或框架 runtime 處理。",
      explanation_en: "The LLM always only emits structured text (usually JSON) declaring which tool to call and with what parameters; an Agent Controller or framework runtime does the actual work."
    },
    {
      question_zh: "為什麼 STRIPS、A*、GraphPlan、MCTS 被歸為對 LLM 代理人『不實用』?",
      question_en: "Why are STRIPS, A*, GraphPlan, and MCTS classified as 'less practical' for LLM agents?",
      options_zh: [
        "它們執行太快導致 LLM 跟不上",
        "它們需要明確狀態 / 量化成本 / 大量模擬,難以對應自然語言的模糊與成本",
        "它們已被廢棄,沒有實作可用",
        "它們只能在 Windows 上跑"
      ],
      options_en: [
        "They execute too fast for the LLM to follow",
        "They require crisp states, quantifiable costs, or massive simulations — mismatched to language's ambiguity and cost",
        "They've been deprecated with no implementations",
        "They only run on Windows"
      ],
      answer_index: 1,
      explanation_zh: "STRIPS 需 true/false 狀態、A* 需量化成本、GraphPlan 需動作-效應分層、MCTS 需大量 LLM 呼叫模擬——這些假設都與自然語言場景不相容。",
      explanation_en: "STRIPS needs binary state, A* needs quantifiable cost, GraphPlan needs cleanly layered action effects, and MCTS needs many simulated LLM calls — all incompatible with natural-language settings."
    },
    {
      question_zh: "HTN 的核心特色是什麼?",
      question_en: "What is the defining feature of HTN?",
      options_zh: [
        "用 GPU 加速搜尋",
        "把高階任務遞迴拆成更小的子任務,直到原子任務",
        "永遠只用一個 agent 完成所有工作",
        "完全不需要 LLM"
      ],
      options_en: [
        "GPU-accelerated search",
        "Recursively decompose high-level tasks into smaller subtasks until reaching primitive tasks",
        "Always use a single agent for everything",
        "Never needs an LLM"
      ],
      answer_index: 1,
      explanation_zh: "HTN = Hierarchical Task Network,精髓就是『階層式任務分解』,從抽象任務一層層拆到可直接執行的原子任務。",
      explanation_en: "HTN stands for Hierarchical Task Network — its essence is hierarchical decomposition from abstract tasks down to executable primitives."
    },
    {
      question_zh: "下列何者最能描述 AutoGen 的設計哲學?",
      question_en: "Which best describes AutoGen's design philosophy?",
      options_zh: [
        "明確的有向圖流程控制",
        "多 agent 透過輪流對話 (round-robin) 協作,以關鍵字觸發結束",
        "單一 agent + 工具裝飾器",
        "純函式式不可變狀態"
      ],
      options_en: [
        "Explicit directed-graph flow control",
        "Multi-agent collaboration via round-robin conversation, ended by a keyword trigger",
        "Single agent + tool decorators",
        "Purely functional immutable state"
      ],
      answer_index: 1,
      explanation_zh: "AutoGen 用 RoundRobinGroupChat 讓多個專業 agent 輪流發言,直到某個 agent 講出 TERMINATE 才結束——是對話協作派。",
      explanation_en: "AutoGen uses RoundRobinGroupChat so specialist agents take turns speaking until one emits TERMINATE — it's the conversational collaboration camp."
    },
    {
      question_zh: "在 LangGraph 中,`add_conditional_edges('agent', should_continue)` 的作用是?",
      question_en: "In LangGraph, what does `add_conditional_edges('agent', should_continue)` do?",
      options_zh: [
        "刪除 agent 節點",
        "根據 should_continue 函式回傳值,決定 agent 節點之後跳到哪個節點 (例如 tools 或 END)",
        "為 agent 增加 GPU 加速",
        "讓 agent 進入睡眠模式"
      ],
      options_en: [
        "Delete the agent node",
        "Use the should_continue function's return value to decide which node comes after agent (e.g., tools or END)",
        "Add GPU acceleration to the agent",
        "Put the agent into sleep mode"
      ],
      answer_index: 1,
      explanation_zh: "conditional edges 是 LangGraph 的條件分支機制——agent 處理完後,根據 should_continue 的回傳值決定下一站是 tools 還是結束。",
      explanation_en: "Conditional edges are LangGraph's branching mechanism — after the agent runs, should_continue decides whether to route to the tools node or end."
    }
  ]
};

const chapter6 = {
  id: 6,
  title_zh: "協調者-工作者-委派者 (CWD) 模型",
  title_en: "The Coordinator, Worker, Delegator (CWD) Approach",
  subtitle_zh: "向人類組織學設計——用角色分工、清楚溝通,讓多代理人系統像一支熟練的團隊。",
  subtitle_en: "Borrow from human organizations — role assignment and clear communication so multi-agent systems behave like a well-rehearsed team.",
  overview_zh: "單一代理人能處理的任務有上限。當任務需要多領域專業 (查機票、訂飯店、規劃活動、評估預算),把所有能力塞進一個巨型代理人 prompt 反而會降低品質。本章介紹從組織心理學與管理理論衍生的 CWD 模型,讓多代理人系統像一支職責分明的職場團隊:**Coordinator (協調者)** 負責戰略規劃與全局監督;**Worker (工作者)** 是專業執行者;**Delegator (委派者)** 是中間人,接收協調者的策略並把任務派給合適的工作者。本章以「智慧旅遊代理人」為實例,展示 9 步驟從使用者請求到最終行程交付的完整流程。我們會深入講解角色設計 (role + backstory + goals)、四大基礎原則 (關注點分離、層級組織、雙向資訊流、適應性與韌性)、以及通訊協定 (FIPA ACL)、協調機制、衝突談判、知識共享。最後切入 LLM 實作:system prompt、結構化指令格式 (input、output、message)、互動模式 (message passing、state management、feedback loops)——這些就是把組織理論轉成可運作 LLM 系統的橋樑。",
  overview_en: "A single agent has a ceiling. When a task requires multiple specialties — flight search, hotel booking, activity planning, budget evaluation — cramming everything into one mega-prompt degrades quality. This chapter introduces CWD, a model drawn from organizational psychology and management theory, that turns multi-agent systems into well-staffed teams. Coordinator handles strategic planning and global oversight. Worker is the specialist executor. Delegator is the middle layer that receives strategy from the coordinator and assigns tasks to the right workers. Using the intelligent travel agent as a running example, the chapter walks through a 9-step flow from user request to final itinerary delivery. We cover role design (role + backstory + goals), the four founding principles (separation of concerns, hierarchical organization, bidirectional information flow, adaptability and resilience), and the communication stack (FIPA ACL, coordination mechanisms, conflict negotiation, knowledge sharing). The final stretch translates the organizational theory into LLM implementation: system prompts, structured instruction formats (input, output, message), and interaction patterns (message passing, state management, feedback loops).",
  learning_objectives_zh: [
    "說明 CWD 三角色 (Coordinator / Worker / Delegator) 各自的職責與互動",
    "列出 CWD 四大原則並用旅遊代理人例子說明",
    "為新增代理人撰寫有效的 role + backstory + goals (CrewAI 風格)",
    "設計多代理人通訊協定、協調機制、與衝突談判流程",
    "把 CWD 原則轉成 LLM 實作:system prompt、結構化 I/O、訊息協定"
  ],
  learning_objectives_en: [
    "Describe each CWD role's responsibilities and how they interact",
    "List the four founding principles and explain them with the travel-agent example",
    "Write effective role + backstory + goals for a new agent (CrewAI style)",
    "Design communication protocols, coordination mechanisms, and conflict negotiation flows",
    "Translate CWD principles into LLM implementation: system prompts, structured I/O, message protocols"
  ],
  sections: [
    {
      id: "6.1",
      heading_zh: "CWD 模型:多代理人系統的職場藍圖",
      heading_en: "The CWD Model: An Org Chart for Multi-Agent Systems",
      explanation_zh: "CWD 模型把組織管理的智慧搬進 AI 系統。三個角色各司其職:**Coordinator (協調者)**——像專案總監,負責管理任務、資源、整體工作流;監控進度、根據需求動態調整任務指派;確保整個系統往目標推進。**Worker (工作者)**——像各領域的專業人員 (機票專家、飯店專家、活動策劃師),擁有特定的工具與專業,接到任務就執行。**Delegator (委派者)**——像現場主管,扮演協調者與工作者之間的橋樑,評估工作者的能力與工作量,把任務派給最適合的人,確保負載平衡、低延遲、高吞吐量。書中強調這不只是「換個名字」——當你有 5+ 個專業代理人時,Coordinator 不該直接跟每個 Worker 講話 (像 5 人創業公司轉成 50 人企業還是讓 CEO 親自指揮會卡死);加入 Delegator 這層才能維持規模化的效率。",
      explanation_en: "CWD imports organizational wisdom into AI systems. Three roles with distinct charters. Coordinator — like a program director, manages tasks, resources, and overall workflow; monitors progress and dynamically reassigns tasks; keeps the system pointed at the goal. Worker — like domain specialists (flight expert, hotel expert, activity curator), each with specific tools and expertise, executing when assigned. Delegator — like a floor supervisor, the bridge between coordinator and workers; assesses each worker's capabilities and current load to assign tasks optimally, balancing throughput, latency, and resource utilization. The chapter stresses this isn't relabeling — once you have 5+ specialist agents, having the Coordinator talk directly to each Worker is like a 50-person company where the CEO micromanages every employee. The Delegator layer is what makes it scale.",
      analogy_zh: "想像一家高級餐廳。主廚 (Coordinator) 決定今晚的整套菜單與用餐節奏;副主廚 (Delegator) 看現場各崗位的忙閒,把點單分派給最不忙、最擅長的線位廚師;線位廚師 (Workers)——冷盤師、燒烤師、糕點師——各自用熟練的工具完成菜餚。沒有副主廚,主廚會被點單淹沒;沒有線位廚師,光有副主廚也煮不出菜。三者缺一不可。",
      analogy_en: "Picture a high-end restaurant. The executive chef (Coordinator) sets the night's menu and dining tempo. The sous chef (Delegator) reads each station's load and routes tickets to the least busy, most capable line cook. The line cooks (Workers) — garde manger, grill, pastry — each wield specialized tools to plate dishes. Without a sous chef, the executive chef drowns in tickets; without line cooks, the sous chef can't put food on plates. All three are essential.",
      worked_example_zh: "使用者請求:「為兩人規劃 6/15-22 的羅馬之旅,預算 $3000。」**Coordinator** (Travel Planning Executive) 分析需求,擬出策略:「先確認航班、再協調住宿、平行排活動、最後整合接駁與保險。」**Delegator** (Travel Operations Orchestrator) 把這份策略拆給:flight_specialist (查 NYC↔Rome 航班)、hotel_specialist (找市中心 4 星) 、activity_curator (排古羅馬遺跡 + 美食體驗)、transport_coordinator (機場接送)。**Workers** 各自呼叫工具完成任務後把結果回給 Delegator,Delegator 整合並驗證 (例如:check-in 時間是否晚於落地)。最後 Coordinator 審視整套行程、確認預算 $2,890 在範圍內、寄給使用者。每個角色只做擅長的事,系統運作如熟練的職場團隊。",
      worked_example_en: "User asks: 'Plan a Rome trip for 2 adults, June 15–22, budget $3,000.' Coordinator (Travel Planning Executive) analyzes the request and lays out strategy: 'confirm flights first, coordinate accommodation, schedule activities in parallel, then bind transfers and insurance.' Delegator (Travel Operations Orchestrator) breaks the strategy into tasks: flight_specialist searches NYC↔Rome routes; hotel_specialist finds a 4-star city-center option; activity_curator builds a Colosseum + food tour itinerary; transport_coordinator arranges airport transfers. Workers execute via tools and return results to the Delegator, who consolidates and validates (e.g., hotel check-in after flight arrival?). Coordinator reviews the full plan, confirms $2,890 fits the budget, and ships to the user. Each role does only what it's best at — a well-rehearsed team in action.",
      diagram_description: "Three-tier pyramid. Top: Coordinator (single box). Middle: Delegator (single box) with bidirectional arrows to Coordinator. Bottom: row of Worker agents (Flight, Hotel, Activity, Transport, Data Analyst, Reflector, Searcher) each with their tools shown as smaller leaves. Annotate downward arrows as 'task assignment, priorities' and upward arrows as 'progress, results, resource use'."
    },
    {
      id: "6.2",
      heading_zh: "CWD 四大原則:讓系統規模化又有韌性",
      heading_en: "The Four Founding Principles: Scale and Resilience",
      explanation_zh: "**(1) 關注點分離 (Separation of Concerns)**——戰略規劃 (Coordinator)、資源管理 (Delegator)、任務執行 (Worker) 分屬不同層級,每個元件專注於自己的核心能力。這讓系統更容易維護:你升級飯店搜尋演算法時,不用動到航班 worker;你增加新的目標 (例如永續性權重) 時,只需調整 Coordinator 層。**(2) 層級組織 (Hierarchical Organization)**——三層架構:頂層戰略監督、中層資源管理、底層任務執行,鏡像許多成功的人類組織。**(3) 雙向資訊流 (Bidirectional Information Flow)**——往下流的是任務指派、優先順序、約束;往上流的是進度更新、結果、資源使用狀況。光有單向命令沒回饋,Coordinator 就成了盲人開車。**(4) 適應性與韌性 (Adaptability and Resilience)**——透過四個機制達成:動態資源配置 (即時重新分配運算/操作資源避免瓶頸)、冗餘容錯 (多個 Worker 有重疊能力,某個故障時無縫切換)、跨 Worker 負載平衡 (按可用性、專長、當前負載派任務)、執行期角色重組 (Worker 可在系統需求變化時切換職責)。這四項加起來讓系統在無法預測的條件下仍維持效能。",
      explanation_en: "(1) Separation of concerns — strategic planning (Coordinator), resource management (Delegator), task execution (Worker) live at different layers, each focused on its core competency. This makes maintenance easy: upgrade the hotel search algorithm without touching flight workers; add a sustainability goal by adjusting only the Coordinator. (2) Hierarchical organization — three layers (strategic oversight on top, resource management in the middle, specialized execution at the base) mirroring successful human institutions. (3) Bidirectional information flow — downward: task assignments, priorities, constraints; upward: progress updates, results, resource utilization. One-way command without feedback turns the Coordinator into a blindfolded driver. (4) Adaptability and resilience — four mechanisms: dynamic resource allocation (real-time redistribution to prevent bottlenecks); fault tolerance through redundancy (multiple workers with overlapping capabilities for seamless handoff); load balancing across workers (assign by availability, expertise, current load); runtime role reassignment (workers can switch roles as system needs evolve). Together they keep performance steady under unpredictable conditions.",
      analogy_zh: "像消防隊。隊長 (Coordinator) 評估火場戰略;副隊長 (Delegator) 看每組隊員的位置與裝備,派任務 (救人、滅火、疏散);各組消防員 (Workers) 各擅其長。雙向通訊讓隊長隨時掌握進度;當一組受傷無法繼續,另一組能立刻接手——這就是 CWD 四原則的活範例。",
      analogy_en: "Like a firehouse on a call. The chief (Coordinator) evaluates the strategy. The lieutenant (Delegator) sees where each crew is and what gear they have, assigns missions (rescue, suppress, evacuate). Each crew (Workers) is a specialist team. Two-way radio keeps the chief informed; if one crew is injured, another instantly picks up their mission. That's the four CWD principles in live action.",
      worked_example_zh: "情境:旅遊 Crew 正同時處理 50 個客戶請求。突然,航班 API 出現延遲。**動態資源配置**:Delegator 偵測 flight_specialist 排隊變長,把部分任務暫存,優先處理「使用者已付款待確認」這類緊急的;**冗餘容錯**:系統有兩個 flight worker (A、B),A 卡住時 B 接手;**負載平衡**:把客戶請求平均分給 hotel_specialist 三實例,避免單一實例過載;**角色重組**:其中一個閒置的 activity_curator 暫時切換成「機票協調員」協助處理積壓——雖然不是它的本業,但有共享的 prompt 模板能勝任基本任務。十分鐘後 API 恢復,系統自動還原各 worker 角色。",
      worked_example_en: "Scenario: the travel Crew is handling 50 concurrent customer requests when the flight API slows down. Dynamic resource allocation: the Delegator notices flight_specialist's queue growing, holds non-urgent tasks, and prioritizes 'already-paid awaiting confirmation' work. Fault tolerance via redundancy: there are two flight workers (A, B); when A stalls, B takes over. Load balancing: customer requests are evenly distributed across three hotel_specialist instances to avoid hotspots. Role reassignment: an idle activity_curator temporarily becomes a 'flight coordinator helper' to drain the backlog — not its main job, but shared prompt scaffolding lets it handle basics. Ten minutes later the API recovers and the system auto-restores everyone to their original roles.",
      diagram_description: "A four-quadrant diagram, one principle per quadrant: Separation of Concerns (three vertical lanes labeled Strategy / Resource / Execution); Hierarchical Organization (3-tier pyramid); Bidirectional Information Flow (arrows up and down); Adaptability and Resilience (four small icons for dynamic allocation, redundancy, load balancing, role reassignment). Center: 'CWD'."
    },
    {
      id: "6.3",
      heading_zh: "為 Worker 設計角色:role + backstory + goals",
      heading_en: "Designing Worker Roles: role + backstory + goals",
      explanation_zh: "在 CrewAI 風格的 LLM 代理人中,設計一個 Worker 不只是給它工具——你還要寫好三件事:**role (角色)**——一句話定義它在系統的職位與權限,例如 'Aviation Booking Specialist'。**backstory (背景故事)**——精心設計的敘述,塑造代理人的決策風格與互動方式。例如 hotel_specialist 的 backstory 是「前頂級飯店連鎖高管,對精品飯店與大型連鎖瞭如指掌,熟悉房型分類、季節趨勢、升等機會」。這不只是裝飾——CrewAI 會把它合進 system prompt,實質影響 LLM 推理。**goals (目標)**——明確列出代理人要達成的優先順序,例如 [\"Find perfect accommodation matches\", \"Secure best available rates\", \"Ensure special requests are met\"]。這三件事 = 一份完整的「職位說明書」。書中為旅遊系統設計了完整角色組合:Coordinator (Travel Planning Executive)、四個核心 Worker (flight_specialist、hotel_specialist、activity_planner、transport_coordinator)、三個分析 Worker (analyst、reflector、searcher)、與 Delegator (Travel Operations Orchestrator)——共 9 個角色,每個都有獨特的 role/backstory/goals。",
      explanation_en: "In CrewAI-style LLM agents, designing a Worker is more than handing it tools — you specify three things. Role: a one-liner naming the position and authority, e.g., 'Aviation Booking Specialist.' Backstory: a deliberate narrative shaping decision style and interaction tone. For hotel_specialist: 'Previous luxury hotel chain executive with extensive connections in the hospitality industry. Expert in boutique hotels and major chains alike, with deep knowledge of room categories, seasonal trends, and upgrade opportunities across global markets.' This isn't decoration — CrewAI merges it into the system prompt, materially affecting reasoning. Goals: an explicit prioritized list, e.g., ['Find perfect accommodation matches', 'Secure best available rates', 'Ensure special requests are met']. Together these three are the agent's job description. The book stocks the travel team with: Coordinator (Travel Planning Executive); four core workers (flight_specialist, hotel_specialist, activity_planner, transport_coordinator); three analysis workers (analyst, reflector, searcher); and Delegator (Travel Operations Orchestrator) — 9 distinct roles, each with custom role/backstory/goals.",
      analogy_zh: "像招募新員工寫的職缺說明書 (Job Description):**職稱** = role,**經歷描述** = backstory,**KPI** = goals。寫得越具體,新員工 (LLM) 表現越貼近你要的樣子。寫「找便宜飯店」vs.「為高端客戶尋找性價比最高的精品飯店,優先考慮位置與服務品質,而非絕對最低價」——後者讓 LLM 的判斷大幅升級。",
      analogy_en: "Like a hiring manager's job description. Title = role; experience narrative = backstory; KPIs = goals. The more specific you make these, the closer the new hire (LLM) behaves to what you want. 'Find cheap hotels' versus 'For high-end clients, find the most value-dense boutique hotels — prioritize location and service quality over absolute lowest price' — the second dramatically upgrades the LLM's judgment.",
      worked_example_zh: "為旅遊團隊寫 activity_curator:\n```python\nactivity_planner = Agent(\n  role='Destination Experience Curator',\n  backstory='Professional tour guide turned experience designer with expertise in creating memorable travel moments. Has lived in 5 continents and personally vetted thousands of local experiences. Specialist in combining cultural authenticity with traveler comfort.',\n  goals=['Create engaging itineraries', 'Balance activities and free time', 'Ensure cultural authenticity']\n)\n```\n相比泛泛的「找活動」,這份設計讓 LLM 知道:它應該偏向有文化深度的體驗、不要把行程排太滿、要顧客戶舒適。當使用者問「我太太怕走太多路」時,這個 activity_curator 會自然選車程方便的酒莊體驗而非長途健行——這就是 backstory 的力量。",
      worked_example_en: "Build activity_curator for the travel team:\n```python\nactivity_planner = Agent(\n  role='Destination Experience Curator',\n  backstory='Professional tour guide turned experience designer with expertise in creating memorable travel moments. Has lived in 5 continents and personally vetted thousands of local experiences. Specialist in combining cultural authenticity with traveler comfort.',\n  goals=['Create engaging itineraries', 'Balance activities and free time', 'Ensure cultural authenticity']\n)\n```\nCompared to a vague 'find activities,' this design tells the LLM to lean culturally rich, avoid overpacking, and prioritize comfort. When the user mentions 'my wife can't walk too much,' this curator naturally picks a vineyard tour with short transfers over a long hike — that's the power of backstory.",
      diagram_description: "Annotated agent card showing the three slots filled: 'role' (top), 'backstory' (middle, large text block), 'goals' (bottom, bullet list). Arrow on the right shows the three flowing into CrewAI's 'merged system prompt' box, which then influences the LLM's reasoning."
    },
    {
      id: "6.4",
      heading_zh: "通訊、協調、談判、知識共享",
      heading_en: "Communication, Coordination, Negotiation, Knowledge Sharing",
      explanation_zh: "多代理人系統要運作良好,光有角色不夠——它們需要清楚的互動規則。**(1) 通訊 (Communication)**——代理人遵循標準化訊息格式與互動模式。書中推薦業界標準 FIPA ACL (Agent Communication Language) 作為訊息協定,訊息包含發送者、接收者、內容三層結構。例如 hotel_specialist 要跟 flight_specialist 協調旅行日期,就用 FIPA ACL 格式發訊息,明確標示「我需要 6/15-22 的飯店,請告訴我航班抵達時間」。**(2) 協調機制 (Coordination Mechanism)**——Coordinator 設計任務優先順序、資源配置、進度監控的規則。例如若客戶優先住宿,Coordinator 就指示 Delegator 將 hotel_specialist 的優先級提升。**(3) 談判與衝突解決 (Negotiation and Conflict Resolution)**——當兩個 Worker 給出衝突方案 (activity_curator 排了一日遊,transport_coordinator 卻全天租車),Delegator 居中協調,提出替代方案 (改半日遊 + 半日租車);若仍無解,Coordinator 介入做最終裁決。**(4) 知識共享 (Knowledge Sharing)**——analyst 發現一波生態旅遊熱潮,把這個 insight 廣播給 activity_curator 與 transport_coordinator,它們各自調整推薦組合。沒有知識共享,每個 Worker 都只活在自己的世界,系統無法整體進化。",
      explanation_en: "Roles alone aren't enough — multi-agent systems need clear interaction rules. (1) Communication — agents follow standardized message formats and patterns. The book recommends FIPA ACL (Agent Communication Language) as the protocol, with messages carrying sender, receiver, and content. Example: hotel_specialist coordinating dates with flight_specialist sends a FIPA-ACL message: 'I need a hotel for June 15-22 — please share flight arrival times.' (2) Coordination mechanism — the Coordinator designs rules for task prioritization, resource allocation, and progress monitoring. If the customer prioritizes accommodation, the Coordinator tells the Delegator to boost hotel_specialist's priority. (3) Negotiation and conflict resolution — when two workers propose conflicting plans (activity_curator schedules a full-day tour, transport_coordinator has a rental car for the full day), the Delegator mediates by proposing alternatives (half-day tour + half-day rental). If unresolved, the Coordinator makes the final call. (4) Knowledge sharing — when analyst spots an eco-tourism trend, it broadcasts the insight to activity_curator and transport_coordinator so they each adjust their recommendation mix. Without knowledge sharing, each worker lives in its own world and the system can't evolve as a whole.",
      analogy_zh: "像球隊比賽。通訊 = 球員的暗號與術語 (大家都聽得懂);協調 = 教練的戰術指示 (誰守誰、何時換人);談判 = 兩個球員都想接同一球時誰退讓 (隊長或教練裁決);知識共享 = 球員把對手的習慣動作告訴隊友 (例如「對方中鋒喜歡向左切」)。沒有這四項,即使球員個個是巨星,團隊也會輸。",
      analogy_en: "Like a basketball team in a game. Communication = shared signals and terminology everyone understands. Coordination = the coach's tactics (who guards whom, when to substitute). Negotiation = which player yields when both go for the same ball (captain or coach decides). Knowledge sharing = scouting reports passed between teammates ('their center prefers to drive left'). Without these four, even an all-star roster loses.",
      worked_example_zh: "客戶請求:「為兩人羅馬之旅,我想 6/18 整天去梵蒂岡。」**通訊**:Delegator 發 FIPA ACL 訊息給 activity_curator 和 transport_coordinator,告知日期與目的。**協調**:Coordinator 設規則「客戶指定行程的日子,activity_curator 優先,transport 配合」。**衝突**:activity_curator 排了全天梵蒂岡 + 西斯廷,transport_coordinator 卻已訂全天租車——衝突!**談判**:Delegator 提案「改成上午梵蒂岡 + 下午自由租車探索台伯河沿岸」;activity_curator 與 transport_coordinator 同意。**知識共享**:analyst 注意到「6/18 是星期日,梵蒂岡博物館關門,但聖伯多祿大教堂照常開放」並廣播給所有 Worker;activity_curator 立刻把行程改成「上午聖伯多祿、下午租車探索」——避免一場災難。",
      worked_example_en: "Customer request: 'For our Rome trip, I want June 18 fully at the Vatican.' Communication: the Delegator sends FIPA-ACL messages to activity_curator and transport_coordinator with the date and goal. Coordination: the Coordinator's rule: 'on customer-specified days, activity_curator leads, transport supports.' Conflict: activity_curator schedules a full day at the Vatican + Sistine Chapel, but transport_coordinator already booked a full-day rental car — collision! Negotiation: the Delegator proposes 'morning Vatican + afternoon free rental exploring the Tiber'; both workers agree. Knowledge sharing: analyst notices 'June 18 is a Sunday — Vatican Museums are closed but St. Peter's Basilica is open' and broadcasts to all workers; activity_curator immediately swaps to 'morning St. Peter's + afternoon driving tour' — disaster averted.",
      diagram_description: "Four-panel storyboard: Panel 1 (Communication) shows FIPA-ACL message structure with sender/receiver/content. Panel 2 (Coordination) shows Coordinator's priority dial. Panel 3 (Negotiation) shows two workers with crossed swords and a Delegator mediator proposing a compromise. Panel 4 (Knowledge Sharing) shows analyst broadcasting a finding to multiple workers with radiating arrows."
    },
    {
      id: "6.5",
      heading_zh: "從理論到 LLM 實作:system prompt 與結構化指令",
      heading_en: "From Theory to LLM Implementation: System Prompts and Structured Instructions",
      explanation_zh: "傳統多代理人系統靠程式碼明確定義行為;LLM 多代理人系統大量靠 prompt 控制。這轉換需要三件關鍵設計:**(1) System prompts**——每個代理人的「身份說明書」,包含角色定義、責任範圍、約束條件、與其他代理人的通訊協定、決策框架。CrewAI 透過 role + backstory 自動合成 system prompt。**(2) 指令格式 (Instruction Formatting)**——三類結構必須明確:**Input structuring** 用標準 JSON 接收任務 (例如 `{\"task_type\": \"flight_search\", \"parameters\": {\"departure\": \"...\", \"destination\": \"...\", \"dates\": \"...\"}}`);**Output templates** 統一回傳格式 (例如 `{\"status\": \"completed/failed\", \"result\": {\"options\": [...], \"recommendations\": [...], \"constraints\": [...]}}`);**Communication protocols** 用明確訊息結構 (例如 `{\"message_type\": \"update\", \"sender\": \"flight_booking_worker\", \"recipient\": \"coordinator\", \"content\": {...}}`)。**(3) 互動模式 (Interaction Patterns)**——包含訊息傳遞協定 (message passing)、狀態管理 (state management,如何追蹤多步驟進度)、回饋迴圈 (feedback loops,代理人如何回報成功 / 失敗、請求澄清)。這三件設計是把組織理論翻譯成可運作 LLM 系統的「橋」——少了任何一件,理論再優雅,系統還是會在第一個邊際情境崩潰。",
      explanation_en: "Traditional multi-agent systems define behavior in code; LLM-based ones lean heavily on prompts. The translation needs three design pillars. (1) System prompts — each agent's identity card, covering role definition, scope, constraints, inter-agent communication protocols, and decision frameworks. CrewAI auto-composes the system prompt from role + backstory. (2) Instruction formatting — three structures must be explicit: input structuring with standardized JSON for tasks (e.g., `{\"task_type\": \"flight_search\", \"parameters\": {\"departure\": \"...\", \"destination\": \"...\", \"dates\": \"...\"}}`); output templates with a consistent shape (e.g., `{\"status\": \"completed/failed\", \"result\": {\"options\": [...], \"recommendations\": [...], \"constraints\": [...]}}`); communication protocols with explicit message structure (e.g., `{\"message_type\": \"update\", \"sender\": \"flight_booking_worker\", \"recipient\": \"coordinator\", \"content\": {...}}`). (3) Interaction patterns — message passing protocols, state management (tracking multi-step progress), feedback loops (how agents report success/failure and request clarification). These three pillars bridge organizational theory and a working LLM system — skip any one and the system collapses at the first edge case, no matter how elegant the theory.",
      analogy_zh: "像公司 SOP 手冊。System prompt = 員工守則 (你是誰、職權範圍);Input structuring = 表單格式 (請假單長什麼樣);Output templates = 報告格式 (週報必須含哪幾欄);Communication protocols = 公司內部 email/Slack 禮儀 (主旨格式、誰該被抄送)。手冊寫得清楚,新人三天上手;手冊模糊,半年後還在吵「請假該找誰簽」。LLM 代理人就是新人,prompt 就是手冊。",
      analogy_en: "Like a company SOP handbook. System prompt = employee manual (who you are, what authority you hold). Input structuring = form templates (what does a PTO request look like). Output templates = report templates (which fields go in a weekly report). Communication protocols = internal email/Slack etiquette (subject line format, who to cc). Clear handbook, new hires productive in three days; vague handbook, six months later people still argue 'who approves PTO?' LLM agents are the new hires; prompts are the handbook.",
      worked_example_zh: "為 flight_booking_worker 寫完整 system prompt 區塊:\n```\nYou are the Aviation Booking Specialist. \n[Role] Find and book optimal flights given customer constraints.\n[Constraints] Respect budget cap, customer's airline preferences, and travel dates.\n[Comm Protocol] When sending updates use:\n  {\"message_type\":\"update\",\"sender\":\"flight_booking_worker\",\"recipient\":\"coordinator\",\"content\":{...}}\n[Output Template] Return:\n  {\"status\":\"completed/failed\",\"result\":{\"options\":[...],\"recommendations\":[...],\"constraints\":[...]}}\n[Decision Framework] Prefer non-stop > one-stop > multi-stop unless cost difference > 30%.\n```\n當 Delegator 派任務 `{\"task_type\": \"flight_search\", \"parameters\": {\"departure\": \"JFK\", \"destination\": \"FCO\", \"dates\": \"2024-06-15/2024-06-22\"}}` 時,flight_booking_worker 就會回傳結構化的 result,Delegator 可以直接 parse 並整合到全行程裡——這就是 prompt 工程做出來的「組織紀律」。",
      worked_example_en: "Full system-prompt block for flight_booking_worker:\n```\nYou are the Aviation Booking Specialist.\n[Role] Find and book optimal flights given customer constraints.\n[Constraints] Respect budget cap, customer's airline preferences, and travel dates.\n[Comm Protocol] When sending updates use:\n  {\"message_type\":\"update\",\"sender\":\"flight_booking_worker\",\"recipient\":\"coordinator\",\"content\":{...}}\n[Output Template] Return:\n  {\"status\":\"completed/failed\",\"result\":{\"options\":[...],\"recommendations\":[...],\"constraints\":[...]}}\n[Decision Framework] Prefer non-stop > one-stop > multi-stop unless cost difference > 30%.\n```\nWhen the Delegator dispatches `{\"task_type\": \"flight_search\", \"parameters\": {\"departure\": \"JFK\", \"destination\": \"FCO\", \"dates\": \"2024-06-15/2024-06-22\"}}`, the worker returns structured results, which the Delegator can parse and merge into the full itinerary — that's organizational discipline produced by prompt engineering.",
      diagram_description: "A layered diagram showing how an LLM agent's actual prompt is assembled: bottom layer 'role + backstory + goals' from CrewAI; middle layer adds 'communication protocol + input/output templates + decision framework'; top layer is the runtime context for a specific task. Arrows show how the Delegator's task message flows through these layers into the LLM."
    }
  ],
  code_or_procedure_zh: "**完整 CWD 旅遊系統 (簡化版)**:\n```python\nfrom crewai import Agent, Task, Crew, Process\nfrom langchain_openai import ChatOpenAI\n\n# 1. Coordinator (戰略層)\ncoordinator = Agent(\n    role='Travel Planning Executive',\n    backstory='15 年高端旅遊規劃經驗,擅長多目的地行程編排與危機處理。',\n    goals=['Ensure cohesive travel plans', 'Maintain high customer satisfaction', 'Optimize resource allocation'])\n\n# 2. Delegator (資源管理層)\ndelegator = Agent(\n    role='Travel Operations Orchestrator',\n    backstory='Fortune 500 級別的旅遊運營與工作流優化專家,擅長任務分派與負載平衡。',\n    goals=['Optimize task distribution', 'Maintain workflow efficiency', 'Ensure quality standards'])\n\n# 3. Workers (執行層)\nflight_specialist = Agent(role='Aviation Booking Specialist', backstory='前航空收益管理專家,精通全球航線網絡。',\n    goals=['Secure optimal flight arrangements', 'Maximize value for money'], tools=[search_flights])\nhotel_specialist = Agent(role='Hospitality Accommodation Expert', backstory='前頂級飯店連鎖高管,熟悉精品與大型連鎖。',\n    goals=['Find perfect accommodation matches', 'Secure best available rates'], tools=[find_hotels])\nactivity_planner = Agent(role='Destination Experience Curator', backstory='跨五大洲的專業導遊兼體驗設計師。',\n    goals=['Create engaging itineraries', 'Ensure cultural authenticity'], tools=[find_activities])\ntransport_coordinator = Agent(role='Ground Transportation Specialist', backstory='前城市運輸顧問,擅長協調全球接駁。',\n    goals=['Ensure reliable transfers'], tools=[find_transport])\n\n# 4. Analysis Workers\nanalyst = Agent(role='Travel Intelligence Specialist', backstory='前線上旅遊平台資料科學主管。',\n    goals=['Generate actionable insights'], tools=[analyze_trends])\nreflector = Agent(role='Travel Experience Optimization Expert', backstory='豪華服務 + 數位轉型背景。',\n    goals=['Analyze customer feedback'], tools=[get_feedback])\nsearcher = Agent(role='Travel Discovery Specialist', backstory='前旅遊記者,涉足 100+ 國家。',\n    goals=['Discover unique opportunities'], tools=[search_new_destinations])\n\n# 5. 任務 + Crew\nplan_task = Task(description='Plan a 7-day Rome trip for 2 adults, budget $5000.',\n    expected_output='Complete itinerary with flights, hotel, activities, and transport.',\n    agent=coordinator)\n\ncrew = Crew(\n    agents=[coordinator, delegator, flight_specialist, hotel_specialist,\n            activity_planner, transport_coordinator, analyst, reflector, searcher],\n    tasks=[plan_task],\n    process=Process.hierarchical,\n    manager_llm=ChatOpenAI(model='gpt-4o-mini'))\n\nresult = crew.kickoff()\n```\n**9 步流程**:1) 使用者送出需求 → 2) Coordinator 分析並擬策略 → 3) 策略傳給 Delegator → 4) Delegator 拆出子任務並派給 Workers → 5) 核心 Workers 平行執行航班/飯店/活動/接駁 → 6) 分析 Workers 同時跑趨勢與新機會 → 7) 全部結果回 Delegator,Delegator 驗證與整合 → 8) 結果上呈 Coordinator → 9) Coordinator 審視、優化、交給使用者。",
  code_or_procedure_en: "Same content as code_or_procedure_zh — a simplified-but-complete CWD travel team with 9 distinct agents (Coordinator, Delegator, four core workers, three analysis workers), composed into a hierarchical CrewAI Crew with an LLM manager. The 9-step flow: (1) user submits request → (2) Coordinator analyzes and drafts strategy → (3) strategy handed to Delegator → (4) Delegator decomposes into subtasks and dispatches to Workers → (5) core Workers execute flight/hotel/activity/transport in parallel → (6) analysis Workers simultaneously process trends and opportunities → (7) all results return to Delegator who validates and integrates → (8) consolidated plan goes to Coordinator → (9) Coordinator reviews, optimizes, and delivers to user.",
  key_takeaways_zh: [
    "CWD = Coordinator (戰略) + Worker (執行) + Delegator (中間人) 三層架構",
    "關注點分離讓系統好維護;雙向資訊流讓 Coordinator 不會盲目開車",
    "好的 Worker 設計 = role + backstory + goals 三件套",
    "通訊 (FIPA ACL)、協調機制、衝突談判、知識共享四項缺一不可",
    "LLM 實作的橋樑:system prompt + 結構化 I/O + 訊息協定"
  ],
  key_takeaways_en: [
    "CWD = Coordinator (strategy) + Worker (execution) + Delegator (intermediary), three layers",
    "Separation of concerns aids maintenance; bidirectional info flow keeps the Coordinator from driving blind",
    "Strong Worker design = role + backstory + goals trio",
    "Communication (FIPA ACL), coordination mechanism, conflict negotiation, knowledge sharing — all four matter",
    "The LLM implementation bridge: system prompts + structured I/O + message protocols"
  ],
  common_pitfalls_zh: [
    "省略 Delegator,讓 Coordinator 直接指揮所有 Worker——規模一大就崩",
    "backstory 寫得空洞 (例如『一個有經驗的助理』),LLM 無法生出有個性的決策",
    "沒設 Output template 就讓多 agent 互傳訊息,Delegator 收到一堆 free-form 文字無法 parse"
  ],
  common_pitfalls_en: [
    "Skipping the Delegator and letting the Coordinator talk to every Worker — collapses at scale",
    "Hollow backstories like 'an experienced assistant' — the LLM produces personality-less decisions",
    "Skipping output templates while agents send free-form text — the Delegator drowns in unparseable strings"
  ],
  quiz: [
    {
      question_zh: "在 CWD 模型中,Delegator 的核心職責是什麼?",
      question_en: "What is the Delegator's core responsibility in CWD?",
      options_zh: [
        "直接執行所有 Worker 任務",
        "充當 Coordinator 與 Workers 之間的中間人,評估能力並派任務以平衡負載",
        "監督 Coordinator 的策略決策",
        "與外部 API 直接通訊"
      ],
      options_en: [
        "Directly execute all Worker tasks",
        "Act as the intermediary between Coordinator and Workers, assessing capabilities and assigning tasks to balance load",
        "Supervise the Coordinator's strategy",
        "Communicate directly with external APIs"
      ],
      answer_index: 1,
      explanation_zh: "Delegator 是中間管理者:它從 Coordinator 接策略、評估 Worker 的能力與當前負載,把任務派給最適合的 Worker。",
      explanation_en: "The Delegator is middle management: it takes strategy from the Coordinator, evaluates each Worker's capabilities and current load, and dispatches tasks accordingly."
    },
    {
      question_zh: "下列何者不是 CWD 模型的四大原則?",
      question_en: "Which is NOT one of CWD's four founding principles?",
      options_zh: [
        "關注點分離",
        "層級組織",
        "單向資訊流 (只往下流)",
        "適應性與韌性"
      ],
      options_en: [
        "Separation of concerns",
        "Hierarchical organization",
        "Unidirectional information flow (downward only)",
        "Adaptability and resilience"
      ],
      answer_index: 2,
      explanation_zh: "CWD 強調『雙向』資訊流——向下傳任務與優先順序,向上傳進度與結果。單向流就成了盲目指揮。",
      explanation_en: "CWD insists on bidirectional information flow — tasks and priorities downward, progress and results upward. One-way flow turns leadership blind."
    },
    {
      question_zh: "在 CrewAI 風格的 Worker 設計中,backstory 的價值是什麼?",
      question_en: "What's the value of `backstory` in a CrewAI-style Worker design?",
      options_zh: [
        "純粹為了 UI 顯示更有趣",
        "塑造代理人的決策風格與互動方式,並被合進 system prompt 影響 LLM 推理",
        "讓開發者寫 unit test 時更方便",
        "節省 token 用量"
      ],
      options_en: [
        "Purely cosmetic for UI",
        "Shapes the agent's decision style and interaction tone, and is merged into the system prompt to influence LLM reasoning",
        "Makes unit testing easier",
        "Saves token usage"
      ],
      answer_index: 1,
      explanation_zh: "backstory 不是裝飾——CrewAI 會把它合進 system prompt,實質影響 LLM 的判斷與語氣。好的 backstory 等於給 LLM 一個有靈魂的個性。",
      explanation_en: "Backstory isn't decoration — CrewAI merges it into the system prompt, materially affecting the LLM's judgment and tone. A good backstory gives the LLM a soul."
    },
    {
      question_zh: "當 activity_curator 和 transport_coordinator 提出衝突方案時,CWD 模型建議怎麼處理?",
      question_en: "When activity_curator and transport_coordinator submit conflicting plans, what does CWD suggest?",
      options_zh: [
        "由先送出方案的 Worker 自動勝出",
        "Delegator 居中協調提替代方案;若無解,Coordinator 介入裁決",
        "由 LLM 隨機選一個方案",
        "讓使用者自己決定"
      ],
      options_en: [
        "First-to-submit wins automatically",
        "Delegator mediates with alternative proposals; if unresolved, Coordinator steps in to decide",
        "Let the LLM pick randomly",
        "Defer entirely to the user"
      ],
      answer_index: 1,
      explanation_zh: "CWD 的衝突解決:Delegator 先嘗試居中調解、提出折衷;若還是無法達成共識,Coordinator 作為最高仲裁者依預設規則或客戶偏好決定。",
      explanation_en: "CWD conflict resolution: the Delegator mediates and proposes compromises first; if no consensus, the Coordinator acts as the final arbiter using predefined rules or customer preferences."
    },
    {
      question_zh: "下列哪個 JSON 結構最符合書中建議的『communication protocol』格式?",
      question_en: "Which JSON best matches the chapter's recommended communication-protocol format?",
      options_zh: [
        "{\"text\": \"flight done\"}",
        "{\"message_type\": \"update\", \"sender\": \"flight_booking_worker\", \"recipient\": \"coordinator\", \"content\": {\"progress\": \"in_progress\", \"completion\": \"60%\"}}",
        "{\"a\": 1, \"b\": 2}",
        "<msg>flight done</msg>"
      ],
      options_en: [
        "{\"text\": \"flight done\"}",
        "{\"message_type\": \"update\", \"sender\": \"flight_booking_worker\", \"recipient\": \"coordinator\", \"content\": {\"progress\": \"in_progress\", \"completion\": \"60%\"}}",
        "{\"a\": 1, \"b\": 2}",
        "<msg>flight done</msg>"
      ],
      answer_index: 1,
      explanation_zh: "書中明確示範訊息協定應有 message_type、sender、recipient、content 四個欄位,讓接收方能可靠 parse 並了解上下文。",
      explanation_en: "The chapter explicitly shows the protocol with four fields: message_type, sender, recipient, content — giving receivers reliable parsing and full context."
    }
  ]
};

const chapter7 = {
  id: 7,
  title_zh: "有效代理人系統的設計技巧",
  title_en: "Effective Agentic System Design Techniques",
  subtitle_zh: "從 system prompt、狀態空間、記憶架構到序列 / 平行工作流,把代理人系統做得穩、快、可擴展。",
  subtitle_en: "From system prompts and state spaces to memory architectures and sequential / parallel workflows — make agentic systems robust, fast, and scalable.",
  overview_zh: "前幾章談了反思、工具、規劃、CWD,本章把這些拼圖整合成「實戰設計指南」。第一部分:**聚焦的 system prompt 與指令**——清楚的目標、任務規格、情境感知,是代理人表現的基石。第二部分:**狀態空間與環境建模**——代理人怎麼「感知自己當下在哪、有什麼選擇、有什麼限制」;區分客戶 / 旅遊脈絡 / 預訂三層狀態,並用事件驅動更新與狀態驗證確保一致性。第三部分:**代理人記憶架構**——短期記憶 (working memory,當下 session)、長期記憶 (knowledge base,跨 session 客戶偏好與行業知識)、情節記憶 (episodic memory,過往互動歷史)。再講脈絡管理 (global / session / task 三層) 與脈絡切換 (preservation / restoration / merging)。第四部分:**序列 vs. 平行處理與工作流優化**——序列處理用在有依賴的任務 (付款→確認→出單);平行處理用在獨立任務 (同時查多家航空公司);工作流優化結合任務分類、資源管理、動態調整。本章是「把代理人系統做得穩固」的工程藍圖。",
  overview_en: "Previous chapters covered reflection, tools, planning, and CWD; this one fuses them into a battle-tested design guide. Part 1: focused system prompts and instructions — clear objectives, task specs, and contextual awareness are the foundation of agent performance. Part 2: state spaces and environment modeling — how the agent perceives where it is, what options exist, and what constraints apply; we distinguish three state layers (customer profile, travel context, booking state) and apply event-driven updates plus state validation for consistency. Part 3: agent memory architectures — short-term (working memory for the current session), long-term (knowledge base for cross-session preferences and domain knowledge), and episodic (interaction history). Then context management at three levels (global / session / task) and context switching (preservation / restoration / merging). Part 4: sequential vs. parallel processing and workflow optimization — sequential for dependent tasks (payment → confirmation → docs), parallel for independent ones (concurrent vendor searches), and optimization combining task classification, resource management, and dynamic adjustment. This chapter is the engineering blueprint for hardening agent systems.",
  learning_objectives_zh: [
    "撰寫聚焦的 system prompt:objective + task spec + contextual awareness",
    "設計三層狀態空間 (customer / travel / booking),並用事件驅動更新與狀態驗證",
    "區分短期、長期、情節三類記憶,並設計合適的儲存與檢索機制",
    "管理脈絡的三個層級 (global / session / task) 與三種切換操作 (preserve / restore / merge)",
    "決定何時用序列 vs. 平行處理,並運用工作流優化讓系統穩定可擴展"
  ],
  learning_objectives_en: [
    "Write focused system prompts: objective + task spec + contextual awareness",
    "Design a three-layer state space (customer / travel / booking) with event-driven updates and validation",
    "Distinguish working, long-term, and episodic memory and design proper storage and retrieval",
    "Manage context across three levels (global / session / task) with three switching operations (preserve / restore / merge)",
    "Decide when to use sequential vs. parallel processing, and apply workflow optimization for robust scaling"
  ],
  sections: [
    {
      id: "7.1",
      heading_zh: "聚焦的 system prompt:目標、任務規格、情境感知",
      heading_en: "Focused System Prompts: Objective, Task Spec, Contextual Awareness",
      explanation_zh: "好 prompt 等於好代理人。本章提出三層架構:**(1) 定義目標 (Defining Objectives)**——一句話總結這個代理人為什麼存在,並拆成幾個核心元件。例如旅遊代理人的目標是「為個別客戶量身打造旅遊解決方案,最大化滿意度」,拆成個人化、解決問題、有效溝通、持續改進四個面向。**(2) 任務規格 (Task Specifications)**——對每個職責寫清楚:**步驟** (例如「客戶互動:打招呼→收集需求→確認、執行、確認滿意度」)、**預期輸出** (推薦行程、訂單確認等)、**潛在挑戰** (需求模糊、語言障礙、情緒激動的客戶)。對「航班查詢」這種具體任務,還能列「初步查詢→搜尋→展示→輸出」四步驟,每步含子項。**(3) 情境感知 (Contextual Awareness)**——讓代理人理解環境細節:目的地情報 (旺季、文化節慶)、動態調整 (航班取消時自動評估替代)、文化敏感度 (宗教場所衣著規範、飲食限制)。這三層加起來,prompt 不再是隨手寫的幾句話,而是一份完整的「代理人行為憲法」。",
      explanation_en: "A good prompt makes a good agent. The chapter prescribes a three-layer architecture. (1) Defining objectives — a one-sentence raison d'être plus key components. The travel agent's objective: 'maximize customer satisfaction by delivering personalized travel solutions,' broken into personalization, problem-solving, effective communication, continuous improvement. (2) Task specifications — for each responsibility write: steps (e.g., 'customer interaction: greet → gather info → identify intent → respond → confirm satisfaction'), expected outputs (recommendations, booking confirmations), potential challenges (ambiguous requests, language barriers, emotional customers). For concrete tasks like flight inquiry, list a four-stage flow (initial query → search → presentation → outputs) with sub-items. (3) Contextual awareness — equip the agent with situational nuance: destination intelligence (peak seasons, festivals), dynamic adaptation (auto-replan when a flight cancels), cultural competence (dress codes at religious sites, dietary restrictions). Layered together, the prompt becomes a constitution for agent behavior — not a few off-the-cuff sentences.",
      analogy_zh: "像給新人寫入職指南。Objective = 公司使命 (你為什麼存在);Task Specifications = 工作流程 SOP (具體要做什麼、輸出什麼、可能踩到什麼坑);Contextual Awareness = 公司文化與行業知識 (跟客戶談話時要避開哪些敏感話題)。三層俱全,新人三個月後表現像老手;只給使命口號,半年後還在亂撞。",
      analogy_en: "Like onboarding a new hire. Objective = company mission (why you exist). Task Specifications = process SOPs (exactly what to do, what to produce, what landmines to avoid). Contextual Awareness = company culture and domain knowledge (which topics to handle gently with clients). All three together, the new hire performs like a veteran in three months; mission slogan only, they're still stumbling six months later.",
      worked_example_zh: "為旅遊代理人寫的聚焦 prompt 示例:\n```\nObjective: Act as an expert travel agent to provide personalized travel solutions while maximizing customer satisfaction.\n\nCore Functions:\n - Gather and analyze travel preferences, constraints, and budget\n - Create personalized travel recommendations and itineraries\n - Resolve travel-related issues and provide alternatives\n - Communicate clearly and professionally\n - Monitor customer satisfaction and adapt accordingly\n\nConstraints:\n - Stay within stated budget\n - Prioritize customer safety\n - Follow travel regulations\n - Respect booking deadlines\n\nBehavior:\n - Use clear, professional language\n - Show empathy and patience\n - Anticipate customer needs\n - Provide transparent pricing\n - Present options with pros/cons\n - Document key requirements and deadlines\n```\n這份 prompt 同時涵蓋了目標、任務 (Core Functions)、約束、行為準則,代理人在每次對話都會自然遵循。",
      worked_example_en: "Sample focused prompt for the travel agent:\n```\nObjective: Act as an expert travel agent to provide personalized travel solutions while maximizing customer satisfaction.\n\nCore Functions:\n - Gather and analyze travel preferences, constraints, and budget\n - Create personalized travel recommendations and itineraries\n - Resolve travel-related issues and provide alternatives\n - Communicate clearly and professionally\n - Monitor customer satisfaction and adapt accordingly\n\nConstraints:\n - Stay within stated budget\n - Prioritize customer safety\n - Follow travel regulations\n - Respect booking deadlines\n\nBehavior:\n - Use clear, professional language\n - Show empathy and patience\n - Anticipate customer needs\n - Provide transparent pricing\n - Present options with pros/cons\n - Document key requirements and deadlines\n```\nThis prompt covers objective, tasks (Core Functions), constraints, and behavior — the agent honors all four in every conversation.",
      diagram_description: "Layered stack: bottom 'Objective' (one-line mission), middle 'Task Specifications' (steps + expected outputs + challenges), top 'Contextual Awareness' (destination intel + dynamic adaptation + cultural competence). Right side shows arrows from each layer pointing into a 'merged system prompt' box."
    },
    {
      id: "7.2",
      heading_zh: "狀態空間與環境建模:代理人的『世界觀』",
      heading_en: "State Spaces and Environment Modeling: The Agent's Worldview",
      explanation_zh: "**狀態空間 (State Space)** 定義代理人「當下知道什麼、可以做什麼、結果可能是什麼」。書中把旅遊代理人的狀態分三層:**Customer profile state** (個人偏好、旅遊歷史、當下對話脈絡、預算、特殊需求);**Travel context state** (可用航班、飯店空房、天氣、旅遊警示、季節事件);**Booking state** (預訂狀態、付款、取消政策、行程修改、依賴關係)。狀態用 JSON 表達,例如 `{\"booking_id\": \"BK123456\", \"status\": \"confirmed\", \"components\": {\"flights\": [...], \"hotels\": [...]}, \"customer_preferences\": {...}}`。**環境建模 (Environment Modeling)** 比狀態更宏觀,回答三問題:可互動的系統與服務有哪些?有哪些規則與限制?需監控哪些動態變化?分為**靜態元素** (商業規則、API 規格、認證機制、限流) 與**動態元素** (即時庫存、價格波動、服務中斷、天氣、系統效能)。**整合與互動模式**透過兩種模式:**事件驅動更新** (例如收到 FLIGHT_CHANGE 事件,自動檢查依賴並通知客戶) 與**狀態驗證** (轉換時檢查依賴與商業規則,例如「on hold → confirmed」必須先驗證付款、座位、價格)。",
      explanation_en: "The state space defines what the agent currently knows, what it can do, and what outcomes are possible. The chapter layers the travel agent's state three ways. Customer profile state — preferences, travel history, current interaction context, budget, special needs. Travel context state — available flights, hotel inventory, weather, advisories, seasonal events. Booking state — reservation status, payment, cancellation policy, modifications, dependencies. Encoded as JSON, e.g., `{\"booking_id\": \"BK123456\", \"status\": \"confirmed\", \"components\": {\"flights\": [...], \"hotels\": [...]}, \"customer_preferences\": {...}}`. Environment modeling is broader, answering three questions: what systems and services can the agent touch? what rules govern interaction? what dynamic conditions must be monitored? It splits into static elements (business rules, API specs, auth, rate limits) and dynamic elements (live inventory, price swings, service disruptions, weather, system performance). Integration and interaction patterns rely on two: event-driven updates (e.g., a FLIGHT_CHANGE event auto-triggers dependency checks and customer notification) and state validation (transitions check dependencies and business rules — e.g., 'on hold → confirmed' must validate payment, seats, and price first).",
      analogy_zh: "想像開計程車。狀態空間 = 你眼前的資訊:當前位置 (customer profile)、路況 (travel context)、目的地與訂單 (booking state)。環境建模 = 整個城市的規則:單行道、紅綠燈、限速、施工 (靜態元素),以及即時交通流量、天氣、突發事故 (動態元素)。事件驅動更新 = 你的 GPS 告訴你「前方塞車,建議改道」;狀態驗證 = 你想右轉前看看是不是禁止右轉、有沒有來車。沒有這些,開不到目的地。",
      analogy_en: "Imagine driving a taxi. State space = what's in front of you right now: current position (customer profile), road status (travel context), destination + order (booking state). Environment modeling = the city's rules: one-ways, lights, speed limits, construction (static), plus live traffic, weather, accidents (dynamic). Event-driven updates = your GPS pinging 'jam ahead, reroute now.' State validation = checking 'no right turn' signs and oncoming traffic before turning. Without these, you don't reach the destination.",
      worked_example_zh: "客戶 Alice 訂了 6/15 紐約-羅馬航班 + 6/15 check-in 飯店。航空公司忽然把航班從 10AM 改到 8PM。**事件驅動更新**:系統收到 `event.type = \"FLIGHT_CHANGE\"`,呼叫 `update_booking_status(event)`,該方法先呼叫 `check_dependencies()` 發現「飯店 check-in 是 6/15 下午 3 點,但新航班 8PM 才到,有衝突」,接著呼叫 `notify_customer()` 通知 Alice。**狀態驗證**:當代理人嘗試把飯店預訂從「pending → confirmed」時,`validate_state_transition()` 檢查:1) 房型與旅客人數一致?2) check-in 時間在航班抵達之後?(否——因新航班晚於原本) 3) 取消政策已告知?第二項失敗,系統阻止確認並建議「改為 6/16 check-in」或「換 6/15 凌晨抵達的航班」。整個流程不靠人類介入,卻保住了 booking integrity。",
      worked_example_en: "Alice booked a June 15 NYC→Rome flight and a hotel check-in on June 15. The airline shifts the flight from 10AM to 8PM. Event-driven update: system receives `event.type = \"FLIGHT_CHANGE\"`, invokes `update_booking_status(event)`. That method calls `check_dependencies()`, which finds 'hotel check-in 3PM on June 15, but new arrival is 8PM — conflict.' It then calls `notify_customer()` to alert Alice. State validation: when the agent tries to flip the hotel from 'pending → confirmed,' `validate_state_transition()` checks: (1) room type matches party size? (2) check-in after flight arrival? (no — new flight lands later) (3) cancellation policy acknowledged? Check #2 fails; the system blocks the transition and suggests 'shift to June 16 check-in' or 'switch to a June 15 morning arrival.' All without human intervention — booking integrity preserved.",
      diagram_description: "Two-pane diagram. Left pane (State Space): three nested boxes labeled Customer Profile / Travel Context / Booking, each with a few sample fields. Right pane (Environment Model): two columns — Static (business rules, API specs, auth, rate limits) and Dynamic (inventory, prices, weather, service health). Bottom arrow shows event flow: external event → update_booking_status → check_dependencies → notify_customer."
    },
    {
      id: "7.3",
      heading_zh: "代理人記憶架構:短期、長期、情節三種記憶",
      heading_en: "Agent Memory Architecture: Working, Long-Term, Episodic",
      explanation_zh: "代理人的記憶分三種,各擅勝場。**(1) 短期記憶 (working memory)**——當下對話的工作空間,儲存使用者剛剛問了什麼、目前搜尋條件、暫時偏好。session 結束就清空。書中範例 `WorkingMemory` 類別存 `customer_id, session_start, current_query, active_searches, temporary_preferences`,並提供 `update_context()` 與 `clear_session()` 兩個方法。**(2) 長期記憶 (knowledge base)**——跨 session 的持久知識:客戶檔案、旅遊歷史、回饋紀錄、特殊需求、會員等級,以及領域知識 (目的地資訊、季節模式、服務商、法規)。`CustomerMemory` 和 `TravelKnowledge` 兩個類別示範了如何分離儲存。**(3) 情節記憶 (episodic memory)**——「事件序列 + 結果」的記錄,讓代理人能識別模式 (「過去 Alice 在轉機超過 3 小時的航班都不滿意」) 並指導未來決策。`EpisodicMemory.retrieve_relevant_episodes(context)` 撈出與當前情境相似的過往互動。三者協同:短期讓對話流暢,長期讓服務個人化,情節讓代理人從過去學習。",
      explanation_en: "Agents need three memory types. (1) Working memory — the immediate workspace holding what the user just asked, current search criteria, and temporary preferences. Cleared when the session ends. The `WorkingMemory` class stores `customer_id, session_start, current_query, active_searches, temporary_preferences` and exposes `update_context()` and `clear_session()`. (2) Long-term memory (knowledge base) — persistent across sessions: customer profiles, travel history, feedback, special needs, loyalty status, plus domain knowledge (destinations, seasonal patterns, service providers, regulations). `CustomerMemory` and `TravelKnowledge` demonstrate separated storage. (3) Episodic memory — sequences of events with outcomes, letting the agent spot patterns ('Alice has always been unhappy with layovers over 3 hours') and guide future decisions. `EpisodicMemory.retrieve_relevant_episodes(context)` fetches past interactions similar to the current situation. Used together, working memory keeps conversation fluid, long-term enables personalization, and episodic lets the agent learn from its past.",
      analogy_zh: "像人腦的記憶系統。短期記憶 = 你剛剛在咖啡店點什麼 (離開後就忘);長期記憶 = 你媽生日是哪天、你工作技能 (跟你一輩子);情節記憶 = 你「去年在京都遇大雨」這種有時間順序的具體經驗,讓你下次去日本前看天氣。代理人的記憶分層完全鏡像人類,差別是它能 100% 準確而你會忘。",
      analogy_en: "Like human memory. Working memory = what you just ordered at the café (gone once you leave). Long-term memory = your mom's birthday and your job skills (with you for life). Episodic memory = 'caught in heavy rain in Kyoto last year' — a time-ordered experience that makes you check the weather before your next Japan trip. The agent mirrors human memory layers — except it remembers perfectly while you forget.",
      worked_example_zh: "Alice 開新 session,跟代理人說「找米蘭五月住宿」。**短期記憶** 寫入:`current_query='Milan accommodation May'`, `active_searches=['hotel/Milan/2024-05']`。代理人查 **長期記憶** 的 `CustomerMemory['Alice']`,看到她偏好近地鐵、不抽菸、過往曾在精品旅店給高分。代理人再查 **情節記憶**,撈出三段相關往事:(a) 去年 Alice 在巴黎訂的 5 公里外飯店給 1 星評價;(b) 她在東京訂的精品旅店給 5 星;(c) 米蘭時尚週期間 (5/中下旬) 房價飆。代理人融合這些線索,推薦「米蘭市中心的精品旅店 5/8-12 (避開時尚週),離地鐵 < 300m」,並主動告訴她「若想 5/20 之後,房價會漲約 80%」。session 結束後短期記憶清空,但這次互動會以新事件寫入情節記憶,下次 Alice 來時代理人更聰明。",
      worked_example_en: "Alice opens a new session: 'Find Milan accommodation in May.' Working memory writes `current_query='Milan accommodation May'`, `active_searches=['hotel/Milan/2024-05']`. The agent reads long-term `CustomerMemory['Alice']`: prefers metro-adjacent, non-smoking, has rated boutique hotels highly. Episodic memory surfaces three relevant past events: (a) last year in Paris, Alice gave 1 star to a hotel 5 km out; (b) in Tokyo she rated a boutique 5 stars; (c) Milan Fashion Week (late May) spikes prices. Fusing these signals, the agent recommends 'a boutique in central Milan, May 8-12 (before Fashion Week), <300m from a metro,' and proactively warns 'after May 20 expect ~80% price spike.' Working memory clears at session end, but this interaction is logged to episodic memory — Alice's next visit benefits from a smarter agent.",
      diagram_description: "Three vertical columns: Working Memory (ephemeral, session-scoped, holds current query and active searches), Long-Term Memory (persistent, two sub-boxes: CustomerMemory and TravelKnowledge), Episodic Memory (timeline of past interaction records). Arrows show how a new query first writes to working memory, queries long-term and episodic for context, and after the session, episodic memory absorbs the new event."
    },
    {
      id: "7.4",
      heading_zh: "脈絡管理:三層脈絡與三種切換",
      heading_en: "Context Management: Three Levels and Three Switching Operations",
      explanation_zh: "脈絡管理確保代理人在複雜情境中不會「忘記自己在做什麼」。**三層脈絡**:**Global context** (系統層級設定、運營狀態、全球旅遊警示);**Session context** (當下客戶互動狀態、進行中的搜尋、暫時偏好);**Task context** (具體預訂細節、多步驟中的當前位置、相關預訂的依賴)。書中以「為某客戶規劃東京+新加坡商務行」為例:該客戶有公司差旅政策 (機票 ≤ $2000)、偏好早班機 (因會議行程)、飯店需在某辦公室步行範圍內——代理人在搜尋機票時需同時參考 session context (客戶偏好)、task context (這趟特定行程的時程約束) 與 global context (是否有相關旅遊警示)。**三種切換操作**:**Context preservation** (切換前儲存當前狀態、保留變更歷史);**Context restoration** (需要時取回先前脈絡、重建操作環境);**Context merging** (合併多個脈絡資訊、解決衝突、維持一致性)。當客戶在規劃東京途中突然問「順便看一下我的退稅情況」,代理人就需 preserve 旅遊脈絡、switch 到退稅脈絡、處理完再 restore 回旅遊脈絡;若退稅資訊影響旅遊預算 (例如退稅入帳會多 $500),就要 merge 兩個脈絡。",
      explanation_en: "Context management prevents the agent from 'forgetting what it's doing' under complexity. Three levels. Global context — system-wide settings, operational status, global advisories. Session context — current customer interaction state, active searches, temporary preferences. Task context — specific booking details, position in a multi-step process, related-booking dependencies. The book's example: planning a Tokyo + Singapore business trip for a client with a corporate travel policy (flights ≤ $2,000), morning-flight preference (meeting schedule), and hotels within walking distance of specific offices — the agent must consult session context (preferences), task context (this trip's schedule), and global context (relevant advisories) all at once during the flight search. Three switching operations: context preservation (save current state, retain change history before switching); context restoration (recall prior contexts, rebuild the operational environment); context merging (combine info from multiple contexts, resolve conflicts, maintain consistency). When the customer mid-planning suddenly asks 'check my tax refund status,' the agent preserves the travel context, switches to the refund context, handles it, restores the travel context; if the refund affects the travel budget (an extra $500 incoming), it merges the two.",
      analogy_zh: "像同時帶三個小孩做不同作業。Global context = 家裡今天的整體狀況 (例如七點要吃飯);Session context = 你現在正陪老大算數學;Task context = 這道數學題的當前步驟。當老二跑來說「我英文不會」,你 (1) 把老大的進度卡好 (preserve) (2) 切去陪老二 (switch) (3) 處理完回來陪老大 (restore)。若老二的問題其實也影響老大 (兩人作業相關),你就要兩邊資訊綜合 (merge)。沒有好脈絡管理,你會在三個小孩之間搞混。",
      analogy_en: "Like managing three kids' different homework simultaneously. Global context = the household's overall status (dinner at 7). Session context = you're currently helping the eldest with math. Task context = the current step of this particular problem. When the second kid runs in 'I don't get English,' you (1) bookmark the eldest's progress (preserve), (2) switch to the second kid, (3) when done, come back (restore). If the second kid's question actually affects the eldest (related assignments), you merge the two contexts. Without solid context management, you scramble between three kids.",
      worked_example_zh: "客戶 Sarah 正在規劃東京 + 新加坡商務行 (session context: 機票 ≤ $2000, 早班機, 飯店近 Shibuya 與 Marina Bay 辦公室),代理人正在 task context: 「搜尋 6/10 NYC→TYO 航班」。Sarah 突然說:「等等,我下個月去倫敦的飛機能改嗎?」代理人:**Preserve** 當前 task context (儲存搜尋條件、暫時記住「Sarah 待會要回到東京行程」);**Switch** 到新 task context 「修改倫敦航班」;讀取相關 booking state,協助 Sarah 改期。改完後 **Restore** 回東京行程,並繼續搜尋。若倫敦改期產生 $200 改票費,代理人 **Merge** 進東京行程的預算上限 (從 $2000 變 $1800 才不超總預算) 並提示 Sarah。整個過程 Sarah 不必重新講她的偏好,代理人也不會混亂。",
      worked_example_en: "Sarah is planning a Tokyo + Singapore business trip (session context: flights ≤ $2,000, morning departures, hotels near Shibuya and Marina Bay offices). The agent is in task context 'search 6/10 NYC→TYO flights.' Sarah interjects: 'Wait, can I change my London flight next month?' The agent preserves the current task context (saves search criteria, notes 'return to Tokyo planning shortly'), switches to a new task context 'modify London flight,' loads the relevant booking state, and helps Sarah reschedule. Done, it restores the Tokyo task and resumes the flight search. If the London change incurs a $200 fee, the agent merges that into the Tokyo budget (effective ceiling now $1,800) and flags it to Sarah. She never has to restate her preferences, and the agent never loses track.",
      diagram_description: "Stacked layer diagram: bottom layer Global Context (with global advisories icons), middle Session Context (current customer state), top Task Context (current booking step). Right side shows three operation arrows: preserve (down arrow into a 'saved state' box), restore (up arrow from saved state), merge (two arrows from two contexts joining into one)."
    },
    {
      id: "7.5",
      heading_zh: "序列 vs. 平行處理與工作流優化",
      heading_en: "Sequential vs. Parallel Processing and Workflow Optimization",
      explanation_zh: "**序列處理 (Sequential Processing)** 用在有嚴格依賴順序的任務:航班-飯店協調 (要先確認航班才訂飯店、要先驗簽證才完成預訂);付款處理 (驗款 → 處理付款 → 確認預訂 → 寄出文件)。優點是流程清楚、可控;缺點是若任務多獨立元件,白白浪費時間。**平行處理 (Parallel Processing)** 用在彼此獨立的任務:同時查多家航空、同時 check 多家飯店、同時抓天氣與旅遊警示;背景處理 (更新客戶檔案、處理回饋、監看價格)。優點是大幅加快回應速度。**工作流優化 (Workflow Optimization)** 結合兩者:**任務分類與優先順序**——做依賴分析 (critical path 必須序列,獨立分支可平行) 與優先級指派 (按 SLA、客戶期待、對整體流程的影響);**資源管理**——系統資源配置 (CPU、記憶體、DB 連線、快取) 與外部服務管理 (API 限流、retry 策略、服務商優先級);**動態工作流調整**——負載平衡 (依系統負載調整平行度、尖峰時重新分配)、效能監控 (任務完成時間、成功率、瓶頸辨識)。重點:沒有「永遠對的選擇」,代理人要能根據任務性質、系統負載、時間約束在序列與平行之間動態切換。",
      explanation_en: "Sequential processing fits strictly dependent tasks: flight-hotel coordination (confirm flights before hotels, validate visa before finalizing); payment processing (verify funds → process payment → confirm booking → send documents). Pros: clear, controlled flow. Cons: wastes time when many independent components exist. Parallel processing fits independent tasks: concurrent vendor searches across airlines, hotels, weather, advisories; background processing (profile updates, feedback handling, price monitoring). Pros: huge latency wins. Workflow optimization combines both. Task classification and prioritization — dependency analysis (critical path is sequential, independent branches go parallel) and priority assignment (by SLA, customer expectations, impact on the booking process). Resource management — system resources (CPU, memory, DB connections, caches) and external services (API rate limits, retry strategies, provider priorities). Dynamic workflow adjustment — load balancing (tune parallelism by load, redistribute at peak), performance monitoring (completion times, success rates, bottleneck identification). The point: no single choice is always right; the agent must switch between sequential and parallel based on task nature, system load, and time constraints.",
      analogy_zh: "像辦感恩節晚餐。**序列任務**:火雞要先解凍 → 醃漬 → 烘烤 → 靜置切片 → 上桌,順序不能亂。**平行任務**:你烤火雞的同時,另一個人切沙拉、第三個人煮配菜、第四個人擺餐具——大家獨立進行。**工作流優化**:你不會「等火雞烤好才開始切沙拉」(浪費 4 小時),但你也不會「在火雞還沒退冰就開始切」(亂套)。好的廚師會同時管理依賴 (火雞) 與獨立 (沙拉、餐具),動態調度——這就是代理人系統的優化。",
      analogy_en: "Like cooking Thanksgiving dinner. Sequential tasks: turkey must thaw → brine → roast → rest → carve → serve. Order is fixed. Parallel tasks: while the turkey roasts, one person chops salad, another cooks sides, a third sets the table — all independent. Workflow optimization: you don't wait until the turkey is roasted to start the salad (4 hours wasted), but you also don't carve before it's thawed (chaos). A good chef juggles dependencies (turkey) and independent work (salad, table) and adapts on the fly — that's agentic system optimization.",
      worked_example_zh: "客戶請求「7 天巴黎行,含航班、飯店、四個活動、機場接駁,加保險」。**任務分類**:Critical path (序列) = 「確認航班 → 確認飯店 → 安排接駁時間 → 完成預訂 → 寄文件」;獨立分支 (平行) = 「同時查活動 (羅浮宮、艾菲爾、凡爾賽日遊、塞納河遊船) + 比較三家保險」。**資源管理**:航班 API 限流 30 req/min,代理人控制平行查詢數;若某航空 API 失敗,自動 retry 並改用備用提供商。**動態調整**:尖峰時段系統發現航班搜尋變慢,將部分平行查詢序列化,優先處理 critical path;搜尋活動的部分繼續平行。最終整套行程在 90 秒內完成,而純序列需要 4 分鐘以上。代理人記錄這次優化結果到效能監控:「7-day-trip 任務在尖峰時段最佳並行數為 4」,下次自動套用。",
      worked_example_en: "Customer asks: 'A 7-day Paris trip with flights, hotel, four activities, airport transfers, plus insurance.' Task classification: critical path (sequential) = 'confirm flights → confirm hotel → schedule transfers → finalize booking → send documents.' Independent branches (parallel) = 'search activities (Louvre, Eiffel, Versailles day trip, Seine cruise) + compare three insurance providers' all at once. Resource management: flight API caps at 30 req/min, so the agent throttles parallelism; if one airline API fails, auto-retry with a backup provider. Dynamic adjustment: at peak hours the system notices flight search slowing, so it serializes some parallel calls, prioritizes the critical path, and keeps activity search parallel. Net result: the full itinerary completes in 90 seconds, versus 4+ minutes pure-sequential. The agent logs the run to performance monitoring: 'For 7-day trips during peak hours, optimal parallelism is 4' — next time, applied automatically.",
      diagram_description: "Two-row diagram. Top row (Sequential): horizontal chain of boxes labeled flight → hotel → transfer → booking → docs. Bottom row (Parallel): four boxes branching from a single starting point (search activities, compare insurance, fetch weather, fetch advisories), then converging. Right side: 'Workflow Optimizer' box with three sub-functions (task classification, resource management, dynamic adjustment), with arrows showing it controls both rows."
    }
  ],
  code_or_procedure_zh: "**完整的記憶與脈絡管理範本**:\n```python\nfrom datetime import datetime\n\nclass WorkingMemory:\n    \"\"\"短期記憶:當下 session\"\"\"\n    def __init__(self):\n        self.current_interaction = {\n            'customer_id': None,\n            'session_start': None,\n            'current_query': None,\n            'active_searches': [],\n            'temporary_preferences': {}\n        }\n    def update_context(self, new_info):\n        self.current_interaction.update(new_info)\n    def clear_session(self):\n        self.__init__()\n\nclass CustomerMemory:\n    \"\"\"長期記憶:客戶檔案\"\"\"\n    def __init__(self):\n        self.profiles = {}  # customer_id -> profile dict\n    def update_profile(self, customer_id, new_data):\n        self.profiles[customer_id] = {**self.profiles.get(customer_id, {}), **new_data}\n\nclass TravelKnowledge:\n    \"\"\"長期記憶:領域知識\"\"\"\n    def __init__(self):\n        self.destination_info = {}\n        self.seasonal_patterns = {}\n        self.service_providers = {}\n        self.travel_regulations = {}\n    def update_knowledge(self, category, key, value):\n        getattr(self, category)[key] = value\n\nclass EpisodicMemory:\n    \"\"\"情節記憶:互動歷史\"\"\"\n    def __init__(self):\n        self.interaction_history = []\n    def record_interaction(self, data):\n        data['timestamp'] = datetime.now()\n        self.interaction_history.append(data)\n    def retrieve_relevant_episodes(self, context):\n        return [ep for ep in self.interaction_history if self._is_relevant(ep, context)]\n    def _is_relevant(self, episode, context):\n        # implement similarity matching (embeddings, keyword overlap, etc.)\n        return True\n```\n**狀態驗證範本**:\n```python\ndef validate_state_transition(current_state, new_state):\n    if not is_valid_transition(current_state, new_state):\n        raise InvalidStateTransition(f\"Invalid from {current_state} to {new_state}\")\n    check_state_dependencies(new_state)\n    validate_business_rules(new_state)\n\nclass TravelAgentState:\n    def update_booking_status(self, event):\n        if event.type == 'FLIGHT_CHANGE':\n            self.check_dependencies()\n            self.notify_customer()\n        elif event.type == 'WEATHER_ALERT':\n            self.evaluate_alternatives()\n            self.update_recommendations()\n```\n**整合流程**:1) 啟動 WorkingMemory;2) 從 CustomerMemory + EpisodicMemory 拉個人化脈絡;3) 從 TravelKnowledge 拉領域知識;4) 代理人推論並執行任務 (序列關鍵任務,平行獨立任務);5) 每步用 validate_state_transition 把關;6) 結果寫回 EpisodicMemory + 更新 CustomerMemory;7) session 結束時 WorkingMemory.clear_session()。",
  code_or_procedure_en: "Same content as code_or_procedure_zh. The full memory + context template defines four classes (WorkingMemory, CustomerMemory, TravelKnowledge, EpisodicMemory) plus a `validate_state_transition` gatekeeper and a `TravelAgentState.update_booking_status` event handler. End-to-end flow: (1) start WorkingMemory; (2) load personalization context from CustomerMemory + EpisodicMemory; (3) load domain knowledge from TravelKnowledge; (4) reason and act (sequential for critical paths, parallel for independent tasks); (5) gate every transition with `validate_state_transition`; (6) write results back to EpisodicMemory and update CustomerMemory; (7) on session end, call `WorkingMemory.clear_session()`.",
  key_takeaways_zh: [
    "聚焦 prompt 三層:Objective + Task Spec + Contextual Awareness",
    "狀態空間分三層 (customer / travel / booking),用事件驅動更新與狀態驗證保一致性",
    "三種記憶:短期 (session 內)、長期 (跨 session)、情節 (歷史事件),三者協同才完整",
    "脈絡管理三層 + 三種切換 (preserve / restore / merge),避免在複雜情境失憶",
    "序列 vs. 平行不是非此即彼;工作流優化要動態調整、按負載與依賴智慧切換"
  ],
  key_takeaways_en: [
    "Focused prompts have three layers: Objective + Task Spec + Contextual Awareness",
    "State space has three layers (customer / travel / booking); use event-driven updates and state validation for consistency",
    "Three memory types: working (in-session), long-term (cross-session), episodic (event history) — all three together",
    "Three context levels + three switching ops (preserve / restore / merge) prevent amnesia under complexity",
    "Sequential vs. parallel isn't binary; workflow optimization adapts dynamically by load and dependencies"
  ],
  common_pitfalls_zh: [
    "把所有資訊塞進 system prompt 卻沒分層——LLM 看到一坨亂文,反而忽略重點",
    "只用短期記憶,session 結束就忘光客戶偏好——每次互動都像第一次見面",
    "盲目平行化所有任務——忽略 API 限流與依賴,結果到處失敗、retry 風暴"
  ],
  common_pitfalls_en: [
    "Dumping everything into the system prompt without structure — the LLM sees a wall of text and ignores key parts",
    "Using only working memory and forgetting customer preferences at session end — every interaction feels like first contact",
    "Naively parallelizing everything — ignoring API rate limits and dependencies triggers cascades of failures and retry storms"
  ],
  quiz: [
    {
      question_zh: "下列何者是書中建議的『聚焦 system prompt』三層架構?",
      question_en: "Which is the chapter's recommended three-layer focused-prompt architecture?",
      options_zh: [
        "Question + Answer + Summary",
        "Objective + Task Specifications + Contextual Awareness",
        "Input + Process + Output",
        "Role + Tools + Goals"
      ],
      options_en: [
        "Question + Answer + Summary",
        "Objective + Task Specifications + Contextual Awareness",
        "Input + Process + Output",
        "Role + Tools + Goals"
      ],
      answer_index: 1,
      explanation_zh: "書中明確將聚焦的 prompt 設計分為三層:Defining Objectives、Task Specifications、Contextual Awareness。",
      explanation_en: "The chapter splits focused prompt design into Defining Objectives, Task Specifications, and Contextual Awareness."
    },
    {
      question_zh: "短期記憶 (working memory) 與長期記憶 (long-term memory) 的根本差異是什麼?",
      question_en: "What's the fundamental difference between working memory and long-term memory?",
      options_zh: [
        "短期記憶用 GPU,長期記憶用 CPU",
        "短期記憶在 session 結束時清空,長期記憶跨 session 持久保存",
        "短期記憶儲存圖片,長期記憶儲存文字",
        "短期記憶免費,長期記憶要付費"
      ],
      options_en: [
        "Working uses GPU, long-term uses CPU",
        "Working memory clears when the session ends; long-term persists across sessions",
        "Working stores images, long-term stores text",
        "Working is free, long-term costs money"
      ],
      answer_index: 1,
      explanation_zh: "短期記憶是當下 session 的工作空間,session 結束 (clear_session()) 就清空;長期記憶用來儲存跨 session 的客戶檔案與領域知識。",
      explanation_en: "Working memory is the current session's workspace, cleared when the session ends (clear_session()). Long-term memory persists customer profiles and domain knowledge across sessions."
    },
    {
      question_zh: "情節記憶 (episodic memory) 最大的價值是?",
      question_en: "What's the chief value of episodic memory?",
      options_zh: [
        "儲存使用者的密碼",
        "讓代理人從『時間順序的具體互動經驗』辨識模式,指導未來決策",
        "把所有對話壓縮成一句話",
        "純粹用來合規稽核"
      ],
      options_en: [
        "Storing user passwords",
        "Letting the agent identify patterns from time-ordered concrete interaction experiences to guide future decisions",
        "Compressing all conversations into one sentence",
        "Purely for compliance auditing"
      ],
      answer_index: 1,
      explanation_zh: "情節記憶不只記錄結果,還保留事件的時間序列與脈絡。代理人能從中辨識「Alice 在轉機 > 3 小時都不滿意」這種模式,指導未來推薦。",
      explanation_en: "Episodic memory preserves time-ordered events with context. The agent spots patterns like 'Alice has always disliked layovers > 3 hours' to guide future recommendations."
    },
    {
      question_zh: "下列何者最適合用『序列處理』而非『平行處理』?",
      question_en: "Which task best suits sequential rather than parallel processing?",
      options_zh: [
        "同時查 5 家航空公司的可用航班",
        "同時抓天氣、旅遊警示、匯率",
        "付款 → 確認預訂 → 寄出確認文件",
        "同時更新多位客戶的偏好檔案"
      ],
      options_en: [
        "Querying 5 airlines for availability simultaneously",
        "Concurrently fetching weather, advisories, exchange rates",
        "Process payment → confirm booking → send confirmation documents",
        "Updating multiple customers' preference profiles simultaneously"
      ],
      answer_index: 2,
      explanation_zh: "付款→確認→寄文件是嚴格依賴鏈:沒付款就不能確認預訂、沒確認就不能寄文件,必須序列;其他選項都是獨立任務適合平行。",
      explanation_en: "Payment → confirm → send is a strict dependency chain — can't confirm without payment, can't send docs without confirmation. The others are independent tasks ripe for parallelism."
    },
    {
      question_zh: "脈絡管理的『三種切換操作』是?",
      question_en: "What are the three context switching operations?",
      options_zh: [
        "Read / Write / Delete",
        "Preserve / Restore / Merge",
        "Encode / Decode / Encrypt",
        "Push / Pop / Peek"
      ],
      options_en: [
        "Read / Write / Delete",
        "Preserve / Restore / Merge",
        "Encode / Decode / Encrypt",
        "Push / Pop / Peek"
      ],
      answer_index: 1,
      explanation_zh: "書中明確列三種:Preserve (切換前儲存當前狀態)、Restore (取回先前脈絡)、Merge (合併多個脈絡並解決衝突)。",
      explanation_en: "The chapter lists three explicitly: Preserve (save current state before switching), Restore (recall previous context), Merge (combine multiple contexts and resolve conflicts)."
    }
  ]
};

export const part2Chapters = [chapter4, chapter5, chapter6, chapter7];
