const Footer = () => {
  return (
    <footer className="py-12" style={{ backgroundColor: 'hsl(var(--footer-bg))', color: 'hsl(var(--footer-foreground))' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                <span className="font-mono text-primary-foreground font-bold text-xs">{`</>`}</span>
              </div>
              <span className="font-display font-bold text-white">
                Dev<span className="text-primary">Stream</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'hsl(var(--footer-muted))' }}>
              The premier platform for learning modern web development.
            </p>
          </div>
          {[
            {
              title: "Platform",
              links: ["All Courses", "Roadmaps", "Bootcamps", "Pricing"],
            },
            {
              title: "Resources",
              links: ["Blog", "Docs", "Community", "Changelog"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Contact", "Terms"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-3 text-white">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs hover:text-white transition-colors"
                      style={{ color: 'hsl(var(--footer-muted))' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs" style={{ color: 'hsl(var(--footer-muted))' }}>
          © 2025 DevStream. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
