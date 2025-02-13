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
        'pulse-glow': 'pulseGlow 1.5s infinite alternate ease-in-out',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite alternate',
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
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(70, 130, 180, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(70, 130, 180, 0.8)' },
          '100%': { boxShadow: '0 0 10px rgba(70, 130, 180, 0.5)' },
        },
        gradientShift: { // NEUE KEYFRAMES
          '0%': { background: 'linear-gradient(to right, #3E7CB1, #011638)' },
          '50%': { background: 'linear-gradient(to right, #81A4CD, #3E7CB1)' },
          '100%': { background: 'linear-gradient(to right, #3E7CB1, #011638)' },
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