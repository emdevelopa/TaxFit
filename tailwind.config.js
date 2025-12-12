/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9f7',
          100: '#b3ece7',
          200: '#80dfd7',
          300: '#4dd2c7',
          400: '#1ac5b7',
          500: '#00b4a6',
          600: '#009085',
          700: '#006c64',
          800: '#004843',
          900: '#002422',
          950: '#001211',
        },
        secondary: {
          50: '#e8ebf5',
          100: '#c2c9e3',
          200: '#9ba7d1',
          300: '#7585bf',
          400: '#4e63ad',
          500: '#2c3e7f',
          600: '#243266',
          700: '#1b254d',
          800: '#131933',
          900: '#0a0c1a',
          950: '#050610',
        },
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}