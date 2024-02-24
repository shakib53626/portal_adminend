<script setup>
import { useThemeSetting } from '@/stores'
import { useRoute } from 'vue-router';
const theme = useThemeSetting();

const route = useRoute();
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
                        <span class="nav-title">Dashboard</span>
                    </router-link>
                </li>
                <li class="sub-menu-dropdown">
                    <div class="dropdown-title dropdown-open">
                        <i class="fa-solid fa-people-roof nav-icon"></i> 
                        <span class="nav-title">ACL Management</span>
                        <i class="fa-solid fa-angle-right toggle-icon"></i>
                    </div>
                    <ul>
                        <li>
                            <router-link :to="{ name: 'dashboard' }">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title">Users</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'dashboard' }">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title">User Roles</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'dashboard' }">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title">Approved Request</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'dashboard' }">
                                <i class="fa-solid fa-circle-half-stroke nav-icon"></i>
                                <span class="nav-title">CP Confirmation</span>
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
}
.toggle-icon{
    position: absolute;
    right: 10px;
    top: 13px;
    color: #fff;
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
.dropdown-open{
    background-color: #104a7e;
    border-radius: 8px;
}
.dropdown-title:hover{
    background-color: #104a7e;
    border-radius: 8px;
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
</style>