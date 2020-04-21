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
footer {
  background-size: 100%;
  background-position: bottom left;
  background-repeat: no-repeat;
  padding-bottom: 9.5rem;
  padding-top: 20.5rem;
  min-height: 60vh;
  font-size: 1.2rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  .upper_nav {
    flex: 0 1 100%;
    display: flex;
    align-items: stretch;
    padding: 0 6rem;

    nav{
        flex: 0 1 20%;
        a{
            display: block;
            margin-bottom: 4rem;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }

    .logo_section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: auto;
        img{
            flex: 0 1 auto;
        }
    }
  }
  .down_nav{
    padding: 0 6rem;
    margin-top: 14rem;
    flex: 0 1 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}
</style>
