import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MovementPage from "./pages/MovementPage";
import OurStoryPage from "./pages/OurStoryPage";
import ShopPage from "./pages/ShopPage";
import VideosPage from "./pages/VideosPage";
import ContactPage from "./pages/ContactPage";
import ExportPage from "./pages/ExportPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/movement" element={<MovementPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/export" element={<ExportPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
