/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        custom_pink:'rgba(237, 166, 232, 0.937)',
        custom_gray:'#ffffffbe',
      },
      fontFamily: {
        mozilla: ['MozillaHeadline', 'sans-serif'],
    },
      screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    },
  },
  plugins: [],
}