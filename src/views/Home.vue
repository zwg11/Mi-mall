<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{info1}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import jsonp from 'jsonp'
import axios from 'axios'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      info1:'message'
    }
  },
  mounted(){
    let url = 'https://cm.bilibili.com/cm/api/fees/pc'
    axios.get(url).then((res)=>{
      console.log(res);
      
    })
    jsonp(url,()=>{

    })
  }
}
</script>
