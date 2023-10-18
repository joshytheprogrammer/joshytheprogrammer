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
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/dsgvwxygr/image/upload/v1658856996/personal/cartoon_me_tinu57.png'},
      { hid: 'og:url', property: 'og:url', content: 'https://www.joshytheprogrammer.com'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'joshytheprogrammer\'s personal portfolio'},
      { hid: 'twitter:description', name: "twitter:description", content: "Want to see all my work, projects, and challenges? Visit my personal portfolio to see what I can do..."},
      { hid: 'twitter:image', name:"twitter:image", content:"https://res.cloudinary.com/dsgvwxygr/image/upload/v1658856996/personal/cartoon_me_tinu57.png"},
      { hid: 'twitter:url', property: "twitter:url", content: "https://www.joshytheprogrammer.com"},
      { hid: "twitter:card", name: "twitter:card", content: "summary"},
      { name:"twitter:creator", content:"@joshytheprog"}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{rel: "canonical", href:"https://joshytheprogrammer.com"}],
  },

  css: [
    '@/assets/main.css'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],


  styleResources: {
    scss: [
      '@/assets/scss/app.scss',
      '@/assets/scss/mixins.scss'
    ],
    hoistUseStatements: true,
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  axios: {
    baseURL: '/',
  },

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
      fileName: 'cartoon_me.png',
      sizes: [64, 120, 144, 12, 192, 384, 512]
    }
  },

  content: {},

  build: {},
}
