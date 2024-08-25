/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#1d72b0',
          200: '#205887',
        },
      },
      screens: {
        'sm': '600px',
        '2xl': '1770px',
      },
    },
  },
  plugins: [],
}
