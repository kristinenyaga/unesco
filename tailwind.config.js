/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000201",
        gray: {
          100: "#FCFCFC",
          200: "#F9F9F9",
          500: "#6A6F6D",
          600: "#4F5653",
          700: "#363D3A",
        },
        blue: {
          50: "rgba(57,126,191,0.05)",
          200: "#397EBF",
          800: "#203A73",
          900: "#172A65",
        },
        yellow: "#F7C440",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px", // Extra small screen size
        ss: "620px", // Small screen size
        sm: "768px", // Small medium screen size
        md: "1060px", // Medium screen size
        lg: "1320px", // Large screen size
        xl: "1700px", // Extra large screen size
      },
    },
  },
  plugins: [],
};
