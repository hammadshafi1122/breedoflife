/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#219D80",
        secondary :'#252A34',
        lightGray: "#D9D9D9",
        lightGreen: "#219D99",
        greenish: "#EDF7F5"
      }
    },
  },
  plugins: [],
}

