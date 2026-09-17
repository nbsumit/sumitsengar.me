# sumitsengar.me

The source code for my personal writing space and journal, live at [sumitsengar.me](https://sumitsengar.me).

> **Concept**: *"Expressing the Unspoken Words"*

## About

This site is a quiet space on the web for publishing essays, thoughts, and personal reflections on life, books, cinema, and the moments in between.

The design is intentional, literary, and distraction-free, prioritizing typography, generous spacing, and comfortable reading over unnecessary features or algorithmic feeds.

## Tech & Highlights

- **Pure Web Standards**: HTML5, CSS3, and vanilla JavaScript with zero frameworks, libraries, or build dependencies.
- **Editorial Typography**: Local pairing of *Playfair Display* (display serif) with *Lato* (humanist sans-serif) using fluid `clamp()` sizing, classic editorial drop caps, and thoughtful line rhythm.
- **Atmospheric Reading Immersion**: Ambient paper/starlit gradients, whisper-thin scroll reading progress bar, floating back-to-top control, and intimate end-of-essay reflection cards.
- **Refined Color System**: Editorial warm paper aesthetic with deep ink typography by default, alongside a quiet midnight ink dark mode.
- **Theme Switcher**: Smooth transitions between light and dark modes with automatic `prefers-color-scheme` detection and persistent `localStorage`.
- **Dynamic Reading Calculations**: Automated word count and reading time estimator for articles.
- **Accessibility & Motion**: Semantic landmarks, keyboard `:focus-visible` styling, and full `prefers-reduced-motion` compliance.
- **Lightweight & Fast**: Zero render-blocking remote fonts or external scripts (except minimal analytics). Hosted on GitHub Pages with a custom domain.

## Project Structure

```
assets/
  css/
    main.css         Homepage and global design tokens
    blog.css         Publication-grade reading view styles
  fonts/
    Lato/            Local Lato font weights
    PlayfairDisplay/ Local Playfair Display font weights
  js/
    script.js        Theme toggler, dynamic utilities, reading time
  favicon/           Favicon set and site.webmanifest
posts/
  template.html      Reusable boilerplate for future articles
  .template          Fallback template file
index.html           Homepage and writings index
robots.txt           Search engine crawling instructions
sitemap.xml          Canonical XML sitemap
CNAME                Custom domain configuration (sumitsengar.me)
_config.yml          Jekyll clean URL configuration
```

## Publishing Future Posts

Adding a new essay to the website is straightforward and requires no build tools:

1. **Create the post page**:
   Duplicate `posts/template.html` to `posts/<your-slug>.html` (e.g., `posts/what-is-life.html`).
   Update the `<title>`, metadata (description, date, tag), and write the essay content inside `<div class="blog-content">`.

2. **Add to homepage index**:
   In `index.html`, add an `<article class="post-item">` block inside `<div class="posts-list">`:
   ```html
   <article class="post-item">
       <div class="post-meta">
           <span class="post-tag">Life</span>
           <span class="post-separator">•</span>
           <time datetime="2026-09-15">September 15, 2026</time>
           <span class="post-separator">•</span>
           <span>5 min read</span>
       </div>
       <h3 class="post-item-title">
           <a href="posts/what-is-life">What is Life?</a>
       </h3>
       <p class="post-item-excerpt">
           An excerpt or opening reflection from the essay...
       </p>
       <a href="posts/what-is-life" class="post-item-link">
           Read essay <span data-icon="arrowRight"></span>
       </a>
   </article>
   ```
   *Note: Adding an article automatically hides the empty state container.*

3. **Commit and deploy**:
   Commit the new files and push to `main`. GitHub Pages will deploy the update automatically.

## Current Status

The core editorial architecture, responsive typography, theme engine, and article templates are active. The writings section currently presents a quiet, intentional empty state awaiting upcoming essays.

## Connect

**Sumit Sengar**

- Website: [sumitsengar.me](https://sumitsengar.me)
- Email: [hello@sumitsengar.me](mailto:hello@sumitsengar.me)
- Instagram: [@\_sumitsengar\_](https://www.instagram.com/_sumitsengar_/)
