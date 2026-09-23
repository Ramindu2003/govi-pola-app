/* ============ Data / constants ============ */
const CATEGORIES = {
  saththu: { label: "සත්තු", en: "Saththu (Animals)", emoji: "🐄",
    sub: ["Harak (හරක්/එළදෙන)","Eluwo (එළුවෝ)","Kukullan (කුකුළන්)","Uro (ඌරු)","Malu (මාළු)","Meemas (මීමැස්සන්)"] },
  kama: { label: "සත්ව ආහාර", en: "Feed", emoji: "🌾",
    sub: ["Thanacola","Bada Iringu","Kukulu Kama","Vitamin / Supplements"] },
  nishpadana: { label: "නිෂ්පාදන", en: "Nishpadana (Produce)", emoji: "🥛",
    sub: ["Kiri (කිරි)","Biththara (බිත්තර)","Mee Pani (මී පැණි)","Pohora (පොහොර)"] }
};
const DISTRICTS = ["Colombo","Gampaha","Kalutara","Kandy","Matale","Nuwara Eliya","Galle","Matara",
  "Hambantota","Jaffna","Kilinochchi","Mannar","Vavuniya","Mullaitivu","Batticaloa","Ampara",
  "Trincomalee","Kurunegala","Puttalam","Anuradhapura","Polonnaruwa","Badulla","Monaragala",
  "Ratnapura","Kegalle"];
const CAT_EMOJI = { saththu:"🐄", kama:"🌾", nishpadana:"🥛" };

const CAT_LABEL_I18N = {
  saththu: { si: "සත්තු", en: "Animals", ta: "கால்நடைகள்" },
  kama:    { si: "සත්ව ආහාර", en: "Feed", ta: "தீவனம்" },
  nishpadana: { si: "නිෂ්පාදන", en: "Produce", ta: "விளைபொருள்" },
};

/* ============ i18n ============ */
const LANGS = ["si", "en", "ta"];
const LANG_LABEL = { si: "සිං", en: "EN", ta: "தமி" };
let lang = (localStorage.getItem("gp_lang") || "si");
if (!LANGS.includes(lang)) lang = "si";

const STRINGS = {
  brandName: { si: "ගොවි පොළ", en: "Govi Pola", ta: "கோவி போலா" },
  tagline: { si: "සත්තු • සත්ව ආහාර • නිෂ්පාදන", en: "Animals • Feed • Produce", ta: "கால்நடைகள் • தீவனம் • விளைபொருள்" },
  searchPlaceholder: { si: "සත්තු, සත්ව ආහාර, District එකෙන් හොයන්න...", en: "Search animals, feed, district...", ta: "விலங்கு, தீவனம், மாவட்டம் தேடுங்கள்..." },
  districtAll: { si: "සියලුම Districts", en: "All Districts", ta: "அனைத்து மாவட்டங்களும்" },
  districtLabel: { si: "District", en: "District", ta: "மாவட்டம்" },
  chipAll: { si: "සියල්ල", en: "All", ta: "அனைத்தும்" },
  loadingTitle: { si: "Load වෙනවා...", en: "Loading...", ta: "ஏற்றப்படுகிறது..." },
  loadingDesc: { si: "Ads download කරගන්නවා, පොඩ්ඩක් ඉන්න.", en: "Fetching ads, hang on a moment.", ta: "விளம்பரங்களை பெறுகிறோம், சிறிது பொறுங்கள்." },
  dbErrorTitle: { si: "Marketplace එකට connect වෙන්න බෑ", en: "Can't connect to marketplace", ta: "சந்தையுடன் இணைக்க முடியவில்லை" },
  dbErrorDesc: { si: "මේ view එකේදී shared ads access කරන්න බෑ. පස්සේ try කරන්න.", en: "Shared ads aren't reachable in this view. Please try again later.", ta: "இந்த பார்வையில் பகிரப்பட்ட விளம்பரங்களை அணுக முடியவில்லை. பின்னர் முயற்சிக்கவும்." },
  emptyBrowseTitle: { si: "Ads නෑ තාම", en: "No ads yet", ta: "இன்னும் விளம்பரங்கள் இல்லை" },
  emptyBrowseDesc: { si: "ඔයාගේ filter වලට ගැලපෙන ads නෑ — \"Ad Ekak Danna\" ගිහින් පලවෙනි ad එක දාන්න!", en: "Nothing matches your filters — go to \"Post Ad\" and add the first one!", ta: "உங்கள் வடிகட்டிகளுக்கு பொருந்தும் விளம்பரங்கள் இல்லை — \"விளம்பரம் இடு\" சென்று முதல் விளம்பரத்தை இடுங்கள்!" },
  resultsCount: { si: (n) => `${n} ads හම්බුනා`, en: (n) => `${n} ads found`, ta: (n) => `${n} விளம்பரங்கள் கிடைத்தன` },
  navBrowse: { si: "බලා ගන්න", en: "Browse", ta: "பார்வையிடு" },
  navPost: { si: "Ad දාන්න", en: "Post Ad", ta: "விளம்பரம் இடு" },
  navMine: { si: "මගේ Ads", en: "My Ads", ta: "என் விளம்பரங்கள்" },
  postCatLabel: { si: "මොකද්ද වර්ගය? (Category)", en: "What kind? (Category)", ta: "எந்த வகை? (பிரிவு)" },
  postSubLabel: { si: "විස්තරය තෝරන්න", en: "Pick a type", ta: "வகையைத் தேர்ந்தெடுக்கவும்" },
  postTitleLabel: { si: "Ad Title එක", en: "Ad title", ta: "விளம்பர தலைப்பு" },
  postTitlePhSaththu: { si: "උදා: නාඩන් එළදෙන, මාස 8ක්", en: "e.g. Nadan cow, 8 months", ta: "எ.கா: நாடன் பசு, 8 மாதங்கள்" },
  postTitlePhOther: { si: "උදා: තානකොළ මල් 50kg", en: "e.g. Thanakola feed 50kg", ta: "எ.கா: தானகோலா தீவனம் 50kg" },
  postAgeLabel: { si: "වයස", en: "Age", ta: "வயது" },
  postAgePh: { si: "උදා: අවුරුදු 2", en: "e.g. 2 years", ta: "எ.கா: 2 வருடம்" },
  postBreedLabel: { si: "Breed", en: "Breed", ta: "இனம்" },
  postBreedPh: { si: "උදා: Jersey", en: "e.g. Jersey", ta: "எ.கா: ஜெர்சி" },
  postWeightLabel: { si: "බර", en: "Weight", ta: "எடை" },
  postWeightPh: { si: "උදා: kg 250", en: "e.g. 250 kg", ta: "எ.கா: 250 kg" },
  postVaccLabel: { si: "Vaccine තත්ත්වය", en: "Vaccine status", ta: "தடுப்பூசி நிலை" },
  postVaccPh: { si: "උදා: සියල්ල දීලා", en: "e.g. Fully vaccinated", ta: "எ.கா: முழுவதும் செலுத்தப்பட்டது" },
  postQtyLabel: { si: "ප්‍රමාණය", en: "Quantity", ta: "அளவு" },
  postQtyPh: { si: "උදා: 50kg bags 10", en: "e.g. 10 x 50kg bags", ta: "எ.கா: 10 x 50kg பைகள்" },
  postPriceLabel: { si: "මිල (Rs.)", en: "Price (Rs.)", ta: "விலை (Rs.)" },
  postPricePh: { si: "උදා: 45000", en: "e.g. 45000", ta: "எ.கா: 45000" },
  postNegotiable: { si: "කථා කර ගත හැක (Negotiable)", en: "Negotiable", ta: "பேசி முடிவு செய்யலாம்" },
  postDistrictPick: { si: "තෝරන්න", en: "Select", ta: "தேர்ந்தெடுக்கவும்" },
  postCityLabel: { si: "City / ප්‍රදේශය", en: "City / Area", ta: "நகரம் / பகுதி" },
  postCityPh: { si: "උදා: කුරුණෑගල", en: "e.g. Kurunegala", ta: "எ.கா: குருணாகல்" },
  postDescLabel: { si: "විස්තර (Description)", en: "Description", ta: "விவரம்" },
  postDescPh: { si: "වැඩිපුර විස්තර මෙතන ලියන්න...", en: "Write more details here...", ta: "மேலும் விவரங்களை இங்கே எழுதுங்கள்..." },
  postPhotoLabel: { si: "ඡායාරූප (උපරිම 3)", en: "Photos (max 3)", ta: "புகைப்படங்கள் (அதிகபட்சம் 3)" },
  postPhotoHint: { si: "Photo 3-5ක් දාන එකෙන් buyers ලා ඉක්මනින් තීරණය කරගන්නවා.", en: "Adding 3-5 photos helps buyers decide faster.", ta: "3-5 புகைப்படங்கள் சேர்ப்பது வாங்குபவர்கள் விரைவாக முடிவெடுக்க உதவும்." },
  postNameLabel: { si: "ඔයාගේ නම", en: "Your name", ta: "உங்கள் பெயர்" },
  postNamePh: { si: "නම", en: "Name", ta: "பெயர்" },
  postPhoneLabel: { si: "දුරකථන අංකය", en: "Phone number", ta: "தொலைபேசி எண்" },
  publishBtn: { si: "📤 පළ කරන්න (Publish)", en: "📤 Publish", ta: "📤 வெளியிடு" },
  postCatPrompt: { si: "මුලින්ම category එකක් තෝරන්න", en: "Pick a category first", ta: "முதலில் ஒரு பிரிவைத் தேர்ந்தெடுக்கவும்" },
  dbUnavailablePost: { si: "⚠️ Marketplace එකට දැනට connect වෙන්න බැහැ.", en: "⚠️ Can't connect to the marketplace right now.", ta: "⚠️ தற்போது சந்தையுடன் இணைக்க முடியவில்லை." },
  waitPhotos: { si: "⏳ Photos upload වෙනකන් ඉන්න...", en: "⏳ Wait for photos to finish uploading...", ta: "⏳ புகைப்படங்கள் பதிவேற்றம் முடியும் வரை காத்திருக்கவும்..." },
  photosTooBig: { si: "⚠️ Photos ටික ලොකුයි — එකක් අයින් කරලා try කරන්න.", en: "⚠️ Photos are too large — remove one and try again.", ta: "⚠️ புகைப்படங்கள் பெரியவை — ஒன்றை நீக்கி முயற்சிக்கவும்." },
  publishing: { si: "පළ කරමින්...", en: "Publishing...", ta: "வெளியிடப்படுகிறது..." },
  published: { si: "✅ Ad එක පළ කළා!", en: "✅ Ad published!", ta: "✅ விளம்பரம் வெளியிடப்பட்டது!" },
  publishToast: { si: "Ad එක සාර්ථකව පළ කළා 🎉", en: "Ad published successfully 🎉", ta: "விளம்பரம் வெற்றிகரமாக வெளியிடப்பட்டது 🎉" },
  publishFailed: { si: "⚠️ Publish වුනේ නෑ — try again.", en: "⚠️ Publish failed — try again.", ta: "⚠️ வெளியிட முடியவில்லை — மீண்டும் முயற்சிக்கவும்." },
  connectFail: { si: "Marketplace එකට connect වෙලා නෑ.", en: "Not connected to the marketplace.", ta: "சந்தையுடன் இணைக்கப்படவில்லை." },
  authLoginTitle: { si: "Login වෙන්න", en: "Log in", ta: "உள்நுழையவும்" },
  authSignupTitle: { si: "Account එකක් හදන්න", en: "Create an account", ta: "கணக்கு உருவாக்கவும்" },
  authEmailLabel: { si: "Email ලිපිනය", en: "Email", ta: "மின்னஞ்சல்" },
  authPasswordLabel: { si: "Password එක", en: "Password", ta: "கடவுச்சொல்" },
  authLoginBtn: { si: "Login වෙන්න", en: "Log in", ta: "உள்நுழையவும்" },
  authSignupBtn: { si: "Account එක හදන්න", en: "Sign up", ta: "பதிவு செய்யவும்" },
  authSwitchToSignup: { si: "Account එකක් නෑ? අලුතින් හදන්න", en: "No account? Sign up", ta: "கணக்கு இல்லையா? பதிவு செய்யவும்" },
  authSwitchToLogin: { si: "දැනටමත් account එකක් තියෙනවද? Login වෙන්න", en: "Already have an account? Log in", ta: "ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையவும்" },
  authForgotPassword: { si: "Password එක අමතකද?", en: "Forgot password?", ta: "கடவுச்சொல் மறந்துவிட்டதா?" },
  authPostGateDesc: { si: "Ad එකක් දාන්න, මුලින්ම login වෙන්න හරි account එකක් හදාගන්න.", en: "Log in or create an account first to post an ad.", ta: "விளம்பரம் இட உள்நுழையவும் அல்லது கணக்கு உருவாக்கவும்." },
  authMineGateDesc: { si: "ඔයාගේ ads බලන්න, login වෙන්න හරි account එකක් හදාගන්න.", en: "Log in or create an account to see your ads.", ta: "உங்கள் விளம்பரங்களை பார்க்க உள்நுழையவும் அல்லது கணக்கு உருவாக்கவும்." },
  authVerifyBanner: { si: "ඔයාගේ email එක verify කරගන්න — email inbox එක check කරන්න.", en: "Please verify your email — check your inbox.", ta: "உங்கள் மின்னஞ்சலை உறுதிப்படுத்தவும் — inbox-ஐ சரிபார்க்கவும்." },
  authResendBtn: { si: "නැවත එවන්න", en: "Resend", ta: "மீண்டும் அனுப்பு" },
  authLogout: { si: "Logout", en: "Logout", ta: "வெளியேறு" },
  authLoggedOut: { si: "Logout වුනා.", en: "Logged out.", ta: "வெளியேறியது." },
  verifyEmailSent: { si: "✅ Verification email එක evwa — inbox check karanna.", en: "✅ Verification email sent — check your inbox.", ta: "✅ உறுதிப்படுத்தல் மின்னஞ்சல் அனுப்பப்பட்டது — inbox-ஐ சரிபார்க்கவும்." },
  resetSent: { si: "✅ Password reset email එක evwa.", en: "✅ Password reset email sent.", ta: "✅ கடவுச்சொல் மீட்டமைப்பு மின்னஞ்சல் அனுப்பப்பட்டது." },
  authErrGeneric: { si: "යමක් වැරදුනා, try again.", en: "Something went wrong, try again.", ta: "ஏதோ தவறு நடந்தது, மீண்டும் முயற்சிக்கவும்." },
  authErrInUse: { si: "මේ email එක already use වෙනවා — Login වෙන්න try කරන්න.", en: "This email is already in use — try logging in.", ta: "இந்த மின்னஞ்சல் ஏற்கனவே பயன்பாட்டில் உள்ளது — உள்நுழைய முயற்சிக்கவும்." },
  authErrInvalidEmail: { si: "Email ලිපිනය හරි නෑ.", en: "That email address isn't valid.", ta: "மின்னஞ்சல் முகவரி தவறானது." },
  authErrWeakPassword: { si: "Password එක අඩුම තරමේ අකුරු 6ක් ඕන.", en: "Password should be at least 6 characters.", ta: "கடவுச்சொல் குறைந்தது 6 எழுத்துக்கள் இருக்க வேண்டும்." },
  authErrWrongPassword: { si: "Email එක හරි password එක වැරදියි.", en: "Wrong email or password.", ta: "மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது." },
  authErrTooMany: { si: "Try ගොඩක් වුනා — පොඩ්ඩක් ඉඳලා try කරන්න.", en: "Too many attempts — wait a bit and try again.", ta: "பல முயற்சிகள் — சிறிது நேரம் காத்திருந்து முயற்சிக்கவும்." },
  authErrProviderOff: { si: "Email/Password login eka admin dan enable karala නෑ — Firebase console eken Authentication > Sign-in method > Email/Password enable karanna one.", en: "Email/Password sign-in isn't enabled yet — enable it in Firebase Console under Authentication > Sign-in method.", ta: "மின்னஞ்சல்/கடவுச்சொல் உள்நுழைவு இன்னும் இயக்கப்படவில்லை — Firebase Console-இல் இயக்கவும்." },
  authErrNetwork: { si: "Internet connection eka check karanna.", en: "Check your internet connection.", ta: "இணைய இணைப்பை சரிபார்க்கவும்." },
  mineSignedOutTitle: { si: "Sign in වෙලා නෑ", en: "Not signed in", ta: "உள்நுழையவில்லை" },
  mineSignedOutDesc: { si: "ඔයාගේ ads බලන්න, මේ artifact එකට sign in වෙන්න ඕන.", en: "Sign in to this artifact to see your own ads.", ta: "உங்கள் விளம்பரங்களை பார்க்க இந்த artifact-இல் உள்நுழையவும்." },
  mineHeading: { si: (n) => `ඔයා දාපු ads (${n})`, en: (n) => `Your ads (${n})`, ta: (n) => `நீங்கள் இட்ட விளம்பரங்கள் (${n})` },
  mineEmptyTitle: { si: "ඔයා තාම ad එකක් දාලා නෑ", en: "You haven't posted an ad yet", ta: "நீங்கள் இன்னும் விளம்பரம் இடவில்லை" },
  mineEmptyDesc: { si: "\"Ad Ekak Danna\" ගිහින් ඔයාගේ පළමු ad එක දාන්න!", en: "Go to \"Post Ad\" and add your first one!", ta: "\"விளம்பரம் இடு\" சென்று உங்கள் முதல் விளம்பரத்தை இடுங்கள்!" },
  mineDeleteBtn: { si: "🗑️ Ad එක අයින් කරන්න", en: "🗑️ Remove ad", ta: "🗑️ விளம்பரத்தை அகற்று" },
  mineDeleteConfirm: { si: "මේ ad එක delete කරන්නද?", en: "Delete this ad?", ta: "இந்த விளம்பரத்தை நீக்கவா?" },
  mineDeleted: { si: "Ad එක අයින් කළා.", en: "Ad removed.", ta: "விளம்பரம் அகற்றப்பட்டது." },
  mineDeleteFailed: { si: "Delete කරන්න බැරි වුනා.", en: "Couldn't delete it.", ta: "நீக்க முடியவில்லை." },
  detailCall: { si: "📞 කතා කරන්න", en: "📞 Call", ta: "📞 அழைக்கவும்" },
  detailWa: { si: "💬 WhatsApp", en: "💬 WhatsApp", ta: "💬 WhatsApp" },
  priceNegotiable: { si: "කථා කර ගත හැක (Negotiable)", en: "Negotiable", ta: "பேசி முடிவு செய்யலாம்" },
  priceNone: { si: "මිල සඳහන් නැත", en: "Price not listed", ta: "விலை குறிப்பிடப்படவில்லை" },
  kvAge: { si: "වයස", en: "Age", ta: "வயது" },
  kvBreed: { si: "Breed", en: "Breed", ta: "இனம்" },
  kvWeight: { si: "බර", en: "Weight", ta: "எடை" },
  kvVacc: { si: "Vaccine", en: "Vaccine", ta: "தடுப்பூசி" },
  kvQty: { si: "ප්‍රමාණය", en: "Quantity", ta: "அளவு" },
  kvLocation: { si: "Location", en: "Location", ta: "இடம்" },
  photoUploadUnavailable: { si: "Photo upload මේ view එකේදී ක්‍රියා නොකරයි.", en: "Photo upload doesn't work in this view.", ta: "இந்த பார்வையில் புகைப்பட பதிவேற்றம் இயங்காது." },
  photoUploadFailed: { si: "Photo upload වුනේ නැහැ, try again.", en: "Photo upload failed, try again.", ta: "புகைப்படம் பதிவேற்றம் தோல்வியடைந்தது, மீண்டும் முயற்சிக்கவும்." },
  waMessage: { si: (t) => `Ayubowan! Mama ${t} ගැන Govi Pola eken hoyaganne. Meka thama available da?`,
               en: (t) => `Hi! I found "${t}" on Govi Pola. Is it still available?`,
               ta: (t) => `வணக்கம்! Govi Pola-வில் "${t}" பார்த்தேன். இது இன்னும் கிடைக்குமா?` },
};
function t(key, ...args) {
  const entry = STRINGS[key];
  if (!entry) return key;
  const v = entry[lang] || entry.si;
  return typeof v === "function" ? v(...args) : v;
}
function catLabel(catKey) {
  const e = CAT_LABEL_I18N[catKey];
  return e ? (e[lang] || e.si) : catKey;
}

/* ============ State ============ */
let db = null, assets = null, fbAuth = null, authUser = null, authReady = false, myId = null;
let authMode = "login"; // "login" | "signup"
let authBusy = false, authError = null;
let listings = [];        // live snapshot
let dbReady = false, dbAvailable = null; // null = unknown yet
let currentView = "browse";
let filters = { cat: "all", district: "", q: "" };
let postState = { cat: null, sub: null, photos: [] }; // photos: [{id,url,localPreview}]
let filterPanelOpen = false;

const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => Array.from(el.querySelectorAll(sel));
const mainEl = $("#main");

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._tm);
  toast._tm = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ============ Theme ============ */
(function initTheme() {
  const saved = localStorage.getItem("gp_theme");
  if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
  $("#themeToggle").addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const mql = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let next;
    if (!cur) next = mql ? "light" : "dark";
    else next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("gp_theme", next); } catch(e) {}
  });
})();

/* ============ Language ============ */
function applyChrome() {
  $("#brandNameEl").textContent = t("brandName");
  $("#taglineEl").textContent = t("tagline");
  $("#navBrowseLbl").textContent = t("navBrowse");
  $("#navPostLbl").textContent = t("navPost");
  $("#navMineLbl").textContent = t("navMine");
  $("#langSelect").value = lang;
  document.documentElement.setAttribute("lang", lang);
}
$("#langSelect").addEventListener("change", (e) => {
  lang = LANGS.includes(e.target.value) ? e.target.value : "si";
  try { localStorage.setItem("gp_lang", lang); } catch(e) {}
  applyChrome();
  render();
});
applyChrome();

/* ============ Capability init (Firebase) ============ */
/*
 * FIREBASE_CONFIG — fill this in with your own project's config
 * (Firebase Console → Project settings → General → Your apps → SDK setup and configuration → Config).
 * Until this is filled in, the app runs in "no backend" mode: browsing/posting
 * won't save anywhere, and My Ads / photo upload will show a friendly notice.
 */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDGK0u1T26IiKL-cKJl_ETX9uGw3_OJE9I",
  authDomain: "govi-pola.firebaseapp.com",
  projectId: "govi-pola",
  storageBucket: "govi-pola.firebasestorage.app",
  messagingSenderId: "106442605173",
  appId: "1:106442605173:web:b8c78292fd167836d3ae3c",
};
const FIREBASE_CONFIGURED = FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";

async function initCapabilities() {
  if (FIREBASE_CONFIGURED && window.firebase) {
    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.firestore();
      fbAuth = firebase.auth();

      // Real accounts (email + password), not anonymous — lets people log
      // in on any device and keeps "My Ads" tied to a real identity.
      fbAuth.onAuthStateChanged((u) => {
        authUser = u;
        myId = u ? u.uid : null;
        authReady = true;
        render();
      });

      // No Firebase Storage (that needs the paid Blaze plan) — instead,
      // photos are compressed small and stored as base64 data URLs
      // directly inside the Firestore document. Keeps the same
      // {upload(blob)} shape the rest of the app already expects.
      assets = {
        upload: async (blob) => {
          const dataUrl = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          const id = "img_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);
          return { id, url: dataUrl };
        }
      };
    } catch (e) {
      console.error("Firebase init failed", e);
      db = null; assets = null; fbAuth = null; authReady = true;
    }
  } else {
    authReady = true;
  }
  dbAvailable = !!db;
  subscribeListings();
  render();
}

function subscribeListings() {
  if (!db) { dbReady = true; render(); return; }
  try {
    db.collection("listings").orderBy("createdAt", "desc").limit(300).onSnapshot(
      (snap) => {
        listings = snap.docs.filter(d => d.exists).map(d => ({ id: d.id, ...d.data() }));
        dbReady = true;
        render();
      },
      (err) => {
        console.error("listings snapshot error", err);
        dbReady = true;
        dbAvailable = false;
        render();
      }
    );
  } catch (e) {
    console.error(e);
    dbReady = true; dbAvailable = false; render();
  }
}

/* ============ Auth actions ============ */
function friendlyAuthError(e) {
  const code = e && e.code;
  const map = {
    "auth/email-already-in-use": "authErrInUse",
    "auth/invalid-email": "authErrInvalidEmail",
    "auth/weak-password": "authErrWeakPassword",
    "auth/wrong-password": "authErrWrongPassword",
    "auth/user-not-found": "authErrWrongPassword",
    "auth/invalid-credential": "authErrWrongPassword",
    "auth/too-many-requests": "authErrTooMany",
    "auth/operation-not-allowed": "authErrProviderOff",
    "auth/network-request-failed": "authErrNetwork",
  };
  return map[code] ? t(map[code]) : (e && e.message) || t("authErrGeneric");
}

async function doSignUp(email, password) {
  authBusy = true; authError = null; render();
  try {
    const cred = await fbAuth.createUserWithEmailAndPassword(email, password);
    await cred.user.sendEmailVerification();
    toast(t("verifyEmailSent"));
  } catch (e) {
    console.error(e); authError = friendlyAuthError(e);
  }
  authBusy = false; render();
}
async function doLogIn(email, password) {
  authBusy = true; authError = null; render();
  try {
    await fbAuth.signInWithEmailAndPassword(email, password);
  } catch (e) {
    console.error(e); authError = friendlyAuthError(e);
  }
  authBusy = false; render();
}
async function doLogOut() {
  try { await fbAuth.signOut(); toast(t("authLoggedOut")); } catch (e) { console.error(e); }
}
async function doResendVerification() {
  if (!authUser) return;
  try { await authUser.sendEmailVerification(); toast(t("verifyEmailSent")); }
  catch (e) { console.error(e); toast(friendlyAuthError(e)); }
}
async function doPasswordReset(email) {
  if (!email) { toast(t("authErrInvalidEmail")); return; }
  try { await fbAuth.sendPasswordResetEmail(email); toast(t("resetSent")); }
  catch (e) { console.error(e); toast(friendlyAuthError(e)); }
}

/* Renders the login/signup card. `context` is "post" or "mine", just to
 * pick which explanatory sentence to show above the form. */
function authGateHtml(context) {
  const isSignup = authMode === "signup";
  return `
    <div class="card">
      <h3 style="margin:0 0 6px;font-family:'Baloo 2',sans-serif;">${isSignup ? t('authSignupTitle') : t('authLoginTitle')}</h3>
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 16px;">${context === 'post' ? t('authPostGateDesc') : t('authMineGateDesc')}</p>
      <form id="authForm">
        <div class="field"><label>${t('authEmailLabel')}</label><input class="text-input" type="email" name="email" required></div>
        <div class="field"><label>${t('authPasswordLabel')}</label><input class="text-input" type="password" name="password" minlength="6" required></div>
        <button class="btn-primary" type="submit" ${authBusy ? 'disabled' : ''}>${authBusy ? '⏳' : (isSignup ? t('authSignupBtn') : t('authLoginBtn'))}</button>
        <div class="status-msg" id="authStatus">${authError ? '⚠️ ' + authError : ''}</div>
      </form>
      <button class="btn-ghost" id="authModeToggle" type="button" style="color:var(--green);">${isSignup ? t('authSwitchToLogin') : t('authSwitchToSignup')}</button>
      ${!isSignup ? `<button class="btn-ghost" id="authForgotBtn" type="button">${t('authForgotPassword')}</button>` : ''}
    </div>
  `;
}
function attachAuthGateEvents() {
  const form = $("#authForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const password = form.password.value;
    if (authMode === "signup") doSignUp(email, password);
    else doLogIn(email, password);
  });
  $("#authModeToggle").addEventListener("click", () => {
    authMode = authMode === "signup" ? "login" : "signup";
    authError = null;
    render();
  });
  const forgotBtn = $("#authForgotBtn");
  if (forgotBtn) forgotBtn.addEventListener("click", () => doPasswordReset(form.email.value.trim()));
}
function verifyBannerHtml() {
  if (!authUser || authUser.emailVerified) return "";
  return `
    <div class="card" style="display:flex;align-items:center;gap:10px;background:var(--gold-tint);border-color:var(--gold);">
      <span style="font-size:20px;">✉️</span>
      <div style="flex:1;font-size:12.5px;color:var(--ink);">${t('authVerifyBanner')}</div>
      <button class="chip" id="resendVerifyBtn" type="button" style="border-color:var(--gold-dark);color:var(--gold-dark);">${t('authResendBtn')}</button>
    </div>
  `;
}
function attachVerifyBannerEvents() {
  const btn = $("#resendVerifyBtn");
  if (btn) btn.addEventListener("click", doResendVerification);
}

/* ============ Helpers ============ */
function formatPrice(l) {
  if (l.negotiable) return t("priceNegotiable");
  if (l.price) return "Rs. " + Number(l.price).toLocaleString("en-LK");
  return t("priceNone");
}
/* Firebase Storage gives a full download URL up front, so images are
 * stored as URLs directly (unlike the claude.ai artifact version, which
 * stored an id and resolved it via /_blob/<id>). */
function imgSrc(url) { return url; }
function waLink(phone, title) {
  let p = (phone || "").replace(/[^0-9]/g, "");
  if (p.startsWith("0")) p = "94" + p.slice(1);
  else if (!p.startsWith("94")) p = "94" + p;
  const msg = encodeURIComponent(t("waMessage", title));
  return `https://wa.me/${p}?text=${msg}`;
}
function telLink(phone) { return "tel:" + (phone || "").replace(/[^0-9+]/g, ""); }

/* ============ Render root ============ */
function render() {
  $$(".nav-btn").forEach(b => b.classList.toggle("on", b.dataset.view === currentView));
  if (currentView === "browse") renderBrowse();
  else if (currentView === "post") renderPost();
  else if (currentView === "mine") renderMine();
}

$$(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    if (currentView === "post" && !postState.cat) { /* keep state across visits */ }
    render();
    window.scrollTo({top:0, behavior:"smooth"});
  });
});

/* ============ BROWSE VIEW ============ */
function filteredListings() {
  return listings.filter(l => {
    if (filters.cat !== "all" && l.category !== filters.cat) return false;
    if (filters.district && l.district !== filters.district) return false;
    if (filters.q) {
      const hay = [l.title, l.subcategory, l.description, l.breed].join(" ").toLowerCase();
      if (!hay.includes(filters.q.toLowerCase())) return false;
    }
    return true;
  });
}

function renderBrowse() {
  const list = filteredListings();
  let html = `
    <div class="search-row">
      <div class="search-box">
        <span>🔍</span>
        <input id="qInput" type="text" placeholder="${escapeAttr(t('searchPlaceholder'))}" value="${escapeAttr(filters.q)}">
      </div>
    </div>
    <div class="district-row">
      <span class="district-ic">📍</span>
      <select id="districtSel" class="district-select">
        <option value="">${t('districtAll')}</option>
        ${DISTRICTS.map(d => `<option value="${d}" ${filters.district===d?'selected':''}>${d}</option>`).join("")}
      </select>
    </div>
    <div class="chip-row" id="catChips">
      <div class="chip ${filters.cat==='all'?'on':''}" data-c="all">${t('chipAll')}</div>
      ${Object.keys(CATEGORIES).map(k => `<div class="chip ${filters.cat===k?'on':''}" data-c="${k}">${CATEGORIES[k].emoji} ${catLabel(k)}</div>`).join("")}
    </div>
  `;

  if (!dbReady) {
    html += `<div class="empty"><div class="big">⏳</div><h3>${t('loadingTitle')}</h3><p>${t('loadingDesc')}</p></div>`;
  } else if (dbAvailable === false) {
    html += `<div class="empty"><div class="big">⚠️</div><h3>${t('dbErrorTitle')}</h3><p>${t('dbErrorDesc')}</p></div>`;
  } else if (list.length === 0) {
    html += `<div class="empty"><div class="big">🌱</div><h3>${t('emptyBrowseTitle')}</h3><p>${t('emptyBrowseDesc')}</p></div>`;
  } else {
    html += `<div class="section-label">${t('resultsCount', list.length)}</div>`;
    html += list.map(l => listingCardHtml(l)).join("");
  }

  mainEl.innerHTML = html;

  $("#qInput").addEventListener("input", e => { filters.q = e.target.value; renderBrowse(); });
  $("#qInput").focus({preventScroll:true});
  // restore cursor position after re-render
  const qi = $("#qInput"); if (qi) { const v = qi.value; qi.value=""; qi.value=v; }
  const distSel = $("#districtSel");
  if (distSel) distSel.addEventListener("change", e => { filters.district = e.target.value; renderBrowse(); });
  $$("#catChips .chip").forEach(c => c.addEventListener("click", () => { filters.cat = c.dataset.c; renderBrowse(); }));
  $$(".listing").forEach(el => el.addEventListener("click", () => openDetail(el.dataset.id)));
}

function listingCardHtml(l) {
  const thumb = (l.images && l.images[0]) ? `<img class="thumb" src="${imgSrc(l.images[0])}" alt="">` : `<div class="thumb">${CAT_EMOJI[l.category]||"📦"}</div>`;
  return `
    <div class="listing" data-c="${l.category}" data-id="${l.id}">
      ${thumb}
      <div class="info">
        <p class="title">${escapeHtml(l.title)}</p>
        <p class="meta">${escapeHtml(l.subcategory||"")} ${l.district ? "• " + escapeHtml(l.district) : ""}</p>
        <p class="price">${formatPrice(l)}</p>
        <span class="badge">${CAT_EMOJI[l.category]||""} ${catLabel(l.category) || ""}</span>
      </div>
    </div>
  `;
}

/* ============ DETAIL SHEET ============ */
function openDetail(id) {
  const l = listings.find(x => x.id === id);
  if (!l) return;
  const photos = (l.images && l.images.length)
    ? `<div class="detail-photos">${l.images.map(i=>`<img src="${imgSrc(i)}" alt="">`).join("")}</div>`
    : `<div class="ph-empty">${CAT_EMOJI[l.category]||"📦"}</div>`;

  let kv = "";
  if (l.category === "saththu") {
    if (l.age) kv += kvBox(t("kvAge"), l.age);
    if (l.breed) kv += kvBox(t("kvBreed"), l.breed);
    if (l.weight) kv += kvBox(t("kvWeight"), l.weight);
    if (l.vaccinated) kv += kvBox(t("kvVacc"), l.vaccinated);
  } else {
    if (l.quantity) kv += kvBox(t("kvQty"), l.quantity);
  }
  if (l.district) kv += kvBox(t("kvLocation"), l.district + (l.city ? ", "+l.city : ""));

  $("#detailSheet").innerHTML = `
    <button class="close-x" id="closeDetail">✕</button>
    <div class="sheet-handle"></div>
    ${photos}
    <h2 class="detail-title">${escapeHtml(l.title)}</h2>
    <div class="detail-price">${formatPrice(l)}</div>
    ${kv ? `<div class="kv-grid">${kv}</div>` : ""}
    ${l.description ? `<p class="detail-desc">${escapeHtml(l.description)}</p>` : ""}
    <div class="contact-row">
      <button class="contact-btn call" id="callBtn">${t('detailCall')}</button>
      <button class="contact-btn wa" id="waBtn">${t('detailWa')}</button>
    </div>
  `;
  $("#detailOverlay").classList.add("open");
  $("#closeDetail").addEventListener("click", closeDetail);
  $("#detailOverlay").addEventListener("click", (e) => { if (e.target.id === "detailOverlay") closeDetail(); });
  $("#callBtn").addEventListener("click", () => window.open(telLink(l.contactPhone), "_self"));
  $("#waBtn").addEventListener("click", () => window.open(waLink(l.contactPhone, l.title), "_blank"));
}
function kvBox(k,v) { return `<div class="kv"><div class="k">${k}</div><div class="v">${escapeHtml(String(v))}</div></div>`; }
function closeDetail() { $("#detailOverlay").classList.remove("open"); }

/* ============ POST VIEW ============ */
function renderPost() {
  if (!authReady) {
    mainEl.innerHTML = `<div class="empty"><div class="big">⏳</div><h3>${t('loadingTitle')}</h3></div>`;
    return;
  }
  if (!authUser) {
    mainEl.innerHTML = authGateHtml("post");
    attachAuthGateEvents();
    return;
  }
  const cat = postState.cat;
  const catData = cat ? CATEGORIES[cat] : null;
  mainEl.innerHTML = `
    ${verifyBannerHtml()}
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div style="font-size:12.5px;color:var(--ink-soft);">${escapeHtml(authUser.email || "")}</div>
        <button class="chip" id="logoutBtnPost" type="button">${t('authLogout')}</button>
      </div>
      <div class="field"><label>${t('postCatLabel')}</label></div>
      <div class="cat-pick" id="catPick">
        ${Object.keys(CATEGORIES).map(k => `
          <button class="${postState.cat===k?'sel':''}" data-c="${k}" type="button">
            <span class="em">${CATEGORIES[k].emoji}</span>${catLabel(k)}
          </button>`).join("")}
      </div>

      ${catData ? `
      <div class="field">
        <label>${t('postSubLabel')}</label>
        <div class="sub-chip-row" id="subChips">
          ${catData.sub.map(s => `<div class="sub-chip ${postState.sub===s?'sel':''}" data-s="${escapeAttr(s)}">${s}</div>`).join("")}
        </div>
      </div>

      <form id="postForm">
        <div class="field">
          <label>${t('postTitleLabel')}</label>
          <input class="text-input" name="title" placeholder="${escapeAttr(cat==='saththu' ? t('postTitlePhSaththu') : t('postTitlePhOther'))}" required>
        </div>

        ${cat === 'saththu' ? `
        <div class="row2">
          <div class="field"><label>${t('postAgeLabel')}</label><input class="text-input" name="age" placeholder="${escapeAttr(t('postAgePh'))}"></div>
          <div class="field"><label>${t('postBreedLabel')}</label><input class="text-input" name="breed" placeholder="${escapeAttr(t('postBreedPh'))}"></div>
        </div>
        <div class="row2">
          <div class="field"><label>${t('postWeightLabel')}</label><input class="text-input" name="weight" placeholder="${escapeAttr(t('postWeightPh'))}"></div>
          <div class="field"><label>${t('postVaccLabel')}</label><input class="text-input" name="vaccinated" placeholder="${escapeAttr(t('postVaccPh'))}"></div>
        </div>
        ` : `
        <div class="field"><label>${t('postQtyLabel')}</label><input class="text-input" name="quantity" placeholder="${escapeAttr(t('postQtyPh'))}"></div>
        `}

        <div class="field">
          <label>${t('postPriceLabel')}</label>
          <input class="text-input" name="price" type="number" min="0" placeholder="${escapeAttr(t('postPricePh'))}">
          <div class="neg-row"><input type="checkbox" name="negotiable" id="negChk"><label for="negChk" style="margin:0;font-weight:500;">${t('postNegotiable')}</label></div>
        </div>

        <div class="row2">
          <div class="field">
            <label>${t('districtLabel')}</label>
            <select name="district" required>
              <option value="">${t('postDistrictPick')}</option>
              ${DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join("")}
            </select>
          </div>
          <div class="field"><label>${t('postCityLabel')}</label><input class="text-input" name="city" placeholder="${escapeAttr(t('postCityPh'))}"></div>
        </div>

        <div class="field">
          <label>${t('postDescLabel')}</label>
          <textarea name="description" rows="3" placeholder="${escapeAttr(t('postDescPh'))}"></textarea>
        </div>

        <div class="field">
          <label>${t('postPhotoLabel')}</label>
          <div class="photo-row" id="photoRow"></div>
          <input type="file" id="photoInput" accept="image/*" style="display:none" multiple>
          <div class="hint">${t('postPhotoHint')}</div>
        </div>

        <div class="row2">
          <div class="field"><label>${t('postNameLabel')}</label><input class="text-input" name="contactName" placeholder="${escapeAttr(t('postNamePh'))}"></div>
          <div class="field"><label>${t('postPhoneLabel')}</label><input class="text-input" name="contactPhone" type="tel" placeholder="07XXXXXXXX" required></div>
        </div>

        <button class="btn-primary" type="submit" id="submitBtn">${t('publishBtn')}</button>
        <div class="status-msg" id="postStatus">${dbAvailable===false ? t('dbUnavailablePost') : ''}</div>
      </form>
      ` : `<div class="empty"><div class="big">👆</div><p>${t('postCatPrompt')}</p></div>`}
    </div>
  `;

  $$("#catPick button").forEach(b => b.addEventListener("click", () => {
    postState.cat = b.dataset.c; postState.sub = null; postState.photos = [];
    renderPost();
  }));

  attachVerifyBannerEvents();
  const logoutBtn = $("#logoutBtnPost");
  if (logoutBtn) logoutBtn.addEventListener("click", doLogOut);

  if (!catData) return;

  $$("#subChips .sub-chip").forEach(c => c.addEventListener("click", () => {
    postState.sub = c.dataset.s;
    $$("#subChips .sub-chip").forEach(x => x.classList.remove("sel"));
    c.classList.add("sel");
  }));

  renderPhotoRow();
  $("#photoInput").addEventListener("change", handlePhotoSelect);

  $("#postForm").addEventListener("submit", submitListing);
}

function renderPhotoRow() {
  const row = $("#photoRow");
  if (!row) return;
  let html = postState.photos.map((p, idx) => `
    <div class="photo-wrap">
      <img class="photo-thumb" src="${p.previewUrl}" alt="">
      <div class="rm" data-idx="${idx}">✕</div>
    </div>
  `).join("");
  if (postState.photos.length < 3) {
    html += `<div class="photo-slot" id="addPhotoSlot">${postState.photos.some(p=>p.uploading) ? '⏳' : '+'}</div>`;
  }
  row.innerHTML = html;
  const slot = $("#addPhotoSlot");
  if (slot) slot.addEventListener("click", () => $("#photoInput").click());
  $$(".photo-wrap .rm", row).forEach(btn => btn.addEventListener("click", (e) => {
    e.stopPropagation();
    postState.photos.splice(Number(btn.dataset.idx), 1);
    renderPhotoRow();
  }));
}

async function resizeImage(file, maxDim = 640) {
  const bitmap = await createImageBitmap(file);
  let { width, height } = bitmap;
  if (width > maxDim || height > maxDim) {
    const scale = maxDim / Math.max(width, height);
    width = Math.round(width * scale); height = Math.round(height * scale);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width; canvas.height = height;
  canvas.getContext("2d").drawImage(bitmap, 0, 0, width, height);
  // Kept small (and at 0.55 quality) since photos are stored as base64
  // text inside the Firestore document, which has a 1MB total size cap.
  return new Promise(res => canvas.toBlob(b => res(b), "image/jpeg", 0.55));
}

async function handlePhotoSelect(e) {
  const files = Array.from(e.target.files || []).slice(0, 3 - postState.photos.length);
  e.target.value = "";
  for (const file of files) {
    const localIdx = postState.photos.length;
    const previewUrl = URL.createObjectURL(file);
    postState.photos.push({ uploading: true, previewUrl });
    renderPhotoRow();
    try {
      const blob = await resizeImage(file);
      if (!assets) { toast(t("photoUploadUnavailable")); postState.photos.splice(localIdx,1); renderPhotoRow(); continue; }
      const result = await assets.upload(blob);
      const item = postState.photos.find(p => p.previewUrl === previewUrl);
      if (item) { item.id = result.id; item.url = result.url; item.uploading = false; }
      renderPhotoRow();
    } catch (err) {
      console.error(err);
      toast(t("photoUploadFailed"));
      postState.photos = postState.photos.filter(p => p.previewUrl !== previewUrl);
      renderPhotoRow();
    }
  }
}

async function submitListing(e) {
  e.preventDefault();
  if (!db) { toast(t("connectFail")); return; }
  if (!authUser) { toast(t("authErrGeneric")); return; }
  const form = e.target;
  const fd = new FormData(form);
  const btn = $("#submitBtn");
  const statusEl = $("#postStatus");

  if (postState.photos.some(p => p.uploading)) { statusEl.textContent = t("waitPhotos"); return; }

  // Safety net: Firestore documents cap out at 1MB. Photos are base64 text
  // inside this doc, so keep a margin for the other fields.
  const photoBytes = postState.photos.reduce((sum, p) => sum + (p.url ? p.url.length : 0), 0);
  if (photoBytes > 850000) {
    statusEl.textContent = t("photosTooBig");
    return;
  }

  btn.disabled = true; statusEl.textContent = t("publishing");

  const data = {
    category: postState.cat,
    subcategory: postState.sub || "",
    title: fd.get("title") || "",
    price: fd.get("price") ? Number(fd.get("price")) : null,
    negotiable: fd.get("negotiable") === "on",
    district: fd.get("district") || "",
    city: fd.get("city") || "",
    description: fd.get("description") || "",
    contactName: fd.get("contactName") || "",
    contactPhone: fd.get("contactPhone") || "",
    images: postState.photos.filter(p => p.url).map(p => p.url),
    createdAt: Date.now(),
    ownerId: myId || null,
  };
  if (postState.cat === "saththu") {
    data.age = fd.get("age") || "";
    data.breed = fd.get("breed") || "";
    data.weight = fd.get("weight") || "";
    data.vaccinated = fd.get("vaccinated") || "";
  } else {
    data.quantity = fd.get("quantity") || "";
  }

  try {
    await db.collection("listings").add(data);
    statusEl.textContent = t("published");
    toast(t("publishToast"));
    postState = { cat: null, sub: null, photos: [] };
    setTimeout(() => { currentView = "browse"; render(); window.scrollTo({top:0,behavior:"smooth"}); }, 500);
  } catch (err) {
    console.error(err);
    statusEl.textContent = t("publishFailed");
    btn.disabled = false;
  }
}

/* ============ MY ADS VIEW ============ */
function renderMine() {
  if (!authReady) {
    mainEl.innerHTML = `<div class="empty"><div class="big">⏳</div><h3>${t('loadingTitle')}</h3></div>`;
    return;
  }
  if (!authUser) {
    mainEl.innerHTML = authGateHtml("mine");
    attachAuthGateEvents();
    return;
  }
  const mine = listings.filter(l => l.ownerId && l.ownerId === myId);
  let html = verifyBannerHtml();
  html += `
    <div class="card" style="display:flex;justify-content:space-between;align-items:center;">
      <div style="font-size:12.5px;color:var(--ink-soft);">${escapeHtml(authUser.email || "")}</div>
      <button class="chip" id="logoutBtnMine" type="button">${t('authLogout')}</button>
    </div>
    <div class="section-label">${t('mineHeading', mine.length)}</div>`;
  if (!dbReady) {
    html += `<div class="empty"><div class="big">⏳</div><h3>${t('loadingTitle')}</h3></div>`;
  } else if (mine.length === 0) {
    html += `<div class="empty"><div class="big">📭</div><h3>${t('mineEmptyTitle')}</h3><p>${t('mineEmptyDesc')}</p></div>`;
  } else {
    html += mine.map(l => `
      <div class="listing" data-c="${l.category}" data-id="${l.id}" style="cursor:default;">
        ${(l.images && l.images[0]) ? `<img class="thumb" src="${imgSrc(l.images[0])}" alt="">` : `<div class="thumb">${CAT_EMOJI[l.category]||"📦"}</div>`}
        <div class="info">
          <p class="title">${escapeHtml(l.title)}</p>
          <p class="meta">${escapeHtml(l.subcategory||"")} ${l.district ? "• " + escapeHtml(l.district) : ""}</p>
          <p class="price">${formatPrice(l)}</p>
          <button class="btn-ghost" style="margin-top:8px;width:auto;padding:7px 14px;" data-del="${l.id}">${t('mineDeleteBtn')}</button>
        </div>
      </div>
    `).join("");
  }
  mainEl.innerHTML = html;
  attachVerifyBannerEvents();
  const logoutBtn = $("#logoutBtnMine");
  if (logoutBtn) logoutBtn.addEventListener("click", doLogOut);
  $$("[data-del]").forEach(btn => btn.addEventListener("click", async (e) => {
    e.stopPropagation();
    const id = btn.dataset.del;
    if (!confirm(t('mineDeleteConfirm'))) return;
    try { await db.collection("listings").doc(id).delete(); toast(t('mineDeleted')); }
    catch (err) { console.error(err); toast(t('mineDeleteFailed')); }
  }));
}

/* ============ Utils ============ */
function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}
function escapeAttr(str) { return escapeHtml(str); }

/* ============ Boot ============ */
render();
initCapabilities();
