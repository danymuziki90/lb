import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Career from "@/components/sections/Career";
import Impact from "@/components/sections/Impact";
import PhotoMoments from "@/components/sections/PhotoMoments";
import Services from "@/components/sections/Services";
import InterventionMap from "@/components/sections/InterventionMap";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#apropos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-night"
      >
        Aller au contenu principal
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <PhotoMoments />
        <Impact />
        <Career />
        <Services />
        <InterventionMap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
