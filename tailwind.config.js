module.exports = {
  content: ['./dist/index.html'],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
       colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'carglass': '#F2F2F2',
      'metallic': '#E6E6FF',
      'vinyllight': '#8C8C8C',
      'vinyldark': '#404040',
      'tyre': '#0D0D0D',
    },
    screens: {
      'sp' : '320px',
      'mp' : '375px',
      'lp' : '425px',
      'll' : '1440px',
    },
    },
  },
  plugins: [],
}
