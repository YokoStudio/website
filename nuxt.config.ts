// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-gtag'],
  css: ['reset-css', 'assets/styles/index.scss'],
  gtag: {
    id: 'G-TYNNJWRHKW'
  }
});
