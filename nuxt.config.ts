import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/fonts.css',
  ],
  modules: [
    'nuxt-jsonld'
  ],
  app: {
    head: {
      title: 'Salfati Group',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Salfati Group provide unique and powerful tools and services to help you scale your business and protect your data.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Salfati Group'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Salfati Group provide unique and powerful tools and services to help you scale your business and protect your data.'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://salfati.group/assets/images/twitter-cover-salfati-group.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://salfati.group'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://salfati.group'
        },
      ],
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
