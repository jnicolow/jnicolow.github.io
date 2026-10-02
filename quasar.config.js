import { configure } from 'quasar/wrappers'

export default configure((/* ctx */) => {
  return {
    boot: [],

    css: [
      'app.scss'
    ],

    extras: [
      'material-icons',
      'mdi-v7'
    ],

    build: {
      target: { browser: ['es2022', 'firefox115', 'chrome115', 'safari14'] },
      vueRouterMode: 'hash',
      publicPath: '/',
      vitePlugins: []
    },

    devServer: {
      open: true,
      // Avoid clash with another process often bound to 127.0.0.1:9000 (e.g. Python),
      // which makes http://localhost:9000/ return ERR_INVALID_HTTP_RESPONSE in the browser.
      port: 9100,
      strictPort: false
    },

    framework: {
      config: {
        dark: false,
        brand: {
          primary: '#2a7a6e',
          secondary: '#c4a574',
          accent: '#1a6fb5',
          dark: '#0c2c34',
          'dark-page': '#eef4f2',
          positive: '#2a7a6e',
          negative: '#b54a3a',
          info: '#1a6fb5',
          warning: '#c4a574'
        }
      },
      plugins: ['Dialog', 'Scroll']
    },

    animations: 'all',

    ssr: { pwa: false },

    pwa: {
      workboxMode: 'GenerateSW'
    }
  }
})
