/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Albert: ["Albert Sans", "sans-serif"],
        Bayon: ["Bayon"],
        CarterOne: ["Carter One"],
        KodeMono: ["Kode Mono"]
      }
    },
  },
  plugins: [],
}

