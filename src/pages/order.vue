<template>
  <div class="order">
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
  name:'order',
  components:{
    ServiceBar,
    NavFooter
  },
  data(){
    return{
      title:'',
      tip:''
    }
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" scoped>
  .order{
    position: relative;
    min-height: 100vh;
    padding-bottom: 330px;
    box-sizing: border-box;
    .footer,.service{
      position: absolute;
    }
    .footer{
      bottom: 0%;
    }
    .service{
      bottom: 240px;
    }
  }

</style>