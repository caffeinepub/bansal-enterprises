import { Award, HeadphonesIcon, ShoppingBag, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, value: "50+", label: "Years of Excellence" },
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: ShoppingBag, value: "4.5★", label: "Google Rating" },
  { icon: HeadphonesIcon, value: "Best", label: "Service in Nakodar" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              A Legacy Built on
              <span className="text-gold"> Trust &amp; Quality</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Founded in 1973 in Nakodar, Punjab, Bansal Enterprises began as
                a humble shop with a simple vision: to bring the finest
                electronics to every household in the region.
              </p>
              <p>
                Over five decades, we've grown into Nakodar's most trusted
                electronics destination. Customers across Krishan Nagar and
                beyond have relied on us for genuine products, honest advice,
                and dependable after-sales service.
              </p>
              <p>
                We are a genuine electronics shop — a trusted brand since 1973
                in Nakodar. Our expert staff brings decades of hands-on
                knowledge, helping you find not just the right product, but the
                perfect fit for your needs and budget.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-gold-pale rounded-lg p-6 border border-gold/20 hover:shadow-gold transition-shadow"
              >
                <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="text-gold" size={22} />
                </div>
                <div className="font-display text-3xl font-bold text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
