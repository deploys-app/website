# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Deploys.app (a Kubernetes-based PaaS), built with **Hugo extended 0.161.1** (pinned via `.tool-versions` — use `asdf install`). Deploys as a static site (see `static/_headers`). The site's look mirrors the **console + docs design system** (see "Design system" below).

## Commands

- `make dev` — run local Hugo server with live reload (`hugo server`).
- `make build` — produce static output in `/public/`.

There are no tests, linters, or JS toolchain. Hugo invokes Dart Sass for SCSS via `css.Sass`, so the extended build is required.

## Architecture

### Content vs. layouts

Most of the site is **not** content-driven. The homepage (`/`) is hand-authored in `layouts/index.html` — sections (hero, features, quickstart, solutions, regions, pricing, CTA) are hard-coded HTML, not loops over content files. The only Markdown content lives in `content/privacy-policy/index.md` and renders through `layouts/_default/single.html` (an Ink page-hero + a `.prose` article). New marketing copy on the homepage means editing `layouts/index.html` directly.

`layouts/_default/baseof.html` is the shared shell: a pre-paint theme `<script>` (reads `localStorage.theme` / system preference, sets `<html class="dark">` before first paint), Google Fonts, compiled SCSS, then the `navbar` → `main` → `footer` → `scripts` partials. Site URLs (console/docs/github) and the meta description live under `params:` in `config.yaml`.

Taxonomies are disabled in `config.yaml` (`disableKinds: [taxonomy]` + the matching `ignoreErrors`); don't reintroduce them without updating both keys.

### Partials

- `navbar.html` — Ink (always-dark) sticky navbar: brand mark, nav links, theme toggle, "Open console" CTA. The mobile menu is a pure-CSS `#nav-toggle` checkbox + `.navbar-burger` label (panel shown via `#nav-toggle:checked ~ .navbar .navbar-menu`).
- `footer.html` — marketing footer (brand + link columns).
- `console-mock.html` — the homepage's signature element: a **pure-CSS/HTML faux console dashboard** (chrome + sidebar + stat tiles + a deployment table with status pills and inline-SVG sparklines). No screenshot image.
- `scripts.html` — the only JS: theme toggle + closing the mobile menu on link click / desktop resize. Plain DOM APIs, no bundler.
- `icon.html` — see Icons.

### Styling system (semantic SCSS)

`assets/style/` is hand-authored **semantic** SCSS compiled by Hugo Pipes (`css.Sass (compressed) | resources.Fingerprint`). There is no utility/atomic framework — markup uses meaningful class names whose styles live in SCSS. Import order in `main.scss` is load-bearing: `theme` → `reset` → `base` → `layout` → `components` → `content` → `home`.

- `_theme.scss` — design tokens (see below), including the `html.dark` overrides.
- `_reset.scss` — minimal modern reset.
- `_base.scss` — global typography + shared helpers: `.container`, `.u-grid-ink` (blueprint grid), `.u-kicker` (mono machine-label eyebrow, `-inv` / `-center`), `.u-signal`, `.icon`, `.skip-link`.
- `_layout.scss` — `.navbar*` and `.footer*`.
- `_components.scss` — reusable pieces: `.button` (`-primary` / `-ghost` / `-ghost-inv`, `-large` / `-small` / `-block`), `.card` / `.card-grid` (`-two` / `.card.-flat`), `.panel` (`-features` / `-pad`), `.feature-row`, `.terminal`, the console-mock `.shot*` / `.mock*`, `.status-pill`, `.price-table`.
- `_content.scss` — `.page-hero` + `.prose` (long-form markdown).
- `_home.scss` — marketing page rhythm: `.section` (`-tight` / `-ink`), `.section-head` (`-center` / `-flush`) + `.section-title` / `.section-lead`, `.hero*`, `.split` (`-flip`), `.quickstart-grid`, `.regions*`, `.cta*`.

When adding styles, write a semantic class (or a `-modifier`) in the relevant SCSS file and reference the design tokens — don't put `style="…"` attributes or single-purpose utility classes in markup.

### Theme tokens & dark mode

`assets/style/_theme.scss` defines all color/spacing/typography as CSS custom properties, aligned to the **console's design system** — magenta `--color-primary-*` "signal", cyan `--color-accent-*`, console "Ink" (dark) + "Paper" (light) surfaces, semantic `--color-content` / `--color-base` / `--color-ink` / `--color-line` tokens, soft `--shadow-*`. Light is the default; `html.dark` swaps the Paper tokens to Ink and re-tunes the primary-tint scale, so components follow the theme without their own `.dark` rules. **Sections that must stay dark in both themes** use `.u-grid-ink` + the `-inv` content tokens (hero, regions, CTA, page-hero) — those force `#fff` headings explicitly since the base `h1`–`h6` color is the theme's `--color-content`. Fonts are Hanken Grotesk (UI/display) + JetBrains Mono (machine data) from Google Fonts in `baseof.html`.

### Icons

Icons are **inline SVG** emitted by the self-contained `layouts/partials/icon.html` — a Hugo `dict` of Lucide-style 24×24 path geometry keyed by name: `{{ partial "icon" "rocket" }}`. The partial wraps the paths in an `<svg class="icon icon-<name>" stroke="currentColor" …>`, so icons inherit `color` and scale with `font-size`. To add an icon, add a `name` → path-data entry to the dict (no asset files, no web font).

### Pricing data

The pricing table fetches live SKUs at build time: `resources.GetRemote "https://api.deploys.app/billing.skus"` → `transform.Unmarshal`. A build therefore needs network access to api.deploys.app; the monthly figures are `perSecondPrice × (60·60·24·30)`.

### Static assets and caching

The compiled stylesheet goes through Hugo's pipeline with `resources.Fingerprint` (cache-busted `/style/main.<hash>.css`). `static/_headers` sets security headers site-wide and `cache-control: public, max-age=31536000, immutable` for `/style/*`. The favicon lives in `static/`.
