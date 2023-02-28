<template>
  <div id="Portfolio" class="page projects">
    <ProjectsHeader />
    <template v-for="(v, k, i) in projects">
      <nuxt-link
        v-if="i < maxProjects"
        :to="v.to"
        :class="'project' + (i === 0 ? ' first' : '')"
      >
        <h3>{{ v.title }}</h3>
        <div class="project-lower">
          <div>
            <span class="text2-medium uppercase">{{
              v.year + " // " + v.sector
            }}</span>
          </div>
          <div class="stack">
            <span class="text2-medium uppercase">{{
              v.stack.join(" // ")
            }}</span>
          </div>
        </div>
        <ProjectsDivider color="var(--black-03)" />
      </nuxt-link>
    </template>
  </div>
  <ProjectsLoadOther
    @loadMore="loadMoreClicked = true"
    :total="Object.values(projects).length"
    :clicked="loadMoreClicked"
  />
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
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 100vw;
    background: var(--white-01);
    top: var(--space-xxxxs);
    left: 0;
    position: absolute;
    z-index: 1;
    @media screen and (max-width: 560px) {
      top: var(--space-xs);
    }
  }
  .project {
    padding: 0 var(--space-xl) 0 var(--space-xl);
    margin: var(--space-xxxl) 0 var(--space-sm) 0;
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
    @media screen and (max-width: 1279px) {
      padding: 0 var(--space-xxl) 0 var(--space-xxl);
    }
    @media screen and (max-width: 561px) {
      padding: var(--space-xxl);
      &.first {
        padding-top: calc(var(--space-xxl) * 2);
      }
      h3 {
        transform: unset;
      }
    }
    .project-lower {
      display: flex;
      width: 35%;
      justify-content: space-between;
      margin: 0 0 calc(var(--space-sm) + 3px) auto;
      .stack {
        margin-left: var(--space-xs);
      }
      @media screen and (max-width: 1279px) {
        flex-direction: column;
        .stack {
          margin-left: 0;
        }
      }
      @media screen and (max-width: 560px) {
        flex-direction: column;
        padding-top: var(--space-xl);
        width: 100%;
        .stack {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
