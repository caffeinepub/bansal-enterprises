import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1200x500.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-gold/60 bg-gold/10 backdrop-blur-sm"
        >
          <span className="text-gold font-bold text-2xl font-display">50+</span>
          <span className="text-gold/90 font-semibold text-sm tracking-widest uppercase">
            Years of Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Your Trusted <span className="text-gold">Electronics</span> Partner
          <br />
          <span className="text-white/80 text-3xl sm:text-4xl md:text-5xl">
            Since 1973
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A genuine electronics shop in Nakodar — trusted by thousands of
          customers since 1973. Quality products, honest prices, expert advice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => scrollTo("#products")}
            className="px-8 py-4 bg-gold text-navy font-bold text-base rounded-sm hover:bg-gold-light transition-all shadow-gold hover:scale-105"
          >
            Explore Products
          </button>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 border-2 border-white/50 text-white font-semibold text-base rounded-sm hover:border-gold hover:text-gold transition-all"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
