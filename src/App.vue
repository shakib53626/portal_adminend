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
                <router-view v-slot="{ Component }">
                    <transition name="fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </section>
        </Layout>

        <GuestLayout v-else>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </GuestLayout>
    </div>
</template>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>
