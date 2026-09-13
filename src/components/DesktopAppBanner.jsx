import React, { useState } from 'react';
import { ExternalLink, ChevronUp } from 'lucide-react';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.blogspot.theaiowl.aajkiyapakaen';

export default function DesktopAppBanner({
  isDesktopBrowser,
  isMobileApp,
  language,
  translations: t,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Strictly hidden if in actual mobile app or not a desktop browser
  if (!isDesktopBrowser || isMobileApp) {
    return null;
  }

  const isRTL = language === 'ur';

  return (
    <aside
      aria-label={t.desktopAppInstallTitle || 'Install Mobile App'}
      className={`fixed bottom-5 left-5 z-40 hidden md:flex flex-col items-start transition-all duration-300 ${
        isRTL ? 'font-urdu' : 'font-sans'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Expanded Card View */}
      {isExpanded ? (
        <div className="w-80 bg-gray-900/95 backdrop-blur-xl border border-purple-400/30 text-white p-4 rounded-2xl shadow-2xl animate-fadeIn relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-2 shadow-md flex items-center justify-center shrink-0 border border-purple-300/30">
              <img
                src="/icon.png"
                alt="Aaj Kiya Pakayen Icon"
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="overflow-hidden">
              <h4 className="font-bold text-white text-base leading-tight truncate">
                {t.desktopAppInstallTitle || 'Get our Mobile App'}
              </h4>
            </div>
          </div>

          <p className="text-purple-200/90 text-xs leading-relaxed mb-3.5">
            {t.desktopAppInstallTooltip ||
              'Install Aaj Kiya Pakayen on your phone for quick daily cooking inspiration and offline access!'}
          </p>

          <div className="flex items-center gap-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-2.5 px-3.5 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] border border-purple-400/30"
            >
              {/* Google Play Triangle SVG */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
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
              <span>{t.desktopAppOpenPlayStore || 'View on Google Play'}</span>
              <ExternalLink size={14} className="opacity-80" />
            </a>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-purple-300 hover:text-white px-3 py-2 rounded-xl text-xs hover:bg-white/10 transition-colors cursor-pointer"
              title="Minimize"
            >
              {t.modalCloseButton || 'Close'}
            </button>
          </div>
        </div>
      ) : (
        /* Compact Floating Icon / Pill */
        <div className="group relative">
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2.5 bg-gray-900/90 hover:bg-gray-900 text-white px-3.5 py-2.5 rounded-full shadow-2xl border border-purple-400/40 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-purple-300 cursor-pointer"
            aria-label={t.desktopAppInstallTitle || 'Install Mobile App'}
          >
            {/* Google Play authentic icon */}
            <div className="relative flex items-center justify-center">
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
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <span className="text-xs font-semibold text-purple-100 group-hover:text-white">
              {t.desktopAppInstallTitle || 'Get Mobile App'}
            </span>

            <ChevronUp size={14} className="text-purple-300 group-hover:text-white" />
          </button>
        </div>
      )}
    </aside>
  );
}
