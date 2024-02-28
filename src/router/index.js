import NProgress from 'nprogress'
import {createRouter, createWebHistory} from 'vue-router'
import { useAuth } from '@/stores'

import Index from '@/views/pages/Index.vue'
import Login from '@/views/pages/auth/Login.vue'
import Register from '@/views/pages/auth/Registration.vue'
import ResetPassword from '@/views/pages/auth/ResetPassword.vue'
import ChangePassword from '@/views/pages/auth/ChangePassword.vue'
import RPApproval from '@/views/pages/auth/ResetPasswordApproval.vue'
import RegistrationApprov from '@/views/pages/auth/RegistrationApprov.vue'

import PermissionsList from '@/views/pages/auth/permission/PermissionsList.vue'
import PermissionAdd from '@/views/pages/auth/permission/PermissionAdd.vue' 

const routes =[	
    { 
      path     : '/',
      name     : 'dashboard',
      component: Index,
      meta     : { title: 'Dashboard', requiresAuth : true }
    },
    { 
      path: '/login', 
      name:'login', 
      component: Login,
      meta     : { title: 'Login', guest : true }
    },
    { 
      path: '/register', 
      name:'register', 
      component: Register,
      meta     : { title: 'Registration Form', guest : true }
    },
    { 
      path: '/reset-password', 
      name:'reset-password', 
      component: ResetPassword,
      meta     : { title: 'Reset Your Password', guest : true }
    },
    { 
      path: '/change-password', 
      name: 'change-password', 
      component: ChangePassword,
      meta     : { title: 'Change Your Password', requiresAuth : true }
    },
    { 
      path: '/reset-password-approval', 
      name: 'reset-password-approval', 
      component: RPApproval,
      meta     : { title: 'Reset Password Request List', requiresAuth : true }
    },
    { 
      path: '/registration-approve', 
      name: 'registration-approve', 
      component: RegistrationApprov,
      meta     : { title: 'Registration Request Approve', requiresAuth : true }
    },
    { 
      path: '/permission-list', 
      name: 'permission-list', 
      component: PermissionsList,
      meta     : { title: 'All Permission List', requiresAuth : true }
    },
    { 
      path: '/permission-add', 
      name: 'permission-add', 
      component: PermissionAdd,
      meta     : { title: 'Add A New Permission', requiresAuth : true }
    },
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