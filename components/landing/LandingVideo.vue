<template>
  <video
    :id="id"
    class="landing_video scale3din"
    autoplay="true"
    playsinline
    loop
    muted
    :src="src"
    preload="auto"
    alt=""
    type="video/mp4;"
    codecs="avc1.4d002a, mp4a.40.2"
  ></video>
  <!-- <div class="landing_video">
    <img src="../../../preload_background.png" alt="">
  </div> -->
</template>
<script setup lang="ts">
const { device } = useResponsive();
let mounted = ref();
let src = ref();
let id = ref();
let deviceConfig = {
  mobile: { id: "MobileVideo", src: "./../../MAIN_MOBILE_notext.mp4" },
  tablet: { id: "TabletVideo", src: "./../../MAIN_TABLET_notext.mp4" },
  desktop: {
    id: "DesktopVideo",
    src: "./../../MAIN_DESKTOP_notext_720p.mp4",
  },
};

const setVideoProps = (): void => {
  src.value = deviceConfig[device()].src;
  id.value = deviceConfig[device()].id;
};
const initLandingVideo = (): void => {
  setVideoProps();
  // console.log(document.querySelector(".landing_video").play(), id.value);
};

onMounted(() => {
  mounted.value = true;
  initLandingVideo();
  window.addEventListener("resize", setVideoProps);
});
</script>
<style lang="scss">
@import "../assets/style/variables";
.landing_video {
  min-height: 1200px;
  // width: calc(100% - (var(--space-xl) * 2));
  background-color: transparent;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  // @media screen and (min-width: 1600px) {
  width: 100%;
  top: var(--space-xxxl);
  // }
}
.scale3din {
  animation-name: scale3din;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 2s;
  animation-fill-mode: forwards; // keep the style after the animation is done
}

@keyframes scale3din {
  0% {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

#MobileVideo,
#TabletVideo {
  width: 100%;
  // height: 115vh;
  object-fit: cover;
  top: var(--space-xxxl);
}

// @media screen and (min-width: 1279px) {
//   #TabletVideo,
//   #MobileVideo {
//     display: none;
//   }
//   #DesktopVideo {
//     display: block;
//     width: 100%;
//   }
// }
</style>
