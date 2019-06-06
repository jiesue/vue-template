import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {// 公共数据
  FooterTitle: ['首页', '新闻', '收藏', '我的'],
  count: 0
}
export default new Vuex.Store({
  state,
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {},
  mutations: {},
  actions: {}
})