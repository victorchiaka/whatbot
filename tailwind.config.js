/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "merri-weather-sans": ["Merriweather Sans", "serif"],
        "ubuntu": ["Ubuntu", "serif"],
        "roboto": ["Roboto", "serif"],
        "montserrat": ["Montserrat", "serif"]
      },
    },
  },
  plugins: [],
}

