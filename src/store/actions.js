export default{
  userLogin(context, username){
    context.commit('userLogin',username)
  },
  userLogout(context){
    context.commit('userLogout')
    context.commit('saveCartCount',0)
  },
  saveCartCount(context,count){
    context.commit('saveCartCount',count)
  }
}