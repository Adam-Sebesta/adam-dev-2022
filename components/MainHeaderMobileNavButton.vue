<template>
  <button
    id="mainHeaderMobileNavButton"
    href=""
    @click="$emit('toggleMobileMenu')"
    :class="sticky ? 'sticky' : ''"
  >
    <svg
      width="30"
      height="18"
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13" y="16" width="12" height="2" fill="#F4F8FA" />
      <path d="M8 16H13V18L8 17V16Z" fill="#F4F8FA" />
      <path d="M30 18H25V16L30 17V18Z" fill="#F4F8FA" />
      <rect x="5" y="8" width="20" height="2" fill="#F4F8FA" />
      <path d="M0 8H5V10L0 9V8Z" fill="#F4F8FA" />
      <path d="M30 10H25V8L30 9V10Z" fill="#F4F8FA" />
      <rect x="5" width="20" height="2" fill="#F4F8FA" />
      <path d="M0 0H5V2L0 1V0Z" fill="#F4F8FA" />
      <path d="M30 2H25V0L30 1V2Z" fill="#F4F8FA" />
    </svg>
  </button>
</template>
<script setup lang="ts">
let sticky = ref(false);
const makeStickyOnScroll = () => {
  const header = document.querySelector("header");
  const height = header.offsetTop;
  const btn = document.querySelector("#mainHeaderMobileNavButton");
  if (window.pageYOffset > height) {
    sticky.value = true;
  } else {
    sticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", makeStickyOnScroll);
});
</script>
<style lang="scss">
@import "../assets/style/variables";
#mainHeaderMobileNavButton {
  display: flex;
  justify-content: center;
  align-items: center;
  @include breakpoint("sm") {
    &.sticky {
      position: fixed;
      top: 26px;
      right: var(--page-margin);
      z-index: 3;

      // box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      svg {
        width: 100%;
        display: flex;
        z-index: 3;
      }
      &::before {
        background: var(--black-01);
        content: "";
        height: 39px;
        left: -8px;
        opacity: 1;
        position: absolute;
        top: -11px;
        width: 48px;
        z-index: 3;
      }
    }
  }

  svg {
    width: 75%;
    display: none;
    @include breakpoint("sm") {
      display: flex;
      width: unset;
    }
  }
}
</style>
