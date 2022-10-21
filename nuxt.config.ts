import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  css: [
    "@/assets/style/main.scss",
    "@/assets/style/_variables.scss",
    "@/assets/style/reset.scss",
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  target: "static",
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
