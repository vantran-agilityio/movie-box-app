/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      theme: {
        color: {
          default: '#FFF',
          highlight: '#FF0079',
          'light-gray': '#F8F8F8',
          dark: '#494C62'
        }
      }
    },
  },
  plugins: [],
};

