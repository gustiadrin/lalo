// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    // En v4, extend se define diferente
    fontFamily: {
      sans: ["var(--font-geist-sans)", "sans-serif"],
      mono: ["var(--font-geist-mono)", "monospace"],
      allura: ["var(--font-allura)", "cursive"],
      raleway: ["var(--font-raleway)"],
      lato: ["var(--font-lato)"],
    },
    fontSize: {
      h1: ["144px", { lineHeight: "1" }],
      h2: ["64px", { lineHeight: "1" }],
      h3: ["40px", { lineHeight: "1.1" }],
      h4: ["32px", { lineHeight: "1.1" }],
      h5: ["24px", { lineHeight: "1.2" }],
      p1: ["24px", { lineHeight: "1.5" }],
      p2: ["16px", { lineHeight: "1.5" }],
      p3: ["20px", { lineHeight: "1.5" }],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      pink: "#fcccd0",
      gold: "#cfa66d",
    },
  },
};
