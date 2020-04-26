/* eslint-disable vue/html-self-closing */
<template>
  <section class="product-container" :style="{ backgroundImage: `url(${headerBackground})` }">
    <SideBar />
    <div class="product-wrapper container">
      <div class="product-view">
        <div
          v-for="(version, index) in products[0].versions"
          :key="index"
          :class="colorSelected == index ? 'active' : ''"
          class="product-single"
        >
          <img class="product-single__full" :src="version.img" alt="">
          <div class="qr-code">
            <img class="product-single__qr-code" :src="version.qr_code" alt="">
            <span class="only-desktop">Scan the QR  code for AR experience</span>
            <!-- <model-viewer
              src="/jacket/ar/Astronaut.glb"
              ar
              ar-modes="webxr scene-viewer quick-look fallback"
              ar-scale="auto"
              camera-controls
              alt="A 3D model of an astronaut"
              ios-src="/jacket/ar/fender_stratocaster.usdz"
            >
              Tap the Jacket for AR experience
            </model-viewer> -->
            <a v-if="$browserDetect.isIOS" rel="ar" :href="version.ar_model_ios_src" class="ar-link">
              <div>
                <img src="/jacket/assets/images/misc/ar-icon.png">
                Tap the Jacket for AR experience
              </div>
            </a>
            <a v-else :href="`intent://arvr.google.com/scene-viewer/1.0?file=${version.ar_model_and_src}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://enhancedreality.valtech.engineering/jacket/;end;`" class="ar-link">
              <div>
                <img src="/jacket/assets/images/misc/ar-icon.png">
                Tap the Jacket for AR experience
              </div>
            </a>
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
            <StarRating :rating="config.rating" :star-style="config.style" :is-indicator-active="false" />
            <span>(1299)</span>
          </div>
        </div>

        <div class="wrapper-color-size">
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
              qr_code: 'assets/images/qr_codes/01_Woodland.png',
              ar_model_ios_src: 'https://enhancedreality.valtech.engineering/jacket/ar/01_M90_Jacket_Woodland.usdz',
              ar_model_and_src: 'https://enhancedreality.valtech.engineering/jacket/ar/01_M90_Jacket_Woodland.glb'
            },
            {
              name: 'HighDesert',
              img: 'assets/images/jackets/jacket_2.png',
              qr_code: 'assets/images/qr_codes/02_High_Desert.png',
              ar_model_ios_src: 'https://enhancedreality.valtech.engineering/jacket/ar/02_M90_Jacket_High_Desert.usdz',
              ar_model_and_src: 'https://enhancedreality.valtech.engineering/jacket/ar/02_M90_Jacket_High_Desert.glb'
            },
            {
              name: 'Riparian',
              img: 'assets/images/jackets/jacket_3.png',
              qr_code: 'assets/images/qr_codes/03_Riparian.png',
              ar_model_ios_src: 'https://enhancedreality.valtech.engineering/jacket/ar/03_M90_Jacket_Riparian.usdz',
              ar_model_and_src: 'https://enhancedreality.valtech.engineering/jacket/ar/03_M90_Jacket_Riparian.glb'
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
@import '~/assets/styles/_mixin.scss';

.product-container {
    background-size: 153%;
    background-position: top left;
    background-repeat: no-repeat;
    padding-top: 10vh;
    padding-bottom: 9rem;
    position: relative;

    @include breakpoint('lg') {
      padding-top: 35vh;
      background-position: top left;
    }
    @include breakpoint('mdpi') {
      background-size: contain;
    }
    @include breakpoint('xl') {
        padding-top: 65vh;
    }

    .sidebar{
        top: 55%;
    }
}
.product-wrapper{
  @include breakpoint('lg') {
    display: flex;
  }
}
.product-view{
    position: relative;
    font-family: 'Libre-Baskerville-Italic';
    height: 37rem;

    @include breakpoint('md') {
        height: 70vh;
    }

    @include breakpoint('lg') {
        flex: 0 1 60%;
        height: auto;
    }

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

        pointer-events: none;
        padding-bottom: 5rem;

        @include breakpoint('lg') {
          padding-bottom: 0;
        }

        &__full{
            position: relative;
            left: -2rem;
            @include breakpoint('lg') {
              left: -4rem;
              height: 66rem;
            }
        }
        &__qr-code{
            height: 213px;
            width: auto;
            margin: 0 auto;
            margin-bottom: 3rem;
            display: none;

            @include breakpoint('lg') {
              display: block;
            }
        }
        .qr-code{
          @include breakpoint('lg') {
            position: relative;
            top: -2rem;
          }
        }
        &.active{
            opacity: 1;
            pointer-events: auto;
        }
    }

}
.product-details{
    padding-top: 8vh;

    @include breakpoint('lg') {
      flex: 0 1 40%;
      padding-top: 29rem;
      padding-left: 6rem;
    }

    // .wrapper-color-size{
    //   display: flex;
    //   align-items: center;
    //   @include breakpoint('mdpi') {
    //     display: block;
    //   }
    // }

    .product{
        &__title{
            font-size: 3.5rem;
            margin-bottom: 2rem;
            @include breakpoint('lg') {
              margin-bottom: 3.5rem;
            }
        }
        &__price{
            display: flex;
            justify-content: space-between;
            margin-bottom: 2.5rem;
            align-items: center;

            @include breakpoint('lg') {
              max-width: 75%;
            }

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
            margin-bottom: 2rem;
            justify-content: space-between;
            @include breakpoint('lg') {
              margin-bottom: 3.5rem;
              justify-content: flex-start;
            }
            .single-nav{
                margin-right: 1.5rem;
                text-align: center;
                &:last-child{ margin-right: 0; }

                @include breakpoint('lg') {
                  flex: 0 1 8rem;
                }

                .thumb{
                    height: 23vw;
                    margin-bottom: 0.5rem;
                    border: 1px solid lightgrey;
                    border-radius: 3px;
                    padding: 5px;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    @include breakpoint('lg') {
                      margin-bottom: 1.5rem;
                      height: 10rem;
                    }

                    img{
                      object-fit: contain;
                      width: 100%;
                      height: 100%;
                    }
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
            justify-content: space-between;

            @include breakpoint('lg') {
              justify-content: flex-start;
            }

            > div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 23vw;
                height: 23vw;
                margin-right: 1.2rem;
                border-radius: 50%;
                border: 1px solid lightgrey;
                font-size: 1.2rem;
                transition: all 0.3s ease;
                text-transform: uppercase;
                line-height: 1.2;

                &:last-child{ margin-right: 0; }

                @include breakpoint('lg') {
                  width: 4.5rem;
                  height: 4.5rem;
                }

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
              margin-bottom: 1.5rem;
              @include breakpoint('lg') {
                margin-bottom: 2.8rem;
              }
              &:last-child{
                margin-bottom: 0;
              }
            }
        }
    }
}
.ar-link{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2;
  > div{
    display: flex;
    align-items: center;
  }
  img{
    margin-right: 2rem;
  }
  @include breakpoint('lg') {
    display: none;
  }
}
</style>
