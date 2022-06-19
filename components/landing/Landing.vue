<template>
  <MainHeader />
  <div class="page landing">
    <div class="text-container">
      <h3>Full-Stack<br />Development</h3>

      <div>
        <p class="subtitle-20-medium">
          Bringing your most creative idea to life with unbonded and undonded
          efficiency.
        </p>
      </div>
    </div>
    <div id="landing-3d"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import "../assets/style/variables";

.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 70px;
  background: var(--blue-gradient-down);
  .text-container {
    color: var(--white-01);
    text-align: center;
    margin: 4em 0;
    h3 {
      text-shadow: -7px -5px #050454;
    }
    p {
      max-width: 492px;
      margin: var(--space-xxs) auto;
      @include breakpoint("sm") {
        max-width: 275px;
      }
    }
  }
  #landing-3d {
    width: 100%;
    height: 75vh;
    border: 1px solid black;
  }
}
</style>
