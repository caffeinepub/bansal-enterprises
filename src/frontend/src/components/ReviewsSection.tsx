import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    id: "review-1",
    text: "Best service in Nakodar",
    author: "Local Customer",
    rating: 5,
  },
  {
    id: "review-2",
    text: "Good for electronic products",
    author: "Verified Buyer",
    rating: 5,
  },
  {
    id: "review-3",
    text: "A Genuine Electronic Shop in Nakodar. Trusted Brand Since 1973 In Nakodar.",
    author: "Surinder Bansal",
    rating: 5,
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.map((k, i) => (
        <Star
          key={k}
          size={14}
          className={i < count ? "fill-gold text-gold" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gold-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            What People Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {STAR_KEYS.map((k, i) => (
                <Star
                  key={k}
                  size={22}
                  className={
                    i < 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"
                  }
                />
              ))}
            </div>
            <span className="font-display text-3xl font-bold text-navy">
              4.5
            </span>
            <span className="text-gray-500 text-sm">(10 Google Reviews)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              data-ocid={`reviews.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-8 border border-gold/20 shadow-sm hover:shadow-gold transition-shadow"
            >
              <Stars count={review.rating} />
              <p className="text-gray-700 text-base leading-relaxed mt-4 mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-gold font-bold text-sm">
                  {review.author[0]}
                </div>
                <span className="text-navy font-semibold text-sm">
                  {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
