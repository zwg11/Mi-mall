export default{
  userLogin(state, payload){
    state.isLogin = true;
    state.username = payload.username
  },
  userLogout(state){
    state.isLogin = false;
    state.username = ''
  }
}