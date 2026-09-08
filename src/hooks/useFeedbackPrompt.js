import { useState, useEffect, useCallback, useRef } from 'react';

const STORAGE_KEYS = {
  HAS_PROMPTED: 'akp_feedback_has_prompted',
  STATUS: 'akp_feedback_status', // 'submitted' | 'rated' | 'dismissed'
  DISH_COUNT: 'akp_dish_generate_count',
};

const DISH_COUNT_THRESHOLD = 3; // Prompt only once after 3 dish suggestions

/**
 * Robust detection of whether the current user is in the mobile app
 * (Android WebView, TWA, Capacitor/Cordova wrapper, or app query parameter).
 */
export function detectIsMobileApp() {
  if (typeof window === 'undefined') return false;

  try {
    // 1. Explicit query parameters (great for testing or configured webviews)
    const urlParams = new URLSearchParams(window.location.search);
    const platformParam = urlParams.get('platform');
    const sourceParam = urlParams.get('source');
    const isAppParam = urlParams.get('isApp');
    if (
      platformParam === 'app' ||
      platformParam === 'android' ||
      sourceParam === 'app' ||
      sourceParam === 'playstore' ||
      isAppParam === 'true'
    ) {
      return true;
    }

    // 2. Android App Referrer (TWA / App Links)
    if (document.referrer && document.referrer.startsWith('android-app://')) {
      return true;
    }

    // 3. Injected Javascript Bridges / Hybrid frameworks
    if (
      window.Android ||
      window.AndroidInterface ||
      window.AndroidBridge ||
      window.cordova ||
      (window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform())
    ) {
      return true;
    }

    // 4. Android WebView User Agent indicators
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const isWebView =
      /\bwv\b/i.test(ua) || // Android Lollipop and newer WebView contains "wv"
      (isAndroid && /Version\/[0-9.]+/i.test(ua)) || // Legacy Android WebView
      /AajKiyaPakayen/i.test(ua); // Custom app UA

    if (isWebView) {
      return true;
    }
  } catch {
    // Graceful fallback on unexpected access errors
    return false;
  }

  return false;
}

export function useFeedbackPrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileApp, setIsMobileApp] = useState(false);
  const [dishCount, setDishCount] = useState(0);
  const hasTriggeredRef = useRef(false);

  // Initialize mobile app detection
  useEffect(() => {
    setIsMobileApp(detectIsMobileApp());
  }, []);

  // Check if we are permitted to auto-show prompt
  // Must show ONLY ONCE to a new user
  const canShowAutoPrompt = useCallback(() => {
    if (hasTriggeredRef.current) return false;

    try {
      const alreadyPrompted = localStorage.getItem(STORAGE_KEYS.HAS_PROMPTED);
      if (alreadyPrompted === 'true') {
        return false;
      }

      const status = localStorage.getItem(STORAGE_KEYS.STATUS);
      if (status) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }, []);

  const triggerPrompt = useCallback(() => {
    if (!canShowAutoPrompt()) return;

    hasTriggeredRef.current = true;
    try {
      // Mark as prompted permanently so it is never shown again to this user
      localStorage.setItem(STORAGE_KEYS.HAS_PROMPTED, 'true');
    } catch {
      // ignore
    }
    setIsOpen(true);
  }, [canShowAutoPrompt]);

  // Record dish generation event
  // Prompts only once when the user reaches 3 dish suggestions
  const recordDishGenerated = useCallback(() => {
    setDishCount((prev) => {
      const next = prev + 1;
      let totalCount = next;

      try {
        const currentSaved = Number(localStorage.getItem(STORAGE_KEYS.DISH_COUNT) || 0);
        totalCount = currentSaved + 1;
        localStorage.setItem(STORAGE_KEYS.DISH_COUNT, String(totalCount));
      } catch {
        // ignore storage errors
      }

      if (totalCount >= DISH_COUNT_THRESHOLD) {
        triggerPrompt();
      }
      return next;
    });
  }, [triggerPrompt]);

  // Dismiss prompt
  const dismissFeedback = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HAS_PROMPTED, 'true');
      localStorage.setItem(STORAGE_KEYS.STATUS, 'dismissed');
    } catch {
      // ignore
    }
    setIsOpen(false);
  }, []);

  // Complete feedback (e.g. submitted or rated)
  const completeFeedback = useCallback((status = 'submitted') => {
    try {
      localStorage.setItem(STORAGE_KEYS.HAS_PROMPTED, 'true');
      localStorage.setItem(STORAGE_KEYS.STATUS, status);
    } catch {
      // ignore
    }
  }, []);

  // Manual open (e.g. from footer link)
  const openFeedback = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeFeedback = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    isMobileApp,
    dishCount,
    openFeedback,
    closeFeedback,
    dismissFeedback,
    completeFeedback,
    recordDishGenerated,
  };
}
