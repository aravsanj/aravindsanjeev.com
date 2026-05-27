/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,astro}"],
  theme: {
    extend: {
      colors: {
        background: "#08090A",
        surface: "#0F1410",
        "surface-2": "#161C13",
        primary: "#E6FFD8",
        secondary: "#8A9A78",
        accent: "#B6FF1A",
        "accent-bright": "#D4FF5C",
        hot: "#FF2D7E",
        "hot-bright": "#FF5C9C",
        border: "#243018",
      },
      fontFamily: {
        sans: ["Oxanium", "Chakra Petch", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        display: ["Chakra Petch", "Oxanium", "sans-serif"],
        mono: ["Share Tech Mono", "JetBrains Mono", "Courier New", "monospace"],
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
        float: "float 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "shimmer-bar": "shimmerBar 2s linear infinite",
        flicker: "flicker 6s steps(1) infinite",
        "scanline-sweep": "scanlineSweep 7s linear infinite",
        glitch: "glitch 2.5s steps(2) infinite",
        "grid-pan": "gridPan 28s linear infinite",
        "boot-blink": "bootBlink 1s steps(1) infinite",
        "glow-pulse": "glowPulse 3.5s ease-in-out infinite",
        "fade-in": "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.35, transform: "scale(0.7)" },
        },
        shimmerBar: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        flicker: {
          "0%, 93%, 100%": { opacity: "1" },
          "94%": { opacity: "0.82" },
          "95%": { opacity: "1" },
          "96%": { opacity: "0.6" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.9" },
        },
        scanlineSweep: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glitch: {
          "0%, 92%, 100%": { transform: "translate(0)", opacity: "1" },
          "93%": { transform: "translate(-2px, 1px)" },
          "94%": { transform: "translate(2px, -1px)" },
          "95%": { transform: "translate(-1px, -1px)" },
          "96%": { transform: "translate(1px, 1px)" },
        },
        gridPan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 800px" },
        },
        bootBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
