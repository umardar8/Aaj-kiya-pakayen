# Aaj Kiya Pakayen? - Project Context & Roadmap

## Project Overview
"Aaj Kiya Pakayen?" (آج کیا پکائیں؟ / आज क्या पकाएँ?) is a responsive web and PWA application designed to solve the daily South Asian cooking dilemma by randomly suggesting traditional dishes along with step-by-step recipes and ingredients in 3 languages (English, Urdu, Hindi).

- **Stack**: Vite, React 18, Tailwind CSS, Lucide React, vite-plugin-pwa.
- **Repository**: `umardar8/Aaj-kiya-pakayen`

---

## Current Architecture & Key Modules
1. **`src/App.jsx`**: Main application component, state machine for dish generation, category filters (Daily Meals vs Desserts), dietary toggle (Veg Only), meal-time filters (Breakfast, Lunch, Dinner), language switching (en, ur, hi), recipe detail modal with dish image display, info modal, feedback prompt, and install banners.
2. **`src/data/dishes.js`**: Central catalog of dishes containing IDs, multilingual names, descriptions, meal classifications (`breakfast`, `lunch`, `dinner`), `isVeg`, ingredients list, full recipes, and optional `image` filepaths (`/images/dishes/<id>.jpg`).
3. **`src/data/translations.jsx`**: Multilingual dictionary for English, Urdu (RTL), and Hindi.
4. **`src/components/`**:
   - `FeedbackModal.jsx`: In-app feedback form + Google Play Store rating prompt.
   - `DesktopAppBanner.jsx`: Floating desktop QR code and app store link.
   - `MobileAppInstallModal.jsx`: Mobile browser prompt promoting Android app download.
5. **`public/`**:
   - `images/dishes/`: High-resolution 16:9 photographic food imagery for dish recipe modals.
   - `ads.txt` & `app-ads.txt`: Google AdSense and AdMob publisher records (`pub-5838182687945471`).
   - `sitemap.xml` & `robots.txt`: Search engine indexing files.

---

## Dish Image Rollout Slices (Total Dishes: 41)

### ✅ Slice 1 (Completed)
Added initial 14 dish images (16:9 ratio, photorealistic presentation):
- `biryani`, `daal_chawal`, `chicken_karahi`, `chicken_pulao`, `chicken_korma`, `kofta`, `shami_kabab`, `yakhni_pulao`, `anda_paratha`, `halwa_poori`, `meetha_paratha`, `aloo_paratha`, `nihari`, `murgh_channay`

### ✅ Slice 2 (Completed)
Added images and interactivity hooks for:
- `khagina`
- `keema_paratha`
*(Total with images after Slice 2: 16 dishes)*

### ✅ Slice 3 (Completed)
Added high-definition food photographs to 8 popular staple daily dishes:
1. `bhindi_masala` - Bhindi Masala (Okra stir-fry with onions and spices) -> `/images/dishes/bhindi_masala.jpg`
2. `aloo_palak` - Aloo Palak (Potatoes with spiced velvety spinach curry) -> `/images/dishes/aloo_palak.jpg`
3. `palak_gosht` - Palak Gosht (Tender mutton/beef cooked in seasoned spinach gravy) -> `/images/dishes/palak_gosht.jpg`
4. `aloo_gobi` - Aloo Gobi (Spiced cauliflower and potato dry sabzi) -> `/images/dishes/aloo_gobi.jpg`
5. `masar_chawal` - Masar Chawal (Earthy brown whole lentils with steamed white basmati rice) -> `/images/dishes/masar_chawal.jpg`
6. `chana_daal` - Chana Daal (Yellow split Bengal gram dal with sizzling cumin tarka) -> `/images/dishes/chana_daal.jpg`
7. `Curry` - Kadhi Pakora (Yogurt-gram flour curry with onion fritters and chili tarka) -> `/images/dishes/curry.jpg`
8. `saag` - Sarson ka Saag (Classic Punjabi mustard greens topped with white butter) -> `/images/dishes/saag.jpg`
*(Total with images after Slice 3: 24 of 41 dishes)*

### ⏳ Slice 4 (Upcoming)
Remaining savory daily dishes:
- `Karele` (Bitter gourd with onions)
- `dal_makhani` (Creamy black lentils)
- `Dum Pukh` (Slow-cooked Peshawari meat)
- `curry_chawal` (Kadhi pakora served with rice)
- `tori_ki_sabzi` (Ridge gourd sabzi)
- `aaloo_baingan` (Potato and eggplant curry)
- `aaloo_katli` (Crisp spiced potato slices)
- `aaloo_cutlets` (Crispy potato patties)
- `besan_roti` (Gram flour flatbread with mint chutney)

### ⏳ Slice 5 (Upcoming)
Desserts:
- `kheer`, `gajar_ka_halwa`, `sheer_khurma`, `suji_ka_halwa`, `custurd`, `seviyan`, `kaddu_ka_halwa`, `cup_cakes`

---

## Other Completed Work
- Google AdSense script integration into `index.html` head (`ca-pub-5838182687945471`).
- `public/ads.txt` added to verify domain monetization.
