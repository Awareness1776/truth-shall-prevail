import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import capImg from "@/assets/product-cap.jpg";
import mugImg from "@/assets/product-mug.jpg";
import beanieImg from "@/assets/product-beanie.jpg";
import tee2Img from "@/assets/product-tee2.jpg";
import hoodie2Img from "@/assets/product-hoodie2.jpg";
import patchImg from "@/assets/product-patch.jpg";
import yardSignImg from "@/assets/product-yardsign.jpg";
import bottleImg from "@/assets/product-bottle.jpg";
import bottle2Img from "@/assets/product-bottle2.jpg";
import bottle3Img from "@/assets/product-bottle3.jpg";
import bottle4Img from "@/assets/product-bottle4.jpg";
import bottle5Img from "@/assets/product-bottle5.jpg";
import shakerImg from "@/assets/product-shaker.jpg";
import decalImg from "@/assets/product-decal.jpg";
import mug2Img from "@/assets/product-mug2.jpg";
import mug3Img from "@/assets/product-mug3.jpg";
import mug4Img from "@/assets/product-mug4.jpg";
import mug5Img from "@/assets/product-mug5.jpg";
import mug6Img from "@/assets/product-mug6.jpg";
import hoodie3Img from "@/assets/product-hoodie3.jpg";
import hoodie4Img from "@/assets/product-hoodie4.jpg";
import hoodie5Img from "@/assets/product-hoodie5.jpg";
import hoodie6Img from "@/assets/product-hoodie6.jpg";
import tee3Img from "@/assets/product-tee3.jpg";
import tee4Img from "@/assets/product-tee4.jpg";
import tee5Img from "@/assets/product-tee5.jpg";
import tee6Img from "@/assets/product-tee6.jpg";
import tank1Img from "@/assets/product-tank1.jpg";
import tank2Img from "@/assets/product-tank2.jpg";
import tank3Img from "@/assets/product-tank3.jpg";
import tank4Img from "@/assets/product-tank4.jpg";
import tank5Img from "@/assets/product-tank5.jpg";
import tank6Img from "@/assets/product-tank6.jpg";
import bannerHadEnoughImg from "@/assets/product-banner-hadEnough.jpg";
import bannerTakeBackImg from "@/assets/product-banner-takeBack.jpg";
import bannerParasitesImg from "@/assets/product-banner-parasites.jpg";
import bannerComingImg from "@/assets/product-banner-coming.jpg";
import bannerOurRulesImg from "@/assets/product-banner-ourRules.jpg";
import bannerDrainImg from "@/assets/product-banner-drain.jpg";
import teeParasitesImg from "@/assets/product-tee-parasites.jpg";
import teeTakebackImg from "@/assets/product-tee-takeback.jpg";
import teeDrainImg from "@/assets/product-tee-drain.jpg";
import hoodieComingImg from "@/assets/product-hoodie-coming.jpg";
import hoodieParasitesImg from "@/assets/product-hoodie-parasites.jpg";
import hoodieOurRulesImg from "@/assets/product-hoodie-ourrules.jpg";
import tankDrainImg from "@/assets/product-tank-drain.jpg";
import tankTakebackImg from "@/assets/product-tank-takeback.jpg";
import tankComingImg from "@/assets/product-tank-coming.jpg";
import stickerReleaseFilesImg from "@/assets/product-sticker-release-files.jpg";
import stickerAboveLawImg from "@/assets/product-sticker-above-law.jpg";
import stickerClientListImg from "@/assets/product-sticker-client-list.jpg";
import stickerProtectChildrenImg from "@/assets/product-sticker-protect-children.jpg";
import bannerReleaseNamesImg from "@/assets/product-banner-release-names.jpg";
import bannerCongressKnewImg from "@/assets/product-banner-congress-knew.jpg";
import teeReleaseFilesImg from "@/assets/product-tee-release-files.jpg";
import teeAboveLawImg from "@/assets/product-tee-above-law.jpg";
import hoodieClientListImg from "@/assets/product-hoodie-client-list.jpg";
import hoodieProtectChildrenImg from "@/assets/product-hoodie-protect-children.jpg";
import capEnoughImg from "@/assets/product-cap-enough.jpg";
import capAccountabilityImg from "@/assets/product-cap-accountability.jpg";
import capProtectImg from "@/assets/product-cap-protect.jpg";
import capReleaseImg from "@/assets/product-cap-release.jpg";
import capVeteranImg from "@/assets/product-cap-veteran.jpg";
import beanieAwarenessImg from "@/assets/product-beanie-awareness.jpg";
import bannerAccountabilityImg from "@/assets/product-banner-accountability.jpg";
import bannerProtectImg from "@/assets/product-banner-protect.jpg";
import bannerVeteransImg from "@/assets/product-banner-veterans.jpg";
import bannerSilenceImg from "@/assets/product-banner-silence.jpg";

export type Category =
  | "all"
  | "apparel"
  | "tank-tops"
  | "headwear"
  | "accessories"
  
  | "mugs"
  | "drinkware"
  | "march-banners"
  | "car-stickers";

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  cutoutImage?: string;
  tagline: string;
  badge: string | null;
  category: Category;
  colors: ColorOption[];
  sizes?: string[];
  description?: string;
}

const APPAREL_COLORS: ColorOption[] = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#F5F5F5" },
  { name: "Charcoal", hex: "#36454F" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Olive", hex: "#556B2F" },
  { name: "Crimson Red", hex: "#DC143C" },
  { name: "Royal Blue", hex: "#1E40AF" },
  { name: "Burgundy", hex: "#800020" },
  { name: "Forest Green", hex: "#228B22" },
];

const TANK_COLORS: ColorOption[] = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#F5F5F5" },
  { name: "Gray", hex: "#808080" },
  { name: "Crimson Red", hex: "#DC143C" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Royal Blue", hex: "#1E40AF" },
  { name: "Burnt Orange", hex: "#CC5500" },
  { name: "Forest Green", hex: "#228B22" },
];

const MUG_COLORS: ColorOption[] = [
  { name: "White", hex: "#F5F5F5" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Crimson Red", hex: "#DC143C" },
  { name: "Royal Blue", hex: "#1E40AF" },
  { name: "Hunter Green", hex: "#355E3B" },
];

const BOTTLE_COLORS: ColorOption[] = [
  { name: "Stainless", hex: "#C0C0C0" },
  { name: "Matte Black", hex: "#1a1a1a" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Crimson Red", hex: "#DC143C" },
  { name: "Royal Blue", hex: "#1E40AF" },
  { name: "Olive Drab", hex: "#556B2F" },
];

const CASE_COLORS: ColorOption[] = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Clear", hex: "#E8E8E8" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Crimson Red", hex: "#DC143C" },
  { name: "Royal Blue", hex: "#1E40AF" },
  { name: "Forest Green", hex: "#228B22" },
];

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const TANK_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export const products: Product[] = [
  // T-Shirts (8)
  {
    id: "tee-76-mark",
    name: '"76" Brand Mark Tee',
    price: "$59.99",
    image: tshirtImg,
    tagline: "Awakened · Est. 1776",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The iconic 76 mark in distressed gold on premium black heavyweight cotton. AWAKENED · EST. 1776 — the brand identity tee. Three stars. One mission.",
  },
  {
    id: "tee-awakened-collegiate",
    name: '"Awakened 1776" Collegiate Tee',
    price: "$59.99",
    image: teeParasitesImg,
    tagline: "The Classic — Arched Logo",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Arched AWAKENED text with 1776 in red below on premium black cotton. The collegiate-style brand identity tee. Clean, bold, unmistakable.",
  },
  {
    id: "tee-a-stamp",
    name: '"A" Stamp Mark Tee',
    price: "$59.99",
    image: teeTakebackImg,
    tagline: "The Spirit Lives On · 1776",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The signature 'A' stamp block logo in gold with bordered frame on premium black cotton. AWAKENED — THE SPIRIT LIVES ON · 1776. Heritage brand identity.",
  },
  {
    id: "tee-truth-prevail",
    name: '"Truth Shall Prevail" Tee',
    price: "$59.99",
    image: tee3Img,
    tagline: "The Motto — Gold On Black",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Three gold stars crown our core motto: TRUTH SHALL PREVAIL. AWAKENED 1776 brand mark below. The signature motto tee.",
  },
  {
    id: "tee-simple-sovereign",
    name: '"Simple. Sovereign. Undefeated." Tee',
    price: "$59.99",
    image: tee4Img,
    tagline: "Three Words — One Identity",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "SIMPLE. SOVEREIGN. UNDEFEATED. in bold cream with AWAKENED 1776 brand below. Premium black cotton. The brand values, worn with conviction.",
  },
  {
    id: "tee-born-to-soar",
    name: '"Born To Soar, Not To Bow" Tee',
    price: "$59.99",
    image: teeDrainImg,
    tagline: "The Eagle Rises — Awakened 1776",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Eagle silhouette with BORN TO SOAR NOT TO BOW in gold and white. AWAKENED 1776 brand mark. For those who rise above.",
  },
  {
    id: "tee-freedom-never-given",
    name: '"Freedom Was Never Given" Tee',
    price: "$59.99",
    image: tee6Img,
    tagline: "Declared. Defended. Passed Down.",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "FREEDOM WAS NEVER GIVEN — IT WAS DECLARED, DEFENDED, AND PASSED DOWN. AWAKENED 1776 brand stamp. The declaration tee.",
  },
  {
    id: "tee-spirit-independence",
    name: '"Spirit of Independence" Tee',
    price: "$59.99",
    image: tee5Img,
    tagline: "Est. In The Spirit Of Independence",
    badge: "FAN FAVORITE",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "EST. IN THE SPIRIT OF INDEPENDENCE — AWAKENED 1776 in bold varsity gold on premium black cotton. The heritage pride tee.",
  },
  // Hoodies (7)
  {
    id: "hoodie-76-mark",
    name: '"76" Brand Mark Hoodie',
    price: "$109.99",
    image: hoodieImg,
    tagline: "The Iconic 76 — Gold On Black",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Massive gold distressed 76 with AWAKENED · EST. ★ 1776 on jet black heavyweight fleece. The brand flagship hoodie.",
  },
  {
    id: "hoodie-awakened-collegiate",
    name: '"Awakened 1776" Collegiate Hoodie',
    price: "$109.99",
    image: hoodie2Img,
    tagline: "The Arched Classic — Cream & Red",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Arched AWAKENED in cream with 1776 in red on premium black heavyweight fleece. The collegiate brand identity hoodie. Double-lined hood, metal grommets.",
  },
  {
    id: "hoodie-a-stamp",
    name: '"A" Stamp Mark Hoodie',
    price: "$109.99",
    image: hoodie3Img,
    tagline: "The Spirit Lives On · Gold Stamp",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The gold 'A' stamp block logo with decorative border on jet black heavyweight fleece. AWAKENED — 1776 · THE SPIRIT LIVES ON. Heritage luxury.",
  },
  {
    id: "hoodie-stamped-liberty",
    name: '"Stamped In The Name Of Liberty" Hoodie',
    price: "$109.99",
    image: hoodie4Img,
    tagline: "Liberty Brand — Gold Print",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "STAMPED IN THE NAME OF LIBERTY in bold gold with AWAKENED 1776 brand below with star accents. Premium black fleece. The liberty declaration hoodie.",
  },
  {
    id: "hoodie-eagle-storm",
    name: '"The Eagle & The Storm" Hoodie',
    price: "$109.99",
    image: hoodieParasitesImg,
    tagline: "Rise Above It — Awakened 1776",
    badge: "NEW",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "THE EAGLE DOES NOT FIGHT THE STORM — IT RISES ABOVE IT. Eagle graphic with AWAKENED 1776 brand mark. The patriot's hoodie.",
  },
  {
    id: "hoodie-heritage-monogram",
    name: '"Heritage Monogram" Hoodie',
    price: "$109.99",
    image: hoodieOurRulesImg,
    tagline: "EST. MDCCLXXVI · United States",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The 'A' monogram with EST. MDCCLXXVI · UNITED STATES above, AWAKENED 1776 below in cream and gold. Heritage brand identity. Premium black fleece.",
  },
  {
    id: "hoodie-awaken-everything",
    name: '"Awaken Everything" Hoodie',
    price: "$109.99",
    image: hoodieComingImg,
    tagline: "The Campaign — Fire & Gold",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "AWAKEN EVERYTHING in fire gradient text on jet black heavyweight fleece. AWAKENED 1776 brand on pocket. The campaign call to action.",
  },
  // Tank Tops (6)
  {
    id: "tank-76-mark",
    name: '"76" Brand Mark Tank',
    price: "$49.99",
    image: tank1Img,
    tagline: "The Iconic 76 — Gym Ready",
    badge: "NEW",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Gold distressed 76 with AWAKENED · EST. ★ 1776 on black athletic tank. The brand identity — gym-ready, march-ready.",
  },
  {
    id: "tank-awakened-collegiate",
    name: '"Awakened 1776" Collegiate Tank',
    price: "$49.99",
    image: tank2Img,
    tagline: "The Arched Logo — Athletic Fit",
    badge: "BESTSELLER",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Arched AWAKENED with 1776 in red on black athletic tank. Collegiate brand identity. Moisture-wicking, breathable.",
  },
  {
    id: "tank-truth-prevail",
    name: '"Truth Shall Prevail" Tank',
    price: "$49.99",
    image: tankDrainImg,
    tagline: "The Motto — Gold Statement",
    badge: "🔥 HOT",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "TR★TH SHALL PREVAIL in bold gold with star replacing the U. AWAKENED 1776 brand below. The motto tank — gym-ready, march-ready.",
  },
  {
    id: "tank-a-stamp",
    name: '"A" Stamp Mark Tank',
    price: "$49.99",
    image: tankTakebackImg,
    tagline: "The Spirit Lives On · Gold",
    badge: "NEW DROP",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Gold 'A' stamp logo in bordered frame with AWAKENED — THE SPIRIT LIVES ON · 1776. Heritage brand tank. Athletic fit.",
  },
  {
    id: "tank-born-to-soar",
    name: '"Born To Soar" Tank',
    price: "$49.99",
    image: tankComingImg,
    tagline: "The Eagle — Awakened 1776",
    badge: "LIMITED",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "BORN TO SOAR NOT TO BOW with golden eagle graphic. AWAKENED 1776 brand mark. The patriot's gym tank.",
  },
  {
    id: "tank-simple-sovereign",
    name: '"Simple. Sovereign. Undefeated." Tank',
    price: "$49.99",
    image: tank6Img,
    tagline: "Brand Values — Worn Bold",
    badge: "FAN FAVORITE",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Eagle wing graphic with distressed text on black athletic tank. THE EAGLE DOESN'T ASK PERMISSION — heather gray athletic cut. Built for those who act, not ask.",
  },
  {
    id: "tank-awaken-everything",
    name: '"Awaken Everything" Tank',
    price: "$49.99",
    image: tank5Img,
    tagline: "The Campaign — Athletic Cut",
    badge: "NEW",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Red to gold gradient text on black athletic tank. AWAKEN EVERYTHING — our campaign tagline on a gym-ready build. Moisture-wicking, breathable.",
  },
  // Headwear
  {
    id: "cap-1776",
    name: '"1776" Dad Cap',
    price: "$49.99",
    image: capImg,
    tagline: "The Year It All Began",
    badge: null,
    category: "headwear",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Olive", hex: "#556B2F" },
      { name: "Khaki", hex: "#C3B091" },
    ],
    description: "Embroidered 1776 dad cap. Adjustable brass buckle closure, pre-curved brim.",
  },
  {
    id: "beanie-wtp",
    name: '"WTP" Beanie',
    price: "$42.99",
    image: beanieImg,
    tagline: "We The People — Embroidered",
    badge: "NEW",
    category: "headwear",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "We The People embroidered cuff beanie. Soft acrylic knit, one size fits most.",
  },
  {
    id: "cap-enough",
    name: '"Had Enough" Snapback',
    price: "$49.99",
    image: capEnoughImg,
    tagline: "We're Done Being Silent",
    badge: "NEW DROP",
    category: "headwear" as Category,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Crimson Red", hex: "#DC143C" },
    ],
    description: "HAD ENOUGH — bold embroidered snapback. Flat brim, adjustable snap closure. For Americans who are done watching their country get sold out by career politicians.",
  },
  {
    id: "cap-accountability",
    name: '"Accountability Now" Dad Cap',
    price: "$49.99",
    image: capAccountabilityImg,
    tagline: "No One Is Above The Law",
    badge: "🔥 HOT",
    category: "headwear" as Category,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Olive", hex: "#556B2F" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Khaki", hex: "#C3B091" },
    ],
    description: "ACCOUNTABILITY NOW — embroidered dad cap. Every name on that list. Every corrupt deal. Every lie. We demand answers and we won't stop until we get them. Adjustable brass buckle.",
  },
  {
    id: "cap-protect-children",
    name: '"Protect The Children" Snapback',
    price: "$49.99",
    image: capProtectImg,
    tagline: "Their Silence Is Complicity",
    badge: "LIMITED",
    category: "headwear" as Category,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "White", hex: "#F5F5F5" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "PROTECT THE CHILDREN — embroidered snapback. The Epstein files are public. The names are out. Congress did nothing. We wear this because the children they failed deserve justice. Flat brim, adjustable snap.",
  },
  {
    id: "cap-release-names",
    name: '"Release Every Name" Dad Cap',
    price: "$49.99",
    image: capReleaseImg,
    tagline: "Unseal The Truth",
    badge: "NEW DROP",
    category: "headwear" as Category,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Olive", hex: "#556B2F" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    description: "RELEASE EVERY NAME — embroidered dad cap. Unseal the documents. Publish the flight logs. Let the American people see who was on that island and what they did there. Adjustable brass buckle closure.",
  },
  {
    id: "cap-veteran-owned",
    name: '"Veteran Owned" Trucker Hat',
    price: "$49.99",
    image: capVeteranImg,
    tagline: "They Served — Congress Forgot",
    badge: null,
    category: "headwear" as Category,
    colors: [
      { name: "Black/Black", hex: "#1a1a1a" },
      { name: "Black/Khaki", hex: "#C3B091" },
      { name: "Navy/White", hex: "#1B2A4A" },
      { name: "Olive/Tan", hex: "#556B2F" },
    ],
    description: "VETERAN OWNED — embroidered trucker hat with mesh back. 22 veterans a day. 37,000 homeless tonight. Congress sleeps fine. We don't forget. Structured front, adjustable snap closure.",
  },
  {
    id: "beanie-awareness",
    name: '"Awakened 1776" Beanie',
    price: "$42.99",
    image: beanieAwarenessImg,
    tagline: "Awake & United",
    badge: "🔥 HOT",
    category: "headwear" as Category,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Burgundy", hex: "#800020" },
    ],
    description: "AWAKENED 1776 — embroidered cuff beanie. The spirit of 1776 never died. It lives in every American who refuses to be lied to, sold out, or silenced. Soft acrylic knit, one size fits most.",
  },
  // Mugs (6)
  {
    id: "mug-dont-tread",
    name: '"Don\'t Tread" Mug',
    price: "$34.99",
    image: mugImg,
    tagline: "Don't Tread On Us",
    badge: null,
    category: "mugs",
    colors: MUG_COLORS,
    description: "11oz ceramic mug with full-wrap Gadsden design. Dishwasher and microwave safe.",
  },
  {
    id: "mug-wtp-flag",
    name: '"WTP Flag" Mug',
    price: "$34.99",
    image: mug2Img,
    tagline: "We The People — White Ceramic",
    badge: "NEW",
    category: "mugs",
    colors: MUG_COLORS,
    description: "We The People flag design on white ceramic. 11oz, perfect for your morning coffee.",
  },
  {
    id: "mug-1776-eagle",
    name: '"1776 Eagle" Mug',
    price: "$39.99",
    image: mug3Img,
    tagline: "Eagle Crest — Navy Ceramic",
    badge: "BESTSELLER",
    category: "mugs",
    colors: MUG_COLORS,
    description: "Eagle crest 1776 design on navy ceramic. Premium 15oz size, gold-trim option available.",
  },
  {
    id: "mug-2a",
    name: '"2nd Amendment" Mug',
    price: "$34.99",
    image: mug4Img,
    tagline: "2A Shield — Full Wrap Print",
    badge: "🔥 HOT",
    category: "mugs",
    colors: MUG_COLORS,
    description: "Second Amendment shield design with full-wrap print. 11oz ceramic, bold statement every morning.",
  },
  {
    id: "mug-flag-skull",
    name: '"Flag Skull" Mug',
    price: "$39.99",
    image: mug5Img,
    tagline: "Liberty Skull — Black Ceramic",
    badge: "LIMITED",
    category: "mugs",
    colors: MUG_COLORS,
    description: "Liberty skull on matte black ceramic. 15oz premium size, hand-wash recommended.",
  },
  {
    id: "mug-betsy-ross",
    name: '"Betsy Ross" Mug',
    price: "$34.99",
    image: mug6Img,
    tagline: "13-Star Flag — Gold Rim",
    badge: "FAN FAVORITE",
    category: "mugs",
    colors: MUG_COLORS,
    description: "Betsy Ross 13-star flag on white ceramic with gold rim. 11oz, elegant and patriotic.",
  },
  // Drinkware / Water Bottles (6)
  {
    id: "bottle-1776-eagle",
    name: '"1776 Eagle" Bottle',
    price: "$49.99",
    image: bottleImg,
    tagline: "32oz Stainless Steel — Engraved",
    badge: "BESTSELLER",
    category: "drinkware",
    colors: BOTTLE_COLORS,
    description: "32oz vacuum-insulated stainless steel bottle. Laser-engraved eagle design. Keeps drinks cold 24hrs, hot 12hrs.",
  },
  {
    id: "bottle-wtp",
    name: '"WTP" Bottle',
    price: "$49.99",
    image: bottle2Img,
    tagline: "32oz Stainless — Flag Print",
    badge: "NEW",
    category: "drinkware",
    colors: BOTTLE_COLORS,
    description: "We The People flag design on vacuum-insulated stainless steel. BPA-free, leak-proof lid.",
  },
  {
    id: "bottle-gadsden",
    name: '"Don\'t Tread" Bottle',
    price: "$54.99",
    image: bottle3Img,
    tagline: "32oz Matte Black — Engraved",
    badge: "🔥 HOT",
    category: "drinkware",
    colors: BOTTLE_COLORS,
    description: "Gadsden rattlesnake laser-engraved on matte black steel. Carabiner clip included.",
  },
  {
    id: "bottle-skull",
    name: '"Flag Skull" Bottle',
    price: "$54.99",
    image: bottle4Img,
    tagline: "32oz — Liberty Skull Design",
    badge: "LIMITED",
    category: "drinkware",
    colors: BOTTLE_COLORS,
    description: "Flag skull design on vacuum-insulated steel. Wide mouth, fits ice cubes. Built for the gym.",
  },
  {
    id: "bottle-2a",
    name: '"2A" Bottle',
    price: "$49.99",
    image: bottle5Img,
    tagline: "32oz Stainless — Crossed Rifles",
    badge: null,
    category: "drinkware",
    colors: BOTTLE_COLORS,
    description: "Second Amendment crossed rifles engraved on stainless steel. Double-wall insulation.",
  },
  {
    id: "shaker-wtp",
    name: '"WTP" Protein Shaker',
    price: "$42.99",
    image: shakerImg,
    tagline: "28oz Stainless — Gym Ready",
    badge: "NEW",
    category: "drinkware",
    colors: BOTTLE_COLORS,
    description: "We The People flag design on stainless steel shaker. Mixing ball included, leak-proof twist lid.",
  },
  // Accessories
  {
    id: "patch-wtp",
    name: '"WTP" Morale Patch',
    price: "$18.99",
    image: patchImg,
    tagline: "Velcro-Backed — Tactical Style",
    badge: "NEW",
    category: "accessories",
    colors: [
      { name: "Full Color", hex: "#B22222" },
      { name: "Subdued", hex: "#556B2F" },
      { name: "Blackout", hex: "#1a1a1a" },
    ],
    description: "3×2 inch PVC morale patch with velcro backing. Fits hats, bags, and plate carriers.",
  },
  {
    id: "yardsign-wtp",
    name: '"WTP" Yard Sign',
    price: "$26.99",
    image: yardSignImg,
    tagline: "18×24 — Metal Stakes Included",
    badge: "NEW",
    category: "accessories",
    colors: [],
    description: "18×24 corrugated plastic yard sign. Double-sided print. Metal H-stakes included.",
  },
  {
    id: "decal-flag-skull",
    name: '"Flag Skull" Car Decal',
    price: "$12.99",
    image: decalImg,
    tagline: "Die-Cut Vinyl — Weather Proof",
    badge: "FAN FAVORITE",
    category: "accessories",
    colors: [
      { name: "White", hex: "#F5F5F5" },
      { name: "Chrome", hex: "#C0C0C0" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "Die-cut vinyl decal, 5-year outdoor rated. Applies to cars, trucks, laptops, and more.",
  },
  // March Banners (8)
  {
    id: "banner-had-enough",
    name: '"We\'ve Had Enough Of Your BS" Banner',
    price: "$69.99",
    image: bannerHadEnoughImg,
    tagline: "Done Being Lied To — Done Being Sold Out",
    badge: "BESTSELLER",
    category: "march-banners",
    colors: [],
    description: "3×5 foot heavy-duty polyester march banner. WE THE PEOPLE HAVE HAD ENOUGH. Double-sided print, reinforced edges, wooden pole sleeve. Carry it to their doorstep. They lied to us for decades — we're done.",
  },
  {
    id: "banner-take-back",
    name: '"Take It Back — It\'s Ours" Banner',
    price: "$69.99",
    image: bannerTakeBackImg,
    tagline: "Stolen Government — We Reclaim It",
    badge: "NEW",
    category: "march-banners",
    colors: [],
    description: "3×5 foot navy protest banner with gold eagle emblem. They stole our government through dirty money and backroom deals. This banner says we're taking it back. Brass grommets, pole sleeve.",
  },
  {
    id: "banner-parasites",
    name: '"Rip Out The Parasites" Banner',
    price: "$69.99",
    image: bannerParasitesImg,
    tagline: "Every Corrupt Leech Gets Exposed",
    badge: "🔥 HOT",
    category: "march-banners",
    colors: [],
    description: "3×5 foot crimson red march banner with Gadsden rattlesnake. No More Parasites In Power. Every corrupt leech sucking this country dry gets named, shamed, and removed. Heavy-duty fabric, pole sleeve.",
  },
  {
    id: "banner-coming",
    name: '"The People Are Coming For All Of You" Banner',
    price: "$69.99",
    image: bannerComingImg,
    tagline: "You Can't Hide From Us Anymore",
    badge: "NEW DROP",
    category: "march-banners",
    colors: [],
    description: "3×5 foot black march banner with 13-star emblem. THE PEOPLE ARE COMING. Every crooked politician hiding behind closed doors — we see you. Double-sided, weather-resistant. The warning before the reckoning.",
  },
  {
    id: "banner-our-rules",
    name: '"Our Country, Our Damn Rules" Banner',
    price: "$69.99",
    image: bannerOurRulesImg,
    tagline: "Lobbyists Don't Run This Country — We Do",
    badge: "LIMITED",
    category: "march-banners",
    colors: [],
    description: "3×5 foot military olive march banner with crossed muskets. Our Country, Our Rules. Not the lobbyists' rules. Not the corporations' rules. OURS. Reinforced pole sleeve, built for any weather.",
  },
  {
    id: "banner-drain",
    name: '"Drain Every Last Rat" Banner',
    price: "$69.99",
    image: bannerDrainImg,
    tagline: "Flush Them All Out — Zero Exceptions",
    badge: "FAN FAVORITE",
    category: "march-banners",
    colors: [],
    description: "3×5 foot charcoal black march banner with flag skull. DRAIN EVERY LAST ONE. No golden parachutes. No quiet resignations. Drag them out into the light. Heavy-duty polyester, pole sleeve.",
  },
  // Car Stickers (4)
  {
    id: "sticker-release-files",
    name: '"Release The Damn Files" Car Sticker',
    price: "$9.99",
    image: stickerReleaseFilesImg,
    tagline: "Stop The Cover-Up — Prosecute Them All",
    badge: "🔥 HOT",
    category: "car-stickers" as Category,
    colors: [],
    description: "Die-cut vinyl car sticker — RELEASE THE FILES / PROSECUTE THEM ALL. They're hiding names to protect powerful predators. The cover-up is the crime. 5-year outdoor rated, UV and weather resistant. Slap it on everything you own.",
  },
  {
    id: "sticker-above-law",
    name: '"No One Is Above The Law" Sticker',
    price: "$9.99",
    image: stickerAboveLawImg,
    tagline: "Not Politicians — Not Billionaires — Nobody",
    badge: "NEW DROP",
    category: "car-stickers" as Category,
    colors: [],
    description: "Die-cut vinyl sticker — NO ONE IS ABOVE THE LAW. Lady Justice with American flag. Billionaires, politicians, celebrities — nobody gets a free pass. If you flew to that island, you answer for it. 5-year outdoor rated.",
  },
  {
    id: "sticker-client-list",
    name: '"Where Is The Client List?" Sticker',
    price: "$9.99",
    image: stickerClientListImg,
    tagline: "Congress Is Hiding It — We Want Names",
    badge: "🔥 HOT",
    category: "car-stickers" as Category,
    colors: [],
    description: "Die-cut vinyl sticker — WHERE IS THE CLIENT LIST? Capitol dome with question marks. Congress has the names and they're protecting the guilty. We demand every single name released. Weather-proof, 5-year outdoor rated.",
  },
  {
    id: "sticker-protect-children",
    name: '"Protect The Children, Not The Predators" Sticker',
    price: "$9.99",
    image: stickerProtectChildrenImg,
    tagline: "Children First — Predators In Prison",
    badge: "BESTSELLER",
    category: "car-stickers" as Category,
    colors: [],
    description: "Die-cut vinyl sticker — PROTECT THE CHILDREN, NOT THE PREDATORS. Broken chains over American flag. They protected the monsters and silenced the victims. Never again. Weather-proof, UV resistant, 5-year outdoor rated.",
  },
  // Epstein Accountability Banners
  {
    id: "banner-release-names",
    name: '"Release Every Name — Prosecute Every One" Banner',
    price: "$69.99",
    image: bannerReleaseNamesImg,
    tagline: "Unseal The Files — Lock Them Up",
    badge: "🔥 HOT",
    category: "march-banners",
    colors: [],
    description: "3×5 foot heavy-duty march banner — RELEASE EVERY NAME / PROSECUTE EVERY ONE. Scales of justice over distressed American flag. They sealed the files to protect their sick friends in high places. We demand every name, every flight log, every disgusting detail. Double-sided, pole sleeve, brass grommets.",
  },
  {
    id: "banner-congress-knew",
    name: '"Congress Knew — We Demand Justice" Banner',
    price: "$69.99",
    image: bannerCongressKnewImg,
    tagline: "They Covered For Predators — Prosecute Them Too",
    badge: "NEW DROP",
    category: "march-banners",
    colors: [],
    description: "3×5 foot black march banner — CONGRESS KNEW / WE DEMAND JUSTICE. Broken gavel over Capitol dome. They knew what was happening to those children and they looked the other way. Every member who stayed silent is complicit. Heavy-duty polyester, double-sided.",
  },
  {
    id: "banner-accountability",
    name: '"Accountability Now" March Banner',
    price: "$69.99",
    image: bannerAccountabilityImg,
    tagline: "No One Is Above The Law",
    badge: "NEW DROP",
    category: "march-banners" as Category,
    colors: [],
    description: "3×5 foot black march banner — ACCOUNTABILITY NOW with scales of justice. Every name on the list. Every corrupt deal. Every lie told under oath. We demand full accountability from every elected official who sold us out. Heavy-duty polyester, double-sided, brass grommets.",
  },
  {
    id: "banner-protect-children",
    name: '"Protect The Children" March Banner',
    price: "$69.99",
    image: bannerProtectImg,
    tagline: "Their Silence Is Complicity",
    badge: "LIMITED",
    category: "march-banners" as Category,
    colors: [],
    description: "3×5 foot navy march banner — PROTECT THE CHILDREN with shield emblem. The Epstein files are public. The names are out. And Congress did nothing. This banner is for every child they failed and every survivor still waiting for justice. Double-sided, pole sleeve.",
  },
  {
    id: "banner-22-veterans",
    name: '"22 Veterans A Day" March Banner',
    price: "$69.99",
    image: bannerVeteransImg,
    tagline: "Congress Sleeps — Veterans Don't",
    badge: "🔥 HOT",
    category: "march-banners" as Category,
    colors: [],
    description: "3×5 foot black and gold march banner — 22 VETERANS A DAY. While Congress votes themselves raises, 22 veterans take their own lives every single day. 37,000 sleep on the streets tonight. This banner demands they answer for it. Heavy-duty polyester, brass grommets.",
  },
  {
    id: "banner-no-silence",
    name: '"No More Silence" March Banner',
    price: "$69.99",
    image: bannerSilenceImg,
    tagline: "Break The Chains — Speak Up",
    badge: "NEW DROP",
    category: "march-banners" as Category,
    colors: [],
    description: "3×5 foot crimson red march banner — NO MORE SILENCE with broken chain symbol. They silenced whistleblowers. They buried evidence. They sealed documents. That ends now. Every American who carries this banner is a signal that we will not be quiet anymore. Double-sided, pole sleeve.",
  },
  // Epstein Accountability Tees (2)
  {
    id: "tee-release-files",
    name: '"Release The Files — Prosecute Them All" Tee',
    price: "$59.99",
    image: teeReleaseFilesImg,
    tagline: "They Buried The Evidence — We Wear The Truth",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Premium heavyweight cotton tee — RELEASE THE FILES / PROSECUTE THEM ALL. American flag skull graphic. They shredded documents and sealed records to protect sick, powerful predators. This shirt is a walking demand for justice. Pre-shrunk, tagless.",
  },
  {
    id: "tee-above-law",
    name: '"No One Is Above The Law" Tee',
    price: "$59.99",
    image: teeAboveLawImg,
    tagline: "Not Billionaires — Not Politicians — Nobody",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Premium heavyweight cotton tee — NO ONE IS ABOVE THE LAW. Blindfolded Lady Justice over distressed American flag. Congress let predators walk free because they had money and connections. Wear this until every last one of them is behind bars.",
  },
  // Epstein Accountability Hoodies (2)
  {
    id: "hoodie-client-list",
    name: '"Where Is The Client List?" Hoodie',
    price: "$109.99",
    image: hoodieClientListImg,
    tagline: "Congress Is Hiding Names — Demand Answers",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Heavyweight 10oz fleece hoodie — WHERE IS THE CLIENT LIST? / DEMAND ANSWERS. Capitol dome with question marks. They have the names of every sick predator who visited that island and they won't release them. Why? Because their friends are on it. Double-lined hood, metal grommets.",
  },
  {
    id: "hoodie-protect-children",
    name: '"Protect The Children — Not The Predators" Hoodie',
    price: "$109.99",
    image: hoodieProtectChildrenImg,
    tagline: "Children Over Corruption — Always",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Heavyweight 10oz fleece hoodie — PROTECT THE CHILDREN / NOT THE PREDATORS. American eagle breaking chains. Congress chose to protect monsters over innocent children. Every politician who stayed silent is guilty. This hoodie is for the kids who never got justice. Double-lined hood, front pouch pocket.",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Tank Tops", value: "tank-tops" },
  { label: "Car Stickers", value: "car-stickers" },
  { label: "March Banners", value: "march-banners" },
  
  { label: "Mugs", value: "mugs" },
  { label: "Drinkware", value: "drinkware" },
  { label: "Headwear", value: "headwear" },
  { label: "Accessories", value: "accessories" },
];
