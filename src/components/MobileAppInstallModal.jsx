import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Check, Sparkles, Star } from 'lucide-react';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.blogspot.theaiowl.aajkiyapakaen';
const PLAY_STORE_MARKET_URI =
  'market://details?id=com.blogspot.theaiowl.aajkiyapakaen';
const STORAGE_KEY_DISMISSED = 'akp_mobile_app_modal_dismissed';

export default function MobileAppInstallModal({
  isMobileBrowser,
  isMobileApp,
  language,
  translations: t,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // If not a mobile browser or if running inside the actual mobile app, never show
    if (!isMobileBrowser || isMobileApp) {
      setIsOpen(false);
      return;
    }

    // Check if dismissed previously
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY_DISMISSED);
      if (dismissed === 'true') {
        return;
      }
    } catch {
      // Ignore localStorage errors
    }

    // Gentle delay after loading so user sees the page first
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [isMobileBrowser, isMobileApp]);

  if (!isOpen || !isMobileBrowser || isMobileApp) {
    return null;
  }

  const isRTL = language === 'ur';

  const handleDismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  const handleDownload = () => {
    try {
      localStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
      // Attempt opening in native Play Store app on Android
      window.location.href = PLAY_STORE_MARKET_URI;
      setTimeout(() => {
        window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
      }, 600);
    } catch {
      window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
    }
    setIsOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 z-50 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-install-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      <div
        className={`bg-white text-gray-900 w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl relative border-t sm:border border-purple-100 max-h-[92vh] overflow-y-auto ${
          isRTL ? 'font-urdu' : 'font-sans'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Dismiss X button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label={t.desktopAppCloseAria || 'Close'}
        >
          <X size={22} />
        </button>

        {/* Header with App Icon */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-700 to-indigo-600 p-2 shadow-lg flex items-center justify-center shrink-0 border border-purple-200">
            <img
              src="/icon.png"
              alt="Aaj Kiya Pakayen App"
              className="w-full h-full object-contain rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                <Star size={12} className="fill-emerald-600 text-emerald-600" />
                Google Play
              </span>
              <span className="text-[11px] font-medium text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                Free App
              </span>
            </div>
            <h3
              id="mobile-install-title"
              className="text-xl sm:text-2xl font-black text-purple-950 leading-snug"
            >
              {t.mobileAppModalTitle || 'Get the Aaj Kiya Pakayen App'}
            </h3>
          </div>
        </div>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
          {t.mobileAppModalSubtitle ||
            'Download our free mobile app for a faster, smoother cooking experience!'}
        </p>

        {/* Feature Highlights */}
        <div className="bg-purple-50/80 rounded-2xl p-4 mb-6 border border-purple-100 space-y-2.5">
          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check size={13} strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-purple-950">
              {t.mobileAppFeature1 || 'Lightning fast & works offline'}
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check size={13} strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-purple-950">
              {t.mobileAppFeature2 || 'Instant meal & dessert suggestions'}
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check size={13} strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-purple-950">
              {t.mobileAppFeature3 || 'Step-by-step recipes in 3 languages'}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 hover:from-purple-800 hover:to-indigo-800 text-white font-bold py-3.5 px-5 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 text-base active:scale-[0.99] cursor-pointer"
          >
            {/* Google Play Authentic SVG */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
              <path
                d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.61-1.636V3.45c0-.623.23-1.21.61-1.636z"
                fill="#00d6ff"
              />
              <path
                d="M17.18 8.613l-3.387 3.387-10.184-10.186c.353-.187.77-.289 1.214-.289.878 0 1.706.42 2.223.722l10.134 6.366z"
                fill="#ff3333"
              />
              <path
                d="M17.18 15.387l-10.134 6.366c-.517.302-1.345.722-2.223.722-.444 0-.861-.102-1.214-.289l10.184-10.186 3.387 3.387z"
                fill="#ffcc00"
              />
              <path
                d="M21.734 11.234l-4.554-2.621-3.387 3.387 3.387 3.387 4.554-2.621c.84-.483 1.266-1.127 1.266-1.766 0-.639-.426-1.283-1.266-1.766z"
                fill="#00e676"
              />
            </svg>
            <span>{t.mobileAppDownloadButton || 'Download on Google Play'}</span>
          </button>

          <button
            onClick={handleDismiss}
            className="w-full text-gray-500 hover:text-gray-800 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors cursor-pointer"
          >
            {t.mobileAppContinueBrowser || 'Continue in Browser'}
          </button>
        </div>
      </div>
    </div>
  );
}
