/* eslint-disable vue/html-self-closing */
<template>
  <section class="product-container" :style="{ backgroundImage: `url(${headerBackground})` }">
    <SideBar />
    <div class="product-wrapper container">
      <div class="product-view">
        <div v-for="(version, index) in products[0].versions" :key="index" :class="colorSelected == index ? 'active' : ''" class="product-single">
          <img class="product-single__full" :src="version.img" alt="">
          <div class="qr-code">
            <img class="product-single__qr-code" :src="version.qr_code" alt="">
            <span>Scan the QR  code for AR experience</span>
          </div>
        </div>
      </div>

      <div class="product-details">
        <h2 class="product__title">
          M90 men's Jacket
        </h2>
        <div class="product__price">
          <div>$349.99</div>
          <div class="rate">
            <StarRating :rating="config.rating" :starStyle="config.style" :isIndicatorActive="false" />
            <span>(1299)</span>
          </div>
        </div>
        <div class="product__color-nav">
          <div
            v-for="(version, index) in products[0].versions"
            :key="index"
            :class="colorSelected == index ? 'active' : ''"
            :data-id="index"
            class="single-nav"
            @click="changeColor"
          >
            <div class="thumb">
              <img :src="version.img" alt="">
            </div>
            <span>{{ version.name }}</span>
          </div>
        </div>
        <div class="product__size">
          <div v-for="(size, index) in products[0].sizes" :key="index">
            <span>{{ size }}</span>
          </div>
        </div>
        <div class="product__desc">
          <p>{{ products[0].desc }}</p>
        </div>

        <div class="product__cta">
          <a href="#" class="cta">ADD TO CART</a>
          <a href="#" class="cta cta__white">FAVORITE</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from 'vue-dynamic-star-rating'
import SideBar from '~/components/partials/SideCounter.vue'
import headerBackground from '~/assets/images/misc/bkg_header.jpg'

export default {
  components: {
    SideBar,
    StarRating
  },
  data () {
    return {
      headerBackground,
      colorSelected: '0',
      config: {
        rating: 4.5,
        isIndicatorActive: false,
        style: {
          fullStarColor: '#424242',
          emptyStarColor: '#757575',
          starWidth: 10,
          starHeight: 10
        }
      },
      products: [
        {
          title: 'M90 Men\'s Jacket',
          price: '$349.99',
          desc:
            'Insulated for warmth, the M90 jacket is crafted from premium material, so you can keep charging through rain, hail, sleet and snow.',
          sizes: ['M', 'L', 'XL'],
          versions: [
            {
              name: 'Woodland',
              img: 'assets/images/jackets/jacket_1.png',
              qr_code: 'assets/images/qr_codes/01_Woodland.png'
            },
            {
              name: 'HighDesert',
              img: 'assets/images/jackets/jacket_2.png',
              qr_code: 'assets/images/qr_codes/02_High_Desert.png'
            },
            {
              name: 'Riparian',
              img: 'assets/images/jackets/jacket_3.png',
              qr_code: 'assets/images/qr_codes/03_Riparian.png'
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeColor (event) {
      this.colorSelected = event.currentTarget.getAttribute('data-id')
    }
  }
}
</script>

<style lang="scss">
.product-container {
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
    padding-top: 35vh;
    padding-bottom: 9rem;
    position: relative;

    .sidebar{
        top: 55%;
    }

    @media screen and (min-width: 1680px) {
      padding-top: 65vh;
    }
}
.product-wrapper{
    display: flex;
}
.product-view{
    flex: 0 1 60%;
    position: relative;
    font-family: 'Libre-Baskerville-Italic';

    .product-single{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;

        opacity: 0;
        transition: all 0.3s ease-out;

        &__full{
            height: 70rem;
            position: relative;
            left: -4rem;
        }
        &__qr-code{
            height: 113px;
            width: auto;
            margin: 0 auto;
            margin-bottom: 3rem;

        }
        &.active{
            opacity: 1;
        }
    }

}
.product-details{
    flex: 0 1 40%;
    padding-top: 29rem;
    padding-left: 6rem;

    .product{
        &__title{
            font-size: 3.5rem;
            margin-bottom: 3.5rem;
        }
        &__price{
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;
            max-width: 75%;
            align-items: center;

            .rate{
              display: flex;
              align-items: baseline;

              span{
                margin-left: 0.5rem;
                font-size:1.2rem;
                color: lightgrey;
              }
            }
        }
        &__color-nav{
            display: flex;
            margin-bottom: 3rem;
            .single-nav{
                flex: 0 1 8rem;
                margin-right: 1.5rem;
                text-align: center;
                &:last-child{ margin-right: 0; }

                .thumb{
                    height: 10rem;
                    margin-bottom: 1.5rem;
                    border: 1px solid lightgrey;
                    border-radius: 3px;
                    padding: 5px;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                span{
                   font-size: 1.5rem;
                   text-align: center;
                   opacity: 0;
                   transition: all 0.3s ease;
                }

                &.active,
                &:hover {
                    .thumb{
                        border: 1px solid black;
                    }
                    span{
                        opacity: 1;
                    }
                }
            }
        }
        &__size{
            margin-bottom: 3rem;
            display: flex;

            > div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 4.5rem;
                height: 4.5rem;
                margin-right: 1.2rem;
                border-radius: 50%;
                border: 1px solid lightgrey;
                font-size: 1.2rem;
                transition: all 0.3s ease;
                text-transform: uppercase;
                line-height: 1.2;
                span{
                    position: relative;
                    top: -2px;
                }
                &.active,
                &:hover {
                    border: 1px solid black;
                }
            }
        }
        &__desc{
            margin-bottom: 3rem;
            color: #757575;
        }
        &__cta{
            .cta{
              &:last-child{
                margin-bottom: 0;
              }
            }
        }
    }
}
</style>
