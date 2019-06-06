<template>
  <div>
    <mt-header fixed title="新闻列表">
    
    </mt-header>
    
     <ul >
        <li v-for="item in arr" >{{item}}</li>
      </ul>
      <router-link :to="{name:'Child1'}"> 子路由1 </router-link>
      <router-link :to="{name:'Child2'}"> 子路由2 </router-link>
      <!-- 子路由显示区域 -->
      <router-view />
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1,2]
    };
  },
  mounted() {
    
    // 根据获取到的id加载相应的数据，达到id不同则内容不同的效果
    let id = this.$route.params.id;
    this.$http({
      method: "get",
      url: "/list"
    }).then(res => {
        console.log(res.data[id])
      this.arr = res.data[id];
    });
  }
};
</script>
<style scoped>

ul{margin-top:50px}

</style>
