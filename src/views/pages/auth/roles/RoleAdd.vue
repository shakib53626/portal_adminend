<script setup>
import { onMounted, ref } from 'vue';
import { usePermission, useNotification } from '@/stores'
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from 'pinia';

const router       = useRouter();
const route        = useRoute();
const permission   = usePermission();
const notification = useNotification();

const displayName   = ref('');
const description   = ref('');
const errors        = ref('');
const permissions   = ref('');
const permissionIds = ref([]);
const checked       = ref([]);

const getPermissionsList = async() =>{
    const res = await permission.getGroupPermissionsList();
    if(res?.success){
        permissions.value = res?.result;
    }
}

const submit = async() =>{
    const res = await permission.permissionCreate({
        display_name : displayName.value,
        description  : description.value
    });
    if(res?.success){
        router.push({name:'permission-list'});
        notification.Success("Permission Created Successfully");
    }else{
        errors.value = res?.errors;
    }
}

const filterPermissionsByGroup = (permission) => {
    const groupName = permission[0]?.name || '';
    const parts = groupName.split('-');
    return parts.length > 0 ? parts[0] : '';
};

const checkedPermission = (index) =>{
    const selectedPermissions = permissions.value[index] || [];
    // Toggle checked state and update permission_ids
    let isDataHere = false;
    selectedPermissions.forEach(data => {
        const permissionId = data.id;
        const permissionIndex = permissionIds.value.indexOf(permissionId);
        if (permissionIndex !== -1) {
            isDataHere = true;
        }
    });
    if(isDataHere){
        selectedPermissions.forEach(data => {
            const permissionId = data.id;
            const permissionIndex = permissionIds.value.indexOf(permissionId);
            if (permissionIndex !== -1) {
                permissionIds.value.splice(permissionIndex, 1);
            }
        });
    }else{
        selectedPermissions.forEach(data => {
            const permissionId = data.id;
            permissionIds.value.push(permissionId);
        });
    }
}

const isChecked = (index, id) =>{
    
}

onMounted(() => {
    getPermissionsList();  
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
            <div class="col-md-12 add-role-area">
                <div class="card p-0">
                    <div class="row p-4">
                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="display_name">Display Name</label>
                                <input type="text" id="display_name" placeholder="Display Name" class="form-control" v-model="displayName">
                                <span class="errors">
                                    <span class="text-danger" v-for="(error, index) in errors?.display_name" :key="index">{{ error }}</span>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-4">
                                <label for="description">Description</label>
                                <textarea id="description" rows="1" placeholder="Write Description" class="form-control" v-model="description"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="permission">Permissions {{ permissionIds }} {{ checked }}</label>
                                <div class="row">
                                    <div class="col-md-4 p-4" v-for="(permission, index) in permissions" :key="index">
                                        <div class="row permission-box p-2">
                                            <div class="col-md-6 d-flex align-items-center">
                                                <input type="checkbox" :id="filterPermissionsByGroup(permission)" @click="checkedPermission(index)" v-model="checked[index]" class="me-2"> <label :for="filterPermissionsByGroup(permission)">{{ filterPermissionsByGroup(permission) }}</label>
                                            </div>
                                            <div class="col-md-6">
                                                <div v-for="(data, index2) in permission" :key="index2">
                                                    <div class="">
                                                        <input type="checkbox" :id="data.name" :value="data.id" v-model="permissionIds" @click="isChecked(index, data.id)"> <label :for="data.name">{{ data.name }}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="d-flex justify-content-end">
                                <button class="btn btn-add" @click="submit" v-if="permission.loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading....</button>
                                <button class="btn btn-add" @click="submit" v-else><i class="fa-solid fa-plus"></i> Add Permission </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.add-role-area{
    width: 100%;
}
.add-role-area .card{
    width: 100%;
}
.form-group label{
    font-weight: 700;
    margin-bottom: 5px;
}
.permission-box{
    border: 1px solid #e6e6e6;
    border-radius: 10px;
}

</style>