import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import TechText from "./TechText";

const HeroScene = lazy(() => import("./HeroScene"));

const roles = ["Frontend Developer", "Web Designer", "Accessibility Advocate", "WooCommerce Builder"];

const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

function useTypewriter(words, reduceMotion) {
  const [text, setText] = useState(reduceMotion ? words[0] : "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const word = words[index];
    const delay = deleting ? 40 : text === word ? 1600 : 80;
    const timer = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, reduceMotion]);

  return text;
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(roles, reduceMotion);
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    setShow3D(!reduceMotion && window.matchMedia("(min-width: 1024px)").matches);
  }, [reduceMotion]);

  return (
    <section id="home" className="relative isolate min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)" }} />
        <motion.div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" animate={reduceMotion ? undefined : { x: [0, 80, -40, 0], y: [0, 40, 80, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-0 right-1/4 h-[24rem] w-[24rem] rounded-full bg-sky-500/15 blur-3xl" animate={reduceMotion ? undefined : { x: [0, -70, 30, 0], y: [0, -60, -20, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {show3D && (
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/2">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <motion.div className="max-w-[1920px] mx-auto w-full" initial={reduceMotion ? false : "hidden"} animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
        <motion.p variants={item} className="inline-flex items-center gap-2 text-accent font-medium mb-4 border border-border rounded-full px-4 py-1 text-sm bg-surface/60 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true"></span>
          Open for new opportunities
        </motion.p>

        <motion.h1 variants={item} className="max-w-5xl">
          <TechText text="Anand Amrit Raj" />
        </motion.h1>

        <motion.div variants={item} className="mt-4">
          <h2 className="sr-only">Frontend Developer & Web Designer</h2>
          <p aria-hidden="true" className="text-2xl md:text-4xl text-muted font-display min-h-[1.5em]">
            {typed}
            <span className={`inline-block w-[3px] h-[1em] bg-accent align-middle ml-1 ${reduceMotion ? "" : "animate-pulse"}`}></span>
          </p>
        </motion.div>

        <motion.p variants={item} className="text-muted text-lg mt-6 max-w-2xl">
          I build responsive, accessible, performance-focused websites for international clients across the US, UK, Australia, Canada and APAC.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
          <a href="#projects" className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 transition">
            View work <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href="/Anand-Amrit-Raj-Resume.pdf" download className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full hover:border-accent hover:text-accent transition">
            Download resume <Download size={18} aria-hidden="true" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full hover:border-accent hover:text-accent transition">
            Contact <Mail size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;