<template>
  <div id="demo">
    <button v-on:click="click">
      Toggle
    </button>
    <transition name="jie" v-on:before-enter='beforeEnter'
    @before-leave='beforeLeave'
     v-on:enter="enter"
    v-on:leave="leave"
    >
      <p v-if="show"><img src="../assets/logo.png" alt=""></p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: 1
    }
  },
  methods:{
    click(){
      this.show = !this.show;
      this.$root.jie='jie';
      console.log(this.$root.jie)



    },
    beforeEnter(){
      alert('beforeEneter')
    },
    beforeLeave(){
      alert('beforeLeave')
    },
    enter(el,done){
     
      
    },
    leave(){
      alert('leave');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jie-enter-active, .jie-leave-active {
  transition: all 2s;
}
.jie-enter, .jie-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: rotateX(180deg)
}
</style>
