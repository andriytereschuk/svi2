// const isProd = process.env.NODE_ENV === 'production'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SVILAKE',
    htmlAttrs: {
      lang: 'ua',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'all' },
      { name: 'author', content: 'Андрій Терещук' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-gtag' },
    // { src: '~/plugins/lightgallery', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      'storyblok-nuxt',
      {
        accessToken: 'tlr3diiavIKuzwFd9riMNwtt',
        cacheProvider: 'memory',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  hooks: {},
  server: {
    port: 3001, // default: 3000
  },
}
