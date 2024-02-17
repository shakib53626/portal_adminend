import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/'

const routes =[	
    { path: '/login', name:'login' , component: Login},
  ];


const router = createRouter({
    history: createWebHistory(),
    routes,
  })


export default router;