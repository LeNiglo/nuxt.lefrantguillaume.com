module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          pastel: '#fdcd67',
        },
        blue: {
          pastel: '#b0dffd',
        }
      }
    },
  },
  variants: {
    extend: {
      grayscale: ['hover']
    },
  },
  plugins: [],
}
