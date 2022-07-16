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
      'darkest': '#333333',
      'darker': '#666666',
      'dark': '#999999',
      'lighter': '#CCCCCC',
      'lightest': '#EEEEEE',
      'crimson': '#990000' 
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
