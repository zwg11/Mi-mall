<template>
  <div class="product-box">
    <div class="container">

      <h2>手机</h2>
      <div class="wrapper">
        <div class="banner-left">
          <a href="/#/products/35">
            <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
          </a>
        </div>
        <div class="list-box">
          <div class="list" v-for="(arr,ind) in phoneList" :key="ind">
            <div class="item" v-for="(item,index) in arr" :key="index">
              <span :class="{'new-pro':index%2==0}">新品</span>
              <div class="item-img">
                <img v-lazy="item.mainImage" alt=""/>
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}}</p>
                <p class="price" @click="addCart(item.id)">{{item.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-box",
  props:['phoneList'],
  data() {
    return {
      
    };
  },
  methods:{
    addCart(id){ 
      this.axios.post('/carts',{
        productId:id,
        selected:true
      }).then(res=>{
        console.log(res);
        this.$emit('showModal')
        this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
        
      }).catch(res=>{
        console.log(res);
        
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.product-box {
  width: 100%;
  padding: 30px 0 50px;
  background-color: $colorJ;
  h2 {
    font-size: $fontF;
    height: 21px;
    line-height: 21px;
    color: $colorC;
    margin-bottom: 10px;
  }
  .wrapper {
    display: flex;
    .banner-left {
      margin-right: 16px;
      img {
        width: 224px;
        height: 619px;
      }
    }
    .list-box {
      .list {
        @include flex();
        width: 986px;
        margin-bottom: 14px;
        &:last-child {
          margin-bottom: 0;
        }
        .item {
          width: 236px;
          height: 302px;
          background-color: $colorG;
          text-align: center;
          span{
            display:inline-block;
            width:67px;
            height:24px;
            font-size:14px;
            line-height:24px;
            color:$colorG;
            &.new-pro{
              background-color:#7ECF68;
            }
            &.kill-pro{
              background-color:#E82626;
            }
          }
          .item-img {
            img {
              height: 195px;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
              
            }
            .price{
              color: #F20A0A;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;
              &:after{
                
                content: ' ';
                margin-left: 5px;
                vertical-align: middle;
                @include bgImg($img:'/imgs/icon-cart-hover.png', $w:22px, $h:22px);
              }
            }
          }
        }
      }
    }
  }
}
</style>