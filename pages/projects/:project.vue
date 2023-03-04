<template tabIndex="0">
  <div :class="'page project' + (readMore ? ' read-more' : '')">
    <!-- <div class="back-arrow-wrapper"></div> -->
    <!-- <div class="next-project-arrow"></div> -->
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
          ><img src="../../static/live-link.png" alt="live link"
        /></a>
        <p
          :class="'project-text text2-regular'"
          v-html="project.desc + (readMore ? '' : '')"
        ></p>
        <button
          @click="readMore = true"
          class="projects-continue-reading"
          v-if="!readMore && !project.wip"
        >
          Continue Reading
        </button>
      </div>
    </div>
    <div class="project-image-main" :style="{}">
      <img
        :src="`../../../projects/${projectTitle}/main-${projectTitle}.jpg`"
        alt="Project Image"
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
  &.read-more {
    .project-info-main {
      p {
        max-height: 100%;
        overflow: auto;
      }
    }
  }
  .project-info-main {
    min-height: 245px;
    display: flex;
    width: 55%;
    flex-direction: column;
    position: relative;
    justify-content: flex-end;
    padding: var(--space-md) var(--page-margin);
    .live-link {
      width: 20px;
      height: 20px;
      display: flex;
      margin-bottom: var(--space-sm);
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: 12px;
      text-overflow: ellipsis;
      max-height: 100px;
      // transition: max-height 0.5s ease-out;
      overflow: hidden;
    }
    .projects-continue-reading {
      background: none;
      border: none;
      color: var(--black-01);
      font-size: 12px;
      font-weight: 600;
      margin-top: var(--space-sm);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

    .stack-wrapper {
      display: flex;
      flex-direction: row;
      padding: var(--space-sm) 0;
      span {
        margin-right: var(--space-sm);
        color: var(--black-01);
        line-height: 100%;
      }
    }
  }
  .project-image-main {
    width: 800px;
    border-radius: 1px;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    background-image: url("../../static/logo-image-placeholder.png");
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      transition: transform 1s ease-out;
      &:hover {
        transform: scale3d(1.01, 1.01, 1.01);
      }
    }
    &:after {
      content: "";
      top: 0;
      transform: translateX(100%);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      animation: slide 2s infinite;
      background: -moz-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* FF3.6+ */
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(0%, rgba(255, 255, 255, 0)),
        color-stop(50%, rgba(255, 255, 255, 0.8)),
        color-stop(99%, rgba(128, 186, 232, 0)),
        color-stop(100%, rgba(125, 185, 232, 0))
      ); /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* Opera 11.10+ */
      background: -ms-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* IE10+ */
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(128, 186, 232, 0) 99%,
        rgba(125, 185, 232, 0) 100%
      ); /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 );
    }
    @keyframes slide {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  }
}
@include breakpoint("md") {
  .page.project {
    flex-direction: column-reverse;
    justify-content: space-between;
    .project-info-main {
      width: 100%;
      padding: var(--page-margin);
      margin-top: calc(35vh - 250px);
      .projects-continue-reading {
        margin: var(--page-margin) 0 0 0;
      }
      .stack-wrapper {
        padding: var(--page-margin) 0;
      }
      .live-link {
        width: 20px;
        height: 20px;
        display: flex;
        margin-bottom: var(--page-margin);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .project-image-main {
      width: 100%;
      height: 65vh;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
