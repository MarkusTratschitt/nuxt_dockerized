// nuxt-app/nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/icon'],
    image: {
        // Optionale Konfigurationen
        dir: 'assets/images',
    },
    icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this
    }
  }
});