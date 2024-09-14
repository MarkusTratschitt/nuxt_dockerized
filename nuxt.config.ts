// nuxt-app/nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxt/icon', '@pinia/nuxt', 'nuxt-security'],
    image: {
        // Optionale Konfigurationen
        dir: 'assets/images',
    },
    icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this
        },
    },
    security: {
        // Optionale Konfigurationen
        },
    session: {
        cookie: {
            httpOnly: true,
            path: "/",
            sameSite: "none", // "lax" funktioniert möglicherweise nicht in einem iframe auf CodeSandbox
            secure: true,
        },
        maxAge: 60 * 60 * 24 * 365, // 1 Jahr
        name: "SESSID",
        password: "b4bdf874-8c03-5bd8-8fd7-5e409dfd82c0", // Verschlüsselungspasswort
        public: {
            apiUrl: process.env.API_BASE_URL || "http://localhost:8000", // Fallback für die lokale Entwicklung
        },
    // Nitro-Konfiguration (für den Server)
    nitro: {}, 
    vite: { 
        ssr: {
            noExternal: ['nuxt'], // Externe Abhängigkeiten verhindern
            }
        },
    },
});