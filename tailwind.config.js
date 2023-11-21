/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      colors:{
        'green':'#00b289',
        'gray':'#4c4d5f',
        'yellow':'#f8db62'
      },
      fontFamily:{
        'amergo-bt':['Amerigo-BT','system-ui'],
        'proxima-nova-semibold':['Proxima Nova Semibold','system-ui'],
        'proxima-nova-regular':['Proxima Nova Regular','system-ui'],
        'proxima-nova-light':['Proxima Nova Light','system-ui'],
      }
    },
  },
  plugins: [],
}

