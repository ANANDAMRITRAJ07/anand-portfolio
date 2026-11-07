const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-16 py-10">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <p className="text-muted text-sm">© {new Date().getFullYear()} Anand Amrit Raj. All rights reserved.</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm text-muted">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
