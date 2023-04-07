import { createRouter, createWebHashHistory } from 'vue-router'
import Upload from '../views/UploadView2.vue'

const routes = [
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
