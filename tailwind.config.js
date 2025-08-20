/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        floatOrganic: {
          "0%":   { transform: "translate(0px, 0px) rotate(0deg)" },
          "25%":  { transform: "translate(4px, -6px) rotate(2deg)" },
          "50%":  { transform: "translate(-3px, -10px) rotate(-2deg)" },
          "75%":  { transform: "translate(-5px, 6px) rotate(3deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(0deg)" },
        },
      },
      animation: {
        float: "floatOrganic 12s ease-in-out infinite",
      },
      colors: {
        custom_pink: "rgba(237, 166, 232, 0.937)",
        custom_gray: "#ffffffbe",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        mozilla: ["MozillaHeadline", "sans-serif"],
        saans: ['"Saans TRIAL"', "sans-serif"],
        geist: ["Geist", "sans-serif"],
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
  plugins: [
    require("tailwindcss-motion"),
    require("tailwindcss-animate"),
  ],
};
