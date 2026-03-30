import { Clock, ShieldCheck, Tag, Wrench } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Clock,
    title: "50 Years Experience",
    text: "Five decades of trusted service means we've seen every technology wave — and helped customers navigate each one.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Products",
    text: "Every product we carry is 100% genuine, brand-authorized, and covered by full manufacturer warranty.",
  },
  {
    icon: Wrench,
    title: "After-Sales Service",
    text: "Our dedicated service team provides installation, maintenance, and repair support long after your purchase.",
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    text: "Competitive pricing matched to the market. Found it cheaper elsewhere? We'll match it, no questions asked.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            Why Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Choose Bansal Enterprises
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-5 shadow-navy">
                <feature.icon className="text-gold" size={28} />
              </div>
              <h3 className="font-display font-bold text-lg text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
