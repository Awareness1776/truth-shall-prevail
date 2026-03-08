import { products } from "@/data/products";

const SHOPIFY_HEADERS = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Product Category",
  "Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Option2 Name",
  "Option2 Value",
  "Variant SKU",
  "Variant Grams",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Compare At Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Image Src",
  "Image Position",
  "Image Alt Text",
  "SEO Title",
  "SEO Description",
  "Status",
];

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function priceToNumber(price: string): string {
  return price.replace("$", "");
}

function categoryToType(category: string): string {
  const map: Record<string, string> = {
    apparel: "T-Shirts & Hoodies",
    "tank-tops": "Tank Tops",
    headwear: "Headwear",
    mugs: "Mugs",
    drinkware: "Drinkware",
    keychains: "Keychains",
    fitness: "Fitness Gear",
    posters: "Posters",
    accessories: "Accessories",
    "phone-cases": "Phone Cases",
    "car-stickers": "Car Stickers",
    "march-banners": "March Banners",
  };
  return map[category] || category;
}

function buildImageUrl(imagePath: string): string {
  // Images are local assets — use a placeholder base URL for Shopify import
  // Replace this with your actual CDN/domain when uploading
  return `https://yourstore.com/images/${imagePath.split("/").pop()}`;
}

export function generateShopifyCSV(): string {
  const rows: string[][] = [];
  rows.push(SHOPIFY_HEADERS);

  for (const product of products) {
    const handle = product.id;
    const title = product.name.replace(/"/g, "");
    const bodyHtml = `<p>${product.description || product.tagline}</p>`;
    const vendor = "We The People";
    const type = categoryToType(product.category);
    const tags = [product.category, product.badge].filter(Boolean).join(", ");
    const price = priceToNumber(product.price);
    const imageUrl = buildImageUrl(product.image);

    const hasSizes = product.sizes && product.sizes.length > 0;
    const hasColors = product.colors.length > 0;

    // If no variants at all, single row
    if (!hasSizes && !hasColors) {
      rows.push([
        handle, title, bodyHtml, vendor, "", type, tags, "TRUE",
        "", "", "", "",
        handle.toUpperCase(), "0", "shopify", "100", "deny", "manual",
        price, "", "TRUE", "TRUE",
        imageUrl, "1", title,
        title, product.description || product.tagline, "active",
      ]);
      continue;
    }

    // Generate variant rows
    const sizes = hasSizes ? product.sizes! : [""];
    const colors = hasColors ? product.colors : [{ name: "", hex: "" }];

    let isFirstRow = true;

    for (const color of colors) {
      for (const size of sizes) {
        const skuParts = [handle.toUpperCase()];
        if (color.name) skuParts.push(color.name.replace(/\s+/g, "-").toUpperCase());
        if (size) skuParts.push(size);
        const sku = skuParts.join("-");

        const row: string[] = [];

        if (isFirstRow) {
          row.push(
            handle, title, bodyHtml, vendor, "", type, tags, "TRUE",
            hasColors ? "Color" : "", hasColors ? color.name : "",
            hasSizes ? "Size" : "", hasSizes ? size : "",
            sku, "0", "shopify", "100", "deny", "manual",
            price, "", "TRUE", "TRUE",
            imageUrl, "1", title,
            title, product.description || product.tagline, "active",
          );
          isFirstRow = false;
        } else {
          row.push(
            handle, "", "", "", "", "", "", "",
            hasColors ? "Color" : "", hasColors ? color.name : "",
            hasSizes ? "Size" : "", hasSizes ? size : "",
            sku, "0", "shopify", "100", "deny", "manual",
            price, "", "TRUE", "TRUE",
            "", "", "",
            "", "", "",
          );
        }

        rows.push(row);
      }
    }
  }

  return rows.map((row) => row.map(escapeCSV).join(",")).join("\n");
}

export function downloadShopifyCSV() {
  const csv = generateShopifyCSV();
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wtp-shopify-products.csv";
  link.click();
  URL.revokeObjectURL(url);
}
