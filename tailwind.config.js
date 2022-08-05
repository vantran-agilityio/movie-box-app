/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    color: {
      'light-gray': '#F8F8F8',
      dark: '#494C62'
    },
    extend: {
      colors: {
        default: '#FFF',
        highlight: '#FF0079',
        'light-gray': '#F8F8F8',
        'dark-gray': '#BABBC3',
        dark: '#494C62'
      }
    }
  },
  plugins: []
};
