<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
  // fetch api
  // fetch("/apis/rank/list?json=true",{
  //   method: "post",
  //   body: "hello"
  //   })
  //   .then(result => {
  //       return result.json();// Body  mixin 的 json() 方法使用一个 Response 流，并将其读取完成。它返回一个 promise ，解析结果是将文本体解析为 JSON。
  //     })
  //     .then(data => {
  //       console.log(data)
  //     })
  // axios 使用前需要安装
  this.$axios.post("/apis/rank/list?json=true",{"param":"param" })
    .then(data => {
      console.log(data);
    })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
