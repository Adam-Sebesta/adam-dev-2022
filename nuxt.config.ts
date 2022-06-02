import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  css: ["@/assets/style/main.scss", "@/assets/style/_variables.scss"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "@/assets/style/_variables.scss"',
  //       },
  //     },
  // },
  // },
});
