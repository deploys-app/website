# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Deploys.app (a Kubernetes-based PaaS), built with **Hugo extended 0.161.1** (pinned via `.tool-versions` — use `asdf install`). Deploys as a static site (see `static/_headers`).

## Commands

- `make dev` — run local Hugo server with live reload (`hugo server`).
- `make build` — produce static output in `/public/`.

There are no tests, linters, or JS toolchain. Hugo invokes Dart Sass for SCSS via `css.Sass`, so the extended build is required.

## Architecture

### Content vs. layouts

Most of the site is **not** content-driven. The homepage (`/`) is hand-authored in `layouts/index.html` — sections (hero, features, pricing, CTA) are hard-coded HTML, not loops over content files. The only Markdown content lives in `content/privacy-policy/index.md` and renders through `layouts/_default/single.html`. `layouts/_default/baseof.html` is the shared shell (head, Google Fonts, compiled SCSS, navbar partial). New marketing copy on the homepage means editing `layouts/index.html` directly.

Taxonomies are disabled in `config.yaml` (`disableKinds: [taxonomy]` + the matching `ignoreErrors`); don't reintroduce them without updating both keys.

### Styling system (semantic SCSS)

`assets/style/` is hand-authored **semantic** SCSS compiled by Hugo Pipes (`css.Sass | resources.Minify | resources.Fingerprint`). There is no utility/atomic framework — markup uses meaningful class names whose styles live in SCSS. Import order in `main.scss` is load-bearing: `function/breakpoint` → `theme` → `reset` → `fonts` → `layout` → `component/all` → `home`.

- `_theme.scss` — design tokens (see below).
- `_layout.scss` — `.container` (centered, breakpoint-capped content width).
- `_home.scss` — marketing-page layout/typography: `.hero-grid` / `.hero-title` / `.hero-lead`, `.section-heading` (`-center` / `-invert` / `-xl` modifiers), `.section-lead`, `.feature-grid`, `.section-split` + `.split-grid` (`-flip-lg`) + `.split-media` / `.split-body`, `.section-regions`, `.cta-grid` / `.cta-title`, etc.
- `component/` — unprefixed component classes (`$prefix` is empty): `button`, `navbar` (+ `navbar-bar`, `nav-link`, `navbar-menu*`), `table` (+ `-center`, `.note`), `panel`, `fancy-box` / `fancy-box-2` / `fancy-icon` (feature cards), `section-*`, `link`, `content` (markdown `pre`/`code`), etc.
- `function/` — `mq` / `mqmw` breakpoint mixins (`$breakpoints` map lives in `main.scss`: sm 768 / md 1024 / lg 1200).
- `.u-grid-ink` (in `main.scss`) is the faint blueprint-grid background for dark "Ink" sections.

When adding styles, write a semantic class in the relevant SCSS file and reference the design tokens — don't reintroduce single-purpose utility classes in markup.

### Theme tokens

`assets/style/_theme.scss` defines all color/spacing/typography as CSS custom properties, aligned to the **console's design system** — magenta `--color-primary-*` on console "Ink" (dark) / "Paper" (light) surfaces, plus semantic `--color-content` / `--color-base` / `--color-ink` / `--color-line` tokens. Component and page classes reference these vars directly. Fonts are Hanken Grotesk (UI/display) + JetBrains Mono (machine data), loaded from Google Fonts in `baseof.html`. To add a color/size, add the custom property in `_theme.scss` and reference it from the relevant SCSS rule.

### Interactivity

No bundler, no framework. A small inline `<script>` in `layouts/partials/navbar.html` handles all interactions — the mobile menu toggle, closing the menu on link clicks, and the scroll-fixed navbar behavior — using plain DOM APIs.

### Icons

Icons are **inline SVG**, not a web font. The `icon` partial reads `assets/icons/<style>/<name>.svg` (sourced from Font Awesome Pro), strips the license comment, injects `class="icon" fill="currentColor" aria-hidden="true"`, and emits it inline: `{{ partial "icon" "light/server" }}`. The `.icon` class (in `_layout.scss`) sizes via `height: 1em` and inherits `color` through `currentColor`, so icons scale with `font-size` and recolor on hover. To add an icon, drop its SVG in `assets/icons/<style>/` and reference it. There is no Font Awesome CSS/web-font request.

### Static assets and caching

Long-lived assets go through Hugo's pipeline with `resources.Fingerprint` (cache-busted filenames). `static/_headers` sets `cache-control: public, max-age=31536000, immutable` for `/image/*`, `/style/*`, `/fonts/*`.
