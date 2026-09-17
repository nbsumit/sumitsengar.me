/* Small, optional reading controls. The writing needs no JavaScript. */
(() => {
    'use strict';
    const root = document.documentElement;
    const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
    const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const stored = read('theme');
    let chosenTheme = stored === 'light' || stored === 'dark' ? stored : null;
    const themeButton = document.querySelector('.theme-toggle');
    function applyTheme(theme) {
        root.dataset.theme = theme;
        if (themeButton) {
            themeButton.textContent = theme === 'dark' ? 'Light' : 'Dark';
            themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
        }
    }
    applyTheme(chosenTheme || (media.matches ? 'dark' : 'light'));
    if (themeButton) {
        themeButton.hidden = false;
        themeButton.addEventListener('click', () => {
            chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
            save('theme', chosenTheme);
            applyTheme(chosenTheme);
        });
    }
    const onThemeChange = event => { if (!chosenTheme) applyTheme(event.matches ? 'dark' : 'light'); };
    if (media.addEventListener) media.addEventListener('change', onThemeChange);
    else if (media.addListener) media.addListener(onThemeChange);

    const sizeButton = document.querySelector('.text-size-toggle');
    const essay = document.querySelector('.blog-content');
    if (sizeButton && essay) {
        const applySize = large => {
            essay.classList.toggle('is-large', large);
            sizeButton.setAttribute('aria-pressed', String(large));
            sizeButton.textContent = large ? 'Standard text' : 'Larger text';
        };
        applySize(read('reading-size') === 'large');
        sizeButton.hidden = false;
        sizeButton.addEventListener('click', () => {
            const large = !essay.classList.contains('is-large');
            applySize(large);
            save('reading-size', large ? 'large' : 'standard');
        });
    }
    // Animate only supporting sections, once, when they enter the viewport.
    // Nothing is hidden while waiting: no observer or no JS still means a full page.
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if ('IntersectionObserver' in window && typeof Element.prototype.animate === 'function') {
        const active = new Map();
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                observer.unobserve(entry.target);
                if (motion.matches || entry.boundingClientRect.top < 0 || entry.target.contains(document.activeElement)) continue;
                const animation = entry.target.animate([
                    { opacity: .65, transform: 'translateY(10px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], { duration: 600, easing: 'cubic-bezier(.2,.65,.3,1)' });
                active.set(entry.target, animation);
                const release = () => active.delete(entry.target);
                animation.onfinish = release;
                animation.oncancel = release;
            }
        }, { threshold: .05 });
        document.querySelectorAll('.post-item, .about-section, .footer-inner').forEach(element => observer.observe(element));
        const cancelAnimations = () => {
            for (const animation of active.values()) animation.cancel();
            active.clear();
        };
        const onMotionChange = () => { if (motion.matches) cancelAnimations(); };
        if (motion.addEventListener) motion.addEventListener('change', onMotionChange);
        else if (motion.addListener) motion.addListener(onMotionChange);
        document.addEventListener('focusin', event => {
            for (const [element, animation] of active) {
                if (element.contains(event.target)) animation.cancel();
            }
        });
        window.addEventListener('beforeprint', cancelAnimations);
        window.addEventListener('pagehide', cancelAnimations);
    }

    const copyButton = document.querySelector('.copy-link-btn');
    const status = document.querySelector('.share-status');
    if (copyButton && status) {
        copyButton.hidden = false;
        copyButton.addEventListener('click', async () => {
            const url = document.querySelector('link[rel="canonical"]')?.href || location.href.split('#')[0];
            try {
                await navigator.clipboard.writeText(url);
                status.textContent = 'Link copied. Thank you for sharing.';
            } catch (_) {
                status.textContent = 'You can copy the address from your browser to share this essay.';
            }
        });
    }
})();
