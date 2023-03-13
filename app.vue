<template>
  <NuxtLayout>
    <NuxtPage />
    <MainFooter />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Adam Sebesta",
  meta: [
    {
      name: "description",
      content: "Cloud Native Engineering for the future.",
    },
  ],
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-P29FSLM4W9",
      crossorigin: "anonymous",
      async: true,
    },
    { src: "/ga4.js" },
  ],
  link: [{ rel: "icon", type: "image/ico", href: "/favicon.ico" }],
});
</script>
<style lang="scss"></style>
