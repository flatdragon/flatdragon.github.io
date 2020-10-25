import { author, description } from './package.json'
import ymPixel from './assets/yandex-metrika/pixel.js'

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + author,
    title: description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'yandex-verification',
        name: 'yandex-verification',
        content: 'd20b0c51e8077b6f'
      },
      {
        hid: 'description',
        name: 'description',
        content: description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    noscript: [{ hid: 'yandex-metrika-pixel', innerHTML: ymPixel, body: true }],
    __dangerouslyDisableSanitizersByTagID: {
      'yandex-metrika-pixel': ['innerHTML']
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FF9800' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['./plugins/yandex-metrika.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
