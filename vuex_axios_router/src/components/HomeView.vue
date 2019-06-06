<template>
    <div>
        <mt-header fixed title="首页"></mt-header>
        <div class="container">
          {{FooterTitle}}
        </div>
    </div>
</template>

<script>

import store from '../store/index.js'
import { mapState } from 'vuex'
export default {
  computed:{ 
        // ...mapState(['FooterTitle'])
     },
  store
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 40px;
}
</style>
