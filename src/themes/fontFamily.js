const { fontFamily: defaultFontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  ...defaultFontFamily,
  ...{
    roboto: ['Roboto', 'sans-serif']
  }
};
