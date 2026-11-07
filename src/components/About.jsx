import { useState } from "react";
import { ChevronDown } from "lucide-react";
import GlowCard from "./GlowCard";
import CountUp from "./CountUp";

const highlights = [
  { to: 4, suffix: "+", label: "Years of experience" },
  { to: 120, suffix: "+", label: "Websites made WCAG compliant" },
  { to: 50, suffix: "+", label: "Accessibility audits" },
  { to: 70, suffix: "%", label: "Accessibility score improvement" },
];

const paragraphs = [
  "I’m Anand, a Frontend Developer with 4+ years of experience building and delivering production-ready, responsive, accessible, and performance-focused websites for clients across the US, UK, Australia, Canada, and APAC. My experience spans WordPress, WooCommerce, Shopify, Liquid, JavaScript, HTML, CSS, and modern frontend development, with a growing focus on React and product engineering.",
  "At vSplash Techlabs, I work on production WordPress and WooCommerce websites, translating Figma designs into functional, responsive experiences while handling custom integrations, backend settings, CMS workflows, and end-to-end delivery. This role has strengthened my ability to understand both design requirements and underlying business objectives and independently take projects from development through launch.",
  "Previously at Thomson Reuters, I worked extensively on web accessibility and WCAG compliance across 120+ websites, conducting 50+ accessibility audits and contributing to a 70% improvement in accessibility scores. This experience developed my strong understanding of inclusive design, usability, cross-browser compatibility, and building web experiences that work for diverse audiences.",
  "At Marmeto, I worked on Shopify e-commerce solutions using Liquid and JavaScript, developing custom themes, interactive product experiences, and resolving performance and navigation challenges for the APAC market.",
  "Alongside my professional experience, I’ve continued building independent and company projects that allow me to work across different aspects of web development. I built and continue to develop WorldyReads.com, a world-history publishing platform focused on content, SEO, performance, responsive design, and scalable website architecture. I’ve also contributed to Revisible.com, a company project that has further strengthened my experience in building and refining production web experiences.",
  "My project experience also includes Makan Care, a Saudi Arabian home-maintenance platform involving location-based search, booking flows, real-time tracking, and digital guarantees, as well as WooCommerce and Squarespace projects for international clients.",
  "With an engineering background from Visvesvaraya Technological University and hands-on experience across accessibility, CMS platforms, e-commerce, SEO, and frontend development, I bring a practical, product-focused approach to solving web problems. I’m now focused on taking that experience further into React-based frontend and product engineering, while continuing to build fast, accessible, and meaningful digital experiences.",
];

const VISIBLE_COUNT = 3;

function About() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? paragraphs : paragraphs.slice(0, VISIBLE_COUNT);

  return (
    <section id="about" className="px-6 md:px-16 py-20 scroll-mt-16">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-12 lg:gap-20">
        <div>
          <p className="text-accent font-medium mb-2">About me</p>
          <h2 className="text-3xl md:text-4xl font-bold">Building the web that works for everyone</h2>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item) => (
              <GlowCard key={item.label} className="p-5">
                <p className="text-2xl md:text-3xl font-bold text-accent"><CountUp to={item.to} suffix={item.suffix} /></p>
                <p className="text-muted text-xs md:text-sm mt-1">{item.label}</p>
              </GlowCard>
            ))}
          </div>
        </div>

        <div>
          <div id="about-text" className="space-y-4 text-muted text-base leading-relaxed max-w-2xl">
            {visible.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>

          <button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls="about-text" className="inline-flex items-center gap-2 mt-6 text-accent font-medium hover:underline">
            {expanded ? "Show less" : "Read more"}
            <ChevronDown size={18} aria-hidden="true" className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;