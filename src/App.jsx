import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';

const translations = {
  en: {
    title: 'Aaj Kya Pakayen?',
    subtitle: 'Your daily dilemma, solved with a click!',
    mainButton: 'Aaj Kiya Pakayen?',
    dishTypePrefix: 'Type:',
    keyIngredientsPrefix: 'Key Ingredients:',
    checkRecipeButton: 'Check Recipe',
    modalIngredientsTitle: 'Ingredients:',
    modalRecipeTitle: 'Recipe:',
    modalCloseButton: 'Close',
    footerText:
      'Lovingly crafted to solve the eternal question. Inspired by South Asian kitchens.',
    langEnglish: 'English',
    langUrdu: 'اردو',
    langHindi: 'हिन्दी',
    selectLang: 'Select Language',
    closeRecipeModalAria: 'Close recipe modal',
    suggestDishAria: 'Suggest a dish',
    checkRecipeAria: 'Check recipe for',
  },
  ur: {
    title: 'آج کیا پکائیں؟',
    subtitle: 'آپ کا روزمرہ کا مسئلہ، ایک کلک میں حل!',
    mainButton: 'آج کیا پکائیں؟',
    dishTypePrefix: 'قسم:',
    keyIngredientsPrefix: 'اہم اجزاء:',
    checkRecipeButton: 'ترکیب دیکھیں',
    modalIngredientsTitle: 'اجزاء:',
    modalRecipeTitle: 'ترکیب:',
    modalCloseButton: 'بند کریں',
    footerText:
      'محبت سے بنایا گیا تاکہ روزمرہ کا سوال حل ہو سکے۔ جنوبی ایشیائی کھانوں سے متاثر۔',
    langEnglish: 'English',
    langUrdu: 'اردو',
    langHindi: 'हिन्दी',
    selectLang: 'زبان منتخب کریں',
    closeRecipeModalAria: 'ترکیب کا موڈل بند کریں',
    suggestDishAria: 'ایک ڈش تجویز کریں',
    checkRecipeAria: 'کے لیے ترکیب دیکھیں',
  },
  hi: {
    title: 'आज क्या पकाएँ?',
    subtitle: 'आपकी दैनिक दुविधा, एक क्लिक में हल!',
    mainButton: 'आज क्या पकाएँ?',
    dishTypePrefix: ' प्रकार:',
    keyIngredientsPrefix: 'मुख्य सामग्री:',
    checkRecipeButton: 'रेसिपी देखें',
    modalIngredientsTitle: 'सामग्री:',
    modalRecipeTitle: 'रेसिपी:',
    modalCloseButton: 'बंद करें',
    footerText:
      'प्यार से बनाया गया ताकि रोज़मर्रा का सवाल हल हो सके। दक्षिण एशियाई रसोई से प्रेरित।',
    langEnglish: 'English',
    langUrdu: 'اردو',
    langHindi: 'हिन्दी',
    selectLang: 'भाषा चुनें',
    closeRecipeModalAria: 'रेसिपी मॉडल बंद करें',
    suggestDishAria: 'एक व्यंजन सुझाएं',
    checkRecipeAria: 'के लिए रेसिपी देखें',
  },
};

const initialDishesData = [
  {
    id: 'biryani',
    name: { en: 'Biryani', ur: 'بریانی', hi: 'बिरयानी' },
    type: { en: 'Rice / Meat', ur: 'چاول / گوشت', hi: 'चावल / गोश्त' },
    ingredients: [
      'Basmati Rice',
      'Chicken or Mutton (1 kg)',
      'Yogurt (1 cup)',
      'Onions (3, sliced)',
      'Tomatoes (2, chopped)',
      'Ginger-Garlic Paste (2 tbsp)',
      'Biryani Masala (3 tbsp)',
      'Oil/Ghee (1/2 cup)',
      'Fresh Mint (1/2 cup)',
      'Fresh Coriander (1/2 cup)',
      'Lemon Juice (2 tbsp)',
      'Green Chilies (4-5, slit)',
      'Saffron strands (a pinch, soaked in milk)',
    ],
    recipe: `1. Marinate chicken/mutton with yogurt, ginger-garlic paste, biryani masala, turmeric, red chili powder, and salt for at least 1 hour.
2. Parboil Basmati rice with whole spices (cardamom, cloves, cinnamon) until 70% cooked. Drain.
3. In a heavy-bottomed pot, heat oil/ghee. Fry sliced onions until golden brown (Beresta). Remove half for garnishing.
4. To the remaining onions in the pot, add the marinated meat and cook until it's partially tender and oil separates. Add chopped tomatoes and cook until soft.
5. Layer the cooked meat masala with the parboiled rice. Sprinkle fried onions, mint, coriander, green chilies, lemon juice, and saffron milk.
6. Cover tightly and cook on 'dum' (low heat) for 20-25 minutes.
7. Gently fluff the biryani before serving. Serve hot with raita or salad.`,
  },
  {
    id: 'daal_chawal',
    name: { en: 'Daal Chawal', ur: 'دال چاول', hi: 'दाल चावल' },
    type: { en: 'Lentils / Rice', ur: 'دال / چاول', hi: 'दाल / चावल' },
    ingredients: [
      'Masoor Daal or Moong Daal (1 cup)',
      'Basmati Rice (1.5 cups)',
      'Onion (1, finely chopped)',
      'Tomatoes (1, chopped)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Cumin Seeds (1 tsp)',
      'Mustard Seeds (1/2 tsp)',
      'Asafoetida (Hing) (a pinch)',
      'Ghee/Oil (2 tbsp)',
      'Fresh Coriander (for garnish)',
      'Green Chilies (2, slit)',
      'Salt to taste',
    ],
    recipe: `Daal:
1. Wash and soak daal for 30 minutes. Pressure cook with turmeric, salt, and water until soft (3-4 whistles).
2. For Tadka (tempering): Heat ghee/oil in a small pan. Add cumin seeds, mustard seeds. Once they splutter, add asafoetida, chopped onions, and green chilies. Sauté until onions are golden.
3. Add ginger-garlic paste and sauté for a minute. Add chopped tomatoes, red chili powder. Cook until tomatoes are mushy and oil separates.
4. Pour this tadka over the cooked daal. Mix well. Garnish with fresh coriander.

Chawal:
1. Wash rice thoroughly.
2. Cook rice with double the amount of water and a pinch of salt until fluffy (either in a pot or rice cooker).
3. Serve hot daal with steamed chawal.`,
  },
  {
    id: 'bhindi_masala',
    name: { en: 'Bhindi Masala', ur: 'بھنڈی مصالحہ', hi: 'भिंडी मसाला' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Okra (Bhindi) (500g)',
      'Onions (2, sliced)',
      'Tomatoes (2, chopped)',
      'Green Chilies (2-3, slit)',
      'Ginger-Garlic Paste (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Cumin Powder (1 tsp)',
      'Coriander Powder (1.5 tsp)',
      'Amchoor (Dry Mango Powder) (1/2 tsp)',
      'Garam Masala (1/2 tsp)',
      'Oil (3 tbsp)',
      'Cumin Seeds (1 tsp)',
      'Salt to taste',
      'Fresh Coriander (for garnish)',
    ],
    recipe: `1. Wash okra and pat dry completely. Trim the ends and cut into 1-inch pieces.
2. Heat oil in a pan or kadai. Add cumin seeds. Once they splutter, add sliced onions and sauté until light golden.
3. Add ginger-garlic paste and green chilies. Sauté for a minute.
4. Add chopped tomatoes and cook until they soften.
5. Add turmeric powder, cumin powder, coriander powder, and salt. Mix well and cook for 2-3 minutes.
6. Add the cut okra. Mix gently to coat with the masala.
7. Cook covered on low heat for 10-12 minutes, stirring occasionally, until okra is tender but not mushy. Avoid adding water.
8. Uncover, add amchoor powder and garam masala. Mix well and cook for another 2 minutes.
9. Garnish with fresh coriander. Serve hot with roti or paratha.`,
  },
  {
    id: 'aloo_palak',
    name: { en: 'Aloo Palak', ur: 'آلو پالک', hi: 'आलू पालक' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Spinach (Palak) (1 large bunch, ~500g)',
      'Potatoes (Aloo) (2 medium, cubed)',
      'Onion (1, finely chopped)',
      'Tomato (1, finely chopped)',
      'Ginger (1 inch, grated)',
      'Garlic (3-4 cloves, minced)',
      'Green Chilies (1-2, chopped)',
      'Cumin Seeds (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1/2 tsp, optional)',
      'Garam Masala (1/2 tsp)',
      'Oil (2 tbsp)',
      'Salt to taste',
    ],
    recipe: `1. Clean spinach thoroughly. Blanch in hot water for 2 minutes, then immediately transfer to cold water. Drain and chop or puree.
2. Heat oil in a pan. Add cumin seeds. Once they splutter, add chopped onions and sauté until golden brown.
3. Add grated ginger, minced garlic, and green chilies. Sauté for a minute.
4. Add chopped tomatoes and cook until soft and oil starts to separate.
5. Add turmeric powder, red chili powder (if using), and salt. Mix well.
6. Add cubed potatoes, mix with the masala, and cook covered for 5-7 minutes until potatoes are partially tender, stirring occasionally.
7. Add the chopped/pureed spinach. Mix well.
8. Cover and cook on low heat for another 8-10 minutes, or until potatoes are fully cooked and spinach is well combined.
9. Stir in garam masala. Cook for another minute.
10. Serve hot with roti, naan, or rice.`,
  },
  {
    id: 'palak_gosht',
    name: { en: 'Palak Gosht', ur: 'پالک گوشت', hi: 'पालक गोश्त' },
    type: { en: 'Vegetable / Meat', ur: 'سبزی / گوشت', hi: 'सब्जी / गोश्त' },
    ingredients: [
      'Mutton or Chicken (500g, bone-in)',
      'Spinach (Palak) (1 large bunch, ~500g)',
      'Onions (2, sliced)',
      'Tomatoes (2, chopped)',
      'Ginger-Garlic Paste (2 tbsp)',
      'Yogurt (1/2 cup, whisked)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Coriander Powder (1 tbsp)',
      'Cumin Powder (1 tsp)',
      'Garam Masala (1 tsp)',
      'Whole Spices (2 green cardamoms, 2 cloves, 1-inch cinnamon stick)',
      'Oil/Ghee (4 tbsp)',
      'Salt to taste',
      'Fresh Cream (2 tbsp, optional for finishing)',
    ],
    recipe: `1. Clean and blanch spinach as for Aloo Palak. Puree or chop finely.
2. Heat oil/ghee in a pressure cooker or heavy-bottomed pot. Add whole spices.
3. Add sliced onions and fry until golden brown.
4. Add ginger-garlic paste and sauté for a minute.
5. Add the mutton/chicken pieces and sear on high heat until browned on all sides.
6. Lower the heat. Add turmeric powder, red chili powder, coriander powder, cumin powder, and salt. Mix well and cook for 2-3 minutes.
7. Add chopped tomatoes and cook until they soften and oil separates.
8. Add whisked yogurt and cook, stirring continuously, until the oil separates again.
9. Add about 1/2 cup of water, mix, and pressure cook until the meat is tender (for mutton, 4-5 whistles; for chicken, 2-3 whistles). If not using a pressure cooker, cover and simmer until meat is cooked.
10. Once pressure releases, open the cooker. Add the pureed/chopped spinach to the cooked meat.
11. Mix well and simmer for 10-15 minutes, allowing the flavors to meld. Adjust consistency with water if needed.
12. Stir in garam masala and fresh cream (if using). Cook for another 2 minutes.
13. Serve hot with naan, roti, or rice.`,
  },
  {
    id: 'chicken_karahi',
    name: { en: 'Chicken Karahi', ur: 'چکن کڑاہی', hi: 'चिकन कड़ाही' },
    type: { en: 'Meat', ur: 'گوشت', hi: 'गोश्त' },
    ingredients: [
      'Chicken (1 kg, cut into small pieces)',
      'Tomatoes (4-5 medium, quartered or roughly chopped)',
      'Green Chilies (6-8, slit or whole)',
      'Ginger (2-inch piece, julienned)',
      'Garlic (6-8 cloves, coarsely crushed)',
      'Yogurt (1/2 cup, whisked, optional)',
      'Black Peppercorns (1 tsp, freshly crushed)',
      'Cumin Seeds (1 tsp, roasted and crushed)',
      'Coriander Seeds (1 tbsp, roasted and crushed)',
      'Red Chili Flakes (1 tsp, or to taste)',
      'Turmeric Powder (1/2 tsp)',
      'Salt to taste',
      'Oil or Ghee (1/2 cup)',
      'Fresh Coriander (for garnish)',
      'Lemon wedges (for serving)',
    ],
    recipe: `1. Heat oil/ghee in a karahi or wok on high heat.
2. Add chicken pieces and fry until they change color and are lightly golden (about 5-7 minutes).
3. Add crushed garlic and half of the julienned ginger. Sauté for 1-2 minutes until fragrant.
4. Add quartered/chopped tomatoes, salt, and turmeric powder. Mix well. Cover and cook on medium heat for 10-15 minutes, or until tomatoes are very soft and broken down. Stir occasionally.
5. Uncover and increase heat. Mash the tomatoes with a spoon. Cook until the water from tomatoes evaporates and oil starts to separate.
6. Add crushed coriander seeds, cumin seeds, black peppercorns, and red chili flakes. Mix well and cook for 2-3 minutes.
7. If using yogurt, whisk it well and add it now, stirring continuously until it's well incorporated.
8. Add slit green chilies. Stir and cook for another 5-7 minutes, or until chicken is fully cooked and tender, and the gravy has thickened to your desired consistency.
9. Garnish with remaining julienned ginger and fresh coriander.
10. Serve hot with naan, roti, or tandoori roti, along with lemon wedges.`,
  },
  {
    id: 'aloo_gobi',
    name: { en: 'Aloo Gobi', ur: 'آلو گوبی', hi: 'आलू गोभी' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Cauliflower (Gobi) (1 medium head, cut into florets)',
      'Potatoes (Aloo) (2 medium, peeled and cubed)',
      'Onion (1 medium, finely chopped)',
      'Tomatoes (1 large, finely chopped or pureed)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Green Chilies (2, slit)',
      'Cumin Seeds (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Coriander Powder (1 tsp)',
      'Red Chili Powder (1/2 tsp, optional)',
      'Garam Masala (1/2 tsp)',
      'Asafoetida (Hing) (a pinch, optional)',
      'Oil (3 tbsp)',
      'Salt to taste',
      'Fresh Coriander (for garnish)',
    ],
    recipe: `1. Heat oil in a kadai or heavy-bottomed pan. Add cumin seeds and asafoetida (if using). Let them splutter.
2. Add chopped onions and sauté until translucent or light golden.
3. Add ginger-garlic paste and green chilies. Sauté for a minute until the raw smell disappears.
4. Add chopped tomatoes (or puree) and cook until they soften and oil starts to separate from the masala.
5. Add turmeric powder, coriander powder, and red chili powder (if using). Mix well and cook for a minute.
6. Add potato cubes and cauliflower florets. Add salt. Gently toss everything to coat the vegetables with the masala.
7. Cover the pan and cook on low to medium heat for 15-20 minutes, or until the vegetables are tender. Stir gently a couple of times in between to prevent sticking. Avoid adding water if possible, as the vegetables will cook in their own steam. If it looks too dry, sprinkle a tablespoon or two of water.
8. Once vegetables are cooked, sprinkle garam masala and mix gently.
9. Garnish with fresh coriander leaves.
10. Serve hot with roti, paratha, or as a side dish with daal and rice.`,
  },
];

export default function App() {
  const [language, setLanguage] = useState('en');
  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dishes] = useState(initialDishesData);

  const t = translations[language];

  const handleSuggestDish = () => {
    if (dishes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * dishes.length);
    setSelectedDish(dishes[randomIndex]);
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const iconComponents = [
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
  ];
  const [displayIcons, setDisplayIcons] = useState([]);

  useEffect(() => {
    const shuffledIcons = [...iconComponents].sort(() => 0.5 - Math.random());
    setDisplayIcons(shuffledIcons.slice(0, 6));
  }, [selectedDish, language]);

  const LanguageButton = ({ langCode, langName }) => (
    <button
      onClick={() => setLanguage(langCode)}
      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base transition-colors duration-150
        ${
          language === langCode
            ? 'bg-purple-700 text-white shadow-md'
            : 'bg-purple-200 text-purple-700 hover:bg-purple-300'
        }`}
    >
      {langName}
    </button>
  );

  const fontClass = language === 'ur' ? 'font-urdu' : 'font-sans';
  const textDirection = language === 'ur' ? 'rtl' : 'ltr';
  // Adjusted heading size for Urdu
  const titleSizeClass =
    language === 'ur' ? 'text-3xl sm:text-4xl mb-4' : 'text-4xl sm:text-5xl';
  const modalTitleSizeClass =
    language === 'ur' ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl';

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col items-center justify-center p-4 ${fontClass} selection:bg-purple-300 selection:text-purple-900`}
    >
      <header className="mb-4 sm:mb-6 text-center w-full max-w-md">
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-4 bg-purple-500/30 p-2 rounded-lg">
          <Languages size={20} className="text-purple-100" />
          <LanguageButton langCode="en" langName={t.langEnglish} />
          <LanguageButton langCode="ur" langName={t.langUrdu} />
          <LanguageButton langCode="hi" langName={t.langHindi} />
        </div>
        {/* conditional title size for Urdu */}
        <h1 className={`${titleSizeClass} font-bold text-white tracking-tight`}>
          {t.title}
        </h1>
        <p className="text-purple-200 text-md sm:text-lg mt-2">{t.subtitle}</p>
      </header>

      <main className="w-full max-w-md space-y-6">
        <div className="bg-purple-50 p-6 sm:p-8 rounded-xl shadow-2xl">
          {displayIcons.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              {displayIcons.map((IconComponent, index) => (
                <IconComponent
                  key={index}
                  size={40}
                  className="text-purple-600 mx-auto"
                  strokeWidth={1.5}
                />
              ))}
            </div>
          )}
          <button
            onClick={handleSuggestDish}
            className="w-full text-white font-semibold py-3 sm:py-4 px-6 rounded-lg text-lg sm:text-xl shadow-lg transition-all duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75 bg-purple-500 hover:bg-purple-700"
            aria-label={t.suggestDishAria}
          >
            {t.mainButton}
          </button>
        </div>

        {selectedDish && (
          <div className="bg-amber-50 border-2 border-amber-400 p-6 rounded-lg shadow-xl text-gray-800 animate-fadeIn">
            {/* Apply conditional title size for Urdu to dish name in card */}
            <h2
              className={`${modalTitleSizeClass} font-bold text-purple-700 mb-2`}
            >
              {selectedDish.name[language]}
            </h2>
            <p className="text-sm sm:text-md text-purple-600 font-medium mb-1">
              <span className="font-semibold">{t.dishTypePrefix}</span>{' '}
              {selectedDish.type[language]}
            </p>
            <p className="text-sm sm:text-md text-purple-600 font-medium mb-4">
              <span className="font-semibold">{t.keyIngredientsPrefix}</span>{' '}
              {selectedDish.ingredients.slice(0, 3).join(', ')}
              {selectedDish.ingredients.length > 3 ? '...' : ''}
            </p>
            <button
              onClick={openModal}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-semibold py-2.5 sm:py-3 px-6 rounded-lg shadow-md transition-all duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75"
              aria-label={`${t.checkRecipeAria} ${selectedDish.name[language]}`}
            >
              {t.checkRecipeButton}
            </button>
          </div>
        )}
      </main>

      {isModalOpen && selectedDish && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div
            className={`bg-white p-5 sm:p-8 rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col ${fontClass}`}
          >
            <div
              dir={textDirection} 
              className="flex justify-between items-center mb-4">
              {/* Apply conditional title size for Urdu to modal title */}
              <h3
                className={`${modalTitleSizeClass} font-bold text-purple-700`}
              >
                {selectedDish.name[language]}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={t.closeRecipeModalAria}
              >
                <X size={28} />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
              <div className="mb-5 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">
                  {t.modalIngredientsTitle}
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base text-left">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">
                  {t.modalRecipeTitle}
                </h4>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base text-left">
                  {selectedDish.recipe}
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 sm:mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75"
            >
              {t.modalCloseButton}
            </button>
          </div>
        </div>
      )}
      <footer className="text-center mt-8 sm:mt-12 pb-4">
        <p className="text-purple-200 text-xs sm:text-sm">{t.footerText}</p>
      </footer>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Noto+Sans+Devanagari:wght@400;700&display=swap');
        
        .font-urdu {
          font-family: 'Noto Nastaliq Urdu', 'Arial', sans-serif; /* Added Arial as fallback */
        }
        .font-sans { /* Default font, also good for Hindi with Noto Sans Devanagari */
           font-family: 'Noto Sans Devanagari', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #C084FC #EDE9FE; /* thumb track for purple */
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #EDE9FE; /* purple-100 */
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #C084FC; /* purple-400 */
          border-radius: 10px;
          border: 2px solid #EDE9FE; /* purple-100 */
        }
      `}</style>
    </div>
  );
}
