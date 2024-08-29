/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'

  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(29 78 216)',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      }
    }
  },
  plugins: []
}
