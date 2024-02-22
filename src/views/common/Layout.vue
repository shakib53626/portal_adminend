<script setup>
import { useThemeSetting } from '@/stores'
import Header from '@/views/common/Header.vue'
import Sidebar from '@/views/common/Sidebar.vue'

const theme = useThemeSetting();
</script>

<template>
    <div>
        
        <Header/>
        <Sidebar/>

        <div class="content-wrapper" :class="{'is-collops' : theme.isCollops}">
            <slot/>
        </div>

    </div>
</template>

<style scoped>
.content-wrapper{
    margin-left: 270px;
    margin-top: 60px;
    transition: 0.5s;
}
.is-collops{
    margin-left: 70px;
    transition: 0.5s;
}
</style>