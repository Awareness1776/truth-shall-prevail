import { downloadShopifyCSV } from "@/utils/shopify-csv-export";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ExportPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="font-display text-3xl text-foreground">Export Products</h1>
        <p className="text-muted-foreground font-body">
          Download all product data as a Shopify-compatible CSV file including titles, descriptions, prices, image URLs, variants (sizes &amp; colors), and inventory.
        </p>
        <Button size="xl" onClick={downloadShopifyCSV} className="font-display tracking-wider">
          <Download className="mr-2 h-5 w-5" />
          DOWNLOAD SHOPIFY CSV
        </Button>
      </div>
    </div>
  );
};

export default ExportPage;
