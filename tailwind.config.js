/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,astro}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Deep black background
        surface: "#1a1a1a", // Slightly lighter for cards/sections
        primary: "#e8eaed", // High contrast text
        secondary: "#a1a1aa", // Muted text
        accent: "#d946ef", // Fuchsia accent
        border: "#27272a", // Subtle borders
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Ensuring a clean sans-serif
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
