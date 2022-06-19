<template>
  <div class="projects-header">
    <div class="projects-header-text-wrapper">
      <ProjectsHeaderSphereIcon />
      <div class="projects-header-text">
        <h2>Projects</h2>
        <p class="subtitle-32-medium">2020 // 2022</p>
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
  width: 100%;
  background: black;
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
      margin: 0 var(--space-xl) var(--space-sm) 0;
      text-align: right;
    }
  }
}
</style>
