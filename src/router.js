import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue'
import Index from './views/Index.vue'
import Board from './components/board/Board.vue'
import Profil from './components/profil/Profil.vue'
import Search from './components/search/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:"splash"
    },
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    },
    {
      path: '/index',
      name: 'index',
      redirect:'/index/board',
      component:Index,
      children:[
        {
          path:"board",
          name:"board",
          component:Board
        },
        {
          path:"search",
          name:"search",
          component:Search
        },
        {
          path:"profil",
          name:"profil",
          component:Profil
        }
      ]
    }
  ]
})
