/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          orange: '#FF9900',
          blue: '#232F3E',
          light: '#37475A',
          yellow: '#FEBD69'
        }
      }
    },
  },
  plugins: [],
}