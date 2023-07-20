// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // import styles
  css: ['@/assets/style/main.scss'],
  typescript: { shim: false },
  devtools: { enabled: true },
  build: { transpile: ["vuetify"] },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true,
      useVuetifyLabs: true,
    }
  }
})
