const isDev = process.env.NODE_ENV !== 'production'

export default {
  modern: !isDev,
  head: {
    titleTemplate(title) {
      if (title) {
        return `${title} - IZTeach`
      }
      return 'IZTeach'
    }
  },
  loading: {
    continuos: true
  },
  modules: [
    '@nuxt/http',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
    // https://github.com/nuxt-community/sentry-module
    // "@nuxtjs/sentry",
  ],

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  vuetify: {},

  // https://github.com/nuxt-community/eslint-module
  eslint: {
    fix: true
  },

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/api/configuration-css
  css: ['~assets/styles/app'],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev,
    transpile: ['vee-validate/dist/rules']
  }
}
