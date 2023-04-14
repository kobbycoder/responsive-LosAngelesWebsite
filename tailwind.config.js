/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('img/home_bg.jpg')",
        'history': "url('img/history_bg.png')",
        'mountain_one': "url('img/mountain1.jpeg')",
        'mountain_two': "url('img/mountain2.jpeg')",
      },
      backgroundPosition: {
        top:'top',
        'top-4': 'center top 1rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

