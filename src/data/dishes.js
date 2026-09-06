export const initialDishesData = [
  // ==========================================
  // EXISTING DAILY MEALS
  // ==========================================
  {
    id: 'biryani',
    category: 'daily',
    isVeg: false,
    name: { en: 'Biryani', ur: 'بریانی', hi: 'बिरयानी' },
    type: { en: 'Rice / Meat', ur: 'چاول / گوشت', hi: 'चावल / गोश्त' },
    ingredients: [
      'Basmati Rice (3 cups)',
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
    category: 'daily',
    isVeg: true,
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
    category: 'daily',
    isVeg: true,
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
    category: 'daily',
    isVeg: true,
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
    category: 'daily',
    isVeg: false,
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
    category: 'daily',
    isVeg: false,
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
    category: 'daily',
    isVeg: true,
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
  {
    id: 'masar_chawal',
    category: 'daily',
    isVeg: true,
    name: { en: 'Masar Chawal', ur: 'مسر چاول', hi: 'मसर चावल' },
    type: { en: 'Lentil / Rice', ur: 'چاول', hi: 'चावल' },
    ingredients: [
      'Black Lentil (Masar) (250gm)',
      'Salt to taste (1 tsp)',
      'Red Chili Powder (1 tsp)',
      'Turmeric Powder (Haldi) (1/2 tsp)',
      'Oil for tarka (1/4 cup)',
      'Zeera (1 tsp)',
      'Red Chilli (choti) (6)',
      'Crushed Garlic (1 tbsp)',
      'Onion Slice (2 tbsp, optional)',
      'Green Chili (2)',
      'Coriander and Mint Leaves (1 tbsp, for garnishing)',
      'Boiled Rice (2 cups)',
    ],
    recipe: `1. Soak and wash the masoor daal for 30 minutes then strain it.
2. Now take a pot add 2 cups of water and daal with spices and cook for 30 minutes on medium low heat.
3. Now boil the rice.
4. Next when daal is boiled and water becomes less then make a tarka with garlic, zeera, and red chilies in oil.
5. Pour the tarka over the daal and cover it for 3 minutes for aroma.
6. Now delicious daal chawal is ready to serve with achar and salad.`,
  },
  {
    id: 'chicken_pulao',
    category: 'daily',
    isVeg: false,
    name: { en: 'Chicken Pulao', ur: 'چکن پلاؤ', hi: 'चिकन पुलाव' },
    type: { en: 'Rice / Meat', ur: 'چاول / گوشت', hi: 'चावल / गोश्त' },
    ingredients: [
      'Basmati Rice (2 cups)',
      'Chicken (500g, cut into pieces)',
      'Onion (1 large, sliced)',
      'Tomato (1 medium, chopped)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Green Chilies (2-3, slit)',
      'Yogurt (1/2 cup)',
      'Whole Spices (2-3 green cardamoms, 2-3 cloves, 1-inch cinnamon stick)',
      'Cumin Seeds (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Garam Masala Powder (1 tsp)',
      'Oil or Ghee (4 tbsp)',
      'Salt to taste',
      'Fresh Coriander and Mint Leaves (for garnish)',
    ],
    recipe: `1. Wash and soak basmati rice in water for 30 minutes, then drain.
2. Heat oil or ghee in a large pot. Add whole spices and cumin seeds, sauté until fragrant.
3. Add sliced onions and fry until golden brown. Remove half for garnishing.
4. Add ginger-garlic paste and slit green chilies, sauté for a minute.
5. Add chopped tomatoes, turmeric powder, red chili powder, and salt. Cook until tomatoes soften.
6. Add chicken pieces and cook until they are browned and cooked through.
7. Stir in yogurt and cook until the oil separates from the masala.
8. Add the soaked and drained rice, mix gently to coat with the masala.
9. Pour in 4 cups of water, bring to a boil, then reduce heat to low. Cover and cook until rice is tender and water is absorbed (about 20 minutes).
10. Once done, fluff the rice gently with a fork. Garnish with fried onions, fresh coriander, and mint leaves.
11. Serve hot with raita or salad.`,
  },
  {
    id: 'chicken_korma',
    category: 'daily',
    isVeg: false,
    name: { en: 'Chicken Korma', ur: 'چکن قورمہ', hi: 'चिकन कोरमा' },
    type: { en: 'Meat', ur: 'گوشت', hi: 'गोश्त' },
    ingredients: [
      'Chicken (1 kg, cut into pieces)',
      'Yogurt (1 cup)',
      'Onion (2 large, sliced)',
      'Ginger-Garlic Paste (2 tbsp)',
      'Green Chilies (4-5, slit)',
      'Garam Masala Powder (1 tsp)',
      'Red Chili Powder (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Cumin Seeds (1 tsp)',
      'Coriander Powder (1 tbsp)',
      'Cashew Nuts (10-12, soaked in water)',
      'Oil or Ghee (1/2 cup)',
      'Salt to taste',
      'Fresh Coriander and Mint Leaves (for garnish)',
    ],
    recipe: `1. Marinate chicken with yogurt, ginger-garlic paste, red chili powder, turmeric powder, coriander powder, and salt for at least 1 hour.
2. Heat oil or ghee in a heavy-bottomed pot. Add cumin seeds and sliced onions, sauté until onions are golden brown.
3. Remove half of the fried onions for garnishing.
4. Add the marinated chicken to the pot, cook on high heat until the chicken is browned.
5. Add slit green chilies and cook for another 5 minutes.
6. Blend the soaked cashew nuts with a little water to make a smooth paste, then add it to the pot.
7. Reduce the heat, cover, and cook until the chicken is tender and the oil separates from the gravy (about 20-25 minutes).
8. Stir in garam masala powder and cook for another 5 minutes.
9. Garnish with fried onions, fresh coriander, and mint leaves.
10. Serve hot with naan, roti, or rice.`,
  },
  {
    id: 'chana_daal',
    category: 'daily',
    isVeg: true,
    name: { en: 'Chana Daal', ur: 'چنا دال', hi: 'चना दाल' },
    type: { en: 'Lentils', ur: 'دال', hi: 'दाल' },
    ingredients: [
      'Chana Daal (Split Bengal Gram) (1 cup)',
      'Onion (1 medium, finely chopped)',
      'Tomato (1 medium, chopped)',
      'Ginger-Garlic Paste (1 tsp)',
      'Green Chilies (2, slit)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Cumin Seeds (1 tsp)',
      'Coriander Powder (1 tsp)',
      'Garam Masala Powder (1/2 tsp)',
      'Oil or Ghee (2 tbsp)',
      'Salt to taste',
      'Fresh Coriander (for garnish)',
    ],
    recipe: `1. Wash and soak chana daal for at least 2 hours. Drain.
2. In a pot, add soaked daal, 3 cups of water, turmeric powder, and salt. Cook until the daal is soft (about 30-40 minutes). You can use a pressure cooker for faster cooking (2-3 whistles).
3. In a separate pan, heat oil or ghee. Add cumin seeds and let them splutter.
4. Add chopped onions and sauté until golden brown.
5. Add ginger-garlic paste and slit green chilies, sauté for a minute.
6. Add chopped tomatoes, red chili powder, coriander powder, and cook until the tomatoes are soft and oil starts to separate.
7. Pour this tempering over the cooked daal. Mix well and simmer for another 5-10 minutes.
8. Stir in garam masala powder and cook for another minute.
9. Garnish with fresh coriander leaves.
10. Serve hot with roti, naan, or rice.`,
  },
  {
    id: 'Karele',
    category: 'daily',
    isVeg: true,
    name: { en: 'Karele (Bitter Gourd)', ur: 'کریلے', hi: 'करेले' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Bitter Gourd (Karela) (500g, sliced)',
      'Onion (1 large, sliced)',
      'Tomato (1 medium, chopped)',
      'Ginger-Garlic Paste (1 tsp)',
      'Green Chilies (2, slit)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Coriander Powder (1 tsp)',
      'Cumin Seeds (1 tsp)',
      'Oil (3 tbsp)',
      'Salt to taste',
      'Fresh Coriander (for garnish)',
    ],
    recipe: `1. Wash and slice the bitter gourd. Sprinkle with salt and let it sit for 15-20 minutes to reduce bitterness. Rinse and drain.
2. Heat oil in a pan. Add cumin seeds and let them splutter.
3. Add sliced onions and sauté until golden brown.
4. Add ginger-garlic paste and slit green chilies, sauté for a minute.
5. Add chopped tomatoes, turmeric powder, red chili powder, coriander powder, and salt. Cook until tomatoes soften.
6. Add the sliced bitter gourd and mix well to coat with the masala.
7. Cook covered on low heat for about 15-20 minutes, stirring occasionally, until the karela is tender.
8. Garnish with fresh coriander leaves.
9. Serve hot with roti or paratha.`,
  },
  {
    id: 'Curry',
    category: 'daily',
    isVeg: true,
    name: { en: 'Curry (Kadhi Pakora)', ur: 'کری', hi: 'करी' },
    type: { en: 'Vegetable / Gram Flour', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Yogurt or Buttermilk (2 cups)',
      'Besan / Gram Flour (1 cup)',
      'Onions (2 medium, finely chopped)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Green Chilies (3, slit)',
      'Fenugreek Seeds (Methi Dana) (1/2 tsp)',
      'Cumin & Mustard Seeds (1 tsp each)',
      'Turmeric Powder (1 tsp)',
      'Red Chili Powder (1 tsp)',
      'Oil or Ghee for frying and tadka',
      'Fresh Coriander (for garnish)',
      'Salt to taste',
    ],
    recipe: `1. Whisk yogurt with gram flour, turmeric, red chili powder, salt, and 4 cups of water into a lump-free thin mixture.
2. In a deep pot, heat oil, add cumin seeds, fenugreek seeds, and ginger-garlic paste. Pour the yogurt mixture and bring to a boil while stirring continuously. Simmer on low heat for 40 minutes until thickened.
3. For Pakoras: Mix sliced onions, chopped green chilies, coriander, spices, gram flour, and water into a thick batter. Deep fry spoonfuls until golden crisp.
4. Drop warm pakoras into the simmering kadhi.
5. Prepare tadka: Heat ghee, add whole red chilies, cumin seeds, and curry leaves. Pour over kadhi.
6. Serve hot with steamed rice (chawal) or warm roti.`,
  },
  {
    id: 'dal_makhani',
    category: 'daily',
    isVeg: true,
    name: { en: 'Dal Makhani', ur: 'دال مکھنی', hi: 'दाल मखनी' },
    type: { en: 'Lentils', ur: 'دال', hi: 'दाल' },
    ingredients: [
      'Black Lentils (Urad Dal) (1 cup)',
      'Red Kidney Beans (Rajma) (1/4 cup)',
      'Onion (1 large, finely chopped)',
      'Tomato (2 medium, pureed)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Green Chilies (2, slit)',
      'Butter (2 tbsp)',
      'Cream (1/4 cup, optional)',
      'Cumin Seeds (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Garam Masala Powder (1 tsp)',
      'Salt to taste',
      'Fresh Coriander (for garnish)',
    ],
    recipe: `1. Soak black lentils and red kidney beans overnight. Drain and rinse.
2. In a pressure cooker, add soaked lentils and beans with 4 cups of water, turmeric powder, and salt. Cook for about 20-25 minutes or until soft (3-4 whistles).
3. In a separate pan, heat butter. Add cumin seeds and let them splutter.
4. Add chopped onions and sauté until golden brown.
5. Add ginger-garlic paste and slit green chilies, sauté for a minute.
6. Add pureed tomatoes, red chili powder, and cook until the oil separates from the masala.
7. Add the cooked lentils and beans to the tomato mixture. Mix well and simmer for 10-15 minutes, adding water if needed to adjust consistency.
8. Stir in garam masala powder and cream (if using). Cook for another 5 minutes.
9. Garnish with fresh coriander leaves.
10. Serve hot with naan, roti, or rice.`,
  },
  {
    id: 'Dum Pukh',
    category: 'daily',
    isVeg: false,
    name: { en: 'Dum Pukht', ur: 'دم پکھت', hi: 'दम पुख्त' },
    type: { en: 'Meat', ur: 'گوشت', hi: 'गोश्त' },
    ingredients: [
      'Mutton or Chicken (1 kg, bone-in pieces)',
      'Yogurt (1 cup)',
      'Onion (2 large, thinly sliced)',
      'Ginger-Garlic Paste (2 tbsp)',
      'Green Chilies (4-5, slit)',
      'Whole Spices (2-3 green cardamoms, 2-3 cloves, 1-inch cinnamon stick)',
      'Cumin Seeds (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Garam Masala Powder (1 tsp)',
      'Basmati Rice (3 cups, soaked for 30 minutes)',
      'Oil or Ghee (4 tbsp)',
      'Salt to taste',
      'Fresh Coriander and Mint Leaves (for garnish)',
    ],
    recipe: `1. Marinate the mutton or chicken with yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala powder, and salt for at least 2 hours (or overnight for best results).
2. Heat oil or ghee in a large heavy-bottomed pot. Add whole spices and cumin seeds, sauté until fragrant.
3. Add sliced onions and fry until golden brown. Remove half for garnishing.
4. Add the marinated meat to the pot, cook on high heat until the meat is browned.
5. Add slit green chilies and mix well.
6. Layer the soaked and drained basmati rice over the meat. Add enough water to cover the rice (about 4-5 cups).
7. Cover the pot with a tight-fitting lid. You can seal the edges with dough to prevent steam from escaping.
8. Cook on low heat for about 45 minutes to 1 hour, allowing the flavors to meld and the rice to cook through.
9. Once done, gently fluff the rice with a fork, mixing the meat and rice together.
10. Garnish with fried onions, fresh coriander, and mint leaves.
11. Serve hot with raita or salad.`,
  },

  // ==========================================
  // NEW DAILY MEALS (REQUESTED)
  // ==========================================
  {
    id: 'kofta',
    category: 'daily',
    isVeg: false,
    name: { en: 'Kofta (Chicken/Beef)', ur: 'کوفتہ (چکن / بیف)', hi: 'कोफ्ता (चिकन / बीफ)' },
    type: { en: 'Meat / Curry', ur: 'گوشت / سالن', hi: 'गोश्त / करी' },
    ingredients: [
      'Minced Beef or Chicken (500g, finely minced)',
      'Onion (2 medium: 1 finely chopped for koftas, 1 sliced for gravy)',
      'Ginger-Garlic Paste (2 tbsp)',
      'Roasted Gram Flour (Bhuna Besan) (2 tbsp)',
      'Egg (1, beaten)',
      'Tomatoes (2, pureed)',
      'Yogurt (1/2 cup, whisked)',
      'Garam Masala Powder (1 tsp)',
      'Red Chili Powder (1.5 tsp)',
      'Coriander Powder (1 tbsp)',
      'Turmeric Powder (1/2 tsp)',
      'Fresh Coriander and Green Chilies',
      'Oil or Ghee (1/2 cup)',
      'Salt to taste',
    ],
    recipe: `1. In a bowl, mix minced meat with finely chopped onion, 1 tbsp ginger-garlic paste, bhuna besan, half the spices, egg, chopped green chilies, and coriander. Knead well.
2. Shape into smooth, compact golf-ball sized meatballs (koftas). Refrigerate for 15 minutes.
3. Optional: Gently shallow-fry meatballs for 2 minutes to seal or add directly to simmering gravy.
4. For Gravy: Heat oil in a wide pot, sauté sliced onions until golden. Add remaining ginger-garlic paste and tomato puree. Cook until oil separates.
5. Lower heat, add whisked yogurt, coriander powder, turmeric, and red chili powder. Sauté well until fragrant.
6. Add 1.5 cups of warm water. Bring to a gentle boil.
7. Carefully slide the koftas into the gravy. Do NOT stir with a spoon; gently swirl the pot by its handles.
8. Cover tightly and simmer on low heat for 20-25 minutes until koftas are thoroughly cooked and gravy thickens.
9. Sprinkle garam masala, fresh coriander, and julienned ginger. Serve with warm naan or sheermal.`,
  },
  {
    id: 'shami_kabab',
    category: 'daily',
    isVeg: false,
    name: { en: 'Shami Kabab', ur: 'شامی کباب', hi: 'शामी कबाब' },
    type: { en: 'Meat / Patty', ur: 'کباب', hi: 'कबाब' },
    ingredients: [
      'Boneless Beef, Mutton or Chicken (500g)',
      'Chana Daal (1 cup, soaked for 2 hours)',
      'Onion (1 large, roughly chopped)',
      'Ginger (2-inch piece) & Garlic (8 cloves)',
      'Whole Spices (2 black cardamoms, 4 cloves, 1 cinnamon stick, 1 tsp cumin)',
      'Whole Red Button Chilies (6-8)',
      'Eggs (1-2, for dipping)',
      'Fresh Mint & Fresh Coriander (finely chopped)',
      'Green Chilies (3, finely chopped)',
      'Salt to taste',
      'Oil for shallow frying',
    ],
    recipe: `1. In a pressure cooker or pot, combine meat, soaked chana daal, sliced onion, ginger, garlic, whole spices, button chilies, salt, and 2 cups of water.
2. Cook until the meat and daal are completely tender and all excess water has evaporated. The mixture must be dry.
3. Remove whole black cardamoms and cinnamon sticks. Grind the warm mixture using a sil-batta (mortar) or food processor until smooth and fibrous (reshay-dar).
4. Add finely chopped mint, coriander, green chilies, and 1 beaten egg. Mix thoroughly with hands.
5. Shape the mixture into smooth round palm-sized patties (kababs).
6. Dip each kabab in beaten egg and shallow fry in hot oil over medium heat until deep golden brown on both sides.
7. Serve hot with green mint-coriander chutney, onion rings, and parathas.`,
  },
  {
    id: 'yakhni_pulao',
    category: 'daily',
    isVeg: false,
    name: { en: 'Yakhni Pulao', ur: 'یخنی پلاؤ', hi: 'यखनी पुलाव' },
    type: { en: 'Rice / Meat', ur: 'چاول / گوشت', hi: 'चावल / गोश्त' },
    ingredients: [
      'Mutton, Beef, or Chicken (750g)',
      'Basmati Rice (3 cups, soaked for 30 minutes)',
      'Onions (3 large, thinly sliced)',
      'Yogurt (1/2 cup)',
      'Ginger-Garlic Paste (2 tbsp)',
      'For Yakhni (Broth): Whole Coriander Seeds (2 tbsp), Fennel Seeds (Saunf) (2 tbsp), Cumin (1 tbsp), Whole Garam Masala (cloves, cardamoms, star anise, cinnamon), 1 whole bulb garlic, 1 onion, salt',
      'Green Chilies (5-6, whole)',
      'Ghee or Oil (1/2 cup)',
      'Salt to taste',
    ],
    recipe: `1. Yakhni (Broth): Tie fennel seeds, coriander seeds, and whole spices in a muslin cloth (potli). In a large pot, boil meat with the potli, 1 onion, garlic bulb, salt, and 6 cups of water until meat is tender. Strain and reserve the aromatic stock (yakhni).
2. Heat ghee in a large pot. Add sliced onions and fry until crisp golden brown. Reserve 1/3 for garnishing.
3. Add ginger-garlic paste and sauté for 1 minute. Add the cooked meat pieces from the broth and fry for 3-4 minutes.
4. Add whisked yogurt and green chilies. Fry until the ghee separates.
5. Pour in the measured warm yakhni broth (approx. 4.5 cups for 3 cups of rice). Bring to a rolling boil and adjust salt.
6. Add the drained basmati rice. Cook uncovered on medium-high heat until 80% of the liquid is absorbed and holes form on the surface.
7. Cover with a tight lid or cloth and steam on lowest heat (Dum) for 15-20 minutes.
8. Fluff gently with a fork and serve with raita and fresh salad.`,
  },
  {
    id: 'curry_chawal',
    category: 'daily',
    isVeg: true,
    name: { en: 'Curry Chawal', ur: 'کڑھی چاول', hi: 'कढ़ी चावल' },
    type: { en: 'Lentils / Rice', ur: 'کڑھی / چاول', hi: 'कढ़ी / चावल' },
    ingredients: [
      'Sour Yogurt or Lassi (2 cups)',
      'Besan (Gram Flour) (1 cup)',
      'Basmati Rice (2 cups, steamed)',
      'Onions (2 medium, finely sliced)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Fenugreek Seeds (Methi Dana) (1/2 tsp)',
      'Cumin Seeds (1 tsp)',
      'Red Chili Powder (1 tbsp)',
      'Turmeric Powder (1.5 tsp)',
      'Whole Red Dried Chilies (5-6)',
      'Fresh Curry Leaves (1 sprig)',
      'Mustard Seeds (1/2 tsp)',
      'Oil / Ghee for frying & tempering',
      'Salt to taste',
    ],
    recipe: `1. Kadhi Base: Whisk together sour yogurt, 1/2 cup besan, turmeric, red chili powder, salt, and 5-6 cups of water until silky smooth.
2. Heat 2 tbsp oil in a deep pot. Add fenugreek seeds, cumin, and ginger-garlic paste. Pour the yogurt mixture, stirring constantly until it reaches a boil.
3. Reduce flame to low and let it simmer for 40-50 minutes, stirring occasionally until thick and fragrant.
4. Pakoras: Mix remaining besan with sliced onions, green chilies, coriander, cumin seeds, a pinch of baking soda, and water to form a thick batter. Drop small portions into hot oil and deep fry until golden.
5. Drop freshly fried pakoras into the simmering kadhi.
6. Tarka (Tempering): In a small pan, heat ghee, add cumin seeds, whole red chilies, mustard seeds, and curry leaves until crackling. Pour immediately over kadhi.
7. Serve piping hot with freshly steamed long-grain basmati rice.`,
  },
  {
    id: 'tori_ki_sabzi',
    category: 'daily',
    isVeg: true,
    name: { en: 'Tori ki Sabzi (Ridge Gourd)', ur: 'توری کی سبزی', hi: 'तोरी की सब्जी' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Ridge Gourd (Tori / Turai) (1 kg, peeled and sliced into rounds)',
      'Onions (2 medium, sliced)',
      'Tomatoes (2 medium, finely chopped)',
      'Green Chilies (3, slit)',
      'Cumin Seeds (1 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Coriander Powder (1 tsp)',
      'Cooking Oil (3 tbsp)',
      'Salt to taste',
      'Fresh Coriander (for garnish)',
    ],
    recipe: `1. Scrape the sharp ridges off the tori, wash thoroughly, and slice into 1/2-inch round pieces.
2. Heat oil in a pan. Add cumin seeds and let them crackle.
3. Add sliced onions and sauté until translucent and soft (do not over-brown).
4. Add chopped tomatoes, green chilies, turmeric, red chili powder, coriander powder, and salt. Cook until tomatoes soften.
5. Add the sliced tori and mix well with the masala for 2-3 minutes.
6. Cover with a tight lid and cook on low-medium heat. Tori releases its own natural juices, so NO water is needed.
7. Cook for 12-15 minutes until tender. Uncover and cook on medium heat for 2-3 minutes until oil separates.
8. Garnish with chopped fresh coriander and serve hot with fresh phulkas or parathas.`,
  },
  {
    id: 'saag',
    category: 'daily',
    isVeg: true,
    name: { en: 'Sarson ka Saag', ur: 'سرسوں کا ساگ', hi: 'सरसों का साग' },
    type: { en: 'Leafy Vegetable', ur: 'سبزی / ساگ', hi: 'सब्जी / साग' },
    ingredients: [
      'Mustard Greens (Sarson) (1 kg, chopped)',
      'Spinach (Palak) (500g, chopped)',
      'Bathua or Fenugreek Leaves (Methi) (250g, chopped)',
      'Garlic (8-10 cloves, minced)',
      'Ginger (2 inches, grated)',
      'Green Chilies (6-8, roughly chopped)',
      'Makki ka Atta (Cornmeal / Maize Flour) (3 tbsp)',
      'Desi Ghee or White Butter (Makhan) (4 tbsp)',
      'Salt to taste',
    ],
    recipe: `1. Clean all greens thoroughly in cold water multiple times to remove grit. Roughly chop leaves and tender stems.
2. In a large pot or pressure cooker, add the greens, half the ginger, garlic, chopped green chilies, salt, and 1 cup of water. Pressure cook for 20 minutes (or simmer for 1 hour).
3. Mash the greens using a traditional wooden masher (madhani) or pulse gently in a blender (keep it coarse, not a smooth paste).
4. Return to low heat. Dissolve cornmeal (makki ka atta) in a little warm water and stir into the saag to thicken and bind. Simmer for 15 minutes.
5. Tarka: In a separate pan, melt generous desi ghee. Fry remaining sliced garlic and julienned ginger until golden and aromatic.
6. Pour the sizzling tarka over the saag.
7. Serve hot topped with a big dollop of fresh white butter (makhan), accompanied by hot Makki ki Roti and jaggery (gur).`,
  },
  {
    id: 'aaloo_baingan',
    category: 'daily',
    isVeg: true,
    name: { en: 'Aaloo Baingan', ur: 'آلو بینگن', hi: 'आलू बैंगन' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Eggplants / Brinjals (Baingan) (500g, cut into wedges)',
      'Potatoes (Aaloo) (2 large, peeled and cubed)',
      'Onion (1 large, sliced)',
      'Tomatoes (2 medium, chopped)',
      'Ginger-Garlic Paste (1 tbsp)',
      'Cumin Seeds (1 tsp)',
      'Kalonji (Nigella Seeds) (1/4 tsp)',
      'Turmeric Powder (1/2 tsp)',
      'Red Chili Powder (1 tsp)',
      'Coriander Powder (1 tbsp)',
      'Garam Masala (1/2 tsp)',
      'Cooking Oil (3-4 tbsp)',
      'Salt to taste',
      'Fresh Coriander (chopped)',
    ],
    recipe: `1. Cut baingan into wedges and soak in salted water to prevent discoloration. Peel and cube potatoes.
2. Heat oil in a kadai. Add cumin seeds and kalonji; let them sizzle for a few seconds.
3. Add sliced onions and sauté until lightly golden.
4. Add ginger-garlic paste and sauté for 1 minute until fragrant.
5. Add chopped tomatoes, turmeric, red chili powder, coriander powder, and salt. Cook until tomatoes break down.
6. Drain the baingan and add them to the pan along with the potato cubes. Mix well to coat evenly with spices.
7. Cover and cook on low heat for 18-20 minutes, stirring gently every few minutes, until both potatoes and eggplants are melt-in-mouth tender.
8. Sprinkle garam masala and fresh coriander.
9. Serve hot with roti or fresh parathas.`,
  },
  {
    id: 'aaloo_katli',
    category: 'daily',
    isVeg: true,
    name: { en: 'Aaloo Katli', ur: 'آلو قتلی', hi: 'आलू कतली' },
    type: { en: 'Vegetable', ur: 'سبزی', hi: 'सब्जी' },
    ingredients: [
      'Potatoes (4 large, peeled and sliced into thin round discs/katlis)',
      'Whole Cumin Seeds (Zeera) (1 tbsp)',
      'Dry Whole Red Chilies (Sabut Lal Mirch) (4-5, broken into halves)',
      'Tomatoes (2 medium, finely chopped)',
      'Turmeric Powder (1/2 tsp)',
      'Kashmiri Red Chili Powder or Crushed Chili (1 tsp)',
      'Chaat Masala (1/2 tsp)',
      'Kasuri Methi (1 tsp, crushed)',
      'Mustard Oil or Cooking Oil (3 tbsp)',
      'Green Chilies (2, slit)',
      'Fresh Coriander (generous handful)',
      'Salt to taste',
    ],
    recipe: `1. Peel potatoes and slice into uniform 1/4-inch round circular discs (katliyan). Rinse in cold water and drain.
2. Heat oil in a wide frying pan or tawa. Add cumin seeds and broken whole red chilies; let them sizzle until cumin turns deep golden.
3. Add the potato discs in a single or light double layer. Sauté on medium flame for 4-5 minutes until edges are lightly browned.
4. Add finely chopped tomatoes, turmeric, chili powder, and salt. Gently toss without breaking the potato discs.
5. Sprinkle 2 tablespoons of water, cover with a lid, and cook on low heat for 8-10 minutes until potatoes are fork-tender.
6. Uncover, increase heat, and sprinkle chaat masala and crushed kasuri methi. Toss gently.
7. Garnish with slit green chilies and fresh coriander. Serve hot with warm puris or phulkas.`,
  },
  {
    id: 'aaloo_cutlets',
    category: 'daily',
    isVeg: true,
    name: { en: 'Aaloo Cutlets', ur: 'آلو کٹلس', hi: 'आलू कटलेट' },
    type: { en: 'Snack / Vegetable', ur: 'سبزی / سنیک', hi: 'सब्जी / स्नैक' },
    ingredients: [
      'Potatoes (4 large, boiled and peeled)',
      'Onion (1 small, very finely chopped)',
      'Green Chilies (2-3, finely minced)',
      'Fresh Coriander and Mint Leaves (finely chopped)',
      'Chaat Masala (1 tsp)',
      'Roasted Cumin Powder (1 tsp)',
      'Red Chili Flakes (1 tsp)',
      'Black Pepper Powder (1/2 tsp)',
      'Egg (1, beaten for dipping) or Cornstarch slurry',
      'Breadcrumbs (1 cup, for crisp coating)',
      'Salt to taste',
      'Oil for shallow frying',
    ],
    recipe: `1. In a large bowl, mash boiled potatoes thoroughly with a potato masher until smooth without lumps.
2. Add finely chopped onion, minced green chilies, mint, coriander, chaat masala, cumin powder, red chili flakes, black pepper, and salt. Mix thoroughly.
3. Divide the mixture into equal portions and shape into smooth oval or round patties (cutlets).
4. Dip each cutlet into beaten egg (or cornstarch slurry), then roll evenly in breadcrumbs to coat all sides.
5. Chill in refrigerator for 10 minutes to help the crust set.
6. Heat oil in a frying pan over medium-high heat. Shallow fry cutlets for 2-3 minutes per side until crisp and golden brown.
7. Drain on paper towels and serve piping hot with mint raita or tomato ketchup.`,
  },

  // ==========================================
  // DESSERTS SECTION (REQUESTED)
  // ==========================================
  {
    id: 'cup_cakes',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Cup Cakes', ur: 'کپ کیکس', hi: 'कप केक' },
    type: { en: 'Dessert / Bakery', ur: 'میٹھا / بیکری', hi: 'मिठाई / बेकरी' },
    ingredients: [
      'All-Purpose Flour (Maida) (1.5 cups)',
      'Sugar (3/4 cup, powdered)',
      'Butter (1/2 cup, softened at room temperature)',
      'Eggs (2) or Yogurt (1/2 cup for eggless)',
      'Milk (1/2 cup)',
      'Baking Powder (1.5 tsp)',
      'Vanilla Extract (1 tsp)',
      'Pinch of Salt',
      'Optional: Chocolate chips or sprinkles',
    ],
    recipe: `1. Preheat oven to 180°C (350°F) and line a 12-cup muffin tin with cupcake liners.
2. In a bowl, sift flour, baking powder, and pinch of salt together.
3. In a large mixing bowl, beat softened butter and sugar until light, pale, and fluffy (approx. 3-4 minutes).
4. Add eggs one at a time (or yogurt), beating well after each addition. Stir in vanilla extract.
5. Gradually fold in dry ingredients alternating with milk, mixing on low speed just until smooth and combined (do not overmix).
6. Divide batter evenly among cupcake liners, filling each about 2/3 full.
7. Bake for 18-20 minutes until a toothpick inserted in the center comes out clean.
8. Cool on a wire rack completely. Top with whipped cream, buttercream, or chocolate ganache.`,
  },
  {
    id: 'custurd',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Custard (Fruit Custard)', ur: 'کسٹرڈ', hi: 'कस्टर्ड' },
    type: { en: 'Dessert', ur: 'میٹھا', hi: 'मिठाई' },
    ingredients: [
      'Whole Milk (1 litre / 4 cups)',
      'Vanilla Custard Powder (4 tbsp)',
      'Sugar (1/2 cup, adjust to taste)',
      'Assorted Fresh Fruits: Banana, Apple, Pomegranate, Grapes, Mango (2 cups, chopped)',
      'Optional: Strawberry or Banana Jelly cubes (for layering)',
      'Nuts (chopped almonds and pistachios)',
    ],
    recipe: `1. Take 1/2 cup of cold milk from the litre and mix with custard powder until completely lump-free.
2. Heat the remaining milk in a heavy saucepan and bring to a boil. Add sugar and stir until dissolved.
3. Lower the flame. Gradually pour the prepared custard slurry into the boiling milk while whisking continuously with a wire whisk to prevent lumps.
4. Cook on low flame for 4-5 minutes, stirring constantly until the custard thickens and coats the back of a spoon.
5. Remove from heat and let it cool to room temperature, stirring occasionally to prevent skin from forming.
6. Chill thoroughly in the refrigerator for at least 2 hours.
7. Just before serving, fold in chopped fresh fruits, jelly cubes, and chopped nuts. Serve chilled.`,
  },
  {
    id: 'kheer',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Kheer (Rice Pudding)', ur: 'کھیر', hi: 'खीर' },
    type: { en: 'Traditional Dessert', ur: 'روایتی میٹھا', hi: 'पारंपरिक मिठाई' },
    ingredients: [
      'Whole Milk (1.5 litres / 6 cups)',
      'Basmati Rice (1/3 cup, soaked for 1 hour and coarsely crushed)',
      'Sugar (3/4 cup, or to taste)',
      'Green Cardamom Pods (5, crushed)',
      'Almonds and Pistachios (2 tbsp each, sliced)',
      'Kewra Water or Rose Water (1 tsp)',
      'Saffron strands (a pinch, optional)',
      'Silver Leaf (Chandi ka Warq, for decoration)',
    ],
    recipe: `1. Wash and soak basmati rice for 1 hour. Drain and coarsely crush between your palms or in a mortar.
2. In a heavy-bottomed pot, bring full-cream milk to a rolling boil.
3. Add the crushed rice and crushed cardamom pods. Lower heat to minimum.
4. Simmer gently for 40-50 minutes, stirring and scraping the sides frequently, until the rice is completely tender and milk has reduced to a creamy, rich consistency.
5. Add sugar, sliced almonds, pistachios, and saffron. Cook for another 8-10 minutes until sugar dissolves and kheer thickens.
6. Turn off the heat and stir in kewra water.
7. Pour into clay bowls (sakoras) or serving dishes. Chill in the refrigerator or serve warm, garnished with silver leaf and nuts.`,
  },
  {
    id: 'sheer_khurma',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Sheer Khurma', ur: 'شیر خورمہ', hi: 'शीर खुरमा' },
    type: { en: 'Festive Dessert', ur: 'شاہی میٹھا', hi: 'शाही मिठाई' },
    ingredients: [
      'Fine Vermicelli (Seviyan) (1 cup, broken into small pieces)',
      'Whole Milk (1 litre / 4 cups)',
      'Desi Ghee (2-3 tbsp)',
      'Dry Dates (Chhuara) (5-6, soaked overnight in water and thinly sliced)',
      'Sugar or Condensed Milk (1/2 cup, adjust to taste)',
      'Almonds, Pistachios, and Cashews (2 tbsp each, blanched and slivered)',
      'Charoli / Chironji (1 tbsp)',
      'Green Cardamom Powder (1/2 tsp)',
      'Saffron strands & Kewra water (a few drops)',
    ],
    recipe: `1. In a pan, heat 1 tbsp desi ghee. Add sliced dry dates, almonds, pistachios, cashews, and chironji. Roast on low heat until fragrant and lightly golden. Set aside.
2. In the same pan, add 1 tbsp ghee and roast the broken fine vermicelli on low heat until golden brown.
3. In a separate heavy pot, bring full-fat milk to a boil. Add the soaked sliced dates and simmer for 10-12 minutes until dates soften.
4. Add the roasted vermicelli to the simmering milk. Cook for 5-7 minutes until vermicelli is soft.
5. Stir in sugar (or condensed milk) and cardamom powder. Simmer for another 3-4 minutes.
6. Add the roasted dry fruits and a pinch of saffron. Stir well.
7. Remove from heat and finish with a few drops of kewra water.
8. Serve warm or chilled as a royal Eid treat.`,
  },
  {
    id: 'suji_ka_halwa',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Suji ka Halwa', ur: 'سوجی کا حلوہ', hi: 'सूजी का हलवा' },
    type: { en: 'Halwa / Dessert', ur: 'حلوہ / میٹھا', hi: 'हलवा / मिठाई' },
    ingredients: [
      'Semolina (Suji / Rava) (1 cup)',
      'Desi Ghee (3/4 cup)',
      'Sugar (1 cup)',
      'Water (3 cups)',
      'Green Cardamom Pods (4, crushed)',
      'Almonds and Pistachios (2 tbsp, sliced)',
      'Raisins (Kishmish) (1 tbsp)',
      'A pinch of yellow food color or saffron (optional)',
    ],
    recipe: `1. In a saucepan, combine water, sugar, and crushed cardamoms. Bring to a boil until sugar completely dissolves to form a warm syrup. Keep on low heat.
2. In a heavy kadai or pan, melt desi ghee on medium heat.
3. Add the semolina (suji) and roast on low-medium flame, stirring continuously.
4. Roast for 8-10 minutes until suji turns golden brown and releases a rich nutty aroma.
5. Add sliced nuts and raisins; sauté for 30 seconds.
6. Very carefully pour the hot sugar syrup into the roasted suji while stirring vigorously to avoid splattering and lumps.
7. Cook on medium-low heat stirring continuously until the halwa absorbs all syrup and begins to leave the sides of the pan with ghee glistening on top.
8. Cover with a lid and steam on lowest heat for 2 minutes.
9. Serve hot with crispy puris or parathas.`,
  },
  {
    id: 'seviyan',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Seviyan (Vermicelli)', ur: 'سویاں (دودھ / میٹھی)', hi: 'सेवइयां' },
    type: { en: 'Sweet Dish', ur: 'میٹھا', hi: 'मीठी डिश' },
    ingredients: [
      'Roasted Vermicelli (Seviyan) (1.5 cups)',
      'Full Cream Milk (1 litre / 4 cups)',
      'Sugar (1/2 cup, or to taste)',
      'Desi Ghee (2 tbsp)',
      'Green Cardamom Pods (4, crushed)',
      'Mixed Nuts (Almonds, Pistachios, Cashews) (2 tbsp, sliced)',
      'Raisins (1 tbsp)',
    ],
    recipe: `1. Heat desi ghee in a pan over medium heat. Add crushed cardamoms and mixed sliced nuts. Fry for 1 minute until fragrant.
2. Add the vermicelli (crushed slightly) and roast on low flame for 2-3 minutes until golden and aromatic.
3. Pour in the milk carefully, stirring to combine. Bring to a gentle boil.
4. Simmer on medium-low flame for 6-8 minutes until vermicelli is cooked through and milk thickens to your desired consistency.
5. Add sugar and raisins. Stir well and simmer for another 2-3 minutes until sugar is fully dissolved.
6. Turn off the flame. Garnish with additional chopped pistachios and almonds.
7. Serve warm or refrigerated chilled.`,
  },
  {
    id: 'gajar_ka_halwa',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Gajar ka Halwa', ur: 'گاجر کا حلوہ', hi: 'गाजर का हलवा' },
    type: { en: 'Traditional Dessert', ur: 'روایتی میٹھا', hi: 'पारंपरिक हलवा' },
    ingredients: [
      'Red Carrots (Gajar) (1 kg, peeled and grated)',
      'Full Cream Milk (1 litre)',
      'Sugar (3/4 cup, or to taste)',
      'Desi Ghee (4 tbsp)',
      'Khoya / Mawa (1/2 cup, crumbled)',
      'Green Cardamom Powder (1 tsp)',
      'Almonds and Cashews (2 tbsp each, chopped)',
      'Pistachios (1 tbsp, for garnish)',
    ],
    recipe: `1. Wash, peel, and grate carrots finely.
2. In a heavy bottomed kadai, add grated carrots and milk. Cook on medium heat, stirring periodically, until milk reduces completely and carrots are soft (approx. 35-45 minutes).
3. Add desi ghee and fry (bhunai) the carrots on medium flame for 8-10 minutes until aromatic and ghee begins to separate.
4. Add sugar and cardamom powder. The sugar will melt and release liquid; continue cooking until all liquid evaporates.
5. Add crumbled khoya (mawa) and chopped nuts. Mix thoroughly and cook for another 3-4 minutes until rich and glossy.
6. Garnish with sliced pistachios and warm silver foil (chandi warq). Serve warm.`,
  },
  {
    id: 'kaddu_ka_halwa',
    category: 'dessert',
    isVeg: true,
    name: { en: 'Kaddu ka Halwa (Pumpkin / Lauki)', ur: 'کدو کا حلوہ', hi: 'कद्दू का हलवा' },
    type: { en: 'Halwa / Dessert', ur: 'حلوہ / میٹھا', hi: 'हलवा / मिठाई' },
    ingredients: [
      'Sweet Pumpkin or Bottle Gourd (Kaddu / Lauki) (1 kg, peeled, deseeded, and grated)',
      'Full Cream Milk (500 ml)',
      'Desi Ghee (4 tbsp)',
      'Sugar (3/4 cup)',
      'Khoya / Mawa or Milk Powder (1/2 cup)',
      'Green Cardamom Powder (1/2 tsp)',
      'Almonds and Pistachios (2 tbsp, slivered)',
      'A pinch of green food color or saffron (optional)',
    ],
    recipe: `1. Peel, remove seeds, and grate the pumpkin/lauki. Squeeze out excess liquid gently if using bottle gourd.
2. Heat 2 tbsp desi ghee in a heavy pan. Add the grated kaddu and sauté on medium heat for 5-7 minutes.
3. Pour in milk and bring to a boil. Lower flame, cover, and cook until the kaddu is soft and all the milk has evaporated (about 20-25 minutes).
4. Add remaining desi ghee and sauté (bhunai) for 5 minutes until glossy.
5. Add sugar and cardamom powder. Cook on medium heat until the moisture released by sugar dries up completely.
6. Stir in crumbled khoya (or milk powder) and sliced nuts. Stir well on low heat for 3-4 minutes until halwa leaves the sides of the pan.
7. Serve warm, garnished with slivered almonds and pistachios.`,
  },
];
