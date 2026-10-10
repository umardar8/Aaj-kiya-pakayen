import React, { useEffect } from 'react';
import {
  X,
  Sparkles,
  UtensilsCrossed,
  Sunrise,
  Sun,
  MoonStar,
  Clock,
  RotateCcw,
  Check,
  SlidersHorizontal,
} from 'lucide-react';

export default function OptionsDrawer({
  isOpen,
  onClose,
  language,
  translations: t,
  appMode,
  setAppMode,
  mealType,
  setMealType,
  category,
  onReset,
}) {
  const fontClass = language === 'ur' ? 'font-urdu' : 'font-sans';
  const textDirection = language === 'ur' ? 'rtl' : 'ltr';

  // Handle ESC key press to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      className={`fixed inset-0 z-50 overflow-hidden ${fontClass}`}
    >
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        aria-hidden="true"
      />

      {/* Drawer Container (RTL from left, LTR from right) */}
      <div
        className={`fixed inset-y-0 max-w-full flex ${
          language === 'ur' ? 'left-0 justify-start' : 'right-0 justify-end'
        }`}
      >
        <div
          dir={textDirection}
          className="w-full max-w-[88vw] sm:max-w-md bg-gradient-to-b from-purple-900 via-indigo-950 to-purple-950 text-white shadow-2xl border-l rtl:border-l-0 rtl:border-r border-purple-400/20 flex flex-col h-full animate-slideIn"
        >
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-purple-500/25 flex items-center justify-between shrink-0 bg-purple-950/60 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/30 text-amber-300">
                <SlidersHorizontal size={20} />
              </div>
              <div>
                <h3 id="drawer-title" className="text-lg sm:text-xl font-bold leading-tight text-white">
                  {t.drawerTitle}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-purple-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={t.closeFiltersAria}
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6 scrollbar-thin">
            {/* Section 1: Cooking Mode Selector */}
            <div>
              <div className="text-center mb-3">
                <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300">
                  {t.modeSectionTitle}
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Mode 1: Random Dish */}
                <button
                  type="button"
                  onClick={() => setAppMode('random')}
                  className={`w-full p-3.5 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    appMode === 'random'
                      ? 'bg-white text-purple-950 border-white shadow-lg scale-[1.01]'
                      : 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-100 border-purple-400/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        appMode === 'random'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-purple-800/40 text-purple-200'
                      }`}
                    >
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-sm sm:text-base leading-snug">
                        {t.modeRandom}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                      appMode === 'random'
                        ? 'bg-purple-700 border-purple-700 text-white'
                        : 'border-purple-400/40 bg-transparent'
                    }`}
                  >
                    {appMode === 'random' && <Check size={12} strokeWidth={3} />}
                  </div>
                </button>

                {/* Mode 2: Cook by Available Ingredients */}
                <button
                  type="button"
                  onClick={() => setAppMode('ingredients')}
                  className={`w-full p-3.5 rounded-2xl border text-left rtl:text-right transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    appMode === 'ingredients'
                      ? 'bg-white text-purple-950 border-white shadow-lg scale-[1.01]'
                      : 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-100 border-purple-400/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        appMode === 'ingredients'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-purple-800/40 text-amber-300'
                      }`}
                    >
                      <UtensilsCrossed size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base leading-snug">
                          {t.modeIngredients}
                        </span>
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-400 text-purple-950 shadow-sm animate-pulse">
                          {t.modeIngredientsBadge || 'NEW'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                      appMode === 'ingredients'
                        ? 'bg-purple-700 border-purple-700 text-white'
                        : 'border-purple-400/40 bg-transparent'
                    }`}
                  >
                    {appMode === 'ingredients' && (
                      <Check size={12} strokeWidth={3} />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Section 2: Meal Time Filter (Active for Daily Meals) */}
            {category === 'daily' && (
              <div>
                <div className="text-center mb-3">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300">
                    {t.mealSectionTitle}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {/* All Meals */}
                  <button
                    type="button"
                    onClick={() => setMealType('all')}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex items-center gap-2.5 ${
                      mealType === 'all'
                        ? 'bg-white text-purple-950 border-white shadow-md font-bold'
                        : 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-100 border-purple-400/20'
                    }`}
                  >
                    <Clock
                      size={18}
                      className={
                        mealType === 'all' ? 'text-purple-700' : 'text-purple-300'
                      }
                    />
                    <div>
                      <div className="text-xs sm:text-sm leading-tight">
                        {t.allMeals}
                      </div>
                    </div>
                  </button>

                  {/* Breakfast */}
                  <button
                    type="button"
                    onClick={() => setMealType('breakfast')}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex items-center gap-2.5 ${
                      mealType === 'breakfast'
                        ? 'bg-white text-purple-950 border-white shadow-md font-bold'
                        : 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-100 border-purple-400/20'
                    }`}
                  >
                    <Sunrise
                      size={18}
                      className={
                        mealType === 'breakfast'
                          ? 'text-amber-500'
                          : 'text-amber-300'
                      }
                    />
                    <div>
                      <div className="text-xs sm:text-sm leading-tight">
                        {t.mealBreakfast}
                      </div>
                    </div>
                  </button>

                  {/* Lunch */}
                  <button
                    type="button"
                    onClick={() => setMealType('lunch')}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex items-center gap-2.5 ${
                      mealType === 'lunch'
                        ? 'bg-white text-purple-950 border-white shadow-md font-bold'
                        : 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-100 border-purple-400/20'
                    }`}
                  >
                    <Sun
                      size={18}
                      className={
                        mealType === 'lunch' ? 'text-amber-500' : 'text-amber-300'
                      }
                    />
                    <div>
                      <div className="text-xs sm:text-sm leading-tight">
                        {t.mealLunch}
                      </div>
                    </div>
                  </button>

                  {/* Dinner */}
                  <button
                    type="button"
                    onClick={() => setMealType('dinner')}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all cursor-pointer flex items-center gap-2.5 ${
                      mealType === 'dinner'
                        ? 'bg-white text-purple-950 border-white shadow-md font-bold'
                        : 'bg-purple-900/30 hover:bg-purple-900/50 text-purple-100 border-purple-400/20'
                    }`}
                  >
                    <MoonStar
                      size={18}
                      className={
                        mealType === 'dinner'
                          ? 'text-indigo-600'
                          : 'text-purple-300'
                      }
                    />
                    <div>
                      <div className="text-xs sm:text-sm leading-tight">
                        {t.mealDinner}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-purple-500/25 bg-purple-950/80 backdrop-blur-md space-y-2 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-purple-950 font-bold py-3 px-4 rounded-xl text-sm sm:text-base shadow-lg transition-all cursor-pointer"
            >
              {t.applyAndClose}
            </button>

            {(mealType !== 'all' || appMode !== 'random') && (
              <button
                type="button"
                onClick={onReset}
                className="w-full py-2 px-3 text-xs text-purple-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>{t.resetFilters}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes slideIn {
          from {
            transform: ${language === 'ur' ? 'translateX(-100%)' : 'translateX(100%)'};
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}
