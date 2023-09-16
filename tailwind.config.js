/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif']
      },
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'Grayish-blue': 'hsl(233, 8%, 79%)',
        'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'Very-dark-blue': 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}








