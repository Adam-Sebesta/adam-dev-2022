<template tabIndex="0">
  <div class="page project">
    <!-- <div class="translate-box back-arrow-wrapper"></div> -->
    <div
      class="project-info-main text-wrapper"
      :style="{ color: project.textColor }"
    >
      <div class="translate-box translate">
        <h3 class="headline sub2-regular">{{ project.title }}</h3>

        <div class="stack-wrapper">
          <span class="text2-medium" v-for="s in project.stack">{{ s }}</span>
        </div>
        <a
          v-if="project.liveLink"
          target="blank"
          class="live-link"
          :href="project.liveLink"
          ><img src=""
        /></a>
        <p
          :class="'project-text text2-regular' + (readMore ? ' read-more' : '')"
          v-html="project.desc + (readMore ? '' : '')"
        ></p>
        <button
          @click="readMore = true"
          class="projects-continue-reading"
          v-if="!readMore"
        >
          Continue Reading
        </button>
      </div>
    </div>
    <div
      class="project-image-main fadein"
      :style="{
        backgroundImage: `url('../../../projects/${projectTitle}/bg-${projectTitle}.png')`,
      }"
    >
      <img
        :src="`../../../projects/${projectTitle}/main-${projectTitle}.jpg`"
        alt=""
      />
    </div>
  </div>
  <div class="full-length-divider"></div>
</template>

<script setup lang="ts">
import { read } from "fs";
import projects from "~/config/projects";
import { Project } from "~/types/projects";

const route = useRoute();
const projectTitle: string | string[] = route.params.project;
const project: Project = projects[projectTitle];
const readMore = ref(false);
</script>

<style lang="scss">
@import "../assets/style/variables";
.page.project {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  width: 100%;
  background-color: var(--white-01);
  .project-info-main {
    min-height: 250px;
    display: flex;
    width: 80%;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    padding: var(--space-md) var(--page-margin);
    p {
      font-size: 12px;
      text-overflow: ellipsis;
      max-height: 100px;
      transition: max-height 0.5s ease-out;
      overflow: hidden;
      &.read-more {
        max-height: 100%;
        overflow: auto;
      }
    }
    .projects-continue-reading {
      background: none;
      border: none;
      color: var(--black-01);
      font-size: 12px;
      font-weight: 600;
      margin: var(--space-sm) 0;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    .stack-wrapper {
      display: flex;
      flex-direction: row;
      padding: var(--space-md) 0;
      span {
        margin-right: var(--space-sm);
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
      object-fit: cover;
      transition: transform 1s ease-out;
      &:hover {
        transform: scale3d(1.01, 1.01, 1.01);
      }
    }
  }
}
</style>
