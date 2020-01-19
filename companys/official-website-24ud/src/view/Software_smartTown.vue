<template>
    <div id="smartTown">
        <div v-if= "detail">
            <h4>{{detail.title}}</h4>
            <p>{{detail.intro}}</p>
        </div>
        <div v-if= "!detail">
            <p>暂无信息</p>
        </div>
       
    </div>
</template>
<script>
import API from '../api/index'
export default {
    name: 'smartTown',
    data(){
        return{
            id: '',
            detail:{}
        }
    },
    mounted() {
        this.init()
    },
    watch:{
        $route(){
            console.log('router', this.$route.params.id)
            this.id = this.$route.params.id
            this.getProduct();
        },
    },
    methods:{
      init() {
          console.log(this.$route)
         this.id = this.$route.params.id
         this.getProduct();
    },
    getProduct() {
      let params = {
        state: 1,
        id: this.id
      };
      API.product.getProductById(params).then(res => {
        if (res.code == 200) {
          
          this.detail = res.data
        }
      });
    }
  }
   
}
</script>
<style scoped>

</style>

