import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import menuPage from '@/components/menuPage'
import aboutMe from '@/components/aboutMe'
import contact from '@/components/contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/menuPage',
      name: 'menuPage',
      component: menuPage
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
