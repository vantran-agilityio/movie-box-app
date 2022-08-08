/** @type {import('tailwindcss').Config} */

const theme = require('./src/themes');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', '../sharing/src/**/*.{js,ts,jsx,tsx}'],
  theme,
  plugins: []
};
