<template>
   <div>
        <mt-header fixed title="收藏"></mt-header>
       <Vmodel v-model="text" />
       <input type="text"  v-model="text" >
    </div>
</template>

<script>
import Vmodel from './Vmodel';
export default {
  components:{Vmodel},
  data () {
    return {
      text: '12'
    }
  },

  mounted(){
        console.log(this.text)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
