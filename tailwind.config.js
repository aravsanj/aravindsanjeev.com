/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,astro}"],
  theme: {
    extend: {
      colors: {
        background: "#07070A",
        surface: "#0E1015",
        "surface-2": "#16181F",
        primary: "#EDE8DF",
        secondary: "#7D8088",
        accent: "#C9963A",
        "accent-bright": "#E0AE4E",
        border: "#1E2430",
      },
      fontFamily: {
        sans: ["Syne", "Plus Jakarta Sans", "sans-serif"],
        body: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
        "2xl": {
          css: { fontSize: "22px" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        float: "float 6s ease-in-out infinite",
        "orb-1": "orb1 8s ease-in-out infinite",
        "orb-2": "orb2 10s ease-in-out infinite",
        "shimmer-bar": "shimmerBar 2s linear infinite",
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        orb1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "33%": { transform: "translate(40px, -30px) scale(1.15)", opacity: "0.45" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)", opacity: "0.15" },
        },
        orb2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.15" },
          "33%": { transform: "translate(-30px, 40px) scale(0.85)", opacity: "0.3" },
          "66%": { transform: "translate(25px, -15px) scale(1.1)", opacity: "0.1" },
        },
        shimmerBar: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(0.75)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
