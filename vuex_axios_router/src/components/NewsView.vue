<template>
    <div>
        <mt-header fixed title="新闻"></mt-header>
        <div class="container">
            <h1>
                <router-link to="/list/yule" > 
                娱乐新闻</router-link>
            </h1>
            <h1>                
                <router-link to="/list/shehui" > 
                 社会新闻
                 </router-link>

            </h1>
        </div>
    </div>

</template>

<script>
export default {
//   name: 'HelloWorld',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin-top: 50px;
}
</style>
