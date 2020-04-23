<template>
  <footer
    class="container container__fluid"
    :style="{ backgroundImage: `url(${FooterBackground})` }"
  >
    <div class="upper_nav">
      <nav>
        <a href="#">Gear</a>
        <a href="#">Accesories</a>
        <a href="#">About</a>
        <a href="#">Gear</a>
        <a href="#">Accesories</a>
        <a href="#">About</a>
      </nav>
      <nav>
        <a href="#">Gear</a>
        <a href="#">Accesories</a>
        <a href="#">About</a>
        <a href="#">Gear</a>
        <a href="#">Accesories</a>
        <a href="#">About</a>
      </nav>
      <div class="logo_section">
        <img src="~/assets/images/misc/Logo.png">
        <img src="~/assets/images/misc/BBLog.png">
      </div>
    </div>

    <div class="down_nav">
      <a href="#">United States © 2020 V, Inc. All Rights Reserved</a>
      <div class="terms">
        <a href="#">Guides</a>
        <a href="#">Terms of Use</a>
        <a href="#">About</a>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterBackground from '~/assets/images/misc/bkg_footer.jpg'

export default {
  data () {
    return {
      FooterBackground
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/_mixin.scss';

footer {
  background-size: cover;
  background-position: 16%;
  background-repeat: no-repeat;
  padding-bottom: 3rem;
  padding-top: 6rem;
  font-size: 1.2rem;
  color: white;

  @include breakpoint('lg') {
    background-position: bottom left;
    background-size: 100%;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding-bottom: 9.5rem;
    padding-top: 20.5rem;
  }

  .upper_nav {

    @include breakpoint('lg') {
      padding: 0 6rem;
      flex: 0 1 100%;
      display: flex;
      align-items: stretch;
    }

    nav{
      margin-bottom: 4rem;

        @include breakpoint('lg') {
          flex: 0 1 20%;
          margin-bottom: 0;
        }
        a{
            display: block;
            margin-bottom: 1rem;
            @include breakpoint('lg') {
              margin-bottom: 4rem;
            }
            &:last-child{
                margin-bottom: 0;
            }
        }
    }

    .logo_section{
      margin-top: 4rem;
        @include breakpoint('lg') {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: auto;
        }
        img{
            flex: 0 1 auto;
            margin-bottom: 2rem;
        }
    }
  }
  .down_nav{
    margin-top: 4rem;

    @include breakpoint('lg') {
      margin-top: 1rem;
      flex: 0 1 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 6rem;
      margin-top: 14rem;
    }

    .terms{
      margin-top: 2rem;
    }
  }

}
</style>
