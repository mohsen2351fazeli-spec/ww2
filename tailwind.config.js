/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./index.html","./index.js"],
  theme: {
    extend: {
      keyframes:{
        load:{
          '0%':{width:'0%'},
          '100%':{width:'var(--final-width)'}
        }
      },
      animation:{
        load:'load 1.7s ease-out forwards'
      }
    },
  },
  plugins: [],
}

