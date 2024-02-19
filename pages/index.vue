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
import { useMouseFlow } from "~/composables/useMouseFlow";
const handleHash = () => {
  let hash = window.location.hash;
  if (hash) {
    let section = document.querySelector(hash);
    section && section.scrollIntoView({});
  }
};

onMounted(() => {
  handleHash();
  useMouseFlow();
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
