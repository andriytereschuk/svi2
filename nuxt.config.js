// const isProd = process.env.NODE_ENV === 'production'
import fs from 'fs'

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5226528712100162',
        async: true,
        crossorigin: 'anonymous',
      },
    ],
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
  hooks: {
    done(generator) {
      const path = require('path')
      const distDir = generator.nuxt.options.generate.dir || 'dist'

      function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true })
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name)
          if (entry.isDirectory()) {
            walk(fullPath) // recurse into subfolder
          } else if (entry.isFile() && fullPath.endsWith('.html')) {
            let html = fs.readFileSync(fullPath, 'utf-8')

            html = html.replace(/\sdata-n-head="[^"]*"/g, '')

            fs.writeFileSync(fullPath, html, 'utf-8')
          }
        }
      }

      walk(distDir)
    },
  },
  server: {
    port: 3001, // default: 3000
  },
}
