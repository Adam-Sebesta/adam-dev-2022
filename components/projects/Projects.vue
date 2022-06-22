<template>
  <div id="Portfolio" class="page projects">
    <ProjectsHeader />
    <template v-for="(v, k, i) in projects" class="projects-wrapper">
      <nuxt-link
        v-if="i < maxProjects"
        :to="v.to"
        :class="'project' + (i === 0 ? ' first' : '')"
      >
        <h4>{{ v.title }}</h4>
        <div class="project-lower">
          <div>
            <span class="text-16-medium uppercase">{{
              v.year + " // " + v.sector
            }}</span>
          </div>
          <div class="stack">
            <span class="text-16-medium uppercase">{{
              v.stack.join(" // ")
            }}</span>
          </div>
        </div>
        <ProjectsDivider color="var(--black-03)" />
      </nuxt-link>
    </template>
    <ProjectsLoadOther
      @loadMore="loadMoreClicked = true"
      :total="Object.values(projects).length"
    />
  </div>
</template>
<script setup lang="ts">
import { IProjectOb } from "~~/types/projects";
import Projects from "../../config/projects";
const projects: IProjectOb = Projects;
const loadMoreClicked = ref(false);
const maxProjects = computed((): Number => {
  return loadMoreClicked.value ? 100 : 4;
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
    padding: 0 var(--space-xl) 0 var(--space-xl);
    margin: var(--space-xxl) 0 var(--space-sm) 0;
    width: 100%;
    color: black;
    position: relative;
    &:hover {
      .active {
        transform: translateX(0%);
        width: calc(100%);
      }
    }
    &.first {
      // margin-top: calc(var(--space-lg) +);
    }
    .project-lower {
      display: flex;
      width: 35%;
      justify-content: space-between;
      margin-left: auto;
      .stack {
        margin-left: var(--space-xs);
      }
    }
  }
}
</style>
