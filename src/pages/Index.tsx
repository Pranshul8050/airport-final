import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import QuickActions from "@/components/QuickActions";
import ServiceCards from "@/components/ServiceCards";
import EnhanceExperience from "@/components/EnhanceExperience";
import NewsSection from "@/components/NewsSection";
import GoodToKnow from "@/components/GoodToKnow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <QuickActions />
      <ServiceCards />
      <EnhanceExperience />
      <NewsSection />
      <GoodToKnow />
      <Footer />
    </div>
  );
};

export default Index;
