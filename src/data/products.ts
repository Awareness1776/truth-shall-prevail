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
  | "march-banners";

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
  // T-Shirts (6)
  {
    id: "tee-had-enough",
    name: '"Had Enough" Tee',
    price: "$59.99",
    image: tshirtImg,
    tagline: "We The People Have Had Enough",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Premium heavyweight cotton tee with distressed screen print. Pre-shrunk, tagless comfort. Made for patriots who refuse to stay silent.",
  },
  {
    id: "tee-article-v",
    name: '"Article V" Tee',
    price: "$59.99",
    image: tee2Img,
    tagline: "The People's Reset",
    badge: "NEW",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Premium heavyweight cotton tee featuring the Article V convention of states design. Bold statement, comfortable fit.",
  },
  {
    id: "tee-dont-tread",
    name: '"Don\'t Tread" Tee',
    price: "$59.99",
    image: tee3Img,
    tagline: "Gadsden Rattlesnake Edition",
    badge: null,
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Classic Gadsden rattlesnake design on premium cotton. A timeless symbol of American independence.",
  },
  {
    id: "tee-liberty-death",
    name: '"Liberty or Death" Tee',
    price: "$59.99",
    image: tee4Img,
    tagline: "Flag Skull — White Edition",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Striking flag skull graphic on premium cotton. Give me liberty or give me death — the original American spirit.",
  },
  {
    id: "tee-1776-muskets",
    name: '"1776 Muskets" Tee',
    price: "$59.99",
    image: tee5Img,
    tagline: "Crossed Muskets — Charcoal",
    badge: null,
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Crossed muskets 1776 design on premium charcoal cotton. Honor the founders who fought for your freedom.",
  },
  {
    id: "tee-land-free",
    name: '"Land of the Free" Tee',
    price: "$59.99",
    image: tee6Img,
    tagline: "Eagle Edition — Red",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Screaming eagle design on premium cotton. Land of the free, home of the brave.",
  },
  // Hoodies (6)
  {
    id: "hoodie-defend",
    name: '"Defend" Hoodie',
    price: "$109.99",
    image: hoodieImg,
    tagline: "Defend The Constitution",
    badge: "NEW DROP",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Heavyweight 10oz fleece hoodie with front pouch pocket. Defend the Constitution print with distressed finish.",
  },
  {
    id: "hoodie-liberty-death",
    name: '"Liberty or Death" Hoodie',
    price: "$109.99",
    image: hoodie2Img,
    tagline: "Flag Skull Edition",
    badge: "🔥 HOT",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Flag skull graphic on premium heavyweight fleece. Double-lined hood, metal grommets, thick drawcord.",
  },
  {
    id: "hoodie-1776-eagle",
    name: '"1776 Eagle" Hoodie',
    price: "$109.99",
    image: hoodie3Img,
    tagline: "Screaming Eagle — Black",
    badge: "BESTSELLER",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Screaming eagle 1776 design on jet black heavyweight fleece. Our most popular hoodie.",
  },
  {
    id: "hoodie-wtp",
    name: '"WTP" Hoodie',
    price: "$109.99",
    image: hoodie4Img,
    tagline: "Distressed Print — Olive",
    badge: "NEW",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "We The People distressed print on olive heavyweight fleece. Vintage feel, modern comfort.",
  },
  {
    id: "hoodie-dont-tread",
    name: '"Don\'t Tread" Hoodie',
    price: "$109.99",
    image: hoodie5Img,
    tagline: "Back Print — Navy",
    badge: null,
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Large back print Gadsden design on navy heavyweight fleece. Front chest logo included.",
  },
  {
    id: "hoodie-old-glory",
    name: '"Old Glory" Hoodie',
    price: "$109.99",
    image: hoodie6Img,
    tagline: "Distressed Flag — Gray",
    badge: "LIMITED",
    category: "apparel",
    colors: APPAREL_COLORS,
    sizes: APPAREL_SIZES,
    description: "Distressed American flag wrap design on heather gray fleece. Limited edition — once they're gone, they're gone.",
  },
  // Tank Tops (6)
  {
    id: "tank-wtp",
    name: '"WTP" Tank',
    price: "$49.99",
    image: tank1Img,
    tagline: "We The People — Bold Print",
    badge: "NEW",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Lightweight, breathable tank with bold We The People print. Perfect for the gym or summer heat.",
  },
  {
    id: "tank-drip-flag",
    name: '"Drip Flag" Tank',
    price: "$49.99",
    image: tank2Img,
    tagline: "Distressed Flag — White",
    badge: "BESTSELLER",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Distressed American flag drip design. Moisture-wicking blend keeps you cool during any workout.",
  },
  {
    id: "tank-dont-tread",
    name: '"Don\'t Tread" Tank',
    price: "$49.99",
    image: tank3Img,
    tagline: "Gadsden Edition — Olive",
    badge: "🔥 HOT",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Gadsden rattlesnake tank in olive drab. Athletic cut, reinforced shoulders.",
  },
  {
    id: "tank-1776-eagle",
    name: '"1776 Eagle" Tank',
    price: "$49.99",
    image: tank4Img,
    tagline: "Three Star Eagle — Navy",
    badge: null,
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Three-star eagle design in navy. Built for the gym, worn with pride everywhere else.",
  },
  {
    id: "tank-liberty-torch",
    name: '"Liberty Torch" Tank',
    price: "$49.99",
    image: tank5Img,
    tagline: "13 Stars — Red",
    badge: "NEW",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Liberty torch with 13-star circle design. Breathable cotton-poly blend.",
  },
  {
    id: "tank-had-enough",
    name: '"Had Enough" Tank',
    price: "$49.99",
    image: tank6Img,
    tagline: "Flag Fist — Gray",
    badge: "FAN FAVORITE",
    category: "tank-tops",
    colors: TANK_COLORS,
    sizes: TANK_SIZES,
    description: "Raised fist with flag overlay. Heather gray athletic cut tank.",
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
  // March Banners (6)
  {
    id: "banner-had-enough",
    name: '"Had Enough" March Banner',
    price: "$69.99",
    image: bannerHadEnoughImg,
    tagline: "We The People Have Had Enough",
    badge: "BESTSELLER",
    category: "march-banners",
    colors: [],
    description: "3×5 foot heavy-duty polyester march banner with wooden pole sleeve. Double-sided print, reinforced edges. Grab it, raise it, march with it.",
  },
  {
    id: "banner-take-back",
    name: '"Take Back What\'s Ours" Banner',
    price: "$69.99",
    image: bannerTakeBackImg,
    tagline: "Reclaim Our Government",
    badge: "NEW",
    category: "march-banners",
    colors: [],
    description: "3×5 foot navy protest banner with gold eagle emblem. Wooden pole sleeve, brass grommets. Built for the frontlines of democracy.",
  },
  {
    id: "banner-parasites",
    name: '"No More Parasites" Banner',
    price: "$69.99",
    image: bannerParasitesImg,
    tagline: "No More Parasites In Power",
    badge: "🔥 HOT",
    category: "march-banners",
    colors: [],
    description: "3×5 foot crimson red march banner with Gadsden rattlesnake. Heavy-duty fabric, pole sleeve included. Send the message loud and clear.",
  },
  {
    id: "banner-coming",
    name: '"The People Are Coming" Banner',
    price: "$69.99",
    image: bannerComingImg,
    tagline: "They Can't Stop All Of Us",
    badge: "NEW DROP",
    category: "march-banners",
    colors: [],
    description: "3×5 foot black march banner with 13-star emblem. Double-sided, weather-resistant. The warning shot before the movement arrives.",
  },
  {
    id: "banner-our-rules",
    name: '"Our Country, Our Rules" Banner',
    price: "$69.99",
    image: bannerOurRulesImg,
    tagline: "Crossed Muskets — Olive Drab",
    badge: "LIMITED",
    category: "march-banners",
    colors: [],
    description: "3×5 foot military olive march banner with crossed muskets. Reinforced pole sleeve, built to fly in any weather. Your country, your rules.",
  },
  {
    id: "banner-drain",
    name: '"Drain Every Last One" Banner',
    price: "$69.99",
    image: bannerDrainImg,
    tagline: "Flag Skull — No Mercy Edition",
    badge: "FAN FAVORITE",
    category: "march-banners",
    colors: [],
    description: "3×5 foot charcoal black march banner with flag skull. Heavy-duty polyester, wooden pole sleeve. March until they hear you.",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Tank Tops", value: "tank-tops" },
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
