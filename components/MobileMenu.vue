<template lang="">
  <div :class="'mobile-menu-wrapper' + (active ? ' active' : '')">
    <div id="MobileMenuOverlay" @click="$emit('toggleMobileMenu')"></div>
    <div id="MobileMenu">
      <button
        :class="(l.dot ? 'dot' : '') + ' text2-medium'"
        v-for="l in links"
        @click="closeMenuAndScrollTo(l.hash)"
      >
        {{ l.text }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HeaderLink } from "~~/types/headerlink";
const props = defineProps({ active: Boolean });
const emit = defineEmits(["toggleMobileMenu"]);
const links: HeaderLink[] = [
  {
    hash: "#home",
    text: "Home",
  },
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

const closeMenuAndScrollTo = (hash: string): void => {
  let section = document.querySelector(hash);
  emit("toggleMobileMenu");

  setTimeout(() => {
    section &&
      section.scrollIntoView({
        behavior: "smooth",
      });
  }, 200);
};
</script>
<style lang="scss">
.mobile-menu-wrapper {
  display: none;
  position: relative;
  @media screen and (max-width: 560px) {
    display: block;
  }
  &.active {
    #MobileMenuOverlay {
      opacity: 0.5;
      display: unset;
    }
    #MobileMenu {
      transform: translateX(0);
      z-index: 3;
    }
  }
  #MobileMenuOverlay {
    background-color: black;
    height: 100vh;
    z-index: 2;
    cursor: pointer;
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    z-index: 1;
  }
  #MobileMenu {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: calc(100vw - 50px);
    background: var(--white-01);
    transform: translateX(calc(100vw - 50px));
    transition: transform 300ms ease;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    button {
      margin-bottom: 1rem;
      font-size: 16px;
    }
  }
}
</style>
