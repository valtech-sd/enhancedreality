<template>
  <section class="video">
    <SideBar num="02" />
    <img src="~/assets/images/misc/bkg_video.jpg">
  </section>
</template>
<script>
import SideBar from '~/components/partials/SideCounter.vue'

export default {
  components: {
    SideBar
  }
}
</script>
<style lang="scss">
@import '~/assets/styles/_mixin.scss';

.video {
    width: 100vw;
    height: 50vh;
    position: relative;

    @include breakpoint('lg') {
      height: 70rem;
    }

    img{
      object-fit: cover;
      width: 100vw;
      height: 100%;
    }
    .sidebar{
      z-index: 1;
      color: white;
    }
}
</style>
