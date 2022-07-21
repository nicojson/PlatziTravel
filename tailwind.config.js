/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './public/**/*.html'
  ],
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFranciscoDesktop.jpg')",
        'LA': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/LA.jpg')",
        'bali': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/bali.jpg')",
        'chicago': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/chicago.jpg')",
        'europe': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/europe.jpg')",
        'iceland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/iceland.jpg')",
        'miami': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/miami.jpg')",
        'new_york': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/new_york.jpg')",
        'norway': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/norway.jpg')",
        'seattle': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/seattle.jpg')",
        'switzerland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/switzerland.jpg')",
        'sydney': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sydney.jpg')",
        'yosemite': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/yosemite.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terceary': '#61AEC9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terceary': '#61AEC9'
      },
      fontFamily: {
        Montserrat:['Motserrat', 'san-serif']
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extends: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
