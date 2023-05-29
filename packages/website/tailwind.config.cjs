/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        "dark-50": "#3D3D3D",
        "dark-100": "#2D2D2D",
        "dark-300": "#252525",
        "dark-400": "#1F1F1F",
        yellow: "#fbc11a",
      },
      height: {
        13: "3.25rem",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
