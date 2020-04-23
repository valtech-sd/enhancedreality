<template>
  <section class="psr">
    <SideBar num="03" />
    <div class="container">
      <div class="col col__3">
        <div>
          <h3 class="font-baskerville">
            Satisfaction Guarenteed.
          </h3>
          <p>We offer free shipping on all orders. Returns are a snap. Always, free within 30 days.</p>
        </div>
        <div>
          <h3 class="font-baskerville">
            Less but Better.
          </h3>
          <p>We offer free shipping on all orders. Returns are a snap. Always, free within 30 days.</p>
        </div>
        <div>
          <h3 class="font-baskerville">
            Designed on the West Coast.
          </h3>
          <p>We offer free shipping on all orders. Returns are a snap. Always, free within 30 days.</p>
        </div>
      </div>
    </div>
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
.col{
    display: grid;
    margin: 0 auto;
    padding: 10vh 0px;
    @include breakpoint('lg') {
      padding: 24vh 0px;
      max-width: 60vw;
    }
    &__3{

      > div{
        margin-bottom: 2.5rem;
      }

      @include breakpoint('lg') {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 5rem;
        grid-row-gap: 0px;
      }
    }

    h3{
        font-size: 2.3rem;
        margin-bottom: 1rem;
        @include breakpoint('lg') {
          min-height: 70px;
          margin-bottom: 2.5rem;
        }
    }
}
</style>
