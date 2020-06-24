<template>
  <div class="detail">
    {{id}}
    {{product}}
  </div>
</template>
<script>
export default {
  name: 'detail',
  data(){
    return{

      product:{},
      id: 0
    }
  },
  mounted(){
    this.id = this.$route.params.id
    this.axios.get(`/products/${this.id}`).then((res)=>{
      this.product = res;
    })
  },
  methods:{

  }
}
</script>

<style lang="scss">

</style>