/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#fffffe',
        primary: '#e5b110',
        black: '#2c0e17',
        accent: '#06b6d4'
      }
    }
  },
  plugins: []
}
