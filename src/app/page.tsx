import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
