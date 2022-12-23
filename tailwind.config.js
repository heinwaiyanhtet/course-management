/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./resources/js/**/*.vue"
  ],
  darkMode:'class',
  theme: {
    screens:{
        'sm':'480px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
    }
  },
  plugins: [],
}