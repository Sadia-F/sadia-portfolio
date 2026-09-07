"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TO_EMAIL = "sadiaferdous003@gmail.com";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [title, setTitle] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    "w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-dark-brown dark:text-cream placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-warm-brown dark:focus:ring-terracotta";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center"
      >
        <p className="text-3xl mb-2">🎉</p>
        <h4 className="font-bold text-dark-brown dark:text-cream">
          Thank you, {name || "friend"}!
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Your testimonial was sent. I'll reply to {email || "your email"} soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      action={`https://formsubmit.co/${TO_EMAIL}`}
      method="POST"
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 space-y-4"
    >
      <input type="hidden" name="_subject" value={`New portfolio testimonial from ${name || "a visitor"}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://sadia-f.github.io/sadia-portfolio/?shared=1#testimonials" />
      {/* Carbon copy to the submitter so they receive a copy too */}
      <input type="hidden" name="_cc" value={email} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="testimonial-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            id="testimonial-name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="testimonial-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email address
          </label>
          <input
            id="testimonial-email"
            type="email"
            name="_replyto"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@school.edu"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="testimonial-organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Organization
          </label>
          <input
            id="testimonial-organization"
            type="text"
            name="organization"
            placeholder="The Campus Slate, NYIT"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="testimonial-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your title
          </label>
          <input
            id="testimonial-title"
            type="text"
            name="title"
            placeholder="Editor-in-Chief"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="testimonial-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Testimonial
        </label>
        <textarea
          id="testimonial-message"
          name="testimonial"
          rows={4}
          required
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
          placeholder="What was it like working with Sadia?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-warm-brown text-white rounded-xl hover:bg-[#6B4F10] transition-colors font-medium"
      >
        Send testimonial
      </button>
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
        A copy goes to your email too — and Sadia will reply from hers.
      </p>
    </motion.form>
  );
}