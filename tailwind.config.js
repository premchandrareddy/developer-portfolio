/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#60B1FF',
          DEFAULT: '#319AFF',
          dark: '#1A78DE'
        }
      }
    },
  },
  plugins: [],
}
