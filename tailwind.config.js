/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // niebieski elegancki
        secondary: "#1e293b", // ciemny granat
        accent: "#fbbf24" // żółty
      }
    },
  },
  plugins: [],
};
