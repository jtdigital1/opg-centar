/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif'],
      },
      colors: {
        darkBlue: '#091C2A',
        lightBlue: '#B5BBBF',
        green: '#83BD32',
      },
      spacing: {
        '120px': '120px',
      },
    },
  },
  plugins: [],
}

