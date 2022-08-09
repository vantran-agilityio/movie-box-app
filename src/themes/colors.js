const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultColors,
  ...{
    white: { 100: '#FFF' },
    red: { 100: '#FF0079' },
    gray: { 100: '#F8F8F8', 200: '#BABBC3', 300: '#494C62', 400: '#ffffff30' }
  }
};
