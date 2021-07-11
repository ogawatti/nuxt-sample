require('dotenv').config()
const {
  VARIABLE,
  GOOGLE_ANALYTICS_TRACKING_ID,
  GOOGLE_TAG_MANAGER_ID,
} = process.env

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sample Image',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sample image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  target: 'static',
  component: true,
  publicRuntimeConfig: {
    microcmsBaseUrl: process.env.MICROCMS_BASE_URL,
    microcmsApiKey: process.env.MICROCMS_API_KEY,
    formEndpoint: process.env.FORMSPREE_ENDPOINT,
    uriApiName: process.env.URI_API_NAME,
    uriApiPath: process.env.URI_API_PATH
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/amplify.js', ssr: false },
    { src:  '~plugins/api', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-analytics', {
      id: GOOGLE_ANALYTICS_TRACKING_ID
    }],
    '@nuxtjs/gtm',
  ],
  /*
  ** Build configuration
  */
  build: {
    cache: true,
    extend (config, ctx) {
    }
  },
  gtm: {
    enabled: true,
    id: GOOGLE_TAG_MANAGER_ID,
  },
  generate: {
    fallback: true
  },
  env: {
    VARIABLE
  }
}
