import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-navy" : "bg-navy/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gold/20 flex items-center justify-center flex-shrink-0">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="Bansal Enterprises Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg leading-tight block">
                Bansal Enterprises
              </span>
              <span className="text-gold text-xs font-medium tracking-wider">
                ELECTRONICS
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                data-ocid="nav.link"
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-white/80 hover:text-gold transition-colors text-sm font-medium tracking-wide rounded"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="ml-4 px-5 py-2 bg-gold text-navy font-semibold text-sm rounded-sm hover:bg-gold-light transition-colors"
            >
              Get In Touch
            </button>
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark border-t border-gold/20"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  data-ocid="nav.link"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 transition-colors text-sm font-medium rounded"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="mt-2 px-5 py-3 bg-gold text-navy font-semibold text-sm rounded-sm"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
