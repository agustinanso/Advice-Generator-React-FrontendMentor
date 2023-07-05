/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#52ffa8",
        lighCyan: "#cee3e9",
        darkBlue: "#1f2632",
        DarkGrayish: "#323a49",
        grayishBlue: "#4e5d73",
      },
      font: {
        manrope: "'Manrope', sans-serif",
      },
      dropShadow: {
        "3xl": "0 0px 22px rgba(82, 255, 168 ,1)",
      },

      trasitionDuration: {
        hola: "4000ms",
      },
    },
  },
  plugins: [],
};
