<template>
  <transition name="slide">

    <div class="modal" v-show="isShow">
      <div class="mask">
        
      </div>
      <div class="modal-dialog">

        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType=='1'" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType=='2'" @click="$emit('cancel')">{{cancelText}}</a>
          <div class="btn-group" v-if="btnType=='3'">

            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name:'modal',
  props:{
    // 弹框类型： 小small、中middle、大large、表单form
    modalType:{
      type:String,
      default:'form'
    },
    // 弹框标题
    title:String,
    // 按钮类型
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    isShow:Boolean
  },
  data(){
    return{
      
    }
  },
  methods:{
    close(){
      // const modal = document.querySelector('.modal');
      // modal.classList.toggle('slide-enter')
    },
    goCart(){
      this.$emit('goCart');
    }
  }
}
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
// @import "./../assets/scss/button.scss";
  .modal{
    @include position(fixed);
    z-index: 10;
    transition: top .8s;
    .mask{
      @include position(fixed);
      background-color: $colorI;
      opacity: 0.5;
    }
    &.slide-enter-active,&.slide-leave{
      top: 0;
    }
    &.slide-enter,&.slide-leave-active{
      top: -100%;
    }
    
    .modal-dialog{
      @include position(absolute,40%,50%,660px,auto);
      background-color: $colorG;
      transform: translate(-50%,-50%);
      .modal-header{
        height: 60px;
        background-color: $colorJ;
        padding: 0 25px;
        line-height: 60px;
        font-size: $fontI;
        .icon-close{
          @include positionImg(absolute,23px,25px,14px,14px,'/imgs/icon-close.png');
          transition: transform .5s;
          &:hover{
            transform:scale(1.5);
          }
        }
      }
      .modal-body{
      padding:42px 40px 54px;
      font-size:14px;
      }
      .modal-footer{
        height: 82px;
        line-height: 82px;
        text-align: center;
        background-color: $colorJ;
      }
    }
  }
</style>