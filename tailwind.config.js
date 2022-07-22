/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line prettier/prettier
const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: '#44F5C0',
      secondary: '#F5B544',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
