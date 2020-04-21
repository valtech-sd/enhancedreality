<template>
  <div class="home">
    <Products />
    <SectionVideo />
    <Section3Cols />
  </div>
</template>

<script>
import Products from '~/components/Products'
import Section3Cols from '~/components/Section3Cols'
import SectionVideo from '~/components/SectionVideo'

export default {
  components: {
    Products,
    Section3Cols,
    SectionVideo
  }
}
</script>
