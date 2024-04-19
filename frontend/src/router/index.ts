import { createRouter, createWebHistory } from 'vue-router'
import AdminSignIn from '../components/AdminSignIn.vue'
import UserSignIn from '../components/user/UserSignIn.vue'
import LogInAs from '../components/LogInAs.vue'
import UnauthorizedAccess from '../components/UnauthorizedAccess.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminPriority from '../views/AdminPriority.vue'
import AdminStatus from '../views/AdminStatus.vue'
import AdminDepartment from '../views/AdminDepartment.vue'
import AdminAddUser from '../views/AdminAddUser.vue'
import AdminRole from '../views/AdminRole.vue'
import CreateTicket from '../views/user/UserCreateTicket.vue'
import { useLoginStore } from '@/stores/loginStore'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogInAs',
      component: LogInAs
    },
    {
      path: '/admin/signin',
      name: 'adminSignIn',
      component: AdminSignIn
    },
    {
      path: '/user/signin',
      name: 'userSignIn',
      component: UserSignIn
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: UnauthorizedAccess
    },
    {
      path: '/admin/dashboard',
      name: 'adminDashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/priority',
      name: 'adminPriority',
      component: AdminPriority,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/status',
      name: 'adminStatus',
      component: AdminStatus,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/roles',
      name: 'adminRole',
      component: AdminRole,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/department',
      name: 'adminDepartment',
      component: AdminDepartment,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/add/user',
      name: 'adminAddUser',
      component: AdminAddUser,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/create/ticket',
      name: 'createTicket',
      component: CreateTicket,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useLoginStore()

  if (to.meta.requiresAuth && !store.handleLogin) return '/'
})

export default router
