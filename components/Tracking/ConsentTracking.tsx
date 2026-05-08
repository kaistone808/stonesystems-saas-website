'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    StoneConsent?: {
      get: (category: 'essential' | 'analytics' | 'advertising') => boolean;
      getAll: () => { essential: boolean; analytics: boolean; advertising: boolean };
    };
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    posthog?: {
      set_config?: (config: Record<string, unknown>) => void;
      opt_in_capturing?: () => void;
      opt_out_capturing?: () => void;
    };
    ttq?: {
      page?: () => void;
      load?: (id: string) => void;
    };
  }
}

const GOOGLE_ADS_ID = 'AW-16633753107';
const UNIVERSAL_SCRIPT_BASE =
  'https://t.stonesystems.io/v1/lst/universal-script?ph=d1ff03e6e535f28b0c70ca61588c134793a4ebf07f29a5b37494572df508bc86&tag=!clicked&ref_url=';

let googleAdsLoaded = false;
let universalScriptLoaded = false;
let metaPixelLoaded = false;
let tiktokLoaded = false;
let posthogConfigured = false;

function loadScriptOnce(id: string, src: string, onLoad?: () => void) {
  if (document.getElementById(id)) {
    if (onLoad) onLoad();
    return;
  }
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  if (onLoad) {
    script.addEventListener('load', onLoad, { once: true });
  }
  document.head.appendChild(script);
}

function initGoogleAds() {
  if (googleAdsLoaded) return;
  googleAdsLoaded = true;
  loadScriptOnce('stone-google-ads', `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`, () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        window.dataLayer?.push(arguments);
      };
    window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID);
  });
}

function initUniversalScript() {
  if (universalScriptLoaded) return;
  universalScriptLoaded = true;
  const url = `${UNIVERSAL_SCRIPT_BASE}${encodeURIComponent(window.location.href)}`;
  loadScriptOnce('stone-universal-script', url);
}

function initMetaPixel() {
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!metaPixelId || metaPixelLoaded) return;
  metaPixelLoaded = true;
  if (!window.fbq) {
    const fbqShim = function (...args: unknown[]) {
      (fbqShim as unknown as { queue: unknown[] }).queue.push(args);
    };
    (fbqShim as unknown as { queue: unknown[] }).queue = [];
    window.fbq = fbqShim as unknown as (...args: unknown[]) => void;
  }
  loadScriptOnce('stone-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js', () => {
    window.fbq?.('init', metaPixelId);
    window.fbq?.('track', 'PageView');
  });
}

function initTikTokPixel() {
  const tiktokPixelId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
  if (!tiktokPixelId || tiktokLoaded) return;
  tiktokLoaded = true;
  loadScriptOnce('stone-tiktok-pixel', 'https://analytics.tiktok.com/i18n/pixel/events.js', () => {
    if (window.ttq?.load) {
      window.ttq.load(tiktokPixelId);
      window.ttq.page?.();
    }
  });
}

function applyPosthogConsent(analyticsAllowed: boolean) {
  if (!window.posthog) return;
  if (!posthogConfigured) {
    window.posthog.set_config?.({
      opt_out_capturing_by_default: true,
      persistence: 'memory',
    });
    posthogConfigured = true;
  }
  if (analyticsAllowed) {
    window.posthog.set_config?.({ persistence: 'localStorage+cookie' });
    window.posthog.opt_in_capturing?.();
  } else {
    window.posthog.opt_out_capturing?.();
  }
}

function applyConsentState() {
  const consent = window.StoneConsent?.getAll?.();
  if (!consent) return;

  if (consent.advertising) {
    initGoogleAds();
    initUniversalScript();
    initMetaPixel();
    initTikTokPixel();
  }

  applyPosthogConsent(consent.analytics);
}

export function ConsentTracking() {
  useEffect(() => {
    applyConsentState();
    const handler = () => applyConsentState();
    window.addEventListener('stoneconsent:change', handler);
    return () => window.removeEventListener('stoneconsent:change', handler);
  }, []);

  return null;
}
