<template>
  <header class="header-wrapper">
    <div class="header-left">
      <!-- <img src="/static/logo/logo-no-text.png" alt="" /> -->
      <LogoWhite class="header-logo"></LogoWhite>

      <p class="text2-medium">Adam Sebesta</p>
    </div>
    <div class="header-right">
      <button
        :class="(l.dot ? 'dot' : '') + ' text2-medium desktop-nav-link'"
        v-for="l in links"
        @click="scrollTo(l.hash)"
      >
        {{ l.text }}
      </button>
      <MainHeaderMobileNavButton
        @toggleMobileMenu="$emit('toggleMobileMenu')"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import type { HeaderLink } from "~~/types/headerLink";

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
const scrollTo = (hash: string): void => {
  let section = document.querySelector(hash);
  section &&
    section.scrollIntoView({
      behavior: "smooth",
    });
};
</script>
<style lang="scss">
.header-wrapper {
  width: 100%;
  z-index: 1;
}
header {
  //  TODO: fix width
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
    .header-logo {
      width: 24px;
      margin-right: calc(var(--page-margin) / 2);
    }
    @media screen and (max-width: 560px) {
      p {
        display: none;
      }
    }
  }
  .header-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .desktop-nav-link {
      color: var(--white-01);
      text-decoration: none;
      padding: var(--space-xxs);
      margin: var(--space-xs);
      cursor: pointer;
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
      @media screen and (max-width: 560px) {
        display: none;
      }
    }
  }
}
</style>
