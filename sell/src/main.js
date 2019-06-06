// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //  事实证明，rooter是在这里与App绑定到的
  components: { App },
  template: '<App/>'// 显示的关键
});
