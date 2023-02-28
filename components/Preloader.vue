<template>
  <div class="preloader">
    <LogoWhite class="preloader_logo" />
  </div>
</template>
<script setup lang="ts">
const checkIfVideoLoaded = () => {
  const video = document.querySelector("video");
  if (video) {
    video.addEventListener("canplaythrough", () => {
      document.querySelector(".preloader")?.classList.add("fadeout");
    });
  }
};

onMounted(() => {
  checkIfVideoLoaded();
});
</script>
<style lang="scss">
@import "../assets/style/variables";
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--blue-gradient-down);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  .preloader_logo {
    width: 100px;
  }
}
</style>
