export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'joshytheprogrammer',
    prefix:"og: https://ogp.me/ns#",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Want to see all my work, projects, and challenges? Visit my personal portfolio to see what I can do...' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:site_name', content: "joshytheprogrammer"},
      { hid: 'og:title', property: 'og:title', content: 'joshytheprogrammer\'s personal portfolio and blog '},
      { hid: 'og:description', property: 'og:description', content: 'Want to see all my work, projects, and challenges? Visit my personal portfolio to see what I can do...'},
      { hid: 'og:image', property: 'og:image', content: 'https://joshytheprogrammer.com/_nuxt/img/me.228b5b3.png'},
      { hid: 'og:url', property: 'og:url', content: 'https://www.joshytheprogrammer.com'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'joshytheprogrammer\'s personal portfolio and blog '},
      { hid: 'twitter:description', name: "twitter:description", content: "Want to see all my work, projects, and challenges? Visit my personal portfolio to see what I can do..."},
      { hid: 'twitter:image', name:"twitter:image", content:"https://joshytheprogrammer.com/_nuxt/img/me.228b5b3.png"},
      { hid: 'twitter:url', property: "twitter:url", content: "https://www.joshytheprogrammer.com"},
      { name: "twitter:card", content: "summary"},
      { name:"twitter:creator", content:"@joshytheprog"}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],


  styleResources: {
    scss: [
      '@/assets/scss/app.scss',
      '@/assets/scss/mixins.scss'
    ],
    hoistUseStatements: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'joshytheprogrammer',
      short_name: 'JTP',
      description: 'Want to see all my work, projects, and challenges? Visit my personal portfolio to see what I can do...',
      lang: 'en',
      background_color: '#F5F5F5',
      theme_color: '#F5F5F5'
    },
    icon: {
      fileName: 'favicon.ico',
      sizes: [64, 120, 144, 12, 192, 384, 512]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
