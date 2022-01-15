module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'footer': '0 -4px 52px rgba(0, 0, 0, 0.15)',
        'header': '0 4px 52px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}