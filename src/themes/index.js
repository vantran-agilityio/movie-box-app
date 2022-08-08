const colors = require('./colors');
const fontFamily = require('./fontFamily');
const backgrounds = require('./backgrounds');

module.exports = {
  extend: {
    colors: { ...colors },
    fontFamily: { ...fontFamily },
    backgroundImage: { ...backgrounds }
  }
};
