<template>
  <MainHeader />
  <div class="page projects">
    <div class="projects-header">
      <div class="projects-header-text">
        <p>2021/2022</p>
        <h3>Projects</h3>
      </div>
    </div>
    <template v-for="(v, k, i) in projects">
      <nuxt-link
        v-if="i < maxProjects"
        :to="v.to"
        :class="'project' + (i === 0 ? ' first' : '')"
      >
        <h5>{{ v.title }}</h5>
        <div class="project-lower">
          <div>
            {{ v.sector + " / " + v.year }}
          </div>
          <div class="stack">{{ v.stack.join(" / ") }}</div>
        </div>
        <ProjectsDivider />
      </nuxt-link>
    </template>
  </div>
</template>
<script setup lang="ts">
import { IProjectOb } from "~~/types/projects";
import Projects from "../config/projects";
const projects: IProjectOb = Projects;
const seeMoreClicked: Boolean = false;
const maxProjects = computed((): Number => {
  return seeMoreClicked ? 100 : 4;
});
</script>
<style lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: var(--white-01);
  .projects-header {
    display: flex;
    color: var(--white-pure);
    padding: var(--space-xxxl) var(--space-xl) var(--space-sm) var(--space-xl);
    height: 50%;
    width: calc(100 - var(--space-xxl) * 2);
    background: black;
    .projects-header-text {
      display: flex;
      flex-direction: column;
      align-items: end;
      p {
        margin: 0;
        font-size: 1.5vw;
        font-weight: 300;
      }
    }
  }
  .project {
    margin: var(--space-xxl) var(--space-xl) var(--space-lg) var(--space-xl);
    width: calc(100% - var(--space-xl) * 2);
    color: black;
    h5 {
      font-size: 3.5vw;
      line-height: 2.5vw;
    }
    &.first {
      // margin-top: calc(var(--space-lg) +);
    }
    .project-lower {
      display: flex;
      justify-content: flex-end;
      font-size: 0.75vw;
      .stack {
        margin-left: 5rem;
      }
    }
  }
}
</style>
