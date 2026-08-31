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
- Folder names within `app/` should be lowercase `kebab-case` (e.g. `components-demo/`).

### B. Component Naming Conventions (semantic names, no prefixes)
- **Plain semantic names.** Component files are named for what they are, in `kebab-case`, with **no prefix of any kind**: `hero.tsx`, `navbar.tsx`, `grid.tsx`, `card.tsx`, `container.tsx`, `neon-background.tsx`, `text-scramble.tsx`, `terminal-window.tsx`, `hero-glitch-title.tsx`.
  - A `custom-` prefix carries no information and is **forbidden**. Do not reintroduce it.
- **Namespacing is done with folders, not filename prefixes.** If a third-party library (e.g. shadcn/ui) is ever adopted and ships a component whose name collides with one of ours, the vendored copy goes in `components/ui/` and ours stays at `components/`. Path, not prefix, disambiguates: `components/ui/card.tsx` vs `components/card.tsx`.
- **Component Exports**: `PascalCase`, matching the file name exactly (`hero.tsx` → `export function Hero()`, `theme-toggle.tsx` → `export function ThemeToggle()`).
- **Props interfaces**: `<ComponentName>Props` (`HeroProps`, `CardProps`).
- **Variants Files**: styling lives in `components/variants/<same-name>.ts`, one-to-one with the component file (`hero.tsx` ↔ `variants/hero.ts`). The exported variant object is `<name>Variants` (`heroVariants`, `cardVariants`).
- **Hooks** live in `lib/hooks/` as `use-*.ts`, never in `components/`.
- **Shared helpers** live in `lib/` (e.g. `lib/utils.ts` exporting `cn()`).

---

## 2. Routing & Page Architecture

### A. Reserved Routes

- **`app/page.tsx` — DO NOT MODIFY.** This file is reserved as a future extension point (i18n entry, landing/marketing page, A/B routing). Leave it as the minimal root stub. Never move portfolio content into it, never delete it, and never refactor it as a side effect of other work. Changing it requires an explicit, direct request naming this file.
- **`app/home/page.tsx` and `app/layout.tsx` — PRODUCTION SURFACE, fixed single theme.** These match main and must stay that way. No theme switcher, no `data-theme`, no token-layer utilities. Do not "improve", restyle, or refactor them as a side effect of sandbox work; changing them requires an explicit, direct request naming the file.
- **Production components** (`components/*.tsx`) belong to that fixed-theme surface and follow the same rule.

### B. `app/test` — UI / Component Sandbox

- **`app/test/` is the sandbox for all UI and component experimentation.** Every visual experiment, component demo, theme comparison, and design spike belongs here — never in `app/home` and never in `app/page.tsx`.
- Demo components live in `app/test/_components/`. The underscore prefix keeps the folder private to the route (Next.js does not treat `_components` as a route segment).
- The themed, token-driven component set lives in `app/test/_components/ui/` (with its `variants/`). It is sandbox-only and deliberately kept out of `components/`.
- `app/test/layout.tsx` mounts the sandbox `ThemeProvider`. **Theme switching exists only here.** It applies `data-theme` to a wrapper *inside* this subtree — never to `<html>` — so the production surface can never inherit it.
- `app/test/page.tsx` is a tab-based SPA shell; register each new demo as a tab there rather than creating additional `app/test/*` routes. Its toolbar sits at `top-14` to clear the fixed production navbar.
- Content in `app/test` is **disposable by definition**. It is not production surface and is excluded from portfolio navigation.
- Promotion path: prototype in `app/test/_components/` → stabilize → extract into `components/` following the naming rules in section 1 → compose into `app/home/page.tsx`. Promotion is an explicit, requested step, never automatic.

---

## 3. Theming & Component Architecture (Token-Driven, Unstyled-First)

**This entire section applies to the `/test` sandbox only.** The production surface (`app/home`, `app/layout.tsx`, `components/`) is fixed-theme and uses none of it.

**Only the token layer knows what a theme looks like.** Adding a fourth theme must require editing exactly one file: `app/globals.css`.

| Layer | Location | Responsibility | Knows the theme? |
|---|---|---|---|
| **Token** | `app/globals.css` | Defines every colour, radius, shadow, and display font per theme as CSS variables | ✅ the only place |
| **Variants** | `app/test/_components/ui/variants/*.ts` | Maps semantic tokens onto Tailwind classes via `tv()` | ❌ |
| **Component** | `app/test/_components/ui/*.tsx` | Semantic DOM skeleton and behaviour | ❌ (see the one exception below) |

### A. Sandbox Theme Management
- The provider is **hand-rolled**, in `app/test/_components/ui/theme-provider.tsx` — deliberately *not* `next-themes`.
  - `next-themes` always writes its attribute to `<html>`, which the root layout owns. A sandbox feature must not mutate the production document element; doing so both leaked themes into `/home` and forced `suppressHydrationWarning` onto the root layout.
  - Instead the provider renders `<div data-theme={theme} className="contents">`. `display: contents` keeps it out of layout while custom properties still inherit normally.
- Supported themes are declared once as `THEMES` in that file; never re-declare the list inline.
- Choice persists to `localStorage` under `sandbox-theme`, read after mount so server and client agree on first paint. Every access is wrapped in `try/catch` (private mode can throw).

### B. Token Layer (`app/globals.css`)
The file has two clearly separated halves; keep them separate.

1. **Production layer** — the original `:root` values, `font-cyberpunk`/`font-pixel` mappings, and the `body` rule. `/home` depends on these.
2. **Token layer** — every custom property namespaced `--theme-*`, scoped to `[data-theme="..."]`.

- **The token layer must never redefine `--background` or `--foreground`.** `body` reads those, so redefining them would repaint `/home` the moment a theme is picked in `/test`.
- Semantic tokens only; components never see a literal colour.
  - Colours: `background`, `foreground`, `muted`, `surface`, `surface-raised`, `border`, `border-strong`, `accent`, `accent-foreground`, `secondary`
  - Geometry: `radius-card`, `radius-control`, `radius-tag`
  - Effects: `shadow-card`, `shadow-card-hover`, `shadow-control`
  - Type: `font-display` (theme-dependent), `font-sans`, `font-mono`, `font-pixel`
  - Custom utilities: `glow-accent`, `theme-border`, `blur-surface`

**Two Tailwind v4 traps worth remembering:**
- `@theme inline` does **not** accept a nested `var()` fallback (`var(--a, var(--b))`) — the utility silently fails to generate. Give the variable a default in a `:root` block instead.
- Name custom utilities clear of Tailwind's own prefixes. `border-theme` was silently dropped because `tailwind-merge` grouped it with `border-border` as conflicting border utilities; renaming it `theme-border` fixed it.

### C. Multi-Slot Styling (`tailwind-variants`)
- Use `tv()` with `slots` for component styling; export as `<name>Variants` plus its `VariantProps` type.
- Variants files must contain **no `theme:` variant table**. If you find yourself writing `theme: { cyberpunk: ..., citypop: ... }`, the difference belongs in the token layer instead.
- `variants:` is reserved for genuine component-level state and options (`active`, `size`, `disabled`) — never for the global theme.
- `tailwind-merge` and `clsx` are installed; `tv()` resolves class conflicts, so a caller's `className` reliably overrides base classes. For plain (non-`tv`) components, use `cn()` from `lib/utils.ts`.

### D. The One Permitted Theme Check
A component may call `useThemeMode()` **only** to make a *structural* decision — whether a piece of DOM or an effect exists at all:

```tsx
// ✅ allowed — structural: vanilla has no glitch treatment
const useGlitchTitle = theme !== "vanilla";

// ❌ forbidden — stylistic: this belongs in the token layer
const color = theme === "vanilla" ? "text-zinc-900" : "text-pink-500";
```

Every such use must carry a comment explaining why it is structural. Current legitimate cases: the glitch title in `ui/hero.tsx`, the retro window chrome in `ui/card.tsx`, and the ambient glow in `home-preview.tsx`.
