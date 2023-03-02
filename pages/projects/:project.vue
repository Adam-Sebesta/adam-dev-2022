<template tabIndex="0">
  <div class="page project">
    <!-- <div class="translate-box back-arrow-wrapper"></div> -->
    <div
      class="project-info-main text-wrapper"
      :style="{ color: project.textColor }"
    >
      <div class="translate-box translate">
        <h3 class="headline">{{ project.title }}</h3>

        <div class="stack-wrapper">
          <h5 v-for="s in project.stack">{{ s }}</h5>
        </div>

        <p class="project-text">
          {{ project.desc }}
        </p>
        <a
          v-if="project.liveLink"
          target="blank"
          class="live-link"
          :href="project.liveLink"
          ><img src=""
        /></a>
      </div>
    </div>
    <div
      class="project-image-main fadein"
      :style="{
        backgroundImage: `url('../../../projects/${projectTitle}/bg-${projectTitle}.png')`,
      }"
    >
      <img
        :src="`../../../projects/${projectTitle}/main-${projectTitle}.png`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from "~/config/projects";
import { Project } from "~/types/projects";

const route = useRoute();
const projectTitle: string | string[] = route.params.project;
const project: Project = projects[projectTitle];
</script>

<style lang="scss">
.page.project {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  width: 100%;
  background-color: var(--white-01);
  .project-info-main {
    min-height: 250px;
    display: flex;
    width: 55%;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    padding: var(--space-md) var(--page-margin);
    .stack-wrapper {
      display: flex;
      flex-direction: row;
      padding: var(--space-md) 0;
      h5 {
        margin-right: var(--space-sm)
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--black-01);
      }
    }
  }
  .project-image-main {
    width: 800px;
    border-radius: 1px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background: var(--black-01);
    img {
      width: 100%;
      height: 100vh;
      object-fit: contain;
      transition: transform 1s ease-out;
      &:hover {
        transform: scale3d(1.01, 1.01, 1.01);
      }
    }
  }
}
</style>
