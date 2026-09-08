import React, { useState, useEffect, useMemo } from 'react';
import {
  ChefHat,
  CookingPot,
  Flame,
  Carrot,
  Utensils,
  Apple,
  X,
  Salad,
  Beef,
  Drumstick,
  Languages,
  CakeSlice,
  IceCream,
  Cookie,
  Candy,
  Coffee,
  Sparkles,
  Leaf,
} from 'lucide-react';
import { translations } from './data/translations.jsx';
import { initialDishesData } from './data/dishes.js';
import FeedbackModal from './components/FeedbackModal.jsx';
import { useFeedbackPrompt } from './hooks/useFeedbackPrompt.js';

export default function App() {
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('daily'); // 'daily' | 'dessert'
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [page, setPage] = useState(null);

  const {
    isOpen: isFeedbackOpen,
    isMobileApp,
    openFeedback,
    closeFeedback,
    dismissFeedback,
    completeFeedback,
    recordDishGenerated,
  } = useFeedbackPrompt();

  const t = translations[language];

  const p = {
    about: {
      name: language === 'ur' ? 'معلومات' : language === 'hi' ? 'परिचय' : 'About',
      content:
        language === 'ur'
          ? `یہ ایپ آپ کو روزمرہ کے کھانے اور مزیدار میٹھے پکوان منتخب کرنے میں مدد دیتی ہے۔ اس میں روایتی جنوبی ایشیائی پکوان شامل ہیں جن کی مکمل ترکیب اور اجزاء دستیاب ہیں۔\n\nآپ روزمرہ کے کھانے (Daily Meals) اور میٹھے (Desserts) میں سے انتخاب کر سکتے ہیں، اور روزمرہ کے کھانوں میں صرف سبزی (Veg Only) کا فلٹر بھی آن کر سکتے ہیں۔`
          : language === 'hi'
          ? `यह ऐप आपको रोज़मर्रा का खाना और स्वादिष्ट मिठाइयाँ चुनने में मदद करता है। इसमें पारंपरिक दक्षिण एशियाई व्यंजन और उनकी पूरी रेसिपी और सामग्री शामिल हैं।\n\nआप दैनिक भोजन (Daily Meals) और मिठाइयों (Desserts) में से चुन सकते हैं, और दैनिक भोजन के लिए केवल शाकाहारी (Veg Only) फ़िल्टर भी लगा सकते हैं।`
          : `This app is designed to help you decide what to cook daily, whether it's hearty Daily Meals or delectable Desserts.\n\nExplore a variety of traditional South Asian recipes with complete step-by-step instructions and ingredients. You can also filter for Vegetarian Only meals with the built-in slider. The app supports English, Urdu, and Hindi.`,
    },
    privacyPolicy: {
      name:
        language === 'ur'
          ? 'پرائیویسی پالیسی'
          : language === 'hi'
          ? 'गोपनीयता नीति'
          : 'Privacy Policy',
      content: `This app does not collect any personal data from users. It is designed to provide a simple and enjoyable experience for users looking for cooking inspiration. The app runs locally in your browser. No personal data is sent to any external servers or third parties.
      \nBy using this app, you agree to the terms of this privacy policy. If you have questions or concerns, please contact the developer.`,
    },
    contact: {
      name:
        language === 'ur'
          ? 'رابطہ'
          : language === 'hi'
          ? 'संपर्क'
          : 'Contact',
      content: `Email: umerfarooqdar.official@gmail.com\nLinkedin: in/umarfarooqdar\nFacebook: @umarfarooqdar.official\nCollaborate: github.com/umardar8`,
    },
  };

  // Filtered dishes according to active category and vegOnly setting
  const filteredDishes = useMemo(() => {
    return initialDishesData.filter((dish) => {
      if (dish.category !== category) return false;
      if (category === 'daily' && vegOnly && !dish.isVeg) return false;
      return true;
    });
  }, [category, vegOnly]);

  // Handle category change
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    if (selectedDish && selectedDish.category !== newCategory) {
      setSelectedDish(null);
    }
  };

  // Handle veg toggle change
  const handleVegToggle = () => {
    const nextVegOnly = !vegOnly;
    setVegOnly(nextVegOnly);
    if (selectedDish && nextVegOnly && !selectedDish.isVeg) {
      setSelectedDish(null);
    }
  };

  // Suggest a random dish from filtered list
  const handleSuggestDish = () => {
    if (filteredDishes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredDishes.length);
    setSelectedDish(filteredDishes[randomIndex]);
    setIsModalOpen(false);
    recordDishGenerated();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closePage = () => setIsPageOpen(false);

  // Dynamic icon pool based on category
  const iconComponents = useMemo(() => {
    if (category === 'dessert') {
      return [CakeSlice, IceCream, Cookie, Candy, Coffee, Sparkles, Apple];
    }
    if (vegOnly) {
      return [ChefHat, CookingPot, Flame, Carrot, Utensils, Salad, Leaf, Apple];
    }
    return [
      ChefHat,
      CookingPot,
      Flame,
      Carrot,
      Utensils,
      Apple,
      Salad,
      Beef,
      Drumstick,
    ];
  }, [category, vegOnly]);

  const [displayIcons, setDisplayIcons] = useState([]);

  useEffect(() => {
    const shuffledIcons = [...iconComponents].sort(() => 0.5 - Math.random());
    setDisplayIcons(shuffledIcons.slice(0, 6));
  }, [selectedDish, language, category, vegOnly, iconComponents]);

  const LanguageButton = ({ langCode, langName }) => (
    <button
      onClick={() => setLanguage(langCode)}
      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-150 cursor-pointer
        ${
          language === langCode
            ? 'bg-purple-700 text-white shadow-md'
            : 'bg-purple-200/90 text-purple-900 hover:bg-purple-300'
        }`}
    >
      {langName}
    </button>
  );

  const fontClass = language === 'ur' ? 'font-urdu' : 'font-sans';
  const textDirection = language === 'ur' ? 'rtl' : 'ltr';
  const titleSizeClass =
    language === 'ur' ? 'text-3xl mb-4' : 'text-4xl sm:text-5xl';
  const modalTitleSizeClass =
    language === 'ur' ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl';

  return (
    <div
      className={`min-h-screen min-w-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 flex flex-col items-center justify-center p-4 ${fontClass} selection:bg-purple-300 selection:text-purple-900`}
    >
      {/* Header & Language Bar */}
      <header className="mb-4 sm:mb-6 text-center w-full max-w-md">
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-4 bg-purple-500/30 backdrop-blur-md p-2 rounded-xl border border-purple-400/20 shadow-inner">
          <Languages size={20} className="text-purple-100 shrink-0" />
          <LanguageButton langCode="en" langName={t.langEnglish} />
          <LanguageButton langCode="ur" langName={t.langUrdu} />
          <LanguageButton langCode="hi" langName={t.langHindi} />
        </div>
        <h1 className={`${titleSizeClass} font-bold text-white tracking-tight drop-shadow-md`}>
          {t.title}
        </h1>
        <p className="text-purple-200 text-sm sm:text-base mt-1 drop-shadow-sm">
          {t.subtitle}
        </p>
      </header>

      {/* Main Interactive Controls & Suggestion */}
      <main className="w-full max-w-md space-y-4 sm:space-y-5">
        {/* Category Pill Switcher */}
        <div className="bg-white/15 backdrop-blur-md p-1.5 rounded-2xl flex border border-white/20 shadow-lg">
          <button
            type="button"
            onClick={() => handleCategoryChange('daily')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              category === 'daily'
                ? 'bg-white text-purple-900 shadow-md scale-[1.01]'
                : 'text-purple-100 hover:text-white hover:bg-white/10'
            }`}
          >
            <CookingPot size={18} />
            <span>{t.categoryDaily}</span>
          </button>
          <button
            type="button"
            onClick={() => handleCategoryChange('dessert')}
            className={`flex-1 py-2.5 px-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              category === 'dessert'
                ? 'bg-white text-purple-900 shadow-md scale-[1.01]'
                : 'text-purple-100 hover:text-white hover:bg-white/10'
            }`}
          >
            <CakeSlice size={18} />
            <span>{t.categoryDessert}</span>
          </button>
        </div>

        {/* Veg Only Switch (Daily Meals Only) */}
        {category === 'daily' && (
          <div
            role="button"
            tabIndex={0}
            onClick={handleVegToggle}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleVegToggle();
              }
            }}
            className="animate-fadeIn bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl shadow-md flex items-center justify-between cursor-pointer select-none transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-xl transition-colors duration-200 flex items-center justify-center ${
                  vegOnly
                    ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 shadow-sm'
                    : 'bg-white/10 text-purple-200 border border-white/10'
                }`}
              >
                <Leaf size={18} className={vegOnly ? 'text-emerald-300' : 'text-purple-200'} />
              </div>
              <div className="text-left rtl:text-right">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm sm:text-base font-semibold leading-tight">
                    {t.vegOnly}
                  </span>
                  {vegOnly && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/40">
                      ON
                    </span>
                  )}
                </div>
                <span className="block text-xs text-purple-200/90 mt-0.5 leading-tight">
                  {vegOnly
                    ? language === 'ur'
                      ? 'صرف سبزیاں اور دالیں'
                      : language === 'hi'
                      ? 'केवल शाकाहारी व्यंजन'
                      : 'Vegetables & lentils only'
                    : language === 'ur'
                    ? 'گوشت، مرغی اور سبزیاں'
                    : language === 'hi'
                    ? 'मांसाहारी एवं शाकाहारी'
                    : 'All meat & vegetarian dishes'}
                </span>
              </div>
            </div>

            {/* iOS-Style Standard Switch */}
            <div
              role="switch"
              aria-checked={vegOnly}
              aria-label={t.vegOnly}
              className={`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                vegOnly
                  ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                  : 'bg-white/25'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out ${
                  vegOnly ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </div>
          </div>
        )}

        {/* Generator Card */}
        <div className="bg-purple-50/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl shadow-2xl border border-white/40">
          {displayIcons.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              {displayIcons.map((IconComponent, index) => (
                <div
                  key={index}
                  className="p-2.5 rounded-xl bg-purple-100/70 border border-purple-200/50 shadow-sm flex items-center justify-center transform transition-transform hover:scale-110"
                >
                  <IconComponent
                    size={32}
                    className="text-purple-600"
                    strokeWidth={1.8}
                  />
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleSuggestDish}
            className="w-full text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl text-lg sm:text-xl shadow-xl transition-all duration-150 ease-in-out transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-purple-400/50 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 cursor-pointer"
            aria-label={t.suggestDishAria}
          >
            {category === 'dessert' ? t.mainButtonDessert : t.mainButton}
          </button>
        </div>

        {/* Suggested Dish Result Card */}
        {selectedDish && (
          <div className="bg-amber-50/95 border-2 border-amber-400/90 p-5 sm:p-6 rounded-2xl shadow-2xl text-gray-800 animate-fadeIn">
            {/* Dish Category & Veg Tags */}
            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                {selectedDish.category === 'dessert' ? t.sweetBadge : t.categoryDaily}
              </span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border ${
                  selectedDish.isVeg
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-rose-100 text-rose-800 border-rose-300'
                }`}
              >
                {selectedDish.isVeg ? '🌱 ' + t.vegBadge : '🍖 ' + t.nonVegBadge}
              </span>
            </div>

            <h2 className={`${modalTitleSizeClass} font-extrabold text-purple-900 mb-2`}>
              {selectedDish.name[language] || selectedDish.name.en}
            </h2>

            <p className="text-sm sm:text-base text-purple-700 font-medium mb-1">
              <span className="font-bold text-gray-700">{t.dishTypePrefix}</span>{' '}
              {selectedDish.type[language] || selectedDish.type.en}
            </p>

            <p
              dir={textDirection}
              className="text-sm sm:text-base text-purple-800 font-medium mb-4"
            >
              <span className="font-bold text-gray-700">{t.keyIngredientsPrefix}</span>{' '}
              {selectedDish.ingredients.slice(0, 4).join(', ')}
              {selectedDish.ingredients.length > 4 ? '...' : ''}
            </p>

            <button
              onClick={openModal}
              className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-purple-950 font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-150 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-yellow-300 cursor-pointer"
              aria-label={`${t.checkRecipeAria} ${selectedDish.name[language]}`}
            >
              {t.checkRecipeButton}
            </button>
          </div>
        )}
      </main>

      {/* Recipe Modal */}
      {isModalOpen && selectedDish && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div
            className={`bg-white p-5 sm:p-7 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col ${fontClass} border border-purple-100`}
          >
            <div
              dir={textDirection}
              className="flex justify-between items-start mb-4 pb-3 border-b border-gray-100"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    {selectedDish.category === 'dessert' ? t.sweetBadge : t.categoryDaily}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      selectedDish.isVeg
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {selectedDish.isVeg ? '🌱 ' + t.vegBadge : '🍖 ' + t.nonVegBadge}
                  </span>
                </div>
                <h3 className={`${modalTitleSizeClass} font-bold text-purple-900`}>
                  {selectedDish.name[language] || selectedDish.name.en}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
                aria-label={t.closeRecipeModalAria}
              >
                <X size={26} />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
              <div className="mb-5">
                <h4 className="text-lg font-bold text-purple-700 mb-2.5 flex items-center gap-2">
                  <span>{t.modalIngredientsTitle}</span>
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1.5 text-sm sm:text-base text-left">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <li key={index} className="leading-snug">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-purple-700 mb-2.5">
                  {t.modalRecipeTitle}
                </h4>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base text-left bg-purple-50/50 p-3.5 rounded-xl border border-purple-100">
                  {selectedDish.recipe}
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              {t.modalCloseButton}
            </button>
          </div>
        </div>
      )}

      {/* Info Page Modal (About / Privacy / Contact) */}
      {isPageOpen && page && p[page] && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-purple-900">
                {p[page].name}
              </h3>
              <button
                onClick={closePage}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
              >
                <X size={26} />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base text-left">
                {p[page].content}
              </p>
            </div>

            <button
              onClick={closePage}
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              {t.modalCloseButton}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-6 sm:mt-10 pb-4">
        <p className="text-purple-200 whitespace-pre-line leading-relaxed text-xs sm:text-sm">
          {t.footerText}
        </p>
        <p className="text-purple-300 text-xs sm:text-sm mt-2 flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => {
              setIsPageOpen(true);
              setPage('about');
            }}
            className="hover:text-white transition-colors underline cursor-pointer"
          >
            About
          </button>
          <span>|</span>
          <a
            href="https://play.google.com/store/apps/dev?id=6643840114902370026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline"
          >
            MufasaApps
          </a>
          <span>|</span>
          <button
            onClick={() => {
              setIsPageOpen(true);
              setPage('privacyPolicy');
            }}
            className="hover:text-white transition-colors underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>|</span>
          <button
            onClick={() => {
              setIsPageOpen(true);
              setPage('contact');
            }}
            className="hover:text-white transition-colors underline cursor-pointer"
          >
            Contact
          </button>
          <span>|</span>
          <button
            onClick={openFeedback}
            className="hover:text-white transition-colors underline cursor-pointer font-medium"
          >
            {t.feedbackLink}
          </button>
        </p>
      </footer>

      {/* Feedback & Play Store Rating Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        isMobileApp={isMobileApp}
        language={language}
        translations={t}
        onClose={closeFeedback}
        onDismiss={dismissFeedback}
        onComplete={completeFeedback}
      />

      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Noto+Sans+Devanagari:wght@400;700&display=swap');

        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', 'Arial', sans-serif;
        }
        .font-sans {
          font-family: 'Noto Sans Devanagari', ui-sans-serif, system-ui,
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
        }

        .animate-fadeIn {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #c084fc #ede9fe;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 7px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #ede9fe;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #c084fc;
          border-radius: 10px;
          border: 2px solid #ede9fe;
        }
      `}</style>
    </div>
  );
}
