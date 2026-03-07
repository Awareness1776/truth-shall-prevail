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

export type Category = "all" | "apparel" | "tank-tops" | "headwear" | "accessories" | "phone-cases" | "mugs" | "keychains";

export interface Product {
  name: string;
  price: string;
  image: string;
  tagline: string;
  badge: string | null;
  category: Category;
}

export const products: Product[] = [
  // T-Shirts (6)
  {
    name: '"Had Enough" Tee',
    price: "$34.99",
    image: tshirtImg,
    tagline: "We The People Have Had Enough",
    badge: "BESTSELLER",
    category: "apparel",
  },
  {
    name: '"Article V" Tee',
    price: "$34.99",
    image: tee2Img,
    tagline: "The People's Reset",
    badge: "NEW",
    category: "apparel",
  },
  {
    name: '"Don\'t Tread" Tee',
    price: "$34.99",
    image: tee3Img,
    tagline: "Gadsden Rattlesnake Edition",
    badge: null,
    category: "apparel",
  },
  {
    name: '"Liberty or Death" Tee',
    price: "$34.99",
    image: tee4Img,
    tagline: "Flag Skull — White Edition",
    badge: "🔥 HOT",
    category: "apparel",
  },
  {
    name: '"1776 Muskets" Tee',
    price: "$34.99",
    image: tee5Img,
    tagline: "Crossed Muskets — Charcoal",
    badge: null,
    category: "apparel",
  },
  {
    name: '"Land of the Free" Tee',
    price: "$34.99",
    image: tee6Img,
    tagline: "Eagle Edition — Red",
    badge: "NEW DROP",
    category: "apparel",
  },
  // Hoodies (6)
  {
    name: '"Defend" Hoodie',
    price: "$64.99",
    image: hoodieImg,
    tagline: "Defend The Constitution",
    badge: "NEW DROP",
    category: "apparel",
  },
  {
    name: '"Liberty or Death" Hoodie',
    price: "$64.99",
    image: hoodie2Img,
    tagline: "Flag Skull Edition",
    badge: "🔥 HOT",
    category: "apparel",
  },
  {
    name: '"1776 Eagle" Hoodie',
    price: "$64.99",
    image: hoodie3Img,
    tagline: "Screaming Eagle — Black",
    badge: "BESTSELLER",
    category: "apparel",
  },
  {
    name: '"WTP" Hoodie',
    price: "$64.99",
    image: hoodie4Img,
    tagline: "Distressed Print — Olive",
    badge: "NEW",
    category: "apparel",
  },
  {
    name: '"Don\'t Tread" Hoodie',
    price: "$64.99",
    image: hoodie5Img,
    tagline: "Back Print — Navy",
    badge: null,
    category: "apparel",
  },
  {
    name: '"Old Glory" Hoodie',
    price: "$64.99",
    image: hoodie6Img,
    tagline: "Distressed Flag — Gray",
    badge: "LIMITED",
    category: "apparel",
  },
  // Tank Tops (6)
  {
    name: '"WTP" Tank',
    price: "$29.99",
    image: tank1Img,
    tagline: "We The People — Bold Print",
    badge: "NEW",
    category: "tank-tops",
  },
  {
    name: '"Drip Flag" Tank',
    price: "$29.99",
    image: tank2Img,
    tagline: "Distressed Flag — White",
    badge: "BESTSELLER",
    category: "tank-tops",
  },
  {
    name: '"Don\'t Tread" Tank',
    price: "$29.99",
    image: tank3Img,
    tagline: "Gadsden Edition — Olive",
    badge: "🔥 HOT",
    category: "tank-tops",
  },
  {
    name: '"1776 Eagle" Tank',
    price: "$29.99",
    image: tank4Img,
    tagline: "Three Star Eagle — Navy",
    badge: null,
    category: "tank-tops",
  },
  {
    name: '"Liberty Torch" Tank',
    price: "$29.99",
    image: tank5Img,
    tagline: "13 Stars — Red",
    badge: "NEW",
    category: "tank-tops",
  },
  {
    name: '"Had Enough" Tank',
    price: "$29.99",
    image: tank6Img,
    tagline: "Flag Fist — Gray",
    badge: "FAN FAVORITE",
    category: "tank-tops",
  },
  // Headwear
  {
    name: '"1776" Dad Cap',
    price: "$29.99",
    image: capImg,
    tagline: "The Year It All Began",
    badge: null,
    category: "headwear",
  },
  {
    name: '"WTP" Beanie',
    price: "$24.99",
    image: beanieImg,
    tagline: "We The People — Embroidered",
    badge: "NEW",
    category: "headwear",
  },
  // Mugs (6)
  {
    name: '"Don\'t Tread" Mug',
    price: "$19.99",
    image: mugImg,
    tagline: "Don't Tread On Us",
    badge: null,
    category: "mugs",
  },
  {
    name: '"WTP Flag" Mug',
    price: "$19.99",
    image: mug2Img,
    tagline: "We The People — White Ceramic",
    badge: "NEW",
    category: "mugs",
  },
  {
    name: '"1776 Eagle" Mug',
    price: "$22.99",
    image: mug3Img,
    tagline: "Eagle Crest — Navy Ceramic",
    badge: "BESTSELLER",
    category: "mugs",
  },
  {
    name: '"2nd Amendment" Mug',
    price: "$19.99",
    image: mug4Img,
    tagline: "2A Shield — Full Wrap Print",
    badge: "🔥 HOT",
    category: "mugs",
  },
  {
    name: '"Flag Skull" Mug',
    price: "$22.99",
    image: mug5Img,
    tagline: "Liberty Skull — Black Ceramic",
    badge: "LIMITED",
    category: "mugs",
  },
  {
    name: '"Betsy Ross" Mug',
    price: "$19.99",
    image: mug6Img,
    tagline: "13-Star Flag — Gold Rim",
    badge: "FAN FAVORITE",
    category: "mugs",
  },
  {
    name: '"RISE" Poster',
    price: "$14.99",
    image: posterImg,
    tagline: "18×24 Screenprint Style",
    badge: "LIMITED",
    category: "accessories",
  },
  {
    name: "Sticker Pack (6pc)",
    price: "$12.99",
    image: stickersImg,
    tagline: "Slap 'Em Everywhere",
    badge: "FAN FAVORITE",
    category: "accessories",
  },
  {
    name: '"WTP" Morale Patch',
    price: "$9.99",
    image: patchImg,
    tagline: "Velcro-Backed — Tactical Style",
    badge: "NEW",
    category: "accessories",
  },
  {
    name: '"Old Glory" Enamel Pin',
    price: "$8.99",
    image: pinImg,
    tagline: "Gold Finish — Lapel Ready",
    badge: null,
    category: "accessories",
  },
  {
    name: '"Don\'t Tread" 3×5 Flag',
    price: "$24.99",
    image: flagImg,
    tagline: "Gadsden Edition — Double-Sided",
    badge: "🔥 HOT",
    category: "accessories",
  },
  {
    name: '"WTP" Yard Sign',
    price: "$14.99",
    image: yardSignImg,
    tagline: "18×24 — Metal Stakes Included",
    badge: "NEW",
    category: "accessories",
  },
  {
    name: '"1776 Eagle" Water Bottle',
    price: "$29.99",
    image: bottleImg,
    tagline: "32oz Stainless Steel — Engraved",
    badge: "BESTSELLER",
    category: "accessories",
  },
  {
    name: '"Don\'t Tread" Koozie',
    price: "$7.99",
    image: koozieImg,
    tagline: "Neoprene Can Cooler",
    badge: null,
    category: "accessories",
  },
  // Keychains (6)
  {
    name: '"The People" Keychain',
    price: "$12.99",
    image: keychainImg,
    tagline: "Brass Finish — Engraved Script",
    badge: "NEW",
    category: "keychains",
  },
  {
    name: '"1776 Eagle" Keychain',
    price: "$14.99",
    image: keychain2Img,
    tagline: "Brass — Eagle Emblem",
    badge: "BESTSELLER",
    category: "keychains",
  },
  {
    name: '"Don\'t Tread" Keychain',
    price: "$12.99",
    image: keychain3Img,
    tagline: "Gadsden Medallion — Bronze",
    badge: "🔥 HOT",
    category: "keychains",
  },
  {
    name: '"Old Glory" Bottle Opener',
    price: "$14.99",
    image: keychain4Img,
    tagline: "Flag Opener — Stainless Steel",
    badge: "FAN FAVORITE",
    category: "keychains",
  },
  {
    name: '"2A Shield" Keychain',
    price: "$12.99",
    image: keychain5Img,
    tagline: "Second Amendment — Gunmetal",
    badge: null,
    category: "keychains",
  },
  {
    name: '"Flag Skull" Keychain',
    price: "$14.99",
    image: keychain6Img,
    tagline: "Patriot Skull — Antique Bronze",
    badge: "LIMITED",
    category: "keychains",
  },
  {
    name: '"Flag Skull" Car Decal',
    price: "$6.99",
    image: decalImg,
    tagline: "Die-Cut Vinyl — Weather Proof",
    badge: "FAN FAVORITE",
    category: "accessories",
  },
  // Phone Cases
  {
    name: '"WTP Eagle" Phone Case',
    price: "$24.99",
    image: caseEagleImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "NEW",
    category: "phone-cases",
  },
  {
    name: '"2nd Amendment" Phone Case',
    price: "$24.99",
    image: case2aImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "🔥 HOT",
    category: "phone-cases",
  },
  {
    name: '"Flag Skull" Phone Case',
    price: "$24.99",
    image: caseSkullImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "BESTSELLER",
    category: "phone-cases",
  },
  {
    name: '"WTP Flag" Phone Case',
    price: "$24.99",
    image: caseWtpImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "NEW",
    category: "phone-cases",
  },
  {
    name: '"Don\'t Tread" Phone Case',
    price: "$24.99",
    image: caseGadsdenImg,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "FAN FAVORITE",
    category: "phone-cases",
  },
  {
    name: '"1776 Flag" Phone Case',
    price: "$24.99",
    image: case1776Img,
    tagline: "iPhone & Samsung — Tough Case",
    badge: "LIMITED",
    category: "phone-cases",
  },
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Tank Tops", value: "tank-tops" },
  { label: "Mugs", value: "mugs" },
  { label: "Keychains", value: "keychains" },
  { label: "Phone Cases", value: "phone-cases" },
  { label: "Headwear", value: "headwear" },
  { label: "Accessories", value: "accessories" },
];
