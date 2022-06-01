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
<style lang="sass">
.projects
  display: flex
  flex-direction: column
  min-height: 100vh
  padding-top: 70px
  backgrond: light-grey
  .projects-header
    display: flex
    color: $white-base
    padding: 20% 10% 3% 10%
    height: 50%
    width: 100%
    background: black
    .projects-header-text
      display: flex
      flex-direction: column
      align-items: end
      p
        margin: 0
        font-size: 1.5vw
        font-weight: 300
  .project
    margin: 4rem 10%
    color: black
    h5
      font-size: 3.5vw
      line-height: 2.5vw
    &.first
      margin-top: 8rem !important
    .project-lower
      display: flex
      justify-content: flex-end
      font-size: 0.75vw
      .stack
        margin-left: 5rem
</style>
