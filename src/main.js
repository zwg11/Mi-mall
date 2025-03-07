import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const mock = false
if(mock){
  require('./mock/api')
}
// 根据前端跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
    return Promise.reject(res)
  }else{
    Message.warning(res.msg);
    return Promise.reject(res)
  }
},error=>{
  console.log(error);
  
})

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
