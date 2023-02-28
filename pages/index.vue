<template>
  <div>
    <Preloader />
    <Landing />
    <About />
    <Projects />
    <Connect />
    <MainFooter />
  </div>
</template>
<style lang="scss">
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.fadeout {
  animation: fadeOut 1ms;
  animation-fill-mode: forwards; // keep the style after the animation is done
  // animation-delay: 2s; // wait 10s before starting the animation
}
</style>
