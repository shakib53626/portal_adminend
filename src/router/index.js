import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/pages/auth/Login.vue'
import Index from '@/views/pages/Index.vue'

const routes =[	
    { path: '/', name:'dashboard' , component: Index},
    { path: '/login', name:'login' , component: Login},
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })


export default router;