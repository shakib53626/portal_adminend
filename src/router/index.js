import NProgress from 'nprogress'
import {createRouter, createWebHistory} from 'vue-router'
import { useAuth } from '@/stores'

import Login from '@/views/pages/auth/Login.vue'
import Register from '@/views/pages/auth/Registration.vue'
import Index from '@/views/pages/Index.vue'

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
      meta     : { title: 'Login', guest : true }
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