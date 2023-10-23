/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        denim: "#022959",
        "sky-blue": "#bee2fd",
        "light-blue": "#ABBCFF",
        grey: "#9699aa",
        "border-color": "#d6d9e6",
        purple: "#483eff",
        "very-light-grey": "#F8F9FF",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", " sans-serif"],
      },
      gridTemplateColumns: {
        form: "27.4rem 1fr",
      },
      screens: {
        mid: { max: "50em" },
        sma: { max: "37.5em" },
      },
      boxShadow: {
        form: "0px 25px 40px -20px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
