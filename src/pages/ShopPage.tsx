import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductShowcase from "@/components/ProductShowcase";
import MadeInUSA from "@/components/MadeInUSA";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <ProductShowcase />
        <MadeInUSA />
      </div>
      <SiteFooter />
    </div>
  );
};

export default ShopPage;
