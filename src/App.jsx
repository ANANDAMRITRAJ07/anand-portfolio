import { useEffect } from "react";
import Lenis from "lenis";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true, anchors: true });

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-black focus:font-semibold focus:px-4 focus:py-2 focus:rounded-full">Skip to content</a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main id="main" className="bg-bg text-text">
        <Reveal><Hero /></Reveal>
        <Marquee />
        <Reveal><About /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
    </>
  );
}

export default App;