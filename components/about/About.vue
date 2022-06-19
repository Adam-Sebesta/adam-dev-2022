<template>
  <div class="page about">
    <div class="text-container">
      <div class="upper-text">
        <AboutHeader />
      </div>
      <div class="lower-text">
        <div class="lower-text-left subtitle-40-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          impedit in.
        </div>
        <div class="lower-text-right text-16-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel
          ex eos, aperiam nulla animi omnis nobis <br /><br />
          vero dolorum at dolores, beatae ea autem nisi nihil molestias veniam.
          Ut, harum!
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
  .text-container {
    color: black;
    margin: var(--space-lg) 0;
    .upper-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .lower-text {
      display: flex;
      // justify-content: space-between;
      margin-top: var(--space-md);
      div {
        min-width: 180px;
        @include breakpoint("md") {
          max-width: 400px;
        }
      }
      .lower-text-left {
        max-width: 50%;
        color: var(--black-03);
        margin: var(--space-md) 0;
      }
      .lower-text-right {
        // max-width: 40%;
        color: var(--black-02);
        margin: var(--space-xxl) 0 var(--space-xxl) 11%;
      }
    }
  }
}
</style>
