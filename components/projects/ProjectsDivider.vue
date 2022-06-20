<template>
  <svg
    width="1719"
    height="8"
    viewBox="0 0 1719 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="projectDivider"
  >
    <rect
      width="56"
      height="8"
      transform="matrix(1 0 0 -1 1663 8)"
      :fill="color"
    />
    <path d="M1651 8H1663V0L1651 7V8Z" :fill="color" />
    <rect y="7" width="1719" height="1" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
const props = defineProps({ color: String });
</script>
<style lang="scss">
#projectDivider {
  width: calc(100% + var(--space-xl));
  transform: translateX(calc(var(--space-xl) * -1));
  path {
    transform: translateX(1px);
  }
}
.projectDividerline {
}
</style>
