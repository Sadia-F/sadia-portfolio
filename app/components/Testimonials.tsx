"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Sadia is an exceptional developer with a rare combination of technical skill and user empathy. She consistently delivers thoughtful solutions.",
    name: "Professor Name",
    title: "Computer Science Professor",
    company: "NYIT",
  },
  // Add more testimonials from professors, managers, or peers
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream dark:bg-deep-slate rounded-xl p-6 shadow-lg relative"
            >
              <span className="text-5xl text-warm-brown dark:text-terracotta opacity-20 absolute top-2 right-4">
                "
              </span>
              <p className="text-gray-700 dark:text-gray-300 italic mt-2 relative z-10">
                {testimonial.quote}
              </p>
              <div className="mt-4">
                <p className="font-bold text-dark-brown dark:text-cream">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}