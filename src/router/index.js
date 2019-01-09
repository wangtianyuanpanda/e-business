import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/login/login'
import Main from '../components/Main'
import HomePage from '../components/homepage/homePage'
import PersonPage from '../components/personalCenter/person'
import ItemPage from '../components/homepage/itemDetail'
import OrderPage from '../components/order/myOrder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/home',
          component: HomePage
        },
        {
          path: '/person',
          component: PersonPage
        },
        {
          path: '/item',
          component: ItemPage
        },
        {
          path: '/order',
          component: OrderPage
        }
      ]
    }
  ]
})
