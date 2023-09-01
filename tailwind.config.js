/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [{pattern: /^.*$/}],
  theme: {
    extend: {
      height: {
        'banner': '28rem',
      },
    },
  },
  plugins: [],
}