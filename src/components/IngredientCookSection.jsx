import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Check,
  Search,
  X,
  UtensilsCrossed,
  ChefHat,
  Leaf,
  Clock,
  Sunrise,
  Sun,
  MoonStar,
  CookingPot,
  CakeSlice,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';
import {
  PREDEFINED_INGREDIENTS,
  INGREDIENT_CATEGORIES,
  evaluateDishesWithIngredients,
} from '../data/ingredients.js';

export default function IngredientCookSection({
  language,
  translations: t,
  allDishes,
  category,
  onCategoryChange,
  vegOnly,
  onVegToggle,
  mealType,
  onMealChange,
  onSelectDish,
  onRecordDishGenerated,
}) {
  // Set of selected ingredient IDs (defaults with common staples: onion & tomato)
  const [selectedIngredients, setSelectedIngredients] = useState([
    'onions',
    'tomatoes',
  ]);
  const [activeCategoryTab, setActiveCategoryTab] = useState('meat_eggs');
  const [searchQuery, setSearchQuery] = useState('');
  const [spotlightDish, setSpotlightDish] = useState(null);

  const fontClass = language === 'ur' ? 'font-urdu' : 'font-sans';
  const textDirection = language === 'ur' ? 'rtl' : 'ltr';

  // Toggle single ingredient
  const handleToggleIngredient = (id) => {
    setSelectedIngredients((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((item) => item !== id) : [...prev, id];
      return next;
    });
  };

  // Select common staple ingredients
  const handleSelectStaples = () => {
    const stapleIds = PREDEFINED_INGREDIENTS.filter((item) => item.isStaple).map(
      (item) => item.id
    );
    setSelectedIngredients((prev) => {
      const merged = Array.from(new Set([...prev, ...stapleIds]));
      return merged;
    });
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedIngredients([]);
    setSpotlightDish(null);
  };

  // Filtered ingredients for display based on category tab & search query
  const displayedIngredients = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PREDEFINED_INGREDIENTS.filter((item) => {
      // If user typed a search query, search across all categories
      if (q) {
        const enMatch = item.name.en.toLowerCase().includes(q);
        const urMatch = item.name.ur.includes(q);
        const hiMatch = item.name.hi.includes(q);
        return enMatch || urMatch || hiMatch;
      }
      // Otherwise, filter by active category tab
      return item.category === activeCategoryTab;
    });
  }, [activeCategoryTab, searchQuery]);

  // Filter dishes by active category (daily vs dessert), vegOnly, and mealType
  const filteredDishesForMatching = useMemo(() => {
    return allDishes.filter((dish) => {
      if (dish.category !== category) return false;
      if (category === 'daily') {
        if (vegOnly && !dish.isVeg) return false;
        if (mealType !== 'all') {
          if (!dish.meals || !dish.meals.includes(mealType)) return false;
        }
      }
      return true;
    });
  }, [allDishes, category, vegOnly, mealType]);

  // Evaluate matching dishes against selected ingredients
  const { readyDishes, almostDishes } = useMemo(() => {
    return evaluateDishesWithIngredients(
      selectedIngredients,
      filteredDishesForMatching
    );
  }, [selectedIngredients, filteredDishesForMatching]);

  // Pick a recommended dish from the available ready matches (or almost matches)
  const handlePickRandomDish = () => {
    const pool = readyDishes.length > 0 ? readyDishes : almostDishes;
    if (pool.length === 0) return;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];
    setSpotlightDish(chosen);
    if (onRecordDishGenerated) {
      onRecordDishGenerated();
    }
  };

  // Get localized ingredient name by ID
  const getIngredientName = (id) => {
    const found = PREDEFINED_INGREDIENTS.find((ing) => ing.id === id);
    if (!found) return id;
    return found.name[language] || found.name.en;
  };

  return (
    <div className={`w-full max-w-full min-w-0 space-y-4 sm:space-y-5 ${fontClass} animate-fadeIn`}>
      {/* Main Ingredient Selection Card */}
      <div className="bg-purple-950/40 backdrop-blur-md rounded-2xl p-3 sm:p-5 border border-purple-300/25 shadow-2xl space-y-4 max-w-full min-w-0 overflow-hidden">
        {/* Section Heading */}
        <div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <UtensilsCrossed size={20} className="text-amber-300 shrink-0" />
              <span>{t.ingredientsTitle}</span>
            </h2>
            {mealType !== 'all' && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30">
                {mealType === 'breakfast'
                  ? t.mealBreakfast
                  : mealType === 'lunch'
                  ? t.mealLunch
                  : t.mealDinner}
              </span>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search
            size={16}
            className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-purple-300 pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchIngredientsPlaceholder}
            className="w-full bg-purple-900/60 border border-purple-400/30 rounded-xl py-2.5 pl-9 pr-8 rtl:pl-8 rtl:pr-9 text-xs sm:text-sm text-white placeholder-purple-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 rtl:right-auto rtl:left-2.5 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white p-0.5 rounded cursor-pointer"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="grid grid-cols-3 gap-1.5 w-full">
          {INGREDIENT_CATEGORIES.map((cat) => {
            const isTabActive = activeCategoryTab === cat.id;
            const count = PREDEFINED_INGREDIENTS.filter(
              (item) =>
                item.category === cat.id &&
                selectedIngredients.includes(item.id)
            ).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1 border w-full text-center ${
                  language === 'ur' ? 'pt-1.5 pb-2.5' : ''
                } ${
                  isTabActive
                    ? 'bg-white text-purple-950 border-white shadow-md'
                    : 'bg-purple-900/40 text-purple-200 hover:text-white border-purple-400/20 hover:bg-purple-800/40'
                }`}
              >
                <span className="truncate">{cat.name[language] || cat.name.en}</span>
                {count > 0 && (
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                      isTabActive
                        ? 'bg-purple-800 text-white'
                        : 'bg-amber-400/30 text-amber-200'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Ingredient Vertical List with Fixed Height */}
        <div className="h-64 sm:h-72 overflow-y-auto pr-1.5 space-y-2 scrollbar-thin">
          {displayedIngredients.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4 text-purple-200/70">
              <Search size={22} className="mb-2 opacity-50 text-purple-300" />
              <p className="text-xs sm:text-sm font-medium">
                {language === 'ur'
                  ? 'کوئی جز نہیں ملا'
                  : language === 'hi'
                  ? 'कोई सामग्री नहीं मिली'
                  : 'No ingredients found'}
              </p>
            </div>
          ) : (
            displayedIngredients.map((item) => {
              const isSelected = selectedIngredients.includes(item.id);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleToggleIngredient(item.id)}
                  className={`w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-between text-left rtl:text-right cursor-pointer border select-none ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-100 border-emerald-400 shadow-sm scale-[1.005]'
                      : 'bg-purple-900/30 hover:bg-purple-800/40 text-purple-100 border-purple-400/20 hover:border-purple-300/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="text-lg shrink-0">{item.emoji}</span>
                    <span className="truncate leading-snug font-semibold">
                      {item.name[language] || item.name.en}
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ml-2 rtl:ml-0 rtl:mr-2 transition-colors ${
                      isSelected
                        ? 'bg-emerald-500 border-emerald-300 text-white'
                        : 'border-purple-300/30 bg-purple-900/40'
                    }`}
                  >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Pantry Staples Reminder Pill */}
        <div className="flex items-start gap-2 bg-purple-900/50 border border-purple-400/20 p-2.5 rounded-xl text-[11px] sm:text-xs text-purple-200/90">
          <Lightbulb size={15} className="text-amber-300 shrink-0 mt-0.5" />
          <span className="leading-snug">{t.pantrySpicesNote}</span>
        </div>

        {/* Big Action Button: "Aaj Kiya Pakayen? (From My Ingredients)" */}
        <button
          type="button"
          onClick={handlePickRandomDish}
          disabled={readyDishes.length === 0 && almostDishes.length === 0}
          className={`w-full font-bold py-3.5 px-5 rounded-xl text-base sm:text-lg shadow-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
            language === 'ur' ? 'pt-3 pb-4.5' : ''
          } ${
            readyDishes.length > 0 || almostDishes.length > 0
              ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-purple-950 transform hover:scale-[1.01] active:scale-[0.99] focus:ring-4 focus:ring-yellow-300'
              : 'bg-white/10 text-purple-300/60 border border-white/10 cursor-not-allowed opacity-60'
          }`}
        >
          <Sparkles size={20} className="text-purple-900" />
          <span>{t.suggestFromIngredientsButton}</span>
        </button>
      </div>

      {/* Featured Spotlight Dish Card (When random recommendation triggered) */}
      {spotlightDish && (
        <div className="bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-100 border-2 border-amber-400 p-5 rounded-2xl shadow-2xl text-purple-950 animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-purple-950 flex items-center gap-1 shadow-sm">
              <Sparkles size={12} />
              <span>
                {language === 'ur'
                  ? 'آج کا خاص انتخاب'
                  : language === 'hi'
                  ? 'आज का विशेष सुझाव'
                  : "Today's Pick"}
              </span>
            </span>
            <button
              type="button"
              onClick={() => setSpotlightDish(null)}
              className="text-gray-500 hover:text-gray-800 p-1 rounded-lg"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {spotlightDish.image && (
              <div className="w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0 shadow-md border border-amber-200">
                <img
                  src={spotlightDish.image}
                  alt={spotlightDish.name[language] || spotlightDish.name.en}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex-1 text-center sm:text-left rtl:sm:text-right w-full">
              <h3 className="text-xl sm:text-2xl font-extrabold text-purple-950">
                {spotlightDish.name[language] || spotlightDish.name.en}
              </h3>
              <p className="text-xs sm:text-sm text-purple-800 font-medium mt-1">
                <span className="font-bold">{t.keyIngredientsPrefix}</span>{' '}
                {spotlightDish.ingredients
                  .slice(0, 3)
                  .map((ing) => ing.replace(/\s*\([^)]*\)/g, '').trim())
                  .join(', ')}
              </p>
              {spotlightDish.missingRequired &&
                spotlightDish.missingRequired.length > 0 && (
                  <p className="text-xs font-semibold text-rose-700 mt-1">
                    {t.missingPrefix}{' '}
                    {spotlightDish.missingRequired
                      .map((id) => getIngredientName(id))
                      .join(', ')}
                  </p>
                )}
              <button
                type="button"
                onClick={() => onSelectDish(spotlightDish)}
                className="mt-3 w-full sm:w-auto bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
              >
                {t.checkRecipeButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      <div className="space-y-4">
        {/* State 1: No ingredients selected yet */}
        {selectedIngredients.length === 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 text-purple-100">
            <ChefHat size={40} className="mx-auto mb-2 text-purple-200 opacity-80" />
            <h3 className="font-bold text-base sm:text-lg mb-1">
              {t.noIngredientsSelectedHint}
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/80 mb-3">
              {language === 'ur'
                ? 'آلو، چکن، دال یا چاول منتخب کر کے دیکھیں!'
                : language === 'hi'
                ? 'आलू, चिकन, दाल या चावल चुनकर देखें!'
                : 'Try selecting Chicken, Potatoes, Lentils, or Rice!'}
            </p>
            <button
              type="button"
              onClick={handleSelectStaples}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-purple-900 shadow-md hover:bg-purple-100 transition-all cursor-pointer"
            >
              <Sparkles size={14} />
              <span>{t.selectStaples}</span>
            </button>
          </div>
        )}

        {/* State 2: Ingredients selected, but zero dishes matched */}
        {selectedIngredients.length > 0 &&
          readyDishes.length === 0 &&
          almostDishes.length === 0 && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 text-purple-100">
              <AlertCircle size={36} className="mx-auto mb-2 text-amber-300 opacity-90" />
              <p className="text-sm font-medium leading-relaxed">
                {t.noDishesMatchedForIngredients}
              </p>
              <button
                type="button"
                onClick={handleSelectStaples}
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-purple-900 shadow-md hover:bg-purple-100 transition-all cursor-pointer"
              >
                <Sparkles size={14} />
                <span>{t.selectStaples}</span>
              </button>
            </div>
          )}

        {/* List 1: READY TO COOK DISHES (100% matched required ingredients) */}
        {readyDishes.length > 0 && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-white text-sm sm:text-base font-bold">
                  {t.readyToCookHeading}
                </h3>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/40">
                {readyDishes.length} {t.matchCountBadge || 'Dishes'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {readyDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white/95 rounded-2xl p-3.5 shadow-lg border border-purple-100 flex flex-col justify-between hover:shadow-xl transition-all hover:scale-[1.01]"
                >
                  <div>
                    {dish.image && (
                      <div className="w-full h-32 rounded-xl overflow-hidden mb-2.5 bg-purple-100 shadow-inner">
                        <img
                          src={dish.image}
                          alt={dish.name[language] || dish.name.en}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        ✓ {t.fullMatchBadge || 'Ready to Cook'}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          dish.isVeg
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-rose-50 text-rose-700'
                        }`}
                      >
                        {dish.isVeg ? '🌱 ' + t.vegBadge : '🍖 ' + t.nonVegBadge}
                      </span>
                    </div>

                    <h4 className="font-bold text-purple-950 text-base sm:text-lg leading-tight mb-1">
                      {dish.name[language] || dish.name.en}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      <span className="font-semibold text-purple-900">
                        {t.keyIngredientsPrefix}
                      </span>{' '}
                      {dish.ingredients
                        .slice(0, 3)
                        .map((ing) => ing.replace(/\s*\([^)]*\)/g, '').trim())
                        .join(', ')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectDish(dish)}
                    className="mt-3 w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-semibold py-2 px-3 rounded-xl text-xs sm:text-sm shadow transition-all cursor-pointer"
                  >
                    {t.checkRecipeButton}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* List 2: ALMOST READY DISHES (Missing just 1 required ingredient) */}
        {almostDishes.length > 0 && (
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h3 className="text-purple-100 text-sm sm:text-base font-bold">
                  {t.almostReadyHeading}
                </h3>
              </div>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/40">
                {almostDishes.length} {t.matchCountBadge || 'Dishes'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {almostDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white/90 rounded-2xl p-3.5 shadow-md border border-amber-200/80 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div>
                    {dish.image && (
                      <div className="w-full h-28 rounded-xl overflow-hidden mb-2.5 bg-amber-50">
                        <img
                          src={dish.image}
                          alt={dish.name[language] || dish.name.en}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        🛒 {t.almostMatchBadge || 'Need 1 item'}
                      </span>
                    </div>

                    <h4 className="font-bold text-purple-950 text-base leading-tight mb-1">
                      {dish.name[language] || dish.name.en}
                    </h4>

                    {/* Missing Item Badge */}
                    <div className="my-1.5 p-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 font-semibold flex items-center gap-1.5">
                      <AlertCircle size={13} className="text-amber-600 shrink-0" />
                      <span>
                        {t.missingPrefix}{' '}
                        <strong className="text-rose-700">
                          {dish.missingRequired
                            .map((id) => getIngredientName(id))
                            .join(', ')}
                        </strong>
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectDish(dish)}
                    className="mt-2.5 w-full bg-purple-100 hover:bg-purple-200 text-purple-900 font-semibold py-2 px-3 rounded-xl text-xs sm:text-sm border border-purple-300 transition-all cursor-pointer"
                  >
                    {t.checkRecipeButton}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
