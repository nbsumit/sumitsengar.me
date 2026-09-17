# sumitsengar.me

The source code for my personal writing space and journal, live at [sumitsengar.me](https://sumitsengar.me).

> **Concept**: *"Expressing the Unspoken Words"*

## About

This site is a quiet space on the web for publishing essays, thoughts, and personal reflections on life, books, cinema, and the moments in between.

The design is intentional, literary, and distraction-free, prioritizing typography, generous spacing, and comfortable reading over unnecessary features or algorithmic feeds.

## Tech & Highlights

- **Jekyll on GitHub Pages**: Markdown journal entries, clean permalinks, and shared layouts, with HTML, CSS, and vanilla JavaScript underneath.
- **Reading Typography**: Locally hosted Playfair Display headings, Lato navigation, and Georgia essay text. A narrow reading column, generous line spacing, and an optional larger text setting.
- **Gentle Motion**: Brief entrances, one-time section reveals, responsive link arrows, and soft theme changes. Essay paragraphs stay still. Motion respects system preferences, keyboard focus, and printing. All content remains visible without JavaScript.
- **Quiet Layout**: Warm paper and muted olive tones, simple essay previews, and navigation that scrolls away. No floating controls, progress bar, animated backgrounds, or promotional cards.
- **Light and Dark Themes**: Follows the system setting until a reader chooses a theme. Theme and text size preferences are saved when browser storage is available.
- **Progressive Enhancement**: Essays and links work without JavaScript. Optional controls tolerate blocked storage and explain when clipboard access is unavailable.
- **Reading Time**: Calculated from each essay during the Jekyll build, including when JavaScript is disabled.
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
