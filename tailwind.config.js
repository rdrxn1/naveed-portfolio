/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d7ebff",
          200: "#b5d8ff",
          300: "#8ac1ff",
          400: "#61a6ff",
          500: "#3b8aff",
          600: "#256dfa",
          700: "#1b56d7",
          800: "#1b47aa",
          900: "#1b3d86",
          950: "#0d1f47"
        }
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(0,0,0,.25)"
      },
      backgroundImage: {
        "grid": "linear-gradient(to right, rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.05) 1px, transparent 1px)"
      }
    }
  },
  darkMode: "class",
  plugins: []
}
