import { createRouter, createWebHashHistory } from 'vue-router'
import Upload from '../views/UploadView.vue'

const routes = [
  {
    path: '/',
    name: 'upload',
    component: Upload
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TableView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
