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
import crewneck1Img from "@/assets/product-crewneck1.jpg";
import crewneck2Img from "@/assets/product-crewneck2.jpg";
import crewneck3Img from "@/assets/product-crewneck3.jpg";
import crewneck4Img from "@/assets/product-crewneck4.jpg";
import crewneck5Img from "@/assets/product-crewneck5.jpg";
import crewneck6Img from "@/assets/product-crewneck6.jpg";
import crewneck7Img from "@/assets/product-crewneck7.jpg";

export type Category =
  | "all"
  | "apparel"
  | "crewnecks"
  | "tank-tops"
  | "headwear"
  | "drinkware";

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
  // T-Shirts (6)
  {
    id: "tee-76-mark",
    name: '"76" Brand Mark Tee',
    price: "$74.99",
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
    price: "$74.99",
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
    price: "$74.99",
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
    price: "$74.99",
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
    price: "$74.99",
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
    price: "$74.99",
    image: teeDrainImg,
    tagline: "The Eagle Rises — Awakened 1776",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Eagle silhouette with BORN TO SOAR NOT TO BOW in gold and white. AWAKENED 1776 brand mark. For those who rise above.",
  },
  // Hoodies (6)
  {
    id: "hoodie-76-mark",
    name: '"76" Brand Mark Hoodie',
    price: "$124.99",
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
    price: "$124.99",
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
    price: "$124.99",
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
    price: "$124.99",
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
    price: "$124.99",
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
    price: "$124.99",
    image: hoodieOurRulesImg,
    tagline: "EST. MDCCLXXVI · United States",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The 'A' monogram with EST. MDCCLXXVI · UNITED STATES above, AWAKENED 1776 below in cream and gold. Heritage brand identity. Premium black fleece.",
  },
  // Crewnecks (7)
  {
    id: "crew-76-mark",
    name: '"76" Brand Mark Crewneck',
    price: "$94.99",
    image: crewneck1Img,
    tagline: "The Iconic 76 — Gold On Black",
    badge: "BESTSELLER",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Massive gold distressed 76 with AWAKENED · EST. 1776 on jet black heavyweight fleece crewneck. The flagship brand identity — no hood, all statement.",
  },
  {
    id: "crew-awakened-collegiate",
    name: '"Awakened 1776" Collegiate Crewneck',
    price: "$94.99",
    image: crewneck2Img,
    tagline: "The Arched Classic — Cream & Red",
    badge: "🔥 HOT",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Arched AWAKENED in cream with 1776 in red on premium black heavyweight fleece crewneck. The collegiate brand identity. Clean neckline, premium weight.",
  },
  {
    id: "crew-a-stamp",
    name: '"A" Stamp Mark Crewneck',
    price: "$94.99",
    image: crewneck3Img,
    tagline: "The Spirit Lives On · Gold Stamp",
    badge: "NEW DROP",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The gold 'A' stamp block logo with ornate border on jet black heavyweight fleece crewneck. AWAKENED — THE SPIRIT LIVES ON · 1776. Heritage luxury.",
  },
  {
    id: "crew-truth-prevail",
    name: '"Truth Shall Prevail" Crewneck',
    price: "$94.99",
    image: crewneck4Img,
    tagline: "The Motto — Gold On Black",
    badge: "🔥 HOT",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Three gold stars crown our core motto: TRUTH SHALL PREVAIL. AWAKENED 1776 brand mark below. Premium heavyweight fleece crewneck.",
  },
  {
    id: "crew-simple-sovereign",
    name: '"Simple. Sovereign. Undefeated." Crewneck',
    price: "$94.99",
    image: crewneck5Img,
    tagline: "Three Words — One Identity",
    badge: "BESTSELLER",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "SIMPLE. SOVEREIGN. UNDEFEATED. in bold cream with AWAKENED 1776 brand below. Premium black heavyweight fleece crewneck. The brand values, worn with conviction.",
  },
  {
    id: "crew-born-to-soar",
    name: '"Born To Soar, Not To Bow" Crewneck',
    price: "$94.99",
    image: crewneck6Img,
    tagline: "The Eagle Rises — Awakened 1776",
    badge: "LIMITED",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Golden eagle silhouette with BORN TO SOAR, NOT TO BOW in gold and white. AWAKENED 1776 brand mark. Premium fleece crewneck.",
  },
  {
    id: "crew-awaken-everything",
    name: '"Awaken Everything" Crewneck',
    price: "$94.99",
    image: crewneck7Img,
    tagline: "The Campaign — Fire & Gold",
    badge: "NEW DROP",
    category: "crewnecks",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "AWAKEN EVERYTHING in fire gradient text on jet black heavyweight fleece crewneck. AWAKENED 1776 brand on chest. The campaign call to action.",
  },
  // Tank Tops (7)
  {
    id: "tank-76-mark",
    name: '"76" Brand Mark Tank',
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    id: "cap-76-mark",
    name: '"76" Brand Mark Dad Cap',
    price: "$64.99",
    image: capImg,
    tagline: "The Iconic 76 — Gold Embroidered",
    badge: "BESTSELLER",
    category: "headwear",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Olive", hex: "#556B2F" },
      { name: "Khaki", hex: "#C3B091" },
    ],
    description: "Gold embroidered 76 brand mark with AWAKENED · EST. 1776 on black dad cap. Adjustable brass buckle closure, pre-curved brim.",
  },
  {
    id: "beanie-awakened",
    name: '"Awakened 1776" Beanie',
    price: "$54.99",
    image: beanieImg,
    tagline: "The Brand — Cream & Red",
    badge: "NEW",
    category: "headwear",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "AWAKENED in bold cream with 1776 in red embroidered on black cuff beanie. Soft acrylic knit, one size fits most.",
  },
  {
    id: "cap-enough",
    name: '"Had Enough" Snapback',
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    price: "$64.99",
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
    id: "beanie-a-stamp",
    name: '"A" Stamp Mark Beanie',
    price: "$54.99",
    image: beanieAwarenessImg,
    tagline: "Gold 'A' Mark — Embroidered",
    badge: "🔥 HOT",
    category: "headwear" as Category,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Burgundy", hex: "#800020" },
    ],
    description: "Gold 'A' stamp mark with AWAKENED 1776 embroidered on black cuff beanie. The spirit lives on. Soft acrylic knit, one size fits most.",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Crewnecks", value: "crewnecks" },
  { label: "Tank Tops", value: "tank-tops" },
  { label: "Drinkware", value: "drinkware" },
  { label: "Headwear", value: "headwear" },
];
