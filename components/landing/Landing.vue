<template>
  <MainHeader @toggleMobileMenu="mobileMenu = !mobileMenu" />
  <MobileMenu
    :active="mobileMenu"
    @toggleMobileMenu="mobileMenu = !mobileMenu"
  />
  <div class="page landing">
    <div class="text-container">
      <h3>Full-Stack<br />Development</h3>

      <div>
        <p class="sub3-medium">
          Bringing your most creative idea to life with unbonded and undonded
          efficiency.
        </p>
      </div>
    </div>
    <LandingIllus />
  </div>
</template>
<script setup lang="ts">
const mobileMenu = ref(false);
</script>
<style lang="scss">
@import "../assets/style/variables";

.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  padding-top: 70px;
  background: var(--blue-gradient-down);
  .text-container {
    color: var(--white-01);
    text-align: center;
    margin: var(--space-xl) 0;
    @include breakpoint("sm") {
      margin: var(--space-xxxl) 0;
    }
    h3 {
      text-shadow: -5px -2px #050454;
      @include breakpoint("md") {
        text-shadow: -3px -1px #050454;
      }
      @include breakpoint("sm") {
        font-size: 30px;
      }
    }
    p {
      max-width: 492px;
      margin: var(--space-xxs) auto;
      @include breakpoint("sm") {
        max-width: 275px;
      }
      @include breakpoint("md") {
        max-width: 296px;
      }
      @include breakpoint("sm") {
        margin: var(--space-sm) auto;
      }
    }
  }
}
</style>
