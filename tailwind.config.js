/** @type {import('tailwindcss').Config} */
let colors = require('tailwindcss/colors')
//https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors['lightBlue']; delete colors['warmGray']; delete colors['trueGray']; delete colors['coolGray']; delete colors['blueGray'];
// colors ={...colors}
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'media', // or 'media' or 'class' //https://cpro95.tistory.com/663
  theme: {
    screens: {//https://tailwindcss.com/docs/screens
      'xs': '360px', //iphone 12및 작은 폰 대응
      ...defaultTheme.screens,
    },
    fontSize: {
      'xxs':'.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {
      colors: {
        ...colors,
        lime:colors.lime,
        orange:colors.orange,
        transparent: 'transparent'
      },
      spacing: {
        '22': '91px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}


// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
