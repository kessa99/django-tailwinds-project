/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        'mept': '70px',
        'mepb': '70px',
        'mepg': '30px',
        'mepd': '30px',
      },
      colors: {
        white: {
          'slate': '#fff',
        }
      },
      maxWidth:{
        'taxmw': '1600px',
        '600px': '600px',
      },
      topLeftCenter: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
      },
      padding:{
        'pt100': '100px 0 0 0',
        'pr20': '0 20px 0 0',
        'pb0': '0 0 0 0',
      },
      fontweight:{
        'fw900':'',
      },
      color:{
        'red':'#dc2626',
      },
      backgroundImage: {
        'back': "url('/src/static/img/back.png')!important",
      },
      width:{
        '640px': '640px',
        '100px': '100px',
        '500px': '500px',
        '400px': '400px',
      },
      height:{
        '400px': '400px'
      },
      keyframes: {
        wiggle: {
          '0%,20%': {  transform: 'translateX(0)' },
          '25%,45%': { transform: 'translateX(-100%)' },
          '50%,70%': { transform: 'translateX(-200%)' },
          '75%,95%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(-400%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 12s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

