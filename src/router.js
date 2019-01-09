import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './components/editorIndex'
import editor from './components/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: Welcome
        },
        {
          path: 'editor/:id',
          component: editor
        }
      ]
    }
  ]
})
