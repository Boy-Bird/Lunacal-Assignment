/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#373E44',
        'light-black': '#191B1F',
      },
    },
  },
  plugins: [],
}


