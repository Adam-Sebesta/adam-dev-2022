<template>
  <header class="header-wrapper">
    <div class="header-left">
      <img src="static/logo/logo-no-text.png" alt="" />
      <p class="text2-medium">Adam Sebesta</p>
    </div>
    <div class="header-right">
      <a
        :class="(l.dot ? 'dot' : '') + ' text2-medium'"
        v-for="l in links"
        @click="scrollTo(l.hash)"
        >{{ l.text }}</a
      >
      <MainHeaderMobileNavButton />
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
const scrollTo = (hash: string): void => {
  document.querySelector(hash).scrollIntoView({
    behavior: "smooth",
  });
};
</script>
<style lang="scss">
.header-wrapper {
  width: 100%;
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
    img {
      width: 33px;
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
    a {
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
