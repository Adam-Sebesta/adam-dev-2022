<template>
  <MainHeader @toggleMobileMenu="handleToggleMobileMenu()" />
  <MobileMenu
    :class="'mobile-menu' + (mobileMenu ? ' active' : '')"
    :active="mobileMenu"
    @toggleMobileMenu="handleToggleMobileMenu()"
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
const handleToggleMobileMenu = (): void => {
  mobileMenu.value = !mobileMenu.value;
  if (mobileMenu.value) {
    // document.body.style.position = "fixed";
  } else {
    // document.body.style.position = "unset";
  }
};
</script>
<style lang="scss">
// @import "../assets/style/variables";
@use "../assets/style/variables";

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
    z-index: 1;
    @include variables.breakpoint("md") {
      top: var(--space-xl);
    }
    @include variables.breakpoint("sm") {
      margin: var(--space-xxxl) 0;
      top: var(--space-xxxl);
    }
    h3 {
      text-shadow: -5px -2px #050454;
      @include variables.breakpoint("md") {
        text-shadow: -3px -1px #050454;
      }
      @include variables.breakpoint("sm") {
        font-size: 30px;
      }
    }
    p {
      max-width: 368px;
      margin: var(--space-xxs) auto;
      @include variables.breakpoint("sm") {
        max-width: 275px;
      }
      @include variables.breakpoint("md") {
        max-width: 296px;
      }
      @include variables.breakpoint("sm") {
        margin: var(--space-sm) auto;
      }
    }
  }
}
</style>
