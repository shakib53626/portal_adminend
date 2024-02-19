<script setup>
import Layout from '@/views/common/Layout.vue'
import GuestLayout from '@/views/common/GuestLayout.vue'
import { useAuth } from '@/stores'
const auth = useAuth();
</script>

<template>
    <div>
        <Layout v-if="auth.isLoggedIn">
            <section class="content">
                <div class="container-fluid">
                    <RouterView/>
                </div>
            </section>
        </Layout>

        <GuestLayout v-else>
            <RouterView/>
        </GuestLayout>
    </div>
</template>
<style>

</style>
