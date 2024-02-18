import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/pages/auth/Login.vue'

const routes =[	
    { path: '/login', name:'login' , component: Login},
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })


export default router;