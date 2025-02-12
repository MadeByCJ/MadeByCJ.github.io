/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'slide-modern': 'slideInOut 1s ease-in-out',
        'slide-in': 'slideIn 1s ease-out forwards', // Definiert die Animation
        'slide-up': 'slideUp 1s ease-out forwards',
        slide: 'slide 5s ease-in-out infinite',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-20%)', // Start außerhalb des Bildschirms
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)', // Endet an seiner ursprünglichen Position
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(+30%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
        slideInOut: {
          '0%': { transform: 'translateY(100%)' }, // Start außerhalb des Sichtbereichs
          '50%': { transform: 'translateY(0)' }, // Position in der Mitte
          '100%': { transform: 'translateY(-100%)' }, // Verlassen des Sichtbereichs
        },
        slide: {
          '0%, 20%': { opacity: 1, transform: 'translateY(0)' },
          '40%, 80%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        },
      colors:{
        'oxford-blue': '#011638',
        'steel-blue': '#3E7CB1',
        'vista-blue': '#81A4CD',
        'safety-orange': '#F17300'
      },
    },
  },
  plugins: [],
};