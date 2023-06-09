/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {},
    },
    fontFamily: {
      sans: "JetBrains Mono",
      serif: "TT Ricordi Trial Nobili",
    },
  },
  plugins: [],
};
