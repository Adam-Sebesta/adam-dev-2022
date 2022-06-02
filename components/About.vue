<template>
  <MainHeader />
  <div class="page about">
    <div class="text-container">
      <div class="upper-text">
        <AboutHeader />
      </div>
      <div class="lower-text">
        <div class="lower-text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          impedit in cupiditate at sed dolore placeat excepturi error inventore
          aspernatur deserunt aliquam ad necessitatibus cumque consequuntur
          rerum, nisi, nobis nulla.
        </div>
        <div class="lower-text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel
          ex eos, aperiam nulla animi omnis nobis <br /><br />
          vero dolorum at dolores, beatae ea autem nisi nihil molestias veniam.
          Ut, harum!
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import "../assets/style/variables";

.about {
  display: flex;
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
    //   h3 {
    //     display: flex;
    //     font-size: var(--text-sm);
    //     line-height: 6.25vw;
    //   }
    // p {
    //   text-align: right;
    //   font-size: var(--text-sm);
    // }
    .lower-text {
      display: flex;
      justify-content: space-between;
      margin: var(--space-md) 0;
      div {
        max-width: 600px;
        min-width: 180px;

        @include breakpoint("md") {
          max-width: 400px;
        }
      }
      .lower-text-left {
        font-size: var(--text-sm);
        line-height: 1.5;
        color: var(--black-03);
        margin: var(--space-lg) 0;
      }
      .lower-text-right {
        font-size: var(--text-xs);
        line-height: 200%;
        font-weight: 300;
        color: var(--black-02);
        margin: var(--space-xxl) 0;
      }
    }
  }
}
</style>
