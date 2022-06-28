<template>
  <div id="About" class="page about">
    <div class="text-container">
      <div class="upper-text">
        <AboutHeader />
      </div>
      <div class="lower-text">
        <div class="lower-text-left sub1-medium">
          Shoot me an email effort made was a lot, we need to think.
        </div>
        <div class="lower-text-right text2-regular">
          Shoot me an email effort made was a lot, we need to think big start
          small and scale fast to energize our clie proceduralize. We should
          leverage existing asserts that ladder.
          <br /><br />
          Shoot me an email effort made was a lot, we need to think big start
          small and scale fast to energize our clie proceduralize. We should
          leverage existing asserts that ladder.
        </div>
      </div>
      <AboutLetsTalk />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import "../assets/style/variables";

.about {
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  padding: var(--space-lg) var(--space-xl) 0 var(--space-xl);
  background: var(--white-01);
  @include breakpoint("md") {
    min-height: unset;
    padding: var(--space-lg) var(--space-xxl) 0 var(--space-xxl);
  }
  &::before {
    content: "";
    height: 1px;
    width: 100vw;
    background-color: var(--blue-01);
    top: var(--space-xxxxs);
    left: 0;
    position: absolute;
  }
  .text-container {
    color: black;
    // margin: var(--space-lg) 0;
    .upper-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: var(--space-xxl) 0;
      @include breakpoint("md") {
        align-items: flex-start;
        margin-top: var(--space-xxxl);
      }
    }
    .lower-text {
      display: flex;
      // justify-content: space-between;
      margin-top: var(--space-md);

      div {
        min-width: 180px;
      }
      .lower-text-left {
        max-width: 50%;
        color: var(--black-03);
      }
      .lower-text-right {
        width: 39%;
        color: var(--black-02);
        margin: var(--space-xl) 0 var(--space-xl) auto;
      }
      @include breakpoint("md") {
        flex-direction: column;
        .lower-text-left {
          margin: var(--space-lg) 0 0 0;
          min-width: 70%;
        }
        .lower-text-right {
          margin: var(--space-xl) 0 0 0;
          padding-bottom: var(--space-xxxl);
          min-width: 70%;
        }
      }
    }
  }
}
</style>
