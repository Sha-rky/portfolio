# AGENTS.md

This document outlines the architectural rules, coding standards, and file naming conventions for this project. All AI agents and contributors must strictly adhere to these guidelines.

---

## 1. File Naming & Structural Conventions

### A. Next.js File Conventions
- Strictly follow the Next.js App Router file conventions:
  - Route segments: `app/[route]/page.tsx`
  - Layouts: `layout.tsx`
  - Loading UI: `loading.tsx`
  - Error UI: `error.tsx`
  - Not Found UI: `not-found.tsx`
  - API / Route Handlers: `route.ts`
- Folder names within `app/` should be lowercase `kebab-case`.

### B. Component Naming Conventions (semantic names, no prefixes)
- **Plain semantic names.** Component files are named for what they are, in `kebab-case`, with **no prefix of any kind**: `hero.tsx`, `navbar.tsx`, `card.tsx`, `container.tsx`, `project-grid.tsx`, `neon-background.tsx`, `text-scramble.tsx`, `hero-glitch-title.tsx`.
  - A `custom-` prefix carries no information and is **forbidden**. Do not reintroduce it.
- **Namespacing is done with folders, not filename prefixes.** If a third-party library (e.g. shadcn/ui) is ever adopted and ships a component whose name collides with one of ours, the vendored copy goes in `components/ui/` and ours stays at `components/`. Path, not prefix, disambiguates: `components/ui/card.tsx` vs `components/card.tsx`.
- **Component Exports**: `PascalCase`, matching the file name exactly (`hero.tsx` → `export default function Hero()`).
- **Props interfaces**: `<ComponentName>Props` (`CardProps`, `ProjectGridProps`).
- **Variants Files**: styling lives in `components/variants/<same-name>.ts`, one-to-one with the component file (`hero.tsx` ↔ `variants/hero.ts`). The exported variant object is `<name>Variants` (`heroVariants`, `cardVariants`), typed with `VariantProps<typeof xVariants>`.
- **Shared helpers** live in `lib/` (e.g. `lib/utils.ts` exporting `cn()`, a `clsx` + `tailwind-merge` wrapper).

---

## 2. Routing & Page Architecture

### A. Reserved Routes

- **`app/page.tsx` — DO NOT MODIFY.** This file is reserved as a future extension point (i18n entry, landing/marketing page, A/B routing). Leave it as the minimal root stub. Never move portfolio content into it, never delete it, and never refactor it as a side effect of other work. Changing it requires an explicit, direct request naming this file.
- **Main Portfolio Route**: Consolidated in `app/home/page.tsx`. All theming is rendered through this single route — never split themes into separate routes (`/home/cyberpunk`, etc.).

### B. `app/test` — UI / Component Sandbox

`app/test` holds exactly two things: `page.tsx` and `_candidates/`. Nothing else belongs at this level.

- **`page.tsx`** is the sandbox SPA shell. It owns:
  - The list of candidates (one entry per file in `_candidates/`, grouped for the menu).
  - The floating control menu itself, inlined directly in this file — the menu is shell, not a candidate, so it does not live in `_candidates/`.
  - No navigation bar of its own. The production navbar from the root layout is the only chrome on `/test`; the menu is a single button pinned top-right (`fixed top-16 right-3`, clearing the fixed production navbar) that expands into a grouped list on click. Closes on select, on Escape, and on outside click.
- **`_candidates/`** holds one file per demo, each a self-contained, default-exported page component. No shared "demos" file switching between versions internally — if a candidate needs switching between variants, that's a reason to split it into more candidate files, not to add internal tab state.
  - **Style directly.** Candidates are exploratory by nature: write Tailwind classes inline, no `tv()`, no variants files. Variants are an abstraction worth paying for only once a design has settled and is promoted to `components/` — paying for it earlier just adds churn while the design is still moving.
  - **Disposable by default.** A candidate that isn't going anywhere gets deleted outright, not archived. Git history is the archive.
  - **The `library` candidate is the one exception to "style directly".** It exists specifically to showcase the components that *did* get promoted, and does so by importing them straight from `components/` rather than reimplementing them — so a regression in production shows up there too. Add a new `Specimen` entry to it whenever a component is promoted.
- **Promotion path**: a candidate earns a place in `components/` by explicit decision, not automatically. Promoting it means: naming it per section 1, giving it a `tv()` variants file per section 3, wiring it into `app/home/page.tsx` (or wherever it belongs) — and adding it to the `library` candidate as a specimen. The candidate file it came from is then deleted.

---

## 3. Theming & Component Architecture (Token-Driven)

**Only the theme registry knows what a theme looks like.** Adding a second theme means adding one `[data-theme="..."]` block to `app/globals.css` — no `.tsx` file should need to change.

| Layer | Location | Responsibility | Knows the theme? |
|---|---|---|---|
| **Registry** | `app/globals.css` | Defines every colour, radius, shadow, and font per theme as CSS variables | ✅ the only place |
| **Variants** | `components/variants/*.ts` | Maps semantic tokens onto Tailwind classes via `tv()` | ❌ |
| **Component** | `components/*.tsx` | Semantic DOM skeleton and behaviour | ❌ (see the one exception below) |

This applies to `components/` only. `app/test/_candidates/*` (other than `library`) is explicitly exempt — see section 2B.

### A. The Theme Registry (`app/globals.css`)
- Currently holds **one** theme, `cyberpunk`, reproducing the site's original design. `:root` carries its values directly, so production renders correctly with no provider and no `data-theme` attribute needed anywhere.
- Font variables are declared on `<html>` in `app/layout.tsx`, **not** `<body>`. The registry is scoped to `:root`, and CSS variables only inherit downward — on `<body>` they'd be invisible to `:root` and the display font would silently fail to resolve.
- Semantic tokens only; components must never see a literal colour.
  - Colours: `background`, `foreground`, `emphasis`, `muted`, `subtle`, `surface`, `surface-raised`, `media`, `border`, `accent`, `link`, `link-hover`, `highlight`, `tag`
  - Geometry: `radius-card`, `radius-media`, `radius-tag`
  - Type: `font-display` (theme-dependent), `font-sans`, `font-mono`, `font-pixel`
  - Custom utilities: `link-glow`, `heading-emboss`
- `foreground` and `emphasis` are deliberately separate tokens, not one collapsed into the other — body text and headings can render at different literal colours (e.g. `#ededed` vs `#ffffff`) even within a single theme.

**Two Tailwind v4 traps worth remembering, hit while building this:**
- `@theme inline` does **not** accept a nested `var()` fallback (`var(--a, var(--b))`) — the utility silently fails to generate. Give the variable a real default in a `:root` block instead.
- Name custom utilities clear of Tailwind's own prefixes. A utility named `border-theme` was silently dropped because `tailwind-merge` grouped it with `border-border` as a conflicting border utility. Prefer names like `theme-border` or, better, something that doesn't collide with any Tailwind property prefix at all (`link-glow`, `heading-emboss`).

### B. Multi-Slot Styling (`tailwind-variants`)
- Use `tv()` with `slots` for component styling; export as `<name>Variants` plus its `VariantProps` type.
- Variants files must contain **no `theme:` variant table**. If you find yourself writing `theme: { cyberpunk: ..., somethingElse: ... }`, the difference belongs in the registry instead — that's the whole point of the token layer.
- `variants:` is reserved for genuine component-level state and options (`active`, `size`, `disabled`) — never for the global theme.
- `tailwind-merge` and `clsx` are installed; `tv()` resolves class conflicts, so a caller's `className` reliably overrides base classes. For plain (non-`tv`) components, use `cn()` from `lib/utils.ts`.

### C. The One Permitted Theme Check
A component may branch on structural concerns — whether a piece of DOM or an effect exists at all — but never on which theme is active, since there is currently only one. If a second theme is added and a component needs a structural (not stylistic) difference between themes, that check reads the active theme and is annotated with why it's structural rather than stylistic:

```tsx
// ✅ allowed — structural: some theme opts out of an entire effect
const useGlitchTitle = theme !== "someTheme";

// ❌ forbidden — stylistic: this belongs in the registry
const color = theme === "someTheme" ? "text-zinc-900" : "text-pink-500";
```
