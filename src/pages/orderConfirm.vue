<template>
  <div class="order-confirm">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-addr">
            <h2>收货地址</h2>
            <div class="addrlist clearfix">
              <div class="addr-info" v-for="(addr,index) in list" :key="index">
                <h2>{{addr.receiverName}}</h2>
                <div class="phone">{{addr.receiverMobile}}</div>
                <div class="street">{{addr.receiverProvince + ' ' + addr.receiverCity + ' ' + addr.receiverDistrict + ' ' + addr.receiverAddress}}</div>
                <div class="action">
                  <a href="javascript:;" class="fl">
                    <svg class="icon icon-del">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                  <a href="javascript:;" class="fr">
                    <svg class="icon icon-edit">
                      <use xlink:href="#icon-edit"></use>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="addr-add">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h3>商品</h3>
            <div class="good" v-for="(good,index) in cartList" :key="index">
              <div class="good-name">
                <img v-lazy="good.productMainImage" alt="">
                <span>{{good.productName + ' ' + good.productSubtitle}}</span>
              </div>
              <div class="good-price">{{good.productPrice}}元 x {{good.quantity}}</div>
              <div class="good-total">{{good.productTotalPrice}}</div>
            </div>
          </div>
          <div class="item-shoping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail"></div>
          <div class="btn-group"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'order-confirm',
  data(){
    return{
      list:[1,1], // 地址列表
      cartList:[1,1], // 商品列表
      cartTotalPrice:0, // 商品总金额
      count:0 //商品总件数
    }
  },
  mounted(){
    this.getAddressList();
    this.getCartList()
  },
  methods:{
    getAddressList(){
      this.axios.get('/shippings').then((res)=>{
        this.list = res.list;
      })
    },
    getCartList(){
      this.axios.get('/carts').then((res)=>{
        let list = res.cartProductVoList;//获取购物车中所有商品数据
        this.cartTotalPrice = res.cartTotalPrice;//商品总金额
        this.cartList = list.filter(item=>item.productSelected);
        this.cartList.map((item)=>{
          this.count += item.quantity;
        })
      })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.order-confirm{
  .wrapper{
    background-color:#F5F5F5;
    padding-top:30px;
    padding-bottom:114px;
    .container{
      background-color: #fff;
      .order-box{
        padding: 40px;
        h2{
          font-size: 24px;
          margin-bottom: 20px;
        }
        .addrlist{
          margin-bottom: 30px;

            .addr-info,.addr-add{
              float: left;
              border: 1px solid #e5e5e5;
              padding: 15px 24px;
              width: 271px;
              height: 180px;
            }
            .addr-info{
              margin-right: 10px;
              h2{
                height: 27px;
                font-size: 18px;
                font-weight: 300;
                margin-bottom: 10px;
                color: #333;
              }
              .phone,.street{
                font-size: 18px;
                margin-bottom: 15px;
              }
              .street{
                height: 50px;
              }
              .action{
                height: 50px;
                line-height: 50px;
                .icon{
                  width: 24px;
                  height: 24px;
                  fill: #666666;
                  cursor: pointer;
                }
              }
            }
            .addr-add{
              text-align: center;
              .icon-add{
                @include bgImg('/imgs/icon-add.png', 30px, 30px);
                background-color: #e0e0e0;
                border-radius: 50%;
                margin: 45px auto 10px;
                cursor: pointer;
              }
            }
        }
        .item-good{
          border-bottom: 2px solid #e5e5e5;
          h3{

            font-size: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e5e5;
          }
          .good{
            display: flex;
            padding: 10px;
            
            .good-name{
              flex: 5;
              img{
                width: 80px;
                height: 80px;
                vertical-align: middle;
              }
            }
            .good-price{
              flex: 2;
              line-height: 80px;
            }
            .good-total{
              line-height: 80px;
              flex: 1;
            }
          }
        }
        .item-shoping{
          margin-top: 20px;
          h2{
            display: inline-block;
            width: 200px;
            font-size: 24px;
          }
          span{
            font-size: 20px;
            color: $colorA;
          }
        }
        .item-invoice{
          h2{
            display: inline-block;
            width: 200px;
            font-size: 24px;
          }
          a{
            font-size: 20px;
            color: $colorA;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>