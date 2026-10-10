// Predefined ingredients catalog and dish ingredient mappings for Aaj Kiya Pakayen

export const INGREDIENT_CATEGORIES = [
  { id: 'meat_eggs', name: { en: 'Meats & Eggs', ur: 'گوشت اور انڈے', hi: 'मांस और अंडे' }, icon: 'Drumstick' },
  { id: 'vegetables', name: { en: 'Vegetables', ur: 'تازہ سبزیاں', hi: 'ताज़ी सब्ज़ियाँ' }, icon: 'Carrot' },
  { id: 'grains_pulses', name: { en: 'Grains & Pulses', ur: 'اناج اور دالیں', hi: 'अनाज और दालें' }, icon: 'Wheat' },
  { id: 'dairy_pantry', name: { en: 'Dairy & Essentials', ur: 'دودھ، دہی و دیگر', hi: 'डेयरी और अन्य' }, icon: 'Milk' },
];

export const PREDEFINED_INGREDIENTS = [
  // --- Meats & Eggs ---
  {
    id: 'chicken',
    category: 'meat_eggs',
    emoji: '🍗',
    isStaple: false,
    name: { en: 'Chicken', ur: 'چکن / مرغی', hi: 'चिकन' },
  },
  {
    id: 'meat',
    category: 'meat_eggs',
    emoji: '🥩',
    isStaple: false,
    name: { en: 'Mutton / Beef / Keema', ur: 'گوشت / قیمہ', hi: 'मटन / बीफ़ / कीमा' },
  },
  {
    id: 'eggs',
    category: 'meat_eggs',
    emoji: '🥚',
    isStaple: true,
    name: { en: 'Eggs', ur: 'انڈے', hi: 'अंडे' },
  },

  // --- Vegetables ---
  {
    id: 'potatoes',
    category: 'vegetables',
    emoji: '🥔',
    isStaple: true,
    name: { en: 'Potatoes (Aloo)', ur: 'آلو', hi: 'आलू' },
  },
  {
    id: 'onions',
    category: 'vegetables',
    emoji: '🧅',
    isStaple: true,
    name: { en: 'Onions (Pyaz)', ur: 'پیاز', hi: 'प्याज' },
  },
  {
    id: 'tomatoes',
    category: 'vegetables',
    emoji: '🍅',
    isStaple: true,
    name: { en: 'Tomatoes (Tamatar)', ur: 'ٹماٹر', hi: 'टमाटर' },
  },
  {
    id: 'spinach',
    category: 'vegetables',
    emoji: '🥬',
    isStaple: false,
    name: { en: 'Spinach / Saag (Palak)', ur: 'پالک / ساگ', hi: 'पालक / साग' },
  },
  {
    id: 'okra',
    category: 'vegetables',
    emoji: '🌱',
    isStaple: false,
    name: { en: 'Okra (Bhindi)', ur: 'بھنڈی', hi: 'भिंडी' },
  },
  {
    id: 'cauliflower',
    category: 'vegetables',
    emoji: '🥦',
    isStaple: false,
    name: { en: 'Cauliflower (Gobi)', ur: 'گوبھی', hi: 'फूलगोभी' },
  },
  {
    id: 'eggplant',
    category: 'vegetables',
    emoji: '🍆',
    isStaple: false,
    name: { en: 'Eggplant (Baingan)', ur: 'بینگن', hi: 'बैंगन' },
  },
  {
    id: 'bitter_gourd',
    category: 'vegetables',
    emoji: '🥒',
    isStaple: false,
    name: { en: 'Bitter Gourd (Karela)', ur: 'کریلے', hi: 'करेले' },
  },
  {
    id: 'ridge_gourd',
    category: 'vegetables',
    emoji: '🥒',
    isStaple: false,
    name: { en: 'Ridge Gourd (Tori)', ur: 'توری', hi: 'तोरी' },
  },
  {
    id: 'carrots',
    category: 'vegetables',
    emoji: '🥕',
    isStaple: false,
    name: { en: 'Carrots (Gajar)', ur: 'گاجر', hi: 'गाजर' },
  },
  {
    id: 'pumpkin',
    category: 'vegetables',
    emoji: '🎃',
    isStaple: false,
    name: { en: 'Pumpkin / Lauki (Kaddu)', ur: 'کدو / لوکی', hi: 'कद्दू / लौकी' },
  },

  // --- Grains, Pulses & Flours ---
  {
    id: 'rice',
    category: 'grains_pulses',
    emoji: '🍚',
    isStaple: true,
    name: { en: 'Rice (Chawal)', ur: 'چاول', hi: 'चावल' },
  },
  {
    id: 'atta',
    category: 'grains_pulses',
    emoji: '🌾',
    isStaple: true,
    name: { en: 'Wheat Flour (Atta)', ur: 'گندم کا آٹا', hi: 'गेहूं का आटा' },
  },
  {
    id: 'maida',
    category: 'grains_pulses',
    emoji: '🥣',
    isStaple: false,
    name: { en: 'All-Purpose Flour (Maida)', ur: 'میدہ', hi: 'मैदा' },
  },
  {
    id: 'daal',
    category: 'grains_pulses',
    emoji: '🍲',
    isStaple: true,
    name: { en: 'Lentils (Daal Masoor / Moong / Urad)', ur: 'دالیں (مسور / مونگ / ماش)', hi: 'दालें (मसूर / मूंग / उड़द)' },
  },
  {
    id: 'chana_daal',
    category: 'grains_pulses',
    emoji: '🥣',
    isStaple: false,
    name: { en: 'Chana Daal (Split Bengal Gram)', ur: 'چنے کی دال', hi: 'चना दाल' },
  },
  {
    id: 'chickpeas',
    category: 'grains_pulses',
    emoji: '🧆',
    isStaple: false,
    name: { en: 'White Chickpeas (Safaid Chana)', ur: 'سفید چنے', hi: 'सफेद / काबुली चने' },
  },
  {
    id: 'besan',
    category: 'grains_pulses',
    emoji: '🟡',
    isStaple: false,
    name: { en: 'Gram Flour (Besan)', ur: 'بیسن', hi: 'बेसन' },
  },
  {
    id: 'suji',
    category: 'grains_pulses',
    emoji: '🌾',
    isStaple: false,
    name: { en: 'Semolina (Suji)', ur: 'سوجی', hi: 'सूजी' },
  },
  {
    id: 'vermicelli',
    category: 'grains_pulses',
    emoji: '🍜',
    isStaple: false,
    name: { en: 'Vermicelli (Seviyan)', ur: 'سویاں', hi: 'सेवइयां' },
  },

  // --- Dairy & Pantry ---
  {
    id: 'yogurt',
    category: 'dairy_pantry',
    emoji: '🥛',
    isStaple: true,
    name: { en: 'Yogurt (Dahi)', ur: 'دہی', hi: 'दही' },
  },
  {
    id: 'milk',
    category: 'dairy_pantry',
    emoji: '🥛',
    isStaple: true,
    name: { en: 'Milk (Doodh)', ur: 'دودھ', hi: 'दूध' },
  },
  {
    id: 'sugar',
    category: 'dairy_pantry',
    emoji: '🍬',
    isStaple: true,
    name: { en: 'Sugar / Shakkar (Cheeni)', ur: 'چینی / شکر', hi: 'चीनी / शक्कर' },
  },
  {
    id: 'custard_powder',
    category: 'dairy_pantry',
    emoji: '🍮',
    isStaple: false,
    name: { en: 'Custard Powder', ur: 'کسٹرڈ پاؤڈر', hi: 'कस्टर्ड पाउडर' },
  },
];

// Mapping dish IDs to their core required ingredients and secondary helpful ingredients.
// A required entry can be a string (must have) or an array of strings (must have AT LEAST ONE of these, e.g. ['chicken', 'meat']).
export const DISH_INGREDIENTS_MAP = {
  biryani: {
    required: [['chicken', 'meat'], 'rice'],
    optional: ['yogurt', 'onions', 'tomatoes'],
  },
  daal_chawal: {
    required: ['daal', 'rice'],
    optional: ['onions', 'tomatoes'],
  },
  bhindi_masala: {
    required: ['okra', 'onions'],
    optional: ['tomatoes'],
  },
  aloo_palak: {
    required: ['potatoes', 'spinach'],
    optional: ['onions', 'tomatoes'],
  },
  palak_gosht: {
    required: [['meat', 'chicken'], 'spinach'],
    optional: ['onions', 'tomatoes'],
  },
  chicken_karahi: {
    required: ['chicken', 'tomatoes'],
    optional: ['onions'],
  },
  aloo_gobi: {
    required: ['potatoes', 'cauliflower'],
    optional: ['onions', 'tomatoes'],
  },
  masar_chawal: {
    required: ['daal', 'rice'],
    optional: ['onions'],
  },
  chicken_pulao: {
    required: ['chicken', 'rice'],
    optional: ['onions', 'tomatoes'],
  },
  chicken_korma: {
    required: ['chicken', 'yogurt'],
    optional: ['onions'],
  },
  chana_daal: {
    required: ['chana_daal'],
    optional: ['onions', 'tomatoes'],
  },
  Karele: {
    required: ['bitter_gourd', 'onions'],
    optional: ['tomatoes'],
  },
  Curry: {
    required: ['yogurt', 'besan'],
    optional: ['onions'],
  },
  dal_makhani: {
    required: ['daal'],
    optional: ['onions', 'tomatoes'],
  },
  'Dum Pukh': {
    required: [['meat', 'chicken'], 'potatoes'],
    optional: ['yogurt', 'onions'],
  },
  kofta: {
    required: [['meat', 'chicken'], 'besan'],
    optional: ['eggs', 'onions'],
  },
  shami_kabab: {
    required: [['meat', 'chicken'], 'chana_daal'],
    optional: ['eggs', 'onions'],
  },
  yakhni_pulao: {
    required: [['meat', 'chicken'], 'rice'],
    optional: ['yogurt', 'onions'],
  },
  curry_chawal: {
    required: ['yogurt', 'besan', 'rice'],
    optional: ['onions'],
  },
  tori_ki_sabzi: {
    required: ['ridge_gourd', 'onions'],
    optional: ['tomatoes'],
  },
  saag: {
    required: ['spinach'],
    optional: ['atta'],
  },
  aaloo_baingan: {
    required: ['potatoes', 'eggplant'],
    optional: ['onions', 'tomatoes'],
  },
  aaloo_katli: {
    required: ['potatoes', 'tomatoes'],
    optional: ['onions'],
  },
  aaloo_cutlets: {
    required: ['potatoes'],
    optional: ['onions', 'eggs'],
  },
  cup_cakes: {
    required: ['maida', 'sugar', 'milk'],
    optional: ['eggs'],
  },
  custurd: {
    required: ['custard_powder', 'milk', 'sugar'],
    optional: [],
  },
  kheer: {
    required: ['milk', 'rice', 'sugar'],
    optional: [],
  },
  sheer_khurma: {
    required: ['vermicelli', 'milk', 'sugar'],
    optional: [],
  },
  suji_ka_halwa: {
    required: ['suji', 'sugar'],
    optional: [],
  },
  seviyan: {
    required: ['vermicelli', 'milk', 'sugar'],
    optional: [],
  },
  gajar_ka_halwa: {
    required: ['carrots', 'milk', 'sugar'],
    optional: [],
  },
  kaddu_ka_halwa: {
    required: ['pumpkin', 'milk', 'sugar'],
    optional: [],
  },
  anda_paratha: {
    required: ['eggs', 'atta'],
    optional: ['onions'],
  },
  halwa_poori: {
    required: ['maida', 'suji', 'chickpeas', 'sugar'],
    optional: [],
  },
  meetha_paratha: {
    required: ['atta', 'sugar'],
    optional: [],
  },
  aloo_paratha: {
    required: ['potatoes', 'atta'],
    optional: ['onions'],
  },
  nihari: {
    required: ['meat', 'atta'],
    optional: ['onions'],
  },
  murgh_channay: {
    required: ['chicken', 'chickpeas'],
    optional: ['onions'],
  },
  khagina: {
    required: ['eggs', 'onions', 'tomatoes'],
    optional: [],
  },
  keema_paratha: {
    required: ['meat', 'atta'],
    optional: ['onions'],
  },
  besan_roti: {
    required: ['besan', 'atta'],
    optional: ['onions'],
  },
};

/**
 * Evaluates all dishes against the user's selected ingredient IDs.
 * Returns ready dishes (100% of required ingredients met), almost ready dishes (missing only 1 required ingredient),
 * along with missing ingredient IDs and match metrics.
 */
export function evaluateDishesWithIngredients(selectedIngredientIds = [], dishes = []) {
  const selectedSet = new Set(selectedIngredientIds);
  const readyDishes = [];
  const almostDishes = [];

  dishes.forEach((dish) => {
    const config = DISH_INGREDIENTS_MAP[dish.id];
    if (!config || !config.required || config.required.length === 0) {
      return;
    }

    const missingRequired = [];
    let satisfiedRequiredCount = 0;

    config.required.forEach((req) => {
      if (Array.isArray(req)) {
        // Any of the options satisfies this requirement (e.g. ['chicken', 'meat'])
        const hasAny = req.some((id) => selectedSet.has(id));
        if (hasAny) {
          satisfiedRequiredCount += 1;
        } else {
          missingRequired.push(req[0]); // recommend the first one (e.g. chicken)
        }
      } else {
        if (selectedSet.has(req)) {
          satisfiedRequiredCount += 1;
        } else {
          missingRequired.push(req);
        }
      }
    });

    const totalRequired = config.required.length;
    const optionalSatisfied = (config.optional || []).filter((id) => selectedSet.has(id)).length;
    const totalOptional = (config.optional || []).length;

    const matchRatio = totalRequired > 0 ? satisfiedRequiredCount / totalRequired : 0;

    const dishWithMeta = {
      ...dish,
      matchRatio,
      satisfiedRequiredCount,
      totalRequired,
      missingRequired,
      optionalSatisfied,
      totalOptional,
    };

    if (missingRequired.length === 0) {
      readyDishes.push(dishWithMeta);
    } else if (missingRequired.length === 1 && satisfiedRequiredCount > 0) {
      almostDishes.push(dishWithMeta);
    }
  });

  // Sort ready dishes: dishes with more matching optional ingredients or more substantial required ingredients first
  readyDishes.sort((a, b) => {
    return (b.satisfiedRequiredCount + b.optionalSatisfied * 0.2) - (a.satisfiedRequiredCount + a.optionalSatisfied * 0.2);
  });

  // Sort almost dishes: dishes with higher satisfied ratio first
  almostDishes.sort((a, b) => {
    return (b.satisfiedRequiredCount + b.optionalSatisfied * 0.2) - (a.satisfiedRequiredCount + a.optionalSatisfied * 0.2);
  });

  return { readyDishes, almostDishes };
}
