<template>
  <div>
    <Preloader />
    <Landing />
    <About />
    <Projects />
    <Connect />
    <MainFooter />
    <ScrollToTop />
  </div>
</template>
<script setup lang="ts">
const handleHash = () => {
  let hash = window.location.hash;
  if (hash) {
    let section = document.querySelector(hash);
    section && section.scrollIntoView({});
  }
};
const handleMouseFlow = () => {
  window._mfq = window._mfq || [];
  (function () {
    var mf = document.createElement("script");
    mf.type = "text/javascript";
    mf.defer = true;
    mf.src =
      "//cdn.mouseflow.com/projects/0ee659fa-187c-4915-867c-7430740192c4.js";
    document.getElementsByTagName("head")[0].appendChild(mf);
  })();
};
onMounted(() => {
  handleHash();
  handleMouseFlow();
});
</script>
<style lang="scss">
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
}
</style>
