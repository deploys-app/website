# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Deploys.app (a Kubernetes-based PaaS), built with **Hugo extended 0.161.1** (pinned via `.tool-versions` — use `asdf install`). Deploys as a static site to Cloudflare Pages (see `static/_headers`).

## Commands

- `make dev` — run local Hugo server with live reload (`hugo server`).
- `make build` — produce static output in `/public/`.

There are no tests, linters, or JS toolchain. Hugo invokes Dart Sass for SCSS via `css.Sass`, so the extended build is required.

## Architecture

### Content vs. layouts

Most of the site is **not** content-driven. The homepage (`/`) is hand-authored in `layouts/index.html` — sections (hero, features, pricing, CTA) are hard-coded HTML, not loops over content files. The only Markdown content lives in `content/privacy-policy/index.md` and renders through `layouts/_default/single.html`. `layouts/_default/baseof.html` is the shared shell (head, font-awesome CDN, compiled SCSS, navbar partial). New marketing copy on the homepage means editing `layouts/index.html` directly.

Taxonomies are disabled in `config.yaml` (`disableKinds: [taxonomy]` + the matching `ignoreErrors`); don't reintroduce them without updating both keys.

### Styling system (Tailwind-like utilities + components)

`assets/style/` is hand-authored CSS compiled by Hugo Pipes (`css.Sass | resources.Minify | resources.Fingerprint`) — there is **no Tailwind build step / npm**; the class names just mirror Tailwind's. Import order in `main.scss` is load-bearing: `theme` (tokens) → `reset` → `fonts` → `utilities` → `component/all`.

- `_utilities.scss` — Tailwind-named utility classes (`flex`, `grid`, `gap-6`, `mb-4`, `text-content`, `text-[2.5rem]`, `md:grid-cols-2`, `lg:order-1`, `.container`, …) written by hand to match Tailwind / the console's markup vocabulary. Responsive `md:` / `lg:` prefixes resolve at 1024 / 1200 via the `mq` mixin; arbitrary values use escaped selectors (`.text-\[2\.5rem\]`).
- `component/` — unprefixed component classes matching the console: `button`, `navbar`, `table`/`table-container`, `panel`, `fancy-box` / `fancy-icon` (feature cards), `section-*`, `link`, etc. (`$prefix` in `component/config.scss` is empty.)
- `function/` — `mq` / `mqmw` breakpoint mixins.

When adding styles, compose the Tailwind-like utilities in markup; add a class to `_utilities.scss` only when one is missing, and reach for a component class when a pattern repeats.

### Theme tokens

`assets/style/_theme.scss` defines all color/spacing/typography as CSS custom properties, aligned to the **console's design system** — magenta `--color-primary-*` on console "Ink" (dark) / "Paper" (light) surfaces, plus semantic `--color-content` / `--color-base` / `--color-ink` / `--color-line` tokens. Utilities and component classes reference these vars directly. Fonts are Hanken Grotesk (UI/display) + JetBrains Mono (machine data), loaded from Google Fonts in `baseof.html`.

### Interactivity

No bundler, no framework. Two scripts are used:
- **hyperscript** (loaded from unpkg in `baseof.html`) — inline `_="on click ..."` attributes drive small interactions (e.g. navbar toggle in `layouts/partials/navbar.html`).
- A small inline `<script>` in `navbar.html` adds the scroll-fixed navbar behavior.

Font Awesome Pro CSS is loaded from `cdn.moonrhythm.io`.

### Static assets and caching

Long-lived assets go through Hugo's pipeline with `resources.Fingerprint` (cache-busted filenames). `static/_headers` sets `cache-control: public, max-age=31536000, immutable` for `/image/*`, `/style/*`, `/fonts/*` and adds `x-robots-tag: noindex` to `*.pages.dev` preview URLs — keep that header in place so previews stay out of search indexes.
