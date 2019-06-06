// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// axios.defaults.headers.common['token'] = ""
// axios.defaults.headers.post["Content-type"] = ""
Vue.prototype.$axios = axios  
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //  对应index.html中的
  router,
  components: { App },
  template: '<App/>'
})
