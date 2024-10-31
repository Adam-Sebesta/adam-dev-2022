<template>
  <nuxt-link to="/#Projects" class="floating-back-button" @click="scrollToTop">
    Back</nuxt-link
  >
</template>

<script setup lang="ts">
const isArrowVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
onMounted(() => {
  window.addEventListener("scroll", () => {
    isArrowVisible.value = window.scrollY > 300;
  });
});
</script>

<style lang="scss">
// @import "../assets/style/variables";
@use "../assets/style/variables";
.floating-back-button {
  position: unset;
  font-size: 12px;
  margin-left: 27px;
}
@include variables.breakpoint("sm") {
  .floating-back-button {
    position: fixed;
    top: var(--page-margin);
    left: var(--page-margin);
    background: var(--black-01);
    padding: 10px;
    cursor: pointer;
    margin-left: 0;
    display: flex;
    align-items: center;
    font-family: var(--body-font-family);
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s;
    z-index: 1000;
    text-align: center;
    width: 36px;
    height: 36px;
    color: var(--white-01);
    font-size: var(--text-lg);
    font-weight: 300;
  }
}

.floating-back-button:hover {
  background: var(--grey-01);
}
</style>
