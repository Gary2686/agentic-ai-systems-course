// Part 1: Foundations of Agentic AI
// Bilingual (Traditional Chinese + English) interactive course content.
// Original instructional rewrites authored by the course builder, inspired by
// "Building Agentic AI Systems" (Biswas & Talukdar, Packt 2025).
// Explanations, analogies, worked examples, and quiz items are original
// teaching material, not reproductions of the source text.

const chapter1 = {
  id: 1,
  title_zh: "生成式 AI 的基礎",
  title_en: "Fundamentals of Generative AI",
  subtitle_zh: "本章你會學到生成式 AI 是什麼、它的主要模型家族,以及為什麼它是構築智能代理人的引擎。",
  subtitle_en: "What generative AI is, the model families behind it, and why it is the engine that powers modern agentic systems.",
  overview_zh:
    "在踏入「智能代理人」這個主題之前,我們需要先理解驅動它的核心引擎——生成式 AI。傳統的判別式 (discriminative) 模型只負責「分辨」事物,例如分辨一張圖片是貓還是狗;而生成式 (generative) 模型則學會「創造」,它可以畫出一隻從未存在過的貓。這個能力差異看似微小,卻徹底改變了人工智慧的版圖。本章先帶你回顧生成式 AI 的歷史脈絡,理解它如何從早期的高斯混合模型一路演化到今天的 Transformer 與大型語言模型 (LLM)。接著我們會走過三大生成模型家族:VAE、GAN、自回歸/Transformer,認識它們的設計哲學。最後我們會用一個貫穿整本書的例子——機票預訂助理 (Flight Booking Assistant)——來呈現:當 LLM 不只是「生成文字」,而是被賦予「呼叫工具、規劃步驟」的能力時,它就從聊天機器人升級為一個真正的代理人 (agent)。理解生成式 AI 的能力與限制,是後續所有章節的地基。",
  overview_en:
    "Before stepping into agents, we must understand the engine behind them: generative AI. Traditional discriminative models only sort things — telling cats from dogs in an image. Generative models go further: they can draw a cat that never existed. This small-sounding distinction has reshaped the entire AI landscape. This chapter traces the history from Gaussian mixture models to Transformers and modern large language models (LLMs), then walks through the three major model families: VAEs, GANs, and autoregressive/Transformer architectures. Each has a distinct design philosophy. We close with the running example used throughout the book — a Flight Booking Assistant — to show what changes when an LLM is no longer just a chatbot generating text, but is given the ability to call tools and plan steps. At that moment, it becomes an agent. Knowing what generative AI can do, and equally importantly what it cannot, is the foundation for every chapter that follows.",
  learning_objectives_zh: [
    "說明生成式模型與判別式模型的根本差異,並舉例解釋。",
    "比較 VAE、GAN、自回歸模型三大家族的核心思想與適用情境。",
    "解釋 Transformer 架構中自注意力 (self-attention) 與多頭注意力的角色。",
    "辨識常見大型語言模型類型:自回歸、僅編碼器、編碼-解碼、多模態、指令微調、領域專用。",
    "認識生成式 AI 在資料偏誤、隱私、運算成本與倫理上的主要挑戰。"
  ],
  learning_objectives_en: [
    "Explain how generative models fundamentally differ from discriminative models with concrete examples.",
    "Compare VAEs, GANs, and autoregressive models in terms of design idea and best-fit use cases.",
    "Describe the role of self-attention and multi-head attention inside the Transformer architecture.",
    "Identify the main LLM categories: autoregressive, encoder-only, encoder-decoder, multimodal, instruction-tuned, and domain-specific.",
    "Recognize the main challenges of generative AI: data bias, privacy leakage, compute cost, and ethics."
  ],
  sections: [
    {
      id: "1.1",
      heading_zh: "什麼是生成式 AI?它與判別式模型的差別",
      heading_en: "What Is Generative AI? Distinguishing It from Discriminative Models",
      explanation_zh:
        "生成式 AI 是一類人工智慧技術,能夠創造出全新的內容,包括文字、圖像、音訊與影片。它不是把現有資料挑揀分類,而是從訓練資料中學會「事物背後的機率分佈」,然後從這個分佈中抽樣,產生看起來合理的新樣本。打個比方:判別式模型像是一位郵差,專門把信件分到「家裡」或「公司」兩個信箱;生成式模型則像是一位寫作家,讀過數千封家書與商業信件之後,能自己編寫一封全新但風格逼真的信。要做到這件事,模型必須抓住資料的「結構」與「分佈」,而不只是某幾個特徵。早期生成式模型(如高斯混合模型 GMM、隱馬可夫模型 HMM)只能描述相對簡單的分佈;進入深度學習時代後,神經網路能夠近似任意複雜的高維分佈,生成式 AI 才真正起飛。從 2010 年代開始陸續出現的 VAE、GAN、Transformer,各自用不同的數學想法解決「如何學會分佈、如何從分佈取樣」的問題。理解這個核心目標,你會發現後面所有模型其實都在回答同一個問題:給定看過的世界,我要怎麼「造」出看起來像同一個世界的新東西?",
      explanation_en:
        "Generative AI is a family of techniques that creates new content — text, images, audio, video — instead of just sorting existing content into buckets. The trick is that the model learns the probability distribution behind a dataset and then samples from that distribution to produce fresh examples. A discriminative model is like a mail sorter that decides whether a letter goes into the personal or business bin. A generative model is more like a novelist who has read thousands of personal and business letters and can now write a brand-new one in a convincing style. To pull this off the model has to capture the structure of the data, not just a few surface features. Early generative models like Gaussian mixtures and hidden Markov models could only describe simple distributions. Once deep neural networks made it practical to approximate arbitrarily complex high-dimensional distributions, generative AI took off. Each major family — VAEs, GANs, Transformers — is really a different mathematical answer to the same question: given examples from a world, how do I produce new things that look like they belong in that world?",
      analogy_zh:
        "把判別式模型想成一位品酒師,只負責回答「這是紅酒還是白酒?」生成式模型則像一位釀酒師——他得知道葡萄、發酵、橡木桶的所有比例,才能釀出一瓶「全新但喝起來像波爾多」的酒。前者只需要分辨,後者必須懂得構造。",
      analogy_en:
        "Think of a discriminative model as a wine taster who only answers \"is this red or white?\" A generative model is the winemaker, who must understand grapes, fermentation, and oak barrels well enough to produce a brand-new bottle that tastes like a Bordeaux. The taster only categorizes; the maker has to construct.",
      worked_example_zh:
        "情境:一家銀行想偵測詐欺交易。\n判別式做法:訓練一個分類器,輸入交易紀錄、輸出「正常 / 詐欺」標籤。它無法產生新交易,只能評斷。\n生成式做法:訓練一個生成模型,學會「正常交易」的分佈。實際應用時,銀行把每筆新交易丟進模型計算「機率密度」,密度很低的就被視為異常。額外好處:生成模型還能合成大量「擬真但虛構」的交易資料,用來訓練其他模型(因為真實詐欺樣本稀少)。\n結果:判別式給出二元答案;生成式則同時提供異常分數與資料擴增,顯示「生成」能力其實服務的是更廣的下游任務。",
      worked_example_en:
        "Scenario: a bank wants to flag fraudulent transactions.\nDiscriminative approach: train a classifier that takes a transaction and outputs \"normal\" or \"fraud.\" It can label, but cannot create new examples.\nGenerative approach: train a model that learns the distribution of normal transactions. At inference, each new transaction gets a probability-density score; low-density ones are flagged as anomalous. Bonus: the generative model can also synthesize realistic-looking transaction records, useful for augmenting training data when real fraud examples are scarce.\nResult: the discriminative model gives a yes/no; the generative one yields both anomaly scoring and data augmentation, showing how \"generation\" supports a much broader set of downstream tasks.",
      diagram_description:
        "A side-by-side comparison diagram. Left panel: discriminative model — input flows into a single box labeled 'Classifier' that outputs a class label (e.g., 'cat' / 'dog'). Right panel: generative model — a 'Distribution' cloud with sample points; an arrow labeled 'sample' produces a new synthetic data point. Below both panels, a shared caption: 'Discriminative learns the boundary; generative learns the territory.'"
    },
    {
      id: "1.2",
      heading_zh: "VAE 與 GAN:壓縮重建 vs. 對抗遊戲",
      heading_en: "VAEs and GANs: Compress-and-Reconstruct vs. the Adversarial Game",
      explanation_zh:
        "在生成模型的歷史上,有兩條重要支線。第一條是變分自編碼器 (Variational Autoencoder, VAE):它由一個「編碼器」與一個「解碼器」組成。編碼器把輸入(例如一張人臉照片)壓縮成一個小小的向量,叫做「潛在表示」(latent representation);解碼器再試著從這個向量還原出原始照片。關鍵的「變分」設計讓潛在空間呈現平滑且結構化的特性,這代表如果你在這個空間裡稍微移動,生成出來的人臉也會平滑變化(例如逐漸變老)。這對「插值生成、概念解構」非常有用,例如藥物分子設計中可以在潛在空間搜尋具有期望特性的新分子。第二條支線是生成對抗網路 (Generative Adversarial Network, GAN):它讓兩個神經網路像「偽鈔師 vs. 警察」一樣互相對抗。生成器努力造假,鑑別器努力辨真偽。隨著訓練進行,雙方越來越強,最終生成器能造出連鑑別器都分不出來的「真實」樣本。GAN 在生成高解析度、超寫實圖像上表現極佳(StyleGAN 的人臉就是經典代表),但也以訓練不穩定、容易模式崩潰著稱。簡單記憶:VAE 重「結構」,GAN 重「逼真」。",
      explanation_en:
        "Two important branches dominated early deep generative modeling. First, the Variational Autoencoder (VAE) pairs an encoder that compresses an input (say, a face) into a small latent vector with a decoder that reconstructs the input from that vector. The \"variational\" trick forces the latent space to be smooth and well-structured, so nearby points decode into similar-looking outputs. That makes VAEs excellent for interpolation and concept manipulation — useful in drug discovery, where researchers can navigate a continuous \"molecule space\" to propose new candidates with desired properties. Second, the Generative Adversarial Network (GAN) pits two networks against each other like a counterfeiter and a detective. The generator tries to fool the discriminator; the discriminator tries to catch fakes. As they train, both get better, and eventually the generator produces samples so convincing the discriminator can no longer tell them apart from real data. GANs excel at photo-realistic image generation (StyleGAN faces are the canonical example) but are notoriously unstable to train and prone to mode collapse. Quick rule of thumb: VAEs prize structure; GANs prize realism.",
      analogy_zh:
        "VAE 像一位記者:她聽完一場演講後,把重點濃縮成一張小卡片(編碼),然後根據卡片重新寫一篇報導(解碼)。GAN 則像一場真人秀:一位仿畫家不斷畫贗品,一位拍賣行專家不斷分辨真偽,兩人在競爭中都越來越強。",
      analogy_en:
        "A VAE is like a journalist: she condenses a long speech into a tiny note card (encoding) and then writes a full article from that card (decoding). A GAN is more like a reality show: a forger keeps producing fake paintings, an auction-house expert keeps spotting fakes, and they push each other to ever higher skill.",
      worked_example_zh:
        "情境:遊戲工作室需要快速生成大量「沙漠關卡」紋理。\n用 VAE 的條件變體 (CVAE) 來做:研究人員先把大量現有沙漠紋理餵給模型,並附上「光線方向、沙丘高度、植被密度」等條件標籤。訓練後,設計師只要輸入「正午、低沙丘、無植被」的條件,CVAE 就會從潛在空間取樣,生成符合條件的新紋理。\n用 GAN 來做:訓練一個沙漠紋理 GAN。生成器與鑑別器對抗訓練,最終生成器可以產生超寫實的紋理,但設計師對「結果的可控性」較低——他能挑選喜歡的樣本,卻不容易精確指定條件。\n選擇:需要精細控制?選 VAE/CVAE;需要極致逼真?選 GAN。實務上常兩者搭配使用。",
      worked_example_en:
        "Scenario: a game studio needs many \"desert level\" textures fast.\nUsing a Conditional VAE: researchers feed many existing desert textures plus condition labels like sun angle, dune height, and vegetation density. After training, an artist supplies \"noon, low dunes, no vegetation\" and the CVAE samples a new texture that fits the conditions.\nUsing a GAN: a desert-texture GAN trains its generator and discriminator against each other. The output is hyper-realistic, but the artist has less direct control — they can pick favorites, but cannot easily dictate specific conditions.\nRule of thumb: need fine control? Choose VAE/CVAE. Need photo-realism? Choose GAN. In practice the two are often combined.",
      diagram_description:
        "Two stacked architecture diagrams. Top: VAE — Input image -> Encoder -> Latent vector z (with mean and variance symbols) -> Decoder -> Reconstructed image. A small arrow shows 'sample new point in z' producing a novel image. Bottom: GAN — A Generator box takes random noise z and outputs a fake image; a Discriminator box receives either real or fake images and outputs a real/fake probability. Two opposing arrows labeled 'fool' and 'catch' between them illustrate adversarial training."
    },
    {
      id: "1.3",
      heading_zh: "自回歸模型與 Transformer:一個 token 一個 token 地生成世界",
      heading_en: "Autoregressive Models and the Transformer: Building the World One Token at a Time",
      explanation_zh:
        "自回歸 (autoregressive) 模型的核心想法非常直觀:它一次只生成一個元素,並且每生成一個就「回頭看」前面已經產生的所有元素。生成「我喜歡」之後,模型再決定下一個字應該是「貓」、「狗」還是「吃」。這種「一步一步、依賴歷史」的設計天生適合具有「順序」的資料,例如文字、音訊與影像的像素序列。2017 年論文 Attention Is All You Need 提出的 Transformer 架構徹底改寫了這個領域。Transformer 不像更早的 RNN 那樣逐字往前走,而是讓模型在每一個位置都能「同時看到」整個輸入序列,並用「自注意力」(self-attention) 機制決定:「在預測這個字時,我應該關注前面哪幾個字?」自注意力會為每個位置算出一組權重,讓模型動態地強調某些上下文。「多頭注意力」(multi-head attention) 則同時跑好幾組自注意力,讓模型一邊看語法、一邊看語意、一邊看實體關係。再加上「位置編碼」告訴模型字的順序、殘差連結與層歸一化讓訓練穩定,這個架構就成了今天 GPT、BERT、T5 等所有大型語言模型的基礎。簡單說:Transformer 把「閱讀理解」做到了極致,而自回歸式的解碼則讓它能「逐字創作」。",
      explanation_en:
        "Autoregressive models have an intuitive core idea: generate one element at a time, each new element conditioned on everything that came before. After producing \"I like\", the model decides whether the next word should be \"cats\", \"dogs\", or \"eating\". This step-by-step, history-aware design is a natural fit for sequential data — text, audio, pixel streams. The 2017 paper Attention Is All You Need introduced the Transformer, which rewrote the field. Unlike earlier recurrent networks that crawled left to right one step at a time, a Transformer can attend to the entire input at every position simultaneously. The self-attention mechanism asks, at each position, \"to predict here, how much weight should I put on each earlier (and later) position?\" Multi-head attention runs several attention layers in parallel so the model can track grammar, meaning, and entity relations at once. Positional encodings restore the notion of order, while residual connections and layer normalization keep training stable. This stack is the foundation of GPT, BERT, T5, and every other modern LLM. In one line: Transformers turbo-charge reading comprehension, and autoregressive decoding lets them write fluently.",
      analogy_zh:
        "想像你在玩接龍。RNN 像一個只能記住前一個人說了什麼的接龍玩家,過幾輪就會忘了主題。Transformer 則像一位記者,桌上攤著整本筆記,每要寫下一個字之前都迅速掃一眼全本筆記,把最相關的幾頁高亮起來再下筆。自注意力就是「高亮哪幾頁」的決策機制。",
      analogy_en:
        "Imagine a story-chain game. An RNN is a player who only remembers the previous person's contribution and forgets the theme after a few rounds. A Transformer is a reporter with the whole notebook on the desk; before writing the next word, they instantly scan all pages and highlight the ones most relevant right now. Self-attention is the mechanism that decides what to highlight.",
      worked_example_zh:
        "情境:你問 ChatGPT「請幫我寫一段感謝信」。\n第 1 步:模型把你的整個提問編碼成向量序列,並用自注意力在內部建立「這是一封信、語氣要正式、目標是感謝」的理解。\n第 2 步:它開始自回歸生成。生成第一個 token,例如「親」。\n第 3 步:把「親」加到輸入,再生成下一個 token——很可能是「愛」。多頭注意力此時同時關注「上下文是感謝信」、「目前在開頭」、「應該禮貌」。\n第 4 步:重複這個流程,每次都基於目前的整段歷史決定下一個 token,直到模型輸出一個結束符號或達到長度上限。\n結果:你看到的是一段流暢的感謝信,但背後是上千次「條件機率最大化」的迭代。理解這點,你就能解釋為什麼 LLM 偶爾會「越寫越偏」——一旦早期生成的 token 帶來偏差,後面的所有 token 都受其影響。",
      worked_example_en:
        "Scenario: you ask an LLM to write a thank-you note.\nStep 1: the model encodes your entire prompt and uses self-attention to build an internal sense — \"this is a letter, polite tone, gratitude is the goal.\"\nStep 2: it begins autoregressive generation. It picks the first token, say \"Dear\".\nStep 3: \"Dear\" joins the input, and the model picks the next token — perhaps \"Sarah\". Multi-head attention simultaneously tracks the letter context, the position (still the opening), and politeness norms.\nStep 4: the loop continues, each next-token decision conditioned on the full history so far, until an end token or length limit.\nThe smooth letter you see is the result of thousands of conditional-probability decisions. Understanding this also explains why LLMs sometimes drift off topic: a biased early token influences everything that follows.",
      diagram_description:
        "A Transformer decoding diagram. Left: the input prompt as a row of tokens, each mapped to an embedding plus a positional encoding. Middle: stacked Transformer blocks, each containing a multi-head self-attention sub-block (with curved arrows showing each position attending to every other position) and a feed-forward sub-block, with residual and LayerNorm arrows. Right: an output probability distribution over the vocabulary, with the chosen token (e.g., 'Dear') highlighted and a dashed arrow looping it back into the input for the next step."
    },
    {
      id: "1.4",
      heading_zh: "LLM 的種類:從文字生成器到 LLM 驅動的代理人",
      heading_en: "Types of LLMs: From Text Generators to LLM-Powered Agents",
      explanation_zh:
        "雖然大家口頭上都說「LLM」,但其實 LLM 內部有好幾個不同流派,各自擅長不同的任務。第一類是「自回歸 LLM」,如 GPT 系列、PaLM——它們最擅長產生文字,可以續寫、創作、回答問題。第二類是「僅編碼器 LLM」,如 BERT、RoBERTa——它們不擅長生成,但對「理解整段話的語意」非常強,所以常被用在情緒分析、命名實體辨識、文本分類等任務。第三類是「編碼-解碼 LLM」,如 T5——同時具備理解與生成能力,適合翻譯、摘要、問答。第四類是「多模態 LLM」,如 GPT-4、DALL-E、LlaVa——它們能同時處理文字、圖像、音訊。第五類是「指令微調 LLM」,如 InstructGPT——這是把基礎模型用「指令-回應」資料再訓練,讓它更會聽話。第六類是「領域專用 LLM」,如 BioBERT(醫療)、LegalBERT(法律)——它們從頭就用該領域的資料預訓練,在專業術語上更精準。理解這個地圖後,我們才能談「LLM 驅動的代理人」(LLM-powered agent):代理人不是一種新模型,而是一種「應用形式」——通常以指令微調 LLM 為核心,再加上工具呼叫、規劃模組、記憶機制等元件,變成一個能「動手做事」而不只是「動嘴說話」的系統。本書接下來各章將深入探討如何構築這樣的代理人。",
      explanation_en:
        "Although people loosely say \"LLM\", there are several distinct flavors. First, autoregressive LLMs like GPT and PaLM excel at producing text — completion, creative writing, Q&A. Second, encoder-only LLMs like BERT and RoBERTa are weak at generating but strong at understanding a whole passage, so they shine in sentiment analysis, named-entity recognition, and classification. Third, encoder-decoder LLMs like T5 do both and suit translation, summarization, and Q&A. Fourth, multimodal LLMs like GPT-4, DALL-E, and LlaVa handle mixed inputs — text plus images, audio, or video. Fifth, instruction-tuned LLMs like InstructGPT take a base model and further train it on instruction-response data so it follows directions more reliably. Sixth, domain-specific LLMs like BioBERT (medical) or LegalBERT (legal) are pretrained from scratch on specialized corpora, so they handle jargon well. With this map in hand, we can finally place \"LLM-powered agents\": an agent is not a new architecture — it is an application pattern. Typically an instruction-tuned LLM sits at the core, surrounded by tool-calling, planning, memory, and other modules so the system can do things instead of merely talking about them. The rest of this book is about building exactly that.",
      analogy_zh:
        "把 LLM 想成不同類型的廚師:自回歸 LLM 像「即興料理人」(會邊做邊想下一步);僅編碼器 LLM 像「美食評論家」(嚐了就懂、但不下廚);編碼-解碼 LLM 像「料理示範老師」(既懂又能做);多模態 LLM 像「全能 MasterChef」(食材、香氣、外觀全包);指令微調 LLM 像「會看食譜的廚師」;領域 LLM 像「米其林主廚」,專精單一料理。代理人則是「廚師 + 助理 + 採購 + 訂位系統」——是整個廚房,不只是廚師本人。",
      analogy_en:
        "Picture LLMs as different chefs. Autoregressive LLMs are improv cooks — deciding each next step as they go. Encoder-only LLMs are food critics: they understand a dish but never cook one. Encoder-decoder LLMs are cooking instructors who both demonstrate and explain. Multimodal LLMs are all-rounders working across taste, smell, and plating. Instruction-tuned LLMs are chefs who follow recipes faithfully. Domain LLMs are Michelin specialists in a single cuisine. An agent, then, is not just the chef — it is the whole kitchen: chef plus prep assistants, the procurement system, the reservation desk.",
      worked_example_zh:
        "情境:打造一個跨國旅遊客服。\n步驟 1 — 選底層 LLM:選一個「指令微調的多模態 LLM」(如 GPT-4),因為它要看懂用戶上傳的旅遊照片,並且照指令回覆。\n步驟 2 — 加上工具:接上「航班查詢 API」、「飯店訂房 API」、「天氣 API」等。\n步驟 3 — 加上記憶:讓代理人記住用戶過去的旅遊偏好(靠窗、素食、不要紅眼班機)。\n步驟 4 — 加上規劃模組:當用戶說「下週末要去東京三天」,代理人會自動拆解任務(訂機票 -> 訂飯店 -> 列景點),不需要用戶一步步指示。\n結果:單一一個 LLM 變成一個「能執行多步任務的旅遊代理人」。這就是本書要教的——把「LLM 種類」當積木,組裝成有用的代理人系統。",
      worked_example_en:
        "Scenario: build a cross-border travel assistant.\nStep 1 — pick the base LLM: choose an instruction-tuned multimodal model (e.g., GPT-4) so it can both follow directions and analyze photos the user uploads.\nStep 2 — bolt on tools: connect a flight-search API, a hotel-booking API, a weather API.\nStep 3 — add memory: let the assistant remember user preferences (window seat, vegetarian, no red-eye flights).\nStep 4 — add a planner: when the user says \"Tokyo next weekend, three days,\" the assistant decomposes the task — book flight, book hotel, suggest attractions — without step-by-step prompts.\nResult: a single LLM has been wrapped into a multi-step travel agent. That is the whole point of the book — treat the LLM \"flavors\" as building blocks and assemble useful agentic systems.",
      diagram_description:
        "A 'family tree' diagram of LLMs. Root node: 'Large Language Models'. Branches: 'Autoregressive (GPT, PaLM)', 'Encoder-only (BERT, RoBERTa)', 'Encoder-decoder (T5)', 'Multimodal (GPT-4, DALL-E)', 'Instruction-tuned (InstructGPT)', 'Domain-specific (BioBERT, LegalBERT)'. A separate dashed box labeled 'Agent = Instruction-tuned LLM + Tools + Memory + Planner' with arrows pulling from several branches into it, signifying that an agent is an assembly, not a new model class."
    },
    {
      id: "1.5",
      heading_zh: "案例剖析:機票預訂助理——LLM 變成代理人的第一步",
      heading_en: "Case Study: The Flight Booking Assistant — An LLM Becomes an Agent",
      explanation_zh:
        "本書貫穿全書的範例就是「機票預訂助理」,它讓抽象概念立刻變得具體。先看用戶與系統的對話表面:用戶說「我想訂機票」,助理回問「請問出發地與目的地?」,用戶答某起訖城市,助理繼續追問日期、艙等、人數,最後查詢可用航班、計算總價、確認訂位、寄出付款連結。看起來像是個聊天機器人,但背後其實有「四件事」正在同時發生。第一,語意理解:LLM 把自然語言「下週五」翻譯成具體日期。第二,思路鏈 (Chain of Thought, CoT):助理在心裡列出「我需要哪些資訊才能完成訂位」,發現缺什麼就主動詢問。第三,工具呼叫 (tool use):每一次外部查詢都是助理「呼叫一個 API」——flightLookup、bookFlight、sendPayment 等。第四,自主決策:用戶說「我想要早班、經濟艙、不挑航空公司」之後,助理會自己決定要呈現哪幾個選項,以及如何排序。從這個例子可以看出:代理人 = LLM(大腦) + 工具集(手腳) + 規劃流程(思考步驟) + 對話狀態(短期記憶)。在後續章節我們會逐一把這些零件分解、實作、優化。",
      explanation_en:
        "The Flight Booking Assistant is the running example that makes abstract ideas concrete. On the surface it looks like a chat: the user says \"I want to book a flight,\" the assistant asks for origin and destination, then dates, class, number of travelers, searches options, presents prices, confirms, and emails a payment link. Beneath that conversation, four things are happening at once. First, semantic understanding: the LLM translates relative phrases like \"next Friday\" into concrete dates. Second, chain-of-thought reasoning: the assistant lists internally what information it needs and asks for whatever is missing. Third, tool use: every external lookup is the assistant calling an API — flightLookup, bookFlight, sendPayment. Fourth, autonomous decision-making: once the user says \"morning flights, economy, no airline preference,\" the assistant chooses which options to present and how to rank them. The lesson is the equation: agent = LLM (brain) + tools (hands) + planning (steps) + dialogue state (short-term memory). The rest of the book unpacks, implements, and refines each of these parts.",
      analogy_zh:
        "把這個助理想像成一位旅行社的新進業務員。客人說「我要訂機票」,新人不會立刻轉身去訂——他會先在心裡列清單:目的地、日期、人數、預算、艙等。每收到一項資訊,就在心裡更新清單;當清單完成,他打開電腦系統(工具),按下搜尋鈕(呼叫 API),把結果整理給客人。LLM 在這個比喻裡是這位業務員的「大腦語言能力」,API 是他的「電腦系統」,清單就是他的「短期記憶」。",
      analogy_en:
        "Picture the assistant as a new travel-agency clerk. When a customer says \"I want to book a flight,\" the clerk does not rush to the computer — first, mentally, he lists what he still needs: destination, dates, count, budget, class. As each piece arrives, the list updates. When complete, he turns to the booking system (the tool), runs a search (an API call), and presents results. The LLM is the clerk's language brain; the APIs are his booking system; the checklist is his short-term memory.",
      worked_example_zh:
        "完整流程拆解:\n1) 用戶輸入「我想訂機票」-> LLM 推斷意圖 = book_flight,但缺少所有參數。\n2) LLM 生成提問:「請問出發地、目的地、日期?」\n3) 用戶回答出發地、目的地、出發與返程日期 -> LLM 解析出結構化參數。\n4) LLM 內部評估:還缺艙等與偏好時段。再次提問。\n5) 用戶補完 -> LLM 呼叫工具 flightLookup(from, to, depart, return, class)。\n6) flightLookup 回傳若干航班 -> LLM 依「早班、價格低」排序並挑出最佳選項呈現。\n7) 用戶選擇選項 -> LLM 索取乘客資料(姓名、生日、信箱、電話)。\n8) 收齊後,LLM 呼叫 bookFlight() 與 sendPaymentLink() 兩個工具。\n9) 完成。整個過程中,LLM 全程「自己決定何時提問、何時呼叫工具、何時收尾」。\n關鍵洞察:沒有任何一行程式碼寫死「先問日期再問艙等」——這些順序是 LLM 在每一步即時推斷出來的。",
      worked_example_en:
        "Full breakdown:\n1) User: \"I want to book a flight.\" -> LLM infers intent = book_flight but all parameters are missing.\n2) LLM asks for origin, destination, and dates.\n3) User answers origin, destination, departure and return dates -> LLM extracts structured parameters.\n4) LLM notices class and time-of-day preferences are still missing; it asks.\n5) User answers -> LLM calls the tool flightLookup(from, to, depart, return, class).\n6) flightLookup returns several candidates -> LLM sorts by \"morning, cheaper\" and surfaces the top options.\n7) User picks an option -> LLM requests passenger details.\n8) After receiving them, the LLM calls bookFlight() and sendPaymentLink().\n9) Done. Throughout, the LLM itself decided when to ask, when to call a tool, and when to wrap up.\nKey insight: no hard-coded script says \"ask dates before class.\" That ordering emerges from the LLM reasoning at each step.",
      diagram_description:
        "A swim-lane diagram with three lanes: 'User', 'LLM Agent', and 'External Tools/APIs'. Time flows left to right. Messages travel between User and LLM Agent. Tool calls drop from LLM Agent into Tools (flightLookup -> returns candidates -> bookFlight -> sendPaymentLink). Inside the LLM Agent lane, dashed bubbles labeled 'CoT: missing dates?' and 'Decision: rank by morning + price' appear, revealing the chain-of-thought happening between user-facing turns."
    },
    {
      id: "1.6",
      heading_zh: "生成式 AI 的挑戰:偏誤、隱私、運算成本與倫理",
      heading_en: "Challenges of Generative AI: Bias, Privacy, Compute Cost, and Ethics",
      explanation_zh:
        "再強的工具也有它的陰影面。第一個挑戰是「資料品質與偏誤」:生成式模型完全依賴訓練資料,如果資料偏向某個族群、性別、語言,模型就會放大這些偏誤。例如某個面試篩選模型若只訓練在男性履歷上,日後它就會傾向把女性履歷判定為「不合格」。緩解方法包括資料分析、過採樣 (oversampling)、欠採樣 (undersampling) 與更多元的資料來源。第二個挑戰是「資料隱私」:研究已證明,只要花相對小的 API 費用,就能誘使大型模型「吐出」訓練資料中的個人姓名、地址、電話。對在自家私有資料上微調模型的企業來說,這是重大風險。對策是在訓練前先做「資料去識別化」或「假名化」。第三個挑戰是「運算資源」:訓練一個 GPT-3 級別模型估計要數百萬美元的 GPU 成本,GPT-4 更貴。這讓 LLM 訓練長期被少數大型公司壟斷。對策包括使用小型語言模型 (SLM) 或租用雲端預訓練模型。第四個挑戰是「倫理與社會衝擊」:深偽 (deepfake) 與假訊息、版權與智慧財產、工作取代等議題,都需要技術手段與法規同時推進。最後是「泛化與創造力」:生成式模型擅長「重組已知」,但要產生真正前所未見的原創,仍是大難題。理解這些限制,才不會把 LLM 當神。",
      explanation_en:
        "Powerful tools come with shadows. First, data quality and bias: generative models inherit and amplify whatever skew exists in training data. A resume-screening model trained mostly on male resumes will likely under-rate female candidates. Mitigations include data analysis, oversampling, undersampling, and broader data sourcing. Second, data privacy: researchers have shown that for relatively modest API costs, attackers can prompt-inject large models into leaking verbatim training data — names, addresses, phone numbers. For organizations fine-tuning on private data, that is a major risk. Defense: anonymize or pseudonymize data before training. Third, compute cost: training a GPT-3-scale model is estimated in the millions of dollars in compute alone, and GPT-4 is far more. That concentrates power in a few large companies. Counter-measures include small language models (SLMs) and using cloud-hosted pretrained models. Fourth, ethics and society: deepfakes and misinformation, copyright and IP, job displacement — all need both technical and regulatory responses. Finally, generalization and creativity: generative models excel at recombining the known but struggle with truly novel originality. Knowing these limits is what keeps you from treating LLMs as oracles.",
      analogy_zh:
        "生成式 AI 像一位天賦異稟但成長於封閉小鎮的天才畫家:他畫得好,卻只能畫小鎮見過的東西(資料偏誤);他可能記得太多客人的私密細節並不小心畫出來(隱私洩漏);他用的顏料貴得驚人(運算成本);他可以仿任何人,卻沒有真正的原創靈魂(創造力限制)。要用好他,你得承認他的天賦,也得設好他的界線。",
      analogy_en:
        "Generative AI is like a prodigiously talented painter raised in a closed-off town: he paints beautifully but only what the town has seen (bias). He sometimes paints over private moments he overheard from customers (privacy leakage). His paints are eye-wateringly expensive (compute cost). He can imitate anyone but has no originality of his own (creativity limit). To use him well, you must recognize the talent and also fence in the limits.",
      worked_example_zh:
        "情境:一家銀行想用 LLM 自動審核貸款申請。\n問題 1 — 偏誤:歷史資料中,某郵遞區號的拒絕率偏高(可能源自過去的歧視性政策)。如果直接訓練,LLM 就會學會「看到該郵遞區號 -> 拒絕」。對策:平衡資料、移除地址特徵、加上公平性指標。\n問題 2 — 隱私:申請資料含身分證號、薪資、家庭成員。如果不小心,模型回答其他用戶問題時可能洩漏。對策:訓練前做去識別化;部署時加上輸出過濾。\n問題 3 — 運算:銀行只有有限預算。對策:不自己訓練大模型,而是租用既有 LLM API,並用 LoRA 等輕量微調技術。\n問題 4 — 倫理與合規:歐洲 GDPR 與美國 ECOA 都規範模型決策必須可解釋。對策:加上「解釋模組」說明拒貸原因;保留人工複核流程。\n結論:即使技術可行,設計時必須把這些挑戰同等重要地放進系統設計中。",
      worked_example_en:
        "Scenario: a bank wants an LLM to triage loan applications.\nIssue 1 — bias: in the historic data, a certain ZIP code shows abnormally high rejection rates (possibly due to past discriminatory lending). A naive model will learn \"this ZIP -> reject.\" Fix: rebalance data, remove address features, add fairness checks.\nIssue 2 — privacy: applications contain national IDs, salaries, dependents. Carelessly, the model could leak them when answering other users. Fix: anonymize before training, add output filtering at deployment.\nIssue 3 — compute: the bank's budget is limited. Fix: do not pretrain from scratch — rent an LLM via API and apply lightweight fine-tuning (LoRA, prompt-tuning).\nIssue 4 — ethics and compliance: GDPR in Europe and ECOA in the US require explainable decisions. Fix: add an explanation module that produces human-readable rejection reasons; keep humans in the loop for borderline cases.\nTakeaway: even when the tech is ready, these four challenges belong in the design — not as afterthoughts.",
      diagram_description:
        "A 'risk pentagon' diagram. Center label: 'Generative AI'. Five spokes radiate to labeled risk nodes: 'Bias', 'Privacy Leakage', 'Compute Cost', 'Ethics/Misuse', 'Limited Originality'. Each spoke is paired with a small mitigation tag (e.g., 'Bias -> balanced data, fairness audit'; 'Privacy -> anonymization, output filter'). The visual reinforces that no single fix covers all five."
    }
  ],
  code_or_procedure_zh:
    "本章的關鍵實作概念是「LLM 工具呼叫」(tool calling),它是 LLM 變成代理人的第一步。下面是用 OpenAI Python SDK 實作機票預訂助理的核心流程,共分四步:\n\n步驟 1 — 定義工具函式:用 Python 寫一個 book_flight(passenger_name, from_city, to_city, travel_date) 函式,內部負責真正呼叫機票 API。\n\n步驟 2 — 用 JSON Schema 告訴 LLM 這個工具存在:把函式名稱、描述、參數型別寫成 tools 列表,傳給 LLM。\n\n步驟 3 — 呼叫 LLM:openai.chat.completions.create(model=\"gpt-4-turbo\", messages=messages, tools=tools)。傳入完整對話歷史,讓模型決定要直接回覆使用者、或要呼叫工具。\n\n步驟 4 — 處理回應:檢查 response.choices[0].message。如果 LLM 想呼叫工具,response 會包含 tool_calls 欄位,你把參數抽出來、呼叫真正的 book_flight、再把結果加回 messages,再呼叫一次 LLM 讓它把結果用自然語言報告給用戶。\n\n關鍵心法:你「不需要」寫 if-else 來判斷該不該問日期、該不該呼叫 API——LLM 在每一輪都會自己推斷。這正是「智能代理人」與「傳統 chatbot」最大的差別。實作時要注意:工具描述要寫得清楚,因為 LLM 是靠這段描述來決定何時呼叫;同時要做好錯誤處理,因為 LLM 偶爾會幻覺出不存在的參數。",
  code_or_procedure_en:
    "The key implementation idea in this chapter is LLM tool calling — the first step in turning an LLM into an agent. Here is the core loop, in four steps, for the Flight Booking Assistant using the OpenAI Python SDK:\n\nStep 1 — define the tool function: a Python function book_flight(passenger_name, from_city, to_city, travel_date) that actually hits the airline API.\n\nStep 2 — declare the tool to the LLM via JSON Schema: a tools list with the function name, description, and parameter types, passed in the request.\n\nStep 3 — call the LLM: openai.chat.completions.create(model=\"gpt-4-turbo\", messages=messages, tools=tools). Pass the full conversation history so the model can decide whether to reply directly or call the tool.\n\nStep 4 — handle the response: inspect response.choices[0].message. If the LLM wants to call the tool, the response includes a tool_calls field; extract the arguments, invoke real book_flight, append the result back to messages, then call the LLM again so it can phrase the outcome naturally to the user.\n\nMental model: you never write if-else logic for \"should I ask the date now?\" — the LLM reasons that every turn. That is the dividing line between an agent and a classic chatbot. Practical caveats: write the tool description carefully because the LLM uses it to decide when to invoke; add error handling because LLMs occasionally hallucinate parameters that do not exist.",
  key_takeaways_zh: [
    "生成式 AI 學的是「資料分佈」,不只是「分類邊界」;這是它與判別式模型的根本差異。",
    "VAE 重結構與可控性,GAN 重逼真,Transformer 重序列理解與生成——三大家族解決同一問題的不同路徑。",
    "Transformer 的自注意力讓模型在每個位置都能「動態挑選」要關注的上下文,這是 LLM 強大的關鍵。",
    "LLM 有六種主要型態(自回歸、僅編碼器、編碼-解碼、多模態、指令微調、領域專用),代理人是「組裝形式」而非新模型。",
    "代理人 = LLM(大腦)+ 工具(手腳)+ 規劃(思考)+ 對話狀態(記憶);機票預訂助理就是這個方程式的具體化。",
    "資料偏誤、隱私洩漏、運算成本、倫理風險與創造力限制——是生成式 AI 必須與技術同步處理的五大挑戰。"
  ],
  key_takeaways_en: [
    "Generative AI learns the distribution of data, not just a decision boundary — that is the line that separates it from discriminative models.",
    "VAEs prize structure and controllability, GANs prize photo-realism, Transformers prize sequence understanding and generation — three paths to the same goal.",
    "Self-attention lets a Transformer dynamically choose what context to focus on at every position — the key to LLM power.",
    "LLMs come in six main flavors (autoregressive, encoder-only, encoder-decoder, multimodal, instruction-tuned, domain-specific); an agent is an assembly pattern, not a new model class.",
    "Agent = LLM (brain) + tools (hands) + planning (thinking) + dialogue state (memory); the Flight Booking Assistant is this equation in practice.",
    "Bias, privacy leakage, compute cost, ethical risk, and limited originality are five challenges every generative-AI design must address alongside the engineering."
  ],
  common_pitfalls_zh: [
    "誤以為「會聊天的 LLM 就是代理人」——其實沒有工具呼叫與規劃,它只是會說話的模型。",
    "把 GAN 和 VAE 當成可互換的選項——它們的訓練穩定性、可控性、生成風格都不同,需根據任務選擇。",
    "認為訓練資料越多越好就能避免偏誤——資料的「多元性」比「數量」更重要,有偏的大資料會更危險。"
  ],
  common_pitfalls_en: [
    "Confusing \"a chatty LLM\" with \"an agent\" — without tool use and planning, it is only a talking model.",
    "Treating GANs and VAEs as interchangeable — they differ sharply in training stability, controllability, and output style, so the task must drive the choice.",
    "Believing that more training data alone removes bias — diversity matters more than quantity; a huge biased dataset is more dangerous than a small balanced one."
  ],
  quiz: [
    {
      question_zh: "下列哪個敘述最能描述生成式模型與判別式模型的差別?",
      question_en: "Which statement best captures the difference between generative and discriminative models?",
      options_zh: [
        "生成式模型比較快,判別式模型比較慢",
        "生成式模型學會資料的整體分佈並能取樣產生新樣本,判別式模型只學會分類邊界",
        "生成式模型只能處理文字,判別式模型只能處理圖像",
        "生成式模型不需要訓練資料,判別式模型需要"
      ],
      options_en: [
        "Generative models are faster; discriminative models are slower",
        "Generative models learn the full data distribution and can sample new examples, while discriminative models only learn the boundary between classes",
        "Generative models only handle text; discriminative models only handle images",
        "Generative models do not need training data; discriminative models do"
      ],
      answer_index: 1,
      explanation_zh: "判別式模型只學「邊界」(分類用),生成式模型學「整片領土」(分佈),所以後者可以取樣產生新的樣本。這個能力差異決定了所有生成式 AI 應用的可能性。",
      explanation_en: "Discriminative models learn the boundary used for classification; generative models learn the underlying distribution and can therefore sample new examples. That capability gap unlocks every generative AI application."
    },
    {
      question_zh: "為什麼 Transformer 的「自注意力」對大型語言模型如此關鍵?",
      question_en: "Why is self-attention so crucial to Transformer-based LLMs?",
      options_zh: [
        "它讓模型訓練變得更便宜",
        "它讓模型在每個位置都能動態決定要關注上下文中的哪些部分,捕捉長距離依賴",
        "它取代了所有的神經網路權重",
        "它只在多模態任務中有效"
      ],
      options_en: [
        "It makes training cheaper",
        "It lets the model dynamically decide, at each position, which parts of the context to focus on, capturing long-range dependencies",
        "It replaces every neural network weight",
        "It only matters for multimodal tasks"
      ],
      answer_index: 1,
      explanation_zh: "自注意力允許每個 token 為其他所有 token 算出「相關性權重」,所以模型能跨越長距離捕捉依賴關係。這是 RNN 做不到、而 Transformer 突破的地方,也是 LLM 能處理長文本的核心。",
      explanation_en: "Self-attention computes a relevance weight from each token to every other token, allowing the model to capture long-range dependencies that RNNs struggled with. That is the breakthrough that lets LLMs handle long contexts."
    },
    {
      question_zh: "從機票預訂助理的例子來看,什麼讓 LLM「從聊天機器人變成代理人」?",
      question_en: "From the Flight Booking Assistant example, what makes an LLM \"graduate\" from chatbot to agent?",
      options_zh: [
        "它的模型參數變得更多",
        "它被加上工具呼叫、規劃流程與對話狀態,能執行多步任務而不只是說話",
        "它使用了更新版本的 GPT",
        "它能回答更多語言"
      ],
      options_en: [
        "It has more model parameters",
        "It is wrapped with tool-calling, planning, and dialogue state so it can execute multi-step tasks rather than only talk",
        "It uses a newer GPT version",
        "It supports more languages"
      ],
      answer_index: 1,
      explanation_zh: "代理人不是新的模型,而是一種「應用組裝」——把 LLM 的語言能力,再加上工具、規劃、記憶,才能真正動手做事而不只是聊天。",
      explanation_en: "An agent is not a new model — it is an application assembly: language model + tools + planning + memory, all working together so the system can act, not just talk."
    },
    {
      question_zh: "下列哪一項「不是」緩解生成式 AI 偏誤的有效方法?",
      question_en: "Which of the following is NOT an effective way to reduce bias in generative AI?",
      options_zh: [
        "對少數類別資料進行過採樣 (oversampling)",
        "對多數類別資料進行欠採樣 (undersampling)",
        "確保訓練資料來源多元",
        "增加同樣偏向的訓練資料份量"
      ],
      options_en: [
        "Oversampling the minority class",
        "Undersampling the majority class",
        "Sourcing more diverse training data",
        "Simply adding more data from the same biased source"
      ],
      answer_index: 3,
      explanation_zh: "把同樣有偏的資料加更多,只會讓偏誤更嚴重。減少偏誤需要的是「多元性」而不只是「數量」。過採樣、欠採樣、多元資料來源都是常用的對策。",
      explanation_en: "Adding more data from the same biased source only deepens the bias. What you need is diversity, not volume. Oversampling, undersampling, and broadening sources are valid mitigations."
    },
    {
      question_zh: "為什麼指令微調 (instruction-tuned) LLM 特別適合作為代理人的核心?",
      question_en: "Why is an instruction-tuned LLM especially well-suited to sit at the core of an agent?",
      options_zh: [
        "它的模型體積比較小",
        "它經過特別訓練以可靠地遵循指令,減少模糊或偏離主題的回應,更適合驅動工具呼叫與規劃流程",
        "它不需要任何工具就能訂機票",
        "它只能用一種語言"
      ],
      options_en: [
        "It is smaller in size",
        "It is specifically trained to follow instructions reliably, reducing vague or off-topic responses, which makes it a dependable driver of tool calls and planning",
        "It can book flights without any tools",
        "It only supports one language"
      ],
      answer_index: 1,
      explanation_zh: "基礎 LLM 雖然會生成文字,但不一定會「聽指令」。指令微調後,模型對「請呼叫工具 X、按格式輸出 JSON」這類請求的服從度大幅提升,這對需要可靠工具呼叫的代理人系統至關重要。",
      explanation_en: "Base LLMs generate fluent text but do not always obey instructions. Instruction-tuned models follow directions like \"call tool X, return JSON in this format\" much more reliably — critical for an agent that must call tools dependably."
    }
  ]
};

const chapter2 = {
  id: 2,
  title_zh: "代理系統的核心原則",
  title_en: "Principles of Agentic Systems",
  subtitle_zh: "本章你會學到「自治、能動性、自主性」這三個區別代理人的核心概念,以及三種代理系統架構與多代理人合作的基本模式。",
  subtitle_en: "The core concepts that make something an agent — self-governance, agency, autonomy — plus the three agent architectures and how multiple agents collaborate.",
  overview_zh:
    "上一章我們認識了生成式 AI,並透過機票預訂助理瞥見了「代理人」的雛形。但什麼讓一個系統「夠資格」被稱為代理人?本章就從哲學與工程兩個角度給出答案。我們會先釐清三個常被混用、卻其實不同的概念:「自治 (self-governance)」是指系統能依自己的內部規則運作;「能動性 (agency)」是指它能代表用戶決定並執行動作;「自主性 (autonomy)」則是指它能在不被持續監督下行動。理解這三者的差別,你就有了評估任何系統「有多代理化」的尺度。接著我們會介紹三種代理人架構——「審議式 (deliberative)」走慢思路、重規劃,「反應式 (reactive)」走快思路、重即時,「混合式 (hybrid)」結合兩者。最後我們會升級機票預訂例子,讓它變成多代理人系統 (Multi-Agent System, MAS):航空代理人、飯店代理人、旅行社代理人各司其職、互相協商,共同完成完整旅遊行程。本章是後面所有實作章節的理論地基。",
  overview_en:
    "Chapter 1 introduced generative AI and gave us a first taste of agents through the Flight Booking Assistant. But what actually qualifies a system as an agent? This chapter answers from both a conceptual and an engineering angle. We first untangle three terms that are often blurred: self-governance (operating by its own internal rules), agency (the power to decide and act on the user's behalf), and autonomy (acting without constant supervision). Once you can distinguish them, you have a ruler for judging how \"agent-like\" any system really is. Next come the three architectural patterns — deliberative (slow thinking, heavy on planning), reactive (fast thinking, heavy on stimulus-response), and hybrid (combining the two). Finally we upgrade the flight booking example into a multi-agent system (MAS): airline agents, hotel agents, and a travel-agency agent each play their roles and negotiate with one another to assemble a full trip. This chapter is the theoretical foundation under every implementation chapter that follows.",
  learning_objectives_zh: [
    "區辨自治、能動性、自主性三個概念,並能用具體例子解釋。",
    "說明代理人的核心特徵:反應性、主動性、社交能力、學習能力、推理規劃能力。",
    "比較審議式、反應式、混合式三種架構的優缺點與適用情境。",
    "解釋什麼是多代理人系統 (MAS),以及它與單一代理人的關鍵差異。",
    "說明 MAS 中三種互動機制——合作、協調、協商——並舉例。"
  ],
  learning_objectives_en: [
    "Distinguish self-governance, agency, and autonomy with concrete examples.",
    "Describe the core characteristics of an intelligent agent: reactivity, proactiveness, social ability, learning, and reasoning/planning.",
    "Compare the strengths and weaknesses of deliberative, reactive, and hybrid architectures.",
    "Explain what a multi-agent system (MAS) is and how it differs from a single-agent design.",
    "Identify the three MAS interaction mechanisms — cooperation, coordination, negotiation — with examples."
  ],
  sections: [
    {
      id: "2.1",
      heading_zh: "三個容易混淆的概念:自治、能動性、自主性",
      heading_en: "Three Easily Confused Concepts: Self-Governance, Agency, Autonomy",
      explanation_zh:
        "這三個詞英文中是 self-governance、agency 與 autonomy,在中文與英文裡都常被當成同義詞,但其實它們指向三件不同的事。「自治 (self-governance)」描述系統的「內部治理結構」——它有自己的規則、有自我組織、自我調節、自我適應、自我優化、自我決定的能力。換句話說,它不需要外人時時干預,而是靠自己的內部邏輯運作。「能動性 (agency)」則聚焦在「決策權與意圖」——這個系統有沒有「決定的權力」?它的決定是有意圖、有目標的嗎?它是否需要為自己決策的後果負責?能動性是讓系統「代表用戶做事」的核心。「自主性 (autonomy)」最具體,談的是「獨立行動的程度」——這系統能在多大範圍內不靠人類介入就把事情做完?自主性又可分為三層:操作自主(能執行任務)、功能自主(能依環境調整策略)、階層自主(能在組織中做多大的決策)。簡單對應到我們的旅遊代理人:它「自治」是因為它有自己的內部規則(例如永遠先確認日期再查航班);它有「能動性」是因為它能代表用戶決定要不要訂這張票、要不要打折比價;它有「自主性」是因為它能不問人類就完成查詢與訂位。",
      explanation_en:
        "These three terms — self-governance, agency, autonomy — get treated as synonyms in everyday speech, but they point at three different things. Self-governance is about internal structure: the system runs by its own rules, with capacities for self-organization, self-regulation, self-adaptation, self-optimization, and self-determination. It does not need someone hovering over it; its inner logic drives behavior. Agency is about decisional power and intent: does the system have the authority to choose? Are its choices purposeful, goal-directed? Is it accountable for the consequences? Agency is what lets a system act on the user's behalf. Autonomy is the most concrete: how much can the system actually do without human intervention? It splits into three layers: operational autonomy (can execute tasks), functional autonomy (can adapt strategy to context), and hierarchical autonomy (how much decision power it holds inside a larger structure). Applied to our travel agent: it is self-governed because it has its own rules (always confirm dates before searching flights); it has agency because it can decide on the user's behalf which option is best; it has autonomy because it can complete searches and bookings without asking a human at every step.",
      analogy_zh:
        "想像三種角色。自治像「家庭主婦」:她有自己的家規,知道什麼時候洗衣、什麼時候煮飯,不需要老闆指示。能動性像「銀行授權代理人」:她能代你簽合約,因為你授權她做決定。自主性像「司機」:你坐在後座,但他能獨立完成從家裡開到機場的整段路。三者可以共存,也可以缺一——一個系統可以「自治」卻沒有「能動性」(例如自轉的洗衣機只是按程序跑、不替你決策任何事)。",
      analogy_en:
        "Three roles help: self-governance is a homemaker who runs the house by her own routines without needing a boss. Agency is a power-of-attorney representative who can sign contracts on your behalf because you delegated decision authority. Autonomy is a chauffeur who can drive you from home to the airport without you giving turn-by-turn instructions. The three can coexist or stand alone — a self-governing washing machine has no agency over your choices; it simply runs its cycle.",
      worked_example_zh:
        "情境:智能恆溫器 (Nest)\n自治面向:它有內部規則——「白天 24 度,晚上 22 度,沒人時降低 3 度」。這些規則自動執行,不需要人介入。\n能動性面向:它代表你「決定」何時開暖氣,並承擔「決定錯誤」的後果(例如太冷被你抱怨)。\n自主性面向:它無需你開關就能單獨運作。但它的階層自主有限——它不能替你決定要不要換新空調系統,那需要更高層級的決策。\n進階版:加上 AI 後,恆溫器開始「學習」你的偏好——這就觸及第三章的學習機制。三個概念就像三個維度,讓你判斷一個系統「代理化」的程度。",
      worked_example_en:
        "Scenario: a smart thermostat like Nest.\nSelf-governance: it has internal rules — 24C by day, 22C at night, drop 3 more when nobody is home. The rules run themselves.\nAgency: it decides on your behalf when to fire the heater and is accountable when it gets things wrong (you complain when the room is cold).\nAutonomy: it operates without you flipping switches. But its hierarchical autonomy is bounded — it cannot decide to swap out your HVAC system; that is a higher-level decision.\nLevel up: add learning, and the thermostat starts predicting your preferences (a topic we revisit in Chapter 3). The three concepts are dimensions, not synonyms — together they let you judge how \"agentic\" any system actually is.",
      diagram_description:
        "A Venn-diagram-like triple-overlap chart. Three intersecting circles labeled 'Self-Governance', 'Agency', 'Autonomy'. In each circle, a small icon and keyword: gears (internal rules) for self-governance, a signature (decision power) for agency, a steering wheel (independent action) for autonomy. The central triple overlap is labeled 'Full Agentic System' with the Flight Booking Assistant as the example."
    },
    {
      id: "2.2",
      heading_zh: "智能代理人的五個核心特徵",
      heading_en: "The Five Core Characteristics of an Intelligent Agent",
      explanation_zh:
        "什麼樣的系統值得被稱為「智能代理人」?學界長期歸納出五個核心特徵。第一是「反應性 (reactivity)」:系統能即時感知環境變化並回應。例如自駕車前方突然出現行人,系統必須在 0.1 秒內反應,而不是想三秒再煞車。第二是「主動性 (proactiveness)」:它不只被動回應,還能「先一步」思考——預測未來需求、主動規劃。一個好的助理不會等你問「我明天的會議在哪」才告訴你,而會主動提醒你下午會議地點離公司比較遠、要提早出發。第三是「社交能力 (social ability)」:在多代理人環境中,它能與其他代理人(或人類)溝通、協調、協商。第四是「學習與適應 (learning and adaptation)」:它能從過去經驗中學習,改善未來表現——這通常透過監督學習、強化學習或進化演算法達成。第五是「推理與規劃 (reasoning and planning)」:它能分析複雜情境、制定策略、做出明智決策。這五者不是「全有或全無」的二元判斷,而是一個光譜——一個簡單的腳本機器人可能只有「反應性」,而一個成熟代理人應該五項都具備。看待任何 AI 系統時,試著問:它在這五個維度上各得幾分?",
      explanation_en:
        "What earns a system the label \"intelligent agent\"? The literature converges on five characteristics. First, reactivity: the system senses environmental change and responds in real time. A self-driving car must brake within 100 ms of detecting a pedestrian, not pause to ruminate. Second, proactiveness: it does not just wait — it anticipates needs and plans ahead. A good assistant warns you that tomorrow's afternoon meeting is across town so leave early, instead of waiting for you to ask. Third, social ability: in multi-agent settings, it communicates, coordinates, and negotiates with other agents (or humans). Fourth, learning and adaptation: it improves over time from experience, via supervised learning, reinforcement learning, or evolutionary methods. Fifth, reasoning and planning: it analyzes complex situations, devises strategies, and makes informed decisions. These are not all-or-nothing — they are a spectrum. A simple script bot has only reactivity; a mature agent scores on all five. When evaluating any AI system, ask: how does it score across these five axes?",
      analogy_zh:
        "想像一位優秀的私人助理。反應性像「接到老闆電話五秒內接起」;主動性像「會議前一小時主動提醒並準備好資料」;社交能力像「能跟司機、餐廳、客戶協調行程」;學習能力像「記住老闆討厭某家餐廳,以後不再訂」;推理規劃像「面對突發出差,能在十分鐘內排出三套行程」。少了任何一項,他就是個「不夠優秀」的助理——AI 代理人也一樣。",
      analogy_en:
        "Picture a top-tier executive assistant. Reactivity = picks up the boss's call within five seconds. Proactiveness = reminds the boss of a meeting an hour before, papers ready. Social ability = coordinates with the driver, the restaurant, and the client. Learning = remembers the boss hates a certain restaurant and never books it again. Reasoning/planning = when a sudden business trip pops up, drafts three itineraries in ten minutes. Drop any one trait and the assistant is merely \"okay.\" Same for AI agents.",
      worked_example_zh:
        "情境:評估一個「智能郵件助理」是否真的是代理人\n反應性:檢查收件匣有新郵件 -> 即時提醒。✓\n主動性:在你開會前主動草擬「我會議中,稍後回覆」自動回信。✓\n社交能力:能與你的行事曆代理人協調「這封信涉及週四的會議,要不要排個會議?」✓\n學習:從你過去刪信的習慣中學會,自動歸類某些寄件人為「低優先」。✓\n推理規劃:面對 50 封新郵件,自動排出「立即回覆 / 今天回覆 / 本週回覆 / 可忽略」四類並給出建議行動。✓\n結論:五項齊備,是個真正的代理人。如果只有反應性與主動性(例如只會提醒、不會分類也不會學),那它比較像「進階通知系統」,而不是代理人。",
      worked_example_en:
        "Scenario: evaluating a smart inbox assistant.\nReactivity: new mail arrives -> instant alert. ✓\nProactiveness: during a meeting, auto-drafts \"I'm in a meeting, will reply later.\" ✓\nSocial ability: coordinates with your calendar agent — \"this thread is about Thursday's meeting; should I schedule a call?\" ✓\nLearning: learns from which senders you delete, auto-classifies certain senders as low priority. ✓\nReasoning/planning: faces 50 new emails, sorts them into \"reply now / today / this week / ignore\" with suggested actions. ✓\nVerdict: five out of five — a genuine agent. If it only had reactivity and proactiveness (alerts + canned replies), it would be a smart notifier, not an agent.",
      diagram_description:
        "A radar / spider chart with five axes: Reactivity, Proactiveness, Social Ability, Learning and Adaptation, Reasoning and Planning. Two overlaid polygons: a small one labeled 'Script Bot' (mostly only Reactivity) and a large one labeled 'Mature Agent' (high on all five axes). The visual makes immediate sense of \"how agentic\" something is on a scale rather than a binary."
    },
    {
      id: "2.3",
      heading_zh: "三種架構:審議式、反應式、混合式",
      heading_en: "Three Architectures: Deliberative, Reactive, Hybrid",
      explanation_zh:
        "代理人的「內部設計」可以分成三大流派。第一種是「審議式 (deliberative)」架構,也叫「知識基礎」或「符號式」架構。它遵循「感知-規劃-行動 (sense-plan-act)」循環:先感知環境、更新內部知識庫,再根據知識庫進行邏輯推理與規劃,最後執行行動。它的強項是處理需要複雜推理、長期規劃的問題,如棋類遊戲、機器人路徑規劃、智能輔導系統。缺點是「慢」——維護龐大知識庫並進行推理需要時間,在快速變化的環境中可能跟不上。第二種是「反應式 (reactive)」架構,也叫「行為基礎」或「刺激-反應」架構。它不維護世界模型,而是直接把「感知」映射到「動作」,通常用條件規則或淺層神經網路。它的強項是快、穩、抗噪——適合即時控制系統(如機器人避障)、視訊遊戲 AI、簡單工業控制。缺點是不會長期規劃、不會抽象推理、難以學習。第三種是「混合式 (hybrid)」架構,把前兩者疊起來——下層用反應式處理即時刺激(立刻避開行人),上層用審議式做長期規劃(規劃從這個十字路口到機場的路線)。兩層之間有資訊交換:反應層把當下狀態回報給審議層,審議層下達高階目標給反應層。現代複雜代理人(如自駕車、Boston Dynamics 機器人)幾乎都是混合式。",
      explanation_en:
        "Three schools of internal design dominate. First, deliberative (also called knowledge-based or symbolic) architectures follow a sense-plan-act loop: perceive the environment, update an internal knowledge base, reason and plan from that knowledge, then execute. They shine on problems that require deep reasoning and long-horizon planning — chess engines, robot path planning, intelligent tutoring systems. The trade-off is speed: maintaining and reasoning over a big knowledge base costs time, which is risky in fast-changing environments. Second, reactive (behavior-based or stimulus-response) architectures keep no world model and instead map perceptions directly to actions using simple condition-action rules or shallow networks. They are fast, robust, and noise-tolerant — perfect for real-time control like robot obstacle avoidance, game AI, simple industrial control. The weakness: no long-term planning, no abstraction, limited learning. Third, hybrid architectures stack the two — a reactive lower layer handles instantaneous stimuli (swerve to avoid a pedestrian), while a deliberative upper layer handles long-horizon planning (the route from this intersection to the airport). The two layers exchange information: the reactive layer reports situational state upward; the deliberative layer sends high-level goals downward. Modern complex agents — self-driving cars, Boston Dynamics robots — are almost always hybrid.",
      analogy_zh:
        "想像三位廚師。審議式廚師:像高級餐廳主廚,接到訂單後先翻食譜、規劃菜單、計算時間,十分鐘後才開火,但端出來的菜精緻無比。反應式廚師:像鐵板燒師傅,看到客人皺眉立刻調整火候,動作飛快但不擅長設計新菜單。混合式廚師:像 MasterChef 決賽選手,既能在事前精心規劃菜單(審議),又能在烹飪過程中即時應變(反應),這才是現實世界裡多數複雜場景需要的能力。",
      analogy_en:
        "Three chefs help. The deliberative chef is a fine-dining executive: orders come in, he reviews recipes, plans courses, calculates timing — fire is lit ten minutes later, but the result is exquisite. The reactive chef is a teppanyaki master: customer frowns -> flame adjusted instantly; lightning reflexes, weak at designing new menus. The hybrid chef is a MasterChef finalist who plans the menu beforehand (deliberation) and adapts in real time at the grill (reaction) — the combination most complex real-world scenarios actually demand.",
      worked_example_zh:
        "情境:設計一個倉庫搬運機器人。\n純審議式方案:機器人載入整個倉庫地圖、所有貨架位置、所有訂單。每次接到搬運指令,計算最佳路徑,然後執行。問題:如果突然有人走進通道,機器人需要重新整套規劃,延遲太久,可能撞人。\n純反應式方案:機器人只裝避障感測器,看到東西就閃。問題:它可能繞遠路、無法計算最短路徑、無法應對「先搬 A 再搬 B」這種多步任務。\n混合式方案:上層審議模組規劃「從起點到 A 貨架的最佳路徑」,下層反應模組沿路徑前進但隨時準備避開突發物。如果有人擋路,反應層繞行,完成後審議層重新規劃剩下路徑。結果:既能完成複雜任務,又能即時應變——這就是 Amazon 倉庫機器人實際採用的設計哲學。",
      worked_example_en:
        "Scenario: a warehouse picking robot.\nPurely deliberative: robot loads the full warehouse map, every shelf, every order, computes an optimal path, then drives. Problem: if a person steps into the aisle, the robot must replan from scratch — too slow, possibly unsafe.\nPurely reactive: robot only has obstacle sensors and steers around things. Problem: it takes long detours, never finds the shortest path, and cannot handle multi-step tasks like \"pick A before B.\"\nHybrid: a deliberative upper layer plans the optimal route to shelf A; a reactive lower layer follows it while ready to swerve. When someone blocks the aisle, the reactive layer steps around; once clear, the deliberative layer adjusts the remaining path. The result is complex tasks plus real-time agility — the design philosophy behind Amazon-style warehouse robots.",
      diagram_description:
        "Three side-by-side architecture diagrams. Left (Deliberative): Sensors -> Knowledge Base -> Planner/Reasoner -> Actuators. A small clock icon shows 'slower, deep thinking'. Middle (Reactive): Sensors -> Simple Rule Lookup -> Actuators (no knowledge base). A lightning icon shows 'fast, no memory'. Right (Hybrid): two stacked layers — top deliberative box (planner + KB) and bottom reactive box (rule lookup), with two-way arrows between them. Sensors feed both; actuators are driven by the reactive layer. Caption: 'High-level goals down, situational state up.'"
    },
    {
      id: "2.4",
      heading_zh: "從單代理人到多代理人系統 (MAS)",
      heading_en: "From Single Agent to Multi-Agent System (MAS)",
      explanation_zh:
        "現實世界裡的複雜問題很少能靠單一代理人解決,於是「多代理人系統 (Multi-Agent System, MAS)」應運而生。MAS 由多個自治代理人組成,每一位都有自己的感知、推理、決策能力,但又能彼此互動,共同完成個別代理人無法獨立達成的任務。MAS 有幾個關鍵特性:每個代理人都「自治」(各自決策);代理人之間透過協議「互動」;系統具備「適應性」(能應對環境變化);採用「分散式控制」(沒有唯一中央控制者);具備「可擴展性」(可以增加或減少代理人);代理人可以「異質」(不同架構、能力、目標);資料與知識「去中心化」儲存(沒有單點故障)。MAS 的優勢在於分散問題求解、利用集體智慧、容錯能力強。應用範圍極廣:供應鏈管理(供應商、製造商、零售商各自決策但合作)、交通控制(每輛車是代理人)、機器人協同(多機器人在工廠合作)、環境監測(感測器網路)、虛擬模擬(經濟模型、軍事模擬)。理解 MAS 時要記得:它不是「多個 LLM 同時跑」那麼簡單,而是要設計「他們如何溝通、何時合作、如何解決衝突」。",
      explanation_en:
        "Real-world complexity rarely fits inside a single agent, which is why multi-agent systems (MAS) exist. A MAS is a collection of autonomous agents — each with its own perception, reasoning, and decision-making — that interact to solve problems no single agent could tackle alone. Key properties: each agent is autonomous; agents interact via defined protocols; the system is adaptive; control is distributed (no single boss); it is scalable (add or remove agents); agents can be heterogeneous (different architectures, capabilities, goals); and data and knowledge are decentralized (no single point of failure). MAS strengths include distributed problem-solving, collective intelligence, and robust fault tolerance. Application domains are wide: supply chain management (suppliers, manufacturers, retailers each decide locally but coordinate), traffic control (each vehicle is an agent), robotics (multiple factory robots), environmental monitoring (sensor networks), and simulations (economic, military). One reminder: MAS is not \"several LLMs running in parallel\" — the hard work is designing how they talk, when they cooperate, and how conflicts are resolved.",
      analogy_zh:
        "想像一個交響樂團。每位音樂家(代理人)有自己的樂器、自己的譜、自己的演奏判斷力(自治)。沒有指揮可不可以?可以——但需要他們彼此聽、彼此配合(互動)。如果某個樂手身體不適換人,音樂仍能繼續(可擴展、容錯)。整體出來的音樂遠勝任何一位獨奏(集體智慧)。MAS 就像沒有中央指揮的交響樂團——複雜、強韌、靈活,但需要精心設計協作規則。",
      analogy_en:
        "Picture an orchestra. Each musician (agent) has their own instrument, score, and judgment about phrasing (autonomy). Can it work without a conductor? Yes — but the musicians must listen and coordinate (interaction). If one falls ill and is replaced, the music continues (scalability, fault tolerance). The combined performance is richer than any single instrument (collective intelligence). A MAS is an orchestra without a central conductor — complex, resilient, flexible, but it demands carefully designed rules of collaboration.",
      worked_example_zh:
        "情境:把單一機票預訂助理擴展成完整旅遊套裝系統。\n單一代理人版本:一個 LLM 助理處理所有事——查機票、訂飯店、租車。問題:LLM 必須懂全部 API,任何一個出錯整個系統就垮。\nMAS 版本:\n- 航空代理人:專門查與訂機票,熟悉各家航空 API。\n- 飯店代理人:專門查與訂住宿,熟悉 Booking、Agoda、Airbnb 等。\n- 租車代理人:處理租車與接送。\n- 旅行社代理人 (Travel Agency Agent, TA):做為總協調者,接收使用者需求,委派子任務給其他代理人,最後彙整成套裝行程。\n流程:用戶說「下週末去東京三天」-> TA 把任務分解 -> 並行請航空代理人查航班、飯店代理人查住宿 -> 收回結果 -> TA 組合成 3 個套裝建議呈給用戶。\n好處:任何一個代理人故障(例如飯店 API 掛掉),其他仍能運作;新增「景點推薦代理人」也很容易。這就是 MAS 的力量。",
      worked_example_en:
        "Scenario: expand the single Flight Booking Assistant into a full trip-package system.\nSingle-agent version: one LLM handles flights, hotels, cars. Problem: that one LLM must know every API; any failure cascades.\nMAS version:\n- Airline Agent: queries and books flights, fluent in airline APIs.\n- Hotel Agent: handles lodging via Booking, Agoda, Airbnb.\n- Car Agent: rental cars and shuttles.\n- Travel Agency Agent (TA): top-level coordinator that receives user requests, delegates subtasks, and assembles the final package.\nFlow: user says \"Tokyo, next weekend, three days\" -> TA decomposes the task -> fires Airline and Hotel agents in parallel -> gathers results -> composes three package options for the user.\nBenefits: if the Hotel API dies, other agents keep working; adding an Attractions Agent later is straightforward. That is the leverage of MAS.",
      diagram_description:
        "A MAS hub-and-spoke diagram. Center: 'Travel Agency Agent (TA)' shown as the coordinator. Spokes connect to four peripheral nodes: 'Airline Agent', 'Hotel Agent', 'Car Agent', and a future 'Attractions Agent' (drawn with a dashed border to suggest extensibility). Bidirectional arrows between TA and each peripheral agent. A user box on the left talks to TA only. Below, a label: 'TA decomposes; specialists execute; TA reassembles.'"
    },
    {
      id: "2.5",
      heading_zh: "MAS 的三種互動機制:合作、協調、協商",
      heading_en: "Three Interaction Mechanisms in MAS: Cooperation, Coordination, Negotiation",
      explanation_zh:
        "多代理人在一起,該怎麼互動?根據目標衝突程度,可以分成三種模式。「合作 (Cooperation)」是最理想的情況——所有代理人目標一致,彼此分工、共享資源以達成共同目標。災難救援是典型案例:消防機器人、醫療無人機、人類救援隊都有「拯救生命」的共同目標,各自貢獻所長。「協調 (Coordination)」處理「目標不衝突但有相依性」的情境。例如工廠生產線上的兩個機器手臂,目標都是「組裝產品」,但要避免同時抓同一個零件、避免碰撞,所以需要協調動作順序與時序。協調通常透過排程、資源分配、衝突解決等機制完成。「協商 (Negotiation)」則處理「目標可能衝突、資源有限」的情境。代理人之間互相提案、反提案,最後達成妥協。旅遊例子裡:航空代理人想賣高價、飯店代理人想湊滿房、旅行社代理人想壓低總價給用戶——各方利益並不完全一致,需要協商。協商機制常採用拍賣、投票、議價策略或博弈論。理解這三層,你就能根據場景選對協作模式:目標一致用合作,有相依性用協調,有衝突用協商。",
      explanation_en:
        "How do agents interact? Three modes, depending on how aligned their goals are. Cooperation is the friendliest: all agents share the same goal and divide labor or share resources to reach it. Disaster rescue is canonical — firefighting robots, medical drones, and human teams all aim to save lives and each contributes what they can. Coordination handles cases where goals do not conflict but actions are interdependent. Two robotic arms on the same line both aim to assemble products, but must avoid grabbing the same part or colliding — that requires scheduling, resource allocation, and conflict resolution. Negotiation tackles cases where goals partly conflict and resources are limited. Agents make offers and counter-offers and reach a compromise. In the travel example: the airline agent wants premium fares, the hotel wants full occupancy, the travel agency wants the lowest total for the user — interests are not fully aligned, so negotiation is needed. Negotiation tools include auctions, voting protocols, bargaining strategies, and game-theoretic methods. Match the mode to the situation: aligned goals -> cooperation; interdependent goals -> coordination; conflicting goals -> negotiation.",
      analogy_zh:
        "用一場婚禮籌備來比喻。合作像是「新郎家與新娘家都想辦一場美好的婚禮」——目標一致,大家分工準備。協調像是「婚禮攝影師與化妝師的時序」——兩人不衝突,但化妝必須在拍攝前完成,需要時間表協調。協商像是「新郎想要西式婚禮、新娘想要中式婚禮、預算有限」——目標衝突、資源有限,雙方來回討論,最後決定「中式儀式 + 西式宴客」這種混合方案。這三種互動實際上常常同時存在,代理人系統設計者要識別每對代理人之間的關係屬於哪一種。",
      analogy_en:
        "A wedding planning analogy. Cooperation: both families want a wonderful wedding — aligned goals, divided labor. Coordination: the photographer and the makeup artist do not conflict, but makeup must finish before photos start — they need a shared schedule. Negotiation: groom wants a Western ceremony, bride wants a Chinese one, budget is fixed — conflicting goals and limited resources, so back-and-forth produces a compromise like \"Chinese ceremony plus Western reception.\" All three modes typically coexist in a real system; the designer's job is to identify which mode fits each pair of interacting agents.",
      worked_example_zh:
        "情境:旅遊套裝 MAS 同時用到三種互動。\n合作:航空代理人與飯店代理人都想「成功完成這趟旅遊預訂」,因為都能賺錢。它們合作分享「使用者偏好(早班、靠窗、含早餐)」資訊。\n協調:旅行社代理人需要從航空代理人取得「到達時間」,才能讓飯店代理人安排「對應的入住時間」。兩者沒有衝突,但時序相依——這是協調。例如:飛機晚上 8 點到,飯店就不能安排下午 3 點入住;TA 必須協調兩者的時間軸。\n協商:當預算有限時,航空代理人可能說「最便宜的航班是 $400」,飯店代理人說「最便宜的房間是 $300」,旅行社代理人發現用戶預算 $600 -> 旅行社代理人就要分別跟航空(能否降到 $350?)、飯店(能否找 $250 的選項?)協商。可能用「拍賣」機制,讓多家航空與多家飯店出價競爭。\n結果:三種互動同時上演,共同完成一筆訂單。設計 MAS 時,清楚劃分每對代理人之間是哪種關係,系統運行才會順暢。",
      worked_example_en:
        "Scenario: the travel-package MAS uses all three modes at once.\nCooperation: Airline Agent and Hotel Agent both want the booking to succeed because both earn commission. They cooperate by sharing user preferences (morning flight, window seat, breakfast included).\nCoordination: the Travel Agency needs the Airline Agent's arrival time before the Hotel Agent can set check-in time. No conflict, but timing is dependent. If the flight lands at 8 pm, the hotel cannot expect a 3 pm check-in; the TA coordinates the timelines.\nNegotiation: budget is tight. The Airline Agent says \"$400 is the floor.\" The Hotel Agent says \"$300 is the floor.\" The user's budget is $600. The TA negotiates with both — can the airline drop to $350? can the hotel find a $250 room? An auction-style protocol may let multiple airlines and hotels bid for inclusion in the package.\nOutcome: all three modes operate simultaneously. When designing a MAS, label each pair of agents with its dominant mode so the protocols stay clean.",
      diagram_description:
        "A three-panel diagram. Panel 1 (Cooperation): two agents pointing at a single shared goal star, joined by a + sign. Panel 2 (Coordination): two agents on a shared timeline, with arrows showing 'A must finish before B starts', plus a small clock icon. Panel 3 (Negotiation): two agents at a table with speech bubbles offering and counter-offering numbers, plus a balance-scale icon. Below all three: an integrated travel-MAS scene showing TA, Airline Agent, Hotel Agent with each pair labeled by their dominant interaction mode."
    }
  ],
  code_or_procedure_zh:
    "本章的演算法核心是「旅遊套裝多代理人系統」的協作流程。在虛擬碼層面,可以拆成五步:\n\n步驟 1 — 初始化:建立航空代理人集合 A、飯店代理人集合 H,以及一個總協調者旅行社代理人 TA。\n\n步驟 2 — 收集選項:當使用者送出旅遊需求(出發地、目的地、日期),TA 把任務廣播給所有 Ai 與 Hj。每個 Ai 回傳該航空的可用航班,每個 Hj 回傳該飯店在該城市的可用房間。這是「合作」模式——大家共享資訊。\n\n步驟 3 — 組裝套裝:TA 把收回的航班與房間排列組合,呼叫 CompilePackages(flights, rooms),產出多個候選旅遊套裝(每個套裝 = 1 航班 + 1 飯店)。在此過程中需要「協調」——飯店入住時間必須晚於航班到達時間。\n\n步驟 4 — 呈現與選擇:TA 把套裝呈給使用者(或下游決策邏輯)選一個。如果預算不夠,TA 啟動「協商」:跟對應的 Ai 與 Hj 議價,或者重新挑組合。\n\n步驟 5 — 執行預訂:選定套裝後,並行呼叫 selected.airline.BookFlight() 與 selected.hotel.BookRoom()。若兩者都成功,回傳預訂確認;否則回傳失敗通知並啟動回滾機制。\n\n額外的背景迴圈:定期執行 UpdateDynamicPricing(),讓每個代理人更新自己的價格資料。實作時注意:代理人之間的通訊協議必須清楚(訊息格式、超時、重試);至少要設計一個「衝突解決機制」(例如同時兩個用戶搶最後一間房怎麼辦);並且要記錄每筆協商的歷史以便除錯。",
  code_or_procedure_en:
    "The chapter's core algorithm is the travel-package multi-agent workflow. In pseudocode it has five steps:\n\nStep 1 — initialize: create a set of Airline Agents A, a set of Hotel Agents H, and a Travel Agency Agent (TA) as coordinator.\n\nStep 2 — gather options: when a user submits a request (origin, destination, dates), TA broadcasts the request to every Ai and Hj. Each Ai returns available flights; each Hj returns available rooms. This is cooperation — agents share information freely.\n\nStep 3 — compile packages: TA combines flights and rooms via CompilePackages(flights, rooms), producing several candidate packages (each = 1 flight + 1 hotel). Coordination matters here: a hotel check-in must follow a flight arrival in time.\n\nStep 4 — present and select: TA shows the packages to the user (or downstream selector). If budget is tight, TA triggers negotiation: bargain with Ai or Hj for discounts, or recombine.\n\nStep 5 — execute booking: once selected, call selected.airline.BookFlight() and selected.hotel.BookRoom() in parallel. If both succeed, return confirmation; otherwise return failure and run a rollback (e.g., release the held flight if the hotel booking failed).\n\nA background loop also runs: periodic UpdateDynamicPricing() so each agent refreshes its prices. Practical tips: define inter-agent message protocols clearly (format, timeout, retry); design at least one conflict-resolution mechanism (what if two users grab the same last room?); and log every negotiation so you can debug emergent behavior.",
  key_takeaways_zh: [
    "自治 = 內部規則,能動性 = 決策權,自主性 = 獨立行動;三者不同但常並存,是評估「代理化程度」的三維尺度。",
    "智能代理人的五個核心特徵:反應性、主動性、社交能力、學習適應、推理規劃——這是一個光譜,不是有/無。",
    "審議式架構善於規劃但慢,反應式架構快但短視,混合式架構結合兩者,是複雜現實系統的主流選擇。",
    "多代理人系統 (MAS) 由多個自治代理人組成,具備分散控制、可擴展、容錯、異質性等優勢。",
    "MAS 的三種互動模式:目標一致用「合作」、有相依性用「協調」、有衝突用「協商」。",
    "代理人不是「單體越強越好」,而是「系統設計合不合理」——MAS 思維是把複雜問題拆成可管理的多個專家。"
  ],
  key_takeaways_en: [
    "Self-governance = internal rules, agency = decision authority, autonomy = independent action; three distinct dimensions that together measure how \"agentic\" a system is.",
    "Five core traits of an intelligent agent: reactivity, proactiveness, social ability, learning/adaptation, reasoning/planning — a spectrum, not a checkbox.",
    "Deliberative architectures plan well but are slow; reactive ones are fast but short-sighted; hybrids combine both and dominate real-world complex systems.",
    "A multi-agent system (MAS) consists of multiple autonomous agents and offers distributed control, scalability, fault tolerance, and heterogeneity.",
    "Three MAS interaction modes: cooperation when goals align, coordination when goals are interdependent, negotiation when goals conflict.",
    "Stronger does not always mean more monolithic — MAS thinking decomposes complex problems into manageable specialist agents."
  ],
  common_pitfalls_zh: [
    "把「自治」「能動性」「自主性」當成同義詞——這會讓你低估系統設計的細節層次。",
    "以為審議式或反應式必擇其一——絕大多數實用代理人需要混合架構。",
    "在 MAS 中忘記設計衝突解決機制——一旦多個代理人爭奪同一資源,沒有規則就會死鎖或競態。"
  ],
  common_pitfalls_en: [
    "Treating self-governance, agency, and autonomy as synonyms — that flattens the design choices you need to make.",
    "Believing you must pick either deliberative or reactive — most useful agents need both layers.",
    "Forgetting to design conflict resolution in a MAS — once multiple agents compete for the same resource, lack of rules leads to deadlocks or race conditions."
  ],
  quiz: [
    {
      question_zh: "下列哪一個情境最能體現代理人的「能動性 (agency)」而非單純的「自主性 (autonomy)」?",
      question_en: "Which scenario best illustrates an agent's agency rather than mere autonomy?",
      options_zh: [
        "智能恆溫器按照預設時程開關暖氣",
        "AI 助理代用戶決定接受哪一個會議邀請並回覆對方",
        "掃地機器人感應到障礙物就轉彎",
        "電腦自動安裝系統更新"
      ],
      options_en: [
        "A smart thermostat following its preset schedule",
        "An AI assistant deciding on the user's behalf which meeting invite to accept and replying",
        "A robot vacuum turning when its sensor detects an obstacle",
        "A computer auto-installing system updates"
      ],
      answer_index: 1,
      explanation_zh: "能動性的關鍵是「代表用戶做出有意圖的決定」。AI 助理在回覆會議邀請時,不只是執行預設程序,而是基於用戶目標做出有後果的選擇——這是能動性。恆溫器與掃地機器人是自主性(不需人介入),但決策權有限。",
      explanation_en: "Agency is about making purposeful decisions on the user's behalf with real consequences. Replying to a meeting invite on the user's behalf is exactly that. A thermostat or vacuum is autonomous (no human in the loop) but has limited decision authority."
    },
    {
      question_zh: "如果你要設計一個自駕車的內部架構,最合理的選擇是?",
      question_en: "If you were designing the internal architecture of a self-driving car, the most reasonable choice would be:",
      options_zh: [
        "純審議式,因為自駕車需要規劃路線",
        "純反應式,因為自駕車需要快速反應",
        "混合式,因為自駕車同時需要長期路線規劃與即時避障",
        "三種架構任選都一樣"
      ],
      options_en: [
        "Purely deliberative — self-driving cars need to plan routes",
        "Purely reactive — self-driving cars need fast reflexes",
        "Hybrid — self-driving cars need both long-term route planning and real-time obstacle avoidance",
        "All three are equivalent for this problem"
      ],
      answer_index: 2,
      explanation_zh: "自駕車是混合式架構的經典案例。下層反應式處理 0.1 秒內的避障與煞車,上層審議式規劃從 A 到 B 的最佳路徑、考慮路況、油量、塞車等長期因素。少了任一層都不安全。",
      explanation_en: "A self-driving car is the canonical hybrid case. The lower reactive layer handles sub-second braking and avoidance; the upper deliberative layer plans the route from A to B, considering traffic, fuel, congestion. Missing either layer is unsafe."
    },
    {
      question_zh: "在 MAS 中,「協調 (coordination)」與「協商 (negotiation)」的關鍵差異是什麼?",
      question_en: "In a MAS, what is the key difference between coordination and negotiation?",
      options_zh: [
        "協調用於人類,協商用於 AI",
        "協調處理「目標不衝突但有相依性」的情況,協商處理「目標可能衝突、資源有限」的情況",
        "協調比較慢,協商比較快",
        "兩者完全相同"
      ],
      options_en: [
        "Coordination is for humans; negotiation is for AI",
        "Coordination handles non-conflicting but interdependent goals; negotiation handles conflicting goals with limited resources",
        "Coordination is slow; negotiation is fast",
        "They mean the same thing"
      ],
      answer_index: 1,
      explanation_zh: "協調與協商的根本差別在於「是否有目標衝突」。協調是大家方向一致,只需要安排時序、分配資源;協商則是利益不一致,需要妥協與議價。設計 MAS 時必須先判斷代理人之間的關係屬於哪一類,才能選對協議。",
      explanation_en: "The dividing line is goal conflict. Coordination assumes aligned aims and just orders timing and resources; negotiation assumes misaligned interests and requires compromise. Diagnose the relationship before choosing the protocol."
    },
    {
      question_zh: "為什麼把單一旅遊代理人擴展成多代理人系統 (MAS) 通常更好?",
      question_en: "Why is expanding a single travel agent into a MAS usually better?",
      options_zh: [
        "MAS 跑得更快(因為平行化)",
        "MAS 比較便宜,因為每個代理人可以用更小的模型",
        "MAS 提供分散式控制與容錯——單一代理人故障時系統仍可運作,且容易擴充新功能",
        "MAS 不需要設計協議,因為代理人之間會自動合作"
      ],
      options_en: [
        "A MAS just runs faster because of parallelism",
        "A MAS is cheaper because each agent uses a smaller model",
        "A MAS provides distributed control and fault tolerance — the system keeps running if one agent fails, and adding new capabilities is easy",
        "A MAS does not need protocols because agents cooperate automatically"
      ],
      answer_index: 2,
      explanation_zh: "MAS 的核心優勢是「分散控制」與「容錯」。單體代理人是單點故障,而 MAS 中即使某個專家代理人(如飯店代理人)出問題,其他代理人仍能運作。此外,新增「景點代理人」「保險代理人」也比改寫單體容易得多。但 MAS 依然需要精心設計協議,否則會出現衝突與死鎖。",
      explanation_en: "The big win is distributed control plus fault tolerance: a monolith is a single point of failure, while a MAS keeps working if, say, the Hotel Agent goes down. Adding new specialists (Attractions Agent, Insurance Agent) is also far easier than rewriting a monolith. But protocols still need careful design, otherwise you get conflicts and deadlocks."
    },
    {
      question_zh: "下列哪一項「不是」反應式架構的主要弱點?",
      question_en: "Which of the following is NOT a primary weakness of reactive architectures?",
      options_zh: [
        "缺乏長期規劃能力",
        "難以進行抽象推理",
        "難以從經驗中學習與適應",
        "在動態環境中反應太慢"
      ],
      options_en: [
        "Lack of long-term planning",
        "Difficulty with abstract reasoning",
        "Difficulty learning and adapting from experience",
        "Slow response time in dynamic environments"
      ],
      answer_index: 3,
      explanation_zh: "反應式架構的最大優點正是「快」——它直接把感知映射到動作,無需推理。它的弱點在於缺乏長期規劃、抽象推理、學習能力。在動態環境中反應慢的是審議式架構,而非反應式。",
      explanation_en: "Reactive architectures are explicitly fast — they map perception straight to action without deliberation. Their weaknesses are no long-term planning, no abstraction, no adaptive learning. Slowness in dynamic environments is a deliberative-architecture flaw, not a reactive one."
    }
  ]
};

const chapter3 = {
  id: 3,
  title_zh: "智能代理人的核心元件",
  title_en: "Essential Components of Intelligent Agents",
  subtitle_zh: "本章你會學到代理人「腦袋裡」的關鍵零件:如何儲存知識、如何推理、如何學習、如何決策與規劃,以及生成式 AI 如何強化這些能力。",
  subtitle_en: "The components inside an agent's mind: how it stores knowledge, reasons, learns, decides, and plans — and how generative AI super-charges each of these.",
  overview_zh:
    "前兩章我們從外部視角看代理人:它有什麼能力、什麼架構、如何與其他代理人合作。本章把鏡頭拉到代理人的「內部」,逐一檢視它腦袋裡的核心零件。我們把代理人的內部世界分成五大模組。第一,「知識表示」——代理人怎麼存放它對世界的理解?常見的方法包括語意網路 (semantic networks)、框架 (frames) 與邏輯式表示。第二,「推理」——代理人如何從已知導出新結論?有三種基本推理:演繹(從一般到特殊)、歸納(從特殊到一般)、溯因(從觀察反推原因)。第三,「學習」——代理人如何從經驗中改善?監督式、非監督式、強化式、遷移式四大典型方法各有適用情境。第四,「決策與規劃」——代理人如何在多個可能行動中選一個?效用函數 (utility function) 量化偏好,規劃演算法(圖搜尋、啟發式搜尋、蒙地卡羅樹搜尋、階層規劃、約束滿足)生成行動序列。第五,生成式 AI 怎麼把上述每一個元件「升級」?例如資料擴增、情境理解、自然語言介面、創意問題解決。本章結尾我們將寫出第一段真正的 LLM + tool calling 程式碼,讓機票預訂助理開始真正「動起來」。",
  overview_en:
    "Chapters 1 and 2 looked at agents from the outside — capabilities, architectures, multi-agent dynamics. This chapter zooms inside, organ by organ. We split an agent's interior into five modules. First, knowledge representation: how does the agent store its understanding of the world? Common methods include semantic networks, frames, and logic-based representations. Second, reasoning: how does it derive new conclusions from what it knows? Three classical modes — deductive (general to specific), inductive (specific to general), and abductive (observation to most likely cause). Third, learning: how does the agent improve from experience? Supervised, unsupervised, reinforcement, and transfer learning each have their niche. Fourth, decision-making and planning: how does the agent choose among possible actions? Utility functions quantify preferences; planning algorithms (graph search, heuristic search, Monte Carlo Tree Search, hierarchical planning, constraint satisfaction) produce action sequences. Fifth, how generative AI upgrades each component — data augmentation, contextual understanding, natural language interfaces, creative problem solving. We close by writing our first real LLM-plus-tool-calling code so the Flight Booking Assistant truly comes alive.",
  learning_objectives_zh: [
    "比較語意網路、框架、邏輯式表示三種知識表示法,並能舉例說明適用情境。",
    "說明演繹、歸納、溯因三種推理方式的差別,並能在具體案例中辨認。",
    "說明監督式、非監督式、強化式、遷移式四種學習方式的核心思想與典型應用。",
    "了解效用函數如何量化代理人的偏好,並能寫出簡單的效用函數。",
    "認識五種常見規劃演算法(圖搜尋、啟發式搜尋、MCTS、階層規劃、約束滿足)的特性。",
    "說明生成式 AI 如何強化代理人的學習、知識、決策與互動能力。"
  ],
  learning_objectives_en: [
    "Compare semantic networks, frames, and logic-based representations with example use cases.",
    "Distinguish deductive, inductive, and abductive reasoning and recognize them in real scenarios.",
    "Describe the core ideas and typical applications of supervised, unsupervised, reinforcement, and transfer learning.",
    "Explain how a utility function quantifies an agent's preferences and write a simple one.",
    "Recognize the characteristics of five planning algorithms: graph search, heuristic search, MCTS, hierarchical planning, constraint satisfaction.",
    "Articulate how generative AI enhances an agent's learning, knowledge, decisions, and interaction."
  ],
  sections: [
    {
      id: "3.1",
      heading_zh: "知識表示:讓代理人「記得」世界",
      heading_en: "Knowledge Representation: Giving Agents a Memory of the World",
      explanation_zh:
        "如果代理人是個「會思考、會行動」的東西,那它得先「知道」些什麼才能思考。知識表示就是研究「該怎麼把世界的知識編碼進機器」的學問。三種經典方法各有風格。「語意網路 (Semantic Networks)」用圖形來表示知識:節點是概念(狗、動物、貓),邊是關係(is-a、has-part、causes)。它的好處是直觀、靈活、能透過「繼承」推理——如果系統知道「狗 is-a 動物」、「動物 breathes 空氣」,它就能推出「狗 breathes 空氣」。醫療系統常用語意網路表示「症狀 → 疾病 → 治療」的關聯網。「框架 (Frames)」則用結構化的屬性-值對來表示物件,並支援階層繼承。例如「車」這個框架可能有 make、model、year、color 等屬性,並從上層「載具」框架繼承一些通用屬性。框架可以同時容納「事實」和「程序」(例如「車」框架可以有「計算油耗」這個方法)。物件導向程式設計中的類別,本質上就是框架的程式版本。「邏輯式表示 (Logic-Based)」是最嚴謹的:用一階邏輯、命題邏輯、模態/時序邏輯把知識寫成形式化命題,例如「對所有 x,若 Human(x) 則 Mortal(x)」。它的優勢是有強烈的數學嚴謹性——可以保證推理的「健全性」(只推出對的)與「完備性」(能推出所有對的)。缺點是難寫、難維護。語意網路、框架、邏輯三者並非互斥,實務上常常混用。",
      explanation_en:
        "If an agent is something that thinks and acts, it must first know things in order to think. Knowledge representation studies how to encode the world inside a machine. Three classical approaches dominate. Semantic networks use a graph: nodes are concepts (dog, animal, cat), edges are relations (is-a, has-part, causes). They are intuitive, flexible, and support inheritance-based inference — if the system knows \"dog is-a animal\" and \"animal breathes air,\" it can deduce \"dog breathes air.\" Medical systems often use semantic networks to model the web of symptoms-diseases-treatments. Frames represent objects as bundles of attribute-value pairs and support hierarchical inheritance. A Car frame might have make, model, year, and color attributes and inherit shared properties from a Vehicle frame. Frames can hold both facts and procedures — the Car frame can carry a calculate-fuel-economy method. Classes in OOP are essentially frames in code. Logic-based representations are the strictest: knowledge is written as formal propositions in first-order, propositional, or modal/temporal logic — e.g., \"for all x, Human(x) implies Mortal(x)\". The payoff is mathematical rigor: provable soundness (only correct conclusions) and completeness (all correct conclusions reachable). The cost is that they are hard to author and maintain. The three styles are not exclusive — most real systems mix them.",
      analogy_zh:
        "想像你要教一個機器人「貓」是什麼。\n語意網路法:畫一張地圖,中央放「貓」,連到「哺乳類」「有四隻腳」「會咪咪叫」「是寵物」等節點。直觀但難精確。\n框架法:給機器人一個「貓」表格——名稱、品種、年齡、毛色、飲食、聲音等欄位都填好。整齊但缺乏關係描述。\n邏輯法:寫下「所有貓都是哺乳類」「所有貓都有四隻腳」。嚴謹但寫到第十個屬性時你會抓狂。實務上,工程師通常用框架建立物件、用語意網路畫關係、用邏輯規則做精確推理——三者各取所長。",
      analogy_en:
        "Suppose you must teach a robot what a cat is.\nSemantic-network approach: draw a map with \"cat\" in the middle linked to \"mammal,\" \"four-legged,\" \"meows,\" \"pet.\" Intuitive but imprecise.\nFrame approach: hand the robot a Cat form — name, breed, age, fur color, diet, vocalization. Tidy but relationship-poor.\nLogic approach: write down \"all cats are mammals,\" \"all cats have four legs.\" Rigorous but exhausting by the tenth attribute. Engineers often combine all three — frames to define objects, semantic networks to draw relations, logic for precise inference rules.",
      worked_example_zh:
        "情境:設計一個醫療診斷代理人\n語意網路層:畫出疾病-症狀-治療的關聯圖。「流感 — 引起 — 發燒」「流感 — 引起 — 咳嗽」「流感 — 治療 — 多休息」。當病人輸入「發燒+咳嗽」,代理人能在圖中尋找有「引起」這兩個症狀的疾病節點。\n框架層:每個疾病都是一個框架,有屬性:潛伏期、傳染性、典型病程、好發年齡。流感框架可以從上層「呼吸道疾病」框架繼承「主要透過飛沫傳染」這個屬性。\n邏輯層:寫下安全規則。「對所有 x,若 Patient(x) 且 Pregnant(x),則不得處方高劑量布洛芬。」這條規則保證即使症狀完全匹配,系統也不會給孕婦開高劑量布洛芬。\n結果:三層協同工作——語意網路提供探索路徑、框架儲存細節、邏輯規則確保安全。任何單一表示法都做不到這種完整覆蓋。",
      worked_example_en:
        "Scenario: designing a medical-diagnosis agent.\nSemantic-network layer: draw a disease-symptom-treatment graph. \"Flu — causes — fever,\" \"Flu — causes — cough,\" \"Flu — treated-by — rest.\" When a patient inputs \"fever + cough,\" the agent searches the graph for diseases that cause both symptoms.\nFrame layer: each disease is a frame with attributes: incubation period, contagiousness, typical course, age groups. A Flu frame inherits \"spreads via droplets\" from a higher Respiratory-Disease frame.\nLogic layer: hard safety rules. \"For all x, if Patient(x) and Pregnant(x), do not prescribe high-dose ibuprofen.\" Even if every symptom matches, the system will not prescribe high-dose ibuprofen to a pregnant patient.\nResult: three layers cooperate — semantic networks for exploration paths, frames for detail, logic for safety. No single representation covers all three jobs.",
      diagram_description:
        "A three-layer stack diagram. Top layer (Semantic Network): nodes for 'Flu', 'Fever', 'Cough', 'Rest' connected by labeled edges 'causes', 'treated-by'. Middle layer (Frames): a 'Flu' frame box with slots: incubation_period, contagiousness, age_groups; arrow showing inheritance from a parent 'Respiratory Disease' frame. Bottom layer (Logic): a logical rule shown as 'IF Patient(x) AND Pregnant(x) THEN NOT Prescribe(x, IbuprofenHighDose)'. A vertical arrow on the side labeled 'exploration -> detail -> safety' shows how the layers complement each other."
    },
    {
      id: "3.2",
      heading_zh: "推理:三種思考方式——演繹、歸納、溯因",
      heading_en: "Reasoning: Three Modes of Thought — Deduction, Induction, Abduction",
      explanation_zh:
        "有了知識還不夠,代理人還得會「思考」——也就是「推理」。經典 AI 把推理分成三大類。「演繹推理 (Deductive)」走由上而下的路:從一般原則推出特定結論。經典三段論——「所有人都會死;蘇格拉底是人;所以蘇格拉底會死」——就是演繹。只要前提為真,結論必然為真。法律推理、數學證明、軟體驗證都仰賴演繹。「歸納推理 (Inductive)」走由下而上的路:從一堆特定觀察歸納出一般規則。「過去 100 萬天太陽都從東邊升起,所以明天太陽也會從東邊升起」就是歸納。注意,歸納的結論「可能」為真但不保證為真——理論上有一天太陽可能不升起。機器學習本質就是大規模歸納:從訓練樣本歸納出模型,在新樣本上預測。「溯因推理 (Abductive)」最有趣——它是「逆向偵探」:從觀察反推最可能的原因。「草地是濕的;最可能的原因是昨晚下雨」就是溯因。它與演繹相反:演繹從原因推結果,溯因從結果猜原因。醫療診斷、故障診斷、刑案偵查、科學發現都是溯因的舞台——因為這些場景裡你只看得到症狀/現象,得反推根因。三種推理在實務中常組合使用:溯因產生「可能的解釋」,演繹從假設預測「應該觀察到什麼」,歸納則從多次經驗中改進判斷。",
      explanation_en:
        "Knowing things is not enough — the agent must reason. Classical AI separates reasoning into three modes. Deductive reasoning runs top-down: from general rules to specific conclusions. The classic syllogism — \"all men are mortal; Socrates is a man; therefore Socrates is mortal\" — is deduction. If the premises are true, the conclusion is guaranteed. Legal reasoning, mathematical proof, and software verification all lean on deduction. Inductive reasoning runs bottom-up: from many specific observations to a general rule. \"The sun has risen for a million days; it will rise tomorrow\" is induction. The catch: inductive conclusions are likely, not guaranteed. Machine learning is large-scale induction — fitting a model to training data and predicting on new inputs. Abductive reasoning is the most interesting — it is the reverse-detective mode: from observations to the most likely cause. \"The lawn is wet; the best explanation is that it rained last night\" is abduction. Where deduction goes cause-to-effect, abduction goes effect-to-cause. Medical diagnosis, fault detection, criminal investigation, and scientific discovery all live in abduction territory because you see only symptoms and must infer underlying causes. In practice the three modes cooperate: abduction proposes candidate explanations, deduction predicts what each candidate should imply, and induction refines judgment over many cases.",
      analogy_zh:
        "把這三種推理想成偵探辦案的三招。演繹像「法庭審判」:法律規定 + 事證 → 必然判決。歸納像「警察建模」:看過 100 起銀行搶案後,警官歸納出「搶匪通常選週五下午」的規律。溯因像「福爾摩斯」:看到地毯上的腳印推測「兇手身高約 180、左撇子」。三招缺一不可——光靠演繹查不出新案、光靠歸納抓不到首犯、光靠溯因會冤枉好人。",
      analogy_en:
        "Three detective moves. Deduction = courtroom verdict: law + evidence -> necessary judgment. Induction = profiler's pattern: after 100 bank robberies, police generalize \"robberies cluster on Friday afternoons.\" Abduction = Sherlock Holmes: footprints on the carpet -> \"the suspect is about 180 cm tall and left-handed.\" Each alone is incomplete — deduction cannot crack a new case, induction cannot pinpoint the first offender, and abduction without verification convicts the innocent.",
      worked_example_zh:
        "情境:智能家居代理人發現「客廳燈打不開」\n演繹推理:已知規則「如果跳閘總開關,所有燈都打不開」。代理人檢查總開關 -> 跳了 -> 結論:跳閘是燈打不開的原因。確定性結論。\n溯因推理:代理人看到「燈打不開」這個現象,生成多個候選假設:(a) 燈泡壞了 (b) 線路斷了 (c) 跳閘 (d) 智能插座未連線。代理人依過往機率排序:跳閘 > 燈泡壞 > 智能插座 > 線路斷。然後從最可能的開始驗證。\n歸納推理:代理人累積了 30 次「燈打不開」事件的資料,發現其中 70% 是跳閘,20% 是燈泡,10% 其他。下次再遇到時,它會優先檢查跳閘——這就是從歷史歸納出的優先順序。\n整合:溯因產出候選 -> 演繹預測「如果是跳閘,那麼除了燈,冰箱應該也斷電」-> 用觀察驗證 -> 結合歸納經驗排序與更新。三者協同,代理人才能變聰明。",
      worked_example_en:
        "Scenario: a smart-home agent notices \"the living-room light won't turn on.\"\nDeduction: known rule — \"if the main breaker tripped, all lights are dead.\" The agent checks the breaker -> tripped -> conclusion: breaker is the cause. Guaranteed conclusion.\nAbduction: facing the observation \"light won't turn on,\" the agent enumerates hypotheses: (a) bulb burnt, (b) wiring broken, (c) breaker tripped, (d) smart plug offline. Prior probabilities rank them: breaker > bulb > plug > wiring. The agent then verifies starting with the most likely.\nInduction: over 30 past incidents the agent has logged, 70% were breakers, 20% bulbs, 10% other. Next time, it checks the breaker first — an inductively learned priority.\nCombined flow: abduction proposes -> deduction predicts \"if the breaker tripped, the fridge should also be dead\" -> observation confirms -> inductive history updates the priorities. The three modes together make the agent smart.",
      diagram_description:
        "A triangle diagram with three labeled corners: Deduction (top), Induction (bottom-left), Abduction (bottom-right). Each corner has an arrow showing direction of inference: Deduction = General -> Specific (downward arrow), Induction = Specific -> General (upward arrow), Abduction = Observation -> Cause (backward arrow). In the center, a small loop labeled 'real-world reasoning combines all three' connects them, with the smart-home light example printed beside the loop."
    },
    {
      id: "3.3",
      heading_zh: "學習:四種讓代理人不斷進步的方法",
      heading_en: "Learning: Four Ways an Agent Keeps Getting Better",
      explanation_zh:
        "一個只能用「死規則」運作的代理人很快會跟不上世界。「學習」是讓代理人從經驗中改進的能力,主要分四大類。「監督式學習 (Supervised Learning)」最直觀:給代理人大量「輸入-正確答案」的配對(例如「這張圖是貓」「這張圖是狗」),讓它學一個從輸入映射到答案的函數。適用於分類(影像辨識、垃圾郵件偵測)、回歸(房價預測)等任務,要求標註資料。「非監督式學習 (Unsupervised Learning)」沒有答案,只有資料,目標是「發現資料內部的結構」。常見任務:客群分群(把行為相似的顧客聚成一群)、異常偵測(在正常交易中找異常)、降維(把高維資料壓成可視化的二維)、主題建模(從新聞中提取主題)。「強化學習 (Reinforcement Learning, RL)」模仿動物學習:代理人在環境中嘗試動作,根據獎勵或懲罰調整策略。經典應用:AlphaGo 學會圍棋、機器人學會走路、廣告系統學會何時推送哪個廣告。RL 的關鍵是「探索 vs. 利用」的平衡——是該嘗試新動作,還是用已知好策略。「遷移學習 (Transfer Learning)」是把一個任務上學到的知識搬到另一個相關任務。例如先用大量「一般圖片」訓練視覺模型,再用少量「醫療影像」微調,就能在醫療領域達到不錯效果。遷移學習對「資料稀少的場景」尤其重要,也是 LLM 微調的核心理念——拿預訓練模型再針對特定領域少量訓練。在實務中,代理人常結合多種學習方式。",
      explanation_en:
        "An agent that runs only on hard-coded rules quickly falls behind a changing world. Learning lets it improve from experience. Four major families. Supervised learning is the simplest: feed the agent many input-answer pairs (\"this image is a cat,\" \"this is a dog\") and let it learn a mapping. Used for classification (image recognition, spam detection) and regression (house-price prediction). It needs labeled data. Unsupervised learning has no labels, only raw data — the goal is to discover internal structure. Common tasks include customer segmentation, anomaly detection, dimensionality reduction (compressing high-dimensional data into 2D for visualization), and topic modeling. Reinforcement learning (RL) imitates animal learning: the agent tries actions in an environment and updates its policy based on rewards or penalties. Classic wins include AlphaGo, robots learning to walk, and ad systems choosing what to serve. The central tension is exploration vs. exploitation — try something new, or repeat what already works. Transfer learning ports knowledge from one task to a related one. Pretrain a vision model on millions of generic photos, then fine-tune it on a small medical-imaging dataset, and you reach strong medical performance cheaply. Transfer learning is critical when data is scarce — and it underpins LLM fine-tuning, where a giant pretrained model is specialized to a domain with a small dataset. In practice, agents blend these families.",
      analogy_zh:
        "想像四種家教老師。\n監督式像「英文老師批改作文」——學生寫,老師改,反覆練習,學生學會「什麼是好作文」。\n非監督式像「圖書館整理員」——書沒分類,他自己依主題、作者、語言把書分組。\n強化式像「教孩子騎腳踏車」——孩子試騎,跌倒(懲罰)就站起來再來,成功騎直線(獎勵)就強化這個感覺。\n遷移式像「會中文的人學日文」——他不是從零開始,因為漢字、文法概念已熟,可以快速上手。\n選對學習方法,跟選對老師一樣關鍵。",
      analogy_en:
        "Four kinds of tutors. Supervised = an essay teacher who corrects every paper until the student knows what \"good\" looks like. Unsupervised = a librarian sorting unlabeled books by topic, author, language. Reinforcement = teaching a child to ride a bike — fall (penalty), get up, succeed at riding straight (reward), reinforce the feeling. Transfer = a Chinese speaker learning Japanese — not from zero because kanji and grammar concepts already carry over. Picking the right learning style is as critical as picking the right tutor.",
      worked_example_zh:
        "情境:設計一個 Netflix 推薦代理人\n監督式學習:用「用戶評分過的電影」當訓練資料(評 5 星 -> 喜歡;1 星 -> 不喜歡)。訓練模型預測該用戶對新片的評分。問題:新用戶沒評分,模型無從下手。\n非監督式學習:把所有用戶依觀看行為分群——「喜歡科幻」「喜歡愛情片」「喜歡紀錄片」。新用戶看一兩部後就能歸入某群,並推薦該群常看的片。\n強化學習:每次推薦後觀察用戶反應(點開看了多久 -> 獎勵;直接跳過 -> 懲罰)。長期下來代理人學會「對這位用戶推什麼最有效」。\n遷移學習:從電影模型把「使用者偏好向量」遷移到新上線的「影集推薦」功能,不用從頭收集資料。\n整合:Netflix 實際上同時用四種方法。代理人是個學習組合拳的高手。",
      worked_example_en:
        "Scenario: a Netflix recommendation agent.\nSupervised: train on \"user rated movie\" pairs (5 stars -> liked; 1 star -> disliked) and predict ratings for new films. Problem: new users have no ratings.\nUnsupervised: cluster users by viewing behavior — \"sci-fi fans,\" \"rom-com fans,\" \"documentary fans.\" After a new user watches a couple of titles, slot them into a cluster and recommend the cluster's favorites.\nReinforcement: after each recommendation, observe the user's response (click and watch length -> reward; skip -> penalty). Over time the agent learns what works for that specific user.\nTransfer: port \"user preference vectors\" learned on movies to a new series-recommendation feature without starting data collection from scratch.\nIntegration: Netflix actually uses all four. A real agent is a combination of learners, not a single one.",
      diagram_description:
        "A 2x2 grid diagram. Top-left (Supervised): labeled training pairs flowing into a Classifier. Top-right (Unsupervised): unlabeled points being grouped into clusters by color. Bottom-left (Reinforcement): an Agent -> Action -> Environment -> Reward feedback loop. Bottom-right (Transfer): a 'Pretrained Model' arrow pointing into a 'Fine-tuned for New Task' model, indicating knowledge transfer. Below the grid: small label 'Most production agents blend all four.'"
    },
    {
      id: "3.4",
      heading_zh: "決策與規劃:效用函數與五種規劃演算法",
      heading_en: "Decision-Making and Planning: Utility Functions and Five Planning Algorithms",
      explanation_zh:
        "代理人面對多個可能行動時,得有「比較標準」。「效用函數 (Utility Function)」就是把每個可能結果映射到一個數字,代表「對代理人來說有多好」。代理人的決策原則就變成:挑「期望效用最大」的行動。例如旅遊代理人比較「廉航 vs. 自駕」,可以寫一個效用 = 0.05 × (1000 − 價格) + 10 × 舒適度 + 15 × 便利度,結果分數高者勝出。難點在於「設計能反映真實偏好的效用函數」——人的偏好複雜、會隨情境改變、會有風險偏好(避險或追險)、屬性之間還會相互影響(更快通常更貴)。學界用「偏好誘出 (preference elicitation)」「逆向強化學習」「從人類回饋學習 (RLHF)」等技術來逼近真實效用。光有效用函數還不夠,代理人還得會「規劃」——找一連串行動讓自己從現在狀態走到目標狀態。五大經典規劃法:\n(1) 圖搜尋 (Graph Search):把狀態當節點、行動當邊,跑 DFS/BFS/Dijkstra 或 A* 找最佳路徑。GPS 導航就是這個。\n(2) 啟發式搜尋 (Heuristic Search):當狀態空間爆炸時,用「啟發函數」估算還剩多遠,只搜「看起來有希望」的分支,放棄最優保證以換取效率。\n(3) 蒙地卡羅樹搜尋 (MCTS):從當前狀態大量隨機模擬不同未來,依模擬結果更新樹中分支的價值,適合不確定性大的場景。AlphaGo 用這個。\n(4) 階層規劃 (Hierarchical Planning):把大問題拆成子任務、子子任務,各層用不同抽象度規劃。「訂旅遊」拆成「訂機票 + 訂飯店」,「訂機票」再拆成「查 -> 比較 -> 預訂 -> 付款」。\n(5) 約束滿足 (Constraint Satisfaction, CSP):把問題寫成「變數 + 約束」,然後用約束傳播削減可能性。排課、座位安排、配送路線都常用 CSP。在實務系統中,規劃演算法常與 LLM 結合——LLM 提出候選計畫,規劃演算法驗證可行性。",
      explanation_en:
        "Faced with several possible actions, an agent needs a yardstick. A utility function maps each possible outcome to a number that represents how good it is for the agent. The decision rule becomes: pick the action with the highest expected utility. For example, a travel agent comparing a budget airline against a road trip can write utility = 0.05 * (1000 - price) + 10 * comfort + 15 * convenience and pick the higher score. The hard part is designing a utility function that actually reflects real preferences — humans are messy, context-dependent, risk-averse or risk-seeking, and attributes interact (faster usually costs more). Researchers approximate true utility with preference elicitation, inverse reinforcement learning, and reinforcement learning from human feedback (RLHF). Utility alone is not enough; the agent must also plan — find an action sequence from the current state to the goal state. Five classical planners:\n(1) Graph search: model states as nodes, actions as edges, run DFS/BFS/Dijkstra/A*. GPS navigation lives here.\n(2) Heuristic search: when the state space explodes, a heuristic function estimates remaining distance to the goal so the search expands only promising branches. Trades optimality for speed.\n(3) Monte Carlo Tree Search (MCTS): roll out many random simulated futures from the current state, update node values from the outcomes. Great for uncertainty. AlphaGo uses MCTS.\n(4) Hierarchical planning: decompose a big problem into subtasks at multiple abstraction levels. \"Plan a trip\" = book flight + book hotel; \"book flight\" = search + compare + book + pay.\n(5) Constraint satisfaction problems (CSPs): formulate as variables plus constraints and use constraint propagation to prune. Scheduling, seating, delivery routing all map to CSPs. In real systems, planners are often paired with LLMs — the LLM proposes a candidate plan, the planner verifies feasibility.",
      analogy_zh:
        "想像你要從台北到屏東旅行,該怎麼規劃?\n圖搜尋像「打開 Google Maps 找最短路徑」——明確、保證最佳。\n啟發式搜尋像「司機直覺挑高速公路」——不一定最短,但合理且快。\nMCTS 像「想像走十條不同路線各跑一千次,看哪條平均最快」——適合路況不確定的情境。\n階層規劃像「先決定坐高鐵還是自駕(粗層),再決定要哪一班(細層),再決定要訂哪節車廂(更細層)」。\n約束滿足像「我必須週五到、預算 3000 元、不能搭夜車——找出所有滿足這些條件的方案」。\n效用函數則像「同時把『價格、舒適、時間』加權成一個總分」,讓你從滿足條件的方案中挑「整體最好的」。",
      analogy_en:
        "Planning a trip from Taipei to Pingtung.\nGraph search = opening Google Maps for the literal shortest path — explicit, optimal-guaranteed.\nHeuristic search = the driver's gut that picks the freeway — not provably shortest, but fast and good.\nMCTS = imagining ten different routes, mentally running each one a thousand times, picking the one with the best average — perfect when conditions are uncertain.\nHierarchical planning = first decide rail vs. drive (coarse), then which train (finer), then which seat (finest).\nConstraint satisfaction = \"I must arrive Friday, budget under 3000, no overnight trains — list all options that fit.\"\nA utility function then weighs price, comfort, and time into a single score so you can pick the best among the feasible options.",
      worked_example_zh:
        "情境:旅遊代理人為用戶規劃台北 -> 東京三日行程\n第一步(階層規劃):TA 把任務拆成 (1) 訂機票 (2) 訂飯店 (3) 排景點。\n第二步(效用函數)定義使用者偏好:U = 0.5 × (10000 − 機票價) + 100 × 飯店星級 + 50 × 景點豐富度 + 200 × 時間彈性。\n第三步(約束滿足)寫出硬約束:出發日 = 週五;總預算 <= 30000 元;住宿不離地鐵 500 米。\n第四步(圖搜尋)景點動線:把東京 8 個熱門景點當節點,計算「最少移動時間」串連方案 -> 找最短路徑。\n第五步(啟發式搜尋 + MCTS)機票價:時刻表選擇空間很大,啟發式快速篩選「上午起飛 + 直飛」候選,MCTS 模擬「不同月份的價格趨勢」評估訂購時機。\n結果:三個套裝方案出爐,各按效用函數打分,呈給用戶選擇。五種規劃技巧在一個任務內都有戲份——這就是現代旅遊代理人的真實設計。",
      worked_example_en:
        "Scenario: a travel agent plans a 3-day Taipei -> Tokyo trip.\nStep 1 (hierarchical planning): TA decomposes into book-flight, book-hotel, build-itinerary.\nStep 2 (utility function): define U = 0.5 * (10000 - flight_price) + 100 * hotel_stars + 50 * attractions_score + 200 * time_flexibility.\nStep 3 (constraints): hard constraints — depart Friday, total budget <= NT$30,000, lodging within 500 m of a subway exit.\nStep 4 (graph search): treat Tokyo's 8 attractions as nodes, edge weights = travel time, run shortest-path for a smooth itinerary.\nStep 5 (heuristic + MCTS): flight search space is huge; a heuristic quickly prunes to \"morning departure + direct\" candidates, and MCTS simulates monthly price trends to time the purchase.\nResult: three packages emerge, ranked by the utility function, presented to the user. All five planning techniques chip in within a single task — exactly how a real travel agent is engineered.",
      diagram_description:
        "A central node labeled 'Trip Planning Goal' with five branching planning techniques arrayed around it. Each branch has a small icon: Graph Search (a node-and-edge graph), Heuristic Search (a magnifying glass scanning a tree), MCTS (a tree with dashed simulation paths), Hierarchical Planning (a nested-box tree), Constraint Satisfaction (a checklist with green check marks and red X's). Below all five, a small utility-function formula box: 'U = w1*price + w2*comfort + w3*time'. The diagram shows the techniques composing into one workflow."
    },
    {
      id: "3.5",
      heading_zh: "生成式 AI 如何強化代理人的每個元件",
      heading_en: "How Generative AI Super-Charges Every Component",
      explanation_zh:
        "前面四節介紹的元件——知識、推理、學習、決策——都是 70 年代以來的經典 AI 工具。生成式 AI 出現後,它不是「取代」這些元件,而是讓每一個元件都「升級」。第一個升級是「資料擴增 (Data Augmentation)」:訓練自駕車需要海量場景資料,但實拍昂貴。用生成模型合成「下雨夜晚的路況」「行人突然衝出」等罕見情境,可以大幅提升訓練覆蓋面。第二個升級是「情境理解 (Contextual Understanding)」:LLM 能生成多樣的模擬對話,讓客服代理人在「上線前」就見過各種使用者語氣與意圖,部署後更穩。第三個升級是「自然語言介面 (NLP)」:傳統代理人要求結構化輸入(機場代碼、ISO 日期格式),用 LLM 後使用者可以說人話「下週五從台北到東京」。NLP 升級也讓代理人之間能用「自然語言」協商,而不再只能用嚴格 API 訊息。第四個升級是「創意問題解決」:當代理人面對沒看過的情境時,生成式模型可以提出多種候選解法、評估可行性。例如建築 AI 在「街區綠化」這種開放問題上,可以生成數十種設計草案讓人類審查。生成式 AI 與經典 AI 結合的最強大模式是:LLM 提供「廣度與創意」,經典演算法提供「精確與保證」。舉個具體例子——LLM 生成多種旅遊行程,然後傳給約束滿足求解器驗證「不違反預算、時間、地理約束」,最後由效用函數打分。這種混合範式,就是後續章節要實作的核心。",
      explanation_en:
        "The components above — knowledge, reasoning, learning, decision-making — are classical AI tools dating back decades. Generative AI does not replace them; it upgrades each one. First, data augmentation: training self-driving cars needs huge volumes of scenarios, but field data is expensive. Generative models synthesize rare cases — \"rainy night, pedestrian darts out\" — and dramatically expand training coverage. Second, contextual understanding: LLMs can generate varied simulated dialogs so a customer-service agent has \"met\" every tone and intent before deployment. Third, natural language interfaces: classical agents demand structured input (airport codes, ISO dates); an LLM lets the user say \"next Friday from Taipei to Tokyo\" in plain language. NLP upgrades also let agents negotiate with each other in natural language rather than over rigid APIs. Fourth, creative problem solving: when an agent faces a never-seen scenario, a generative model can propose many candidate solutions and rate their feasibility. An AI architect can output dozens of \"block-greening\" design drafts for human review. The most powerful pattern is LLM-plus-classical: the LLM provides breadth and creativity, classical algorithms provide precision and guarantees. Concretely — an LLM generates several travel itineraries, hands them to a constraint-satisfaction solver to verify budget/time/geography constraints, and a utility function ranks the survivors. That hybrid is the core of every implementation chapter ahead.",
      analogy_zh:
        "想像一個傳統建築事務所。經典 AI 像「結構工程師」——精準計算荷重、力學、安全規範,絕不出錯。生成式 AI 像「概念設計師」——一晚畫 50 張不同風格的草圖,刺激靈感。這兩者結合,你會得到一棟既創新又安全的建築。少了結構工程師,設計師畫的可能塌;少了設計師,工程師蓋的可能無聊。真正強大的代理人也是這種「創意 + 嚴謹」的組合。",
      analogy_en:
        "A traditional architecture firm. Classical AI is the structural engineer — precise load calculations, mechanics, code compliance, never wrong. Generative AI is the concept designer — sketching fifty wildly different facades in one evening to spark ideas. Combine them and you get a building that is both creative and safe. Without the engineer the designer's tower collapses; without the designer the engineer's box is boring. The strongest agents pair creativity with rigor in exactly this way.",
      worked_example_zh:
        "情境:用生成式 AI 升級機票預訂助理\n升級前(經典版本):使用者必須輸入機場代碼、ISO 日期。系統用一個寫死的對話樹引導用戶。如果用戶說「下週五」,系統聽不懂。\n升級後(LLM-enhanced):用戶可說自然語言「下週五從聖地牙哥到舊金山」。LLM 把這段話解析成結構化參數,再交給「圖搜尋」找最佳航班、用「效用函數」排序、用「約束滿足」確認預算與偏好。\nLLM 的工作:語言理解、缺失資訊偵測(「你還沒告訴我幾位乘客」)、結果摘要(把 5 個航班結果用自然語言介紹給用戶)、創意建議(「您要不要考慮週六回程?可以省 30%」)。\n經典演算法的工作:精確查詢、嚴格約束驗證、確定性排序。\n結果:用戶體驗從「填表格」變成「跟朋友聊天」,但底層仍是經過工程驗證的可靠系統——這就是混合範式的力量。",
      worked_example_en:
        "Scenario: upgrade the Flight Booking Assistant with generative AI.\nClassical version: user must enter airport codes and ISO dates. A scripted dialog tree leads the user. \"Next Friday\" baffles it.\nLLM-enhanced version: the user types naturally — \"next Friday from San Diego to San Francisco.\" The LLM parses it into structured args, then hands off to graph search for best flights, a utility function for ranking, and constraint satisfaction to enforce budget and preferences.\nLLM jobs: language understanding, missing-info detection (\"you haven't told me how many passengers\"), result summarization (turning a list of five flights into a friendly paragraph), creative suggestions (\"what if you return Saturday? you'd save 30%\").\nClassical-algorithm jobs: precise lookups, hard constraint checks, deterministic ranking.\nResult: the user experience shifts from filling forms to chatting with a friend, while the engine remains an engineered, dependable system. That is the hybrid pattern in action.",
      diagram_description:
        "A diagram with two columns. Left column 'Classical AI Components': boxes for 'Knowledge Base', 'Reasoner', 'Learning Module', 'Planner / Decision'. Right column 'Generative AI Layer': a single 'LLM' box. Bidirectional arrows from LLM to each classical box with labels: 'data augmentation', 'context understanding', 'NL interface', 'creative proposals'. Below, a caption: 'The LLM does not replace classical AI — it amplifies it.'"
    },
    {
      id: "3.6",
      heading_zh: "動手做:用 LLM + 工具呼叫讓代理人真正動起來",
      heading_en: "Hands-On: Bringing the Agent to Life with LLM + Tool Calling",
      explanation_zh:
        "理論講夠了,現在我們動手做一個最簡單的智能代理人——延續機票預訂助理。整個邏輯只需要四個元素:(1) 一個真的會做事的 Python 函式 book_flight(passenger_name, from_city, to_city, travel_date),它接到參數就「假裝」完成預訂並回傳確認字串。(2) 一份用 JSON Schema 描述這個函式的「工具清單 (tools)」,讓 LLM 知道有這個工具、要傳什麼參數。(3) 一個 travel_agent(user_message, messages) 函式,每次呼叫時把使用者訊息塞進對話歷史,再呼叫 LLM(例如 OpenAI 的 gpt-4-turbo)並傳入工具清單。(4) 一段判斷邏輯:檢查 LLM 的回應——如果回的是文字,就直接回給用戶;如果回的是「我想呼叫 book_flight」的 tool_calls,就抽出參數、執行 book_flight、把結果加回對話歷史、再呼叫一次 LLM 讓它把結果以自然語言報告給用戶。最神奇的地方在於:我們沒有寫任何 if-else 來決定「該不該問日期」「該不該問機場」——這些對話流程完全由 LLM 在每一輪自己推斷。LLM 看到使用者只說「我想訂機票」時,會自動回問「請問起訖城市、日期、姓名?」;只有當它確定所有參數齊備,才會發起 tool_calls。這就是「自然語言介面 + 自主規劃」的最小可運作範例,也是本書後續所有複雜代理人的起點。",
      explanation_en:
        "Enough theory — let's build the smallest possible intelligent agent, continuing the Flight Booking Assistant. The whole thing has four ingredients. (1) A real Python function book_flight(passenger_name, from_city, to_city, travel_date) that pretends to book and returns a confirmation string. (2) A tools list described in JSON Schema, declaring the function name, parameters, and types so the LLM knows the tool exists. (3) A travel_agent(user_message, messages) function that appends the user message to the conversation history and calls the LLM (e.g., OpenAI's gpt-4-turbo) with the tools list. (4) A small dispatch block: inspect the LLM's response — if it returned text, send it to the user; if it returned tool_calls, extract arguments, invoke book_flight, append the result to history, and call the LLM again so it phrases the outcome naturally. The remarkable part: we wrote no if-else to decide \"should I ask the date?\" — the LLM reasons that each turn. When the user only says \"I want to book a flight,\" the LLM auto-asks for origin, destination, date, and name; only when all parameters are present does it issue a tool_call. That is the minimal working example of natural-language interface plus autonomous planning — the seed of every more complex agent in the book.",
      analogy_zh:
        "想像一位剛上任的新人櫃台員。經理跟他說:「你只負責一件事——當客人說要訂機票,把他的名字、出發地、目的地、日期問清楚,然後按這個按鈕(book_flight)。」沒人教他「要先問什麼後問什麼」,他就靠自己的語言能力與對話常識,看缺什麼就問什麼,直到資訊齊全才按下按鈕。LLM + tool calling 的代理人就是這位櫃台員——你只給他「按鈕」和「規則」,順序與引導完全由他即時判斷。",
      analogy_en:
        "Imagine a brand-new counter clerk. The manager says, \"Your only job: when a customer wants to book a flight, get their name, origin, destination, date, then press this button (book_flight).\" No one trains him on what to ask first; he uses common conversational sense, requests whatever is missing, and only presses the button once everything is in hand. The LLM-plus-tool-calling agent is exactly that clerk — you supply the button and the rule, and ordering plus follow-up emerge in real time from the model.",
      worked_example_zh:
        "完整對話流程:\nTurn 1\n用戶:「我想訂機票」\nLLM 推斷:意圖 = book_flight,但缺少所有參數。\nLLM 回應:「好的!請問您的姓名、出發地、目的地、與旅行日期?」\n\nTurn 2\n用戶:「我叫王小明,從台北飛東京,下週五」\nLLM 推斷:解析得到姓名、出發地、目的地、與根據今天日期計算出的具體出發日。\nLLM 行動:發出 tool_calls,參數包含 passenger_name、from_city、to_city、travel_date 四個欄位。\n程式執行:呼叫真實 book_flight(...) -> 回傳「A flight has been booked」。\n程式把這個結果加回 messages,再呼叫一次 LLM。\nLLM 回應:「王小明先生您好,您的台北 -> 東京班機已成功預訂,確認信會寄到您的信箱。需要幫您安排接駁或飯店嗎?」\n\n觀察重點:LLM 自己決定 Turn 1 該問什麼、Turn 2 該不該呼叫工具、Turn 2 後該怎麼用自然語言回報。整個對話沒有任何寫死的對話樹——這就是「LLM 驅動代理人」最關鍵的設計哲學。",
      worked_example_en:
        "Full dialogue trace:\nTurn 1\nUser: \"I want to book a flight.\"\nLLM thinking: intent = book_flight; all parameters missing.\nLLM reply: \"Sure! Could you tell me your name, origin, destination, and travel date?\"\n\nTurn 2\nUser: \"My name is Ming Wang, Taipei to Tokyo, next Friday.\"\nLLM thinking: parses name, origin, destination, and resolves \"next Friday\" into a concrete date.\nLLM action: emits tool_calls with the four arguments: passenger_name, from_city, to_city, travel_date.\nCode executes the real book_flight(...) -> returns \"A flight has been booked.\"\nCode appends that result back to messages and calls the LLM again.\nLLM reply: \"Hi Ming Wang, your Taipei -> Tokyo flight is confirmed. The confirmation will hit your inbox shortly. Want me to set up airport pickup or a hotel?\"\n\nKey observation: the LLM decided what to ask in Turn 1, when to call the tool in Turn 2, and how to phrase the result. There is no hard-coded dialog tree anywhere — that is the design philosophy of an LLM-driven agent.",
      diagram_description:
        "A sequence diagram with three vertical lanes: 'User', 'Agent (LLM + Code)', 'External Tool (book_flight API)'. Arrows in order: User -> Agent: 'I want to book a flight.' Agent -> User: 'I need name, origin, destination, date.' User -> Agent: 'Ming Wang, Taipei -> Tokyo, next Friday.' Agent -> Tool: 'book_flight(args...)'. Tool -> Agent: 'Confirmation #ABC'. Agent -> User: 'Booked! Anything else?' Inside the Agent lane, two dashed thought bubbles labeled 'parse intent' and 'all args present -> emit tool_call' show internal LLM reasoning."
    }
  ],
  code_or_procedure_zh:
    "最小可運作的 LLM 代理人,實作步驟如下:\n\n步驟 1 — 安裝套件:pip install openai。設定 OPENAI_API_KEY 環境變數。\n\n步驟 2 — 定義工具函式:寫一個普通 Python 函式 def book_flight(passenger_name: str, from_city: str, to_city: str, travel_date: str) -> str,回傳一個固定字串「A flight has been booked」。實務中這裡會呼叫真的 API。\n\n步驟 3 — 用 JSON Schema 描述工具:建一個 tools 列表,內含一個 type = 'function' 的項目;function 物件須提供 name、description、parameters(屬性包括 passenger_name、from_city、to_city、travel_date,均為 string;travel_date 用 YYYY-MM-DD 格式;四個欄位皆為必填)。\n\n步驟 4 — 寫代理人迴圈:每次收到用戶訊息,把它加入 messages 列表,呼叫 openai.chat.completions.create(model=\"gpt-4-turbo\", messages=messages, tools=tools)。檢查回應:若 message.content 有內容就直接回給用戶;若 message.tool_calls 不為空,則抽出參數、執行 book_flight(...),把 {role: \"tool\", content: 結果} 加回 messages,再次呼叫 LLM 讓它把結果用自然語言報告。\n\n步驟 5 — 加上系統提示 (system prompt):在 messages 一開頭放一段「你是一位專業的機票預訂助理,請友善地引導使用者提供完整資訊」。這能大幅提升模型的對話穩定度。\n\n關鍵心法:工具的 description 寫得越清楚,LLM 越知道何時該呼叫。對於每個參數,給出範例與格式,可以減少幻覺。實務上還要加上錯誤處理、超時、敏感資料過濾——這些是後續章節的主題。",
  code_or_procedure_en:
    "The minimal working LLM agent, implemented as follows:\n\nStep 1 — install: pip install openai. Set OPENAI_API_KEY in the environment.\n\nStep 2 — define the tool function: a plain Python function def book_flight(passenger_name: str, from_city: str, to_city: str, travel_date: str) -> str that returns the fixed string \"A flight has been booked\". In production this would call a real airline API.\n\nStep 3 — describe the tool in JSON Schema: build a tools list containing one item with type = 'function'; the function object specifies name, description, and parameters (with string properties passenger_name, from_city, to_city, travel_date; travel_date should follow YYYY-MM-DD; all four are required).\n\nStep 4 — agent loop: on each user message, append it to messages, call openai.chat.completions.create(model=\"gpt-4-turbo\", messages=messages, tools=tools). Inspect the response: if message.content is non-empty, return it to the user; if message.tool_calls is set, extract arguments, run book_flight(...), append a {role: \"tool\", content: result} entry to messages, then call the LLM again so it can phrase the outcome.\n\nStep 5 — add a system prompt: prepend a system message such as \"You are a professional flight-booking assistant. Politely collect missing info from the user.\" That dramatically stabilizes the dialog.\n\nMental model: the clearer the tool description, the better the LLM knows when to invoke it. Give an example format for each parameter to reduce hallucination. Production code also needs error handling, timeouts, and sensitive-data filtering — topics for later chapters.",
  key_takeaways_zh: [
    "知識表示是代理人「記憶世界」的方式;語意網路重關係、框架重結構、邏輯重嚴謹,實務常混用。",
    "推理分三種:演繹(一般 -> 特殊)、歸納(特殊 -> 一般)、溯因(現象 -> 原因);現代代理人三者並用。",
    "學習有四大家族:監督式(有標籤)、非監督式(找結構)、強化式(獎懲學習)、遷移式(知識搬家)。",
    "效用函數量化偏好,規劃演算法(圖搜尋、啟發式、MCTS、階層、約束滿足)生成行動序列。",
    "生成式 AI 不取代經典 AI,而是讓每個元件升級:資料擴增、情境理解、自然語言介面、創意求解。",
    "用 LLM + tool calling 可以做出最小可運作代理人;對話順序由 LLM 自行推斷,不寫死 if-else——這是本書其餘所有實作的種子。"
  ],
  key_takeaways_en: [
    "Knowledge representation is how the agent remembers the world; semantic networks emphasize relations, frames emphasize structure, logic emphasizes rigor — production systems blend all three.",
    "Three reasoning modes: deduction (general -> specific), induction (specific -> general), abduction (observation -> most likely cause); modern agents weave them together.",
    "Four learning families: supervised (labeled data), unsupervised (find structure), reinforcement (reward/penalty), transfer (port knowledge across tasks).",
    "A utility function quantifies preferences; planning algorithms — graph search, heuristic search, MCTS, hierarchical, constraint satisfaction — produce action sequences.",
    "Generative AI does not replace classical AI; it upgrades every component via data augmentation, contextual understanding, natural-language interfaces, and creative proposals.",
    "An LLM plus tool calling is the minimal viable agent; the LLM reasons about turn order itself — no if-else dialog tree needed. That is the seed of every implementation in the rest of the book."
  ],
  common_pitfalls_zh: [
    "把監督式學習當成所有任務的萬靈丹——強化式或非監督式在某些情境(沒有標籤、長期決策)更合適。",
    "設計效用函數時忽略屬性間的關聯——把每個屬性加權相加,結果常與真實偏好相差很遠。",
    "迷信 LLM 而捨棄經典規劃演算法——LLM 提案、經典演算法驗證,這個混合範式才是穩定可靠的設計。"
  ],
  common_pitfalls_en: [
    "Treating supervised learning as the universal solution — RL or unsupervised methods may fit better when labels are missing or decisions span long horizons.",
    "Designing a utility function as a simple weighted sum and ignoring attribute interactions — real preferences are rarely linear.",
    "Worshipping the LLM and abandoning classical planners — the dependable pattern is LLM proposes, classical algorithm verifies."
  ],
  quiz: [
    {
      question_zh: "醫生看到病人有「發燒、咳嗽、肌肉酸痛」,推測他可能得了流感。這屬於哪一種推理?",
      question_en: "A doctor sees \"fever, cough, body aches\" in a patient and concludes they probably have the flu. Which reasoning mode is this?",
      options_zh: [
        "演繹推理",
        "歸納推理",
        "溯因推理",
        "純粹的隨機猜測"
      ],
      options_en: [
        "Deductive reasoning",
        "Inductive reasoning",
        "Abductive reasoning",
        "Pure random guessing"
      ],
      answer_index: 2,
      explanation_zh: "醫生是從「觀察到的症狀」反推「最可能的原因」,這正是溯因推理 (inference to the best explanation)。演繹是「規則 + 事證 -> 必然結論」;歸納是「大量觀察 -> 一般規則」;只有溯因是「現象 -> 可能原因」。醫療診斷、刑案偵查、故障診斷都是溯因的主場。",
      explanation_en: "The doctor moves from observed symptoms to the most likely cause — that is abduction, the inference to the best explanation. Deduction goes rule + evidence -> necessary conclusion; induction goes many observations -> general rule; only abduction goes phenomenon -> probable cause. Diagnosis, criminal investigation, and fault detection are abduction's home turf."
    },
    {
      question_zh: "下列哪一項最適合用「強化學習」來訓練?",
      question_en: "Which task is best suited to reinforcement learning?",
      options_zh: [
        "把 10000 張貓狗照片分類",
        "把客戶依購買行為分群",
        "讓機器人學會在不平的地面行走,反覆嘗試並接受跌倒的回饋",
        "翻譯英文文章成中文"
      ],
      options_en: [
        "Classify 10,000 cat-or-dog photos",
        "Cluster customers by purchasing behavior",
        "Teach a robot to walk on uneven terrain through trial and feedback from falls",
        "Translate English text into Chinese"
      ],
      answer_index: 2,
      explanation_zh: "選項 1 有標籤適合監督式;選項 2 沒有標籤、要找結構,適合非監督式;選項 4 是序列翻譯,通常用監督式或序列模型。選項 3 是典型的強化學習場景——代理人在環境中試錯、跌倒(懲罰)、站起來、最後學會穩定行走。AlphaGo、機器人控制、自動駕駛都用 RL。",
      explanation_en: "Option 1 is labeled — supervised. Option 2 has no labels and needs structure — unsupervised. Option 4 is sequence translation — typically supervised/sequence models. Option 3 is the canonical RL setup: the agent tries actions, falls (penalty), recovers, and eventually learns stable walking. AlphaGo, robot control, and self-driving all rely on RL."
    },
    {
      question_zh: "為什麼工程師設計效用函數時常加入「對價格」的反向關係(例如 1000 − price)?",
      question_en: "Why do engineers often include an inverse term such as (1000 - price) when building a utility function?",
      options_zh: [
        "因為價格永遠不能超過 1000",
        "因為價格越低越好——把它反過來轉成「越低 = 越高效用」",
        "因為這是 OpenAI 規定的格式",
        "為了讓最終分數總和等於 100"
      ],
      options_en: [
        "Because price can never exceed 1000",
        "Because lower price is better — inverting it turns \"lower price\" into \"higher utility\"",
        "Because OpenAI requires this format",
        "To make the total score equal 100"
      ],
      answer_index: 1,
      explanation_zh: "效用函數的設計原則是「越好的屬性,效用應該越高」。價格是「越低越好」的屬性,所以工程師會用 (常數 − price) 的形式把它反轉成「值越大、效用越大」的單調遞增形式。舒適度、便利度則是「越高越好」,直接乘上權重即可。",
      explanation_en: "Utility functions should make \"better\" yield a higher number. Price is a lower-is-better attribute, so engineers transform it via (constant - price) to convert it into a monotonically increasing contribution. Comfort and convenience are higher-is-better and just get a positive weight directly."
    },
    {
      question_zh: "在 LLM 加工具呼叫的代理人中,「對話流程」是怎麼決定的?",
      question_en: "In an LLM-with-tool-calling agent, how is the dialog flow determined?",
      options_zh: [
        "工程師寫一個 if-else 對話樹寫死流程",
        "由 LLM 在每一輪根據對話上下文自行推斷(問什麼、何時呼叫工具、何時收尾)",
        "由用戶手動指示「現在請呼叫工具」",
        "由 OpenAI 雲端伺服器決定"
      ],
      options_en: [
        "The engineer hard-codes an if-else dialog tree",
        "The LLM reasons each turn from the conversation context — what to ask, when to call a tool, when to wrap up",
        "The user must say \"call the tool now\" explicitly",
        "OpenAI's cloud server picks the order"
      ],
      answer_index: 1,
      explanation_zh: "這是 LLM 代理人與傳統 chatbot 最大的差別。傳統 chatbot 需要工程師寫對話樹;LLM 代理人只需給它「工具描述」和「目標」,它會在每一輪自己判斷該問什麼、何時呼叫工具、何時把結果用自然語言回報。這種彈性正是現代代理人快速擴張的關鍵。",
      explanation_en: "This is the dividing line between LLM agents and classical chatbots. Classical chatbots require a hand-written dialog tree; an LLM agent just needs tool descriptions and a goal, and it reasons per turn about what to ask, when to call, and how to summarize. That flexibility is why modern agents scale so quickly."
    },
    {
      question_zh: "下列關於「生成式 AI 升級經典代理人元件」的敘述,哪一個最準確?",
      question_en: "Which statement most accurately describes how generative AI upgrades classical agent components?",
      options_zh: [
        "生成式 AI 完全取代經典 AI,經典演算法不再需要",
        "生成式 AI 與經典 AI 合作:LLM 提供廣度與創意,經典演算法提供精確與保證",
        "生成式 AI 只用於圖像,不影響其他代理人元件",
        "生成式 AI 主要的貢獻是讓代理人變便宜"
      ],
      options_en: [
        "Generative AI fully replaces classical AI; classical algorithms are obsolete",
        "Generative AI cooperates with classical AI: LLMs provide breadth and creativity, classical algorithms provide precision and guarantees",
        "Generative AI is only for images and does not affect other components",
        "Generative AI's main contribution is making agents cheaper"
      ],
      answer_index: 1,
      explanation_zh: "生成式 AI 與經典 AI 是互補關係,不是取代關係。LLM 擅長語言理解與創意提案,但缺乏精確保證(會幻覺、會推理錯)。經典演算法(約束滿足、圖搜尋、效用函數)擅長精確與可驗證。最強的代理人是「LLM 提案 + 經典演算法驗證」的混合模式——這也是本書後續所有實作的核心哲學。",
      explanation_en: "Generative and classical AI are complementary, not substitutes. LLMs excel at language and creative proposals but lack guarantees (they hallucinate and reason imperfectly). Classical algorithms (CSP, graph search, utility functions) provide precision and verifiability. The strongest pattern is LLM-proposes-classical-verifies, and that is the design philosophy across every implementation chapter ahead."
    }
  ]
};

export const part1Chapters = [chapter1, chapter2, chapter3];
