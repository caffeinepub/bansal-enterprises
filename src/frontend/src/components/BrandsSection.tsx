import { motion } from "motion/react";

const brands = [
  "Samsung",
  "Sony",
  "LG",
  "Apple",
  "Panasonic",
  "Philips",
  "Whirlpool",
  "Dell",
  "HP",
  "Lenovo",
];

const ocids = [
  "brand.item.1",
  "brand.item.2",
  "brand.item.3",
  "brand.item.4",
  "brand.item.5",
  "brand.item.6",
  "brand.item.7",
  "brand.item.8",
  "brand.item.9",
  "brand.item.10",
];

export default function BrandsSection() {
  return (
    <section id="brands" className="py-20 bg-gold-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold-dark font-bold text-sm tracking-widest uppercase mb-3">
            Trusted Partners
          </p>
          <h2 className="font-display text-4xl font-bold text-navy">
            Top Brands We Carry
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              data-ocid={ocids[i]}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white border-2 border-navy/10 rounded-sm font-display font-bold text-navy text-base shadow-xs hover:border-gold hover:text-gold-dark hover:shadow-gold transition-all cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
