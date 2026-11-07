import { Mail, ArrowUpRight } from "lucide-react";
import CharGrid from "./CharGrid";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

const contacts = [
  { label: "Email", value: "anandamritraj18@gmail.com", href: "mailto:anandamritraj18@gmail.com", icon: <Mail size={24} aria-hidden="true" />, external: false },
  { label: "LinkedIn", value: "anand-amrit-raj0709", href: "https://www.linkedin.com/in/anand-amrit-raj0709/", icon: <LinkedInIcon />, external: true },
  { label: "GitHub", value: "ANANDAMRITRAJ07", href: "https://github.com/ANANDAMRITRAJ07", icon: <GitHubIcon />, external: true },
];

function Contact() {
  return (
    <section id="contact" className="relative isolate px-6 md:px-16 py-24 scroll-mt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)" }}>
        <CharGrid />
      </div>
      <div className="max-w-[1920px] mx-auto">
        <p className="text-accent font-medium mb-2">Contact</p>
        <h2 className="text-3xl md:text-5xl font-bold">Let's work together</h2>
        <p className="text-muted text-lg mt-6 max-w-2xl">Have a project in mind, or want to talk about accessible, performance-focused web development? Send me a message and I'll get back to you.</p>

        <a href="mailto:anandamritraj18@gmail.com" className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition mt-8">
          Say hello <Mail size={18} aria-hidden="true" />
        </a>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-4 bg-surface border border-border rounded-2xl p-6 hover:border-accent transition h-full"
              >
                <span className="text-accent">{item.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted">{item.label}</span>
                  <span className="block font-medium truncate">{item.value}</span>
                </span>
                <ArrowUpRight size={18} className="text-muted group-hover:text-accent transition" aria-hidden="true" />
                {item.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
