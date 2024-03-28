import SignIn from '../components/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminPriority from '../components/AdminPriority.vue'
import AdminStatus from '../components/AdminStatus.vue'
import AdminDepartment from '../components/AdminDepartments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: AdminDashboard
    },
    {
      path: '/admin/priority',
      name: 'adminPriority',
      component: AdminPriority
    },
    {
      path: '/admin/status',
      name: 'adminStatus',
      component: AdminStatus
    },
    {
      path: '/admin/department',
      name: 'adminDepartment',
      component: AdminDepartment
    }
  ]
})

export default router
