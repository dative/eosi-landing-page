module.exports = {
  content: [
    "./src/templates/**/*.twig",
    "./src/js/**/*.{js,ts}",
    "./src/css/**/*.css",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'emphasis': '#F7A341',
      'secondary': '#26874B',
      'blue': {
        100: '#F3F7FA',
        300: '#A8D9FF',
        500: '#5FADE8',
        700: '#075FA2',
        900: '#043459',
      },
      'gray': {
        'lightest': '#F8F8F8',
        'light': '#DBDADA',
        100: '#EDF1F6',
        300: '#C1CFDE',
        400: '#A5B1BC',
        500: '#92A0AE',
        700: '#44505C',
        900: '#020304',
      }
    },
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'],
    },
    extend: {
      screens: {
        'mob': '375px',
        'mid': '616px',
        'des': '1194px',
      },
      maxWidth: {
        'mob': '375px',
        'mid': '616px',
        'des': '1194px'
      },
      boxShadow: {
        'form': '0px 10px 70px rgba(0, 0, 0, 0.08);',
        'button': '0px 8px 30px rgba(0, 0, 0, 0.2);'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
