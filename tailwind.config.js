/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#FDF6EE",
        "deep-slate": "#1A1A2E",
        "dark-brown": "#2D1B0F",
        "warm-brown": "#8B6914",
        terracotta: "#C07C40",
        sunset: "#E8741A",
      },
    },
  },
  plugins: [],
};