import SignIn from '../components/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminPriority from '../views/AdminPriority.vue'
import AdminStatus from '../views/AdminStatus.vue'
import AdminDepartment from '../views/AdminDepartment.vue'
import AdminAddUser from '../views/AdminAddUser.vue'
import AdminRole from '../views/AdminRole.vue'

import UserDashboard from '../views/user/UserDashboard.vue'
import CreateTicket from '../views/user/UserCreateTicket.vue'
import MyTicket from '../views/user/UserMyTickets.vue'

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
      path: '/admin/roles',
      name: 'adminRole',
      component: AdminRole
    },
    {
      path: '/admin/department',
      name: 'adminDepartment',
      component: AdminDepartment
    },
    {
      path: '/admin/add/user',
      name: 'adminAddUser',
      component: AdminAddUser
    },
    {
      path: '/user/dashboard',
      name: 'userDashboard',
      component: UserDashboard
    },
    {
      path: '/user/create/ticket',
      name: 'createTicket',
      component: CreateTicket
    },
    {
      path: '/user/tickets',
      name: 'myTickets',
      component: MyTicket
    }
  ]
})

export default router
