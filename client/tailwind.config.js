/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayBlue: 'hsl(229, 8%, 60%)',
        darkBlue: 'hsl(229, 31%, 21%)',
        silver: '#d9d9d9',
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      letterSpacing: {
        'comfy': '.25em',
        'superwide': '.4em',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'dots': "url('./assets/bg-dots.svg')",
      },
    },
  },
}

