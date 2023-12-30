/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        gradient1: "#fde1ff",
        gradient2: "#e1ffe122",
      },
    },
  },
  plugins: [],
};
