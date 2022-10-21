<template>
  <video
    :id="id"
    class="landing_video"
    autoplay="true"
    playsinline
    loop
    muted
    :src="src"
    alt=""
    type="video/mp4;"
    codecs="avc1.4d002a, mp4a.40.2"
  ></video>
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
    src: "./../../MAIN_DESKTOP_notext.mp4",
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
.landing_video {
  height: unset;
  // width: calc(100% - (var(--space-xl) * 2));
}

#MobileVideo,
#TabletVideo {
  width: 100%;
  height: 125vh;
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
