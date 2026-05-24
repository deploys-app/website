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

### Styling system (custom atomic CSS)

`assets/style/` is a bespoke utility-first CSS framework, compiled by Hugo Pipes (`css.Sass | resources.Minify | resources.Fingerprint`). The structure is layered and the order in `main.scss` is load-bearing — `theme` defines CSS custom properties that the atomic classes consume.

- `atomic/` — single-property utilities prefixed with `_` (the `$atom-prefix` in `atomic/config.scss`). Naming is abbreviated: `_mgbt-16px` (margin-bottom), `_dp-f` (display:flex), `_cl-neutral-500` (color), `_fs-700` (font-size), `_gg-16px` (grid-gap), `_jtfct-spbtw` (justify-content:space-between), `_pdt-70px` (padding-top), `_als-ct` (align-self:center). Every atomic also auto-generates breakpoint variants: `_dp-n-lg` = `display:none` at `lg` and up.
- `layout/` — `lo-container`, `lo-12`/`lo-6-md`/`lo-4-lg` grid spans. The grid is mobile-first with `-md`/`-lg` overrides.
- `component/` — `moon-*` and named components: `moon-navbar`, `moon-button`, `fancy-box`, `fancy-icon`, `section`, etc.
- `utility/`, `mixins/`, `function/` — animation helpers, typography, breakpoint mixin.

When adding styles, prefer composing existing atomics in markup over writing new CSS. Reach for a new component class only when a pattern repeats and needs semantic naming.

### Theme tokens

`assets/style/_theme.scss` defines all color/spacing/typography as CSS custom properties (`--color-primary-500`, `--color-neutral-700`, etc.). `atomic/config.scss` maps these into `$colors`/`$spacings`/etc. so atomic classes resolve to the CSS variables. To add a color or size scale, add it in `_theme.scss` and the corresponding map in `atomic/config.scss`.

### Interactivity

No bundler, no framework. Two scripts are used:
- **hyperscript** (loaded from unpkg in `baseof.html`) — inline `_="on click ..."` attributes drive small interactions (e.g. navbar toggle in `layouts/partials/navbar.html`).
- A small inline `<script>` in `navbar.html` adds the scroll-fixed navbar behavior.

Font Awesome Pro CSS is loaded from `cdn.moonrhythm.io`.

### Static assets and caching

Long-lived assets go through Hugo's pipeline with `resources.Fingerprint` (cache-busted filenames). `static/_headers` sets `cache-control: public, max-age=31536000, immutable` for `/image/*`, `/style/*`, `/fonts/*` and adds `x-robots-tag: noindex` to `*.pages.dev` preview URLs — keep that header in place so previews stay out of search indexes.
