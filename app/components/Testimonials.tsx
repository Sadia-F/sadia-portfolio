"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data";
import TestimonialForm from "./TestimonialForm";

interface ImpactCard {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const impactCards: ImpactCard[] = [
  {
    quote: "Revived a dormant organization and now leads a 10-member executive board executing 20+ cultural and academic events per semester for 50+ active members.",
    name: "Bengali Student Association",
    title: "Vice President",
    company: "NYIT",
  },
  {
    quote: "Delivers 5+ engineering career events on budget for a 40-member chapter, managing per-event budgets of $500 with careful procurement and fund disbursement.",
    name: "Society of Women Engineers",
    title: "Treasurer",
    company: "NYIT",
  },
  {
    quote: "Built a custom Flask CMS replacing Wix, saving $200+ annually and cutting publishing time from days to minutes with a self-service admin dashboard.",
    name: "The Campus Slate",
    title: "Web Developer",
    company: "NYIT",
  },
];

const realTestimonials = testimonials.filter(
  (t) => !t.name.includes("Your Name Here") && t.quote
);

export default function Testimonials() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            Impact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Measurable impact across the organizations I've been part of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactCards.map((testimonial, index) => (
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

        {realTestimonials.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-dark-brown dark:text-cream text-center mt-16 mb-8"
            >
              What people say
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {realTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream dark:bg-deep-slate rounded-xl p-6 shadow-lg relative border border-warm-brown/10 dark:border-terracotta/10"
                >
                  <span className="text-5xl text-warm-brown dark:text-terracotta opacity-20 absolute top-2 right-4">
                    "
                  </span>
                  <p className="text-gray-700 dark:text-gray-300 italic mt-2 relative z-10">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-4">
                    <p className="font-bold text-dark-brown dark:text-cream">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.title}, {testimonial.relationship}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Leave a testimonial */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Worked with me? I'd love to hear about it.
          </p>
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="px-6 py-3 bg-warm-brown text-white rounded-xl hover:bg-[#6B4F10] transition-colors font-medium inline-flex items-center gap-2"
          >
            {showForm ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Close form
              </>
            ) : (
              <>
                <span className="text-lg">💬</span>
                Leave a testimonial
              </>
            )}
          </button>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 max-w-2xl mx-auto">
                  <TestimonialForm />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
