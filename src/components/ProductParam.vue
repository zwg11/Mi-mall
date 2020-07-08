<template>
  
  <div class="nav-header" :class="{'is_fixed':isFixed}">
    <div class="container">

      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="">概述</a><span>|</span>
        <a href="">参数</a><span>|</span>
        <a href="">用户评价</a>
        <slot name="buy"></slot>
        
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'productParam',
  props:{
    title:String
  },
  data(){
    return{
      isFixed: false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.initHeight)
    
  },
  methods:{
    initHeight(){
      // let nav = document.querySelector('.nav-header').getBoundingClientRect();
      // let h = nav.top;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 172 ? true : false
    },
    buy(){
      this.$emit('buy');
    }
  },
  destroyed(){
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>
<style lang="scss">

    .nav-header{
      border-top: 1px solid lightgray;
      display: flex;
      justify-content: center;
      padding: 10px 0;
      background-color: #ffffff;
      z-index: 15;
      &.is_fixed{
        position: fixed;
        top: 0;
        width: 100%;
        box-shadow: 0 5px 5px #cccccc;
      }
      .container{
        display: flex;
        justify-content: space-between;
        
        .pro-title{
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          font-weight: bold;
        }
        .pro-param{
          height: 50px;
          line-height: 50px;
          font-size: 15px;
          a{

            color: black;
          }
          span{
            color: black;
            margin: 0 15px;
          }
          .btn-large{
            background-color: #ff6600;
            border: none;
            border-radius: 3px;
            color: #ffffff;
            padding: 5px 25px;
            margin-left: 15px;
            // font-size: 15px;
            cursor: pointer;
          }
      }
      }
    }
</style>