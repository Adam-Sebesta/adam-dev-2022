<template>
  <header class="header-wrapper">
    <div class="header-left">
      <img src="logo-no-text" alt="" />
      <p class="text-16-medium">Adam Sebesta</p>
    </div>
    <div class="header-right">
      <a
        :class="(l.dot ? 'dot' : '') + ' text-16-medium'"
        v-for="l in links"
        :href="l.hash"
        >{{ l.text }}</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { HeaderLink } from "types/headerlink";

const links: HeaderLink[] = [
  {
    hash: "#About",
    text: "About",
  },

  {
    hash: "#Portfolio",
    text: "Portfolio",
  },
  {
    hash: "#Connect",
    text: "Connect",
    dot: true,
  },
];
</script>
<style lang="scss">
header {
  width: calc(100% - var(--page-margin) * 2);
  height: 70px;
  position: absolute;
  top: 0;
  padding: 0 var(--page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    display: flex;
    align-items: center;
    color: var(--white-01);
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      color: var(--white-01);
      text-decoration: none;
      padding: var(--space-xxs);
      margin: var(--space-xs);
      position: relative;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
      &.dot::before {
        content: "";
        width: 10px;
        top: 35%;
        margin-right: 7px;
        display: inline-block;
        height: 10px;
        background: var(--yellow-main);
        border-radius: 100%;
      }
    }
  }
}
</style>
