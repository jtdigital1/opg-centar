// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxt/ui',
  ],

  compatibilityDate: '2024-10-30',
})