<template>
  <button href="" @click="$emit('toggleMobileMenu')">
    <svg
      width="30"
      height="18"
      viewBox="0 0 30 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="mainHeaderMobileNavButton"
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
<script setup lang="ts"></script>
<style lang="scss">
#mainHeaderMobileNavButton {
  width: 100%;
  display: none;
  @media screen and (max-width: 560px) {
    display: flex;
    width: unset;
  }
}
</style>
