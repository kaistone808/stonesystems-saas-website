(() => {
  const STORAGE_KEY = 'stone_consent_v1';
  const LEGACY_STORAGE_KEY = 'stonesystems_consent';
  const CONSENT_VERSION = 1;
  const DEFAULT_CATEGORIES = {
    essential: true,
    analytics: false,
    advertising: false,
  };

  let consentState = null;
  let unsubscribeFns = [];
  let modalOpen = false;
  let lastFocusedElement = null;

  const listeners = new Set();

  function safeParse(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function readStoredConsent() {
    try {
      const raw =
        window.localStorage.getItem(STORAGE_KEY) || window.localStorage.getItem(LEGACY_STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const parsed = safeParse(raw);
      if (!parsed || typeof parsed !== 'object') {
        return null;
      }
      const categories = parsed.categories || {};
      return {
        version: parsed.version || CONSENT_VERSION,
        timestamp: parsed.timestamp || new Date().toISOString(),
        categories: {
          essential: true,
          analytics: !!categories.analytics,
          advertising: !!categories.advertising,
        },
      };
    } catch (error) {
      return null;
    }
  }

  function writeStoredConsent(state) {
    try {
      const serialized = JSON.stringify(state);
      window.localStorage.setItem(STORAGE_KEY, serialized);
      window.localStorage.setItem(LEGACY_STORAGE_KEY, serialized);
    } catch (error) {
      // no-op
    }
  }

  function ensureConsentModeDefaults() {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer.push(arguments);
      };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500,
    });
  }

  function applyConsentMode(categories) {
    if (!window.gtag) return;
    window.gtag('consent', 'update', {
      ad_storage: categories.advertising ? 'granted' : 'denied',
      ad_user_data: categories.advertising ? 'granted' : 'denied',
      ad_personalization: categories.advertising ? 'granted' : 'denied',
      analytics_storage: categories.analytics ? 'granted' : 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
    });
  }

  function dispatchConsentChange() {
    const detail = {
      version: consentState.version,
      timestamp: consentState.timestamp,
      categories: { ...consentState.categories },
    };
    window.dispatchEvent(new CustomEvent('stoneconsent:change', { detail }));
    listeners.forEach((fn) => {
      try {
        fn(detail.categories, detail);
      } catch (error) {
        // no-op
      }
    });
  }

  function setConsent(nextCategories) {
    consentState = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      categories: {
        essential: true,
        analytics: !!nextCategories.analytics,
        advertising: !!nextCategories.advertising,
      },
    };
    writeStoredConsent(consentState);
    applyConsentMode(consentState.categories);
    dispatchConsentChange();
  }

  function injectStyles() {
    if (document.getElementById('stone-consent-style')) return;
    const style = document.createElement('style');
    style.id = 'stone-consent-style';
    style.textContent = `
      .stone-consent-hidden { display: none !important; }
      .stone-consent-banner {
        position: fixed;
        z-index: 2147483000;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        width: min(640px, calc(100vw - 24px));
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        box-shadow: 0 12px 30px rgba(17, 24, 39, 0.18);
        padding: 16px;
        color: #111827;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
      }
      .stone-consent-title {
        margin: 0 0 8px;
        font-size: 16px;
        font-weight: 700;
      }
      .stone-consent-copy {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: #374151;
      }
      .stone-consent-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 14px;
      }
      .stone-consent-btn {
        appearance: none;
        border: 1px solid #111827;
        background: #111827;
        color: #ffffff;
        border-radius: 12px;
        padding: 10px 14px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
      }
      .stone-consent-btn--ghost {
        background: #ffffff;
        color: #111827;
      }
      .stone-consent-btn:focus-visible,
      .stone-consent-toggle:focus-visible {
        outline: 3px solid #93c5fd;
        outline-offset: 2px;
      }
      .stone-consent-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(17, 24, 39, 0.45);
        z-index: 2147483001;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
      }
      .stone-consent-modal {
        width: min(640px, calc(100vw - 24px));
        background: #ffffff;
        color: #111827;
        border-radius: 12px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 12px 30px rgba(17, 24, 39, 0.2);
        padding: 16px;
      }
      .stone-consent-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        padding: 12px;
        margin-top: 10px;
      }
      .stone-consent-row h4 {
        margin: 0 0 4px;
        font-size: 14px;
      }
      .stone-consent-row p {
        margin: 0;
        color: #4b5563;
        font-size: 13px;
      }
      .stone-consent-toggle {
        appearance: none;
        border: none;
        width: 50px;
        height: 30px;
        border-radius: 999px;
        position: relative;
        cursor: pointer;
        background: #d1d5db;
        transition: background 120ms ease;
      }
      .stone-consent-toggle::after {
        content: "";
        width: 22px;
        height: 22px;
        border-radius: 999px;
        background: #ffffff;
        position: absolute;
        left: 4px;
        top: 4px;
        transition: transform 120ms ease;
      }
      .stone-consent-toggle[aria-checked="true"] {
        background: #111827;
      }
      .stone-consent-toggle[aria-checked="true"]::after {
        transform: translateX(20px);
      }
      .stone-consent-toggle[aria-disabled="true"] {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .stone-consent-toast {
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 2147483002;
        background: #111827;
        color: #ffffff;
        border-radius: 12px;
        padding: 10px 12px;
        font-size: 13px;
        max-width: min(360px, calc(100vw - 24px));
      }
      @media (max-width: 560px) {
        .stone-consent-actions { flex-direction: column; }
        .stone-consent-btn { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }

  function createEl(tag, attrs, text) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((key) => {
        if (key === 'className') el.className = attrs[key];
        else if (key === 'html') el.innerHTML = attrs[key];
        else el.setAttribute(key, attrs[key]);
      });
    }
    if (text) el.textContent = text;
    return el;
  }

  function showToast(message) {
    const toast = createEl('div', { className: 'stone-consent-toast', role: 'status' }, message);
    document.body.appendChild(toast);
    window.setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  function updateToggle(toggle, checked) {
    toggle.setAttribute('aria-checked', checked ? 'true' : 'false');
  }

  function buildModal() {
    const backdrop = createEl('div', {
      className: 'stone-consent-backdrop stone-consent-hidden',
      id: 'stone-consent-backdrop',
    });
    const modal = createEl('div', {
      className: 'stone-consent-modal',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': 'stone-consent-modal-title',
    });

    const title = createEl('h3', { id: 'stone-consent-modal-title', className: 'stone-consent-title' }, 'Cookie Preferences');
    const copy = createEl(
      'p',
      { className: 'stone-consent-copy' },
      'Choose which optional cookies you want to allow. Essential cookies stay enabled for basic site functionality.'
    );

    const essentialRow = createEl('div', { className: 'stone-consent-row' });
    essentialRow.appendChild(createEl('div', { html: '<h4>Essential</h4><p>Required for site security and core functionality.</p>' }));
    const essentialToggle = createEl('button', {
      className: 'stone-consent-toggle',
      type: 'button',
      role: 'switch',
      'aria-checked': 'true',
      'aria-disabled': 'true',
      disabled: 'disabled',
    });
    essentialRow.appendChild(essentialToggle);

    const analyticsRow = createEl('div', { className: 'stone-consent-row' });
    analyticsRow.appendChild(createEl('div', { html: '<h4>Analytics</h4><p>Helps us understand site performance and usage.</p>' }));
    const analyticsToggle = createEl('button', {
      className: 'stone-consent-toggle',
      type: 'button',
      role: 'switch',
      'aria-checked': 'false',
      'data-key': 'analytics',
    });
    analyticsRow.appendChild(analyticsToggle);

    const advertisingRow = createEl('div', { className: 'stone-consent-row' });
    advertisingRow.appendChild(createEl('div', { html: '<h4>Advertising</h4><p>Enables ad measurement and remarketing tags.</p>' }));
    const advertisingToggle = createEl('button', {
      className: 'stone-consent-toggle',
      type: 'button',
      role: 'switch',
      'aria-checked': 'false',
      'data-key': 'advertising',
    });
    advertisingRow.appendChild(advertisingToggle);

    const actions = createEl('div', { className: 'stone-consent-actions' });
    const saveBtn = createEl('button', { className: 'stone-consent-btn', type: 'button' }, 'Save Preferences');
    const acceptBtn = createEl('button', { className: 'stone-consent-btn stone-consent-btn--ghost', type: 'button' }, 'Accept All');
    const rejectBtn = createEl('button', { className: 'stone-consent-btn stone-consent-btn--ghost', type: 'button' }, 'Reject All');
    const closeBtn = createEl('button', { className: 'stone-consent-btn stone-consent-btn--ghost', type: 'button' }, 'Close');
    actions.appendChild(saveBtn);
    actions.appendChild(acceptBtn);
    actions.appendChild(rejectBtn);
    actions.appendChild(closeBtn);

    modal.appendChild(title);
    modal.appendChild(copy);
    modal.appendChild(essentialRow);
    modal.appendChild(analyticsRow);
    modal.appendChild(advertisingRow);
    modal.appendChild(actions);
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);

    function syncFromState() {
      const categories = consentState ? consentState.categories : DEFAULT_CATEGORIES;
      updateToggle(analyticsToggle, !!categories.analytics);
      updateToggle(advertisingToggle, !!categories.advertising);
    }

    function closeModal() {
      modalOpen = false;
      backdrop.classList.add('stone-consent-hidden');
      if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
      }
    }

    function openModal() {
      syncFromState();
      modalOpen = true;
      lastFocusedElement = document.activeElement;
      backdrop.classList.remove('stone-consent-hidden');
      analyticsToggle.focus();
    }

    function toggle(btn) {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      const isChecked = btn.getAttribute('aria-checked') === 'true';
      updateToggle(btn, !isChecked);
    }

    analyticsToggle.addEventListener('click', () => toggle(analyticsToggle));
    advertisingToggle.addEventListener('click', () => toggle(advertisingToggle));

    saveBtn.addEventListener('click', () => {
      setConsent({
        essential: true,
        analytics: analyticsToggle.getAttribute('aria-checked') === 'true',
        advertising: advertisingToggle.getAttribute('aria-checked') === 'true',
      });
      hideBanner();
      closeModal();
    });
    acceptBtn.addEventListener('click', () => {
      setConsent({ essential: true, analytics: true, advertising: true });
      hideBanner();
      closeModal();
    });
    rejectBtn.addEventListener('click', () => {
      setConsent({ essential: true, analytics: false, advertising: false });
      hideBanner();
      closeModal();
    });
    closeBtn.addEventListener('click', closeModal);

    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modalOpen) closeModal();
    });

    return { openModal, closeModal };
  }

  let modalControls = null;
  let bannerEl = null;

  function hideBanner() {
    if (bannerEl) bannerEl.classList.add('stone-consent-hidden');
  }

  function showBanner() {
    if (bannerEl) bannerEl.classList.remove('stone-consent-hidden');
  }

  function buildBanner() {
    bannerEl = createEl('section', {
      className: 'stone-consent-banner stone-consent-hidden',
      role: 'region',
      'aria-label': 'Cookie consent',
    });
    const title = createEl('h3', { className: 'stone-consent-title' }, 'Your privacy choices');
    const copy = createEl(
      'p',
      { className: 'stone-consent-copy' },
      'We use cookies for essential functionality, analytics, and advertising. Choose your preferences.'
    );
    const actions = createEl('div', { className: 'stone-consent-actions' });
    const acceptBtn = createEl('button', { className: 'stone-consent-btn', type: 'button' }, 'Accept All');
    const rejectBtn = createEl('button', { className: 'stone-consent-btn stone-consent-btn--ghost', type: 'button' }, 'Reject All');
    const customizeBtn = createEl('button', { className: 'stone-consent-btn stone-consent-btn--ghost', type: 'button' }, 'Customize');
    actions.appendChild(acceptBtn);
    actions.appendChild(rejectBtn);
    actions.appendChild(customizeBtn);
    bannerEl.appendChild(title);
    bannerEl.appendChild(copy);
    bannerEl.appendChild(actions);
    document.body.appendChild(bannerEl);

    acceptBtn.addEventListener('click', () => {
      setConsent({ essential: true, analytics: true, advertising: true });
      hideBanner();
    });
    rejectBtn.addEventListener('click', () => {
      setConsent({ essential: true, analytics: false, advertising: false });
      hideBanner();
    });
    customizeBtn.addEventListener('click', () => {
      if (!modalControls) return;
      modalControls.openModal();
    });
  }

  function createApi() {
    return {
      show() {
        if (modalControls) modalControls.openModal();
      },
      get(category) {
        const categories = consentState ? consentState.categories : DEFAULT_CATEGORIES;
        if (!(category in categories)) return false;
        return !!categories[category];
      },
      getAll() {
        const categories = consentState ? consentState.categories : DEFAULT_CATEGORIES;
        return { ...categories };
      },
      onChange(fn) {
        if (typeof fn !== 'function') return () => {};
        listeners.add(fn);
        return () => {
          listeners.delete(fn);
        };
      },
      reset() {
        try {
          window.localStorage.removeItem(STORAGE_KEY);
          window.localStorage.removeItem(LEGACY_STORAGE_KEY);
        } catch (error) {
          // no-op
        }
        consentState = {
          version: CONSENT_VERSION,
          timestamp: new Date().toISOString(),
          categories: { ...DEFAULT_CATEGORIES },
        };
        applyConsentMode(consentState.categories);
        dispatchConsentChange();
        showBanner();
      },
    };
  }

  function initUi() {
    injectStyles();
    buildBanner();
    modalControls = buildModal();
  }

  function initializeState() {
    ensureConsentModeDefaults();
    const stored = readStoredConsent();
    const gpcEnabled = navigator.globalPrivacyControl === true;

    if (stored) {
      consentState = stored;
    } else {
      consentState = {
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
        categories: { ...DEFAULT_CATEGORIES },
      };
    }

    if (gpcEnabled) {
      consentState = {
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
        categories: {
          essential: true,
          analytics: false,
          advertising: false,
        },
      };
      writeStoredConsent(consentState);
      applyConsentMode(consentState.categories);
      dispatchConsentChange();
      showToast('Global Privacy Control detected. Analytics and advertising cookies are disabled.');
      return { gpcEnabled: true, firstVisit: !stored };
    }

    applyConsentMode(consentState.categories);
    if (stored) {
      dispatchConsentChange();
    }
    return { gpcEnabled: false, firstVisit: !stored };
  }

  function start() {
    initUi();
    const { gpcEnabled, firstVisit } = initializeState();
    window.StoneConsent = createApi();
    if (!gpcEnabled && firstVisit) {
      showBanner();
    } else {
      hideBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  // Keep references to allow cleanup if needed by future enhancements.
  window.__stoneConsentCleanup = function cleanupStoneConsent() {
    unsubscribeFns.forEach((fn) => fn());
    unsubscribeFns = [];
  };
})();
