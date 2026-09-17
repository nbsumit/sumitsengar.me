/**
 * Sumit Sengar | Personal Writing Space
 * Theme Manager, Reading Time Calculator, Reading Progress, and Dynamic Utilities
 */

(function () {
    'use strict';

    const ICONS = {
        sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="feather-sun" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
        moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="feather-moon" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
        arrowDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`,
        arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
        arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
        arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
        instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
        mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
        copy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
        check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    };

    /**
     * Determine initial theme:
     * 1. Stored localStorage setting
     * 2. OS preference
     * 3. Fallback to 'light' (refined warm editorial paper)
     */
    function getPreferredTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    let currentTheme = getPreferredTheme();

    function applyTheme(theme) {
        currentTheme = theme;
        const root = document.documentElement;
        const body = document.body;

        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            body.classList.add('dark-theme');
        } else {
            root.removeAttribute('data-theme');
            body.classList.remove('dark-theme');
        }

        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            // LocalStorage might be restricted
        }

        updateThemeToggleButtons();
    }

    function toggleTheme() {
        const next = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    }

    // Expose toggleTheme globally for inline onclick handlers if any
    window.toggleTheme = toggleTheme;
    window.changeTheme = toggleTheme; // Backward compatibility with old handler

    function updateThemeToggleButtons() {
        const buttons = document.querySelectorAll('.theme-toggle, .sun');
        buttons.forEach(btn => {
            if (currentTheme === 'dark') {
                btn.innerHTML = ICONS.sun;
                btn.setAttribute('aria-label', 'Switch to light theme');
                btn.setAttribute('title', 'Switch to light theme');
            } else {
                btn.innerHTML = ICONS.moon;
                btn.setAttribute('aria-label', 'Switch to dark theme');
                btn.setAttribute('title', 'Switch to dark theme');
            }
        });
    }

    /**
     * Compute reading time dynamically from article content
     */
    function calculateReadingTime() {
        const readTimeEl = document.getElementById('read-time');
        const contentEl = document.querySelector('.blog-content');

        if (!readTimeEl || !contentEl) return;

        const text = contentEl.textContent || '';
        const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
        const WORDS_PER_MINUTE = 200;
        const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

        readTimeEl.textContent = `${minutes} min read`;
    }

    /**
     * Set dynamic copyright year
     */
    function updateCopyrightYear() {
        const yearEl = document.getElementById('current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    }

    /**
     * Inject SVGs into matching placeholder elements
     */
    function renderIcons() {
        Object.entries(ICONS).forEach(([name, svg]) => {
            document.querySelectorAll(`[data-icon="${name}"]`).forEach(el => {
                el.innerHTML = svg;
            });
        });
    }

    /**
     * Reading Progress Bar update
     */
    function updateReadingProgress() {
        const progressBar = document.getElementById('reading-progress');
        if (!progressBar) return;

        const article = document.querySelector('article.article-container') || document.querySelector('.blog-content');
        if (!article) return;

        const rect = article.getBoundingClientRect();
        const articleTop = window.scrollY + rect.top;
        const articleHeight = article.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY < articleTop) {
            progressBar.style.width = '0%';
            return;
        }

        const maxScroll = articleHeight - windowHeight * 0.4;
        const currentScroll = scrollY - articleTop;
        const progress = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));

        progressBar.style.width = `${progress}%`;
    }

    /**
     * Floating Back-to-Top Button Handler
     */
    function initBackToTop() {
        const topBtn = document.getElementById('floating-top-btn');
        if (!topBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 360) {
                topBtn.classList.add('is-visible');
            } else {
                topBtn.classList.remove('is-visible');
            }
        }, { passive: true });

        topBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Copy Reflection Link with Toast Alert
     */
    function initCopyLink() {
        const copyBtns = document.querySelectorAll('.copy-link-btn');
        if (!copyBtns.length) return;

        copyBtns.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const url = window.location.href;

                try {
                    await navigator.clipboard.writeText(url);
                } catch (err) {
                    const temp = document.createElement('input');
                    temp.value = url;
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                }

                showToast('Reflection link copied to clipboard');

                const iconEl = btn.querySelector('[data-icon]');
                const labelEl = btn.querySelector('.btn-label');
                const origLabel = labelEl ? labelEl.textContent : '';

                if (iconEl) iconEl.innerHTML = ICONS.check;
                if (labelEl) labelEl.textContent = 'Copied!';
                btn.classList.add('is-copied');

                setTimeout(() => {
                    if (iconEl) iconEl.innerHTML = ICONS.copy;
                    if (labelEl) labelEl.textContent = origLabel;
                    btn.classList.remove('is-copied');
                }, 2200);
            });
        });
    }

    /**
     * Transient Toast Notification
     */
    function showToast(message) {
        let toast = document.getElementById('toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-notification';
            toast.className = 'toast-notification';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add('is-visible');

        if (window._toastTimeout) {
            clearTimeout(window._toastTimeout);
        }

        window._toastTimeout = setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 2600);
    }

    // Listen to system preference changes if user hasn't explicitly chosen
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // Scroll listeners for progress bar
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    window.addEventListener('resize', updateReadingProgress, { passive: true });

    // Initial DOM setup
    document.addEventListener('DOMContentLoaded', () => {
        applyTheme(currentTheme);
        renderIcons();
        calculateReadingTime();
        updateCopyrightYear();
        initBackToTop();
        initCopyLink();

        // Attach theme toggle clicks
        document.querySelectorAll('.theme-toggle, .sun').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleTheme();
            });
        });
    });
})();