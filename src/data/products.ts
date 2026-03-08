import tshirtImg from "@/assets/product-tshirt.jpg";
import hoodieImg from "@/assets/product-hoodie.jpg";
import capImg from "@/assets/product-cap.jpg";
import mugImg from "@/assets/product-mug.jpg";
import posterImg from "@/assets/product-poster.jpg";
import beanieImg from "@/assets/product-beanie.jpg";
import stickersImg from "@/assets/product-stickers.jpg";
import tee2Img from "@/assets/product-tee2.jpg";
import hoodie2Img from "@/assets/product-hoodie2.jpg";
import caseEagleImg from "@/assets/product-case-eagle.jpg";
import case2aImg from "@/assets/product-case-2a.jpg";
import caseSkullImg from "@/assets/product-case-skull.jpg";
import caseWtpImg from "@/assets/product-case-wtp.jpg";
import caseGadsdenImg from "@/assets/product-case-gadsden.jpg";
import case1776Img from "@/assets/product-case-1776.jpg";
import patchImg from "@/assets/product-patch.jpg";
import pinImg from "@/assets/product-pin.jpg";
import flagImg from "@/assets/product-flag.jpg";
import yardSignImg from "@/assets/product-yardsign.jpg";
import bottleImg from "@/assets/product-bottle.jpg";
import bottle2Img from "@/assets/product-bottle2.jpg";
import bottle3Img from "@/assets/product-bottle3.jpg";
import bottle4Img from "@/assets/product-bottle4.jpg";
import bottle5Img from "@/assets/product-bottle5.jpg";
import koozieImg from "@/assets/product-koozie.jpg";
import keychainImg from "@/assets/product-keychain.jpg";
import keychain2Img from "@/assets/product-keychain2.jpg";
import keychain3Img from "@/assets/product-keychain3.jpg";
import keychain4Img from "@/assets/product-keychain4.jpg";
import keychain5Img from "@/assets/product-keychain5.jpg";
import keychain6Img from "@/assets/product-keychain6.jpg";
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
import shakerImg from "@/assets/product-shaker.jpg";
import gymTowelImg from "@/assets/product-gymtowel.jpg";
import gymBagImg from "@/assets/product-gymbag.jpg";
import wristWrapsImg from "@/assets/product-wristwraps.jpg";
import bandsImg from "@/assets/product-bands.jpg";
import headbandImg from "@/assets/product-headband.jpg";
import poster2Img from "@/assets/product-poster2.jpg";
import poster3Img from "@/assets/product-poster3.jpg";
import poster4Img from "@/assets/product-poster4.jpg";
import poster5Img from "@/assets/product-poster5.jpg";
import poster6Img from "@/assets/product-poster6.jpg";
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

export type Category =
  | "all"
  | "apparel"
  | "tank-tops"
  | "headwear"
  | "accessories"
  | "phone-cases"
  | "mugs"
  | "keychains"
  | "drinkware"
  | "fitness"
  | "posters"
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

const KEYCHAIN_COLORS: ColorOption[] = [
  { name: "Brass", hex: "#B5A642" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Gunmetal", hex: "#2C3539" },
  { name: "Red Enamel", hex: "#DC143C" },
  { name: "Blue Enamel", hex: "#1E40AF" },
];

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const TANK_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

export const products: Product[] = [
  // T-Shirts (8)
  {
    id: "tee-had-enough",
    name: '"Had Enough" Tee',
    price: "$59.99",
    image: tshirtImg,
    tagline: "Sick Of The Lies — We're Done",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Premium heavyweight cotton tee. We The People Have Had Enough — distressed screen print that hits hard. Pre-shrunk, tagless. For patriots who are done being lied to by crooked politicians.",
  },
  {
    id: "tee-parasites",
    name: '"Gut The Parasites" Tee',
    price: "$59.99",
    image: teeParasitesImg,
    tagline: "Rip Them Out Of Office",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "No More Parasites In Power — rattlesnake graphic on premium black heavyweight cotton. Every bloodsucking politician who sold us out deserves to be dragged out of office. Wear the warning.",
  },
  {
    id: "tee-takeback",
    name: '"Take It Back By Force" Tee',
    price: "$59.99",
    image: teeTakebackImg,
    tagline: "They Stole It — We Take It Back",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Take Back What's Ours — golden eagle emblem on navy premium cotton. They hijacked our government and sold it to lobbyists. Time's up. Reclaim what belongs to We The People.",
  },
  {
    id: "tee-liberty-death",
    name: '"Give Me Liberty Or Give Me Death" Tee',
    price: "$59.99",
    image: tee4Img,
    tagline: "No Compromise — No Surrender",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Flag skull on premium cotton. Give me liberty or give me death — Patrick Henry said it and we still mean it. No compromise. No backing down. No surrender.",
  },
  {
    id: "tee-drain",
    name: '"Drain Every Last Rat" Tee',
    price: "$59.99",
    image: teeDrainImg,
    tagline: "Flush The Swamp — No Mercy",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Drain Every Last One — American flag skull on premium black cotton. Every corrupt rat in Washington gets flushed. No exceptions, no deals, no mercy. The cleanup starts now.",
  },
  {
    id: "tee-land-free",
    name: '"Land Of The Free" Tee',
    price: "$59.99",
    image: tee6Img,
    tagline: "Built By Warriors — Not Cowards",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Screaming eagle on premium cotton. Land of the free, home of the brave — built by warriors, not the spineless cowards sitting in Congress cashing lobbyist checks.",
  },
  // Hoodies (9)
  {
    id: "hoodie-defend",
    name: '"Defend It Or Lose It" Hoodie',
    price: "$109.99",
    image: hoodieImg,
    tagline: "The Constitution Isn't A Suggestion",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Heavyweight 10oz fleece hoodie. Defend The Constitution — because these crooked politicians treat it like toilet paper. Distressed print, front pouch pocket. The Constitution is the law, not a suggestion.",
  },
  {
    id: "hoodie-liberty-death",
    name: '"Liberty Or Death" Hoodie',
    price: "$109.99",
    image: hoodie2Img,
    tagline: "Die On Your Feet — Never On Your Knees",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Flag skull graphic on premium heavyweight fleece. Double-lined hood, metal grommets, thick drawcord. Die on your feet before you ever kneel to tyrants.",
  },
  {
    id: "hoodie-1776-eagle",
    name: '"1776 — They Feared Us Then" Hoodie',
    price: "$109.99",
    image: hoodie3Img,
    tagline: "They Should Fear Us Again",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Screaming eagle 1776 on jet black heavyweight fleece. They feared the people in 1776 and they damn well better fear us again. Our most popular hoodie.",
  },
  {
    id: "hoodie-wtp",
    name: '"We The People — Not We The Government" Hoodie',
    price: "$109.99",
    image: hoodie4Img,
    tagline: "They Work For Us — Not The Other Way Around",
    badge: "NEW",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "We The People distressed print on olive heavyweight fleece. Reminder to every politician: you work for us, you lying, thieving sellouts. Vintage feel, modern fury.",
  },
  {
    id: "hoodie-parasites",
    name: '"Burn Out The Parasites" Hoodie',
    price: "$109.99",
    image: hoodieParasitesImg,
    tagline: "Every Last Corrupt One Of Them",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "No More Parasites In Power on crimson red heavyweight fleece. Rattlesnake graphic, double-lined hood. Every bloodsucking career politician feeding off our tax dollars needs to be burned out of office.",
  },
  {
    id: "hoodie-our-rules",
    name: '"Our Country, Our Damn Rules" Hoodie',
    price: "$109.99",
    image: hoodieOurRulesImg,
    tagline: "We Write The Laws — Not Lobbyists",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Our Country, Our Rules — crossed muskets on olive heavyweight fleece. Lobbyists don't write our laws. Corporations don't own our vote. This is our house. Military-grade comfort, revolutionary message.",
  },
  {
    id: "hoodie-coming",
    name: '"The People Are Coming For You" Hoodie',
    price: "$109.99",
    image: hoodieComingImg,
    tagline: "Run While You Can, Washington",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "The People Are Coming on jet black heavyweight fleece. 13-star emblem, front pouch pocket. Every corrupt politician in Washington should be shaking. We're coming and we don't forgive.",
  },
  // Tank Tops (6)
  {
    id: "tank-wtp",
    name: '"We The People — Not Your Pawns" Tank',
    price: "$49.99",
    image: tank1Img,
    tagline: "Stop Using Us — We're Awake Now",
    badge: "NEW",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Lightweight, breathable tank with bold We The People print. We're done being pawns in their corrupt games. Built for the gym and the streets.",
  },
  {
    id: "tank-drip-flag",
    name: '"Bleeding Country" Tank',
    price: "$49.99",
    image: tank2Img,
    tagline: "They Made Our Flag Bleed",
    badge: "BESTSELLER",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Distressed American flag drip design — because they're bleeding this country dry. Moisture-wicking blend. Every drop represents another betrayal by the crooks in power.",
  },
  {
    id: "tank-drain",
    name: '"Drain Every Last Rat" Tank',
    price: "$49.99",
    image: tankDrainImg,
    tagline: "No Deals — No Mercy — No Exceptions",
    badge: "🔥 HOT",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Drain Every Last One — flag skull on black athletic tank. Every corrupt rat in Washington gets dragged out. No deals, no plea bargains, no golden parachutes. Moisture-wicking, gym-ready.",
  },
  {
    id: "tank-takeback",
    name: '"Take It Back — By Any Means" Tank',
    price: "$49.99",
    image: tankTakebackImg,
    tagline: "They Stole It — We Reclaim It",
    badge: "NEW DROP",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Take Back What's Ours — eagle crest on white athletic tank. They stole our government through backroom deals and dirty money. We take it back at the ballot box and in the streets. Reinforced shoulders.",
  },
  {
    id: "tank-coming",
    name: '"The People Are Coming For You" Tank',
    price: "$49.99",
    image: tankComingImg,
    tagline: "No Place To Hide, Washington",
    badge: "LIMITED",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "The People Are Coming — 13-star circle stamp on heather gray tank. Every crooked politician hiding behind closed doors should hear the footsteps. Lightweight, breathable, ready for anything.",
  },
  {
    id: "tank-had-enough",
    name: '"We\'ve Had Enough Of Your Lies" Tank',
    price: "$49.99",
    image: tank6Img,
    tagline: "Done Listening — Time For Action",
    badge: "FAN FAVORITE",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Raised fist with flag overlay. We've had enough of the lies, the corruption, the sellouts. Heather gray athletic cut — built for people who are done talking and ready to act.",
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
  // Fitness (6)
  {
    id: "fitness-gym-towel",
    name: '"WTP" Gym Towel',
    price: "$34.99",
    image: gymTowelImg,
    tagline: "Microfiber — Full Print",
    badge: "NEW",
    category: "fitness",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Gray", hex: "#808080" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "Full-print microfiber gym towel. Quick-dry, antibacterial, machine washable. 16×32 inches.",
  },
  {
    id: "fitness-gym-bag",
    name: '"1776" Gym Bag',
    price: "$84.99",
    image: gymBagImg,
    tagline: "Eagle Duffle — Tactical Black",
    badge: "BESTSELLER",
    category: "fitness",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Olive", hex: "#556B2F" },
    ],
    description: "Tactical-style duffle bag with 1776 eagle emblem. Water-resistant nylon, shoe compartment, padded strap.",
  },
  {
    id: "fitness-wrist-wraps",
    name: '"Old Glory" Wrist Wraps',
    price: "$29.99",
    image: wristWrapsImg,
    tagline: "Flag Print — Heavy Duty",
    badge: "🔥 HOT",
    category: "fitness",
    colors: [
      { name: "Flag Print", hex: "#B22222" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Camo", hex: "#556B2F" },
    ],
    description: "18-inch wrist wraps with thumb loop. American flag design. Perfect for heavy lifting and CrossFit.",
  },
  {
    id: "fitness-bands",
    name: '"Patriot" Resistance Bands',
    price: "$39.99",
    image: bandsImg,
    tagline: "Red, White & Blue Set",
    badge: "NEW",
    category: "fitness",
    colors: [
      { name: "Red/White/Blue", hex: "#B22222" },
    ],
    description: "Set of 3 resistance bands in red, white, and blue. Light, medium, and heavy resistance. Natural latex.",
  },
  {
    id: "fitness-headband",
    name: '"Stars & Stripes" Headband',
    price: "$22.99",
    image: headbandImg,
    tagline: "Moisture-Wicking — Non-Slip",
    badge: "FAN FAVORITE",
    category: "fitness",
    colors: [
      { name: "Flag Print", hex: "#1B2A4A" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "Moisture-wicking workout headband with silicone grip. American flag design. One size fits all.",
  },
  {
    id: "fitness-koozie",
    name: '"Don\'t Tread" Koozie',
    price: "$14.99",
    image: koozieImg,
    tagline: "Neoprene Can Cooler",
    badge: null,
    category: "fitness",
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Camo", hex: "#556B2F" },
      { name: "Red", hex: "#B22222" },
    ],
    description: "Neoprene can cooler with Gadsden design. Fits standard 12oz cans. Collapsible for easy carry.",
  },
  // Posters (6)
  {
    id: "poster-rise",
    name: '"RISE" Poster',
    price: "$26.99",
    image: posterImg,
    tagline: "18×24 Screenprint Style",
    badge: "LIMITED",
    category: "posters",
    colors: [
      { name: "Matte", hex: "#1a1a1a" },
      { name: "Glossy", hex: "#F5F5F5" },
    ],
    description: "18×24 screenprint-style poster on heavyweight 100lb matte paper. Ships rolled in protective tube.",
  },
  {
    id: "poster-liberty-death",
    name: '"Liberty or Death" Poster',
    price: "$29.99",
    image: poster2Img,
    tagline: "18×24 — Flag Skull Print",
    badge: "🔥 HOT",
    category: "posters",
    colors: [
      { name: "Matte", hex: "#1a1a1a" },
      { name: "Glossy", hex: "#F5F5F5" },
      { name: "Canvas", hex: "#C3B091" },
    ],
    description: "Liberty or Death flag skull design. 18×24 on premium paper or stretched canvas upgrade available.",
  },
  {
    id: "poster-wtp",
    name: '"We The People" Poster',
    price: "$26.99",
    image: poster3Img,
    tagline: "18×24 — Parchment Style",
    badge: "BESTSELLER",
    category: "posters",
    colors: [
      { name: "Parchment", hex: "#C3B091" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    description: "Vintage parchment-style We The People poster. 18×24 on aged-look heavyweight paper.",
  },
  {
    id: "poster-gadsden",
    name: '"Don\'t Tread" Poster',
    price: "$26.99",
    image: poster4Img,
    tagline: "18×24 — Propaganda Style",
    badge: "NEW",
    category: "posters",
    colors: [
      { name: "Vintage", hex: "#C3B091" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    description: "Gadsden rattlesnake in vintage propaganda poster style. 18×24 on premium paper.",
  },
  {
    id: "poster-1776",
    name: '"1776 Muskets" Poster',
    price: "$29.99",
    image: poster5Img,
    tagline: "18×24 — Parchment Eagle",
    badge: "FAN FAVORITE",
    category: "posters",
    colors: [
      { name: "Parchment", hex: "#C3B091" },
      { name: "Matte", hex: "#1a1a1a" },
      { name: "Canvas", hex: "#8B7355" },
    ],
    description: "1776 crossed muskets with eagle seal on aged parchment. 18×24, also available as canvas print.",
  },
  {
    id: "poster-2a",
    name: '"2nd Amendment" Poster',
    price: "$26.99",
    image: poster6Img,
    tagline: "18×24 — Distressed Flag",
    badge: "LIMITED",
    category: "posters",
    colors: [
      { name: "Vintage", hex: "#C3B091" },
      { name: "Glossy", hex: "#F5F5F5" },
    ],
    description: "Second Amendment poster with distressed American flag background. 18×24 premium print.",
  },
  // Accessories
  {
    id: "sticker-pack",
    name: "Sticker Pack (6pc)",
    price: "$22.99",
    image: stickersImg,
    tagline: "Slap 'Em Everywhere",
    badge: "FAN FAVORITE",
    category: "accessories",
    colors: [],
    description: "6-piece vinyl sticker pack featuring our most popular designs. Weather-proof, UV resistant.",
  },
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
    id: "pin-old-glory",
    name: '"Old Glory" Enamel Pin',
    price: "$16.99",
    image: pinImg,
    tagline: "Gold Finish — Lapel Ready",
    badge: null,
    category: "accessories",
    colors: [
      { name: "Gold", hex: "#B5A642" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "Hard enamel pin with gold or silver finish. Butterfly clutch backing. Perfect for lapels and hats.",
  },
  {
    id: "flag-gadsden",
    name: '"Don\'t Tread" 3×5 Flag',
    price: "$42.99",
    image: flagImg,
    tagline: "Gadsden Edition — Double-Sided",
    badge: "🔥 HOT",
    category: "accessories",
    colors: [],
    description: "3×5 foot Gadsden flag. Double-sided print on durable polyester. Brass grommets, reinforced header.",
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
  // Keychains (6)
  {
    id: "keychain-the-people",
    name: '"The People" Keychain',
    price: "$22.99",
    image: keychainImg,
    tagline: "Brass Finish — Engraved Script",
    badge: "NEW",
    category: "keychains",
    colors: KEYCHAIN_COLORS,
    description: "Solid brass keychain with engraved 'We The People' script. Split ring and lobster clasp included.",
  },
  {
    id: "keychain-1776-eagle",
    name: '"1776 Eagle" Keychain',
    price: "$26.99",
    image: keychain2Img,
    tagline: "Brass — Eagle Emblem",
    badge: "BESTSELLER",
    category: "keychains",
    colors: KEYCHAIN_COLORS,
    description: "1776 eagle emblem on solid brass tag. Laser-engraved, built to last.",
  },
  {
    id: "keychain-dont-tread",
    name: '"Don\'t Tread" Keychain',
    price: "$22.99",
    image: keychain3Img,
    tagline: "Gadsden Medallion — Bronze",
    badge: "🔥 HOT",
    category: "keychains",
    colors: KEYCHAIN_COLORS,
    description: "Gadsden rattlesnake medallion keychain. Antique bronze finish, heavy-duty ring.",
  },
  {
    id: "keychain-bottle-opener",
    name: '"Old Glory" Bottle Opener',
    price: "$26.99",
    image: keychain4Img,
    tagline: "Flag Opener — Stainless Steel",
    badge: "FAN FAVORITE",
    category: "keychains",
    colors: KEYCHAIN_COLORS,
    description: "American flag bottle opener keychain. Stainless steel, compact, always ready.",
  },
  {
    id: "keychain-2a-shield",
    name: '"2A Shield" Keychain',
    price: "$22.99",
    image: keychain5Img,
    tagline: "Second Amendment — Gunmetal",
    badge: null,
    category: "keychains",
    colors: KEYCHAIN_COLORS,
    description: "Second Amendment shield emblem keychain. Gunmetal finish with star border detail.",
  },
  {
    id: "keychain-flag-skull",
    name: '"Flag Skull" Keychain',
    price: "$26.99",
    image: keychain6Img,
    tagline: "Patriot Skull — Antique Bronze",
    badge: "LIMITED",
    category: "keychains",
    colors: KEYCHAIN_COLORS,
    description: "American flag skull 3D keychain. Antique bronze with enamel fill. Solid and weighty.",
  },
  // Phone Cases (6)
  {
    id: "case-wtp-eagle",
    name: '"WTP Eagle" Phone Case',
    price: "$42.99",
    image: caseEagleImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "NEW",
    category: "phone-cases",
    colors: CASE_COLORS,
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "Samsung S23", "Samsung S24"],
    description: "Dual-layer tough case with WTP eagle design. Impact-resistant polycarbonate shell + TPU liner.",
  },
  {
    id: "case-2a",
    name: '"2nd Amendment" Phone Case',
    price: "$42.99",
    image: case2aImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "🔥 HOT",
    category: "phone-cases",
    colors: CASE_COLORS,
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "Samsung S23", "Samsung S24"],
    description: "Second Amendment design tough case. Raised edges protect camera and screen. Wireless charging compatible.",
  },
  {
    id: "case-flag-skull",
    name: '"Flag Skull" Phone Case',
    price: "$42.99",
    image: caseSkullImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "BESTSELLER",
    category: "phone-cases",
    colors: CASE_COLORS,
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "Samsung S23", "Samsung S24"],
    description: "Flag skull design on tough case. Non-slip grip texture, precise cutouts for all ports.",
  },
  {
    id: "case-wtp-flag",
    name: '"WTP Flag" Phone Case',
    price: "$42.99",
    image: caseWtpImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "NEW",
    category: "phone-cases",
    colors: CASE_COLORS,
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "Samsung S23", "Samsung S24"],
    description: "We The People flag design tough case. Slim profile doesn't add bulk. Drop tested to 6 feet.",
  },
  {
    id: "case-gadsden",
    name: '"Don\'t Tread" Phone Case',
    price: "$42.99",
    image: caseGadsdenImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "FAN FAVORITE",
    category: "phone-cases",
    colors: CASE_COLORS,
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "Samsung S23", "Samsung S24"],
    description: "Gadsden rattlesnake + American flag tough case. UV-printed design won't fade or peel.",
  },
  {
    id: "case-1776",
    name: '"1776 Flag" Phone Case',
    price: "$42.99",
    image: case1776Img,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "LIMITED",
    category: "phone-cases",
    colors: CASE_COLORS,
    sizes: ["iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "Samsung S23", "Samsung S24"],
    description: "1776 distressed flag tough case. Matte finish, anti-fingerprint coating. Limited edition print.",
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
  // ===== EPSTEIN FILES / ACCOUNTABILITY COLLECTION =====
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
  // Epstein Accountability Banners (2)
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
  { label: "Phone Cases", value: "phone-cases" },
  { label: "Mugs", value: "mugs" },
  { label: "Drinkware", value: "drinkware" },
  { label: "Keychains", value: "keychains" },
  { label: "Fitness", value: "fitness" },
  { label: "Posters", value: "posters" },
  { label: "Headwear", value: "headwear" },
  { label: "Accessories", value: "accessories" },
];
