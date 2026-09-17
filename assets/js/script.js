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
