<template>
  <div class="icon-wrapper">
    <svg
      width="208"
      height="80"
      viewBox="0 0 208 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="projectsHeaderSphereIcon"
    >
      <rect
        x="1"
        y="1"
        width="206"
        height="78"
        rx="39"
        stroke="#F4F8FA"
        stroke-width="2"
      />
      <rect
        x="27"
        y="1"
        width="154"
        height="78"
        rx="39"
        stroke="#F4F8FA"
        stroke-width="2"
      />
      <rect
        x="77"
        y="1"
        width="54"
        height="78"
        rx="27"
        stroke="#F4F8FA"
        stroke-width="2"
      />
      <rect x="0.5" y="39.5" width="207" height="1" stroke="#F4F8FA" />
    </svg>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.icon-wrapper {
  width: 11%;
  position: absolute;
  top: var(--space-xl);
  right: var(--space-xl);
  @media screen and (max-width: 1279px) {
    width: 17%;
  }
  @media screen and (max-width: 560px) {
    width: 32%;
  }
  #projectsHeaderSphereIcon {
    width: 100%;
    height: 100%;
  }
}
</style>
