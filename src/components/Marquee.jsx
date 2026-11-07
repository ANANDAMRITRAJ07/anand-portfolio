const items = ["HTML5", "CSS3", "JavaScript", "React", "WordPress", "WooCommerce", "Shopify", "Liquid", "Squarespace", "Figma", "WCAG 2.0", "Accessibility Auditing", "SEO", "Performance", "Responsive Design", "Zoho CRM", "Git"];

function Row({ hidden = false }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4">
      {items.map((item) => (
        <li key={item} className="whitespace-nowrap rounded-full border border-border bg-surface px-5 py-2 text-sm text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-border py-6" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

export default Marquee;