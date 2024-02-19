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
window._mfq = window._mfq || [];
  (function() {
    var mf = document.createElement("script");
    mf.type = "text/javascript"; mf.defer = true;
    mf.src = "//cdn.mouseflow.com/projects/0ee659fa-187c-4915-867c-7430740192c4.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
</script>
<style lang="scss"></style>
