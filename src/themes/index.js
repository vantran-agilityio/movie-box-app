const colors = require('./colors');
const fontFamily = require('./fontFamily');

module.exports = {
  extend: {
    colors: { ...colors },
    fontFamily: { ...fontFamily }
  }
};
