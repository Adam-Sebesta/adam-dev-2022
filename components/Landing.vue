<template>
  <MainHeader />
  <div class="page landing">
    <div class="text-container">
      <h1>Full-Stack<br />Development</h1>
      <div>
        <p>
          Bringing your most creative idea to life with unbonded and undonded
          efficiency.
        </p>
      </div>
      <nuxt-link to="#Contact">Let's talk!</nuxt-link>
    </div>
    <div id="landing-3d"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="sass">
.landing
  display: flex
  flex-direction: column
  align-items: center
  min-height: 100vh
  padding-top: 70px
  background: $blue-gradient-base
  .text-container
    color:$white-base
    text-align: center
    margin: 4rem 0
    p
      font-weight: 300
      max-width: 400px
      margin: 2rem auto
    a
      display: inline-block
      background:$yellow-base
      text-decoration: none
      color: black
      padding: 1rem 4rem
      position: relative
  #landing-3d
    width: 100%
    height: 75vh
    border: 1px solid black
</style>
