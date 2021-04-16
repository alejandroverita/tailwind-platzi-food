module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
   /*  colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    }, */
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
