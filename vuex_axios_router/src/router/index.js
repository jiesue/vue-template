import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import MyView from '@/components/MyView'
import FavView from '@/components/FavView'
import NewsView from '@/components/NewsView'
import ListView from '@/components/ListView'
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/news',
      name: 'NewsView',
      component: NewsView
    },
    {
      path: '/fav',
      name: 'FavView',
      component: FavView
    }, 
    {
      path: '/my',
      name: 'MyView',
      component: MyView
    },
    {
      path: '/list/:id',
      name: 'ListView',
      component: ListView,
      // 子路由设置
      children:[
        {path:'/child1',name:'Child1',component:Child1},
        {path:'/child2',name:'Child2',component:Child2}
      ]
    }
  ]
})
