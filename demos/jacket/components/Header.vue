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
  </header>
</template>

<style lang="scss">
header{
    position: absolute!important;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13rem;
    font-size: 1.6rem;
    color: white;
    .logo{
        display: flex;
        align-items: center;
        img{
            margin-right: 2.5rem;
        }
        span{
            color: white;
        }
    }
    nav{
        display: flex;
        a{
            margin-right: 2.5rem;
            &:last-child{
                margin-right: 0;
            }
        }
    }
}
</style>
