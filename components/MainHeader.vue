<template>
  <header class="header-wrapper">
    <div class="header-left">
      <img src="logo-no-text" alt="" />
      <p>Adam Sebesta</p>
    </div>
    <div class="header-right">
      <nuxt-link :class="l.dot ? 'dot' : ''" v-for="l in links" :to="l.src">{{
        l.text
      }}</nuxt-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { HeaderLink } from "types/headerlink";

const links: HeaderLink[] = [
  {
    src: "#About",
    text: "About",
  },

  {
    src: "#Portfolio",
    text: "Portfolio",
  },
  {
    src: "#Contact",
    text: "Contact",
    dot: true,
  },
];
</script>
<style lang="sass">
header
  width: calc(100% - 6rem)
  height: 70px
  position: absolute
  top: 0
  padding: 0 3rem
  display: flex
  justify-content: space-between
  align-items: center
  .header-left
    display: flex
    align-items: center
    color: $white-base
  .header-right
    display: flex
    justify-content: space-between
    align-items: center
    a
      font-weight: 500
      font-size: 13px
      line-height: 28px
      color: $white-base
      text-decoration: none
      padding: 5px
      margin: 10px
      position: relative
      &:first-of-type
        margin-left: 0
      &:last-of-type
        margin-right: 0
      &.dot::before
        content: ''
        width: 10px
        top: 35%
        margin-right: 7px
        display: inline-block
        height: 10px
        background: $yellow-base
        border-radius: 100%
</style>
