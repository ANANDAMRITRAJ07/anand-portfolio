import { Accessibility, Code, Layers, Palette, Sparkles, Wrench } from "lucide-react";
import GlowCard from "./GlowCard";

const skillGroups = [
  { title: "Accessibility & Quality", icon: Accessibility, featured: true, blurb: "My signature focus: WCAG 2.0 compliance work across 120+ websites, backed by 50+ accessibility audits.", span: "lg:col-span-4", skills: ["WCAG 2.0", "Web Accessibility (A11y)", "Accessibility Auditing", "W3C Standards", "Usability"] },
  { title: "Web Development", icon: Code, span: "lg:col-span-2", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Cross-Browser Compatibility"] },
  { title: "WordPress & CMS", icon: Layers, span: "lg:col-span-2", skills: ["WordPress Customization", "WooCommerce", "Squarespace", "Beaver Builder", "Elementor", "Divi", "Custom Plugin Integration"] },
  { title: "UI/UX & Design", icon: Palette, span: "lg:col-span-2", skills: ["Figma", "Design-to-Development Handoff", "Photoshop", "Illustrator", "Canva"] },
  { title: "Tools & Optimization", icon: Wrench, span: "lg:col-span-2", skills: ["Git", "Browser DevTools", "SEO Optimization", "Performance Optimization"] },
  { title: "Also Working With", icon: Sparkles, span: "lg:col-span-6", skills: ["Shopify", "Liquid", "React (currently learning)", "Zoho CRM Integration"] },
];

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 scroll-mt-16">
      <div className="max-w-[1920px] mx-auto">
        <p className="text-accent font-medium mb-2">Skills</p>
        <h2 className="text-3xl md:text-5xl font-bold">What I work with</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <GlowCard key={group.title} className={`p-6 md:p-8 ${group.span} ${group.featured ? "md:col-span-2 bg-linear-to-br from-accent/10 via-surface to-surface" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className={`font-semibold ${group.featured ? "text-2xl" : "text-xl"}`}>{group.title}</h3>
                </div>

                {group.blurb && <p className="text-muted mb-5 max-w-xl">{group.blurb}</p>}

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted border border-border rounded-full px-3 py-1 hover:border-accent hover:text-accent transition">
                      {skill}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;