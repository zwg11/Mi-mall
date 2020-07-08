export default{
  userLogin(state, username){
    state.isLogin = true;
    state.username = username
  },
  userLogout(state){
    state.isLogin = false;
    state.username = ''
  },
  saveCartCount(state,count){
    state.cartCount = count
  }
}