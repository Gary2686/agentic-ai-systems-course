// Part 3: Trust, Safety, Ethics, and Applications
// Chapters 8-11 from "Building Agentic AI Systems" by Anjanava Biswas and Wrick Talukdar (Packt, 2025)

const chapter8 = {
  id: 8,
  title_zh: "在生成式 AI 系統中建立信任",
  title_en: "Building Trust in Generative AI Systems",
  subtitle_zh: "本章你會學到如何用透明度、可解釋性、不確定性處理與偏見緩解,讓使用者真心信任 AI 系統。",
  subtitle_en: "How to make users genuinely trust AI through transparency, explainability, uncertainty handling, and bias mitigation.",
  overview_zh: "前面幾章我們專注在打造能力強的代理人 — 怎麼規劃、怎麼用工具、怎麼協作。但是再強大的系統,只要使用者不信任它,就沒人會用。本章把焦點轉到「信任」這個常被工程師忽略、卻決定整個產品成敗的軟性議題。書中用旅遊代理 AI 為主線,示範當系統推薦行程時,使用者為什麼會猶豫、什麼狀況下會願意把信用卡資訊交給它。我們會學到兩種透明度 — 演算法層級(模型架構、訓練資料對開發者公開)與呈現層級(對使用者解釋為什麼)— 兩者缺一不可。同時介紹三種 XAI(可解釋 AI)技術:注意力視覺化、顯著性圖、自然語言解釋,並用 BERT 程式碼示範。最後處理生成式 AI 兩個最大的信任殺手:不確定性(模糊輸入怎麼辦?)與偏見(訓練資料的歷史不公會被放大)。本章是進入安全與倫理討論前必備的基礎。",
  overview_en: "Earlier chapters focused on building capable agents — how they plan, use tools, and collaborate. But no matter how powerful the system is, if users don't trust it, no one will use it. This chapter shifts focus to trust, the soft topic engineers often skip but which determines whether a product succeeds. Using a travel-agent AI as the running example, the book shows when users hesitate to follow recommendations and when they're willing to share credit-card data. We learn two layers of transparency — algorithmic (architecture and training data exposed to developers) and presentation (explaining the why to users) — and three XAI techniques: attention visualization, saliency maps, and natural-language explanations, with BERT code samples. The chapter closes by tackling the two biggest trust killers in generative AI: uncertainty (what to do with vague prompts?) and bias (training-data inequities being amplified). It's the foundation for the safety and ethics discussions that follow.",
  learning_objectives_zh: [
    "理解為什麼信任是生成式 AI 採用的關鍵成功因素,以及缺乏信任的具體後果",
    "區分演算法透明度與呈現層透明度,並能選擇對應的 XAI 技術(注意力視覺化、顯著性圖、自然語言解釋)",
    "處理生成式 AI 系統中的不確定性與偏見,包含機率建模、信心分數與去偏見演算法",
    "設計有效的輸出溝通策略、使用者控制機制與知情同意流程",
    "落實倫理開發實踐 — 公平、隱私、智慧財產權 — 並在整個 AI 生命週期中嵌入這些原則"
  ],
  learning_objectives_en: [
    "Understand why trust is critical for generative AI adoption and the concrete consequences of distrust",
    "Distinguish algorithmic transparency from presentation transparency and pick the right XAI technique (attention visualization, saliency maps, natural-language explanation)",
    "Handle uncertainty and bias through probabilistic modeling, confidence scoring, and debiasing algorithms",
    "Design effective output communication, user control features, and informed-consent flows",
    "Apply ethical development practices — fairness, privacy, IP — across the AI lifecycle"
  ],
  sections: [
    {
      id: "8.1",
      heading_zh: "信任為何是 AI 採用的根基",
      heading_en: "Why Trust is the Foundation of AI Adoption",
      explanation_zh: "信任不是一個情緒詞彙,而是 AI 系統能否被大規模採用的硬性決定因素。當使用者面對一個不透明的「黑盒子」AI 時,他們不會貢獻回饋、不會分享真實資料、也不會在重要決策上依賴它的建議 — 結果就是這個 AI 永遠學不到使用者真正需要什麼,陷入「使用者不信任 → 不提供資料 → 系統表現變差 → 使用者更不信任」的死亡螺旋。書中用旅遊 AI 來具體化這個概念:如果一個 AI 推薦你帶全家去歐洲玩,但你不知道它是怎麼推薦的、為什麼是這個城市而不是那個,你大概率會無視它、或自己再去 Google 確認。更糟的情況是,使用者會「欺騙」AI — 故意給出錯誤偏好,結果產出爛行程,進一步證實了「AI 不可靠」的偏見。信任的多變數本質意味著它牽涉到系統可靠性(產出穩不穩定)、透明度(我看得到它怎麼想)、價值對齊(它的推薦符合我的價值觀,例如環保或文化深度)三個維度,缺一不可。",
      explanation_en: "Trust is not a soft emotional concept but a hard determinant of whether an AI system gets adopted at scale. When users face an opaque black-box AI, they don't contribute feedback, share real data, or rely on its recommendations for important decisions — meaning the AI never learns what users actually need, locking into a death spiral: users don't trust the AI, so users don't share data, so the system performs worse, so users trust even less. The book uses the travel AI to make this concrete: if an AI recommends taking your family to Europe but you can't see why this city instead of another, you'll likely ignore it or re-verify on Google. Worse, users will game the AI — feeding fake preferences, getting bad itineraries, confirming their bias that AI is unreliable. Trust is multivariate: it depends on system reliability (consistent outputs), transparency (I can see the reasoning), and value alignment (recommendations match my values, like eco-friendliness or cultural depth) — all three are needed.",
      analogy_zh: "信任就像一段新的友誼:你不會在第一次見面就把銀行密碼告訴對方。要建立信任,對方必須一致地展現可靠(說到做到)、坦誠(願意解釋自己為什麼這樣想)、且尊重你的價值觀。AI 系統面對使用者也是一樣 — 它必須一次又一次地證明自己值得被信賴。",
      analogy_en: "Trust is like a new friendship: you don't share bank passwords on the first meeting. To build trust, the other party must consistently demonstrate reliability (doing what they said), candor (willing to explain reasoning), and respect for your values. An AI system faces users the same way — it must earn trustworthiness one interaction at a time.",
      worked_example_zh: "一家旅遊公司導入 AI 推薦行程系統。第一版上線時只給結果(「推薦巴塞隆納 5 天行程」),三個月後採用率僅 12%。團隊分析發現使用者抱怨「不知道為什麼是巴塞隆納」。第二版加入解釋(「因為您過去三次行程偏好文化古蹟+海岸線,且預算落在中段,巴塞隆納在這些維度都符合」),採用率上升到 41%。第三版再加入「不確定性提示」(若預算資訊不完整,系統會明確說「我假設您預算約€2000,若要調整請告訴我」),採用率達到 67%。這個案例說明信任不是一次性功能,而是一連串設計選擇的累積效果。",
      worked_example_en: "A travel company deploys an AI itinerary recommender. V1 just outputs results (\"Recommended Barcelona 5-day trip\"); adoption hits only 12% after three months because users complain they don't know why Barcelona. V2 adds explanation (\"Because your last three trips show preference for cultural heritage + coastline, and your mid-range budget, Barcelona scores high on all\"); adoption rises to 41%. V3 adds uncertainty cues (\"I'm assuming a 2000 EUR budget — please correct if different\"); adoption reaches 67%. This shows trust is not a single feature but a cumulative effect of many design choices.",
      diagram_description: "A 'Trust Death Spiral' loop diagram: 4 nodes in a circle — (1) Users don't trust AI then (2) Users withhold data/feedback then (3) System learns less, gets worse then (4) Users trust even less, back to 1. Counter-clockwise. Add a 'breakout arrow' labeled 'Transparency + Explainability + Value Alignment' that breaks the loop and leads to a 'Virtuous Cycle' on the right."
    },
    {
      id: "8.2",
      heading_zh: "透明度與可解釋性的兩個層級",
      heading_en: "Two Levels of Transparency and Explainability",
      explanation_zh: "書中強調透明度有兩個必須並行的層級,缺一不可。第一層是「演算法透明度」(algorithmic transparency)— 公開模型架構、訓練資料來源、已知偏見、評估方法。這個層級主要服務開發者、稽核員、監管機關,讓他們能評估系統的可靠性。例如歐盟 AI 法案就要求高風險 AI 必須提供這些技術文件。第二層是「呈現透明度」(presentation transparency,也就是可解釋性)— 用使用者看得懂的語言告訴他「為什麼這個推薦」。一般使用者不會去讀模型卡或論文,他們只想知道「為什麼是這家飯店?」「我可以相信這個答案嗎?」。兩個層級的服務對象不同、表達形式不同,但目標都是讓信任有事實基礎。實務上有三類 XAI 技術可以實踐呈現透明度:注意力視覺化(顯示模型在處理輸入時關注哪些字)、顯著性圖(量化每個 token 對輸出的影響力)、以及自然語言解釋(用一段話說明決策邏輯,例如「這張圖被分類成狗,因為有狗常見的尾巴和耳朵特徵」)。",
      explanation_en: "The book stresses transparency has two levels that must operate in parallel. The first is algorithmic transparency — disclosing model architecture, training data sources, known biases, evaluation methods. This serves developers, auditors, and regulators who need to assess reliability. The EU AI Act, for instance, requires this technical documentation for high-risk AI. The second is presentation transparency, i.e. explainability — telling users in plain language why this recommendation. Ordinary users don't read model cards or papers; they just want to know why this hotel and can I trust this answer. The two levels serve different audiences and forms, but both ground trust in facts. In practice, three XAI techniques implement presentation transparency: attention visualization (which input tokens the model focused on), saliency maps (quantifying each token's contribution to output), and natural-language explanations (a paragraph spelling out the decision logic, e.g. \"this image was classified as a dog because it shows a tail and ears typical of dogs\").",
      analogy_zh: "想像兩種餐廳:一家把所有食材來源、處理流程、營養成分都公開在後台供主管機關稽核(演算法透明度),同時又在菜單上用淺白語言告訴顧客「這道菜辣度三顆星、含花生過敏原、烹飪約 15 分鐘」(呈現透明度)。對主管機關來說後台資訊重要;對顧客來說菜單註記重要;兩者都做到才是真正值得信任的餐廳。",
      analogy_en: "Imagine two restaurants: one publishes every ingredient source, handling protocol, and nutritional profile to regulators (algorithmic transparency), while also labeling on the menu in plain language: \"Spice level 3/5, contains peanuts, cooks in 15 min\" (presentation transparency). Regulators care about the backend; diners care about the menu. A restaurant earns trust only when it does both.",
      worked_example_zh: "BERT 注意力視覺化的實作:輸入「歐洲最適合家庭旅遊的地點?」,程式載入 bert-base-uncased 模型並設定 output_attentions=True,取得最後一層的注意力分數。將 token 解碼後在 matplotlib 上繪製熱圖,顯示每個 token 對其他 token 的關注強度。結果發現「family」與「Europe」之間有最強連結 — 這個視覺化讓使用者(或開發者除錯時)看出模型確實理解了「家庭+歐洲」這個核心語意。同樣的查詢若改用顯著性圖,則會看到「family-friendly」這個複合詞貢獻最大,進一步確認模型聚焦在正確的需求面向上。",
      worked_example_en: "BERT attention visualization implementation: input \"Best family-friendly travel destinations in Europe?\", the code loads bert-base-uncased with output_attentions=True, extracts last-layer attention scores, decodes tokens, and plots a matplotlib heatmap showing each token's attention to others. The result reveals strongest link between \"family\" and \"Europe\" — the visualization confirms (to users or debugging engineers) that the model grasped the family+Europe core semantic. The same query through a saliency map shows the compound \"family-friendly\" contributed most, further confirming the model focused on the right need.",
      diagram_description: "Two-column comparison chart. Left column 'Algorithmic Transparency' with icons: model card, training-data manifest, bias audit report; audience: developers/auditors/regulators. Right column 'Presentation Transparency (Explainability)' with icons: attention heatmap, saliency bars, natural-language reasoning text; audience: end users. Bottom: convergent arrows to a 'Trust' label showing both feed into the same outcome."
    },
    {
      id: "8.3",
      heading_zh: "處理不確定性與偏見",
      heading_en: "Handling Uncertainty and Biases",
      explanation_zh: "不確定性與偏見是生成式 AI 的兩個結構性問題,不會自動消失。不確定性來源有三:資料不完整或模糊(使用者說「我想冒險」— 太籠統)、本質不可預測的事件(天氣、政治動盪)、以及模型訓練範圍的極限(2023 年訓練的模型不知道 2025 年的新景點)。處理方式包含機率建模(輸出帶有信心分數的多個選項而非單一答案)、貝氏推論(隨新資料更新信念)、不確定性量化(在推論時主動估計誤差範圍)。例如當使用者說「我想要浪漫旅行」,系統不該假設一個解釋,而應該回:「我有幾個方向 — 65% 信心適合您的是巴黎+里昂組合;25% 是聖托里尼;若您偏好亞洲我建議京都(35% 信心,因資料較少)。能告訴我更多嗎?」偏見則是另一個層次的問題,源於訓練資料反映的社會結構性不平等。書中提到 2018 年研究發現商用人臉辨識對深膚色女性的錯誤率最高,當這種偏差進入推薦系統,可能造成「數位重劃線」(digital redlining)— 某些人口群被系統性地導向特定區域或價位。處理方法包含使用代表性多元的訓練資料、去偏見演算法(在訓練過程中懲罰歧視性模式)、對抗訓練(主動產生偏見樣本讓模型學會抗拒)、以及人類監督。",
      explanation_en: "Uncertainty and bias are structural problems in generative AI that don't self-correct. Uncertainty has three sources: incomplete or vague data (user says \"I want adventure\" — too broad), inherently unpredictable events (weather, political unrest), and model knowledge boundaries (a 2023-trained model doesn't know 2025 destinations). Handling techniques include probabilistic modeling (output multiple options with confidence scores rather than one answer), Bayesian inference (update beliefs with new data), uncertainty quantification (actively estimate error bounds at inference). For example, when a user says \"I want a romantic trip,\" the system shouldn't pick one interpretation but reply: \"Several directions — 65% confidence Paris+Lyon fits you; 25% Santorini; if you prefer Asia I'd suggest Kyoto (35% confidence, less data). Tell me more?\" Bias is another layer, rooted in training data reflecting societal inequities. The book cites 2018 research showing commercial face recognition had highest error rates for darker-skinned women; when such bias enters recommendation systems, it can cause digital redlining — certain demographics systematically steered to specific zones or price tiers. Mitigation includes diverse representative training data, debiasing algorithms (penalizing discriminatory patterns during training), adversarial training (generate biased samples for the model to learn to resist), and human supervision.",
      analogy_zh: "不確定性就像氣象預報員 — 一個誠實的預報員不會說「明天下雨」,而是「明天 70% 機率下雨」。聽眾因為知道信心程度,就能做更好的決策(出門帶傘?還是改室內活動?)。偏見則像一個只在某個社區長大的人,對「正常生活」的認知會被那個社區的經驗框住 — 必須刻意接觸不同背景的人才能矯正這個盲點。AI 從訓練資料中學習,訓練資料就是它的「社區」。",
      analogy_en: "Uncertainty is like a weather forecaster — an honest forecaster doesn't say 'it'll rain tomorrow' but '70% chance of rain.' The audience, knowing the confidence level, makes better decisions (bring an umbrella, switch to indoor plans). Bias is like a person who grew up in one neighborhood — their notion of 'normal life' gets framed by that community's experience. They must deliberately meet people from other backgrounds to correct the blind spot. AI learns from training data, and training data is its neighborhood.",
      worked_example_zh: "假設某旅遊 AI 的訓練資料主要來自歐美高收入旅客,部署後發現它對東南亞使用者的推薦總是偏向五星級飯店與名牌購物,忽略了當地文化體驗。團隊做了三件事:(1)收集 5000 筆來自東南亞、南美、非洲使用者的偏好標註,加入訓練資料,使資料地理分佈從 78% 歐美降至 52%;(2)導入去偏見演算法,在訓練目標中加入「不同地區使用者的推薦多樣性」懲罰項;(3)建立人在迴圈審核,每月由來自不同文化背景的 5 位審核員抽樣審查 100 條推薦。三個月後,東南亞使用者滿意度從 3.2/5 上升至 4.4/5,推薦的「在地文化體驗」比例從 8% 升至 31%。",
      worked_example_en: "Suppose a travel AI's training data is dominated by European/American high-income travelers; once deployed, it tends to recommend 5-star hotels and luxury shopping to Southeast Asian users while ignoring local cultural experiences. The team does three things: (1) collect 5000 preference labels from Southeast Asia, South America, and Africa users to add to training data, dropping European/American share from 78% to 52%; (2) introduce a debiasing algorithm that penalizes lack of recommendation diversity across user regions; (3) set up human-in-the-loop review with five reviewers from diverse backgrounds sampling 100 recommendations monthly. After three months, Southeast Asian user satisfaction rises from 3.2/5 to 4.4/5, and the share of recommendations labeled 'local cultural experience' rises from 8% to 31%.",
      diagram_description: "A two-panel diagram. Left panel 'Uncertainty Handling': vague input on left, three outputs with confidence bars (65%, 25%, 35%) on right, arrow labeled 'Probabilistic modeling'. Right panel 'Bias Mitigation': training data pie chart heavily skewed (78% one color), arrow through 'Diversification + Debiasing + Human review' box, to balanced pie chart (52% / 18% / 16% / 14%)."
    },
    {
      id: "8.4",
      heading_zh: "有效溝通輸出與使用者控制",
      heading_en: "Effective Output Communication and User Control",
      explanation_zh: "信任不只在系統內部產生,也在「使用者與輸出互動的瞬間」產生或破滅。書中強調三個輸出溝通的關鍵:(1)清楚標示 AI 生成 — 使用者必須知道這是 AI 而非人類產生的內容,避免被誤導;(2)提供上下文與來源 — 例如「這段旅遊建議基於 2024 年 Lonely Planet 與 TripAdvisor 評論,以及您過去三次行程的偏好」;(3)主動提示限制 — 例如「請在出發前自行確認簽證需求與當地最新規定,因我的資料可能已過時三個月」。這些看似多餘的訊息,實際上是「校準使用者期待」的關鍵,避免使用者誤把 AI 當成全知全能的權威。第二個面向是使用者控制與知情同意。讓使用者能調整參數(旅遊風格、預算、活動偏好)會顯著提升信任感,因為人在感覺有主控權時,即使結果不完美也會接受。同樣重要的是知情同意流程 — 透明地說明「我會收集您的旅遊歷史、信用卡資訊、瀏覽行為,這些資料會用於推薦最佳化與系統訓練,您可以隨時撤回同意並刪除」。這不只是法律合規(GDPR、CCPA),更是建立長期關係的基礎。",
      explanation_en: "Trust isn't only built inside the system; it's born or killed in the moment the user encounters the output. The book stresses three keys to output communication: (1) clearly label AI-generated content — users must know this is AI not human, to avoid being misled; (2) provide context and sourcing, e.g. \"This recommendation draws on 2024 Lonely Planet, TripAdvisor reviews, and your last three trips\"; (3) proactively flag limitations, e.g. \"Please verify visa requirements before departure; my data may be three months stale.\" These seem redundant but actually calibrate user expectations, preventing the user from treating the AI as an omniscient authority. The second dimension is user control and informed consent. Letting users tune parameters (travel style, budget, activities) substantially raises trust because people accept imperfect outcomes when they feel in control. Equally important is the consent flow — transparently stating \"I collect your travel history, payment info, browsing behavior; used for recommendation tuning and system training; you may revoke and request deletion anytime.\" This is not just legal compliance (GDPR, CCPA) but the foundation of a long-term relationship.",
      analogy_zh: "想像點外送 — 如果 App 告訴你「廚師現在開始備餐,預計 30 分鐘送達,目前外送員距離您 2.3 公里」,你會比看到一個空白載入畫面有耐心得多。資訊不一定要完美,但要透明。AI 系統的輸出也是 — 給使用者足夠的脈絡與限制提示,他就會理解「不完美但可信」遠勝過「貌似完美但不知所以然」。",
      analogy_en: "Imagine ordering food delivery — if the app says 'chef just started cooking, ETA 30 minutes, driver currently 2.3 km away,' you're far more patient than facing a blank loading screen. The information needn't be perfect, just transparent. AI system outputs are the same — give users enough context and caveats, and they'll understand that 'imperfect but honest' beats 'looks perfect but inscrutable.'",
      worked_example_zh: "一個 AI 寫作助手原本只給「最終版本」的文字輸出,使用者抱怨「我覺得 AI 在搶我的創作主導權」。改版後加入三件事:(1)每段輸出標註「AI 起草,請審閱修改」;(2)在文字下方列出系統參考的資料來源(「本段引用自您 2023 年 5 月的部落格文章 + 您指定的 Hemingway 風格參數」);(3)在側邊欄提供 5 個可調整滑桿:語氣(正式↔隨意)、長度(精簡↔詳細)、複雜度(口語↔學術)、人稱(第一↔第三)、情緒色彩(中性↔強烈)。同時在第一次使用時請使用者同意「我會記得您的調整偏好以便未來個性化」,並提供「重設記憶」按鈕。改版後,使用者留存率從 31% 升至 68%,且回報「感覺像合作而非被取代」。",
      worked_example_en: "An AI writing assistant initially output only 'final' text, and users complained 'I feel the AI is taking over my creative agency.' The redesign added three things: (1) each output labeled 'AI draft, please review and revise'; (2) below the text, list the references the system used ('this section drew on your May 2023 blog post + the Hemingway style parameters you set'); (3) a side panel offered five tunable sliders: tone (formal/casual), length (concise/detailed), complexity (conversational/academic), person (first/third), emotional intensity (neutral/strong). On first use, the system requested consent to 'remember your preference adjustments for future personalization,' with a 'reset memory' button. After the redesign, retention rose from 31% to 68%, and users reported feeling like collaborators rather than being replaced.",
      diagram_description: "Three-tier 'Output Communication Stack' from top to bottom: Tier 1 'Labeling' (icon: 'AI-Generated' badge), Tier 2 'Context and Sources' (icon: citation list), Tier 3 'Limitations and Caveats' (icon: warning triangle with date stamp). Beside, a 'User Control Panel' rectangle showing sliders for style, budget, complexity, and a checkbox group for consent items, with a 'Revoke Consent' button at bottom."
    },
    {
      id: "8.5",
      heading_zh: "倫理開發與責任",
      heading_en: "Ethical Development and Responsibility",
      explanation_zh: "倫理開發不是部署後才考慮的附加項,而是必須從專案啟動時就嵌入的設計原則。書中圍繞三個核心議題:公平與不歧視、隱私、智慧財產權。公平性的挑戰在於 AI 從歷史資料學習,而歷史資料本身就反映了社會的結構性偏見 — 如果不主動干預,AI 會把這些偏見「自動化、規模化」。具體做法包括:在資料收集階段確保多元代表性、在訓練階段使用去偏見演算法、在部署後持續監控不同族群的輸出品質差異、在治理層級組建多元利害關係人審查小組(包含倫理學者、法律專家、潛在影響社群代表)。隱私保護要求採用「隱私設計」(privacy by design)原則 — 從一開始就把保護機制嵌入架構,而非後續貼補。書中提到的具體技術包含差分隱私(在輸出加噪音防止逆向推導個資)、安全多方計算(讓多方在不共享原始資料的情況下協作)、聯邦學習(模型訓練在本地完成只共享參數)、加密處理。智慧財產權則需要新的框架 — 訓練資料是否獲得授權?AI 生成的內容歸屬於誰?系統是否能偵測自己是否複製了受版權保護的內容?這些問題仍在演進中,書中強調的是責任歸屬必須明確,否則出問題時無人負責。",
      explanation_en: "Ethical development is not an add-on bolted on after deployment but a design principle baked in from project kickoff. The book centers on three issues: fairness/non-discrimination, privacy, and IP. The fairness challenge: AI learns from historical data, which reflects structural societal biases — without active intervention, AI automates and scales these biases. Concrete practices: ensure diverse representation at data collection, use debiasing algorithms during training, monitor output-quality gaps across demographics post-deployment, set up multi-stakeholder review boards at the governance level (ethicists, lawyers, representatives of affected communities). Privacy protection requires privacy by design — embedding protection in the architecture from the start, not patched on later. Techniques the book mentions include differential privacy (adding noise to outputs to prevent reverse inference of individual data), secure multi-party computation (parties collaborate without sharing raw data), federated learning (model trains locally, only parameters shared), and encrypted processing. IP requires new frameworks — was training data licensed? Who owns AI-generated content? Can the system detect that it reproduced copyrighted material? These questions are still evolving, but the book stresses accountability must be clearly assigned, or no one is responsible when things go wrong.",
      analogy_zh: "倫理開發像建房子 — 你可以選擇從一開始就用環保建材、無障礙設計、地震結構;或者等房子蓋好後再翻修。第一種貴一點但長久;第二種便宜快速但事後彌補的成本通常是原先的數倍。許多 AI 公司的痛苦教訓都來自於「先求快上線,出事再說」— 結果在歐盟罰款、集體訴訟、品牌信任崩壞之後才發現:從一開始把倫理納入設計,反而是最省成本的選擇。",
      analogy_en: "Ethical development is like building a house — you can choose eco-friendly materials, accessibility design, and earthquake structure from the start, or retrofit after the house is built. The first costs more upfront but lasts; the second is cheap and fast but the retrofit cost is usually several times the original. Many AI companies' painful lessons come from 'ship fast, fix later' — only after EU fines, class actions, and brand-trust collapse do they realize: baking ethics in from day one is actually the cheapest path.",
      worked_example_zh: "一家健康 AI 新創在開發病患預後預測模型時,從第一天就採用以下流程:(1)資料審查 — 收集的 5 家醫院資料按性別、種族、年齡分層分析,發現亞裔樣本僅佔 7%(代表性不足),主動再收集 3 家亞裔患者占多數的醫院資料;(2)訓練流程加入公平性指標 — 不只追求整體準確率,也要求不同子群的偽陰率差距 <5%;(3)隱私技術 — 使用聯邦學習,病患資料從不離開原醫院,只有模型參數聚合;(4)成立倫理諮詢委員會 — 包含 2 位倫理學者、1 位健保法律專家、3 位病友代表,每季審查系統行為;(5)版權合規 — 所有訓練文獻均購買學術授權或使用開放資料集。產品上市後通過 FDA 審核並進入 12 家醫院,公司估值在三年內增長 4 倍。",
      worked_example_en: "A health-AI startup developing a patient-prognosis model adopts this flow from day one: (1) data review — analyze the five collected hospital datasets stratified by gender, race, age, finding Asian samples at only 7% (under-represented), proactively collect data from three more Asian-majority hospitals; (2) training adds fairness metrics — not just overall accuracy but also false-negative-rate gap <5% across subgroups; (3) privacy via federated learning — patient data never leaves the source hospital, only model parameters aggregate; (4) ethics advisory board — two ethicists, one health-law expert, three patient advocates, quarterly review of system behavior; (5) copyright compliance — all training literature is purchased academic license or open datasets. Post-launch, the product passes FDA review, deploys in 12 hospitals, and the company's valuation grows 4x in three years.",
      diagram_description: "Three-pillar diagram 'Ethical AI Development Pillars': Pillar 1 'Fairness' with sub-items (diverse data, debiasing, monitoring, multi-stakeholder review); Pillar 2 'Privacy' with sub-items (differential privacy, SMPC, federated learning, encryption); Pillar 3 'IP Rights' with sub-items (licensed data, content provenance, attribution, copyright detection). Foundation block beneath labeled 'Privacy-by-Design + Accountability Framework'."
    }
  ],
  code_or_procedure_zh: "建立可信 AI 系統的實作檢查清單(可作為專案啟動模板):\n\n【啟動階段】\n□ 識別系統的所有利害關係人(使用者、受影響者、監管方、開發團隊)\n□ 撰寫「信任設計文件」說明系統將如何處理透明度、隱私、偏見、責任歸屬\n□ 組建跨領域倫理審查委員會(技術、法律、倫理、社群代表)\n\n【資料階段】\n□ 審查訓練資料的人口統計分佈,記錄已知偏差\n□ 確認所有資料來源的授權狀態(隱私同意、版權)\n□ 建立資料卡(data card),公開描述資料特性、限制、適用範圍\n\n【模型開發階段】\n□ 整合至少一項 XAI 技術(注意力視覺化/顯著性圖/自然語言解釋)\n□ 設定子群公平性指標,定期評估\n□ 加入不確定性量化機制(信心分數或機率分佈輸出)\n□ 對抗訓練測試對偏見輸入的穩健性\n\n【部署階段】\n□ 所有 AI 輸出明確標示為 AI 生成\n□ 提供使用者控制介面(可調參數、刪除資料、撤回同意)\n□ 公開模型卡(model card)說明能力與限制\n□ 建立回饋通道與事件回報機制\n\n【維運階段】\n□ 持續監控不同族群的輸出品質\n□ 每季稽核並更新模型卡與資料卡\n□ 定期紅隊測試(red teaming)主動找出偏見與失效模式\n□ 建立明確的事故回應與責任歸屬流程",
  code_or_procedure_en: "Trustworthy AI System Implementation Checklist (project kickoff template):\n\n[Kickoff]\n[ ] Identify all stakeholders (users, affected parties, regulators, developers)\n[ ] Write a Trust Design Document specifying how the system handles transparency, privacy, bias, accountability\n[ ] Form a cross-disciplinary ethics review board (tech, legal, ethics, community reps)\n\n[Data Stage]\n[ ] Audit demographic distribution of training data; document known biases\n[ ] Verify license status of all data sources (consent, copyright)\n[ ] Create a data card publicly describing data characteristics, limits, suitable use\n\n[Model Development]\n[ ] Integrate at least one XAI technique (attention viz / saliency map / natural-language explanation)\n[ ] Define subgroup fairness metrics; evaluate regularly\n[ ] Add uncertainty quantification (confidence scores or probability distributions)\n[ ] Adversarial training tested against biased inputs\n\n[Deployment]\n[ ] All AI output clearly labeled as AI-generated\n[ ] User control UI (tunable params, data deletion, consent revocation)\n[ ] Publish a model card describing capabilities and limits\n[ ] Establish feedback channel and incident-reporting mechanism\n\n[Operations]\n[ ] Continuously monitor output quality across demographics\n[ ] Quarterly audit and update of model card and data card\n[ ] Regular red-teaming to actively find biases and failure modes\n[ ] Documented incident response and accountability assignment process",
  key_takeaways_zh: [
    "信任是 AI 採用的決定性因素 — 系統能力再強,沒有信任就無法規模化",
    "透明度有兩層:演算法透明度(對開發者/稽核員)與呈現透明度(對使用者),兩者缺一不可",
    "不確定性應該被明確量化並傳達給使用者,而不是被掩飾;誠實的「不確定」比假裝確定更建立信任",
    "偏見不會自動消失,必須在資料、訓練、部署、監控四個階段持續主動干預",
    "倫理必須是設計階段就嵌入的核心原則,事後補救的成本是預先設計的數倍"
  ],
  key_takeaways_en: [
    "Trust is the decisive factor for AI adoption — no matter how capable, without trust the system can't scale",
    "Transparency has two layers: algorithmic (for developers/auditors) and presentation (for users); both are required",
    "Uncertainty must be explicitly quantified and communicated, not hidden; honest uncertainty builds more trust than fake certainty",
    "Bias does not self-correct — active intervention is needed at data, training, deployment, and monitoring stages",
    "Ethics must be a design principle from day one; retrofit costs are several times the upfront cost"
  ],
  common_pitfalls_zh: [
    "誤以為「提高準確率」就會自動提升信任 — 實際上即使準確率 95%,缺乏可解釋性的系統使用者仍會抗拒",
    "把透明度當成「公開技術文件」就好 — 忽略了普通使用者需要的呈現層解釋",
    "認為偏見是「資料問題」可以靠收集更多資料解決 — 實際上需要演算法、流程、治理三管齊下",
    "在使用者介面把所有限制和警告藏在小字 — 反而會在事故發生時被指控刻意誤導",
    "把倫理委員會當作公關門面 — 沒有真正決策權的委員會無法影響產品方向"
  ],
  common_pitfalls_en: [
    "Believing 'higher accuracy' automatically raises trust — in reality, even 95% accuracy fails to gain user trust without explainability",
    "Treating transparency as 'publishing technical docs' — ignoring the presentation-layer explanations ordinary users need",
    "Assuming bias is a 'data problem' solvable by collecting more data — actually needs algorithm + process + governance combined",
    "Hiding all caveats and warnings in small print — backfires when incidents happen and you're accused of deliberate concealment",
    "Treating the ethics board as PR window-dressing — a board without real decision power can't change product direction"
  ],
  quiz: [
    {
      question_zh: "下列關於 AI 信任的敘述,哪一個最準確反映了書中的核心觀點?",
      question_en: "Which statement about AI trust most accurately reflects the chapter's core view?",
      options_zh: [
        "信任主要靠提高模型準確率達成,只要錯誤率低於 5% 就會有信任",
        "信任只取決於使用者介面設計,跟模型本身無關",
        "信任是多變數的,牽涉系統可靠性、透明度、價值對齊三個維度,缺一不可",
        "信任只在 B2C 場景重要,企業用戶不在意"
      ],
      options_en: [
        "Trust is mainly about model accuracy — as long as error rate < 5%, trust follows",
        "Trust depends only on UI design, unrelated to the model itself",
        "Trust is multivariate: system reliability, transparency, value alignment — all three required",
        "Trust only matters in B2C; enterprise users don't care"
      ],
      answer_index: 2,
      explanation_zh: "書中明確指出信任是多變數的,牽涉系統可靠性(產出穩不穩定)、透明度(使用者看得到推理過程)、價值對齊(推薦符合使用者價值觀)。準確率高但黑盒子仍然無法建立信任;UI 設計重要但無法彌補模型缺陷;企業用戶反而對信任要求更高,因為涉及合規與責任。",
      explanation_en: "The chapter explicitly states trust is multivariate, encompassing reliability (stable outputs), transparency (visible reasoning), and value alignment (recommendations match user values). High accuracy in a black box still fails to build trust; UI design matters but can't compensate for model flaws; enterprise users actually have higher trust requirements due to compliance and accountability."
    },
    {
      question_zh: "下列哪一項是「演算法透明度」而非「呈現透明度」?",
      question_en: "Which is an example of 'algorithmic transparency' rather than 'presentation transparency'?",
      options_zh: [
        "在 UI 上用一句話告訴使用者「我推薦這家飯店因為符合您的預算與評價偏好」",
        "公開模型訓練資料的人口統計分佈與已知偏差",
        "在輸出旁顯示注意力視覺化熱圖",
        "用自然語言解釋為什麼某段文字被歸類為負面"
      ],
      options_en: [
        "On the UI, one sentence telling the user 'I recommend this hotel because it matches your budget and rating preferences'",
        "Publish the demographic distribution and known biases of training data",
        "Show an attention-visualization heatmap next to the output",
        "Use natural language to explain why a passage was classified as negative"
      ],
      answer_index: 1,
      explanation_zh: "演算法透明度主要服務開發者、稽核員、監管方,公開技術細節如資料來源、模型架構、偏差。其他三個選項都是呈現透明度 — 用各種形式向終端使用者解釋具體決策。",
      explanation_en: "Algorithmic transparency serves developers, auditors, regulators by disclosing technical details like data sources, architecture, biases. The other three are presentation transparency — explaining specific decisions to end users in various forms."
    },
    {
      question_zh: "當使用者輸入「我想要一個冒險的旅程」時,書中建議系統應該如何處理這種不確定性?",
      question_en: "When a user inputs 'I want an adventurous trip,' how does the chapter suggest the system handle this uncertainty?",
      options_zh: [
        "直接推薦一個熱門冒險行程,因為使用者會自行選擇",
        "拒絕回答,要求使用者重新輸入更具體的內容",
        "提供多個帶有信心分數的潛在選項,讓使用者了解模型的解讀並補充資訊",
        "隨機選擇一個地點,反正使用者也不知道差異"
      ],
      options_en: [
        "Recommend one popular adventure trip — the user will pick",
        "Refuse to answer; ask for more specific input",
        "Provide multiple options with confidence scores so user understands the model's interpretation and can clarify",
        "Pick a random destination — the user can't tell the difference anyway"
      ],
      answer_index: 2,
      explanation_zh: "書中明確說明,面對模糊輸入,系統應該採用機率建模、輸出多個帶信心分數的選項,讓使用者看到模型的解讀範圍並有機會補充資訊。這比假裝確定或拒絕回答都更能建立信任。",
      explanation_en: "The chapter clearly states that for vague input, the system should use probabilistic modeling, output multiple options with confidence scores, letting the user see the model's interpretation range and clarify. This builds more trust than faking certainty or refusing to answer."
    },
    {
      question_zh: "下列哪個情境最能說明「呈現透明度不足」導致的信任問題?",
      question_en: "Which scenario best illustrates a trust problem caused by insufficient 'presentation transparency'?",
      options_zh: [
        "一個醫療 AI 公開了完整的模型卡與訓練資料文件,但臨床醫師看完仍不知道為什麼系統推薦這個診斷",
        "一個推薦系統的訓練資料來源未公開",
        "一個 AI 沒有設定預算上限",
        "一個系統的伺服器當機"
      ],
      options_en: [
        "A medical AI publishes a full model card and training-data docs, but clinicians still can't tell why the system recommended this diagnosis",
        "A recommender system's training data sources are undisclosed",
        "An AI has no budget cap configured",
        "A server outage"
      ],
      answer_index: 0,
      explanation_zh: "選項 A 正是呈現透明度不足的典型 — 演算法層級的文件公開了(模型卡、訓練資料),但對使用者(臨床醫師)而言,他們需要的是針對「這個具體決策」的可理解解釋,而不是技術文件。這正是兩層透明度必須並行的理由。選項 B 是演算法透明度問題,C、D 與透明度無關。",
      explanation_en: "Option A is exactly insufficient presentation transparency — algorithmic-level docs are published (model card, training data), but the user (clinician) needs a comprehensible explanation of this specific decision, not technical docs. This is why both layers of transparency must run in parallel. B is an algorithmic-transparency issue; C and D are unrelated to transparency."
    },
    {
      question_zh: "關於 AI 系統中的偏見處理,下列哪個做法最不可能有效?",
      question_en: "Regarding bias handling in AI systems, which approach is least likely to be effective?",
      options_zh: [
        "在訓練資料收集階段確保多元人口統計代表性",
        "僅在部署後接受使用者投訴時才被動調整模型",
        "在訓練目標中加入子群公平性懲罰項",
        "組建多元背景的審查委員會定期稽核"
      ],
      options_en: [
        "Ensure diverse demographic representation in training-data collection",
        "Only react to user complaints after deployment to adjust the model",
        "Add subgroup fairness penalties to the training objective",
        "Form a diverse-background review board for regular audits"
      ],
      answer_index: 1,
      explanation_zh: "被動等使用者投訴的問題在於:(1)受影響最深的族群通常也是最沒有發聲管道的;(2)等到投訴累積到被注意時,危害已經規模化;(3)缺乏系統性監控,問題會反覆出現。書中強調偏見必須在資料、訓練、部署、監控四個階段「持續主動干預」,而非被動回應。",
      explanation_en: "Reactive waiting fails because: (1) the most affected groups often have the least voice; (2) by the time complaints accumulate enough to be noticed, harm has already scaled; (3) without systematic monitoring, problems recur. The chapter stresses bias must be 'continuously and actively intervened on' at data, training, deployment, monitoring stages — not reactive."
    }
  ]
};

const chapter9 = {
  id: 9,
  title_zh: "管理安全與倫理考量",
  title_en: "Managing Safety and Ethical Considerations",
  subtitle_zh: "本章你會學到代理人系統獨有的五大風險,以及行動邊界、決策驗證、回滾、即時監控等具體防護機制。",
  subtitle_en: "Five risks unique to agentic systems plus concrete safeguards: action boundaries, decision verification, rollback, real-time monitoring.",
  overview_zh: "如果說第八章談的是「信任」這個軟性議題,第九章就是把信任轉化為硬性的「安全機制」。本章一個關鍵洞察是:生成式 AI 與代理式 AI 的風險程度是天差地別 — 前者只是產出錯誤文字,後者卻會直接執行真實世界的動作。一個生成式 AI 幻覺一個假的股市趨勢,只是文字;但一個自主交易代理人基於這個幻覺,可能瞬間執行百萬美元的交易。書中系統性地剖析五大風險:對抗攻擊、偏見歧視、誤訊與幻覺、資料隱私違規、智慧財產風險,每一項都對比「在生成式 AI 中」與「在代理式系統中」的差異。接著提出六大核心安全設計:行動邊界(限制可做的事)、決策驗證(關鍵決策需多步檢核)、回滾能力(可以撤銷的動作)、即時監控(異常偵測)、RLHF 回饋迴圈、效能指標(不只看準確率還看倫理對齊)。最後談倫理框架四原則(以人為本、可問責、隱私保護、多元利害關係人參與)與隱私安全的具體技術(GDPR/HIPAA、差分隱私、聯邦學習)。",
  overview_en: "If Chapter 8 was about the soft theme of trust, Chapter 9 hardens that into concrete safety mechanisms. A key insight: risk in generative AI versus agentic AI is a different magnitude — the former merely outputs wrong text, the latter executes real-world actions. A generative AI hallucinating a fake market trend is just text; an autonomous trading agent acting on it can execute million-dollar trades instantly. The book systematically dissects five risks — adversarial attacks, bias and discrimination, misinformation and hallucinations, data-privacy violations, IP risks — each compared 'in generative AI' vs 'in agentic systems.' It then proposes six core safety designs: action boundaries (what the system may do), decision verification (multi-step checks for critical decisions), rollback (reversible actions), real-time monitoring (anomaly detection), RLHF feedback loops, performance metrics (beyond accuracy to ethical alignment). It closes with four ethical-framework principles (human-centric, accountable, privacy-protective, diverse-stakeholder) and concrete privacy/security techniques (GDPR/HIPAA, differential privacy, federated learning).",
  learning_objectives_zh: [
    "識別代理式 AI 系統獨有的五大風險類型,並說明它們與純生成式 AI 風險的關鍵差異",
    "設計六大核心安全機制:行動邊界、決策驗證、回滾能力、即時監控、RLHF 回饋、效能指標",
    "在實務情境中(如企業差旅管理)落實「漸進式自主」與「情境式安全邊界」",
    "選用合適的隱私保護技術(差分隱私、SMPC、聯邦學習、加密處理)並理解法規要求(GDPR、CCPA、HIPAA)",
    "建立倫理治理框架,包含人在迴圈審核、紅隊測試、利害關係人回饋迴圈"
  ],
  learning_objectives_en: [
    "Identify the five risk categories unique to agentic AI and articulate how they differ from pure generative AI risks",
    "Design six core safety mechanisms: action boundaries, decision verification, rollback, real-time monitoring, RLHF feedback, performance metrics",
    "In practical settings (e.g. corporate travel management) implement 'progressive autonomy' and 'contextual safety bounds'",
    "Select appropriate privacy techniques (differential privacy, SMPC, federated learning, encryption) and understand regulatory requirements (GDPR, CCPA, HIPAA)",
    "Build an ethical governance framework including human-in-the-loop review, red-teaming, and stakeholder feedback loops"
  ],
  sections: [
    {
      id: "9.1",
      heading_zh: "對抗攻擊與幻覺 — 為什麼代理人系統的風險更高",
      heading_en: "Adversarial Attacks and Hallucinations — Why Agentic Systems Are Riskier",
      explanation_zh: "對抗攻擊是指惡意行為者刻意設計輸入,讓 AI 系統做出錯誤判斷或洩漏機密。經典案例是 2017 年研究者證明,在停止標誌貼上幾張小貼紙,就能讓電腦視覺模型誤判為「速限標誌」。在純生成式 AI 中,這頂多產出錯誤文字;但在代理式系統中,後果是真實世界的災難 — 例如管理供應鏈的代理人被欺騙做出毀滅性的庫存決策;或自主交易代理人被誘導執行有害金融交易。書中以旅遊代理人為例:一個能自動訂房訂票的代理人若被攻擊,可能不只是推薦危險目的地,而是真的把客戶錢包刷下去訂到詐騙旅館。幻覺(hallucination)是另一個結構性問題 — 語言模型沒有「現實感」,它分不出自己編造的內容與事實。在生成式 AI 中幻覺只是錯誤文字;在代理式系統中卻可能讓緊急應變代理人把救援車派到不存在的災難現場、或讓健康管理代理人根據假病史安排錯誤治療。對抗策略包含對抗訓練(讓模型學會抗拒惡意輸入)、輸入清理、異常偵測,而對代理式系統還需要動作驗證、決策稽核、多步驗證授權。",
      explanation_en: "Adversarial attacks are malicious inputs deliberately crafted to make AI misjudge or leak secrets. A classic example: 2017 research showed sticking small patches on a stop sign could make a vision model mis-read it as 'speed limit.' In pure generative AI this just yields wrong text; in agentic systems the consequence is real-world disaster — a supply-chain agent tricked into ruinous inventory decisions, or an autonomous trading agent induced to execute harmful financial transactions. The book's travel example: an agent that auto-books flights and hotels, if attacked, doesn't merely recommend dangerous destinations but actually charges the customer's card for fraudulent providers. Hallucination is another structural problem — language models have no 'reality sense' and can't distinguish their own fabrications from facts. In generative AI, a hallucination is wrong text; in agentic systems, an emergency-response agent might dispatch crews to a nonexistent disaster site, or a health-management agent might schedule wrong treatments based on a fabricated patient history. Countermeasures include adversarial training (teach the model to resist malicious input), input sanitization, anomaly detection; for agentic systems we additionally need action verification, decision auditing, and multi-step authorization.",
      analogy_zh: "想像一個聽錯指令的助理 — 如果他只是把錯誤訊息寫成備忘錄,你看到後刪掉就沒事(生成式 AI 的幻覺);但如果這個助理有信用卡與你的銀行授權,他聽錯後直接刷卡買了你不需要的東西,損失就無法挽回(代理式系統的幻覺)。能力越大,責任(與風險)越大。",
      analogy_en: "Imagine an assistant who mishears instructions — if they only write the mistake in a memo, you can delete it and move on (generative-AI hallucination). But if the assistant has your credit card and bank authorization and acts on the misheard command by buying things you don't need, the loss is unrecoverable (agentic-system hallucination). With great capability comes great responsibility — and risk.",
      worked_example_zh: "一家金融科技公司部署了一個「自主投資代理人」,可代客戶執行小額股票交易。上線兩週後,一名駭客發現可以透過社群媒體大量發送「某科技股將公布利多」的虛假新聞,讓代理人的市場分析模組產生幻覺,自動執行買入。受害客戶損失累計達 $80 萬。事後團隊重新設計六層防護:(1)行動邊界 — 任何單筆超過 $500 必須二次人工確認;(2)決策驗證 — 重大決策前要從至少 3 個獨立來源交叉比對;(3)回滾機制 — 24 小時內可申請撤銷(只要對方銀行同意);(4)即時監控 — 偵測異常交易模式(短時間內多筆同向交易、不尋常的標的);(5)資訊來源可信度評分 — 社群媒體權重從 100% 降至 15%;(6)沙盒測試 — 新策略先在模擬環境跑 30 天才能上線。改版後 6 個月內未再發生重大損失,客戶數成長 3 倍。",
      worked_example_en: "A fintech deployed an 'autonomous investment agent' to execute small stock trades for clients. Two weeks after launch, a hacker discovered they could flood social media with fake news about an upcoming tech-stock catalyst, causing the agent's market-analysis module to hallucinate and auto-buy. Cumulative client losses reached $800K. The team redesigned six layers of protection: (1) Action boundaries — any single trade > $500 requires human re-confirmation; (2) Decision verification — major decisions cross-checked across at least 3 independent sources; (3) Rollback — within 24 hours, reversal can be requested (subject to counterparty bank); (4) Real-time monitoring — detect anomalous trading patterns (many same-direction trades in short time, unusual tickers); (5) Source credibility scoring — social-media weight dropped from 100% to 15%; (6) Sandboxing — new strategies must run 30 days in simulation before production. Over the next six months, no major losses recurred, and client count grew 3x.",
      diagram_description: "Risk-amplification diagram. Left: 'Generative AI Risk' showing a text bubble with wrong content, impact label 'Wrong text only'. Right: 'Agentic AI Risk' showing the same wrong content branching into multiple real-world action arrows (trade executed, treatment scheduled, booking confirmed, robot deployed). Width of arrows scales with severity. Above: dashed lines showing both stem from the same root causes (adversarial attack, hallucination)."
    },
    {
      id: "9.2",
      heading_zh: "偏見、隱私、智慧財產 — 規模化帶來的新挑戰",
      heading_en: "Bias, Privacy, IP — New Challenges from Scaling",
      explanation_zh: "偏見在生成式 AI 中是「輸出偏見文字」,在代理式系統中卻會自動化、規模化、且更難察覺。書中舉例:若一個招募代理人被訓練在帶有歷史偏見的資料上,它不只是寫出偏見描述,而是會從初篩、面試排程、晉升決策一條龍地系統性歧視某些族群 — 而且因為是機器決定,反而比人類偏見更難被指控、更難被發現。2018 年研究發現商用人臉辨識對深膚色女性錯誤率最高,當這種技術被整合進控制門禁、金融服務、健保資源的代理人系統,技術缺陷就變成系統性社會障礙。隱私違規在代理式系統中也更嚴峻:傳統生成式 AI 只是處理資料,代理人卻會主動存取、操作、根據個人資料做決策。書中提到 OpenAI 模型曾被發現「記住」訓練資料中的個人 email、地址、電話。當代理人有這種「記憶」,可能在自主決策時不知不覺洩漏隱私 — 而且是經由「一連串看似合理的個別決策」累積暴露隱私,單獨看每一步都沒違規。智慧財產風險也升級:Stable Diffusion 在 2022 年面臨關於訓練資料的訴訟,但更棘手的問題是 — 當一個代理人自主執行行銷活動,使用它從受版權保護作品學到的風格元素,責任歸屬怎麼界定?書中列出對應工具:Copyleaks(抄襲偵測)、Google SynthID(AI 圖像浮水印)、Adobe CAI(內容真實性倡議)、Microsoft Azure Content Moderator(版權違規偵測)等。",
      explanation_en: "Bias in generative AI is 'biased text output'; in agentic systems it automates, scales, and becomes harder to detect. The book's example: a recruiting agent trained on historically biased data doesn't just write biased descriptions — it systematically discriminates end-to-end across initial screening, interview scheduling, promotion decisions, and because it's machine-made, it's harder to accuse and harder to detect than human bias. 2018 research showed commercial face recognition had highest error rates for darker-skinned women; when such tech is integrated into agents controlling building access, financial services, or healthcare resources, technical flaws become systemic social barriers. Privacy violations are also more severe: traditional generative AI only processes data, but agents actively access, manipulate, and decide based on personal data. The book notes OpenAI's model was found to have memorized training-data emails, addresses, phone numbers. When an agent has such memory, it may inadvertently leak privacy during autonomous decisions — and it accumulates exposure through 'a chain of individually-plausible decisions' where each single step looks compliant. IP risks escalate too: Stable Diffusion faced a 2022 lawsuit about training data, but the thornier issue is — when an agent autonomously runs a marketing campaign using style elements learned from copyrighted works, who's accountable? The book lists relevant tools: Copyleaks (plagiarism), Google SynthID (AI-image watermarking), Adobe CAI (Content Authenticity Initiative), Microsoft Azure Content Moderator (copyright detection), etc.",
      analogy_zh: "想像三個不同的不當行為:(1)有人在私下抱怨歧視言論 — 只影響身邊少數人;(2)有人在媒體公開發表歧視言論 — 影響擴大但人們會反駁;(3)某個招募系統默默地把所有 50 歲以上的履歷扔進垃圾桶 — 受害者從不知道發生了什麼。代理人的偏見就像第三種,規模大、隱蔽、難舉證 — 這就是為什麼治理框架不能只靠「事後投訴」。",
      analogy_en: "Imagine three forms of misconduct: (1) a person privately voicing prejudice — affects a few nearby people; (2) a person publishing prejudice in media — broader reach but people push back; (3) a recruiting system silently trashing every resume of candidates over 50 — victims never know what happened. Agentic bias is the third kind: massive, hidden, hard to prove. That's why governance can't rely on after-the-fact complaints alone.",
      worked_example_zh: "一家連鎖醫院部署 AI 代理人協助病患排程治療。三個月後內部稽核發現:雖然每次個別預約都「看似合規」(沒有單一決策直接洩漏隱私),但累積起來,任何醫院員工只要查看某病患的「治療時段表」,就能推測出他罹患的疾病(因為某些癌症專科醫師只在特定時段看診)。團隊的因應:(1)導入「決策鏈隱私分析」工具,主動模擬「多個看似無害決策累積後會洩漏什麼」;(2)在排程演算法加入「資訊熵約束」— 同一病患的多個預約必須具有足夠隨機性,讓無法從時段推測病情;(3)對所有醫院員工的「治療表查詢」加入存取稽核日誌;(4)成立倫理委員會每季審查疑似隱私洩漏的案例。一年後,患者投訴隱私事件下降 73%,且醫院通過了 HIPAA 嚴格稽核。",
      worked_example_en: "A hospital chain deploys an AI agent to schedule patient treatments. Three months in, internal audit finds: while each individual booking 'looks compliant' (no single decision directly leaks privacy), in aggregate any hospital employee viewing a patient's 'treatment time table' could infer their disease (because certain oncologists only see patients in specific slots). The team's response: (1) deploy 'decision-chain privacy analysis' that proactively simulates 'what does accumulated harmless-looking decisions leak'; (2) add an 'entropy constraint' to the scheduling algorithm — the same patient's appointments must have enough randomness so the disease can't be inferred from timing; (3) add access-audit logs to all 'treatment table queries' by hospital staff; (4) form an ethics committee that quarterly reviews suspected leaks. After one year, privacy complaints drop 73%, and the hospital passes strict HIPAA audit.",
      diagram_description: "Three side-by-side risk-evolution panels titled Bias / Privacy / IP. Each panel shows a 'Generative AI' icon on the left (text bubble) and an 'Agentic System' icon on the right (multi-arm robot with action arrows), connected by a 'scale + speed' arrow showing severity multiplication. Below each panel: list of mitigation tools (Bias: AI Fairness 360, debiasing algos, decision auditing; Privacy: differential privacy, SMPC, federated learning; IP: SynthID, CAI, Copyleaks, Azure Moderator)."
    },
    {
      id: "9.3",
      heading_zh: "六大核心安全機制",
      heading_en: "Six Core Safety Mechanisms",
      explanation_zh: "書中提出代理人系統必備的六大核心安全機制,這是把抽象的「安全」轉化為可實作的工程框架。(1)行動邊界(Action Boundaries):嚴格定義代理人可以做什麼。例如金融場景禁止單筆超過 $X 的交易、醫療場景禁止修改藥物劑量。透過 OpenAI Function Calling、Amazon Bedrock Guardrails 等政策框架,搭配角色式存取控制(RBAC)實作。(2)決策驗證(Decision Verification):關鍵決策必須通過多步驗證,使用神經符號推理、約束滿足模型、邏輯驗證等技術,在執行前比對預定義的倫理與運營限制。樹搜尋與蒙地卡羅模擬可評估多個結果。(3)回滾能力(Rollback):動作必須可撤銷。透過事件溯源(event sourcing)、Apache Kafka、Temporal.io 等狀態管理框架記錄不可變的行動日誌,讓系統能在異常時還原。(4)即時監控(Real-time Monitoring):持續觀測代理人行為,使用 Facebook AI Anomaly Detection、Amazon CloudWatch 等機器學習異常偵測;XAI 技術提供可讀的決策解釋。(5)強化學習回饋迴圈(RLHF Feedback Loops):透過人在迴圈反覆校正,讓代理人在保持安全的前提下改進;高風險情境採用混合 AI-人工流程,需要人類判斷的就交給人類。(6)效能指標(Performance Metrics):不只看輸出品質,還評估決策一致性、倫理對齊、風險評估、適應性。IBM AI Fairness 360、Google Explainable AI 等工具提供透明度、穩健性、公平性的綜合評估。",
      explanation_en: "The book lists six core safety mechanisms that turn abstract 'safety' into implementable engineering. (1) Action Boundaries: strictly define what the agent may do. E.g., finance: no single trade > $X; healthcare: no dosage modifications. Implement via policy frameworks like OpenAI Function Calling, Amazon Bedrock Guardrails, paired with role-based access control (RBAC). (2) Decision Verification: critical decisions must pass multi-step validation using neural-symbolic reasoning, constraint satisfaction, logical verification, comparing against predefined ethical/operational constraints before execution. Tree search and Monte Carlo simulations can evaluate outcomes. (3) Rollback: actions must be reversible. Use event sourcing, Apache Kafka, Temporal.io to log immutable action history for state recovery on anomalies. (4) Real-time Monitoring: continuously observe behavior using ML-based anomaly detection (Facebook AI Anomaly Detection, Amazon CloudWatch); XAI explains why a decision was made. (5) RLHF Feedback Loops: human-in-the-loop refinement keeps the agent improving safely; high-stakes scenarios use hybrid AI-human workflows, handing off to humans when needed. (6) Performance Metrics: beyond output quality, evaluate decision consistency, ethical alignment, risk assessment, adaptability. Tools like IBM AI Fairness 360 and Google Explainable AI provide transparency, robustness, fairness assessments.",
      analogy_zh: "六大安全機制就像汽車的安全系統 — 行動邊界是車道線(限制可行範圍)、決策驗證是煞車輔助(關鍵動作前的二次檢查)、回滾是倒車檔(可以撤回的動作)、即時監控是儀表板與感測器(偵測異常)、RLHF 是駕駛訓練(人類教導改進)、效能指標是定期保養(全方位健檢)。一輛沒有這些系統的車能跑,但能跑很久很安全嗎?代理人系統也是如此。",
      analogy_en: "The six safety mechanisms are like a car's safety stack — action boundaries are lane markings (limits of movement), decision verification is brake assist (double-check before critical actions), rollback is reverse gear (a way back), real-time monitoring is the dashboard and sensors (detect anomalies), RLHF is driver training (humans teach improvement), performance metrics are scheduled maintenance (holistic check-up). A car without these can run, but for how long and how safely? Same with agentic systems.",
      worked_example_zh: "考慮一個企業差旅管理代理人 — 它不只推薦行程,還會主動訂機票、改時間表、處理費用。書中描繪的六大機制具體落地如下:(1)行動邊界 — 變更預訂的財務上限(超過 $1000 須核准)、高風險目的地禁訂、自主時程調整僅限 24 小時內;(2)決策驗證 — 高額預訂前自動交叉驗證公司差旅政策、超過閾值的交易需人工核准;(3)回滾 — 配合航空公司退票政策計算「可回滾窗口」,在窗口內可全額撤銷;(4)即時監控 — 偵測異常模式(短時間多次變更、與該員工歷史模式不符的目的地);(5)RLHF — 員工對代理人決策的滿意度回饋進入訓練迴圈;(6)效能指標 — 不只看「成功訂位數」,還評估「成本效益+員工偏好+公司政策遵循」三維度。這個例子展示安全不是單一機制,而是多層次的設計。",
      worked_example_en: "Consider an enterprise travel-management agent — it doesn't just recommend itineraries but actively books flights, adjusts schedules, and handles expenses. The book's six mechanisms land concretely as: (1) Action boundaries — financial caps on booking changes (> $1000 needs approval), banned high-risk destinations, autonomous schedule changes limited to within 24 hours; (2) Decision verification — high-value bookings auto cross-check against company travel policy; transactions above threshold need human approval; (3) Rollback — compute 'reversal window' based on airline cancellation policies; full reversal possible inside the window; (4) Real-time monitoring — detect anomalous patterns (many changes in short time, destinations unlike the employee's history); (5) RLHF — employee satisfaction feedback enters the training loop; (6) Performance metrics — beyond 'successful bookings', evaluate three dimensions: cost-effectiveness + employee preference + policy adherence. This example shows safety isn't a single mechanism but layered design.",
      diagram_description: "A 'Safety Stack' diagram with six horizontal layers (top to bottom): Layer 1 Performance Metrics (icon: dashboard); Layer 2 RLHF Feedback Loops (icon: human-AI loop); Layer 3 Real-time Monitoring (icon: radar); Layer 4 Rollback Capability (icon: undo arrow); Layer 5 Decision Verification (icon: checklist); Layer 6 Action Boundaries (icon: fence). At the bottom is 'LLM Agent Core'. On the right side, arrows pointing inward labeled 'Risks' (adversarial, hallucination, bias, privacy, IP) to show each layer filters/mitigates risks."
    },
    {
      id: "9.4",
      heading_zh: "倫理框架四原則與隱私技術",
      heading_en: "Four Ethical Framework Principles and Privacy Tech",
      explanation_zh: "書中提出倫理框架的四個核心原則,並對應到隱私安全的具體技術。(1)以人為本設計(Human-centric Design):系統應以人類福祉為核心,設計為直觀、可及、包容的解決方案,符合公平、尊嚴、自主等價值觀。例如旅遊代理人需考量不同文化敏感性與無障礙需求。(2)可問責與責任(Accountability and Responsibility):必須建立明確的責任鏈、決策文件化、倫理影響的審查機制。具體做法:成立跨領域審查委員會(倫理學者、法律專家、社群代表)。(3)隱私與資料保護(Privacy and Data Protection):採用「隱私設計」(privacy by design)原則,具體技術包括:資料最小化(只收必要資訊)、匿名化(k-匿名、假名化)、隱私保護機器學習(PPML)如聯邦學習、同態加密、安全多方計算(SMPC)。法規面需遵循 GDPR、CCPA、HIPAA。RBAC 確保只有授權人員存取敏感資料,稽核日誌記錄所有決策。(4)多元利害關係人參與(Diverse Stakeholder Involvement):倫理開發必須包含倫理學者、技術人員、政策制定者、受影響社群代表 — 多元對話能找出潛在盲點與意外後果。例如旅遊代理人開發應諮詢不同文化背景、身心障礙倡議者、環保組織,以辨識偏見、無障礙障礙、永續性議題。最後談隱私安全的具體實踐:資料治理框架、存取控制、密鑰角色管理、安全編碼、滲透測試、定期審計、事件回應計畫,以及對抗訓練、異常偵測等技術手段。",
      explanation_en: "The book proposes four core ethical principles paired with concrete privacy/security techniques. (1) Human-centric Design: build for human well-being — intuitive, accessible, inclusive solutions aligned with fairness, dignity, autonomy. E.g., travel agents account for cultural sensitivity and accessibility needs. (2) Accountability and Responsibility: establish clear responsibility chains, decision documentation, ethical-impact review. Concretely: form cross-disciplinary review boards (ethicists, lawyers, community reps). (3) Privacy and Data Protection: adopt privacy-by-design. Techniques: data minimization (collect only essentials), anonymization (k-anonymity, pseudonymization), privacy-preserving ML (PPML) including federated learning, homomorphic encryption, secure multi-party computation (SMPC). Regulations: GDPR, CCPA, HIPAA. RBAC limits sensitive-data access; audit logs record all decisions. (4) Diverse Stakeholder Involvement: ethical development must include ethicists, technologists, policymakers, affected-community reps — diverse dialogue surfaces blind spots and unintended consequences. E.g., travel-agent development should consult diverse cultural backgrounds, disability advocates, environmental orgs to identify bias, accessibility barriers, sustainability issues. Practical privacy security: data governance, access control, key/role management, secure coding, penetration testing, regular audits, incident response plans, plus technical hardening like adversarial training and anomaly detection.",
      analogy_zh: "倫理框架就像建築物的結構安全規範 — 不是裝飾,而是建築可不可以蓋的根本。隱私技術像建材選擇:差分隱私是「在輸出加噪音」(像加裝隔音牆)、聯邦學習是「不集中資料」(像分布式儲存)、SMPC 是「不見明文協作」(像在加密通道下對話)。法規(GDPR、HIPAA)則是建築法規 — 不符合就不能營業。多元利害關係人就像建築規劃時必須諮詢消防、結構、無障礙專家 — 一個只由技術人員決定的建築可能很美但不適合人住。",
      analogy_en: "An ethics framework is like building safety codes — not decoration, but the foundation of whether you can build at all. Privacy tech is like material choices: differential privacy is 'add noise to outputs' (like soundproofing), federated learning is 'don't centralize data' (distributed storage), SMPC is 'collaborate without seeing plaintext' (encrypted channel conversations). Regulations (GDPR, HIPAA) are building codes — non-compliance means you can't operate. Diverse stakeholders are like consulting fire, structural, and accessibility experts during planning — a building designed by techies alone may be beautiful but unfit to live in.",
      worked_example_zh: "一家銀行部署 AI 客服代理人。團隊依四原則展開:(1)以人為本 — 介面設計兼顧視障客戶(全程語音可達)、提供多種語言、避免使用金融術語讓老年客戶看得懂;(2)可問責 — 每次代理人決策(例如核准/拒絕貸款建議)都產生稽核紀錄,責任歸屬到「演算法版本+資料快照+審核工程師」;(3)隱私 — 採聯邦學習,客戶交易資料不離開本行;聊天紀錄 30 天後自動匿名化;敏感欄位以同態加密處理;通過 GDPR 與 PCI DSS 雙稽核;(4)多元利害關係人 — 諮詢小組包含 2 位金融倫理學者、3 位身心障礙代表、2 位多語言使用者、1 位金融科技律師,每季審查代理人決策樣本。一年後,客戶滿意度從 3.6/5 升至 4.5/5,客訴下降 41%,且該銀行成為首批通過歐盟 AI 法案高風險認證的金融機構之一。",
      worked_example_en: "A bank deploys an AI customer-service agent. The team applies the four principles: (1) Human-centric — UI is accessible to visually impaired customers (fully voice-navigable), supports multiple languages, avoids jargon so older customers understand; (2) Accountability — every agent decision (e.g., approve/reject loan recommendation) generates an audit record traceable to 'algorithm version + data snapshot + reviewing engineer'; (3) Privacy — federated learning keeps customer transaction data in the bank; chat logs auto-anonymized after 30 days; sensitive fields use homomorphic encryption; passes both GDPR and PCI DSS audits; (4) Diverse stakeholders — advisory panel includes 2 finance ethicists, 3 disability reps, 2 multilingual users, 1 fintech lawyer; quarterly review of agent decision samples. After one year, customer satisfaction rises from 3.6/5 to 4.5/5, complaints drop 41%, and the bank becomes one of the first to pass EU AI Act high-risk certification.",
      diagram_description: "Four-principle compass diagram with center labeled 'Ethical AI Framework'. Four directions: North 'Human-centric Design' (icon: person at center surrounded by accessibility/fairness/dignity icons); East 'Accountability' (icon: scales of justice + audit log); South 'Privacy Protection' (icon: lock + GDPR/HIPAA badges + differential privacy/SMPC/federated learning sub-icons); West 'Diverse Stakeholders' (icon: round table with diverse figures). Outer ring labeled 'Continuous Ethics Audit'."
    }
  ],
  code_or_procedure_zh: "代理人系統安全部署 SOP(可作為 Go-Live 檢核表):\n\n【設計階段】\n□ 完成風險評估文件,涵蓋對抗攻擊、偏見、幻覺、隱私、IP 五大類\n□ 對應每類風險定義具體緩解措施與責任人\n□ 設計「漸進式自主」路徑:從受限模式逐步擴張權限\n\n【行動邊界配置】\n□ 列出代理人允許的所有動作類型(白名單)與禁止動作(黑名單)\n□ 對每個動作設定金額/影響範圍上限\n□ 標註哪些動作需要人類核准、哪些可自動執行\n□ 使用 RBAC 將動作權限與用戶角色綁定\n\n【決策驗證】\n□ 識別所有「關鍵決策」(會造成不可逆後果的)\n□ 設定多步驗證流程:來源檢查 → 政策比對 → 倫理約束 → 人類複核\n□ 紀錄每個決策的理由鏈以供事後稽核\n\n【回滾機制】\n□ 對每類動作評估可否回滾與回滾時限\n□ 不可回滾動作必須升級為「人類核准必要」\n□ 部署事件溯源系統(Kafka 或同類)記錄不可變動作日誌\n\n【即時監控】\n□ 部署異常偵測(行為模式漂移、異常頻率、不尋常目標)\n□ 設定警報門檻與升級路徑\n□ 提供 XAI 介面讓監控人員理解每個決策的依據\n\n【RLHF 與效能指標】\n□ 建立使用者回饋通道(對代理人決策評分)\n□ 定期重新訓練(月或季)\n□ 監測四維指標:準確率、決策一致性、倫理對齊、子群公平性\n\n【倫理與隱私治理】\n□ 公布隱私政策、資料使用範圍、保存期限\n□ 實作差分隱私/聯邦學習/SMPC(視場景)\n□ 通過適用法規稽核(GDPR/CCPA/HIPAA/PCI DSS)\n□ 成立多元利害關係人諮詢委員會,每季審查\n□ 每年至少一次紅隊測試演練",
  code_or_procedure_en: "Agentic System Safety Deployment SOP (Go-Live checklist):\n\n[Design Stage]\n[ ] Complete risk-assessment document covering adversarial, bias, hallucination, privacy, IP\n[ ] Map each risk to concrete mitigations with accountable owner\n[ ] Design 'progressive autonomy' path: from restricted mode, gradually expand permissions\n\n[Action Boundaries Configuration]\n[ ] List all permitted action types (whitelist) and forbidden actions (blacklist)\n[ ] Set financial/impact caps per action\n[ ] Mark which actions need human approval vs auto-executable\n[ ] Use RBAC to bind action permissions to user roles\n\n[Decision Verification]\n[ ] Identify all 'critical decisions' (those with irreversible consequences)\n[ ] Define multi-step validation: source check, policy match, ethical constraints, human review\n[ ] Record each decision's reasoning chain for audit\n\n[Rollback Mechanism]\n[ ] For each action type, assess reversibility and reversal window\n[ ] Irreversible actions must escalate to 'human approval required'\n[ ] Deploy event sourcing (Kafka or equivalent) for immutable action log\n\n[Real-time Monitoring]\n[ ] Deploy anomaly detection (behavioral drift, unusual frequency, atypical targets)\n[ ] Set alert thresholds and escalation paths\n[ ] Provide XAI interface so monitors understand each decision's basis\n\n[RLHF and Performance Metrics]\n[ ] Establish user-feedback channel (rate agent decisions)\n[ ] Periodic retraining (monthly or quarterly)\n[ ] Monitor four-dimensional metrics: accuracy, decision consistency, ethical alignment, subgroup fairness\n\n[Ethics and Privacy Governance]\n[ ] Publish privacy policy, data-use scope, retention period\n[ ] Implement differential privacy / federated learning / SMPC (as applicable)\n[ ] Pass applicable regulatory audits (GDPR / CCPA / HIPAA / PCI DSS)\n[ ] Establish multi-stakeholder advisory board; quarterly review\n[ ] At least one red-team exercise per year",
  key_takeaways_zh: [
    "代理式系統的風險不是生成式 AI 的延伸,而是質的躍升 — 因為動作會直接落在真實世界",
    "對抗攻擊、偏見、幻覺、隱私、IP 五大風險,在代理人場景中都被「規模化、自動化、難察覺化」",
    "六大核心安全機制(行動邊界、決策驗證、回滾、即時監控、RLHF、效能指標)必須層層疊加,單一機制無法保護",
    "「漸進式自主」是務實的部署策略:先嚴格限制、證明可靠後再逐步放寬",
    "倫理不能只靠技術,需要四原則(以人為本、可問責、隱私、多元參與)與多元利害關係人治理結構"
  ],
  key_takeaways_en: [
    "Agentic-system risks aren't extensions of generative AI but a qualitative leap — because actions land in the real world",
    "The five risks (adversarial, bias, hallucination, privacy, IP) become scaled, automated, and harder to detect in agentic settings",
    "The six core safety mechanisms must layer together; no single one suffices",
    "'Progressive autonomy' is the pragmatic deployment strategy: restrict tightly first, then loosen as reliability is proven",
    "Ethics can't rely on tech alone — it needs four principles (human-centric, accountable, privacy, diverse stakeholders) plus governance structure"
  ],
  common_pitfalls_zh: [
    "認為「準確率提高就安全」— 即使 99% 準確,當代理人動作不可回滾、影響規模大,1% 錯誤的傷害仍可能毀滅性",
    "把行動邊界設成過寬以追求自主能力 — 結果出事時無法限縮影響範圍",
    "忽略「決策鏈隱私」— 個別決策合規,但累積起來仍會洩漏敏感資訊",
    "把監控當成「事後查證」工具,而非「事中阻擋」— 異常一旦發生就晚了",
    "把倫理委員會當成橡皮圖章 — 沒有否決權的委員會無法影響產品方向"
  ],
  common_pitfalls_en: [
    "Believing 'higher accuracy = safer' — even at 99% accuracy, if actions are irreversible and large-scale, the 1% can be catastrophic",
    "Setting action boundaries too wide to maximize autonomy — when something goes wrong, you can't contain the blast radius",
    "Ignoring 'decision-chain privacy' — individual decisions look compliant, but the chain leaks sensitive information",
    "Treating monitoring as a post-hoc audit tool rather than an in-flight blocker — once anomaly is observed, it's too late",
    "Treating the ethics board as a rubber stamp — without veto power, it can't shape product direction"
  ],
  quiz: [
    {
      question_zh: "下列哪個情境最能說明「代理式系統的幻覺比生成式 AI 的幻覺更危險」?",
      question_en: "Which scenario best illustrates 'agentic-system hallucinations are more dangerous than generative-AI hallucinations'?",
      options_zh: [
        "一個聊天機器人對歷史問題給出錯誤年份",
        "一個自主交易代理人根據幻覺出來的市場趨勢執行了 100 萬美元的買單",
        "一個生圖 AI 把貓畫成有六條腿",
        "一個翻譯 AI 把中文翻成不通順的英文"
      ],
      options_en: [
        "A chatbot gives wrong year for a historical question",
        "An autonomous trading agent executes a $1M buy order based on hallucinated market trends",
        "An image generator draws a cat with six legs",
        "A translation AI produces awkward English from Chinese"
      ],
      answer_index: 1,
      explanation_zh: "選項 B 直接展示了代理人幻覺的核心危險 — 不只是錯誤輸出,而是基於錯誤輸出實際執行了不可逆的真實世界動作。其他選項都是純生成式 AI 的幻覺,後果僅限於文字或圖像本身,使用者可以察覺並忽略。",
      explanation_en: "Option B directly shows the core danger of agentic hallucination — not just wrong output but executing an irreversible real-world action based on it. The others are pure generative-AI hallucinations whose damage stays in text or image, which users can spot and ignore."
    },
    {
      question_zh: "在差旅管理代理人案例中,「行動邊界」最佳的設計是?",
      question_en: "In the travel-management agent case, the best design for 'action boundaries' is:",
      options_zh: [
        "允許代理人執行任何訂位動作以提高效率",
        "完全禁止代理人自動訂位,所有動作都需人工核准",
        "設定金額上限、高風險目的地黑名單,並區分需人工核准的閾值",
        "讓代理人自己決定要不要問人類"
      ],
      options_en: [
        "Allow the agent to take any booking action for efficiency",
        "Forbid all automated bookings; require manual approval for everything",
        "Set financial caps, blacklist high-risk destinations, distinguish thresholds requiring human approval",
        "Let the agent decide whether to consult a human"
      ],
      answer_index: 2,
      explanation_zh: "選項 C 才是書中倡議的層次化設計:金額上限保護財務、黑名單保護安全、閾值區分保留自主效率與人類監督的平衡。A 與 D 太寬鬆會出事;B 太嚴會失去自主價值。書中強調「漸進式自主」與「情境式安全邊界」的平衡。",
      explanation_en: "Option C is the layered design the book advocates: financial caps protect finances, blacklists protect safety, thresholds balance autonomy with oversight. A and D are too loose; B is too strict and loses the value of autonomy. The book stresses balancing 'progressive autonomy' with 'contextual safety bounds.'"
    },
    {
      question_zh: "下列哪個工具最適合處理「代理人因記憶訓練資料而可能洩漏個資」的問題?",
      question_en: "Which tool best addresses 'agent leaking personal info because it memorized training data'?",
      options_zh: [
        "Apache Kafka(事件溯源)",
        "差分隱私(Differential Privacy)",
        "對抗訓練(Adversarial Training)",
        "Monte Carlo Tree Search"
      ],
      options_en: [
        "Apache Kafka (event sourcing)",
        "Differential Privacy",
        "Adversarial Training",
        "Monte Carlo Tree Search"
      ],
      answer_index: 1,
      explanation_zh: "差分隱私的核心機制是在輸出加入精心校準的噪音,使得從輸出無法逆向推導出單一訓練樣本的存在 — 正是針對「模型記住個資」的問題。Kafka 是回滾用、對抗訓練是防偏見輸入、MCTS 是決策驗證,都不直接處理記憶洩漏。",
      explanation_en: "Differential privacy injects calibrated noise into outputs so individual training samples can't be reverse-inferred — exactly addressing 'model memorizing personal data.' Kafka is for rollback, adversarial training is for biased input defense, MCTS is for decision verification — none directly tackles memorization leakage."
    },
    {
      question_zh: "「漸進式自主」(Progressive Autonomy)的核心思想是?",
      question_en: "The core idea of 'Progressive Autonomy' is:",
      options_zh: [
        "讓代理人從上線第一天就擁有完整權限,然後在出事時收回",
        "用全自動執行所有任務,但保留隨時暫停按鈕",
        "從嚴格受限的動作開始,根據展現的可靠性逐步擴展權限",
        "讓使用者投票決定代理人應該有什麼權限"
      ],
      options_en: [
        "Give the agent full permissions from day one and revoke on incidents",
        "Run everything fully automatically but keep a pause button",
        "Start with heavily restricted actions and gradually expand permissions based on demonstrated reliability",
        "Let users vote on what permissions the agent should have"
      ],
      answer_index: 2,
      explanation_zh: "書中明確定義漸進式自主:Starting with heavily restricted action capabilities and gradually expanding them based on demonstrated reliability。這是把「信任建立」實作到工程流程的方法 — 先讓系統證明自己,再給更多權力。",
      explanation_en: "The book defines progressive autonomy as: starting with heavily restricted action capabilities and gradually expanding them based on demonstrated reliability. This bakes 'trust-building' into the engineering process — let the system prove itself first, then expand privileges."
    },
    {
      question_zh: "關於倫理框架中的「多元利害關係人參與」原則,下列哪個說法最準確?",
      question_en: "Regarding the 'diverse stakeholder involvement' principle, which statement is most accurate?",
      options_zh: [
        "只要工程團隊內部討論過倫理問題就算落實",
        "多元利害關係人主要是為了符合公關需求",
        "需要包含倫理學者、法律專家、受影響社群代表等多元視角以辨識潛在盲點",
        "只在出現爭議時才需要諮詢外部"
      ],
      options_en: [
        "If the engineering team has internally discussed ethics, the principle is met",
        "Diverse stakeholders are mainly for PR purposes",
        "Need to include ethicists, lawyers, affected-community reps and other perspectives to surface blind spots",
        "Only consult externally when controversy arises"
      ],
      answer_index: 2,
      explanation_zh: "書中強調多元利害關係人是「倫理開發的必要條件」,不是 PR 也不是危機應對 — 因為單一專業視角(只有工程師)會有盲點,需要倫理學者、法律專家、社群代表等不同視角共同辨識潛在問題。這也是書中提到的「跨領域諮詢委員會」結構。",
      explanation_en: "The book stresses diverse stakeholders are 'a necessary condition of ethical development' — not PR or crisis response — because a single perspective (engineers only) has blind spots; ethicists, lawyers, community reps together surface latent issues. This is the 'cross-disciplinary advisory board' structure the book describes."
    }
  ]
};

const chapter10 = {
  id: 10,
  title_zh: "常見應用場景與案例",
  title_en: "Common Use Cases and Applications",
  subtitle_zh: "本章你會學到代理式系統在四大領域(創意藝術、對話、機器人、決策支援)的真實實作架構與差異化價值。",
  subtitle_en: "How agentic systems work across four domains (creative, conversational, robotics, decision support) with real architectures and their differentiating value.",
  overview_zh: "前面九章我們建立了完整的方法論 — 怎麼設計、怎麼協作、怎麼確保信任與安全。第十章把鏡頭拉到現實世界:這些系統真的在哪裡跑?產生了什麼價值?本章四大領域的對比非常啟發 — 每個領域代理人解決的問題不同,所以代理角色設計、協作模式、外部系統介接也大相徑庭。創意領域(Adobe Firefly 多代理人協作、Universal Music Group 音樂製作、電影前期視覺化)展示了代理人如何維持「藝術一致性」;對話領域(Salesforce Agentforce、GitHub Copilot Chat、企業知識管理)展示如何在多輪互動中保留脈絡;機器人領域(Boston Dynamics Atlas、UC Berkeley、MIT RoboBrain、彈性製造)展示如何把語言指令轉化為物理動作;決策支援領域(JPMorgan LOXM、Two Sigma Venn、UMich HealthPal、Stanford DeepPill、Siemens MindSphere、全球供應鏈)展示如何整合多元資料流做策略決策。本章不只列產品,更深入剖析每個案例的多代理人架構、環境整合、為什麼比傳統方法好,讓讀者能對應自己的應用情境。",
  overview_en: "Across the prior nine chapters we built a complete methodology — how to design, collaborate, ensure trust and safety. Chapter 10 zooms to the real world: where do these systems actually run? What value do they create? The contrast across four domains is illuminating — each domain solves different problems, so agent roles, collaboration patterns, and external-system integrations differ greatly. Creative (Adobe Firefly multi-agent collaboration, Universal Music Group music production, film pre-visualization) shows how agents maintain 'artistic consistency.' Conversational (Salesforce Agentforce, GitHub Copilot Chat, enterprise knowledge management) shows how multi-turn context is preserved. Robotics (Boston Dynamics Atlas, UC Berkeley, MIT RoboBrain, flexible manufacturing) shows how language commands turn into physical actions. Decision Support (JPMorgan LOXM, Two Sigma Venn, UMich HealthPal, Stanford DeepPill, Siemens MindSphere, global supply chain) shows how multi-stream data integrates for strategic decisions. This chapter doesn't just list products; it dissects each case's multi-agent architecture, environmental integration, and 'why it beats traditional approaches,' so readers can map to their own contexts.",
  learning_objectives_zh: [
    "對比代理式系統與傳統 AI 工具在四大應用領域(創意、對話、機器人、決策)的關鍵差異",
    "分析多代理人架構如何在創意工作流中維持藝術一致性與技術可行性的平衡",
    "理解對話代理人如何透過脈絡保留、任務執行、適應性互動超越傳統聊天機器人",
    "說明機器人代理人如何結合語言理解、環境感知、即時適應實現靈活製造",
    "評估決策支援代理人如何透過多元代理人協作(策略、營運、風險、永續)優化全球供應鏈"
  ],
  learning_objectives_en: [
    "Contrast agentic systems against traditional AI tools across the four domains (creative, conversational, robotics, decision support)",
    "Analyze how multi-agent architectures maintain balance between artistic consistency and technical feasibility in creative workflows",
    "Understand how conversational agents surpass traditional chatbots via context retention, task execution, and adaptive interaction",
    "Explain how robotic agents combine language understanding, environmental perception, and real-time adaptation for flexible manufacturing",
    "Evaluate how decision-support agents collaborate (strategy, operations, risk, sustainability) to optimize global supply chains"
  ],
  sections: [
    {
      id: "10.1",
      heading_zh: "創意與藝術應用 — Adobe Firefly、UMG、電影前期視覺化",
      heading_en: "Creative and Artistic Applications — Adobe Firefly, UMG, Film Pre-visualization",
      explanation_zh: "創意領域的代理式系統與一般生成式工具最大的不同,在於「持續性脈絡」與「藝術意圖的維持」。Adobe Firefly 不只是「給提示出圖」,而是多個專業代理人協作 — 一個維護品牌身份與風格指南、一個確保不同媒介上的資產一致性、一個處理技術規格與格式需求。當你連續做 50 張行銷素材時,系統會記得你的品牌色、字型、語氣,而不是每次都重新猜。Universal Music Group 的 AI 音樂製作系統用類似邏輯:旋律代理人理解主題動機、和聲代理人維持調性一致、編曲代理人處理樂器配置 — 多個代理人協作中,作曲家原始的創意意圖不會被稀釋。書中最深入剖析的是電影前期視覺化案例:問題出在傳統工具讓導演的創意視野與技術限制之間需要大量人力翻譯。多代理人系統的設計是 — 「導演代理人」處理場景的自然語言描述、維持整體創意視野;「技術監督代理人」評估技術可行性與預算限制、提出替代方案;「視覺化代理人」生成分鏡與 3D 預覽、根據其他代理人回饋調整。這三者透過共享的 LLM 脈絡理解、持續回饋迴圈、即時調整能力協作。外部系統包含資產資料庫(3D 模型、紋理)、製作管理(預算排程)、Render Farm API、攝影器材資料庫、參考影像庫、版本控制、協作平台。",
      explanation_en: "The biggest difference between creative-domain agentic systems and generic generative tools is 'persistent context' and 'preservation of artistic intent.' Adobe Firefly isn't just 'prompt-to-image' — multiple specialized agents collaborate: one maintains brand identity and style guides, one ensures asset consistency across media, one handles technical specs and format requirements. Doing 50 marketing assets in sequence, the system remembers your brand colors, fonts, tone instead of re-guessing each time. Universal Music Group's AI music production follows similar logic: melody agents grasp themes and motifs, harmony agents maintain tonal consistency, orchestration agents handle instrumentation — across many collaborating agents, the composer's original intent isn't diluted. The book's deepest case is film pre-visualization: traditional tools require heavy human translation between the director's creative vision and technical feasibility. The multi-agent design: 'Director Agent' processes natural-language scene descriptions and maintains overall creative vision; 'Technical Supervisor Agent' evaluates feasibility and budget, proposes alternatives; 'Visualization Agent' generates storyboards and 3D previews, adapts to feedback. The three collaborate via shared LLM context understanding, continuous feedback loops, and real-time adaptation. External systems include asset DB (3D models, textures), production management (budgets, schedules), render farm API, equipment DB, reference library, version control, collaboration platform.",
      analogy_zh: "傳統 AI 創意工具像是一個聽完指令就走人的速寫師 — 每次你要再改都得重新解釋全部。代理式創意系統像是長期合作的藝術總監團隊 — 他們記得你的風格、知道你的偏好、會在風格與預算之間幫你斡旋,還會主動提醒「這個鏡頭技術上很難,但我們可以這樣調整來達到你要的感覺」。差別不是「生成快慢」,而是「合作深度」。",
      analogy_en: "Traditional AI creative tools are like a sketch artist who leaves after one job — every revision requires re-explaining everything. Agentic creative systems are like a long-term art-director team — they remember your style, know your preferences, negotiate between vision and budget, and proactively flag 'this shot is technically hard, but we can adjust like this to keep the feel.' The difference isn't speed but depth of collaboration.",
      worked_example_zh: "假設一個獨立電影團隊要做 20 個鏡頭的前期視覺化。傳統流程:導演畫草圖→交給分鏡師(2 週)→技術組評估可行性(1 週,常常告訴你某些鏡頭做不到)→重新修改(2 週)→3D 預覽渲染(1 週),共約 6 週。導入多代理人系統後:導演用自然語言描述場景(「我要一個從高空俯衝到主角眼睛的單鏡頭」),導演代理人解析意圖並設定創意參數;技術監督代理人即時評估(「這個鏡頭需要 12 小時 render time,我建議拆成 2 段以節省 40% 成本」);視覺化代理人在 30 分鐘內產生第一版預覽;三者根據導演迴饋持續對話調整。完成同樣 20 個鏡頭從 6 週縮短到 8 天,且預算節省 35%(因技術監督代理人提前發現可優化處)。最重要的是,導演不再覺得「妥協」是被迫的,而是基於資訊的選擇。",
      worked_example_en: "Suppose an indie film team does pre-visualization for 20 shots. Traditional flow: director sketches → storyboard artist (2 weeks) → tech team feasibility (1 week, often tells you some shots aren't doable) → revisions (2 weeks) → 3D preview render (1 week), about 6 weeks total. After deploying the multi-agent system: director describes scenes in natural language ('I want a single shot diving from sky into the protagonist's eyes'), Director Agent parses intent and sets creative parameters; Technical Supervisor evaluates in real time ('this shot needs 12 hours of render; I suggest splitting into 2 segments to save 40% cost'); Visualization Agent produces first preview in 30 minutes; the three converse based on director feedback. Same 20 shots completed in 8 days vs 6 weeks, with 35% budget savings (Tech Supervisor caught optimizations early). Crucially, the director no longer feels 'compromise' is forced but informed choice.",
      diagram_description: "Triangle diagram for film pre-visualization. Three vertices: Director Agent (top, icon: megaphone + storyboard), Technical Supervisor Agent (bottom-left, icon: gear + dollar sign), Visualization Agent (bottom-right, icon: 3D cube + canvas). Bidirectional arrows between all three labeled 'shared LLM context' and 'continuous feedback'. Surrounding the triangle: external systems icons (asset DB, render farm, production management, version control). Outside the system: human director with arrow into Director Agent."
    },
    {
      id: "10.2",
      heading_zh: "自然語言處理與對話代理人 — 企業知識管理",
      heading_en: "NLP and Conversational Agents — Enterprise Knowledge Management",
      explanation_zh: "對話領域是 LLM 最自然的舞台,但現代代理人系統遠超傳統聊天機器人。書中總結四個關鍵能力:(1)脈絡保留 — 跨多個主題、跨多個 session 維持對話連貫,例如 Anthropic Claude 或 OpenAI ChatGPT 可以在深度技術討論中保持一致性,並根據使用者專業程度調整回答;(2)任務執行 — 不只回答問題,還能把自然語言指令轉成可執行步驟,完成排程、資料查詢、系統設定等任務;(3)適應性互動 — 動態調整語氣、複雜度、深度以符合使用者偏好與場景;(4)多模態理解 — 不只文字,還能處理圖像、程式碼、結構化資料的混合查詢。實際應用案例包含 Salesforce Agentforce(原 Einstein 虛擬助理)幫客服在多次客戶互動中維持脈絡並即時存取資料庫;GitHub Copilot Chat 在技術討論中執行開發任務。書中深入剖析企業知識管理案例 — 問題出在大型組織知識分散於各部門,傳統搜尋與文件系統無法捕捉脈絡與不同資訊之間的連結。三代理人架構:「查詢理解代理人」處理自然語言問題、辨識隱含脈絡與需求、分解複雜查詢為子任務;「知識導航代理人」對應不同知識來源的關係、跨多份文件維持脈絡、追蹤資訊出處;「回應合成代理人」結合多來源資訊、根據使用者角色調整詳細程度、維持多次互動的一致性。外部系統包含 SharePoint、Confluence、Slack、Teams、Jira、Asana、GitHub、HR 系統、CRM,以及外部 API(Bloomberg、學術資料庫、法規資料庫、雲端儲存、翻譯服務、網路監控)。",
      explanation_en: "Conversation is LLMs' most natural stage, but modern agents far exceed traditional chatbots. The book identifies four key capabilities: (1) Context retention — across multiple topics and sessions, e.g., Claude or ChatGPT stays consistent in deep technical discussion and adapts to user expertise; (2) Task execution — beyond answering, translate natural-language instructions into actionable steps (scheduling, data retrieval, system configuration); (3) Adaptive interaction — dynamically adjust tone, complexity, depth to user preferences and situations; (4) Multi-modal understanding — beyond text, handle mixed queries with images, code, structured data. Real applications include Salesforce Agentforce (formerly Einstein virtual assistant) helping reps maintain context across customer interactions while accessing DB in real time; GitHub Copilot Chat handles tech discussions while executing dev tasks. The book deeply dissects enterprise knowledge management — problem: large organizations have knowledge fragmented across departments; traditional search and docs fail to capture context and connections. Three-agent architecture: 'Query Understanding Agent' processes NL questions, identifies implicit context/requirements, breaks complex queries into subtasks; 'Knowledge Navigation Agent' maps relationships between sources, maintains cross-document context, tracks provenance; 'Response Synthesis Agent' combines multi-source info, adjusts detail to user role, maintains consistency across interactions. External systems: SharePoint, Confluence, Slack, Teams, Jira, Asana, GitHub, HR, CRM, plus external APIs (Bloomberg, academic DBs, regulatory DBs, cloud storage, translation, web monitoring).",
      analogy_zh: "傳統企業搜尋像翻字典 — 你輸入關鍵字,得到一堆獨立條目,要自己拼湊意義。對話式知識管理代理人像有一位資深員工坐在你旁邊 — 他知道公司每個專案的歷史、不同部門的術語差異、可以從你的問題判斷你的角色與深度需求,給你直接可用的答案,還會主動提醒「其實 A 部門上個月也遇過類似問題,他們的處理方式可以參考」。差別是「資訊」vs「智慧」。",
      analogy_en: "Traditional enterprise search is like flipping through a dictionary — type a keyword, get a heap of disconnected entries, assemble meaning yourself. Conversational knowledge management is like having a senior colleague beside you — they know every project's history, the jargon differences across departments, can tell your role and depth from your question, give a directly usable answer, and proactively flag 'Department A had a similar issue last month; their approach is worth a look.' The difference is 'information' vs 'intelligence.'",
      worked_example_zh: "一家全球顧問公司 5000 名員工面對痛點:新員工平均要 6 個月才能熟悉內部知識,每年因「找不到相關案例」損失估計 $1500 萬。導入三代理人企業知識管理系統後,新員工輸入「客戶在零售業 IPO 前要做的風險評估有哪些?」,查詢理解代理人解析出三個子問題(零售業特性、IPO 前風險清單、本公司過往案例);知識導航代理人從 Confluence、Salesforce CRM、過往專案資料夾、外部產業報告找到相關內容,並標註每筆資料的可信度與時效性;回應合成代理人根據該員工的「Junior Consultant」角色生成適中深度的回答,附上 3 個相關內部案例連結與 2 位內部專家聯絡方式。新員工上手時間從 6 個月降到 2.5 個月,專案重工率下降 38%,且員工滿意度從 6.2/10 升至 8.4/10。最重要的是,公司知識真正流動起來而非沉澱在文件夾。",
      worked_example_en: "A global consulting firm with 5000 employees faces a pain point: new hires take 6 months to master internal knowledge; the firm loses ~$15M/year on 'couldn't find related cases.' After deploying the three-agent KM system, a new hire types 'What risk assessments should we do before a retail-sector client's IPO?' The Query Understanding agent splits into three sub-questions (retail-sector specifics, pre-IPO risk list, the firm's past cases); the Knowledge Navigation agent pulls from Confluence, Salesforce CRM, past project folders, external industry reports, tagging each source's credibility and recency; the Response Synthesis agent generates an appropriately-deep answer for the 'Junior Consultant' role, with 3 related internal case links and 2 internal expert contacts. New-hire onboarding drops from 6 months to 2.5; project rework rate drops 38%; employee satisfaction rises from 6.2/10 to 8.4/10. Most importantly, knowledge actually flows instead of sedimenting in folders.",
      diagram_description: "Three-agent pipeline diagram. Top: user query bubble 'What risk assessments for retail-sector pre-IPO client?'. Pipeline: Query Understanding Agent (icon: question mark + decomposition tree) → Knowledge Navigation Agent (icon: graph with connected document nodes) → Response Synthesis Agent (icon: layered document with role badge). Surrounding box labeled 'External Systems' contains SharePoint, Confluence, Slack/Teams, Jira/Asana, GitHub, HR, CRM, Bloomberg API, academic DBs, regulatory DBs. Below: 'Access Control Layer' bar with RBAC, audit logs, compliance monitoring."
    },
    {
      id: "10.3",
      heading_zh: "機器人與自主系統 — 彈性製造案例",
      heading_en: "Robotics and Autonomous Systems — Flexible Manufacturing Case",
      explanation_zh: "把 LLM 接到機器人身上不是只讓機器會「說話」,而是讓物理動作有了「上下文理解」與「動態適應」能力。書中提到的真實案例:Boston Dynamics 的 Atlas 機器人展示如何把語言指令轉成複雜物理動作;UC Berkeley 的機器人系統展示生成式模型如何即時適應雜亂環境;MIT RoboBrain 系統展示代理人如何從龐大知識庫創意解決物理操作任務。現代機器人代理人有五大關鍵能力:自然語言指令理解、環境約束的脈絡推理、即時情況變化適應、從示範與回饋學習、視覺/語言/控制的多模態整合。書中深入剖析彈性製造案例 — 傳統製造單元面對產品變異與意外干擾時,每個新產品都需大量重新編程,設備故障或供應鏈中斷時需人工不斷介入。四代理人架構:「規劃與協調代理人」理解自然語言生產需求、發展與適應製造序列、協調不同機器系統、維持整體生產目標;「機器人控制代理人」把高階指令翻譯成動作原語(motion primitives)、管理即時感測器回饋、根據環境變化調整動作、確保人機互動安全;「品質與優化代理人」即時監測生產品質、建議流程改進、預測維護需求、優化資源利用;「異常處理代理人」偵測異常與干擾、產生回復策略、管理意外的人類介入、在異常中維持安全協定。外部系統包含機器手臂、視覺系統、PLC、物料搬運系統(AGV),以及 MES、ERP、QMS、Digital Twin、維護管理、供應鏈管理、客戶訂單、合規資料庫、知識庫。",
      explanation_en: "Connecting LLMs to robots doesn't just make machines 'talk' — it gives physical actions context understanding and dynamic adaptation. Real cases the book mentions: Boston Dynamics' Atlas demonstrates translating language commands into complex physical movements; UC Berkeley's systems show generative models adapting to cluttered environments in real time; MIT's RoboBrain shows agents creatively solving manipulation tasks from a vast knowledge base. Modern robotic agents have five key capabilities: natural-language understanding for physical tasks, contextual reasoning about environmental constraints, real-time adaptation, learning from demonstration and feedback, multi-modal integration of vision/language/control. The book deeply dissects flexible manufacturing — traditional cells struggle with product variation and disruptions; every new product requires reprogramming; equipment failures or supply-chain disruptions need constant human intervention. Four-agent architecture: 'Planning and Coordination Agent' understands NL production requirements, develops and adapts manufacturing sequences, coordinates different robotic systems, maintains production goals; 'Robot Control Agent' translates high-level instructions into motion primitives, manages real-time sensor feedback, adapts movements to environmental changes, ensures safe human-robot interaction; 'Quality and Optimization Agent' monitors quality in real time, suggests process improvements, predicts maintenance, optimizes resources; 'Exception Handling Agent' detects anomalies and disruptions, generates recovery strategies, manages unexpected human interventions, maintains safety protocols. External systems: robotic arms, vision systems, PLCs, material handling (AGVs), plus MES, ERP, QMS, Digital Twin, maintenance, supply chain, customer orders, compliance DB, knowledge base.",
      analogy_zh: "傳統機器人像火車 — 必須沿著預先鋪好的軌道走,稍有偏差就要停下;每次想去新地方都得重鋪軌道。代理式機器人像計程車司機 — 你只要告訴他目的地,他會看路況、躲坑洞、繞行擁塞,中途要改地點也沒問題。差別不是「動得多快」,而是「面對未知時的應變能力」。",
      analogy_en: "Traditional robots are like trains — must follow pre-laid tracks; any deviation requires a halt; new destinations require new tracks. Agentic robots are like taxi drivers — tell them the destination, they read traffic, dodge potholes, reroute around jams, accept mid-trip changes. The difference isn't 'how fast' but 'adaptability to the unknown.'",
      worked_example_zh: "一家電動車電池廠原本生產一款 21700 電池,要切換到生產 4680 電池(尺寸與化學配方都不同)。傳統流程:停線→工程師重新編程 PLC(約 3 週)→試產調校(2 週)→品管驗證(1 週),共 6 週,期間生產線完全停擺,損失估計每天 $50 萬。導入四代理人彈性製造系統後:廠長用自然語言下指令「下週開始生產 4680 電池,優先級高,品質標準維持 99.5% 良率」。規劃代理人解析需求並提取新規格,自動產生製造序列;機器人控制代理人從知識庫提取 4680 的動作原語(較大的夾持、不同的焊接角度),並啟動小規模試作;品質代理人即時監測前 50 顆樣本的關鍵指標,在第 8 顆時偵測到焊接溫度偏高 2%,自動調整;異常處理代理人在第 12 顆發現某機械手臂的伺服馬達異常,立即重派任務至備用手臂並開立維護單。整個切換在 4 天內完成,期間良品率達 98.7%(僅低於目標 0.8%),總損失約 $200 萬而非傳統的 $2100 萬。",
      worked_example_en: "An EV battery plant originally producing 21700 cells must switch to 4680 cells (different size and chemistry). Traditional flow: stop line → engineers reprogram PLCs (~3 weeks) → trial production tuning (2 weeks) → QA validation (1 week), 6 weeks total with the line fully down, losses ~$500K/day. After deploying the four-agent flexible-manufacturing system: the plant manager issues NL instruction 'Start producing 4680 cells next week, high priority, maintain 99.5% yield.' Planning Agent parses, extracts new specs, auto-generates manufacturing sequence; Robot Control Agent pulls 4680 motion primitives from KB (larger grip, different weld angles) and launches small-scale trials; Quality Agent monitors first 50 samples' key metrics in real time, detects 2% high weld temperature on sample 8, auto-adjusts; Exception Handling Agent on sample 12 finds servo anomaly on one arm, reroutes tasks to backup arm and opens a maintenance ticket. Full switchover in 4 days with 98.7% yield (only 0.8% below target). Total losses ~$2M vs the traditional ~$21M.",
      diagram_description: "Manufacturing cell diagram. Center: production line schematic with robot arms. Four agent boxes surrounding the line: top-left 'Planning and Coordination Agent' (icon: gantt chart), top-right 'Robot Control Agent' (icon: robot arm + motion vectors), bottom-right 'Quality and Optimization Agent' (icon: gauge + magnifier), bottom-left 'Exception Handling Agent' (icon: alarm bell + redirect arrow). All four agents share a central 'Shared Context + Real-time Sensor Data' hub. External systems shown as bottom band: MES, ERP, QMS, Digital Twin, supply chain, compliance DB."
    },
    {
      id: "10.4",
      heading_zh: "決策支援與優化 — 全球供應鏈案例",
      heading_en: "Decision Support and Optimization — Global Supply Chain Case",
      explanation_zh: "決策支援代理人不只是「更聰明的試算表」,而是能整合多元資料流、理解複雜商業脈絡、產生可執行洞察的策略夥伴。書中列出真實實作:金融業有 JPMorgan Chase 的 LOXM 系統分析市場資料、新聞、社群媒體辨識投資機會;Two Sigma 的 Venn 系統結合市場分析與強化學習設計投資策略。健康照護有 University of Michigan 的 HealthPal 透過分析醫療記錄與基因資料提供個人化治療建議;Stanford 的 DeepPill 系統根據病患檔案與病史優化藥物治療。工業應用有 Siemens 的 MindSphere 透過即時分析與調整優化製造流程;ExxonMobil 的 Energy Outlook 用預測建模做長期資源規劃。書中深入剖析全球供應鏈案例 — 現代供應鏈面對多元利害關係人、可變交期、頻繁中斷,傳統優化工具難以處理動態本質與多目標平衡。四代理人架構:「策略規劃代理人」分析市場趨勢與需求模式、發展長期採購策略、平衡成本/風險/永續、維持與商業目標對齊;「營運優化代理人」管理日常物流、優化路線與資源配置、處理即時排程調整、協調多家承運商與倉庫;「風險管理代理人」監測全球事件與干擾、評估對供應鏈的影響、產生應變計畫、提供早期預警;「永續優化代理人」追蹤環境影響指標、優化降低碳足跡、建議替代路線與來源、確保符合環境法規。外部系統涵蓋核心基礎設施(SAP、Oracle ERP、TMS、WMS)、外部資料來源(Bloomberg、Reuters、產業新聞、社群媒體、全球氣象、災害追蹤、供應商資料庫),整合層使用 API 管理、即時資料串流、事件處理引擎、區塊鏈追溯。",
      explanation_en: "Decision-support agents aren't 'smarter spreadsheets' but strategic partners that integrate multi-source data, understand complex business context, and produce actionable insights. Real implementations the book lists: Finance — JPMorgan Chase's LOXM analyzes market data, news, social media for investment opportunities; Two Sigma's Venn combines market analysis with RL for strategies. Healthcare — University of Michigan's HealthPal personalizes treatment by analyzing medical records and genetic data; Stanford's DeepPill optimizes drug therapies based on patient profiles. Industrial — Siemens MindSphere optimizes manufacturing via real-time analysis; ExxonMobil's Energy Outlook does predictive modeling for long-term resource planning. The book deeply dissects global supply chains — modern chains face many stakeholders, variable lead times, frequent disruption; traditional tools can't handle the dynamic nature and multi-objective tradeoffs. Four-agent architecture: 'Strategic Planning Agent' analyzes market trends and demand, develops long-term sourcing, balances cost/risk/sustainability, stays aligned with business goals; 'Operational Optimization Agent' manages day-to-day logistics, optimizes routing and resource allocation, handles real-time scheduling, coordinates carriers and warehouses; 'Risk Management Agent' monitors global events, assesses impact, generates contingency plans, provides early warnings; 'Sustainability Optimization Agent' tracks environmental metrics, optimizes for carbon-footprint reduction, suggests alternative routing/sourcing, ensures regulatory compliance. External systems span core infrastructure (SAP, Oracle ERP, TMS, WMS), external data (Bloomberg, Reuters, industry news, social media, weather, disaster tracking, supplier DBs), and an integration layer using API management, real-time streaming, event processing, blockchain for traceability.",
      analogy_zh: "傳統供應鏈系統像獨奏鋼琴 — 一個樂器演奏一首曲子,雖然精彩但表現有限。代理式決策支援像四重奏 — 策略代理人(大提琴,低音長線)、營運代理人(小提琴,旋律日常)、風險代理人(中提琴,中音預警)、永續代理人(第二小提琴,和聲長期願景)— 各司其職又彼此呼應。當突然遇到「蘇伊士運河堵塞」這種變奏,四個代理人會即時重新編排:策略代理人重新評估長期路線、營運代理人立即繞行、風險代理人通知客戶並啟動備援、永續代理人計算新路線的碳足跡影響。這就是「多代理人即時協作」的價值。",
      analogy_en: "Traditional supply-chain systems are like a piano solo — one instrument plays one piece; brilliant but limited. Agentic decision support is like a quartet — Strategy (cello, low long lines), Operations (violin, melodic day-to-day), Risk (viola, mid-range warnings), Sustainability (second violin, long-horizon harmony) — each has its role and they answer each other. When a 'Suez Canal blockage' shock hits, all four reorchestrate live: Strategy reassesses long-term routes, Operations reroutes immediately, Risk notifies customers and activates backups, Sustainability computes the new carbon impact. That's the value of multi-agent real-time collaboration.",
      worked_example_zh: "2024 年初紅海航運危機期間,一家跨國電子製造商面對 80% 從亞洲到歐洲的貨櫃必須繞行非洲南端(增加 14 天)。傳統系統的反應:供應鏈分析師花 3 週收集資料、重排優先順序、調整生產計畫,期間損失估計 $2800 萬。導入四代理人系統後:風險管理代理人在危機爆發 18 小時內就發出預警,並評估出 23% 的關鍵零件將短缺;營運代理人立即重新計算所有航運路線,提出三個方案(全部繞行、空運高優先零件、調整生產順序);策略代理人分析長期影響,建議將 30% 採購轉移至東歐供應商以降低未來依賴;永續代理人計算空運會增加 4.2 倍碳排,建議僅對最高優先零件用空運,並提出碳補償方案。CEO 看到綜合建議在第 36 小時就做出決策。最終損失 $480 萬(僅原預估 17%),且因為提早調整,公司在競爭對手仍在恢復時已能正常出貨,市佔率反而提升 2.1%。",
      worked_example_en: "During the early-2024 Red Sea shipping crisis, a multinational electronics manufacturer faces 80% of its Asia-to-Europe containers needing to reroute around Africa (+14 days). Traditional response: supply-chain analysts spend 3 weeks collecting data, re-prioritizing, adjusting production plans; losses ~$28M. After the four-agent system: Risk Management Agent issues an alert within 18 hours of the crisis and estimates 23% critical-part shortage; Operations Agent immediately recomputes all shipping routes, proposes three options (full reroute, air-freight high-priority parts, reorder production sequence); Strategic Planning Agent analyzes long-term impact and recommends shifting 30% sourcing to Eastern European suppliers to reduce future dependency; Sustainability Agent computes that air-freight adds 4.2x carbon emissions, suggests air-freight only for highest-priority parts and proposes a carbon-offset plan. CEO sees integrated recommendations and decides at the 36-hour mark. Final losses: $4.8M (only 17% of original estimate); because of early adjustment, the company ships normally while competitors are still recovering, gaining 2.1% market share.",
      diagram_description: "Quartet-style diagram. Center: 'Global Supply Chain' with multiple nodes (suppliers, factories, warehouses, customers) connected by shipping routes. Four agents arranged around: top 'Strategic Planning Agent' (icon: long-arrow timeline + globe), right 'Operational Optimization Agent' (icon: truck + clock), bottom 'Risk Management Agent' (icon: radar + warning), left 'Sustainability Optimization Agent' (icon: leaf + CO2). Arrows between all four labeled 'Shared Context + Real-time Data'. External systems shown as outer ring: ERP (SAP/Oracle), TMS, WMS, Bloomberg/Reuters, weather/disaster, supplier DBs, blockchain traceability."
    }
  ],
  code_or_procedure_zh: "選擇與設計代理人應用的決策框架(可作為產品團隊評估模板):\n\n【步驟 1:辨識領域類型】\n問題的核心是哪一類?\n□ 創意產出(內容、設計、敘事)→ 創意代理人模式\n□ 知識/溝通(查詢、解釋、客服)→ 對話代理人模式\n□ 物理操作(製造、運輸、實體任務)→ 機器人代理人模式\n□ 策略決策(優化、預測、資源配置)→ 決策支援代理人模式\n\n【步驟 2:識別關鍵價值】\n相比傳統工具,代理式系統能解決什麼?\n□ 創意:跨任務的風格一致性、創意與技術的即時平衡\n□ 對話:跨 session 的脈絡保留、多源資訊的整合回應\n□ 機器人:面對變異/中斷的彈性、不需重新編程的適應力\n□ 決策:多目標即時平衡、跨資料流的快速整合\n\n【步驟 3:設計多代理人角色】\n根據問題,通常需要 3-4 個角色:\n□ 「規劃/協調」代理人(理解需求、設定方向)\n□ 「執行」代理人(實際產出/動作)\n□ 「品質/驗證」代理人(評估與優化)\n□ 「異常/風險」代理人(偵測與應變)\n\n【步驟 4:盤點外部系統整合】\n列出代理人需要存取的:\n□ 核心系統(ERP、CRM、MES、文件管理)\n□ 即時資料來源(感測器、市場資料、新聞)\n□ 知識庫(歷史案例、規格書、政策文件)\n□ 協作平台(Slack、Teams、Jira)\n□ 存取控制層(RBAC、稽核、合規)\n\n【步驟 5:定義成功指標】\n□ 主要指標(直接價值,如成本節省、時間縮短)\n□ 次要指標(品質、使用者滿意度)\n□ 長期指標(學習速率、適應力)\n□ 安全/倫理指標(子群公平性、決策可解釋率)",
  code_or_procedure_en: "Decision framework for choosing and designing agentic applications (product-team evaluation template):\n\n[Step 1: Identify Domain Type]\nWhich category is the core problem?\n[ ] Creative output (content, design, narrative) → Creative agent pattern\n[ ] Knowledge/Communication (queries, explanation, support) → Conversational agent pattern\n[ ] Physical operation (manufacturing, logistics, tangible tasks) → Robotic agent pattern\n[ ] Strategic decision (optimization, forecasting, resource allocation) → Decision-support agent pattern\n\n[Step 2: Identify Key Value]\nWhat does agentic offer over traditional tools?\n[ ] Creative: cross-task style consistency; real-time creative-technical balance\n[ ] Conversational: context retention across sessions; integrated multi-source response\n[ ] Robotics: flexibility to variation/disruption; adaptability without reprogramming\n[ ] Decision: real-time multi-objective balance; rapid multi-stream integration\n\n[Step 3: Design Multi-Agent Roles]\nMost problems need 3-4 roles:\n[ ] Planning/Coordination Agent (understand needs, set direction)\n[ ] Execution Agent (actual output/action)\n[ ] Quality/Verification Agent (evaluate and optimize)\n[ ] Exception/Risk Agent (detect and respond)\n\n[Step 4: Inventory External System Integrations]\nList what the agent must access:\n[ ] Core systems (ERP, CRM, MES, doc management)\n[ ] Real-time data sources (sensors, market data, news)\n[ ] Knowledge base (historical cases, specs, policy docs)\n[ ] Collaboration platforms (Slack, Teams, Jira)\n[ ] Access control layer (RBAC, audit, compliance)\n\n[Step 5: Define Success Metrics]\n[ ] Primary metrics (direct value: cost savings, time reduction)\n[ ] Secondary metrics (quality, user satisfaction)\n[ ] Long-term metrics (learning rate, adaptability)\n[ ] Safety/ethics metrics (subgroup fairness, decision explainability rate)",
  key_takeaways_zh: [
    "創意代理人(Adobe Firefly、UMG、電影前期視覺化)的核心價值是「跨任務維持藝術一致性」,不是單純加速生成",
    "對話代理人(Salesforce Agentforce、企業 KM)超越聊天機器人在於「跨 session 脈絡 + 任務執行 + 適應性互動 + 多模態」",
    "機器人代理人(Boston Dynamics、UC Berkeley、MIT、彈性製造)讓物理動作有了「上下文理解」,從而能面對變異與干擾",
    "決策支援代理人(JPMorgan LOXM、Stanford DeepPill、Siemens MindSphere、供應鏈)的價值是「多目標即時平衡」與「跨資料流整合」",
    "四領域共通模式:3-4 個專業代理人 + 共享脈絡 + 持續回饋迴圈 + 豐富的外部系統整合"
  ],
  key_takeaways_en: [
    "Creative agents (Adobe Firefly, UMG, film pre-vis) deliver core value through 'cross-task artistic consistency,' not just faster generation",
    "Conversational agents (Salesforce Agentforce, enterprise KM) surpass chatbots via 'cross-session context + task execution + adaptive interaction + multi-modal'",
    "Robotic agents (Boston Dynamics, UC Berkeley, MIT, flexible manufacturing) give physical actions 'contextual understanding,' enabling them to handle variation and disruption",
    "Decision-support agents (JPMorgan LOXM, Stanford DeepPill, Siemens MindSphere, supply chain) deliver 'real-time multi-objective balancing' and 'cross-stream integration'",
    "Common pattern across the four domains: 3-4 specialized agents + shared context + continuous feedback loops + rich external-system integration"
  ],
  common_pitfalls_zh: [
    "把代理式系統當成「更強的聊天機器人」— 忽略了多代理人協作、外部系統整合、持續脈絡保留的深度",
    "在創意應用中只追求「生成速度」而忽略「風格一致性」— 失去了代理式系統最大的差異化價值",
    "在機器人應用中試圖讓單一代理人做所有事 — 應該分工為規劃/控制/品質/異常四角色",
    "在決策支援中只整合「結構化資料」忽略外部新聞、社群、感測等「非結構化即時資料」— 失去多元資料流的優勢",
    "忽略外部系統整合的工程複雜度 — 多代理人架構的可靠性 80% 取決於與企業 IT 棧的整合品質"
  ],
  common_pitfalls_en: [
    "Treating agentic systems as 'better chatbots' — missing the depth of multi-agent collaboration, external-system integration, persistent context",
    "In creative apps, chasing 'generation speed' only and ignoring 'style consistency' — losing the agentic system's biggest differentiator",
    "In robotics, trying to make one agent do everything — should be split into planning/control/quality/exception roles",
    "In decision support, integrating only 'structured data' and ignoring external news, social, sensors — losing the multi-stream advantage",
    "Underestimating external-integration engineering complexity — 80% of agentic-system reliability depends on integration quality with the enterprise IT stack"
  ],
  quiz: [
    {
      question_zh: "在電影前期視覺化的多代理人架構中,「技術監督代理人」的核心職責是?",
      question_en: "In the film pre-visualization multi-agent architecture, the core responsibility of 'Technical Supervisor Agent' is:",
      options_zh: [
        "生成最終的 3D 渲染影像",
        "評估技術可行性與預算限制,並提出替代方案",
        "與導演用自然語言對話",
        "管理整個團隊的人力資源排班"
      ],
      options_en: [
        "Generate the final 3D rendered images",
        "Evaluate technical feasibility and budget constraints, propose alternatives",
        "Talk to the director in natural language",
        "Manage HR scheduling for the team"
      ],
      answer_index: 1,
      explanation_zh: "書中明確定義技術監督代理人的角色:評估技術可行性、考慮預算與資源限制、需要時提出替代方案。視覺化代理人才負責生成 3D 預覽;導演代理人才處理自然語言對話。多代理人架構的關鍵是「角色分工明確」。",
      explanation_en: "The book explicitly defines Technical Supervisor's role: evaluate technical feasibility, consider budget/resource constraints, propose alternatives when needed. The Visualization Agent handles 3D previews; the Director Agent handles natural-language dialogue. Clear role separation is the key in multi-agent architecture."
    },
    {
      question_zh: "對話式知識管理系統的「知識導航代理人」與傳統企業搜尋的關鍵差異在於?",
      question_en: "What's the key difference between a conversational KM system's 'Knowledge Navigation Agent' and traditional enterprise search?",
      options_zh: [
        "前者用更快的伺服器",
        "前者支援更多檔案格式",
        "前者能對應不同知識來源的關係、跨多份文件維持脈絡、追蹤資訊出處",
        "前者只能搜尋英文文件"
      ],
      options_en: [
        "The former uses faster servers",
        "The former supports more file formats",
        "The former maps relationships between sources, maintains cross-document context, tracks provenance",
        "The former only searches English documents"
      ],
      answer_index: 2,
      explanation_zh: "書中描述的核心差異:傳統搜尋仰賴關鍵字精確匹配與預定類別,知識導航代理人能對應不同知識來源的關係、跨多份文件維持脈絡、追蹤資訊出處。這是「資訊」與「智慧」的差別。",
      explanation_en: "The book describes the core difference: traditional search relies on exact keyword matches and predefined categories; Knowledge Navigation Agent maps relationships between sources, maintains cross-document context, tracks provenance. It's the difference between 'information' and 'intelligence.'"
    },
    {
      question_zh: "彈性製造案例中,四個代理人的設計反映了什麼工程原則?",
      question_en: "In the flexible-manufacturing case, what engineering principle does the four-agent design reflect?",
      options_zh: [
        "代理人越多越好,可以提升效能",
        "專業分工(規劃/控制/品質/異常),透過共享脈絡與即時回饋協作",
        "代理人應該完全獨立運作,避免相互干擾",
        "用 LLM 取代所有機械設備"
      ],
      options_en: [
        "More agents = better performance",
        "Specialization (planning/control/quality/exception) with collaboration via shared context and real-time feedback",
        "Agents should be fully independent to avoid interference",
        "Replace all mechanical equipment with LLMs"
      ],
      answer_index: 1,
      explanation_zh: "書中四代理人架構展示的是「專業分工 + 共享脈絡 + 持續回饋」的設計模式。代理人不是越多越好(會失控);也不應該完全獨立(失去協作優勢);更不是用 LLM 取代硬體(LLM 只是大腦,還需要機械手臂、感測器執行)。專業分工才是核心。",
      explanation_en: "The book's four-agent architecture exemplifies 'specialization + shared context + continuous feedback.' More isn't better (loses control); fully independent loses collaboration value; and LLMs don't replace hardware (LLMs are brains; arms and sensors still execute). Specialization is the core principle."
    },
    {
      question_zh: "全球供應鏈案例中,「永續優化代理人」的功能展示了代理式系統的什麼特性?",
      question_en: "In the global supply-chain case, what feature of agentic systems does the 'Sustainability Optimization Agent' demonstrate?",
      options_zh: [
        "代理式系統只能優化單一目標(成本)",
        "代理式系統能在多個競爭性目標(成本、速度、永續、合規)間動態平衡",
        "永續是公關用詞,實際無法量化",
        "代理人只能服務財務目標"
      ],
      options_en: [
        "Agentic systems can only optimize a single objective (cost)",
        "Agentic systems can dynamically balance multiple competing objectives (cost, speed, sustainability, compliance)",
        "Sustainability is a PR term that can't be quantified",
        "Agents can only serve financial goals"
      ],
      answer_index: 1,
      explanation_zh: "書中明確指出代理式系統的優勢之一是「在多個競爭性目標間平衡優化」。永續優化代理人具體展示了 — 它追蹤碳足跡、建議替代路線、確保法規符合,且與其他三個代理人(策略、營運、風險)動態協作。這正是代理式系統超越傳統優化工具的地方。",
      explanation_en: "The book explicitly states one advantage of agentic systems is 'balanced optimization across competing objectives.' The Sustainability Agent concretely demonstrates this — tracks carbon footprint, suggests alternative routes, ensures compliance, and dynamically collaborates with Strategy, Operations, Risk. This is exactly where agentic systems exceed traditional optimizers."
    },
    {
      question_zh: "下列哪一個是書中提到的真實金融業代理式系統?",
      question_en: "Which is a real financial-sector agentic system mentioned in the book?",
      options_zh: [
        "Adobe Firefly",
        "MIT RoboBrain",
        "JPMorgan Chase 的 LOXM 系統",
        "Boston Dynamics Atlas"
      ],
      options_en: [
        "Adobe Firefly",
        "MIT RoboBrain",
        "JPMorgan Chase's LOXM system",
        "Boston Dynamics Atlas"
      ],
      answer_index: 2,
      explanation_zh: "書中在決策支援的金融業案例提到 JPMorgan Chase 的 LOXM 系統分析市場資料、新聞、社群媒體辨識投資機會,以及 Two Sigma 的 Venn 系統。Adobe Firefly 是創意領域、MIT RoboBrain 與 Boston Dynamics 是機器人領域。",
      explanation_en: "In the decision-support finance section, the book mentions JPMorgan Chase's LOXM (analyzes market data, news, social media for investment opportunities) and Two Sigma's Venn. Adobe Firefly is creative; MIT RoboBrain and Boston Dynamics are robotics."
    }
  ]
};

const chapter11 = {
  id: 11,
  title_zh: "結論與未來展望",
  title_en: "Conclusion and Future Outlook",
  subtitle_zh: "本章你會總結整本書的核心概念,並了解多模態智能、AGI、學會學習、真實世界理解等前沿挑戰與機會。",
  subtitle_en: "Recap the book's core concepts and explore frontier challenges and opportunities: multi-modal intelligence, AGI, learning to learn, real-world understanding.",
  overview_zh: "本書最後一章把我們走過的旅程做總結,也指向未來的研究前沿。回顧層面,書中重新整理了從第一章的生成式 AI 基礎(GAN、自回歸模型)到代理式系統三大關鍵能力(對環境反應、主動追求目標、與他者協作)、再到記憶+學習+規劃的認知架構、自我反思與內省、工具使用、Coordinator-Worker-Delegator 模式、信任與安全考量、實際應用。展望層面,作者聚焦三個正在改變未來的趨勢:多模態智能(同時處理文字、圖像、音訊、影片,如 GPT-4o)、進階語言理解(少樣本學習、長脈絡保持、領域專業、自然對話,如 OpenAI o1 模型強調逐步推理)、體驗式學習與強化學習創新(自主技能提升、適應性學習、機器人/遊戲應用,如 DeepMind 的 RoboCat)。接著深入 AGI(通用人工智慧)— 為什麼難?需要哪些突破?「學會學習」(理解抽象概念、應用知識到新情境、常識推理、累積經驗)與「真實世界理解」(像人類般處理多感官輸入、處理雜亂矛盾資訊、理解脈絡細節、應對未知)是兩大關鍵。最後談大規模化、可解釋性、可靠性、人類自然互動四大挑戰與機會,以及元學習(MAML)、遷移學習、少樣本學習等新典範。",
  overview_en: "The book's final chapter wraps the journey we've taken and points to frontier research. The recap reviews from Chapter 1's generative AI foundations (GANs, autoregressive models) to agentic systems' three key abilities (react to environment, pursue goals proactively, collaborate), to the memory + learning + planning cognitive stack, self-reflection and introspection, tool use, the Coordinator-Worker-Delegator pattern, trust and safety, and real applications. The outlook focuses on three trends shaping the future: multi-modal intelligence (text + image + audio + video, e.g. GPT-4o), advanced language comprehension (few-shot learning, long-context, domain expertise, natural conversation, e.g. OpenAI o1 emphasizing step-by-step reasoning), and experiential learning with RL innovations (autonomous skill enhancement, adaptive learning, robotics/gaming, e.g. DeepMind's RoboCat). Then it dives into AGI — why is it hard? What breakthroughs are needed? 'Learning to learn' (abstract concepts, applying knowledge to new situations, common-sense reasoning, accumulating experience) and 'real-world understanding' (human-like multi-sensory processing, messy/contradictory information, contextual nuance, the unknown) are the two key challenges. It closes with four challenges-and-opportunities (scale, explainability, reliability, natural human interaction) and new paradigms like meta-learning (MAML), transfer learning, few-shot learning.",
  learning_objectives_zh: [
    "整合書中代理式系統的核心概念:生成式 AI 基礎、自主能力三要素、認知架構、反思、工具、CWD 模式、信任與安全",
    "辨識三大新興趨勢(多模態智能、進階語言理解、強化學習創新)的具體展現與代表性系統",
    "理解 AGI 與當前 narrow AI 的關鍵差異,以及達成 AGI 所需的突破(學會學習、真實世界理解、因果推理、體現式 AI)",
    "說明元學習(MAML)、遷移學習、少樣本學習作為未來典範的價值與適用場景",
    "辨識未來 AI 系統的四大挑戰(規模化、可解釋性、可靠性、自然互動)與對應機會"
  ],
  learning_objectives_en: [
    "Integrate the book's core concepts: generative-AI foundations, three pillars of agency, cognitive architecture, reflection, tools, CWD pattern, trust and safety",
    "Identify three emerging trends (multi-modal intelligence, advanced language comprehension, RL innovations) and their representative systems",
    "Understand the key differences between AGI and current narrow AI, and the breakthroughs needed (learning to learn, real-world understanding, causal reasoning, embodied AI)",
    "Explain meta-learning (MAML), transfer learning, and few-shot learning as future paradigms and their applicable scenarios",
    "Identify four future challenges (scale, explainability, reliability, natural interaction) and corresponding opportunities"
  ],
  sections: [
    {
      id: "11.1",
      heading_zh: "核心概念回顧 — 整本書的全景圖",
      heading_en: "Core Concepts Recap — The Book's Big Picture",
      explanation_zh: "回顧本書的論述邏輯有助於把碎片化的知識整合為心智模型。第一階段(第 1-2 章)建立基礎:生成式 AI 透過 GAN、自回歸模型、Transformer 架構等技術產生新內容;當這些能力被組合並加上「自主性」就成了代理式系統。代理人需要三大核心能力 — 對環境反應(reactivity)、主動追求目標(proactiveness)、與他者協作(social ability),就像教電腦既要獨立又要當好團隊成員。第二階段(第 3-5 章)建構認知能力:代理人需要儲存知識(語意網路、邏輯、框架)、從經驗學習(監督式、非監督式、強化、遷移)、規劃行動(STRIPS、GraphPlan、A*、MCTS、HTN、LLM 規劃),這對應人類使用記憶與過往經驗做決策的方式。同時要能用工具(透過 function calling 連接外部 API、資料庫、硬體介面)。第三階段(第 6-7 章)進入高階能力:自我反思與內省讓代理人能評估自己的決策、改進行為;Coordinator-Worker-Delegator 模式是實作多代理人系統的框架 — 協調者管理整體流程、執行者處理具體任務、分派者決定誰做什麼。第四階段(第 8-10 章)聚焦負責任部署:信任(透明度、可解釋性、不確定性處理)、安全(行動邊界、決策驗證、回滾、即時監控)、倫理(公平、隱私、IP、多元利害關係人),以及四大應用領域(創意、對話、機器人、決策)。這整個架構不是靜態的知識堆疊,而是建構代理式系統的完整方法論。",
      explanation_en: "Tracing the book's argument helps consolidate fragments into a mental model. Stage 1 (Ch 1-2) builds the foundation: generative AI produces new content via GANs, autoregressive models, Transformers; combining these with autonomy yields agentic systems. Agents need three core abilities — reactivity (respond to environment), proactiveness (pursue goals), social ability (collaborate) — teaching a computer to be both independent and a good team player. Stage 2 (Ch 3-5) builds cognition: agents need to store knowledge (semantic networks, logic, frames), learn from experience (supervised, unsupervised, RL, transfer), plan actions (STRIPS, GraphPlan, A*, MCTS, HTN, LLM planning), mirroring how humans use memory and past experience. Agents also use tools (via function calling to connect external APIs, databases, hardware). Stage 3 (Ch 6-7) reaches higher functions: self-reflection and introspection let agents evaluate their decisions and improve; the Coordinator-Worker-Delegator pattern frames multi-agent systems — coordinators manage flow, workers handle tasks, delegators decide who does what. Stage 4 (Ch 8-10) focuses on responsible deployment: trust (transparency, explainability, uncertainty), safety (action boundaries, decision verification, rollback, monitoring), ethics (fairness, privacy, IP, diverse stakeholders), and four application domains (creative, conversational, robotics, decision). This whole arc isn't a static knowledge stack but a complete methodology for building agentic systems.",
      analogy_zh: "整本書像建造一間餐廳 — 第 1-2 章是地基(食材與食譜的基礎),第 3-5 章是廚房設備(各種烹飪工具與技術),第 6-7 章是廚師團隊組織(主廚、副廚、助手的協作),第 8-10 章是衛生、執照、客戶體驗(信任、安全、實際運營)。沒有地基的設備是空中樓閣,沒有團隊的廚房是孤狼作戰,沒有衛生的餐廳是定時炸彈 — 缺一不可。同樣地,設計代理式系統的人需要跨越這四個階段的整體理解,不能只懂單一階段。",
      analogy_en: "The book is like building a restaurant — Ch 1-2 is the foundation (ingredients and recipes), Ch 3-5 is the kitchen (tools and techniques), Ch 6-7 is the chef team organization (head chef, sous chef, assistants), Ch 8-10 is hygiene, licensing, customer experience (trust, safety, operations). A kitchen without a foundation is castles in air; a kitchen without a team is a lone wolf; a restaurant without hygiene is a time bomb. None can be skipped. Likewise, anyone designing agentic systems needs holistic understanding across all four stages, not just one.",
      worked_example_zh: "假設你要設計一個「智慧法律助理代理人」,本書架構給你的工程藍圖如下:【階段 1 基礎】選擇模型 — 一般查詢用 GPT-4o(autoregressive Transformer),法律專門知識用領域微調模型;【階段 2 認知】記憶架構:短期記憶儲存當下對話、長期記憶儲存客戶歷史、語意網路儲存法條與案例關聯;學習機制:從律師回饋持續微調;規劃:用 HTN 把「準備訴狀」分解為證據收集→法條檢索→草稿撰寫→交叉驗證等子任務;【階段 3 進階】工具使用:接入法律資料庫 API、判例搜尋、合約管理;自我反思:每次產出後評估「是否漏了重要案例?引用是否正確?」;CWD 架構:案件管理代理人(coordinator)+ 證據分析、法條檢索、草稿撰寫(workers)+ 任務分派(delegator);【階段 4 負責任部署】透明度(每段建議都附法律依據)、安全(關鍵決策需律師人工覆核)、隱私(客戶資料使用聯邦學習與差分隱私)、倫理(多元利害關係人委員會包含倫理學者與弱勢族群代表)。這個藍圖直接從本書架構推導出來。",
      worked_example_en: "Suppose you're designing a 'smart legal-assistant agent.' The book's framework gives you the engineering blueprint: [Stage 1 Foundations] Pick models — GPT-4o (autoregressive Transformer) for general queries, domain-fine-tuned model for legal specifics; [Stage 2 Cognition] Memory architecture: short-term for current dialogue, long-term for client history, semantic network for statute-case relationships; learning: continuous fine-tuning from lawyer feedback; planning: HTN to decompose 'prepare brief' into evidence collection → statute lookup → drafting → cross-validation; [Stage 3 Advanced] Tool use: legal-database APIs, case search, contract management; self-reflection: after each output evaluate 'did I miss key cases? are citations correct?'; CWD: case-management agent (coordinator) + evidence analysis, statute lookup, drafting (workers) + task delegation (delegator); [Stage 4 Responsible deployment] Transparency (every recommendation cites legal basis), safety (critical decisions need lawyer review), privacy (federated learning + differential privacy for client data), ethics (multi-stakeholder board with ethicists and underserved-community reps). This blueprint follows directly from the book's framework.",
      diagram_description: "Four-stage pyramid diagram. Bottom (widest) tier 'Stage 1: Foundations' (Generative AI, GANs, autoregressive, Transformer; agency: reactivity/proactiveness/social ability). Tier 2 'Stage 2: Cognition' (knowledge representation, learning, planning, tool use). Tier 3 'Stage 3: Advanced' (reflection, introspection, Coordinator-Worker-Delegator). Top tier 'Stage 4: Responsible Deployment' (trust, safety, ethics, applications). Right side: an arrow labeled 'Methodology Flow' running bottom-to-top. Left side: example projects (legal assistant, medical AI, travel agent) shown crossing all four tiers."
    },
    {
      id: "11.2",
      heading_zh: "新興趨勢 — 多模態、進階語言理解、強化學習創新",
      heading_en: "Emerging Trends — Multi-modal, Advanced Language, RL Innovations",
      explanation_zh: "AI 的未來正被三大趨勢同時推進。第一是「多模態智能」— AI 越來越能同時處理文字、圖像、音訊、影片,這對應人類用多種感官理解世界的方式。GPT-4o 是代表性案例:它能視覺解讀(分析圖像並產生詳細描述)、圖像生成(從文字提示創造視覺內容)、語音處理(理解語音指令並適當回應)、互動式回應(結合視覺與文字資訊產生脈絡相關的輸出)。這讓 AI 更直觀、更通用 — 你可以給它看一張照片問「這怎麼煮?」,它能理解並回答。第二是「進階語言理解」— 語言模型的能力大躍進。少樣本學習讓模型從少數例子學新任務、強化的脈絡理解讓 AI 在長對話中維持一致、領域專業讓特定行業(醫療、法律)有專家級回答、自然對話能力包含幽默與細微差異讓互動更像人類。OpenAI 的 o1 模型尤其值得關注 — 它強調強化的推理能力,在需要逐步邏輯處理的複雜任務中超越前代模型。不像早期 AI 倚賴模式匹配與統計推論,o1 採用結構化推理技術,拆解問題、分析多種可能性、得出更準確的結論。這讓 AI 接近進階問題解決,但仍未達 AGI(缺乏類人的適應力、直覺、跨領域自我導向學習)。第三是「體驗式學習與 RL 創新」— AI 從互動與經驗中學習的方式正在轉變。自主技能提升讓代理人自己練習達成熟練度;適應性學習根據過去錯誤改進;真實世界應用包含機器人學(透過試誤訓練機器人執行複雜物理任務)與遊戲(發展超越傳統人類做法的新策略)。DeepMind 的 RoboCat 是好例子 — 能控制機器手臂並用極少人類介入適應新任務與硬體。決策改進方面,不確定性管理處理不完整或模糊資訊、透明推理提供決策解釋以建立信任。",
      explanation_en: "AI's future is being driven by three concurrent trends. First is multi-modal intelligence — AI increasingly processes text, image, audio, video simultaneously, mirroring how humans use multiple senses. GPT-4o exemplifies: visual interpretation (analyze images, produce detailed descriptions), image generation (from text prompts), speech processing (understand and respond appropriately), interactive responses (combine visual and textual info for contextually relevant output). This makes AI more intuitive and versatile — you can show it a photo and ask 'how do I cook this?' and it can answer. Second is advanced language comprehension — leaps in language-model capability. Few-shot learning lets models learn from minimal examples; enhanced contextual understanding maintains coherence over long conversations; domain expertise gives expert-level answers in specific fields (medicine, law); natural conversational abilities incorporate humor and nuance for more human-like interaction. OpenAI's o1 model deserves attention — it emphasizes enhanced reasoning, outperforming prior models in complex tasks requiring step-by-step logic. Unlike early AI that relied on pattern matching and statistical inference, o1 incorporates structured reasoning, decomposes problems, analyzes possibilities, and reaches more accurate conclusions. It brings AI closer to advanced problem-solving but still falls short of AGI (lacks human-like adaptability, intuition, self-directed cross-domain learning). Third is experiential learning with RL innovations — how AI learns from interactions and experiences is changing. Autonomous skill enhancement lets agents practice independently to proficiency; adaptive learning modifies strategies based on past errors; real-world applications include robotics (training robots for intricate physical tasks via trial and error) and gaming (developing novel strategies surpassing traditional human approaches). DeepMind's RoboCat is a good example — controls robotic arms and adapts to new tasks and hardware with minimal human intervention. Decision-making improvements include uncertainty management (handling incomplete/ambiguous information) and transparent reasoning (explaining decisions to build trust).",
      analogy_zh: "三大趨勢就像人類進化的三大方向:多模態智能像「擁有更多感官」(原本只能讀字,現在能看、聽、說、理解圖像);進階語言理解像「擁有更深的思考力」(原本是反射動作,現在能邏輯推理);強化學習創新像「能自我訓練」(原本需要老師教,現在可以自己練習、自我提升)。三者結合,AI 正從「強大的工具」往「有能力的夥伴」演進。",
      analogy_en: "The three trends are like three directions of human evolution: multi-modal intelligence is like 'gaining more senses' (was text-only, now sees, hears, speaks, understands images); advanced language comprehension is like 'gaining deeper thought' (was reflexive, now logically reasons); RL innovations are like 'self-training' (used to need teachers, now can practice and improve alone). Together, AI is evolving from 'powerful tool' to 'capable partner.'",
      worked_example_zh: "想像一個 2026 年的「智慧家庭管家代理人」,它具體體現三大趨勢:【多模態】當你下班回家,它從智慧攝影機看到你疲憊的表情、從手錶讀到心率偏高、聽到你說「累死了」 — 整合這些訊號判斷你需要放鬆,自動播放你喜歡的音樂、調暗燈光、預熱熱水澡;【進階語言理解】你問「我下週去日本要帶什麼?」,它不是給通用清單,而是基於你過去三次出差的習慣、你下週查詢的氣象資料、你的健康狀況(發現你最近感冒),生成個人化逐步推理的清單,並解釋每個項目的依據;【強化學習】它觀察到你每次它推薦的活動有 30% 你會拒絕,持續分析拒絕模式並自我調整 — 比如發現你不喜歡星期一晚上社交,於是把週一的社交活動推薦改為週五。這個代理人不是任何單一趨勢的產物,而是三者整合的結果。",
      worked_example_en: "Imagine a 2026 'smart home butler agent' that embodies all three trends: [Multi-modal] When you come home, it sees your tired expression on the smart camera, reads elevated heart rate from your watch, hears you say 'exhausted' — integrating these signals it judges you need relaxation, auto-plays your favorite music, dims lights, preheats a hot bath; [Advanced language] You ask 'What should I bring for Japan next week?' It doesn't give a generic list but uses your past three business-trip habits, the weather data you queried last week, your health status (it notices you've caught a cold), generating a personalized step-by-step reasoned list, explaining each item's rationale; [RL] It observes you decline 30% of its activity recommendations, continuously analyzes the rejection patterns, self-adjusts — e.g., notices you dislike Monday-night social events, shifts Monday socials to Friday. This agent isn't a product of any single trend but their integration.",
      diagram_description: "Triangle diagram with three corners. Top corner: 'Multi-modal Intelligence' (icon: eye + ear + mouth + text) with examples (GPT-4o, visual interpretation, image generation, speech). Bottom-left: 'Advanced Language Comprehension' (icon: brain with arrows) with examples (few-shot, long-context, domain expertise, OpenAI o1 reasoning). Bottom-right: 'Experiential Learning & RL' (icon: robot with learning loop) with examples (DeepMind RoboCat, autonomous skill, adaptive, robotics/gaming). Center: 'Next-Gen AI Agent' with arrows connecting all three corners showing convergence."
    },
    {
      id: "11.3",
      heading_zh: "通用人工智慧(AGI)— 為什麼難?",
      heading_en: "Artificial General Intelligence (AGI) — Why Is It Hard?",
      explanation_zh: "AGI 是建立能「像人類般跨多種任務思考、學習、解決問題」的機器。書中對 AGI 與當前 narrow AI 的差異說得很清楚:今天的 AI 是「很多非常專業的工具」— 各自精通特定工作,但無法適應新情境。AGI 想像一個 AI 能今天寫交響樂、明天解複雜工程問題,且都理解任務的深層意義。建造 AGI 之所以困難,根本原因是「我們還不完全理解人類智慧如何運作」。人類不只是處理資訊,而是推理、適應、跨領域無縫遷移知識。想想孩子學習 — 他們快速學新技能、掌握因果關係、把一個情境的教訓應用到完全不同的情境。在機器中重現這需要解決兩大關鍵挑戰。挑戰一:「學會學習」(Learning to learn)— 建造 AGI 需要 AI 系統超越記憶、真正跨任務概括知識,具體包含:理解抽象概念(辨識更深的意義、類比、高層推理)、應用知識到新情境(不需重新訓練就能適應學到的原則)、發展常識推理(基於日常經驗做直覺判斷)、累積過往經驗(隨時間保留並精煉知識,而非每個任務都從頭開始)。挑戰二:「真實世界理解」(Real-world understanding)— 人類智慧深植於感知、脈絡、適應性,這些對 AI 難以複製。具體包含:像人類般處理資訊(整合多種感官輸入,在結構化資料外推理)、理解雜亂的真實資料(處理不完整、矛盾、模糊資訊)、理解脈絡與細節(基於文化、情感、情境線索解讀意義)、應對意外情境(對從未明確編程過的新問題彈性回應)。克服這些障礙需要因果推理、自監督學習、體現式 AI(embodied AI)的突破 — 從模式辨識邁向真正適應、自我改進的系統。當 AGI 與自主代理人結合,我們會創造能深度思考又能獨立行動於世界的系統 — 能做複雜決策(理解技術面與社會倫理影響)、持續從每次互動學習、與人類做真正的夥伴(理解我們的目標與價值觀並貢獻獨特能力)。書中描繪的場景:科學家有真正抓住研究目標細節的 AI 夥伴、能在罕見疾病診斷上連結看似無關症狀的醫療系統、能平衡經濟與生態影響的環境解決方案、能根據每個學生需求/學習風格/興趣個性化內容的教育系統。",
      explanation_en: "AGI aims to build machines that 'think, learn, and solve problems like humans across many different tasks.' The book sharply distinguishes AGI from current narrow AI: today's AI is 'a collection of very specialized tools' — great at specific jobs but unable to adapt to new situations. AGI imagines an AI that could write a symphony one day and solve complex engineering problems the next, understanding the deeper meaning behind both. AGI is hard because 'we still don't fully understand how human intelligence works.' Humans don't just process information — they reason, adapt, transfer knowledge seamlessly across domains. Think how a child learns — they pick up new skills, grasp cause and effect, apply lessons across different situations. Replicating this requires solving two key challenges. Challenge 1: 'Learning to learn' — AGI needs AI that goes beyond memorization to truly generalize knowledge across tasks: understanding abstract concepts (recognize deeper meanings, analogies, high-level reasoning), applying knowledge to new situations (adapt learned principles without retraining), developing common-sense reasoning (intuitive judgments from everyday experience), building on previous experiences (retain and refine over time, not start from scratch). Challenge 2: 'Real-world understanding' — human intelligence is rooted in perception, context, adaptability, which AI struggles to replicate: processing information like humans do (integrate multiple sensory inputs, reason beyond structured data), making sense of messy real-world data (handle incomplete/contradictory/ambiguous), understanding context and nuance (interpret meaning from cultural/emotional/situational cues), dealing with unexpected situations (respond flexibly to novel problems never programmed). Overcoming these requires breakthroughs in causal reasoning, self-supervised learning, embodied AI — moving beyond pattern recognition to truly adaptive, self-improving systems. When AGI is combined with autonomous agents, we create systems that can think deeply and act independently in the world — making complex decisions (understanding both technical and social-ethical implications), continuously learning from every interaction, partnering with humans (understanding our goals and values while contributing unique capabilities). The book's vignettes: scientists with AI partners truly grasping research nuances; medical systems connecting seemingly unrelated symptoms in rare-disease diagnosis; environmental solutions balancing economic and ecological factors; educational systems personalizing content to each student's needs/style/interests.",
      analogy_zh: "想像「會多國語言的人」與「真正會思考的人」之間的差距:會多國語言的人就像當前的 narrow AI — 在每個語言上都很流暢,但每種語言是獨立的技能;一個會思考的人即使不會某個語言,也能用其他知識推測並學習新語言、跨語言應用同樣的邏輯與情緒理解。AGI 的目標是後者:不是堆疊更多專業能力,而是擁有跨能力的「通用智慧」基礎。難在於 — 我們連自己是怎麼擁有這個基礎都還沒搞清楚。",
      analogy_en: "Imagine the gap between 'a multilingual person' and 'a person who truly thinks': multilingual is like current narrow AI — fluent in each language but each is a separate skill; a thinker, even unfamiliar with a language, uses other knowledge to figure it out, applies the same logic and emotional understanding across languages. AGI aims for the latter: not stacking more specialized skills but possessing a 'general intelligence' substrate. The hard part: we haven't even figured out how we got our own substrate.",
      worked_example_zh: "考慮一個具體研究方向:用「體現式 AI + 因果推理」突破真實世界理解。當前一個機器人代理人看到桌上有水杯,只能識別「水杯」物件,但無法理解「如果我撞到它會打翻、會弄濕文件」。研究團隊整合三項技術:(1)體現式學習 — 機器人在模擬環境中累積上千小時的物理互動經驗,學到「物體有重量、慣性、可破碎性」這些常識;(2)因果模型 — 在感知系統上方加一層因果推理,辨識「動作→後果」鏈而不只是相關性(避免把「常一起出現」誤認為「會導致」);(3)自監督學習 — 從未標記的影片資料中學到「人類在不同情境下會怎麼處理水杯」的脈絡知識。整合後,機器人面對「打開窗戶」這個從未明確訓練過的任務時,能推理「需要先把桌上的紙鎮放下避免風吹走,把水杯移到不會被窗簾刮到的位置,慢慢開避免突然的風」— 這種「真實世界推理」是當前 narrow AI 做不到、但對 AGI 必要的能力。本書最後留下的訊息:AGI 不是不可能,但需要的是基礎研究突破,而非更大的模型。",
      worked_example_en: "Consider a concrete research direction: breakthrough in real-world understanding via 'embodied AI + causal reasoning.' Currently, a robotic agent seeing a glass on a table can identify the 'glass' but can't understand 'if I bump it, it will tip, spill water, ruin documents.' A research team integrates three technologies: (1) Embodied learning — the robot accumulates thousands of hours of physical interaction in simulation, learning common sense like 'objects have weight, inertia, fragility'; (2) Causal models — add a causal-reasoning layer above perception, identifying 'action → consequence' chains, not just correlations (avoiding mistaking 'co-occur' for 'cause'); (3) Self-supervised learning — from unlabeled video data, learn contextual knowledge of 'how humans handle glasses in different situations.' Integrated, the robot facing an unfamiliar task 'open the window' can reason: 'I need to put down the paperweights to keep papers from blowing, move the glass away from where the curtain might knock it, open slowly to avoid sudden wind' — this 'real-world reasoning' is beyond current narrow AI but necessary for AGI. The book's parting message: AGI isn't impossible, but the path requires breakthroughs in foundational research, not just bigger models.",
      diagram_description: "Two-pillar diagram for AGI challenges. Left pillar 'Learning to Learn' with four blocks: 'Abstract concepts' (icon: brain with light bulbs), 'Apply to new situations' (icon: knowledge jumping between domains), 'Common-sense reasoning' (icon: everyday objects with arrows), 'Build on experience' (icon: layered timeline). Right pillar 'Real-World Understanding' with four blocks: 'Multi-sensory processing' (icon: senses), 'Messy data' (icon: tangled wires), 'Context and nuance' (icon: cultural symbols), 'Unexpected situations' (icon: question mark). Below both pillars: foundation labeled 'Required breakthroughs: causal reasoning, self-supervised learning, embodied AI.' Top: 'AGI = Truly Adaptive, Self-Improving Systems'."
    },
    {
      id: "11.4",
      heading_zh: "挑戰與機會 — 新典範與未來方向",
      heading_en: "Challenges and Opportunities — New Paradigms and Future Directions",
      explanation_zh: "未來 AI 系統面對四大挑戰與對應機會。挑戰一:「規模化學習」— 資料以指數增長,當前學習方法已顯露極限。解方在於新典範:(1)元學習(Meta-learning)— 教 AI 系統「如何學習」本身,而非只學特定任務。代表系統是 MAML(Model-Agnostic Meta-Learning),能跨不同類型任務(從圖像辨識到語言處理)運作,用更少訓練資料更快學到新技能;(2)遷移學習(Transfer learning)— 把一個領域學到的應用到另一個。比喻是會彈鋼琴的人學吉他比較容易,因為音樂基礎可以遷移。AI 中,在大型圖像資料集訓練的模型可以快速適應特定任務如醫療影像;(3)少樣本學習(Few-shot learning)— 應對另一關鍵限制:大量標記資料的需求。傳統方法需要海量資料,少樣本學習用少數例子訓練模型,在難以收集大量標記資料的情境(罕見疾病診斷、高度專業工業應用)中價值無比。這些進階學習典範各有挑戰與機會 — 需要創新架構、運算效率、對概括性與偏見的謹慎考量,但能造就更適應、資源效率、影響力大的 AI。挑戰二:「可解釋性」— 系統越複雜,越難理解它如何得出結論,使人們在醫療或金融等重要領域猶豫信任。解方包含新的視覺化與理解方式,例如注意力圖顯示 AI 最關注輸入的哪部分。挑戰三:「可靠性與安全」— 在真實世界中,系統必須能應對意外情境或被欺騙的嘗試,意味著建立保護機制與持續監控。挑戰四:「與人類自然互動」— 創造比 Siri/Alexa 更自然的互動,理解不只是話語,還有手勢、表情、對話脈絡。機會面也巨大:個性化 AI 導師能完美適應每個人的學習風格;教學助理能完全理解如何用你感興趣的話題解釋複雜概念。前進的關鍵是「在推動創新與負責任開發之間找平衡」— 既要解決技術挑戰,也要確保技術幫助而非傷害社會。書末總結:這不只是技術挑戰,更是人類挑戰 — 我們需要謹慎建造、確保與我們的價值觀對齊、服務更大的善。AI 的未來不是取代人類智慧,而是創造增強我們能力、用新方式解決問題的工具。",
      explanation_en: "Future AI systems face four challenges and corresponding opportunities. Challenge 1: 'Learning at scale' — data grows exponentially; current learning methods show limits. The fix: new paradigms: (1) Meta-learning — teach AI systems 'how to learn,' not just specific tasks. MAML (Model-Agnostic Meta-Learning) is representative, working across diverse task types (image recognition to language processing), picking up new skills faster with less data; (2) Transfer learning — apply learning from one area to another. The analogy: a pianist learning guitar is easier because music basics transfer. In AI, models trained on huge image datasets quickly adapt to specific tasks like medical imaging; (3) Few-shot learning — addresses another critical limit: need for extensive labeled data. Traditional methods need vast data; few-shot trains models with a handful of examples. Invaluable where collecting labeled data is impractical (rare-disease diagnosis, highly specialized industrial applications). These paradigms carry challenges (need new architectures, computational efficiency, careful generalization-and-bias consideration) but enable more adaptable, resource-efficient, impactful AI. Challenge 2: 'Explainability' — the more complex the system, the harder to understand its conclusions, making people hesitant to trust AI in important fields like healthcare or finance. Fixes include new ways to visualize and understand AI decisions, like attention maps showing where the AI focused most. Challenge 3: 'Reliability and security' — systems must work well facing unexpected situations or deception attempts, meaning safeguards and continuous monitoring. Challenge 4: 'Natural human interaction' — create interactions more natural than Siri/Alexa, understanding not just words but gestures, expressions, conversational context. Opportunities are also enormous: personalized AI tutors adapting perfectly to each person's learning style; teaching assistants explaining complex ideas using topics you find interesting. The key going forward: 'balance pushing innovation with responsible development' — solve technical challenges while ensuring these technologies help rather than harm. The book's final message: this isn't just a technical challenge but a human one — we must build thoughtfully, ensure alignment with our values, serve the greater good. AI's future isn't replacing human intelligence but creating tools that enhance our capabilities and solve problems in new ways.",
      analogy_zh: "未來 AI 的挑戰與機會就像「從個別運動員到整支國家隊」的進化。當前 AI 是個別運動員(narrow AI),各項目都有頂尖選手但彼此不溝通。元學習像「奧林匹克訓練營」教選手如何學任何運動;遷移學習像把游泳選手的耐力訓練應用到三鐵;少樣本學習像有天賦的新人只看幾次示範就會。同時,可解釋性像給每位選手配教練解讀比賽錄影;可靠性像反興奮劑與場地安全;與人類自然互動像隊員與教練的默契。書的最終訊息是 — 訓練營要兼顧成績與運動員的福祉,我們建 AI 也要兼顧能力與價值觀對齊。",
      analogy_en: "Future AI's challenges and opportunities are like evolution 'from individual athletes to a national team.' Current AI is individual athletes (narrow AI) — top performers in each event but no cross-talk. Meta-learning is the 'Olympic training camp' teaching athletes how to learn any sport; transfer learning applies a swimmer's endurance training to triathlon; few-shot learning is a talented rookie who masters from a few demos. Explainability is pairing each athlete with a coach to decode game tape; reliability is anti-doping and venue safety; natural interaction is the rapport between players and coaches. The book's final message — the training camp must balance performance with athlete welfare; building AI must balance capability with value alignment.",
      worked_example_zh: "假設一家偏鄉醫院只有 200 例罕見疾病 X 的歷史病例,傳統 AI 訓練幾乎不可能。團隊整合三種新典範:(1)元學習 — 先在 50 種其他罕見疾病的資料上「學會如何快速學罕見疾病」,使模型在僅 50 例的情況下也能達到 70% 準確率;(2)遷移學習 — 從 ImageNet 預訓練的視覺模型遷移到醫療影像,使影像辨識基礎不需從零學;(3)少樣本學習 — 對每位新病患的 5-10 張影像,模型能在沒有重新訓練的情況下產生個性化評估。同時應用書中後幾章的原則:可解釋性(每個診斷顯示模型關注的影像區域)、可靠性(關鍵診斷需放射科醫師覆核)、隱私(聯邦學習)、價值對齊(醫療倫理委員會審查)。一年後,該疾病的診斷準確率從原本的 38%(僅基於規則的系統)提升到 84%,且因為可解釋性,醫師信任度高、不會盲信。這個案例展示未來 AI 不是「更大模型」就解決一切,而是「典範整合 + 負責任設計」的綜合產物。",
      worked_example_en: "Suppose a rural hospital has only 200 historical cases of rare disease X — traditional AI training is nearly impossible. The team integrates three new paradigms: (1) Meta-learning — first 'learn how to learn rare diseases' on 50 other rare-disease datasets, so the model reaches 70% accuracy with just 50 cases; (2) Transfer learning — visual model pre-trained on ImageNet transfers to medical imaging, so image-recognition basics don't start from scratch; (3) Few-shot learning — for each new patient's 5-10 images, the model produces personalized assessment without retraining. Meanwhile, apply the book's later chapters: explainability (each diagnosis shows the image regions the model focused on), reliability (critical diagnoses need radiologist review), privacy (federated learning), value alignment (medical-ethics committee review). After one year, diagnostic accuracy rises from 38% (rule-based baseline) to 84%; due to explainability, physician trust is high without blind reliance. This shows future AI isn't solved by 'bigger models alone' but by 'paradigm integration + responsible design.'",
      diagram_description: "Four-quadrant diagram. Top-left 'Learning at Scale' (icon: data wave) with sub-items (Meta-learning/MAML, Transfer Learning, Few-shot Learning). Top-right 'Explainability' (icon: glass-box brain) with attention maps, XAI techniques. Bottom-left 'Reliability and Security' (icon: shield with monitoring) with adversarial defense, monitoring, safeguards. Bottom-right 'Natural Human Interaction' (icon: handshake AI+human) with multi-modal understanding, gesture/expression/context. Center: 'Balanced Development' label with two arrows: 'Innovation pressure' and 'Responsible design' meeting in equilibrium. Below all four: foundation labeled 'Value Alignment + Greater Good'."
    }
  ],
  code_or_procedure_zh: "從本書到自己專案 — 整合應用的執行框架:\n\n【步驟 1:定位你的代理人類型】\n依據第 10 章四領域分類:\n□ 創意型(內容/設計)\n□ 對話型(知識/客服)\n□ 機器人/物理型(製造/物流)\n□ 決策型(策略/優化)\n\n【步驟 2:選擇核心生成模型】\n依據第 1-2 章基礎:\n□ 一般用途:GPT-4o、Claude(autoregressive Transformer)\n□ 領域專業:微調過的領域模型\n□ 多模態需求:GPT-4o、Gemini 等\n□ 推理密集:OpenAI o1、DeepSeek-R1\n\n【步驟 3:設計認知架構】\n依據第 3-5 章:\n□ 記憶:短期(working memory)+ 長期(knowledge base)+ 情節(interaction history)\n□ 學習機制:supervised + RL + transfer\n□ 規劃演算法:HTN / LLM-based / A*(視任務)\n□ 工具:列出代理人需要呼叫的 API/資料庫/硬體\n\n【步驟 4:選擇多代理人協作模式】\n依據第 6-7 章:\n□ Coordinator(管理整體流程)\n□ Workers(專業執行者,3-5 個)\n□ Delegator(任務分派)\n□ 溝通協議(message passing, shared memory)\n\n【步驟 5:嵌入信任機制】\n依據第 8 章:\n□ XAI:至少一項(注意力圖/顯著性圖/自然語言解釋)\n□ 透明度:模型卡 + 資料卡\n□ 不確定性:信心分數輸出\n□ 使用者控制:可調參數 + 知情同意\n\n【步驟 6:設定安全邊界】\n依據第 9 章:\n□ 行動邊界(白名單/黑名單/閾值)\n□ 決策驗證(多步檢核)\n□ 回滾機制(可逆動作)\n□ 即時監控(異常偵測)\n□ RLHF 回饋迴圈\n□ 倫理委員會\n\n【步驟 7:準備未來演進】\n依據第 11 章:\n□ 評估元學習適用性(快速適應新任務?)\n□ 評估遷移學習機會(可借用其他領域?)\n□ 評估少樣本學習需求(資料稀缺?)\n□ 規劃多模態擴展路徑\n□ 持續關注 AGI 突破(因果推理、體現式 AI)",
  code_or_procedure_en: "From This Book to Your Own Project — Integrated Application Framework:\n\n[Step 1: Locate Your Agent Type]\nUsing Ch 10's four-domain taxonomy:\n[ ] Creative (content/design)\n[ ] Conversational (knowledge/support)\n[ ] Robotic/physical (manufacturing/logistics)\n[ ] Decision (strategy/optimization)\n\n[Step 2: Choose Core Generative Model]\nUsing Ch 1-2 foundations:\n[ ] General-purpose: GPT-4o, Claude (autoregressive Transformer)\n[ ] Domain-specialized: fine-tuned model\n[ ] Multi-modal needs: GPT-4o, Gemini, etc.\n[ ] Reasoning-intensive: OpenAI o1, DeepSeek-R1\n\n[Step 3: Design Cognitive Architecture]\nUsing Ch 3-5:\n[ ] Memory: short-term (working memory) + long-term (knowledge base) + episodic (interaction history)\n[ ] Learning: supervised + RL + transfer\n[ ] Planning: HTN / LLM-based / A* (per task)\n[ ] Tools: list APIs/databases/hardware the agent will call\n\n[Step 4: Choose Multi-Agent Collaboration Pattern]\nUsing Ch 6-7:\n[ ] Coordinator (manage overall flow)\n[ ] Workers (specialized executors, 3-5)\n[ ] Delegator (task assignment)\n[ ] Communication protocol (message passing, shared memory)\n\n[Step 5: Embed Trust Mechanisms]\nUsing Ch 8:\n[ ] XAI: at least one (attention map / saliency / natural language)\n[ ] Transparency: model card + data card\n[ ] Uncertainty: confidence-scored outputs\n[ ] User control: tunable parameters + informed consent\n\n[Step 6: Set Safety Boundaries]\nUsing Ch 9:\n[ ] Action boundaries (whitelist/blacklist/thresholds)\n[ ] Decision verification (multi-step checks)\n[ ] Rollback (reversible actions)\n[ ] Real-time monitoring (anomaly detection)\n[ ] RLHF feedback loops\n[ ] Ethics board\n\n[Step 7: Prepare for Future Evolution]\nUsing Ch 11:\n[ ] Assess meta-learning fit (rapid adaptation to new tasks?)\n[ ] Assess transfer learning opportunity (borrow from other domains?)\n[ ] Assess few-shot needs (data scarcity?)\n[ ] Plan multi-modal expansion path\n[ ] Track AGI breakthroughs (causal reasoning, embodied AI)",
  key_takeaways_zh: [
    "本書建構代理式系統的完整方法論:從生成式基礎 → 認知架構 → 進階能力 → 負責任部署,四階段缺一不可",
    "三大新興趨勢正同時推動 AI 前進:多模態智能、進階語言理解(如 o1 模型的逐步推理)、強化學習創新(如 DeepMind RoboCat)",
    "AGI 需要兩大根本突破:「學會學習」(抽象概念、跨情境應用、常識、累積經驗)與「真實世界理解」(多感官、雜亂資料、脈絡、未知情境)",
    "新典範(元學習/MAML、遷移學習、少樣本學習)是應對資料規模化挑戰的關鍵,而非只是擴大模型",
    "未來 AI 的關鍵不在「更大」,而在「平衡」— 創新與責任、能力與價值對齊、技術挑戰與人類福祉"
  ],
  key_takeaways_en: [
    "The book delivers a complete methodology for agentic systems: generative foundations → cognitive architecture → advanced capabilities → responsible deployment — all four stages required",
    "Three emerging trends are driving AI forward concurrently: multi-modal intelligence, advanced language comprehension (e.g., o1's step-by-step reasoning), RL innovations (e.g., DeepMind RoboCat)",
    "AGI requires two fundamental breakthroughs: 'learning to learn' (abstract concepts, cross-situation application, common sense, experience accumulation) and 'real-world understanding' (multi-sensory, messy data, context, unknown situations)",
    "New paradigms (meta-learning/MAML, transfer learning, few-shot learning) are key to scaling-data challenges — not just bigger models",
    "Future AI's key is not 'bigger' but 'balance' — innovation with responsibility, capability with value alignment, technical challenges with human well-being"
  ],
  common_pitfalls_zh: [
    "誤以為 AGI 是「更大的 LLM」就能達成 — 實際上需要因果推理、自監督學習、體現式 AI 等基礎研究突破",
    "把「多模態」當成功能加成而非範式轉變 — 真正的多模態需要從架構上整合不同感官輸入,不是各別模型拼湊",
    "忽略「資料稀缺場景」直接套用大模型 — 應該考慮元學習、遷移學習、少樣本學習等更適合的典範",
    "把可解釋性當成「事後加上的功能」— 應該從架構設計階段就嵌入(例如 attention 機制本身就可解釋)",
    "把書中的方法論當成「線性步驟」— 實際上四階段是「螺旋演進」,每次部署都應該回頭優化前幾階段"
  ],
  common_pitfalls_en: [
    "Believing 'a bigger LLM' alone will achieve AGI — actually requires foundational breakthroughs in causal reasoning, self-supervised learning, embodied AI",
    "Treating 'multi-modal' as a feature add-on rather than a paradigm shift — true multi-modality requires architectural integration of sensory inputs, not stitching separate models",
    "Ignoring 'data-scarce scenarios' and just applying big models — should consider meta-learning, transfer learning, few-shot as better-fit paradigms",
    "Treating explainability as 'a feature added after the fact' — should be embedded from architecture (e.g., attention mechanism is inherently explainable)",
    "Treating the book's methodology as 'linear steps' — it's actually 'spiral evolution': each deployment should revisit and optimize earlier stages"
  ],
  quiz: [
    {
      question_zh: "下列關於 AGI 與當前 narrow AI 差異的敘述,哪個最準確?",
      question_en: "Which statement about AGI vs current narrow AI is most accurate?",
      options_zh: [
        "AGI 只是規模更大的 narrow AI,堆疊夠多 GPU 就能達成",
        "AGI 能跨多種任務思考、學習、解決問題,且能無縫遷移知識,這需要學會學習與真實世界理解兩大根本突破",
        "AGI 與 narrow AI 沒有本質差異,只是行銷詞彙不同",
        "AGI 已經被 GPT-4 達成"
      ],
      options_en: [
        "AGI is just larger narrow AI; stack enough GPUs to achieve it",
        "AGI can think, learn, solve problems across many tasks, transfer knowledge seamlessly — requires fundamental breakthroughs in learning to learn and real-world understanding",
        "AGI and narrow AI have no essential difference; just marketing terminology",
        "AGI was achieved by GPT-4"
      ],
      answer_index: 1,
      explanation_zh: "書中明確指出 AGI 與 narrow AI 的根本差異在於「跨任務、無縫遷移知識的能力」,並列出兩大關鍵挑戰:學會學習(抽象概念、跨情境應用、常識、累積經驗)與真實世界理解(多感官、雜亂資料、脈絡、未知)。書中也強調這需要因果推理、自監督學習、體現式 AI 等基礎研究突破,而非只是規模化。",
      explanation_en: "The book clearly states the fundamental AGI-vs-narrow-AI difference lies in 'cross-task, seamless knowledge transfer capability,' and lists two key challenges: learning to learn (abstract concepts, cross-situation application, common sense, experience accumulation) and real-world understanding (multi-sensory, messy data, context, unknown). The book emphasizes this requires foundational breakthroughs in causal reasoning, self-supervised learning, embodied AI — not just scaling."
    },
    {
      question_zh: "OpenAI 的 o1 模型相對於前代模型的主要進步在於?",
      question_en: "OpenAI's o1 model's main advance over predecessors is:",
      options_zh: [
        "圖像生成品質提升",
        "強化的推理能力,採用結構化逐步推理拆解問題、分析多種可能性",
        "更大的訓練資料",
        "支援更多語言"
      ],
      options_en: [
        "Improved image generation quality",
        "Enhanced reasoning capability — structured step-by-step reasoning, decomposing problems, analyzing multiple possibilities",
        "Larger training data",
        "Supports more languages"
      ],
      answer_index: 1,
      explanation_zh: "書中明確指出 o1 模型聚焦在強化的推理能力,在複雜任務中超越前代;不像早期 AI 倚賴模式匹配與統計推論,o1 採用結構化推理拆解問題、分析多種可能性、得出更準確結論。書中也誠實點出 o1 仍未達 AGI(缺乏類人適應力、直覺、自我導向跨領域學習)。",
      explanation_en: "The book clearly states o1 focuses on enhanced reasoning, outperforming predecessors on complex tasks; unlike early AI that relied on pattern matching and statistical inference, o1 uses structured reasoning to decompose problems, analyze possibilities, reach more accurate conclusions. The book honestly notes o1 still falls short of AGI (lacks human-like adaptability, intuition, self-directed cross-domain learning)."
    },
    {
      question_zh: "面對「罕見疾病診斷只有極少訓練資料」的場景,下列哪個典範最適合?",
      question_en: "For 'rare-disease diagnosis with very little training data,' which paradigm fits best?",
      options_zh: [
        "從頭訓練一個更大的模型",
        "少樣本學習(few-shot learning)",
        "完全放棄 AI,只用人工診斷",
        "用隨機資料填補空缺"
      ],
      options_en: [
        "Train a bigger model from scratch",
        "Few-shot learning",
        "Abandon AI entirely; manual diagnosis only",
        "Fill the gaps with random data"
      ],
      answer_index: 1,
      explanation_zh: "書中明確將「少樣本學習」描述為「應對需要大量標記資料這個關鍵限制的關鍵典範」,並具體舉「罕見疾病診斷」與「高度專業工業應用」為適用場景。從頭訓練大模型在資料極少時會嚴重過擬合;隨機填補資料會引入錯誤;完全放棄 AI 又錯失提升機會。",
      explanation_en: "The book explicitly describes few-shot learning as 'the key paradigm addressing the critical limit of requiring extensive labeled data,' citing rare-disease diagnosis and highly specialized industrial applications as fitting scenarios. Training big models from scratch with very little data severely overfits; random padding introduces errors; abandoning AI loses the opportunity."
    },
    {
      question_zh: "下列哪個是書中描述的「元學習」(Meta-learning)核心特點?",
      question_en: "Which is a core feature of 'meta-learning' as described in the book?",
      options_zh: [
        "用更多 GPU 平行訓練",
        "教 AI 系統「如何學習」本身,而非只學特定任務 — 代表系統如 MAML 能跨任務類型運作",
        "把模型參數量翻倍",
        "更換 Transformer 為 RNN"
      ],
      options_en: [
        "Use more GPUs for parallel training",
        "Teach AI systems 'how to learn' itself, not just specific tasks — e.g., MAML works across task types",
        "Double the model parameter count",
        "Replace Transformer with RNN"
      ],
      answer_index: 1,
      explanation_zh: "書中明確定義元學習:「教 AI 系統如何學習更好,而非只學特定任務,讓系統能用更少訓練資料更快學到新技能。」MAML 是書中提到的代表系統,跨從圖像辨識到語言處理等不同任務類型運作。其他選項都是規模化或架構變更,不是元學習的本質。",
      explanation_en: "The book defines meta-learning: 'teach AI systems how to learn better, not just learn specific tasks, so they pick up new skills faster with less training data.' MAML is the book's representative system, operating across task types from image recognition to language processing. The other options are scaling or architecture changes, not the essence of meta-learning."
    },
    {
      question_zh: "本書結尾傳達的核心訊息是?",
      question_en: "The book's closing core message is:",
      options_zh: [
        "AI 將完全取代人類工作",
        "AGI 已經到來",
        "未來 AI 的關鍵不在「更大」而在「平衡」— 創新與責任、能力與價值對齊、技術挑戰與人類福祉",
        "只有大公司能做 AI 研究"
      ],
      options_en: [
        "AI will completely replace human work",
        "AGI has arrived",
        "Future AI's key isn't 'bigger' but 'balance' — innovation with responsibility, capability with value alignment, technical challenges with human well-being",
        "Only big companies can do AI research"
      ],
      answer_index: 2,
      explanation_zh: "書末明確總結:「前進的關鍵是在推動創新與負責任開發之間找平衡 — 既要解決技術挑戰,也要確保技術幫助而非傷害社會。」並強調 AI 的未來不是取代人類智慧,而是創造增強我們能力、用新方式解決問題的工具。這是本書最關鍵的價值觀宣示。",
      explanation_en: "The book ends with a clear summary: 'The key going forward is balancing pushing innovation with responsible development — solving technical challenges while ensuring these technologies help rather than harm society.' It emphasizes AI's future isn't replacing human intelligence but creating tools that enhance our capabilities and solve problems in new ways. This is the book's most important values statement."
    }
  ]
};

export const part3Chapters = [chapter8, chapter9, chapter10, chapter11];
