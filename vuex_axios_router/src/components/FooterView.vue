<template>
    <footer>
        <mt-tabbar>
            <!-- 推荐使用命名路由 -->
            <router-link :to="{name:'HomeView'}" tag="div">
                <mt-tab-item id="tab1">
                    首页
                </mt-tab-item>
            </router-link>

            <router-link to="/news" tag="div">
                <mt-tab-item id="tab2">
                    新闻
                </mt-tab-item>
            </router-link>
            <router-link to="/fav" tag="div">
                <mt-tab-item id="tab3">
                    收藏
                </mt-tab-item>
             </router-link>
            <router-link to="/my" tag="div">
                <mt-tab-item id="tab4">
                    我的
                </mt-tab-item>
            </router-link>

        </mt-tabbar>  
    </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-tabbar>div{
    flex:1;
}
</style>
