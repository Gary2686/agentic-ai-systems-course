/* ============================================================
   Inline SVG diagrams for the course
   Each key matches a section id (e.g. "1.2") so the renderer
   can attach a diagram inline with the section content.
   ============================================================ */

export const diagrams = {
  // ============== Chapter 1 ==============
  "1.1": {
    caption_zh: "圖 1.1 — 判別式模型與生成式模型的根本差異",
    caption_en: "Fig 1.1 — Discriminative vs. Generative models",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2452d6"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <text x="180" y="30" text-anchor="middle" font-weight="800" font-size="16" fill="#0f1d36">Discriminative · 判別式</text>
          <rect x="60" y="60" width="240" height="220" rx="14" fill="#fff" stroke="#d8dff0"/>
          <rect x="86" y="92" width="86" height="34" rx="6" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="129" y="115" text-anchor="middle" font-size="13" fill="#0f1d36">🐱 cat</text>
          <rect x="190" y="92" width="86" height="34" rx="6" fill="#fff0d8" stroke="#f3c275"/>
          <text x="233" y="115" text-anchor="middle" font-size="13" fill="#0f1d36">🐶 dog</text>
          <line x1="86" y1="158" x2="276" y2="218" stroke="#2452d6" stroke-width="2" stroke-dasharray="6 4"/>
          <text x="181" y="252" text-anchor="middle" font-size="12" fill="#5d6c8a">學會「分界線」/ Decision boundary</text>

          <text x="540" y="30" text-anchor="middle" font-weight="800" font-size="16" fill="#0f1d36">Generative · 生成式</text>
          <rect x="420" y="60" width="240" height="220" rx="14" fill="#fff" stroke="#d8dff0"/>
          <g>
            <circle cx="470" cy="115" r="14" fill="#0d8f86" opacity="0.16"/>
            <circle cx="510" cy="135" r="12" fill="#0d8f86" opacity="0.16"/>
            <circle cx="555" cy="115" r="16" fill="#0d8f86" opacity="0.16"/>
            <circle cx="600" cy="140" r="13" fill="#0d8f86" opacity="0.16"/>
            <circle cx="475" cy="170" r="11" fill="#0d8f86" opacity="0.16"/>
            <circle cx="525" cy="180" r="14" fill="#0d8f86" opacity="0.16"/>
            <circle cx="580" cy="175" r="10" fill="#0d8f86" opacity="0.16"/>
          </g>
          <text x="540" y="220" text-anchor="middle" font-size="12" fill="#5d6c8a">學會「資料分布」/ Probability distribution</text>
          <rect x="470" y="232" width="48" height="34" rx="6" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="494" y="255" text-anchor="middle" font-size="13">🐱✨</text>
          <rect x="528" y="232" width="48" height="34" rx="6" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="552" y="255" text-anchor="middle" font-size="13">🐶✨</text>
          <rect x="586" y="232" width="48" height="34" rx="6" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="610" y="255" text-anchor="middle" font-size="13">🐈✨</text>
          <text x="540" y="294" text-anchor="middle" font-size="11" fill="#5d6c8a">產生新樣本 · Generated samples</text>
        </g>
      </svg>`,
  },
  "1.2": {
    caption_zh: "圖 1.2 — 生成式模型家族（VAE / GAN / Autoregressive）",
    caption_en: "Fig 1.2 — Family tree of generative models",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="280" y="20" width="160" height="46" rx="10" fill="#2452d6"/>
          <text x="360" y="50" text-anchor="middle" fill="#fff" font-weight="800" font-size="15">Generative AI</text>

          <line x1="360" y1="66" x2="130" y2="120" stroke="#9eb9ff" stroke-width="2"/>
          <line x1="360" y1="66" x2="360" y2="120" stroke="#9eb9ff" stroke-width="2"/>
          <line x1="360" y1="66" x2="590" y2="120" stroke="#9eb9ff" stroke-width="2"/>

          <rect x="50" y="120" width="160" height="50" rx="8" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="130" y="142" text-anchor="middle" font-weight="700" font-size="13">VAE</text>
          <text x="130" y="158" text-anchor="middle" font-size="11" fill="#5d6c8a">編碼 → 潛在空間 → 解碼</text>

          <rect x="280" y="120" width="160" height="50" rx="8" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="360" y="142" text-anchor="middle" font-weight="700" font-size="13">GAN</text>
          <text x="360" y="158" text-anchor="middle" font-size="11" fill="#5d6c8a">生成器 vs. 判別器</text>

          <rect x="510" y="120" width="160" height="50" rx="8" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="590" y="142" text-anchor="middle" font-weight="700" font-size="13">Autoregressive</text>
          <text x="590" y="158" text-anchor="middle" font-size="11" fill="#5d6c8a">逐 token 依序生成</text>

          <line x1="590" y1="170" x2="590" y2="210" stroke="#b1a3e7" stroke-width="2"/>
          <rect x="490" y="210" width="200" height="46" rx="8" fill="#fff" stroke="#b1a3e7"/>
          <text x="590" y="232" text-anchor="middle" font-weight="700" font-size="13">Transformer</text>
          <text x="590" y="250" text-anchor="middle" font-size="11" fill="#5d6c8a">GPT · BERT · T5</text>

          <line x1="590" y1="256" x2="590" y2="290" stroke="#b1a3e7" stroke-width="2"/>
          <rect x="510" y="290" width="160" height="18" rx="6" fill="#0f1d36"/>
          <text x="590" y="304" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">LLM-powered Agents</text>
        </g>
      </svg>`,
  },
  "1.3": {
    caption_zh: "圖 1.3 — Transformer 區塊核心元件",
    caption_en: "Fig 1.3 — Core components of a Transformer block",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="40" y="240" width="640" height="40" rx="10" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="360" y="265" text-anchor="middle" font-weight="700" font-size="13">Token + Positional Encoding · 詞向量 + 位置編碼</text>

          <line x1="360" y1="240" x2="360" y2="210" stroke="#5d6c8a" stroke-width="2"/>
          <rect x="160" y="160" width="400" height="50" rx="10" fill="#fff0d8" stroke="#f3c275"/>
          <text x="360" y="184" text-anchor="middle" font-weight="700" font-size="13">Multi-Head Self-Attention · 多頭自注意力</text>
          <text x="360" y="202" text-anchor="middle" font-size="11" fill="#5d6c8a">每個 token 動態關注其他 token</text>

          <line x1="360" y1="160" x2="360" y2="130" stroke="#5d6c8a" stroke-width="2"/>
          <rect x="200" y="80" width="320" height="50" rx="10" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="360" y="104" text-anchor="middle" font-weight="700" font-size="13">Feed-Forward + LayerNorm</text>
          <text x="360" y="122" text-anchor="middle" font-size="11" fill="#5d6c8a">逐位置非線性變換 + 殘差連接</text>

          <line x1="360" y1="80" x2="360" y2="50" stroke="#5d6c8a" stroke-width="2"/>
          <rect x="280" y="20" width="160" height="34" rx="8" fill="#0f1d36"/>
          <text x="360" y="42" text-anchor="middle" fill="#fff" font-weight="700" font-size="12">Output · 預測下一 token</text>
        </g>
      </svg>`,
  },
  "1.4": {
    caption_zh: "圖 1.4 — LLM agent 的工具呼叫流程（航班預訂助理）",
    caption_en: "Fig 1.4 — Tool-calling loop of an LLM agent (flight assistant)",
    svg: `
      <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2452d6"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="30" y="110" width="120" height="60" rx="12" fill="#fff" stroke="#9eb9ff"/>
          <text x="90" y="135" text-anchor="middle" font-weight="700" font-size="13">使用者</text>
          <text x="90" y="153" text-anchor="middle" font-size="11" fill="#5d6c8a">User</text>

          <line x1="150" y1="140" x2="240" y2="140" stroke="#2452d6" stroke-width="2" marker-end="url(#ar2)"/>

          <rect x="240" y="80" width="240" height="120" rx="14" fill="#2452d6"/>
          <text x="360" y="110" text-anchor="middle" font-weight="800" font-size="15" fill="#fff">LLM Agent</text>
          <text x="360" y="132" text-anchor="middle" font-size="12" fill="#cfd9f7">CoT 思考 · 缺資訊？</text>
          <text x="360" y="152" text-anchor="middle" font-size="12" fill="#cfd9f7">選工具 · 呼叫 API</text>
          <text x="360" y="172" text-anchor="middle" font-size="12" fill="#cfd9f7">整合結果 · 回應</text>

          <line x1="480" y1="140" x2="570" y2="140" stroke="#2452d6" stroke-width="2" marker-end="url(#ar2)"/>

          <rect x="570" y="50" width="120" height="50" rx="8" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="630" y="72" text-anchor="middle" font-weight="700" font-size="12">flightLookup()</text>
          <text x="630" y="88" text-anchor="middle" font-size="10" fill="#5d6c8a">搜尋航班</text>

          <rect x="570" y="115" width="120" height="50" rx="8" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="630" y="137" text-anchor="middle" font-weight="700" font-size="12">bookFlight()</text>
          <text x="630" y="153" text-anchor="middle" font-size="10" fill="#5d6c8a">預訂機票</text>

          <rect x="570" y="180" width="120" height="50" rx="8" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="630" y="202" text-anchor="middle" font-weight="700" font-size="12">sendPayment()</text>
          <text x="630" y="218" text-anchor="middle" font-size="10" fill="#5d6c8a">寄付款連結</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 2 ==============
  "2.1": {
    caption_zh: "圖 2.1 — Agency · Autonomy · Self-governance 三層關係",
    caption_en: "Fig 2.1 — Agency, Autonomy, Self-governance",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <circle cx="360" cy="170" r="140" fill="none" stroke="#9eb9ff" stroke-width="2" stroke-dasharray="6 6"/>
          <circle cx="360" cy="170" r="92" fill="none" stroke="#7fc9c0" stroke-width="2" stroke-dasharray="6 6"/>
          <circle cx="360" cy="170" r="46" fill="#0f1d36"/>
          <text x="360" y="167" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">Self-</text>
          <text x="360" y="185" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">governance</text>

          <text x="360" y="95" text-anchor="middle" font-weight="700" font-size="14" fill="#0d8f86">Autonomy · 自主性</text>
          <text x="360" y="50" text-anchor="middle" font-weight="700" font-size="14" fill="#2452d6">Agency · 行動權</text>

          <text x="100" y="180" font-size="12" fill="#5d6c8a">能感知 · 能行動</text>
          <text x="555" y="180" font-size="12" fill="#5d6c8a">能自己決定怎麼做</text>
          <text x="240" y="305" font-size="12" fill="#5d6c8a">最內層：能自我規範與限制</text>
        </g>
      </svg>`,
  },
  "2.2": {
    caption_zh: "圖 2.2 — Deliberative / Reactive / Hybrid 三種架構",
    caption_en: "Fig 2.2 — Deliberative, Reactive, and Hybrid architectures",
    svg: `
      <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="20" y="30" width="220" height="220" rx="14" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="130" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#2452d6">Deliberative</text>
          <text x="130" y="80" text-anchor="middle" font-size="12" fill="#5d6c8a">深思熟慮型</text>
          <text x="40" y="120" font-size="12" fill="#0f1d36">• 建立世界模型</text>
          <text x="40" y="140" font-size="12" fill="#0f1d36">• 規劃多步驟</text>
          <text x="40" y="160" font-size="12" fill="#0f1d36">• 慢但精確</text>
          <text x="40" y="200" font-size="11" fill="#5d6c8a">例：旅遊行程規劃</text>

          <rect x="250" y="30" width="220" height="220" rx="14" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="360" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#c97a17">Reactive</text>
          <text x="360" y="80" text-anchor="middle" font-size="12" fill="#5d6c8a">即時反應型</text>
          <text x="270" y="120" font-size="12" fill="#0f1d36">• 感知 → 行動</text>
          <text x="270" y="140" font-size="12" fill="#0f1d36">• 不建長期計畫</text>
          <text x="270" y="160" font-size="12" fill="#0f1d36">• 快但短視</text>
          <text x="270" y="200" font-size="11" fill="#5d6c8a">例：避障機器人</text>

          <rect x="480" y="30" width="220" height="220" rx="14" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="590" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#6b46c1">Hybrid</text>
          <text x="590" y="80" text-anchor="middle" font-size="12" fill="#5d6c8a">混合型</text>
          <text x="500" y="120" font-size="12" fill="#0f1d36">• 上層規劃</text>
          <text x="500" y="140" font-size="12" fill="#0f1d36">• 下層反應</text>
          <text x="500" y="160" font-size="12" fill="#0f1d36">• 兼顧速度與深度</text>
          <text x="500" y="200" font-size="11" fill="#5d6c8a">例：自動駕駛</text>
        </g>
      </svg>`,
  },
  "2.3": {
    caption_zh: "圖 2.3 — 多代理系統 (MAS) 的協作機制",
    caption_en: "Fig 2.3 — Multi-Agent Systems coordination",
    svg: `
      <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#5d6c8a"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <circle cx="360" cy="60" r="36" fill="#2452d6"/>
          <text x="360" y="58" text-anchor="middle" fill="#fff" font-weight="800" font-size="12">Coord.</text>
          <text x="360" y="74" text-anchor="middle" fill="#fff" font-size="10">協調者</text>

          <line x1="350" y1="96" x2="180" y2="180" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar3)"/>
          <line x1="360" y1="96" x2="360" y2="180" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar3)"/>
          <line x1="370" y1="96" x2="540" y2="180" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar3)"/>

          <circle cx="160" cy="210" r="32" fill="#0d8f86"/>
          <text x="160" y="208" text-anchor="middle" fill="#fff" font-weight="800" font-size="11">Worker A</text>
          <text x="160" y="222" text-anchor="middle" fill="#fff" font-size="10">搜尋</text>

          <circle cx="360" cy="210" r="32" fill="#c97a17"/>
          <text x="360" y="208" text-anchor="middle" fill="#fff" font-weight="800" font-size="11">Worker B</text>
          <text x="360" y="222" text-anchor="middle" fill="#fff" font-size="10">分析</text>

          <circle cx="560" cy="210" r="32" fill="#6b46c1"/>
          <text x="560" y="208" text-anchor="middle" fill="#fff" font-weight="800" font-size="11">Worker C</text>
          <text x="560" y="222" text-anchor="middle" fill="#fff" font-size="10">撰寫</text>

          <line x1="194" y1="220" x2="326" y2="220" stroke="#5d6c8a" stroke-width="1" stroke-dasharray="4 4"/>
          <line x1="394" y1="220" x2="526" y2="220" stroke="#5d6c8a" stroke-width="1" stroke-dasharray="4 4"/>

          <text x="360" y="285" text-anchor="middle" font-size="11" fill="#5d6c8a">虛線表示 worker 之間的訊息傳遞 · Dotted = peer messaging</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 3 ==============
  "3.1": {
    caption_zh: "圖 3.1 — 知識表示三大方式：語意網路、Frames、邏輯",
    caption_en: "Fig 3.1 — Three knowledge representation styles",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <text x="120" y="30" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Semantic Network</text>
          <circle cx="60" cy="100" r="22" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="60" y="104" text-anchor="middle" font-size="11">Bird</text>
          <circle cx="180" cy="100" r="22" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="180" y="104" text-anchor="middle" font-size="11">Sparrow</text>
          <line x1="82" y1="100" x2="158" y2="100" stroke="#5d6c8a"/>
          <text x="120" y="92" text-anchor="middle" font-size="10" fill="#5d6c8a">is-a</text>
          <circle cx="120" cy="180" r="22" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="120" y="184" text-anchor="middle" font-size="11">Fly</text>
          <line x1="68" y1="118" x2="110" y2="160" stroke="#5d6c8a"/>
          <text x="70" y="160" font-size="10" fill="#5d6c8a">can</text>

          <text x="360" y="30" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Frames</text>
          <rect x="280" y="50" width="160" height="180" rx="8" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="360" y="74" text-anchor="middle" font-weight="700" font-size="13">Frame: Patient</text>
          <line x1="290" y1="84" x2="430" y2="84" stroke="#f3c275"/>
          <text x="296" y="108" font-size="12" fill="#0f1d36">name: ___</text>
          <text x="296" y="130" font-size="12" fill="#0f1d36">age: ___</text>
          <text x="296" y="152" font-size="12" fill="#0f1d36">symptoms: ___</text>
          <text x="296" y="174" font-size="12" fill="#0f1d36">diagnosis: ___</text>
          <text x="296" y="196" font-size="12" fill="#0f1d36">history: ___</text>

          <text x="600" y="30" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Logic</text>
          <rect x="500" y="50" width="200" height="180" rx="8" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="600" y="80" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11">∀x. Bird(x) →</text>
          <text x="600" y="100" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11">CanFly(x)</text>
          <text x="600" y="135" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="11">Bird(Tweety).</text>
          <text x="600" y="170" text-anchor="middle" font-weight="700" font-size="12" fill="#6b46c1">⊢ CanFly(Tweety)</text>
          <text x="600" y="210" text-anchor="middle" font-size="11" fill="#5d6c8a">嚴格、可推導</text>
        </g>
      </svg>`,
  },
  "3.2": {
    caption_zh: "圖 3.2 — 三種推理方式：演繹、歸納、溯因",
    caption_en: "Fig 3.2 — Deductive, Inductive, Abductive reasoning",
    svg: `
      <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="20" y="30" width="220" height="200" rx="12" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="130" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#2452d6">Deductive · 演繹</text>
          <text x="35" y="95" font-size="12">規則：天鵝是白的</text>
          <text x="35" y="115" font-size="12">事實：這是天鵝</text>
          <text x="35" y="145" font-weight="700" font-size="12" fill="#2452d6">結論：這是白色</text>
          <text x="35" y="195" font-size="11" fill="#5d6c8a">由通則 → 個案</text>
          <text x="35" y="212" font-size="11" fill="#5d6c8a">保證為真</text>

          <rect x="250" y="30" width="220" height="200" rx="12" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="360" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#c97a17">Inductive · 歸納</text>
          <text x="265" y="95" font-size="12">100 隻天鵝都是白的</text>
          <text x="265" y="115" font-size="12">下一隻天鵝...</text>
          <text x="265" y="145" font-weight="700" font-size="12" fill="#c97a17">推測：應該也是白色</text>
          <text x="265" y="195" font-size="11" fill="#5d6c8a">由樣本 → 通則</text>
          <text x="265" y="212" font-size="11" fill="#5d6c8a">可能反例</text>

          <rect x="480" y="30" width="220" height="200" rx="12" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="590" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#6b46c1">Abductive · 溯因</text>
          <text x="495" y="95" font-size="12">草地是濕的</text>
          <text x="495" y="115" font-size="12">下雨會讓地濕</text>
          <text x="495" y="145" font-weight="700" font-size="12" fill="#6b46c1">最佳解釋：剛下過雨</text>
          <text x="495" y="195" font-size="11" fill="#5d6c8a">由現象 → 原因</text>
          <text x="495" y="212" font-size="11" fill="#5d6c8a">醫學診斷常用</text>
        </g>
      </svg>`,
  },
  "3.3": {
    caption_zh: "圖 3.3 — 智慧型代理人 PEAS 結構（感知-思考-行動迴路）",
    caption_en: "Fig 3.3 — PEAS perceive-think-act loop",
    svg: `
      <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2452d6"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="240" y="20" width="240" height="220" rx="16" fill="#0f1d36"/>
          <text x="360" y="50" text-anchor="middle" fill="#fff" font-weight="800" font-size="15">Agent</text>
          <rect x="270" y="70" width="180" height="38" rx="8" fill="#1d2c4f"/>
          <text x="360" y="94" text-anchor="middle" fill="#cfd9f7" font-size="12">Knowledge · 知識</text>
          <rect x="270" y="115" width="180" height="38" rx="8" fill="#1d2c4f"/>
          <text x="360" y="139" text-anchor="middle" fill="#cfd9f7" font-size="12">Reasoning · 推理</text>
          <rect x="270" y="160" width="180" height="38" rx="8" fill="#1d2c4f"/>
          <text x="360" y="184" text-anchor="middle" fill="#cfd9f7" font-size="12">Planning · 規劃</text>
          <rect x="270" y="205" width="180" height="22" rx="6" fill="#0d8f86"/>
          <text x="360" y="221" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">Utility Function · 效用函式</text>

          <rect x="40" y="100" width="140" height="60" rx="10" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="110" y="125" text-anchor="middle" font-weight="700" font-size="13">Sensors</text>
          <text x="110" y="145" text-anchor="middle" font-size="11" fill="#5d6c8a">感測器</text>
          <line x1="180" y1="130" x2="240" y2="130" stroke="#2452d6" stroke-width="2" marker-end="url(#ar4)"/>
          <text x="210" y="120" text-anchor="middle" font-size="10" fill="#5d6c8a">percept</text>

          <rect x="540" y="100" width="140" height="60" rx="10" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="610" y="125" text-anchor="middle" font-weight="700" font-size="13">Actuators</text>
          <text x="610" y="145" text-anchor="middle" font-size="11" fill="#5d6c8a">執行器</text>
          <line x1="480" y1="130" x2="540" y2="130" stroke="#2452d6" stroke-width="2" marker-end="url(#ar4)"/>
          <text x="510" y="120" text-anchor="middle" font-size="10" fill="#5d6c8a">action</text>

          <text x="360" y="252" text-anchor="middle" font-size="11" fill="#5d6c8a">Environment · 環境</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 4 ==============
  "4.1": {
    caption_zh: "圖 4.1 — 反思迴路：草稿 → 評估 → 修正",
    caption_en: "Fig 4.1 — Reflection loop: draft → evaluate → revise",
    svg: `
      <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#0d8f86"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <circle cx="150" cy="130" r="60" fill="#e6efff" stroke="#9eb9ff" stroke-width="2"/>
          <text x="150" y="125" text-anchor="middle" font-weight="800" font-size="14" fill="#2452d6">Draft</text>
          <text x="150" y="145" text-anchor="middle" font-size="12" fill="#5d6c8a">產出初稿</text>

          <circle cx="360" cy="130" r="60" fill="#fdf3e1" stroke="#f3c275" stroke-width="2"/>
          <text x="360" y="125" text-anchor="middle" font-weight="800" font-size="14" fill="#c97a17">Evaluate</text>
          <text x="360" y="145" text-anchor="middle" font-size="12" fill="#5d6c8a">對照標準檢查</text>

          <circle cx="570" cy="130" r="60" fill="#e4f6f3" stroke="#7fc9c0" stroke-width="2"/>
          <text x="570" y="125" text-anchor="middle" font-weight="800" font-size="14" fill="#0d8f86">Revise</text>
          <text x="570" y="145" text-anchor="middle" font-size="12" fill="#5d6c8a">修正或重做</text>

          <path d="M 210 130 L 300 130" stroke="#0d8f86" stroke-width="2" fill="none" marker-end="url(#ar5)"/>
          <path d="M 420 130 L 510 130" stroke="#0d8f86" stroke-width="2" fill="none" marker-end="url(#ar5)"/>
          <path d="M 540 178 Q 360 240 180 178" stroke="#0d8f86" stroke-width="2" fill="none" stroke-dasharray="5 5" marker-end="url(#ar5)"/>
          <text x="360" y="232" text-anchor="middle" font-size="12" fill="#5d6c8a">不通過則回頭重寫</text>
        </g>
      </svg>`,
  },
  "4.2": {
    caption_zh: "圖 4.2 — 後設推理：對自己策略下判斷",
    caption_en: "Fig 4.2 — Meta-reasoning: judging one's own strategy",
    svg: `
      <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="40" y="40" width="640" height="200" rx="14" fill="#fff" stroke="#d8dff0"/>
          <text x="360" y="68" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Meta-reasoning · 後設推理</text>

          <rect x="80" y="100" width="180" height="100" rx="10" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="170" y="125" text-anchor="middle" font-weight="700" font-size="13">Object-level</text>
          <text x="170" y="143" text-anchor="middle" font-size="11" fill="#5d6c8a">物件層思考</text>
          <text x="170" y="170" text-anchor="middle" font-size="11">「答案是什麼？」</text>

          <rect x="460" y="100" width="180" height="100" rx="10" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="550" y="125" text-anchor="middle" font-weight="700" font-size="13">Meta-level</text>
          <text x="550" y="143" text-anchor="middle" font-size="11" fill="#5d6c8a">後設層思考</text>
          <text x="550" y="170" text-anchor="middle" font-size="11">「我的方法對嗎？」</text>

          <line x1="260" y1="135" x2="460" y2="135" stroke="#5d6c8a" stroke-width="2"/>
          <line x1="260" y1="165" x2="460" y2="165" stroke="#5d6c8a" stroke-width="2" stroke-dasharray="4 4"/>
          <text x="360" y="128" text-anchor="middle" font-size="11" fill="#5d6c8a">monitor 監看</text>
          <text x="360" y="180" text-anchor="middle" font-size="11" fill="#5d6c8a">control 介入</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 5 ==============
  "5.1": {
    caption_zh: "圖 5.1 — Function Calling：意圖 → schema → 執行 → 回填",
    caption_en: "Fig 5.1 — Function calling pipeline",
    svg: `
      <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2452d6"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="20" y="70" width="130" height="70" rx="10" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="85" y="98" text-anchor="middle" font-weight="700" font-size="13">User Intent</text>
          <text x="85" y="118" text-anchor="middle" font-size="11" fill="#5d6c8a">「找去東京的機票」</text>

          <line x1="150" y1="105" x2="200" y2="105" stroke="#2452d6" stroke-width="2" marker-end="url(#ar6)"/>

          <rect x="200" y="70" width="160" height="70" rx="10" fill="#fff" stroke="#9eb9ff"/>
          <text x="280" y="92" text-anchor="middle" font-weight="700" font-size="13">LLM</text>
          <text x="280" y="110" text-anchor="middle" font-size="11" fill="#5d6c8a">參數萃取 / Schema fill</text>
          <text x="280" y="128" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="10">{ to:"TYO" }</text>

          <line x1="360" y1="105" x2="410" y2="105" stroke="#2452d6" stroke-width="2" marker-end="url(#ar6)"/>

          <rect x="410" y="70" width="160" height="70" rx="10" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="490" y="92" text-anchor="middle" font-weight="700" font-size="13">Tool / API</text>
          <text x="490" y="110" text-anchor="middle" font-size="11" fill="#5d6c8a">flightLookup({...})</text>
          <text x="490" y="128" text-anchor="middle" font-size="11" fill="#5d6c8a">回傳結構化結果</text>

          <line x1="570" y1="105" x2="620" y2="105" stroke="#2452d6" stroke-width="2" marker-end="url(#ar6)"/>

          <rect x="620" y="70" width="80" height="70" rx="10" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="660" y="98" text-anchor="middle" font-weight="700" font-size="13">Reply</text>
          <text x="660" y="118" text-anchor="middle" font-size="11" fill="#5d6c8a">摘要回覆</text>

          <path d="M 660 140 Q 660 195 85 190 Q 85 160 85 140" stroke="#2452d6" stroke-width="2" fill="none" stroke-dasharray="5 5" marker-end="url(#ar6)"/>
          <text x="360" y="210" text-anchor="middle" font-size="11" fill="#5d6c8a">回到使用者並驗證 / Return and validate</text>
        </g>
      </svg>`,
  },
  "5.2": {
    caption_zh: "圖 5.2 — Sequential vs. Parallel 工具規劃",
    caption_en: "Fig 5.2 — Sequential vs. parallel tool planning",
    svg: `
      <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#5d6c8a"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <text x="180" y="30" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Sequential · 依序</text>
          <rect x="60" y="50" width="60" height="40" rx="8" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="90" y="74" text-anchor="middle" font-size="12">Search</text>
          <line x1="120" y1="70" x2="160" y2="70" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar7)"/>
          <rect x="160" y="50" width="60" height="40" rx="8" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="190" y="74" text-anchor="middle" font-size="12">Filter</text>
          <line x1="220" y1="70" x2="260" y2="70" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar7)"/>
          <rect x="260" y="50" width="60" height="40" rx="8" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="290" y="74" text-anchor="middle" font-size="12">Rank</text>
          <text x="180" y="115" text-anchor="middle" font-size="11" fill="#5d6c8a">後一步依賴前一步</text>

          <text x="540" y="30" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Parallel · 並行</text>
          <rect x="420" y="40" width="80" height="40" rx="8" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="460" y="64" text-anchor="middle" font-size="12">Flights</text>
          <rect x="420" y="90" width="80" height="40" rx="8" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="460" y="114" text-anchor="middle" font-size="12">Hotels</text>
          <rect x="420" y="140" width="80" height="40" rx="8" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="460" y="164" text-anchor="middle" font-size="12">Weather</text>
          <line x1="500" y1="60" x2="600" y2="110" stroke="#5d6c8a" stroke-width="2"/>
          <line x1="500" y1="110" x2="600" y2="110" stroke="#5d6c8a" stroke-width="2"/>
          <line x1="500" y1="160" x2="600" y2="110" stroke="#5d6c8a" stroke-width="2"/>
          <rect x="600" y="90" width="80" height="40" rx="8" fill="#0f1d36"/>
          <text x="640" y="114" text-anchor="middle" fill="#fff" font-size="12">Aggregate</text>
          <text x="540" y="220" text-anchor="middle" font-size="11" fill="#5d6c8a">獨立任務同時跑，再彙整</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 6 ==============
  "6.1": {
    caption_zh: "圖 6.1 — CWD 模型：協調者、工作者、委派者",
    caption_en: "Fig 6.1 — Coordinator–Worker–Delegator model",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#2452d6"/>
          </marker>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="280" y="20" width="160" height="60" rx="12" fill="#2452d6"/>
          <text x="360" y="46" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">Coordinator</text>
          <text x="360" y="66" text-anchor="middle" fill="#cfd9f7" font-size="11">總目標 · 拆解 · 整合</text>

          <line x1="320" y1="80" x2="180" y2="140" stroke="#2452d6" stroke-width="2" marker-end="url(#ar8)"/>
          <line x1="360" y1="80" x2="360" y2="140" stroke="#2452d6" stroke-width="2" marker-end="url(#ar8)"/>
          <line x1="400" y1="80" x2="540" y2="140" stroke="#2452d6" stroke-width="2" marker-end="url(#ar8)"/>

          <rect x="100" y="140" width="160" height="60" rx="12" fill="#0d8f86"/>
          <text x="180" y="166" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">Worker</text>
          <text x="180" y="184" text-anchor="middle" fill="#cdebe7" font-size="11">查景點</text>

          <rect x="280" y="140" width="160" height="60" rx="12" fill="#0d8f86"/>
          <text x="360" y="166" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">Worker</text>
          <text x="360" y="184" text-anchor="middle" fill="#cdebe7" font-size="11">查住宿</text>

          <rect x="460" y="140" width="160" height="60" rx="12" fill="#0d8f86"/>
          <text x="540" y="166" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">Worker</text>
          <text x="540" y="184" text-anchor="middle" fill="#cdebe7" font-size="11">查交通</text>

          <line x1="180" y1="200" x2="360" y2="250" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar8)"/>
          <line x1="360" y1="200" x2="360" y2="250" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar8)"/>
          <line x1="540" y1="200" x2="360" y2="250" stroke="#5d6c8a" stroke-width="2" marker-end="url(#ar8)"/>

          <rect x="260" y="250" width="200" height="50" rx="10" fill="#c97a17"/>
          <text x="360" y="274" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">Delegator</text>
          <text x="360" y="292" text-anchor="middle" fill="#fbe4c4" font-size="11">合併結果並交回協調者</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 7 ==============
  "7.1": {
    caption_zh: "圖 7.1 — Agent 記憶階層：工作 / 長期 / 情節",
    caption_en: "Fig 7.1 — Agent memory hierarchy",
    svg: `
      <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="60" y="30" width="180" height="200" rx="14" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="150" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#2452d6">Working</text>
          <text x="150" y="80" text-anchor="middle" font-size="12" fill="#5d6c8a">短期 · 當前任務</text>
          <text x="75" y="120" font-size="12">• context window</text>
          <text x="75" y="140" font-size="12">• 對話最近輪</text>
          <text x="75" y="160" font-size="12">• 當前計畫狀態</text>
          <text x="75" y="200" font-size="11" fill="#5d6c8a">幾秒~幾分鐘</text>

          <rect x="270" y="30" width="180" height="200" rx="14" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="360" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#0d8f86">Long-term</text>
          <text x="360" y="80" text-anchor="middle" font-size="12" fill="#5d6c8a">長期 · 可重用知識</text>
          <text x="285" y="120" font-size="12">• 知識庫 / vector DB</text>
          <text x="285" y="140" font-size="12">• 使用者偏好</text>
          <text x="285" y="160" font-size="12">• 領域規則</text>
          <text x="285" y="200" font-size="11" fill="#5d6c8a">天~月~年</text>

          <rect x="480" y="30" width="180" height="200" rx="14" fill="#efeaff" stroke="#b1a3e7"/>
          <text x="570" y="60" text-anchor="middle" font-weight="800" font-size="14" fill="#6b46c1">Episodic</text>
          <text x="570" y="80" text-anchor="middle" font-size="12" fill="#5d6c8a">情節 · 互動歷史</text>
          <text x="495" y="120" font-size="12">• 過往對話</text>
          <text x="495" y="140" font-size="12">• 任務成敗紀錄</text>
          <text x="495" y="160" font-size="12">• 重要事件時間軸</text>
          <text x="495" y="200" font-size="11" fill="#5d6c8a">隨任務逐步累積</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 8 ==============
  "8.1": {
    caption_zh: "圖 8.1 — 信任的三大支柱",
    caption_en: "Fig 8.1 — Three pillars of trust",
    svg: `
      <svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="60" y="60" width="180" height="140" rx="12" fill="#e6efff" stroke="#9eb9ff"/>
          <text x="150" y="100" text-anchor="middle" font-weight="800" font-size="18" fill="#2452d6">🔍</text>
          <text x="150" y="130" text-anchor="middle" font-weight="700" font-size="14">Transparency</text>
          <text x="150" y="150" text-anchor="middle" font-size="12" fill="#5d6c8a">透明度</text>
          <text x="150" y="180" text-anchor="middle" font-size="11" fill="#5d6c8a">說明做了什麼、依據什麼</text>

          <rect x="270" y="60" width="180" height="140" rx="12" fill="#fdf3e1" stroke="#f3c275"/>
          <text x="360" y="100" text-anchor="middle" font-weight="800" font-size="18">💡</text>
          <text x="360" y="130" text-anchor="middle" font-weight="700" font-size="14">Explainability</text>
          <text x="360" y="150" text-anchor="middle" font-size="12" fill="#5d6c8a">可解釋性</text>
          <text x="360" y="180" text-anchor="middle" font-size="11" fill="#5d6c8a">理由能對齊使用者語言</text>

          <rect x="480" y="60" width="180" height="140" rx="12" fill="#e4f6f3" stroke="#7fc9c0"/>
          <text x="570" y="100" text-anchor="middle" font-weight="800" font-size="18">🎛</text>
          <text x="570" y="130" text-anchor="middle" font-weight="700" font-size="14">User Control</text>
          <text x="570" y="150" text-anchor="middle" font-size="12" fill="#5d6c8a">使用者控制</text>
          <text x="570" y="180" text-anchor="middle" font-size="11" fill="#5d6c8a">能拒絕、修改、撤回</text>

          <text x="360" y="40" text-anchor="middle" font-weight="800" font-size="15" fill="#0f1d36">Calibrated Trust · 校準的信任</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 9 ==============
  "9.1": {
    caption_zh: "圖 9.1 — 風險來源分類圖",
    caption_en: "Fig 9.1 — Taxonomy of AI risks",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="280" y="20" width="160" height="44" rx="10" fill="#c0395a"/>
          <text x="360" y="48" text-anchor="middle" fill="#fff" font-weight="800" font-size="14">AI Risks</text>

          <line x1="320" y1="64" x2="120" y2="120" stroke="#c0395a" stroke-width="1.5"/>
          <line x1="340" y1="64" x2="280" y2="120" stroke="#c0395a" stroke-width="1.5"/>
          <line x1="380" y1="64" x2="440" y2="120" stroke="#c0395a" stroke-width="1.5"/>
          <line x1="400" y1="64" x2="600" y2="120" stroke="#c0395a" stroke-width="1.5"/>

          <rect x="40" y="120" width="160" height="60" rx="8" fill="#fce8ed" stroke="#f0b7c5"/>
          <text x="120" y="144" text-anchor="middle" font-weight="700" font-size="13">Adversarial</text>
          <text x="120" y="164" text-anchor="middle" font-size="11" fill="#5d6c8a">prompt injection</text>

          <rect x="220" y="120" width="160" height="60" rx="8" fill="#fce8ed" stroke="#f0b7c5"/>
          <text x="300" y="144" text-anchor="middle" font-weight="700" font-size="13">Bias</text>
          <text x="300" y="164" text-anchor="middle" font-size="11" fill="#5d6c8a">資料偏誤、歧視</text>

          <rect x="400" y="120" width="160" height="60" rx="8" fill="#fce8ed" stroke="#f0b7c5"/>
          <text x="480" y="144" text-anchor="middle" font-weight="700" font-size="13">Hallucination</text>
          <text x="480" y="164" text-anchor="middle" font-size="11" fill="#5d6c8a">編造、錯誤資訊</text>

          <rect x="540" y="120" width="160" height="60" rx="8" fill="#fce8ed" stroke="#f0b7c5"/>
          <text x="620" y="144" text-anchor="middle" font-weight="700" font-size="13">Privacy / IP</text>
          <text x="620" y="164" text-anchor="middle" font-size="11" fill="#5d6c8a">資料外洩、智財</text>

          <rect x="40" y="220" width="660" height="60" rx="10" fill="#fff" stroke="#d8dff0"/>
          <text x="370" y="244" text-anchor="middle" font-weight="700" font-size="13" fill="#0f1d36">Controls · 控制手段</text>
          <text x="370" y="266" text-anchor="middle" font-size="11" fill="#5d6c8a">輸入過濾 · 輸出檢查 · 權限最小化 · 稽核紀錄 · 人類審核 · 模型紅隊</text>
        </g>
      </svg>`,
  },

  // ============== Chapter 10 ==============
  "10.1": {
    caption_zh: "圖 10.1 — 生成式 AI 應用全景圖",
    caption_en: "Fig 10.1 — Landscape of GenAI applications",
    svg: `
      <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg">
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <circle cx="360" cy="160" r="55" fill="#0f1d36"/>
          <text x="360" y="158" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">Generative</text>
          <text x="360" y="176" text-anchor="middle" fill="#fff" font-weight="800" font-size="13">AI</text>

          <g>
            <line x1="320" y1="125" x2="180" y2="60" stroke="#9eb9ff" stroke-width="1.5"/>
            <rect x="60" y="40" width="170" height="50" rx="8" fill="#e6efff" stroke="#9eb9ff"/>
            <text x="145" y="62" text-anchor="middle" font-weight="700" font-size="13">Creative & Art</text>
            <text x="145" y="80" text-anchor="middle" font-size="11" fill="#5d6c8a">影像 · 音樂 · 設計</text>
          </g>
          <g>
            <line x1="400" y1="125" x2="540" y2="60" stroke="#7fc9c0" stroke-width="1.5"/>
            <rect x="490" y="40" width="170" height="50" rx="8" fill="#e4f6f3" stroke="#7fc9c0"/>
            <text x="575" y="62" text-anchor="middle" font-weight="700" font-size="13">NLP / Chat</text>
            <text x="575" y="80" text-anchor="middle" font-size="11" fill="#5d6c8a">客服 · 翻譯 · 摘要</text>
          </g>
          <g>
            <line x1="320" y1="195" x2="180" y2="260" stroke="#f3c275" stroke-width="1.5"/>
            <rect x="60" y="240" width="170" height="50" rx="8" fill="#fdf3e1" stroke="#f3c275"/>
            <text x="145" y="262" text-anchor="middle" font-weight="700" font-size="13">Robotics</text>
            <text x="145" y="280" text-anchor="middle" font-size="11" fill="#5d6c8a">自駕 · 工廠 · 物流</text>
          </g>
          <g>
            <line x1="400" y1="195" x2="540" y2="260" stroke="#b1a3e7" stroke-width="1.5"/>
            <rect x="490" y="240" width="170" height="50" rx="8" fill="#efeaff" stroke="#b1a3e7"/>
            <text x="575" y="262" text-anchor="middle" font-weight="700" font-size="13">Decision Support</text>
            <text x="575" y="280" text-anchor="middle" font-size="11" fill="#5d6c8a">財務 · 醫療 · 預測</text>
          </g>
        </g>
      </svg>`,
  },

  // ============== Chapter 11 ==============
  "11.1": {
    caption_zh: "圖 11.1 — 從專用 AI 到 AGI 的能力光譜",
    caption_en: "Fig 11.1 — From narrow AI toward AGI",
    svg: `
      <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0" x2="1">
            <stop offset="0" stop-color="#e6efff"/>
            <stop offset="0.5" stop-color="#e4f6f3"/>
            <stop offset="1" stop-color="#efeaff"/>
          </linearGradient>
        </defs>
        <g font-family="Inter,Noto Sans TC,sans-serif">
          <rect x="60" y="80" width="600" height="60" rx="30" fill="url(#grad1)" stroke="#d8dff0"/>

          <circle cx="130" cy="110" r="12" fill="#2452d6"/>
          <text x="130" y="160" text-anchor="middle" font-weight="700" font-size="12">Narrow AI</text>
          <text x="130" y="178" text-anchor="middle" font-size="11" fill="#5d6c8a">單一任務</text>

          <circle cx="290" cy="110" r="14" fill="#0d8f86"/>
          <text x="290" y="160" text-anchor="middle" font-weight="700" font-size="12">Multi-modal</text>
          <text x="290" y="178" text-anchor="middle" font-size="11" fill="#5d6c8a">跨模態</text>

          <circle cx="450" cy="110" r="16" fill="#c97a17"/>
          <text x="450" y="160" text-anchor="middle" font-weight="700" font-size="12">Agentic</text>
          <text x="450" y="178" text-anchor="middle" font-size="11" fill="#5d6c8a">能規劃行動</text>

          <circle cx="610" cy="110" r="22" fill="#6b46c1"/>
          <text x="610" y="160" text-anchor="middle" font-weight="700" font-size="12">AGI</text>
          <text x="610" y="178" text-anchor="middle" font-size="11" fill="#5d6c8a">通用智慧</text>

          <text x="360" y="50" text-anchor="middle" font-weight="800" font-size="14" fill="#0f1d36">Capability Spectrum · 能力光譜</text>
          <text x="360" y="210" text-anchor="middle" font-size="11" fill="#5d6c8a">每一階段都需要學習、推理、自我修正能力的躍升</text>
        </g>
      </svg>`,
  },
};
