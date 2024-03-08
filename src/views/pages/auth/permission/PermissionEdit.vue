<script setup>
import { onMounted, ref } from 'vue';
import { usePermission, useNotification } from '@/stores'
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from 'pinia';

const router       = useRouter();
const route        = useRoute();
const permission   = usePermission();
const notification = useNotification();

const displayName = ref('');
const description = ref('');
const errors      = ref('');

const getSinglePermissionData = async() =>{
    const res = await permission.getSinglePermissionData(route.params.id);
    if(res?.success){
        displayName.value = res.result?.display_name;
        description.value = res.result?.description;
    }
}

const submit = async() =>{
    const res = await permission.permissionUpdate(route.params.id, {
        display_name : displayName.value,
        description  : description.value
    });
    if(res?.success){
        router.push({name:'permission-list'});
        notification.Success("Permission Updated Successfully");
    }else{
        errors.value = res?.errors;
    }
}

onMounted(() => {
    getSinglePermissionData();  
})
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
                                    class="fa-solid fa-arrow-left"></i> Back
                            </router-link>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <div class="col-md-12 add-permission-area">
                <div class="card p-0">
                    <div class="row p-4">
                        <div class="col-md-12">
                            <div class="form-group mb-4">
                                <label for="display_name">Display Name</label>
                                <input type="text" id="display_name" placeholder="Display Name" class="form-control" v-model="displayName">
                                <span class="errors">
                                    <span class="text-danger" v-for="(error, index) in errors?.display_name" :key="index">{{ error }}</span>
                                </span>
                            </div>
                            <div class="form-group mb-4">
                                <label for="description">Description</label>
                                <textarea id="description" rows="3" placeholder="Write Description" class="form-control" v-model="description"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-add" @click="submit" v-if="permission.loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading....</button>
                                <button class="btn btn-add" @click="submit" v-else>Update Permission </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.add-permission-area{
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.add-permission-area .card{
    width: 500px;
}
.form-group label{
    font-weight: 700;
    margin-bottom: 5px;
}

</style>