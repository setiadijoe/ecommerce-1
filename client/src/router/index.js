import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginForm from '@/components/LoginForm'
import AddItems from '@/components/AddItems'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signin',
      component: LoginForm
    },
    {
      path: '/additem',
      component: AddItems
    },
    {
      path: '/checkout',
      component: Checkout
    }
  ]
})
