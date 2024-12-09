import HeroSection from "@/app/about/components/HeroSection";
import About from "@/app/components/About";
import Service from "@/app/about/components/Service";
import Brand from "@/app/components/Brand";
import Benefits from "@/app/about/components/Benifits";

export default function AboutPage(){
    return(
        <div>
            <HeroSection />
            <About />
            <Service />
            <Brand />
            <Benefits />
        </div>
    );
}