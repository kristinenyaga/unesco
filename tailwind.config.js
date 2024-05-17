/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#031022",
        secondary: "#00f6ff",
        dimWhite: "#bebebe",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        grey: "#1f2b3e",
        lightblue: "#00F6FF",
        darkgrey: "#374357",
        light: "#cee8ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
