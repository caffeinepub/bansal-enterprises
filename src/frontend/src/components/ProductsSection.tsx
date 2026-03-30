import {
  Camera,
  Laptop,
  Smartphone,
  Speaker,
  Tv,
  WashingMachine,
} from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    icon: Tv,
    title: "Televisions",
    desc: "4K, OLED, QLED and Smart TVs from all leading brands. Transform your living room.",
  },
  {
    icon: Smartphone,
    title: "Smartphones & Mobiles",
    desc: "Latest flagship phones, budget smartphones, and accessories for every need.",
  },
  {
    icon: WashingMachine,
    title: "Home Appliances",
    desc: "Refrigerators, washing machines, ACs, and kitchen appliances for modern homes.",
  },
  {
    icon: Laptop,
    title: "Computers & Laptops",
    desc: "Business laptops, gaming rigs, desktops, and everything in between.",
  },
  {
    icon: Speaker,
    title: "Audio & Speakers",
    desc: "Premium soundbars, home theatre systems, earphones, and wireless speakers.",
  },
  {
    icon: Camera,
    title: "Cameras & Accessories",
    desc: "DSLR, mirrorless, action cameras plus lenses, tripods, and more.",
  },
];

const ocids = [
  "product.item.1",
  "product.item.2",
  "product.item.3",
  "product.item.4",
  "product.item.5",
  "product.item.6",
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Product Categories
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            A comprehensive selection across all major electronics categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              data-ocid={ocids[i]}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white/5 border border-white/10 rounded-lg p-7 hover:bg-white/10 hover:border-gold/40 transition-all cursor-default"
            >
              <div className="w-14 h-14 bg-gold/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                <product.icon className="text-gold" size={26} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {product.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {product.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
