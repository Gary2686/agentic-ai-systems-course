# Building Agentic AI Systems — Interactive Bilingual Course

中英對照的互動式線上教材，依據《Building Agentic AI Systems》（Anjanava Biswas & Wrick Talukdar, Packt 2025）重新編寫。

> An original bilingual (Traditional Chinese + English) interactive course companion based on _Building Agentic AI Systems_ (Biswas & Talukdar, Packt 2025).

## 教材特色 · Features

- **11 個章節** 完整涵蓋三大主題：基礎、設計實作、信任與應用
- **中英並列** 三種閱讀模式：純中、純英、左右並列對照
- **內嵌 SVG 概念圖** 每節都有原創視覺化說明
- **生活化比喻 + 工作範例** 每個觀念都附上比喻與情境
- **可操作步驟** 程式碼或流程化教學內容
- **章末自我檢測** 5 題即時回饋的選擇題
- **學習進度** 自動追蹤已讀章節（localStorage）
- **無框架純前端** 純 HTML/CSS/ES Modules，可直接放 GitHub Pages

## 章節地圖 · Chapter Map

### Part I — 基礎 / Foundations
1. **生成式 AI 基礎** — VAE/GAN/Transformer 與 LLM 代理人入門
2. **代理系統原理** — 自主性、能動性、自我治理；三種代理架構
3. **智慧代理人的核心元件** — 知識表示、推理、學習、規劃

### Part II — 設計實作 / Design & Implementation
4. **反思與內省** — Meta-reasoning、自我說明、自我建模
5. **工具使用與規劃** — Function calling、規劃演算法、CrewAI/AutoGen/LangGraph
6. **協調者-工作者-委派者** — CWD 多代理協作模型
7. **有效的代理系統設計** — System prompts、狀態空間、記憶架構

### Part III — 信任、安全、倫理與應用 / Trust, Safety, Ethics
8. **建立 AI 系統的信任** — 透明度、可解釋性、不確定性處理
9. **管理安全與倫理** — 對抗攻擊、偏誤、隱私、智慧財產
10. **應用案例** — 創意、對話、機器人、決策支援
11. **結論與未來展望** — 多模態、AGI、學習如何學習

## 在本機執行 · Run locally

```bash
git clone https://github.com/Gary2686/agentic-ai-systems-course.git
cd agentic-ai-systems-course
python -m http.server 5173
# 瀏覽器開啟 http://localhost:5173
```

## 檔案結構 · File Structure

```
/
├── index.html        # 主頁面
├── styles.css        # 設計系統 + 響應式版型
├── main.js           # ES Module 主控制器（i18n、TOC、quiz、進度）
└── data/
    ├── part1.js      # 第 1-3 章內容
    ├── part2.js      # 第 4-7 章內容
    ├── part3.js      # 第 8-11 章內容
    └── diagrams.js   # 內嵌 SVG 概念圖
```

## 版權 · Copyright

本網站為葉欲禾（Gary Yu-Ho Yeh）自編之互動式線上教材，內容包含原創的教學整理、解釋、比喻、工作範例、概念圖與測驗設計，並依據書中觀念重新組織，未提供原書檔案，也不重製可替代原書的逐字內容。原書《Building Agentic AI Systems》版權屬 Packt Publishing 與作者所有。

This site is an original bilingual interactive course site authored by Gary Yu-Ho Yeh. It contains original instructional synthesis, analogies, examples, diagrams, and quiz design organized around concepts in the book; it does not redistribute the book or substitute for its content. The book itself remains the copyright of Packt Publishing and the authors.

**Web course © Gary Yu-Ho Yeh**
