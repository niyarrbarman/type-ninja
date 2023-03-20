/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); 
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    },
  },
  plugins: [],
}
