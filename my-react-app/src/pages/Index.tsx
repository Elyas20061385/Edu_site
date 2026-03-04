import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CourseGrid />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
