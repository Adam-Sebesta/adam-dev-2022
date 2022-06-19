<template>
  <div class="page projects">
    <ProjectsHeader />
    <template v-for="(v, k, i) in projects">
      <nuxt-link
        v-if="i < maxProjects"
        :to="v.to"
        :class="'project' + (i === 0 ? ' first' : '')"
      >
        <h4>{{ v.title }}</h4>
        <div class="project-lower">
          <div>
            <span class="text-16-medium uppercase">{{
              v.sector + " / " + v.year
            }}</span>
          </div>
          <div class="stack">
            <span class="text-16-medium uppercase">{{
              v.stack.join(" / ")
            }}</span>
          </div>
        </div>
        <ProjectsDivider />
      </nuxt-link>
    </template>
  </div>
</template>
<script setup lang="ts">
import { IProjectOb } from "~~/types/projects";
import Projects from "../../config/projects";
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

  .project {
    padding: var(--space-xxl) var(--space-xl) var(--space-sm) var(--space-xl);
    width: calc(100%);
    color: black;
    position: relative;

    &.first {
      // margin-top: calc(var(--space-lg) +);
    }
    .project-lower {
      display: flex;
      justify-content: flex-end;
      .stack {
        margin-left: var(--space-xl);
      }
    }
  }
}
</style>
