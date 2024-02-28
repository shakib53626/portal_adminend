<script setup>
import { useRoute } from "vue-router";


const route = useRoute();

</script>

<template>
    <div class="body-area">
        <div class="row">
            <div class="col-md-12">
                <div class="page-title">
                    <div class="d-flex justify-content-between align-items-center">
                        <h4>{{ route.meta?.title }}</h4>
                        <div>
                            <router-link :to="{ name: 'permission-list' }" class="btn btn-add ms-2"><i
                                    class="fa-solid fa-arrow-left"></i> Back</router-link>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>