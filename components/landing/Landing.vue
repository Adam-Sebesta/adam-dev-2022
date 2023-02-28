<template>
  <MainHeader @toggleMobileMenu="mobileMenu = !mobileMenu" />
  <MobileMenu
    :active="mobileMenu"
    @toggleMobileMenu="mobileMenu = !mobileMenu"
  />
  <div class="page landing">
    <div class="text-container scale3din">
      <h3>Cloud Native<br />Engineering</h3>

      <div>
        <p class="sub3-medium">
          Empowering your digital transformation with the cloud
        </p>
      </div>
    </div>
    <LandingVideo />
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
  // min-height: 125vh;
  overflow: hidden;
  background: var(--blue-gradient-down);
  .text-container {
    color: var(--white-01);
    text-align: center;
    position: absolute;
    margin: var(--space-xl) 0;
    z-index: 100;
    @include breakpoint("md") {
      top: var(--space-xl);
    }
    @include breakpoint("sm") {
      margin: var(--space-xxxl) 0;
      top: var(--space-xxxl);
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
      max-width: 368px;
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
