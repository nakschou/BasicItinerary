import { createRouter, createWebHashHistory } from 'vue-router'
import Upload from '../views/UploadView.vue'
import Table from '../views/TableView.vue'

const routes = [
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/about',
    name: 'about',
    component: Table
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
