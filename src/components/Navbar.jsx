import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["#home", ...links.map((link) => link.href)];
    const sections = ids.map((id) => document.querySelector(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "home" ? "" : "#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur border-b border-border">
      <nav aria-label="Main" className="flex items-center justify-between px-6 md:px-16 h-16 max-w-[1920px] mx-auto">
        <a href="#home" className="font-bold text-lg">
          Anand<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} aria-current={active === link.href ? "true" : undefined} className={`hover:text-accent transition ${active === link.href ? "text-accent" : ""}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} aria-current={active === link.href ? "true" : undefined} className={`block py-1 hover:text-accent ${active === link.href ? "text-accent" : ""}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;