/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "base-fill": "#1D1D1D",
      "inverted-fill": "#F8F8F8",
      "base-text": "#F4F4F4",
      "inverted-text": "#1D1D1D",
    },
    extend: {
      fontFamily: {
        sans: ["Averta CY", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
