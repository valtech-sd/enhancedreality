
export default {
  mode: 'spa',
  server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Premium Outdoor Goods',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Augmented reality for the web by Valtech' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/jacket/favicon.png' }
    ],
    script: [
      { type:'module', src:'https://unpkg.com/@google/model-viewer/dist/model-viewer.js' },
      { nomodule:'nomodule', src:'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '@/assets/styles/main.scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-mobile-detect.js'
  ],
  router: {
    base: '/jacket/'
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
