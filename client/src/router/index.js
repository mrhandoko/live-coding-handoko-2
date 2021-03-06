import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Article from '@/components/Article'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/article',
      name: 'Article',
      component: Article
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
