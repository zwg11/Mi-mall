<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'service-bar'
  }
</script>
<style lang="scss" scoped>
  @import './../assets/scss/mixin.scss';
  .service{
    margin: 0 auto;
    padding:33px 0;
    color:#666666;
    font-size:16px;
    li{
      box-sizing: border-box;
      display:inline-block;
      width:25%;
      text-align:center;
      border-right:1px solid #E5E5E5;
      &:last-child{
        border-right: none;
      }
      span{
        display:inline-block;
        width:20px;
        height:20px;
        vertical-align: middle;
        margin-right:8px;
      }
      .icon-setting{
        @include bgImg('/imgs/icon-setting.png',20px,20px);
      }
      .icon-7day{
        @include bgImg('/imgs/icon-7day.png',20px,20px);
      }
      .icon-15day{
        @include bgImg('/imgs/icon-15day.png',20px,20px);
      }
      .icon-post{
        @include bgImg('/imgs/icon-post.png',20px,20px);
      }
    }

  }
</style>