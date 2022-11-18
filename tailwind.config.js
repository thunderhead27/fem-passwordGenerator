module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['JetBrains Mono', 'monospace'],
    },
    extend: {
      colors: {
        cRed: '#F64A4A',
        cOrange: '#FB7C58',
        cYellow: '#F8CD65',
        cGreen: '#A4FFAF',
        dGrey: '#24232C',
        cGrey: '#817D92',
        vdGrey: '#18171F',
        cWhite: '#E6E5EA',
      },
    },
  },
  plugins: [require('tailwind-accent-color')()],
}
