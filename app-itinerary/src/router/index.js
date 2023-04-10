import { createRouter, createWebHashHistory } from 'vue-router'
import Upload from '../views/UploadView2.vue'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
