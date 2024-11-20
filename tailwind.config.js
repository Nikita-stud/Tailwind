/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}","!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        'black': '#24242E',
        'blue': '#334D89',
      },
      shadows: {
        'round': '1px 2px 2px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

