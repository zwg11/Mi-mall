<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt='item.subtitle' :title='item.subtitle'/>
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currentcy}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
                <ul>
                <li class="product" v-for="(item,index) in tvList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt='item.subtitle' :title='item.subtitle'/>
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currentcy}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: "jack",
      phoneList: [],
      tvList:[
          {
              id:111,
              mainImage:'imgs/nav-img/nav-3-1.jpg',
              name:'小米壁画电视 65英寸',
              price:6999,
              subtitle:''
          },
          {
              id:121,
              mainImage:'imgs/nav-img/nav-3-2.jpg',
              name:'小米全面屏电视E55A',
              price:1999,
              subtitle:''
          },
          {
              id:131,
              mainImage:'imgs/nav-img/nav-3-3.png',
              name:'小米电视4A 32英寸',
              price:699,
              subtitle:''
          },
          {
              id:141,
              mainImage:'imgs/nav-img/nav-3-4.jpg',
              name:'小米电视4A 55英寸',
              price:1799,
              subtitle:''
          },
          {
              id:151,
              mainImage:'imgs/nav-img/nav-3-5.jpg',
              name:'小米电视4A 65英寸',
              price:2699,
              subtitle:''
          },
          {
              id:161,
              mainImage:'imgs/nav-img/nav-3-6.png',
              name:'小米大屏电视 66英寸',
              price:2899,
              subtitle:''
          },
      ]
    };
  },
  filters: {
    currentcy(val) {
      if (!val)return "0.00";
      return "￥" + val + "元";
    }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          this.phoneList = res.list;
        });
    },
    cart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(
            $img: "/imgs/icon-cart-checked.png",
            $w: 16px,
            $h: 12pxs
          );
          margin-right: 5px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            @include bgImg(
              $img: "/imgs/mi-logo.png",
              $w: 55px,
              $h: 55px,
              $s: 55px
            );
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(
              $img: "/imgs/mi-home.png",
              $w: 55px,
              $h: 55px,
              $s: 55px
            );
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        flex: 1;
        padding-left: 206px;
        height: 100%;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          height: 100%;
          line-height: 112px;
          font-size: 16px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              border-top: 1px solid $colorH;
              height: 240px;
              box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            }
          }
          .children {
            position: absolute;
            // display: none;
            top: 100px;
            left: 0;
            height: 0;
            width: 1226px;

            z-index: 10;
            transition: 0.5s;
            overflow: hidden;

            .product {
              background-color: $colorG;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;

              padding-top: 30px;
              a {
                display: inline-block;

                height: 100%;
              }
              img {
                height: auto;
                width: 100%;
                border-right: 1px solid $colorF;
              }
              &:last-child {
                img {
                  border-right: none;
                }
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          @include flex();
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(
              $img: "/imgs/icon-search.png",
              $w: 18px,
              $h: 18px,
              $s: contain
            );
            margin-right: 16px;
          }
        }
      }
    }
  }
}
</style>