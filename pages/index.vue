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
    z-index: -1;
  }
}
</style>
