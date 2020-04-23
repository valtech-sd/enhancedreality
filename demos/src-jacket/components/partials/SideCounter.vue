<template>
  <div class="sidebar">
    <span class="num">{{ num }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '01'
    },
    text: {
      type: String,
      default: 'Find your true north'
    }
  }

}
</script>

<style lang="scss">
@import '~/assets/styles/_mixin.scss';

.sidebar{
    display: none;
    align-items: center;
    transform: rotate(-90deg);
    position: absolute;
    top: 11.5rem;
    left: -2rem;

    @include breakpoint ('mdpi'){
      display: flex;
    }

    .num{
        font-size: 3.5rem;
        margin-right: 2rem;
        position: relative;
        top: -4px;
    }
    .text{
        font-size: 1rem;
    }
}
</style>
