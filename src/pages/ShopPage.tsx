import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductShowcase from "@/components/ProductShowcase";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        <ProductShowcase />
      </div>
      <SiteFooter />
    </div>
  );
};

export default ShopPage;
