<template>
  <div class="connect-lower">
    <div class="connect-lower-left">
      <p class="text2-regular">© 2022 Adam Sebesta</p>
    </div>
    <div class="connect-lower-right">
      <nuxt-link
        class="text2-semibold uppercase"
        v-for="link in links"
        :to="link.link"
      >
        <p>
          {{ link.label }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ContactLink } from "../../types/contactLink";
const links: ContactLink[] = [
  { label: "Instagram", link: "" },
  { label: "LinkedIn", link: "" },
  { label: "Github", link: "" },
];
</script>
<style lang="scss">
.connect-lower {
  display: flex;
  justify-content: space-between;
  width: calc(100% - (var(--space-xl) * 2));
  margin: var(--space-xxl) auto var(--space-md) auto;
  @media screen and (max-width: 1279px) {
    width: calc(100% - (var(--space-xxl) * 2));
  }
  .connect-lower-left {
    color: var(--grey-02);
  }
  .connect-lower-right {
    display: flex;
    width: 35%;
    color: var(--white-01);
    a:not(:first-of-type) {
      margin-left: var(--space-lg);
    }
  }
}
</style>
