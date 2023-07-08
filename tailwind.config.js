const lxPresets = require("./components/_lib/lx-ui-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [lxPresets],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{tsx,ts,js,jsx}",
    "./demo/**/*.{tsx,ts,js,jsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "linear-gradient(90deg,#41BDF8,#59A5F0,#788ADE,#936DC2,#A34E9D)",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        },
      },
      animation: {
        flow: "flow 6s linear infinite",
      },
    },
  },
  plugins: [],
};
