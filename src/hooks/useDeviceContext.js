import { useState, useEffect } from 'react';
import { detectIsMobileApp } from './useFeedbackPrompt.js';

/**
 * Checks whether the current device is a mobile browser viewport
 */
export function checkIsMobileDevice() {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent || '';
  // Check common mobile/tablet user agents (including iPadOS)
  const isMobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  // Check screen width breakpoint and touch support
  const isSmallScreen = window.innerWidth <= 768;
  const isTouch = 'ontouchstart' in window || Boolean(navigator.maxTouchPoints && navigator.maxTouchPoints > 0);

  return Boolean(isMobileUA || (isTouch && isSmallScreen));
}

/**
 * Hook to provide unified environment state:
 * - isMobileApp: true when accessed inside actual mobile app (WebView, TWA, Cordova/Capacitor, app params)
 * - isMobileBrowser: true when viewed in a mobile browser (and not in actual mobile app)
 * - isDesktopBrowser: true when viewed on a desktop browser (and not in actual mobile app)
 */
export function useDeviceContext() {
  const [deviceState, setDeviceState] = useState(() => {
    const isApp = typeof window !== 'undefined' ? detectIsMobileApp() : false;
    const isMobile = typeof window !== 'undefined' ? checkIsMobileDevice() : false;

    return {
      isMobileApp: isApp,
      isMobileBrowser: !isApp && isMobile,
      isDesktopBrowser: !isApp && !isMobile,
    };
  });

  useEffect(() => {
    const updateDevice = () => {
      const isApp = detectIsMobileApp();
      const isMobile = checkIsMobileDevice();

      setDeviceState({
        isMobileApp: isApp,
        isMobileBrowser: !isApp && isMobile,
        isDesktopBrowser: !isApp && !isMobile,
      });
    };

    updateDevice();
    window.addEventListener('resize', updateDevice);
    window.addEventListener('orientationchange', updateDevice);

    return () => {
      window.removeEventListener('resize', updateDevice);
      window.removeEventListener('orientationchange', updateDevice);
    };
  }, []);

  return deviceState;
}
