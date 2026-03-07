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
import patchImg from "@/assets/product-patch.jpg";
import pinImg from "@/assets/product-pin.jpg";
import flagImg from "@/assets/product-flag.jpg";
import yardSignImg from "@/assets/product-yardsign.jpg";
import bottleImg from "@/assets/product-bottle.jpg";
import koozieImg from "@/assets/product-koozie.jpg";
import keychainImg from "@/assets/product-keychain.jpg";
import decalImg from "@/assets/product-decal.jpg";

export type Category = "all" | "apparel" | "headwear" | "accessories" | "phone-cases";

export interface Product {
  name: string;
  price: string;
  image: string;
  tagline: string;
  badge: string | null;
  category: Category;
}

export const products: Product[] = [
  // Apparel
  {
    name: '"Had Enough" Tee',
    price: "$34.99",
    image: tshirtImg,
    tagline: "We The People Have Had Enough",
    badge: "BESTSELLER",
    category: "apparel",
  },
  {
    name: '"Defend" Hoodie',
    price: "$64.99",
    image: hoodieImg,
    tagline: "Defend The Constitution",
    badge: "NEW DROP",
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
    name: '"Liberty or Death" Hoodie',
    price: "$64.99",
    image: hoodie2Img,
    tagline: "Flag Skull Edition",
    badge: "🔥 HOT",
    category: "apparel",
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
  // Accessories
  {
    name: '"Don\'t Tread" Mug',
    price: "$19.99",
    image: mugImg,
    tagline: "Don't Tread On Us",
    badge: null,
    category: "accessories",
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
  {
    name: '"The People" Keychain',
    price: "$12.99",
    image: keychainImg,
    tagline: "Brass Finish — Engraved Script",
    badge: "NEW",
    category: "accessories",
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
];

export const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Apparel", value: "apparel" },
  { label: "Phone Cases", value: "phone-cases" },
  { label: "Headwear", value: "headwear" },
  { label: "Accessories", value: "accessories" },
];
