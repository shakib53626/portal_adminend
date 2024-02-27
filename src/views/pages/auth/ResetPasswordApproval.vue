<script setup>
import { useAuth } from '@/stores'
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2'
const auth = useAuth();
const listData = ref();

const getResetPasswordList = async() =>{
    const res = await auth.getResetPasswordList();
    if(res?.success){
        listData.value = res.data;
    }
}

const submit = async(approveId, removeId) =>{
    if(approveId){
        const res = await auth.removeOrApprovePassword(approveId, removeId);
        if(res.success){
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: "Request Successfully Approved",
            });
            getResetPasswordList();
        }
    }else{
        Swal.fire({
            icon: 'question',
            title: 'Are You Sure Remove It ?',
            text: "Do you want to continue  ? ",
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            cancelButtonText:'Cancel',
        }).then((result)=>{
            (async () => {
                if (result.isConfirmed) {
                    const res = await auth.removeOrApprovePassword(approveId, removeId);
                    if (res.success) {
                        Swal.fire('Confirmed!', 'Request Remove Success', 'success');
                        getResetPasswordList();
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire('Cancelled', 'You have clicked cancel', 'error');
                }
            })();
        })
    }
}

onMounted(() => {
    getResetPasswordList();
})  

</script>

<template>
    <div class="reset-password-page-area">
        <div class="row">
            <div class="col-md-12">
                <div class="page-title">
                    <h4>Reset Password Request List.</h4>
                    <hr>
                </div>
                <div class="content-body">
                    <div class="row">
                        <div class="col-md-2" v-for="(data, index) in listData" :key="index">
                            <div class="card text-center">
                                <img :src="data.image" alt="" v-if="data.image">
                                <img src="@/assets/images/logo/light-favicon.png" alt="" v-else>
                                <h5>{{data.first_name}} {{ data.last_name }}</h5>
                                <p>{{data.designation}}</p>
                                <div class="approval-action d-flex justify-content-between">
                                    <button class="btn-remove" @click="submit('' , data.id)">Remove</button>
                                    <button class="btn-approve" @click="submit(data.id, '')">Approve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .content-body .card{
        width: 100%;
        padding-top: 10px;
    }
    .content-body .card img{
        height: 80px;
        width: 80px;
        border-radius: 100%;
        border: 4px solid #1C5990;
        margin: auto;
    }
    .content-body .card h5{
        font-weight: 700;
        color: #1C5990;
        margin-bottom: 0;
    }
    .reset-password-page-area{
        padding: 20px ;
    }
    .page-title h4{
        margin-bottom: 0;
        font-weight: 700;
        color: #1C5990;
    }
    .page-title hr{
        height: 3px;
        color: #1C5990;
    }
    .approval-action{
        border-top: 1px solid #1C5990;
        padding-top: 10px;
    }
    .approval-action button{
        padding: 3px 10px;
        border: none;
        border-radius: 5px;
        color: #fff;
    }
    .btn-remove{
        background-color: #f14b4b;
        box-shadow: 0 7px 14px 0 rgba(241,75,75,0.5);
    }
    .btn-remove:hover{
        box-shadow: none;
    }
    .btn-approve{
        background-color: #1eca7b;
        box-shadow: 0 7px 14px 0 rgba(30,202,123,0.5);
    }
    .btn-approve:hover{
        box-shadow: none;
    }
</style>