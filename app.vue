<template>
  <NuxtLayout>
    <NuxtPage />
    <MainFooter />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: "Adam Sebesta",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "Cloud Native Engineering for the future.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/public/favicon.ico" }],
});
</script>
<style lang="scss"></style>
