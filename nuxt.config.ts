import type { NuxtConfig } from '@nuxt/types'
const isDev = process.env.NODE_ENV !== 'production'

const config: NuxtConfig = {
  modern: !isDev,
  target: 'server',
  head: {
    title: 'IZTeach',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
      },
      {
        type: 'text/css',
        rel: 'stylesheet',
        href:
          '//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic',
      },
    ],
  },
  // https://github.com/gothinkster/realworld-starter-kit
  css: ['@/assets/main.css'],
  plugins: [
    '@/plugins/repository',
    {
      src: '@/plugins/design-system',
    },
  ],
  components: true,
  buildModules: [
    // https://typescript.nuxtjs.org/guide/setup#configuration
    '@nuxt/typescript-build',
    // '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    // https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit',
  ],
  build: {
    extractCSS: !isDev,
  },
  axios: {
    baseURL: 'https://conduit.productionready.io/api/',
  },
  // https://github.com/nuxt-community/modules/tree/master/packages/markdownit
  markdownit: {
    injected: true,
  },
  // https://typescript.nuxtjs.org/guide/lint.html#runtime-lint
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
}

export default config
