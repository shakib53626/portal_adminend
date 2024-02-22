<script setup>
import { useThemeSetting } from '@/stores'
const theme = useThemeSetting();
</script>

<template>
    <div class="sidebar" :class="{'is-collops-sidebar' : theme.isCollops}">
        <div class="sidebar-logo" v-if="theme.isCollops"><img src="@/assets/images/logo/light-favicon.png" width="32" alt=""></div>
        <div class="sidebar-logo" v-else><img src="@/assets/images/logo/logo.png" alt=""></div>
    </div>
</template>


<style scoped>
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
</style>