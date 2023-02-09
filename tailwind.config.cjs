/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat Alternates"],
      rubik: ["Rubik"],
    },
    extend: {
      screens: {
        xl: { max: "1440px" },
        lg: { max: "1023px" },
        md: { max: "768px" },
        sm: { max: "480px" },
        xs: { max: "35px" },
      },
      colors: {
        orange: "#FF4E01;",
        tomatoOrange: "#CF0A0A",
        grey: "#2B2B2B;",
      },
    },
  },
  plugins: [],
};
