import { createRouter, createWebHashHistory } from 'vue-router'
import Upload from '../views/UploadView2.vue'
import Table from '../views/TableView.vue'

const routes = [
  {
    path: '/upload',
    name: 'upload',
    component: Upload
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
