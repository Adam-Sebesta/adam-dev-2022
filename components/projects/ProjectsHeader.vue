<template>
  <div class="projects-header">
    <div class="projects-header-text-wrapper">
      <ProjectsHeaderSphereIcon />
      <div class="projects-header-text">
        <h2>Projects</h2>
        <p class="sub2-medium">2020 // 2024</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.projects-header {
  display: flex;
  color: var(--white-pure);
  // padding: var(--space-xxxl) var(--space-xl) var(--space-sm) var(--space-xl);
  height: 85vh;
  min-height: 320px;
  width: 100%;
  background: black;
  position: relative;
  @media screen and (max-width: 1279px) {
    height: 45vh;
    max-height: 365px;
  }
  &::after {
    content: "";
    height: 1px;
    width: 100vw;
    background-color: var(--black-03);
    bottom: calc(var(--space-xxxxs) * -1);
    left: 0;
    position: absolute;
    @media screen and (max-width: 560px) {
      bottom: calc(var(--space-xs) * -1);
    }
  }
  .projects-header-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background: var(--blue-gradient-24);
    position: relative;
    .projects-header-text {
      margin: 0 var(--space-xl) var(--space-md) 0;
      text-align: right;
      @media screen and (max-width: 1279px) {
        margin: 0 var(--space-xxl) calc(var(--space-xl) - var(--space-xxxxs)) 0;
      }
    }
  }
}
</style>
