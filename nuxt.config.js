const pkg = require('./package')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'cvpaper.challenge - コンピュータビジョン分野の今を映し、新しいトレンドを創り出す',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'keywords',
        content: 'cvpaper.challenge, cvpaper, cv, paper, challenge, computer vision, xpaper.challenge, xpaper, nlpaper.challenge, robotpaper.challenge' 
      },
      {
        hid: 'description',
        name: 'description',
        content: 'cvpaper.challenge公式ホームページです。コンピュータビジョン分野の今を映し、新しいトレンドを創り出します。'
      },
      {
        name: 'author',
        content: 'cvpaper.challenge, Yoshihiro Fukuhara'
      },
      { 
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1' 
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: 'cvpaper.challenge'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'cvpaper.challenge - コンピュータビジョン分野の今を映し、新しいトレンドを創り出す'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'cvpaper.challenge公式ホームページです。コンピュータビジョン分野の今を映し、新しいトレンドを創り出します。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://xpaperchallenge.org/cv/test/image/logo/title.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'http://xpaperchallenge.org/cv'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/cv/test/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	  '@/plugins/utils'
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
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
	  '@nuxtjs/axios',
	  // Doc: 
	  'nuxt-fontawesome',
	  '~/modules/fetchData',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_HOST || 'http://localhost/api'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  router: {
    base: '/cv/test'
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
}
