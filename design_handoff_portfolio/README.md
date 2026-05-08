# Handoff: Diego A. Gómez Copete — Portfolio Site

## Overview
A single-page personal portfolio for **Diego Alejandro Gómez Copete**, a Graphic & Web Designer based in Bogotá, Colombia. The site presents a hero introduction, an "About" section, a "Selected Work" gallery (4 projects), a "Capabilities / Skills" grid, and a dark contact block. It is built as a static editorial layout with brutalist hairline rules, oversized display type, and a strict black-and-white palette.

## About the Design Files
The files bundled here (`Portfolio.html`, `image-slot.js`, `tweaks-panel.jsx`) are **design references created in HTML** — a working prototype showing the intended look and behavior. They are **not production code to copy verbatim**.

Your job is to **recreate this design in the target codebase's existing environment** (Next.js + React, Astro, plain HTML/CSS, etc.) using its established patterns, fonts, and libraries. If no codebase exists yet, choose the most appropriate stack — a static site generator (Astro/Eleventy) or Next.js are good defaults for a portfolio of this nature. The HTML prototype uses inline React + Babel transpilation in the browser only because that's how it was authored — production should be a normal build.

The image-slot mechanism in the prototype (drag-and-drop placeholders that persist via `localStorage`) was for the **designer to fill the layout**. In production, the dropped screenshots should become **static `<img>` tags pointing at hosted assets**.

## Fidelity
**High-fidelity (hifi).** Final palette, typography, spacing, and interaction states are all set. Recreate pixel-perfectly.

---

## Screens / Views

This is a single-page site. Sections, in order:

### 1. Sticky Top Nav
- **Layout**: 3-column grid (`1fr auto 1fr`), sticky at top, white background, single 1px ink underline.
- **Padding**: `16px clamp(20px, 4vw, 48px)`.
- **Left**: brand text — "Diego Gómez Copete", Geist Mono 12px / weight 500.
- **Center**: nav `<ul>`, items: About / Work / Skills / Contact, gap `24px`.
- **Right**: status pill — "Available", with a 7px green dot (`#16a34a`) that pulses (2s ease-in-out infinite, opacity 1 → 0.4 → 1).
- **Hover**: link color goes from `--ink` to `--ink-soft`.

### 2. Hero
- **Padding**: `clamp(40px, 7vw, 96px) clamp(20px, 4vw, 48px) clamp(40px, 6vw, 72px)`.
- **Max-width**: `1480px`, centered, with a 1px ink bottom border.
- **Meta row**: 4-col grid of mono labels — Designer / Based in / Practice / Index. Each cell has an uppercase 11px Geist Mono `lab` heading on top of a value line. 1px hairline underneath.
- **Headline (`h1`)**:
  - Font: Geist 500, `clamp(56px, 13vw, 220px)`, line-height 0.86, letter-spacing -0.055em.
  - Content (with mixed weights): "Graphic *&* / **web** designer / crafting *clear,* / purposeful work." — where `&` and `clear,` are weight 300, and `web` uses **outlined stroke** (`-webkit-text-stroke: 1.5px var(--ink); color: transparent`).
- **Sub-grid**: 3-column block under the headline (`5fr 4fr 4fr`), separated from headline by hairline + 32px padding-top:
  - `[01] Currently` — short paragraph.
  - `[02] Selected clients` — comma list: First Arriving, Cave Global, STM Education, Medimás.
  - `[03] For inquiries` — email link with bottom border.

### 3. Marquee Strip
- **Background**: `var(--ink)` (black) ; **color**: `var(--paper)` (white).
- **Padding**: `14px 0`. 1px ink bottom border.
- **Content**: horizontal scrolling track of `<span>`s separated by a small `◆` rotating marker, `42s` linear infinite.
- Items: Web Design / UI Design / HTML & CSS / Front-end / Responsive / Digital Media (duplicated for seamless loop).

### 4. About (`#about`)
- **Section header**: 2-col grid `200px 1fr`, hairline beneath.
  - Mono num: `[ 01 / 04 ] About` (the `01` is bold, the rest is `--ink-soft`).
  - `h2`: Geist 500, `clamp(36px, 6vw, 88px)`, letter-spacing -0.045em — "A designer with a *research-led approach.*" (second clause is weight 300).
- **Body**: 2-col grid (`1fr 1fr`).
  - Left "lede": Geist `clamp(22px, 2.6vw, 36px)`, line-height 1.18; mute spans wrap most of it; `Universidad Los Libertadores` is underlined.
  - Right column: 4 paragraphs (Background / How I work / What I love / Always learning), each with a `<strong>` lead-in.
- **Facts row**: 4-col grid below, hairline borders. Cells: Based in / Education / Focus / Languages.

### 5. Selected Work (`#work`)
- **Section header**: same pattern, num `[ 02 / 04 ] Selected work`, h2 "Projects, in *their own words.*"
- **Project list**: vertical stack with `gap: clamp(80px, 10vw, 140px)`.
- **Each project**: 2-col grid `5fr 7fr` (or `7fr 5fr` when `flip: true`).
  - Left **info column**: sticky at `top: 80px`. Contains:
    - Index pill — black square `02` + mono "Project 02 / 04" label.
    - Title — Geist 500, `clamp(38px, 5vw, 72px)`, letter-spacing -0.045em.
    - Meta tags — Geist Mono 11px uppercase, 1px soft border, padding `5px 10px`.
    - Description — 46ch max-width.
    - **Visit button**: 1px ink border, mono uppercase 12px, padding `10px 14px`. On hover: inverts to filled black on white text.
    - **No-link variant** (`.no-link`): pre-filled black with white text, no hover effect — used when project has no public URL. Label "Picture gallery →" with a small picture icon SVG.
  - Right **gallery**: 6-column CSS grid, gap `12px`. Image slots use the following layout configurations:
    - `lead-half-half-full`: 1 full-width hero (16:10), 2 halves (4:3), 1 wide (16:7).
    - `lead-third-third-third`: 1 full-width hero (16:10), 3 thirds (1:1).
    - `lead-half-half`: 1 full-width hero (16:10), 2 halves (4:3).
- **Mobile**: single column, info loses sticky.

### 6. Capabilities (`#skills`)
- **Section header**: `[ 03 / 04 ] Capabilities` / "What I bring to the *table.*"
- **3-column grid** of skill cards (1 column on mobile). Each cell:
  - 1px soft hairline borders, hover background `#fafafa`, padding `28px 24px 32px`.
  - Mono `↳ 0N` index.
  - h3 — Geist 500, `clamp(20px, 2vw, 26px)`.
  - 14px ink-soft body copy.
- **Skill list (3 cards)**:
  1. Web design — Responsive layouts, design systems, accessible front-end with HTML5/CSS3.
  2. UI design — Hierarchy, typography, interaction details.
  3. Front-end — Hand-coded HTML/CSS, light JavaScript, CMS-driven sites.
- **Tools row**: small uppercase tool pills (1px ink border) — Figma, Photoshop, Illustrator, HTML, CSS, JavaScript, React, Claude, WordPress.

### 7. Contact (`#contact`)
- **Background**: `var(--ink)` (black), text white, takes the full width.
- **Padding**: `clamp(60px, 9vw, 140px) clamp(20px, 4vw, 48px)`.
- **Lead row** (mono 11px uppercase, color `#999`): "[ 04 / 04 ] Contact" left, "↘ Open to freelance & full-time" right.
- **Big headline**: Geist 400, `clamp(48px, 11vw, 200px)`, letter-spacing -0.055em — "Let's make / *something* *good.*" (`something` is outlined stroke; `good.` is weight 300).
- **Email link**: Geist `clamp(22px, 3vw, 40px)`, white underline.
- **4-col contact grid**: Email / LinkedIn / Photography (Flickr) / Location (Bogotá, UTC−5).
- **Footer row**: mono 11px uppercase, copyright + "Designed & built in Bogotá" + "v2.0 · Updated 2025".

### 8. Floating "Save as PDF" Button
- Fixed bottom-right, `12px 18px` padding, mono 11px uppercase, black background, 1px ink border. On hover: inverts.
- Calls `window.print()`. The print stylesheet hides nav, marquee strip, the print button, and the tweaks panel; switches contact section to white-on-black off; sets A4 with 14mm margins.

---

## Interactions & Behavior

| Interaction | Behavior |
|---|---|
| **Marquee** | Continuous CSS animation, 42s linear infinite. Pure decorative. |
| **Status dot pulse** | 2s ease-in-out infinite opacity flicker. |
| **Project info sticky** | Stays visible while gallery scrolls (desktop only). |
| **Visit button hover** | 0.15s ease background/color invert. |
| **Skill card hover** | 0.2s background fade to `#fafafa`. |
| **Save as PDF** | Triggers `window.print()`. Print styles strip nav/marquee/buttons. |
| **Anchor links** | All internal nav links scroll to section IDs (`#about`, `#work`, `#skills`, `#contact`). Use `scroll-behavior: smooth` if the codebase supports it. |
| **Tweaks panel** | **Strip from production.** This was an authoring-time control for the designer (light/dark mode toggle, marquee on/off). |
| **`<image-slot>`** | **Strip from production.** Replace each placeholder with a static `<img>` once the screenshots are filled in. |

---

## State Management
This is a static, content-driven page. No client-side state is required in production beyond:
- Optional theme toggle if you want to keep the light/dark feature (persist in `localStorage`).
- Smooth scroll to anchor links.

The prototype's React tree (`PROJECTS` array → `Project` components) is just a convenience for the prototype author; in production you can either:
- Render the projects from a JSON/MDX/CMS data source, or
- Hand-author them as static markup in your framework's templating language.

---

## Design Tokens

### Colors (light mode — default)
| Token | Value | Usage |
|---|---|---|
| `--ink` | `#0a0a0a` | Primary text, hairlines, dark contact bg |
| `--paper` | `#ffffff` | Page background |
| `--ink-soft` | `#6b6b6b` | Secondary text, mono labels |
| `--rule` | `#0a0a0a` | Heavy hairlines (section dividers) |
| `--rule-soft` | `#e5e5e5` | Light hairlines (within sections) |
| `#16a34a` | green | "Available" status dot |
| `#fafafa` | very light gray | Image slot bg, skill card hover |

### Colors (dark mode)
| Token | Value |
|---|---|
| `--ink` | `#fafafa` |
| `--paper` | `#0a0a0a` |
| `--ink-soft` | `#888` |
| `--rule` | `#fafafa` |
| `--rule-soft` | `#222` |

### Typography
- **Display + sans**: `Geist`, weights 300 / 400 / 500 / 600 / 700 / 800 / 900. Fallback: system sans.
- **Mono**: `Geist Mono`, weights 400 / 500 / 600. Used for all `.label`, `.lab`, `.index`, `.num`, `.k`, `.tool`, status pill, button labels.
- **Letter-spacing**: large display headlines use `-0.055em`; section h2 uses `-0.045em`; body uses `-0.005em`; mono labels use `0.04em` uppercase.
- **Feature settings**: `font-feature-settings: "ss01", "ss02", "cv11"` on body for stylistic variants; mono uses `"zero", "ss01"`.

### Spacing scale
Most spacing uses `clamp()` for responsiveness. Common values:
- Section padding-y: `clamp(60px, 9vw, 140px)`
- Section padding-x: `clamp(20px, 4vw, 48px)`
- Section header bottom margin: `clamp(40px, 6vw, 80px)`
- Project gap: `clamp(80px, 10vw, 140px)`
- Gallery gap: `12px`
- Inner column gaps: `clamp(24px, 4vw, 64px)`

### Border radius
- **All sharp.** `border-radius: 0` everywhere (intentional brutalist treatment) — the only exception is the status dot (`50%`) and the index pill (`999px`).

### Borders / hairlines
- Heavy: `1px solid var(--rule)` (section dividers, top nav).
- Soft: `1px solid var(--rule-soft)` (within-section hairlines, gallery placeholders).

### Shadows
- **None.** No drop shadows used anywhere — keeps the brutalist flat treatment.

---

## Assets
The HTML prototype uses **drag-and-drop placeholders** (`<image-slot>` web component) for screenshots. The designer (Diego) fills these by dragging images into the page; the dropped data URLs persist in `localStorage`.

For production:
1. Diego will deliver the final screenshot files (PNG/JPG/WebP).
2. Replace each `<image-slot>` with a regular `<img>` referencing the hosted asset (`/images/projects/<slug>/01-hero.webp` etc.).
3. The aspect ratios per slot class are:
   - `.lead → 16/10`
   - `.half → 4/3`
   - `.third → 1/1`
   - `.full → 16/7`
4. Use `loading="lazy"` and modern formats (WebP/AVIF) with appropriate `srcset` for retina.

### Project content
| # | Title | URL | Layout |
|---|---|---|---|
| 01 | First Arriving | *(no public URL — picture gallery)* | lead-half-half-full |
| 02 | Cave Global | `http://www.caveglobal.com/` | lead-half-half-full (flipped) |
| 03 | STM Education | `http://www.stmeducation.co/` | lead-half-half |
| 04 | Medimás App | *(no public URL — picture gallery)* | lead-third-third-third (flipped) |

### External links
- LinkedIn: `https://www.linkedin.com/in/diego-alejandro-gómez-copete-2a571468/`
- Flickr (photography archive): `https://www.flickr.com/photos/xdax/albums`
- Email: `diegocopetegrafico@gmail.com`

### Fonts
Both fonts are on Google Fonts. Production should self-host or use the Google Fonts CDN with `font-display: swap`:
```
https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&display=swap
```

---

## Files
- `Portfolio.html` — full single-file prototype (HTML + inline CSS + inline React/Babel for the project list and tweaks panel).
- `image-slot.js` — the drag-and-drop placeholder web component (authoring tool, **not for production**).
- `tweaks-panel.jsx` — the light/dark + marquee toggle panel (authoring tool, **not for production**).

## Implementation Checklist
- [ ] Pick a target stack (Next.js / Astro / Eleventy / etc.).
- [ ] Set up Geist + Geist Mono with `font-display: swap`.
- [ ] Port the design tokens above to your CSS variables / Tailwind config / theme.
- [ ] Build the section components: `Nav`, `Hero`, `MarqueeStrip`, `About`, `WorkSection > ProjectCard`, `Skills`, `Contact`, `Footer`.
- [ ] Replace `<image-slot>` with real `<img>` tags once screenshots arrive from Diego.
- [ ] Strip the tweaks-panel and image-slot scripts from the production build.
- [ ] Preserve the print stylesheet (it's the "Save as PDF" workflow Diego uses for resumes).
- [ ] Test the responsive collapse points: `860px` (project flips, skills, about), `820px` (hero meta + subhead), `720px` (section header, facts, contact-grid).
- [ ] Add `prefers-reduced-motion: reduce` rules to disable the marquee and status-dot pulse for accessibility.
- [ ] Add proper `alt` text on every image once the real screenshots replace the slots.
