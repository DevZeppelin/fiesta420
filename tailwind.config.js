/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        acid: {
          DEFAULT: "#7CFF4F",
          soft: "#B9FF9E",
          deep: "#1B3D10",
        },
        ember: "#FF3B2F",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        aura: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "0.55" },
          "50%": { transform: "translate(-50%, -50%) scale(1.25)", opacity: "0.8" },
        },
        flicker: {
          "0%, 19%, 21%, 55%, 57%, 100%": { opacity: "1" },
          "20%, 56%": { opacity: "0.35" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        aura: "aura 9s ease-in-out infinite",
        flicker: "flicker 4s linear infinite",
        scan: "scan 6s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
