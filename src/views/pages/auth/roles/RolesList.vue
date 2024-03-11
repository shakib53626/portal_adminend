<script setup>
import { usePermission } from '@/stores'
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const permission = usePermission();
const route      = useRoute();

const permissions = ref('');

const getPermissionsList = async() =>{
    const res = await permission.getPermissionsList();
    if(res?.success){
        permissions.value = res?.result;
    }
}

onMounted(() => {
    getPermissionsList();  
})
</script>

<template>
    <div class="reset-password-page-area">
        <div class="row">
            <div class="col-md-12">
                <div class="page-title">
                    <div class="d-flex justify-content-between align-items-center">
                        <h4>{{route.meta?.title}}</h4>
                        <div>
                            <router-link :to="{name: 'role-add'}" class="btn btn-add"><i class="fa-solid fa-plus"></i> Add</router-link>
                            <router-link :to="{name: 'dashboard'}" class="btn btn-add ms-2"><i class="fa-solid fa-arrow-left"></i> Back</router-link>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="content-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card text-center">
                                <table class="table table-striped table-hover permission-table">
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Display Name</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in permissions?.data" :key="index">
                                            <td>{{ index+1 }}</td>
                                            <td>{{ value.display_name }}</td>
                                            <td>{{ value.name }}</td>
                                            <td>{{ value.description }}</td>
                                            <td>
                                                <router-link :to="{name:'permission-edit', params : {id: value.id}}" class="btn btn-approve btn-sm"><i class="fa-solid fa-pen-to-square"></i></router-link>
                                                <a class="btn btn-remove btn-sm ms-2"><i class="fa-solid fa-trash"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content-body .card {
    width: 100%;
    padding-top: 10px;
}

.content-body .card img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 4px solid #1C5990;
    margin: auto;
}

.content-body .card h5 {
    font-weight: 700;
    color: #1C5990;
    margin-bottom: 0;
}

.reset-password-page-area {
    padding: 20px;
}

.page-title h4 {
    margin-bottom: 0;
    font-weight: 700;
    color: #1C5990;
}

.page-title hr {
    height: 3px;
    color: #1C5990;
}

.approval-action {
    padding-top: 10px;
}

.approval-action button {
    padding: 3px 10px;
    border: none;
    border-radius: 5px;
    color: #fff;
}

.btn-remove {
    background-color: #f14b4b;
    box-shadow: 0 7px 14px 0 rgba(241, 75, 75, 0.5);
    border: none;
    color: #fff;
}

.btn-remove:hover {
    box-shadow: none;
}

.btn-approve {
    background-color: #1eca7b;
    box-shadow: 0 7px 14px 0 rgba(30, 202, 123, 0.5);
    border: none;
    color: #fff;
}

.btn-approve:hover {
    box-shadow: none;
}
.btn-sm{
    font-size: 14px;
    padding: 3px 10px;
}
.permission-table td{
    color: #686868;
}
.permission-table th{
    color: #1C5990;
}
</style>