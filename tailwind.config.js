/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      "noto-sans": ["Noto Sans", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
};
