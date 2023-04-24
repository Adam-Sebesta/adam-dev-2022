<!-- components/ScrollToTop.vue -->
<template>
  <div
    class="scroll-to-top"
    @click="scrollToTop"
    :class="{ visible: isArrowVisible }"
  >
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.808 0.847998H12.152L16.808 8.96L21.032 16.208C21.64 17.296 21.944 18.48 21.944 19.76V23.408H16.808L16.808 13.04C16.808 11.792 16.504 10.608 15.896 9.488L13.256 4.976L11.48 1.904L9.704 4.976L7.064 9.488C6.424 10.608 6.104 11.792 6.104 13.04L6.104 23.408L0.967998 23.408L0.967998 19.76C0.967998 18.48 1.288 17.296 1.928 16.208L6.104 8.96L10.808 0.847998Z"
        fill="#F4F8FA"
      />
    </svg>
  </div>
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
    isArrowVisible.value =
      window.scrollY > document.querySelector("header").offsetHeight;
  });
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: var(--page-margin);
  right: var(--page-margin);
  background: var(--black-01);
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1000;
  display: none;
  text-align: center;
  width: 36px;
  height: 36px;
}

.scroll-to-top.visible {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
}

.scroll-to-top svg {
  width: 100%;
  height: 100%;
}
</style>
