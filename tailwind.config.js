/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,astro,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cantarell", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
