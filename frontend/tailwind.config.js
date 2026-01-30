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
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8dfd0',
          300: '#d9c9b0',
          400: '#c5ac89',
          500: '#b8976c',
          600: '#a68560',
          700: '#8a6d50',
          800: '#705a45',
          900: '#5c4a39',
        },
        accent: {
          50: '#f7f7f6',
          100: '#e3e3e1',
          200: '#c8c7c4',
          300: '#a6a5a0',
          400: '#84837d',
          500: '#6a6964',
          600: '#54534f',
          700: '#464542',
          800: '#3b3a38',
          900: '#252422',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
