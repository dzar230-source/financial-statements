/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#14110f",
        surface: "#1d1916",
        raised: "#28221e",
        ink: "#f3ece4",
        "ink-soft": "#c4b8ab",
        edge: "#3d342d",
        brand: "#e0a458",
      },
      fontFamily: { display: ["Georgia", "Cambria", "serif"] },
    },
  },
  plugins: [],
}
