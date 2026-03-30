export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Brands", href: "#brands" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-navy-dark border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gold/20 flex items-center justify-center">
                <img
                  src="/assets/generated/logo-transparent.dim_200x200.png"
                  alt="Bansal Enterprises"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-white text-base block">
                  Bansal Enterprises
                </span>
                <span className="text-gold text-xs tracking-wider">
                  ELECTRONICS
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Nakodar's most trusted electronics destination since 1973. Quality
              products, honest prices, expert advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold text-sm tracking-widest uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-2 text-white/50 text-sm">
              <p>Jalandhar Rd, Krishan Nagar</p>
              <p>Nakodar, Punjab 144040</p>
              <p className="mt-3">
                <a
                  href="tel:09814102261"
                  className="hover:text-gold transition-colors"
                >
                  098141 02261
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919814102261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp: 098141 02261
                </a>
              </p>
              <p className="mt-3">Open daily · Closes 8 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {year} Bansal Enterprises. All Rights Reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/60 text-xs transition-colors flex items-center gap-1"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
