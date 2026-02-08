// ==UserScript==
// @name         HiAnime Title Redirect
// @namespace    https://github.com/hamzaharoon1314/hianime-title-page-redirect
// @version      2.3
// @description  Automatically redirect episode links to clean anime title pages on HiAnime and It supports Ctrl+click & middle-click
// @match        *://*/user/continue-watching*
// @match        *://*/user/continue-watching*
// @match        https://hianime.*/user/continue-watching*
// @match        https://hianime.tv/user/continue-watching*
// @match        https://hianime.to/user/continue-watching*
// @match        https://hianimez.to/user/continue-watching*
// @match        https://hianimez.is/user/continue-watching*
// @match        https://hianime.nz/user/continue-watching*
// @match        https://hianime.bz/user/continue-watching*
// @match        https://hianime.pe/user/continue-watching*
// @match        https://hianime.cx/user/continue-watching*
// @match        https://hianime.do/user/continue-watching*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hianime.to
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/565631/HiAnime%20Title%20Page%20Redirect%20%2B%20Persistent%20Toggle.user.js
// @updateURL https://update.greasyfork.org/scripts/565631/HiAnime%20Title%20Page%20Redirect%20%2B%20Persistent%20Toggle.meta.js
// ==/UserScript==

(function () {
    'use strict';

    const TOGGLE_KEY = 'hianime_title_toggle';
    let isOn = localStorage.getItem(TOGGLE_KEY) === 'true';

    const button = document.createElement('button');
    Object.assign(button.style, {
        position: 'fixed',

        /* Move to LEFT BOTTOM */
        bottom: '10px',
        left: '10px',

        zIndex: 9999,

        /* Make it SMALLER */
        padding: '6px 10px',
        fontSize: '11px',

        background: isOn
        ? 'linear-gradient(to right, #00c853, #64dd17)'
        : 'linear-gradient(to right, #6a11cb, #2575fc)',

        color: '#fff',
        border: 'none',
        borderRadius: '12px',   // less rounded, more compact
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    });


    button.innerText = `Title page: ${isOn ? 'ON' : 'OFF'}`;

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });

    button.addEventListener('click', () => {
        isOn = !isOn;
        localStorage.setItem(TOGGLE_KEY, isOn);
        button.innerText = `Title page: ${isOn ? 'ON' : 'OFF'}`;
        button.style.background = isOn
            ? 'linear-gradient(to right, #00c853, #64dd17)'
            : 'linear-gradient(to right, #6a11cb, #2575fc)';
        console.log('[HiAnime Toggle] Saved state:', isOn);
    });

    document.body.appendChild(button);

    document.addEventListener(
        'click',
        function (e) {
            if (!isOn) return;

            const anchor = e.target.closest('a');
            if (!anchor || !anchor.href.includes('/watch/')) return;

            try {
                const url = new URL(anchor.href);
                const pathParts = url.pathname.split('/');
                if (pathParts[1] !== 'watch' || !pathParts[2]) return;

                const cleanUrl = `${url.origin}/${pathParts[2]}`;
                const openInNewTab = e.ctrlKey || e.metaKey || e.button === 1;

                if (openInNewTab) {
                    const realAnchor = document.createElement('a');
                    realAnchor.href = cleanUrl;
                    realAnchor.target = '_blank';
                    realAnchor.rel = 'noopener noreferrer';
                    realAnchor.style.display = 'none';
                    document.body.appendChild(realAnchor);
                    realAnchor.click();
                    realAnchor.remove();
                } else {
                    e.preventDefault();
                    window.location.href = cleanUrl;
                }
            } catch (err) {
                console.error('[HiAnime Error] Failed to process link:', anchor.href, err);
            }
        },
        true
    );
})();
