'use strict';

// Color palette
const black = '#222222';
const red = '#dc662e';
const green = '#008eab';
const yellow = '#feaf3c';
const blue = '#2f737d';
const magenta = '#78dcf4';
const cyan = '#60b2c2';
const white = '#e5c49e';
const lightBlack = '#545e65';
const lightRed = '#dd9a8a';
const lightGreen = '#749ea9';
const lightYellow = '#fedaae';
const lightBlue = '#0cc7e4';
const lightMagenta = '#c7e8f2';
const lightCyan = '#98b9c1';
const lightWhite = '#ffe9d7';

const backgroundColor = 'rgba(7,26,36,0.75)';
const cursorColor = yellow;
const foregroundColor = white;
const selectionColor = 'rgba(120,220,244,0.3)';
const padding = '10px 12px',

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    cursorColor,
    foregroundColor,
    selectionColor,
    padding,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite
    }
  });
};
