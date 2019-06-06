<template>
  <div id="app">
     <Header :seller='seller'/>
     <!-- <div class="header">
       i am header!
     </div> -->
     <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
     </div>
     <div class="content">
       i am content!
     </div>
  </div>
</template>

<script>
import Header from './components/header/header.vue';
const ERR_OK = 0;
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        // console.log(this.seller);
      }
    });
  },
  components: {
    Header
  }
};
</script>

<style lang="stylus">
  #app
    .tab
      display : flex
      width : 100%
      height : 40px
      line-height : 40px
      .tab-item
        flex:1
        text-align center
</style>
