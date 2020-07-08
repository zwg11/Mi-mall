<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
          <div class="nav-menu">
              <ul class="menu-wrap">
                  <li class="menu-item">
                      <a href="javascript:;" class="title">手机电话卡</a>
                      <div class="children">
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        <div class="item">
                          
                          <a href="javascript:;"><img src="imgs/item-box-1.png" alt="">小米手机</a>
                        </div>
                        
                      </div>
                  </li>
                  <li class="menu-item">
                      <a href="javascript:;" class="title">手机电话卡</a>
                      <div class="children">
                        <!-- <div class="item">
                          <img src="imgs/item-box-2.png" alt="">
                          <a href="javascript:;"></a>
                        </div> -->
                      </div>
                  </li>
                  <li class="menu-item">
                      <a href="javascript:;" class="title">手机电话卡</a>
                      <div class="children"></div>
                  </li>
                  <li class="menu-item">
                      <a href="javascript:;" class="title">手机电话卡</a>
                      <div class="children"></div>
                  </li>
                  <li class="menu-item">
                      <a href="javascript:;" class="title">手机电话卡</a>
                      <div class="children"></div>
                  </li>
                  <li class="menu-item">
                      <a href="javascript:;" class="title">手机电话卡</a>
                      <div class="children"></div>
                  </li>
              </ul>
          </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/'+item.id">
              <img v-lazy="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="ads-box">
          <a :href="'/#/products/'+item.id" v-for="(item,index) in adsList" :key="index">
            <img v-lazy="item.img" alt="">
          </a>
        </div>
        <div class="banner">
          <a :href="'/#/products/'+banner.id">
          <img :src="banner.img" alt=""></a>
        </div>
      </div>
    </div>
    <product-box :phoneList = 'phoneList' @showModal='showModal'></product-box>
    <service-bar @hook:updated="console.log()"></service-bar>
    <modal title="提示" 
    sureText='查看购物车'
    btnType='1'
    modalType='middle'
    :isShow='isShowModal'
    @goCart='goCart'
    @cancel='isShowModal=false'
    >
      <template v-slot:body>
        <p>商品添加成功!</p>
      </template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from "@/components/ServiceBar.vue";
import ProductBox from "@/components/ProductBox.vue"
import Modal from "@/components/Modal.vue"
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    ProductBox,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "48",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "49",
          img: "/imgs/slider/slide-3.jpg"
        }
      ],
      adsList:[
        {
          id:33,
          img: 'imgs/ads/ads-1.png'
        },
        {
          id:32,
          img: 'imgs/ads/ads-2.jpg'
        },
        {
          id:31,
          img: 'imgs/ads/ads-3.png'
        },
        {
          id:30,
          img: 'imgs/ads/ads-4.jpg'
        },
      ],
      banner:{
        id:55,
        img: 'imgs/banner-1.png'
      },
      phoneList:[],
      isShowModal:false
    };
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.axios.get('/products',{
        params:{
          categoryId:100012,
          pageSize:14
        }
      }).then(res=>{
        res.list = res.list.slice(6,14);
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
      })
    },
    showModal(){
      console.log('show modal');
      
      this.isShowModal = true
    },
    goCart(){
      this.$router.push('/cart');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    position: relative;
    .nav-menu{
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 5;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      
      .menu-wrap{
        .menu-item{
          height: 50px;
          line-height: 50px;
          .title{
            display: block;
            color: white;
            font-size: 16px;
            font-weight: bold;
            position: relative;
            padding-left: 30px;
            position: relative;
            &:after{
              content: '';
              position: absolute;
              top: 18px;
              right: 30px;
              @include bgImg($img:'/imgs/icon-arrow.png', $w:10px, $h:15px,$s:contain);
            }

          }
          .children{
            position: absolute;
            top: 0;
            left: 264px;
            display: none;
            height: 451px;
            width: 450px;
            flex-direction: column;
            justify-content: start;
            flex-wrap: wrap;
            background-color: white;
            padding-top: 10px;
            box-sizing: border-box;
            box-shadow:0 4px 8px rgba(0,0,0,.18);
            .item{
              margin-left: 15px;
              z-index: 1;
              // width: 350px;
              // padding: 10px 20px;
              width: 200px;
              height: 70px;
              a{
                color: black;
                display: block;
                line-height: 60px;
                text-align: center;
                padding: 0 20px;
                box-sizing: border-box;
                
                
                img{
                  vertical-align: middle;
                  height: 50px;
                  width: auto;
                  margin-right: 10px;
                }
              }
            }
          }
          &:hover{
            background-color: #FF6600;
            .children{
              display: flex;
              flex-direction: column;
            }
          }

        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev{
        left: 275px;
      }
      img {
        height: 100%;
        width: 100%;
        
      }
    }
    .ads-box{
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 14px;
      a{
        width: 24%;
        img{
          width: 100%;
          height: 100%;
        }

      }
    }
    .banner{
      margin: 30px 0;
      a{
        display: block;
        width: 100%;
        img{
          width: 100%;
          height: auto;
        }
      }
    }    
  }
}
</style>