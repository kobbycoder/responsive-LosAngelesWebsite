/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('images/home_bg.jpg')",
        'history': "url('images/history_bg.png')",
        'mountain_one': "url('images/mountain1.jpeg')",
        'mountain_two': "url('images/mountain2.jpeg')",
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

