import HeroSection from "@/app/components/HeroSection";
import Brand from "@/app/components/Brand";
import Ceramics from "@/app/components/Ceramics";
import PopularProducts from "@/app/components/PopularProducts";
import Benefits from "@/app/components/Benefits";
import About from "@/app/components/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Brand />
      <Ceramics />
      <PopularProducts />
      <Benefits />
      <About />
    </div>
  );
}
