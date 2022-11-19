<template tabIndex="0">
  <div class="page project">
    <div>
      <div class="translate-box back-arrow-wrapper"></div>
      <div class="text-wrapper" :style="{ color: project.textColor }">
        <div class="translate-box translate">
          <h1 class="headline">{{ projectTitle }}</h1>

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
        class="background-image"
        :style="{
          backgroundImage: `url('../../../${projectTitle}_prev.jpg')`,
        }"
      ></div>
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
.project {
  overflow: hidden;
  height: 100%;
  width: 100%;
  .background-image {
    width: 800px;
    border-radius: 2px;
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
