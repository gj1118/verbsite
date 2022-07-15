import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Faq from "../components/sections/Faq";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import Video from "../components/sections/Video";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Video />
      <Features />
      <About />
      <Pricing />

      <Faq />

      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
