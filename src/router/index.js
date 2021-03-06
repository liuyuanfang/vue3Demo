import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import WorkPlat from '../components/WorkPlat.vue';
import UserManage from '../components/UserManage.vue';
import UserManageDetail from "../components/UserManageDetail.vue"

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: 'workPlat',
      component: WorkPlat,
    }, {
      path: 'userManage',
      component: UserManage,
    }, {
      path: 'userManageDetail',
      component: UserManageDetail,
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
