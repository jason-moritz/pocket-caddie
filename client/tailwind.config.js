module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
      colors: {
          'green-lt': '#86c232',
          'green-dk': '#61892f',
          'gray-md': '#474b4f',
          'gray-lt': '#6b6e70',
          'gray-dk': '#222629',
      },
      screens: {
        'md-down': {'max': '768px'},
      }
    }
  },
  variants: {},
  plugins: []
}

