<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'app',
  components: {

  },
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    this.axios.get('/user/login').then(res=>{
      console.log(res);
      
    }).catch(function(err){
      console.log(err);
      
    })
  }
}
</script>
<style>
@import './assets/scss/reset.scss';


</style>
