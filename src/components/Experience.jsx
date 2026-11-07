const jobs = [
  {
    role: "WordPress Developer",
    company: "vSplash Techlabs Pvt. Ltd.",
    period: "May 2025 – Present",
    points: [
      "Develop and maintain responsive WordPress and WooCommerce websites, translating Figma designs into production-ready experiences.",
      "Customize themes, layouts and CMS workflows using Beaver Builder and custom frontend code.",
      "Build custom plugin integrations and backend settings pages for client-specific requirements.",
      "Manage end-to-end delivery: design handoff, requirements, development, testing and launch.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Independent (US, Saudi Arabia and India clients)",
    period: "2024 – 2025",
    points: [
      "Built core modules of Makan Care, a home-maintenance platform for the Saudi market, including location-based search, booking flow, real-time tracking and digital guarantees.",
      "Built a WooCommerce site from Figma designs for Pranati Kejriwal, improving organic traffic by 20% and page load speed by 30% through SEO and image optimization.",
      "Delivered a WooCommerce site for Panorama Inc. with Zoho CRM integration for lead capture, and built a responsive Squarespace site for Little Miami Brewing Company.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Marmeto",
    period: "Feb 2024 – Apr 2024",
    points: [
      "Developed and maintained two Shopify e-commerce websites using Liquid for custom theme development.",
      "Wrote custom JavaScript for interactive product displays, improving engagement and user experience.",
      "Diagnosed and resolved performance and navigation issues across the storefront.",
    ],
  },
  {
    role: "Trainee Web Developer",
    company: "Thomson Reuters",
    period: "Feb 2022 – Dec 2023",
    points: [
      "Led WCAG 2.0 accessibility compliance initiatives across 120+ websites, conducting 50+ accessibility audits and contributing to a 70% improvement in accessibility scores.",
      "Built interactive UI components with HTML, CSS and JavaScript, tested across 10+ devices and browsers.",
      "Identified and fixed accessibility and usability issues to meet web standards.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 py-24 scroll-mt-16">
      <div className="max-w-[1920px] mx-auto">
        <p className="text-accent font-medium mb-2">Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold">Where I've worked</h2>

        <ol className="mt-12 ml-2 border-l border-border">
          {jobs.map((job) => (
            <li key={job.company + job.period} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-1.75 top-2 h-3 w-3 rounded-full bg-accent" aria-hidden="true"></span>
              <p className="text-sm text-accent font-medium">{job.period}</p>
              <h3 className="text-xl font-semibold mt-1">{job.role}</h3>
              <p className="text-muted">{job.company}</p>
              <ul className="mt-4 space-y-2 text-muted list-disc pl-5 max-w-3xl">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
