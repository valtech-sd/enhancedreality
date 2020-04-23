<template>
  <header class="container container__fluid">
    <div class="logo">
      <img src="~/assets/images/misc/Logo.png" alt="Logo">
      <span>Premium Outdoor Goods</span>
    </div>

    <nav>
      <a href="#">Gear</a>
      <a href="#">Accesories</a>
      <a href="#">About</a>
    </nav>

    <div class="burger">
      <span />
      <span />
    </div>
  </header>
</template>

<style lang="scss">
@import '~/assets/styles/_mixin.scss';

header{
    position: absolute!important;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    font-size: 1.6rem;
    color: white;

    @include breakpoint('lg') {
        height: 13rem;
    }

    .logo{
        display: flex;
        align-items: center;
        img{
            margin-right: 2.5rem;
        }
        span{
            color: white;
            display: none;
            @include breakpoint('lg') {
              display: block;
            }
        }
    }
    nav{
      display: none;
      @include breakpoint('lg') {
        display: flex;
        a{
            margin-right: 2.5rem;
            &:last-child{
                margin-right: 0;
            }
        }
      }
    }
    .burger{
      width: 12vw;

      @include breakpoint('lg') {
        display: none;
      }

      span{
        display: block;
        width: 100%;
        height: 6px;
        background-color: #fff;
        margin-bottom: 1rem;
      }
    }
}
</style>
