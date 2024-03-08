<script setup>
import { useThemeSetting } from '@/stores'
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const theme = useThemeSetting();
const route = useRoute();
const isOpenSubMenu = ref('');
const openToggle = (menuName) =>{
    if(isOpenSubMenu.value == menuName){
        isOpenSubMenu.value = '';
    }else{
        isOpenSubMenu.value = menuName;
    }
}
</script>

<template>
    <div class="sidebar" :class="{'is-collops-sidebar' : theme.isCollops}">
        <router-link :to="{name:'dashboard'}">
            <div class="sidebar-logo" v-if="theme.isCollops"><img src="@/assets/images/logo/light-favicon.png" width="32" alt=""></div>
            <div class="sidebar-logo" v-else><img src="@/assets/images/logo/logo.png" alt=""></div>
        </router-link>
        <div class="sidebar-menu mt-4">
            <ul>
                <li>
                    <router-link :to="{name:'dashboard'}" :class="{ 'active': route.name == 'dashboard' }">
                        <i class="fa-solid fa-chart-bar nav-icon"></i> 
                        <span class="nav-title" v-if="!theme.isCollops">Dashboard</span>
                    </router-link>
                </li>
                <li class="sub-menu-dropdown">
                    <div class="dropdown-title mb-3" :class="{ 'dropdown-open': isOpenSubMenu == 'acl' || 
                            route.name == 'reset-password-approval' || 
                            route.name == 'registration-approve' ||
                            route.name == 'permission-list' ||
                            route.name == 'permission-add' ||
                            route.name == 'permission-edit' ||
                            route.name == 'roles-list'
                    }" @click="openToggle('acl')">
                        <i class="fa-solid fa-people-roof nav-icon"></i> 
                        <span class="nav-title" v-if="!theme.isCollops">ACL Management</span>
                        <i class="fa-solid fa-angle-right toggle-icon"></i>
                    </div>

                    <ul v-show="isOpenSubMenu=='acl' || 
                            route.name == 'reset-password-approval' || 
                            route.name == 'registration-approve' ||
                            route.name == 'permission-list' ||
                            route.name == 'permission-add' || 
                            route.name == 'permission-edit' ||
                            route.name == 'roles-list'
                    ">
                        <li>
                            <router-link :to="{ name: 'dashboard' }">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title" v-if="!theme.isCollops">Users</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'permission-list' }" :class="{ 'active': route.name == 'permission-list' || route.name == 'permission-add' || route.name == 'permission-edit'}">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title" v-if="!theme.isCollops">User Permission</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'roles-list' }" :class="{'active': route.name == 'roles-list'}">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title" v-if="!theme.isCollops">User Roles</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'registration-approve' }" :class="{ 'active': route.name == 'registration-approve' }">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title" v-if="!theme.isCollops">Approved Request</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'reset-password-approval'}" :class="{'active' : route.name=='reset-password-approval'}">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title" v-if="!theme.isCollops">RP Confirmation</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
a{
    text-decoration: none;
}
.sidebar{
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #1C5990;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 8px;
    transition: 0.5s;
}
.is-collops-sidebar{
    width: 60px;
    transition: 0.5s;
}
.sidebar-logo{
    padding: 10px 15px;
}
.sidebar-logo img{
    max-width: 100%;
}
.sidebar-menu ul{
    margin: 0;
    padding: 10px 20px;
}
.sidebar-menu ul li{
    list-style: none;
    margin-bottom: 5px;
    transition: 0.5s;
}
.sidebar-menu ul li a
{
    padding: 5px 12px;
    width: 100%;
    display: inline-block;
    transition: 0.5s;
}
.sidebar-menu ul li .dropdown-title
{
    padding: 5px 12px;
    width: 100%;
    position: relative;
    cursor: pointer;
}
.toggle-icon{
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    transition: 0.5s;
}
.sidebar-menu ul li a:hover,
.sidebar-menu ul li a.active{
    background-color: #fff;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 7px 14px 0 rgba(255, 255, 255, 0.425);
    transition: 0.5s;
}
.sidebar-menu ul li a:hover .nav-icon,
.sidebar-menu ul li a:hover .toggle-icon,
.sidebar-menu ul li a.active .nav-icon{
    color: #1C5990;
    transition: 0.5s;
}
.sidebar-menu ul li a:hover .nav-title,
.sidebar-menu ul li a.active .nav-title{
    color: #1C5990;
    transition: 0.5s;
}
.nav-icon{
    color: #fff;
    font-size: 20px;
}
.nav-title{
    color: #fff;
    font-size: 18px;
    padding-left: 10px;
}
.dropdown-open,
.dropdown-title:hover   {
    background-color: #104a7e;
    border-radius: 8px;
    box-shadow: 0 7px 14px 0 rgba(1, 21, 65, 0.425);
}
.sub-menu-dropdown ul{
    margin: 0;
    padding: 0;
    margin-top: 5px;
}
.sub-menu-dropdown .nav-icon, 
.sub-menu-dropdown .nav-title{
    font-size: 16px;
}
.dropdown-open .toggle-icon {
  transform: rotate(90deg);
  transition: 0.5s;
}
</style>