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

### B. Component Naming Conventions (shadcn/ui style + custom prefix)
- **Exact Match with shadcn/ui**: If a component exists in shadcn/ui, the file name MUST match shadcn/ui's exact naming:
  - Example: Use `card.tsx`, `badge.tsx`, `button.tsx`, `theme-provider.tsx`, `mode-toggle.tsx` / `theme-toggle.tsx`.
- **Custom / Domain Components**: For all components NOT in shadcn/ui, prefix the file name with `custom-` in kebab-case:
  - Example: `custom-navbar.tsx`, `custom-hero.tsx`, `custom-grid.tsx`, `custom-neon-background.tsx`, `custom-text-scramble.tsx`, `custom-container.tsx`, `custom-hero-glitch-title.tsx`, `custom-terminal-window.tsx`.
- **Component Exports**: Component names inside the file must use `PascalCase` matching the semantic concept (e.g., `export function Card()`, `export function CustomNavbar()`, `export function CustomHero()`, `export function ThemeToggle()`).
- **Variants Files**: Tailwind Variant definitions should be placed in `components/variants/` in `kebab-case` corresponding to component file names (e.g., `card.ts`, `custom-grid.ts`, `custom-hero.ts`, `custom-navbar.ts`).

---

## 2. Routing & Page Architecture

- **`app/page.tsx`**: Reserved and kept empty/minimal. Do not put portfolio home content directly in `app/page.tsx` without explicit user request.
- **Main Portfolio Route**: Consolidated in `app/home/page.tsx`. Do NOT split themes into separate routes (`/home/cyberpunk`, `/home/vanilla`, etc.). All themes are rendered through the single route `/home`.

---

## 3. Theming & Component Architecture (Headless / Unstyled-First)

### A. Global Theme Management (`next-themes`)
- Use `next-themes` with `<ThemeProvider>` wrapped in the root layout.
- Supported themes: `cyberpunk`, `citypop`, `vanilla`.
- Theme switching is handled in memory via `useTheme()` hook and synchronized with `localStorage` (zero FOUC, no full-page reloads).

### B. Multi-Slot Styling (`tailwind-variants`)
- Use `tailwind-variants` (`tv`) for component variant styling.
- Components maintain a clean, semantic, unstyled DOM skeleton.
- All styles, borders, colors, and slot classes (`container`, `title`, `description`, `imageWrapper`, `tag`, etc.) are defined in `components/variants/*.ts`.
- Avoid hardcoding theme conditional checks (`if (variant === 'vanilla') ...`) inside components.
