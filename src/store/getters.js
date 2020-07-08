export default{
  getUsername(state){
    return state.username;
  },
  getCartCount(state){
    return state.cartCount
  },
  getLoginState(state){
    return state.isLogin
  }
}