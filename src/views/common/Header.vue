<script setup>
import { useThemeSetting, useAuth, useNotification } from '@/stores'
import { useRouter } from 'vue-router';

const router       = useRouter();
const theme        = useThemeSetting();
const auth         = useAuth();
const notification = useNotification();

const collops = () =>{
    theme.isCollops = !theme.isCollops;
}

const logout = async() =>{
    const res = await auth.logout();
    if(res.status === 200){
        router.push({name:'login'});
        notification.Success('Logout Success');
    }
}
</script>

<template>
    <div class="header" :class="{'is-collops' : theme.isCollops}">
        <div class="d-flex justify-content-between align-items-center">
            <div class="header-left d-flex align-items-center">
                <button @click="collops"><i class="fa-solid fa-bars"></i></button>
                <h4>Welcome to Service Key admin panel</h4>
            </div>
            <div class="header-right">
                <div class="profile-logo">
                    <img src="@/assets/images/logo/light-favicon.png" width="40" alt="">
                    <span class="user-name">Admin <i class="fa-solid fa-caret-down"></i></span>
                    <div class="profile-dropdown">
                        <ul>
                            <li>
                                <div class="user-identity">
                                    <img src="@/assets/images/logo/light-favicon.png" alt="">
                                    <h3>Admin</h3>
                                </div>
                            </li>
                            <li><a href=""><i class="fa-solid fa-user"></i> My Account</a></li>
                            <li><router-link :to="{name:'change-password'}"><i class="fa-solid fa-key"></i> Change Password</router-link></li>
                            <li v-if="auth.logoutLoading"><a><i class="fa-solid fa-spinner fa-spin"></i> Loading....</a></li>
                            <li v-else><a @click="logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.header{
    position: fixed;
    width: calc(100% - 260px);
    top: 0;
    right: 0;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 8px;
    transition: 0.5s;
    z-index: 1001;
}
.header-left .fa-bars{
    font-weight: 900;
    font-size: 22px;
    color: #1C5990;
    cursor: pointer;
}
.is-collops{
    width: calc(100% - 60px);
    transition: 0.5s;
}
.header-left h4{
    padding: 0;
    margin-left: 15px;
    font-weight: 700;
    color: #1C5990;
}
.header-left button{
    background-color: transparent;
    border: none;
}
.profile-logo{
    cursor: pointer;
    position: relative;
    z-index: 1000;
}
.profile-logo img{
    background-color: #1C5990;
    border-radius: 50%;
    border: 3px solid #cfcfcf;
}
.profile-logo .user-name{
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    display: inline-block;
    margin-right: 10px;
}
.profile-dropdown{
    position: absolute;
    height: 0;
    top: 45px;
    right: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1000;
}
.profile-logo:hover .profile-dropdown{
    height: 288px;
    transition: 0.5s;
}
.profile-dropdown ul{
    margin: 0;
    padding: 0;
}
.profile-dropdown ul li{
    list-style: none;
}
.user-identity{
    background-color: #1C5990;
    width: 250px;
    text-align: center;
    padding: 20px;
}
.user-identity img{
    max-width: 100px;
    border: 4px solid #e4e4e4;
}
.user-identity h3{
    font-weight: 700;
    color: #fff;
}
.profile-dropdown ul li a{
    display: inline-block;
    border-top: 1px solid #1C5990;
    width: 100%;
    padding: 5px 10px;
    text-decoration: none;
    font-weight: 600;
    color: #1C5990;
}
.profile-dropdown ul li a:hover{
    border-top: 1px solid #fff;
    background-color: #1C5990;
    color: #fff;
}
</style>