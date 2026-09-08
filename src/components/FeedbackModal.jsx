import React, { useState } from 'react';
import {
  X,
  Star,
  Sparkles,
  MessageSquareHeart,
  UtensilsCrossed,
  Send,
  ExternalLink,
  CheckCircle2,
  CookingPot,
  CakeSlice,
  Leaf,
  Beef,
} from 'lucide-react';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.blogspot.theaiowl.aajkiyapakaen';
const PLAY_STORE_MARKET_URI =
  'market://details?id=com.blogspot.theaiowl.aajkiyapakaen';
const FEEDBACK_EMAIL = 'umerfarooqdar.official@gmail.com';

export default function FeedbackModal({
  isOpen,
  isMobileApp,
  language,
  translations: t,
  onClose,
  onDismiss,
  onComplete,
}) {
  const [mode, setMode] = useState('suggest'); // 'suggest' | 'general'
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  // Dish suggestion fields
  const [dishName, setDishName] = useState('');
  const [dishCategory, setDishCategory] = useState('daily'); // 'daily' | 'dessert'
  const [isVeg, setIsVeg] = useState(false);
  const [dishIngredients, setDishIngredients] = useState('');

  // General feedback fields
  const [feedbackText, setFeedbackText] = useState('');

  // UI status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appSuggestMode, setAppSuggestMode] = useState(false); // In app mode, allows switching to dish suggestion

  if (!isOpen) return null;

  const textDirection = language === 'ur' ? 'rtl' : 'ltr';
  const fontClass = language === 'ur' ? 'font-urdu' : 'font-sans';

  // Handle Play Store redirect
  const handleRatePlayStore = () => {
    try {
      // Attempt opening market:// intent first on Android, fallback to web URL
      window.location.href = PLAY_STORE_MARKET_URI;
      setTimeout(() => {
        window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
      }, 500);
    } catch {
      window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
    }
    onComplete('rated');
    onClose();
  };

  const handleAlreadyRated = () => {
    onComplete('rated');
    onClose();
  };

  // Handle Browser Feedback / Dish Submission via FormSubmit.co
  const handleSubmitFeedback = async (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    let payload = {};
    if (mode === 'suggest') {
      payload = {
        _subject: `[Aaj Kiya Pakayen] New Dish Suggestion: ${dishName || 'Untitled'}`,
        _captcha: 'false',
        _template: 'table',
        'Submission Type': 'Dish Suggestion',
        'Dish Name': dishName,
        Category: dishCategory === 'dessert' ? 'Dessert' : 'Daily Meal',
        Diet: isVeg ? 'Vegetarian' : 'Non-Vegetarian',
        'Ingredients / Recipe Notes': dishIngredients || 'N/A',
        Language: language,
        Platform: isMobileApp ? 'Mobile App' : 'Web Browser',
      };
    } else {
      payload = {
        _subject: `[Aaj Kiya Pakayen] User Feedback (${rating} Stars)`,
        _captcha: 'false',
        _template: 'table',
        'Submission Type': 'Feedback Rating',
        Rating: `${rating} / 5 Stars`,
        Comments: feedbackText || 'N/A',
        Language: language,
        Platform: isMobileApp ? 'Mobile App' : 'Web Browser',
      };
    }

    // Save locally as backup
    try {
      const existing = JSON.parse(localStorage.getItem('akp_user_feedback_submissions') || '[]');
      existing.push({
        type: mode,
        date: new Date().toISOString(),
        dishName,
        dishCategory,
        isVeg,
        dishIngredients,
        rating,
        feedbackText,
      });
      localStorage.setItem('akp_user_feedback_submissions', JSON.stringify(existing));
    } catch {
      // ignore
    }

    // Send directly to FormSubmit.co endpoint
    try {
      await fetch(`https://formsubmit.co/ajax/${FEEDBACK_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('FormSubmit delivery error, saved locally:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onComplete('submitted');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div
        dir={textDirection}
        className={`bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col ${fontClass} border border-purple-200/60 overflow-hidden relative`}
      >
        {/* Decorative Top Accent Gradient */}
        <div className="h-2.5 w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 ltr:right-4 rtl:left-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-10 cursor-pointer"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="overflow-y-auto p-5 sm:p-7 flex-grow scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-50">
          {/* SUCCESS CONFIRMATION STATE */}
          {isSubmitted ? (
            <div className="py-8 px-4 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t.feedbackSuccessTitle}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                {t.feedbackSuccessMessage}
              </p>
              <button
                onClick={onClose}
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-150 cursor-pointer"
              >
                {t.modalCloseButton}
              </button>
            </div>
          ) : isMobileApp && !appSuggestMode ? (
            /* ============================================================ */
            /* CASE 2: MOBILE APP PLAY STORE RATING PROMPT                   */
            /* ============================================================ */
            <div className="py-2 text-center space-y-5">
              {/* App Icon / Play Store Badge */}
              <div className="relative inline-block">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-400 p-0.5 shadow-xl flex items-center justify-center">
                  <div className="w-full h-full bg-purple-900 rounded-[14px] flex items-center justify-center text-white">
                    <CookingPot size={40} className="text-amber-300" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-400 text-purple-950 p-1 rounded-full shadow-md">
                  <Sparkles size={16} />
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-950 mb-2">
                  {t.appRatingTitle}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {t.appRatingSubtitle}
                </p>
              </div>

              {/* Star Display */}
              <div className="flex justify-center items-center gap-1.5 py-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={32}
                    className="fill-amber-400 text-amber-400 drop-shadow-sm transform hover:scale-125 transition-transform duration-150"
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleRatePlayStore}
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-purple-950 font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-base sm:text-lg"
                >
                  <ExternalLink size={20} />
                  <span>{t.rateOnPlayStoreButton}</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={onDismiss}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 text-sm font-medium transition-colors cursor-pointer"
                  >
                    {t.maybeLaterButton}
                  </button>
                  <button
                    onClick={handleAlreadyRated}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-sm font-medium transition-colors cursor-pointer"
                  >
                    {t.alreadyRatedButton}
                  </button>
                </div>
              </div>

              {/* Option to suggest a dish directly */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={() => setAppSuggestMode(true)}
                  className="text-xs sm:text-sm text-purple-700 hover:text-purple-900 font-semibold underline cursor-pointer"
                >
                  {t.tabSuggestDish}
                </button>
              </div>
            </div>
          ) : (
            /* ============================================================ */
            /* CASE 1: BROWSER USER PROMPT (FEEDBACK / SUGGEST DISH)        */
            /* ============================================================ */
            <div className="space-y-5">
              {/* Header */}
              <div className="text-center">
                <div className="inline-flex p-3 rounded-2xl bg-purple-100 text-purple-700 mb-2.5 shadow-inner">
                  <MessageSquareHeart size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-950">
                  {t.feedbackBrowserTitle}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-normal">
                  {t.feedbackBrowserSubtitle}
                </p>
              </div>

              {/* Toggle Mode: Suggest Dish vs General Feedback */}
              <div className="bg-purple-100/70 p-1 rounded-xl flex border border-purple-200 text-sm font-medium">
                <button
                  type="button"
                  onClick={() => setMode('suggest')}
                  className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    mode === 'suggest'
                      ? 'bg-white text-purple-900 shadow-sm font-semibold'
                      : 'text-purple-700 hover:text-purple-950'
                  }`}
                >
                  <UtensilsCrossed size={16} />
                  <span>{t.tabSuggestDish}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('general')}
                  className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    mode === 'general'
                      ? 'bg-white text-purple-900 shadow-sm font-semibold'
                      : 'text-purple-700 hover:text-purple-950'
                  }`}
                >
                  <Sparkles size={16} />
                  <span>{t.tabGeneralFeedback}</span>
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                {mode === 'suggest' ? (
                  <>
                    {/* Dish Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                        {t.dishNameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={dishName}
                        onChange={(e) => setDishName(e.target.value)}
                        placeholder={t.dishNamePlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base text-gray-800"
                      />
                    </div>

                    {/* Dish Category Selection */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                        {t.dishCategoryLabel}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDishCategory('daily')}
                          className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            dishCategory === 'daily'
                              ? 'border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-400/40'
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <CookingPot size={16} />
                          <span>{t.dishCategoryDaily}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDishCategory('dessert')}
                          className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            dishCategory === 'dessert'
                              ? 'border-purple-600 bg-purple-50 text-purple-900 ring-2 ring-purple-400/40'
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <CakeSlice size={16} />
                          <span>{t.dishCategoryDessert}</span>
                        </button>
                      </div>
                    </div>

                    {/* Dietary Type: Veg vs Non-Veg */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1.5">
                        {t.dishDietType}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setIsVeg(true)}
                          className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            isVeg
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-400/40'
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Leaf size={16} className="text-emerald-600" />
                          <span>{t.dishDietVeg}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsVeg(false)}
                          className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all ${
                            !isVeg
                              ? 'border-rose-600 bg-rose-50 text-rose-900 ring-2 ring-rose-400/40'
                              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Beef size={16} className="text-rose-600" />
                          <span>{t.dishDietNonVeg}</span>
                        </button>
                      </div>
                    </div>

                    {/* Ingredients / Recipe Notes */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                        {t.dishIngredientsLabel}
                      </label>
                      <textarea
                        rows={3}
                        value={dishIngredients}
                        onChange={(e) => setDishIngredients(e.target.value)}
                        placeholder={t.dishIngredientsPlaceholder}
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-gray-800 resize-none"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* General Rating Stars */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 text-center">
                        {t.ratingLabel}
                      </label>
                      <div className="flex justify-center items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => {
                          const active = (hoverRating || rating) >= star;
                          return (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="p-1 text-amber-400 transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                              aria-label={`${star} stars`}
                            >
                              <Star
                                size={32}
                                className={
                                  active
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-gray-300'
                                }
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Feedback Message */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-1">
                        {t.feedbackTextLabel}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        placeholder={t.feedbackTextPlaceholder}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-gray-800 resize-none"
                      />
                    </div>
                  </>
                )}

                {/* Submit & Dismiss buttons */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Send size={18} />
                    <span>
                      {isSubmitting ? t.submittingButton : t.submitFeedbackButton}
                    </span>
                  </button>

                  <div className="flex justify-between items-center px-1 pt-1 text-xs">
                    <button
                      type="button"
                      onClick={onDismiss}
                      className="text-gray-500 hover:text-gray-700 underline cursor-pointer"
                    >
                      {t.maybeLaterButton}
                    </button>

                    {isMobileApp && appSuggestMode && (
                      <button
                        type="button"
                        onClick={() => setAppSuggestMode(false)}
                        className="text-purple-600 hover:text-purple-800 font-medium underline cursor-pointer"
                      >
                        ← {t.rateOnPlayStoreButton}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
