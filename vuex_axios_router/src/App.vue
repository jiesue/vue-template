<template>
  <div id="app">
    <router-view></router-view>
    <FooterView /> 
  </div>
</template>

<script>
import FooterView from './components/FooterView'

export default {
  name: 'App',
  components:{
    FooterView
  }
}
</script>

<style>

</style>
