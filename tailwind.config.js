/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        'black': '#24242E',
        'blue': '#334D89',
      },
    },
  },
  plugins: [],
}

