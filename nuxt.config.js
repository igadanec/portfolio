const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {}

export default {
  mode: 'universal',
  target: 'server',
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
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/particle", ssr: false }
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
      families: ['Montserrat: 100, 200, 300, 400, 500, 700, 800, 900', 'Open Sans: 300, 400, 600, 700, 800']
    }
  },

  styleResources: {
    scss: [
      './assets/variables/_colors.scss',
      './assets/variables/_typography.scss'
    ]
  },
  ...routerBase,
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
