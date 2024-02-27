import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'

import './style.css'
import 'nprogress/nprogress.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(VueSweetalert2);

const pinia = createPinia();
pinia.use(createPersistedState());
app.use(pinia);

app.use(router);
app.mount('#app')
