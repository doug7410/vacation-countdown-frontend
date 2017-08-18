import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewUser from '@/components/NewUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/new/user',
      name: 'New User',
      component: NewUser
    }
  ]
})
