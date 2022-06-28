<template>
  <div class="divider-wrapper">
    <svg
      width="1719"
      height="8"
      viewBox="0 0 1719 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="project-divider"
      preserveAspectRatio="xMaxYMax meet"
    >
      <rect
        width="56"
        height="8"
        transform="matrix(1 0 0 -1 1663 8)"
        :fill="color"
        class="project-divider-line"
      />
      <path d="M1651 8H1663V0L1651 7V8Z" :fill="color" />
      <rect
        class="full-length-divider"
        y="7"
        width="1719"
        height="1"
        :fill="color"
      />
    </svg>
    <div class="active-wrapper">
      <svg
        width="100%"
        height="8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="project-divider active"
      >
        <rect
          width="100%"
          height="8"
          transform="matrix(1 0 0 -1 12 8)"
          :fill="color"
          class="active-wrapper-line"
        />
        <path d="M0 8H12V0L0 7V8Z" :fill="color" />
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({ color: String });
</script>
<style lang="scss">
.divider-wrapper {
  height: 8px;
  position: relative;
  .active-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 8px;
  }
  .project-divider {
    position: absolute;
    direction: rtl;
    top: 0;
    left: 0;
    width: calc(100% + var(--space-xl));
    transform: translateX(calc(var(--space-xl) * -1));
    @media screen and (max-width: 1279px) {
      width: calc(100% + var(--space-xxl));
      transform: translateX(calc(var(--space-xxl) * -1));
    }
    .active-wrapper-line {
      min-width: 100%;
    }
    &.active {
      width: 0%;
      transition: 300ms ease-in-out transform;
      right: 0;
      top: unset;
      left: unset;
      transform: unset;
      transform: translateX(100%);
    }
    path {
      transform: translateX(1px);
    }
  }
  .project-divider-line {
  }
}
</style>
