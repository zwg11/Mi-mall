import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
  isLogin: false,
  username:'',
  cartCount:0 //购物车商品数量
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
