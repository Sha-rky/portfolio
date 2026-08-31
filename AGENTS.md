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
- **Main Portfolio Route**: Consolidated in `app/home/page.tsx`. Do NOT split themes into separate routes (`/home/cyberpunk`, `/home/vanilla`, etc.). All themes are rendered through the single route `/home`.

### B. `app/test` — UI / Component Sandbox

- **`app/test/` is the sandbox for all UI and component experimentation.** Every visual experiment, component demo, theme comparison, and design spike belongs here — never in `app/home` and never in `app/page.tsx`.
- Demo components live in `app/test/_components/`. The underscore prefix keeps the folder private to the route (Next.js does not treat `_components` as a route segment).
- `app/test/page.tsx` is a tab-based SPA shell; register each new demo as a tab there rather than creating additional `app/test/*` routes.
- Content in `app/test` is **disposable by definition**. It is not production surface, is excluded from portfolio navigation, and may be deleted once a component graduates into `components/`.
- Promotion path: prototype in `app/test/_components/` → stabilize → extract into `components/` following the naming rules in section 1 → compose into `app/home/page.tsx`.

---

## 3. Theming & Component Architecture (Token-Driven, Unstyled-First)

The architecture has three layers. **Only the token layer knows what a theme looks like.** Adding a fourth theme must require editing exactly one file: `app/globals.css`.

| Layer | Location | Responsibility | Knows the theme? |
|---|---|---|---|
| **Token** | `app/globals.css` | Defines every colour, radius, shadow, and display font per theme as CSS variables | ✅ the only place |
| **Variants** | `components/variants/*.ts` | Maps semantic tokens onto Tailwind classes via `tv()` | ❌ |
| **Component** | `components/*.tsx` | Semantic DOM skeleton and behaviour | ❌ (see the one exception below) |

### A. Global Theme Management (`next-themes`)
- `<ThemeProvider>` wraps the root layout with `attribute="data-theme"` (not `class`), `defaultTheme="cyberpunk"`, `enableSystem={false}`.
- Supported themes: `cyberpunk`, `citypop`, `vanilla`. The list is defined once in `lib/hooks/use-theme-mode.ts` as `VALID_THEMES`; never re-declare it inline in a component.
- Theme switching is in-memory via `useTheme()`, synced to `localStorage` (zero FOUC, no full-page reloads).
- **Font variables must be declared on `<html>`, not `<body>`.** The token layer is scoped to `:root`, and CSS variables only inherit downward — putting `next/font` variables on `<body>` makes them invisible to `:root` and silently breaks per-theme fonts.

### B. Token Layer (`app/globals.css`)
- Semantic tokens only. Components must never see a literal colour.
  - Colours: `background`, `foreground`, `muted`, `surface`, `surface-raised`, `border`, `border-strong`, `accent`, `accent-foreground`, `secondary`
  - Geometry: `radius-card`, `radius-control`, `radius-tag`
  - Effects: `shadow-card`, `shadow-card-hover`, `shadow-control`
  - Type: `font-display` (theme-dependent), `font-sans`, `font-mono`, `font-pixel`
  - Custom utilities: `glow-accent`, `border-theme`, `blur-surface`
- Each theme is one `[data-theme="..."]` block. `:root` carries the default (`cyberpunk`) values.

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

Every such use must carry a comment explaining why it is structural. Current legitimate cases: the glitch title in `hero.tsx`, the retro window chrome in `card.tsx`, and the ambient glow in the home composition.
