<template>
  <MainHeader />
  <div class="page about">
    <div class="text-container">
      <div class="upper-text">
        <h3>Hello!<br />I am Adam</h3>
      </div>
      <p>a CREATIVE FULL-STACK DEVELOPER</p>
      <div class="lower-text">
        <div class="lower-text-left">
          Shoot me an email effort made was a lot, we need to think.
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
<style lang="sass">
.about
  display: flex
  flex-direction: column
  min-height: 100vh
  padding-top: 70px
  background: light-grey
  .text-container
    color: black
    margin: 4rem auto

    .upper-text
      display: flex
      flex-direction: column
      align-items: end
      h3
        display: flex
        font-size: 8vw
        line-height: 6.25vw
    p
      text-align: right
    .lower-text
      display: flex
      justify-content: space-between
      div
        max-width: 450px
        min-width: 180px
        padding: 4rem 0
      .lower-text-left
        font-size: 1.75vw
        line-height: 2vw
      .lower-text-right
        font-size: .75vw
        line-height: 1.5vw
        font-weight: 300
</style>
