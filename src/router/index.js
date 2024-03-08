import NProgress from 'nprogress'
import {createRouter, createWebHistory} from 'vue-router'
import { useAuth } from '@/stores'

import { 

  Index, Login, Register, ResetPassword, ChangePassword, RPApproval, RegistrationApprov, PermissionsList, PermissionAdd, PermissionEdit, RolesList, RoleAdd

} from '@/views'

const routes =[	

    { path: '/',                        name: 'dashboard',               component: Index,               meta: { title: 'Dashboard',                    requiresAuth : true } },
    { path: '/login',                   name: 'login',                   component: Login,               meta: { title: 'Login',                        guest : true } },
    { path: '/register',                name: 'register',                component: Register,            meta: { title: 'Registration Form',            guest : true } },
    { path: '/reset-password',          name: 'reset-password',          component: ResetPassword,       meta: { title: 'Reset Your Password',          guest : true } },
    { path: '/change-password',         name: 'change-password',         component: ChangePassword,      meta: { title: 'Change Your Password',         requiresAuth : true } },
    { path: '/reset-password-approval', name: 'reset-password-approval', component: RPApproval,          meta: { title: 'Reset Password Request List',  requiresAuth : true } },
    { path: '/registration-approve',    name: 'registration-approve',    component: RegistrationApprov,  meta: { title: 'Registration Request Approve', requiresAuth : true } },

    { path: '/permission-list',     name: 'permission-list', component: PermissionsList,  meta: { title: 'All Permission List',  requiresAuth : true } },
    { path: '/permission-add',      name: 'permission-add',  component: PermissionAdd,    meta: { title: 'Add A New Permission', requiresAuth : true } },
    { path: '/permission-edit/:id', name: 'permission-edit', component: PermissionEdit,   meta: { title: 'Edit Permission',      requiresAuth : true } },

    { path: '/roles-list', name: 'roles-list', component: RolesList,  meta: { title: 'All Roles List', requiresAuth : true } },
    { path: '/role-add',   name: 'role-add',   component: RoleAdd,    meta: { title: 'Add A New Role', requiresAuth : true } },

  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior:"smooth" }
  },
})

const DEFAULT_TITLE = "404";
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  NProgress.start();
  const auth = useAuth();
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(!auth.getAuthStatus){
      next({name:"login"});
    }else{
      next();
    }
  }else if(to.matched.some((record) => record.meta.guest)){
    if(auth.getAuthStatus){
      next({name:"dashboard"});
    }else{
      next();
    }
  }else{
    next();
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router;