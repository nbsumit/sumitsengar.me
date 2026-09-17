# sumitsengar.me

The source code for my personal writing space and journal, live at [sumitsengar.me](https://sumitsengar.me).

> **Concept**: *"Expressing the Unspoken Words"*

## About

This site is a quiet space on the web for publishing essays, thoughts, and personal reflections on life, books, cinema, and the moments in between.

The design is intentional, literary, and distraction-free, prioritizing typography, generous spacing, and comfortable reading over unnecessary features or algorithmic feeds.

## Tech & Highlights

- **Jekyll on GitHub Pages**: Markdown journal entries, clean permalinks, and shared layouts, with HTML, CSS, and vanilla JavaScript underneath.
- **Editorial Typography**: Local pairing of *Playfair Display* (display serif) with *Lato* (humanist sans-serif) using fluid `clamp()` sizing, classic editorial drop caps, and thoughtful line rhythm.
- **Atmospheric Reading Immersion**: Ambient paper/starlit gradients, whisper-thin scroll reading progress bar, floating back-to-top control, and intimate end-of-essay reflection cards.
- **Refined Color System**: Editorial warm paper aesthetic with deep ink typography by default, alongside a quiet midnight ink dark mode.
- **Theme Switcher**: Smooth transitions between light and dark modes with automatic `prefers-color-scheme` detection and persistent `localStorage`.
- **Dynamic Reading Calculations**: Automated word count and reading time estimator for articles.
- **Accessibility & Motion**: Semantic landmarks, keyboard `:focus-visible` styling, and full `prefers-reduced-motion` compliance.
- **Lightweight & Fast**: Zero render-blocking remote fonts or external scripts (except minimal analytics). Hosted on GitHub Pages with a custom domain.

## Project Structure

```
_config.yml          Jekyll site settings and clean permalinks
_includes/           Shared head, header, and footer
_layouts/            Homepage and essay layouts
_posts/              Journal entries in Markdown
assets/              CSS, fonts, JavaScript, and favicons
index.html           Homepage
```

## Publishing Future Posts

The site is built with Jekyll on GitHub Pages. New entries appear on the homepage automatically.

1. **Create a Markdown file in `_posts/`**:
   Name it `YYYY-MM-DD-your-slug.md`, for example `_posts/2026-10-01-what-is-life.md`.

2. **Add front matter and write**:
   ```markdown
   ---
   layout: post
   title: What Is Life?
   tag: Essay
   description: A short summary used for social previews and the homepage card.
   excerpt: The sentence that appears on the homepage card.
   epigraph: An optional opening line.
   read_time: 4 min read
   ---

   Your essay goes here.
   ```

3. **Commit and deploy**:
   Push to `main`. GitHub Pages builds the site and publishes the essay at `/posts/your-slug/` with no `.html` in the address.

## Current Status

The editorial architecture, responsive typography, and first journal entry are live. New essays added to `_posts/` appear on the homepage automatically.

## Connect

**Sumit Sengar**

- Website: [sumitsengar.me](https://sumitsengar.me)
- Email: [hello@sumitsengar.me](mailto:hello@sumitsengar.me)
- Instagram: [@\_sumitsengar\_](https://www.instagram.com/_sumitsengar_/)
