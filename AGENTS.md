# AGENTS.md

本文件說明本專案的架構規則、程式碼規範與檔案命名慣例。所有 AI agent 與貢獻者都必須嚴格遵守這些規範。

---

## 1. 檔案命名與結構慣例

### A. Next.js 檔案慣例
- 嚴格遵循 Next.js App Router 的檔案慣例：
  - 路由區段：`app/[route]/page.tsx`
  - Layout：`layout.tsx`
  - Loading UI：`loading.tsx`
  - Error UI：`error.tsx`
  - Not Found UI：`not-found.tsx`
  - API / Route Handler：`route.ts`
- `app/` 底下的資料夾名稱一律使用小寫 `kebab-case`。

### B. 元件命名慣例（語義化命名，不加前綴）
- **純語義化命名。** 元件檔案以「它是什麼」來命名，使用 `kebab-case`，**不加任何前綴**：`hero.tsx`、`navbar.tsx`、`card.tsx`、`container.tsx`、`project-grid.tsx`、`neon-background.tsx`、`scramble-text.tsx`、`glitch-text.tsx`。
  - `custom-` 這類前綴不帶任何資訊，**禁止使用**。不要重新引入這種前綴。
- **`components/` 依「功能」分成三個資料夾，而不是依「來源」分：**
  - `components/ui/` — 通用、與內容無關的基礎積木。判斷方式：把這個網站的文案/資料抽掉，元件依然說得通(`card.tsx`、`container.tsx`、`navbar.tsx`)。
  - `components/sections/` — 頁面專屬的區塊，組合 `ui/` 的積木並帶入這個網站實際的內容(`hero.tsx`、`project-grid.tsx`)。這些元件一旦少了本站資料就會變成空殼、失去意義。
  - `components/effects/` — 自成一體、完全由 props 驅動的視覺/行為效果，本身不帶任何內容(`neon-background.tsx`、`scramble-text.tsx`、`glitch-text.tsx`)。一個元件只有在**不**靠 import variants 檔來套自己的樣式時才算屬於這裡——樣式要由呼叫端透過 `className`(或等效 prop)傳入，做法比照 `scramble-text.tsx`。命名順序統一「效果在前、主體在後」(`scramble-text`、`glitch-text`)。
  - 若未來引入第三方套件(例如 shadcn/ui)且它的元件名稱與我們的撞名，vendor 進來的版本要用路徑而非前綴來區隔命名空間(例如 `components/vendor/card.tsx` vs `components/ui/card.tsx`)——絕不為了閃避撞名而改掉任一邊的檔名。
- **元件匯出**：`PascalCase`，且要與檔名完全對應(`hero.tsx` → `export default function Hero()`)。
- **Props 介面**：命名為 `<ComponentName>Props`(`CardProps`、`ProjectGridProps`)。
- **Variants 檔**：樣式邏輯與元件檔放在同一層、同檔名加 `.variants.ts`(`components/sections/hero.tsx` ↔ `components/sections/hero.variants.ts`)，絕不另開一個鏡射的資料夾存放。匯出的 variant 物件命名為 `<name>Variants`(`heroVariants`、`cardVariants`)，並以 `VariantProps<typeof xVariants>` 標型別。`effects/` 底下的元件不需要 variants 檔——理由見上一點。
- **共用工具函式**放在 `lib/`(例如 `lib/utils.ts` 匯出 `cn()`，一個包裝 `clsx` + `tailwind-merge` 的函式)。

---

## 2. 路由與頁面架構

### A. 保留路由

- **`app/page.tsx` — 禁止修改。** 這個檔案保留作為未來的擴充點(i18n 入口、行銷首頁、A/B 路由分流等)。維持它是最精簡的根目錄 stub。絕不把作品集內容搬進這裡，絕不刪除它，也絕不因為做其他工作而順手改動它。要改動這個檔案必須有明確、直接指名此檔案的請求。
- **主要作品集路由**：整合在 `app/home/page.tsx`。所有主題都透過這一個路由渲染——絕不把不同主題拆成不同路由(例如 `/home/cyberpunk`)。

### B. `app/test` — UI / 元件沙盒

`app/test` 底下只允許放兩樣東西：`page.tsx` 和 `_sandbox/`。這一層不該有其他東西。

- **`page.tsx`** 是沙盒 SPA 的外殼，負責：
  - candidate 清單(`_sandbox/` 底下每個檔案對應一筆，並在選單中分組)。
  - 浮動控制選單本身，直接內嵌在這個檔案裡——選單屬於外殼，不是 candidate，所以不放進 `_sandbox/`。
  - 不擁有自己的導覽列。`/test` 上唯一的 chrome 是根 layout 提供的正式 navbar；選單是釘在右上角的單一按鈕(`fixed top-16 right-3`，避開固定的正式 navbar)，點擊後展開分組清單。選取項目、按 Escape、或點擊外部都會收起選單。
- **`_sandbox/`** 每個 demo 各自一個檔案，各自是自成一體、預設匯出的頁面元件。不要用一個共用的「demos」檔案在內部切換版本——如果某個 candidate 需要在不同版本間切換，該做的是拆成更多 candidate 檔案，而不是加內部 tab 狀態。
  - **直接寫樣式。** Candidate 本質上是探索性的：直接寫行內 Tailwind class，不用 `tv()`，不建 variants 檔。Variants 是一種要付出代價的抽象，只有在設計定案、要被 promote 進 `components/` 時才值得付這個代價——設計還在變動時提早引入只會增加不必要的折騰。
  - **預設是可拋棄的。** 一個沒有下文的 candidate 應該直接刪除，而不是封存起來。Git 歷史紀錄本身就是封存。
  - **`current-components.tsx` 與 `candidate-components.tsx` 是「直接寫樣式」這條規則的例外。** 這兩個檔案合起來就是所謂的「元件庫」，會拆成兩個頁面是基於一條誠實性的界線，而不是風格選擇：
    - `current-components.tsx` 直接從 `components/` import 展示品，而不是重新實作一份，這樣正式環境的 regression 也會在這裡顯現出來。
    - `candidate-components.tsx` 收留那些原本要被刪除的 candidate 裡值得保留的部分——依然是直接寫樣式(它們從未被 promote 過)，但被保留下來而不是隨候選檔案一起消失。如果某個展示品的原始檔案還存在別處(尚未被刪除)，標註為 `kept from: x.tsx (still present there)`；如果原始檔案已經被真的刪除了，標註為 `was: x.tsx`——這兩種說法意義不同，不可混用。
    - 這兩個頁面的版面都是由 `library-specimen.tsx` 組成的(`LibraryPage`、`Category`、`Specimen`、`SwatchSpecimen`)，展示品要分組放在具名的 `Category`區塊底下——絕不是攤平的清單。`SwatchSpecimen` 用於「背景色本身就是要保留的一部分」的作品(例如某張卡片是針對特定畫布顏色設計的)；它會用該作品實際的背景色渲染展示框，而不是 `Specimen` 預設中性的 `bg-black/40`。
  - 每當一個元件被 promote，就要在 `current-components.tsx` 加一筆展示品；每當一個 candidate 被清除、但其中一部分值得留下，就要在 `candidate-components.tsx` 加一筆。
- **Promote 流程**：一個 candidate 要進入 `components/`，必須是明確的決定，不會自動發生。Promote 意味著：依第 1 節命名、依第 3 節建立 `tv()` variants 檔(除非符合第 3B 節的豁免情形)、把它接進 `app/home/page.tsx`(或它該屬於的地方)——並在 `current-components.tsx` 加一筆展示品。它原本的 candidate 檔案接著就要刪除。

---

## 3. 主題化與元件架構(Token 驅動)

**只有主題註冊表知道一個主題長什麼樣子。** 新增第二個主題只需要在 `app/globals.css` 裡加一個 `[data-theme="..."]` 區塊——不應該有任何 `.tsx` 檔案需要跟著改動。

| 層級 | 位置 | 職責 | 知道目前是哪個主題嗎？ |
|---|---|---|---|
| **註冊表(Registry)** | `app/globals.css` | 以 CSS 變數定義每個主題的所有顏色、圓角、陰影、字體 | ✅ 唯一知道的地方 |
| **Variants** | `components/{ui,sections}/*.variants.ts` | 透過 `tv()` 把語義化 token 對應到 Tailwind class | ❌ |
| **元件(Component)** | `components/*.tsx` | 語義化的 DOM 骨架與行為 | ❌(見下方唯一例外) |

這套規則只適用於 `components/`。`app/test/_sandbox/*`(`library` 相關檔案除外)明確豁免——見第 2B 節。

### A. 主題註冊表(`app/globals.css`)
- 目前只有**一個**主題 `cyberpunk`，重現了網站原本的設計。`:root` 直接帶入它的數值，所以正式環境不需要任何 provider、也不需要在任何地方加 `data-theme` 屬性就能正確渲染。
- 字體變數宣告在 `app/layout.tsx` 的 `<html>` 上，**不是** `<body>`。註冊表的作用範圍是 `:root`，而 CSS 變數只會向下繼承——如果宣告在 `<body>` 上，`:root` 就看不到這些變數，顯示字體會在你毫無察覺的情況下解析失敗。
- 只使用語義化 token；元件絕對不該直接看到字面上的顏色值。
  - 顏色：`background`、`foreground`、`emphasis`、`muted`、`subtle`、`surface`、`surface-raised`、`media`、`border`、`accent`、`link`、`link-hover`、`highlight`、`tag`
  - 幾何：`radius-card`、`radius-media`、`radius-tag`
  - 字型：`font-display`(依主題而異)、`font-sans`、`font-mono`、`font-pixel`
  - 自訂 utility：`link-glow`、`heading-emboss`
- `foreground` 與 `emphasis` 刻意分成兩個獨立 token，而不是合併成一個——即使在同一個主題內，內文文字與標題也可以渲染成不同的實際顏色(例如 `#ededed` 對 `#ffffff`)。

**開發過程中踩到的兩個 Tailwind v4 陷阱，值得記住：**
- `@theme inline` **不接受**巢狀的 `var()` fallback(`var(--a, var(--b))`)——這個 utility 會悄悄地生成失敗。改成在 `:root` 區塊裡給這個變數一個真正的預設值。
- 自訂 utility 命名要避開 Tailwind 自己的前綴。曾經有個叫 `border-theme` 的 utility 被 `tailwind-merge` 悄悄丟棄，因為它被歸類成跟 `border-border` 衝突的 border utility。取名時偏好 `theme-border` 這種形式，或者更好的是完全不會跟任何 Tailwind 屬性前綴撞名的名稱(`link-glow`、`heading-emboss`)。

### B. 多插槽樣式(`tailwind-variants`)
- 元件樣式使用 `tv()` 搭配 `slots`；匯出為 `<name>Variants`，並附上它的 `VariantProps` 型別。
- Variants 檔裡**不可以**出現 `theme:` 這種 variant 表。如果你發現自己在寫 `theme: { cyberpunk: ..., somethingElse: ... }`，代表這個差異該放進註冊表，而不是這裡——這正是 token 層存在的意義。
- `variants:` 保留給真正的元件層級狀態與選項使用(`active`、`size`、`disabled`)——絕不能拿來表示全域主題。
- 專案已安裝 `tailwind-merge` 與 `clsx`；`tv()` 會處理 class 衝突，所以呼叫端傳入的 `className` 能可靠地覆蓋底層 class。對於不使用 `tv` 的一般元件，改用 `lib/utils.ts` 裡的 `cn()`。

### C. 唯一允許的主題判斷
元件可以針對「結構性」的問題做分支判斷——也就是某段 DOM 或某個效果是否存在——但絕不能針對「目前是哪個主題」做分支，因為目前只有一個主題。如果之後新增了第二個主題、且某個元件在主題之間需要「結構性」(而非樣式性)的差異，那段判斷可以讀取目前的主題，但必須註明「為什麼這是結構性而非樣式性」的理由：

```tsx
// ✅ 允許——結構性：某個主題整個關閉了這個效果
const useGlitchText = theme !== "someTheme";

// ❌ 禁止——樣式性：這應該放進註冊表
const color = theme === "someTheme" ? "text-zinc-900" : "text-pink-500";
```
