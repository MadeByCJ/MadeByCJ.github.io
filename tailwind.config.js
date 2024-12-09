/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 1s ease-out forwards', // Definiert die Animation
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
}

