module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'Preahvihear', 'Lato'],
        'serif': ['ui-serif', 'Georgia', 'Preahvihear', 'Lato'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Preahvihear', 'Lato'],
        'display': ['Oswald', 'Koulen', 'Lato'],
        'body': ['Open Sans', 'Preahvihear', 'Lato'],
      },
      colors: {
        itccolor: '#0b3861'
      },
      container: {
        screens: {
          md: '1004px'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
