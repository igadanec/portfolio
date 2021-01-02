export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/644c1e2c5a.js',
        crossorigin: 'anonymous'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'vue-scrollto/nuxt'
  ],

  webfontloader: {
    google: {
      families: ['Roboto: 100, 300, 400, 500, 700, 900']
    }
  },

  styleResources: {
    scss: [
      './assets/variables/_colors.scss',
      './assets/variables/_typography.scss'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
