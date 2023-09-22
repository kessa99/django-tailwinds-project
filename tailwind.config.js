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
      maxWidth:{
        'taxmw': '1600px',
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
    },
    backgroundImage: {
      'back': "url('/src/static/img/back.png')!important",
    }
  },
  plugins: [],
}

