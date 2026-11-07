import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Revisible",
    year: "Company project",
    description:
      "Responsive WordPress website for a digital marketing platform that helps businesses improve online visibility and generate leads. Added custom HTML, CSS and JavaScript with multiple libraries for interactions, animations and navigation.",
    tags: ["WordPress", "JavaScript", "Animations", "Responsive"],
    href: "https://www.revisible.com/in/",
  },
  {
    title: "WorldyReads",
    year: "Personal project",
    description:
      "A world-history publishing platform that I design, build and run on my own. I research, write and edit every article, and handle the layouts, custom styling, SEO and content organization.",
    tags: ["WordPress", "Elementor Pro", "Custom CSS", "SEO"],
    href: "https://worldyreads.com/",
  },
  {
    title: "Pranati Kejriwal",
    year: "Freelance · 2024",
    description:
      "WooCommerce website built from Figma designs, improving organic traffic by 20% and page load speed by 30% through SEO and image optimization. Includes responsive, cross-browser frontend components built with HTML, CSS and JavaScript.",
    tags: ["WooCommerce", "SEO", "Performance", "Figma to code"],
    href: "https://pranatikejriwall.com/",
  },
  {
    title: "Panorama Inc.",
    year: "Freelance · 2024",
    description:
      "WooCommerce website built from Figma designs, with Zoho CRM integrated into the site's forms to streamline lead capture and data flow. Configured form-to-CRM workflows, validated lead data and troubleshot integration issues to keep data syncing reliably.",
    tags: ["WooCommerce", "Zoho CRM", "Lead capture", "Figma to code"],
    href: null,
  },
  {
    title: "Little Miami Brewing Company",
    year: "Freelance · Oct – Nov 2024",
    description:
      "Responsive Squarespace website for a US-based craft brewery, showcasing its beers, food menu, taproom and event spaces. Added custom HTML, CSS and JavaScript for interactive components and smoother navigation, with features for online food ordering and event inquiries.",
    tags: ["Squarespace", "Custom CSS", "JavaScript", "Responsive"],
    href: "https://littlemiamibrewing.com/",
  },
  {
    title: "Makan Care",
    year: "Freelance · Jan – Mar 2025",
    description:
      "Core modules of a home-maintenance platform for the Saudi Arabian market: location-based search, a booking flow, real-time tracking and a digital guarantee system, built without a pre-existing design system.",
    tags: ["Product logic", "Booking flow", "Real-time tracking"],
    href: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 scroll-mt-16">
      <div className="max-w-[1920px] mx-auto">
        <p className="text-accent font-medium mb-2">Projects</p>
        <h2 className="text-3xl md:text-5xl font-bold">Selected work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project) => (
            <article key={project.title} className="bg-surface border border-border rounded-2xl p-6 flex flex-col">
              <p className="text-sm text-accent font-medium">{project.year}</p>
              <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
              <p className="text-muted mt-3 flex-1">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <li key={tag} className="text-xs text-muted border border-border rounded-full px-3 py-1">
                    {tag}
                  </li>
                ))}
              </ul>

              {project.href ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-6 text-accent font-medium hover:underline">
                  Visit site <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <p className="mt-6 text-sm text-muted">Live site no longer available</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
