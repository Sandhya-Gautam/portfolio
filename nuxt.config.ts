// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  app: {
    baseURL: '/'
  },
  experimental: {
    payloadExtraction: false
  },
  generate: {
    fallback: true
  }
})
