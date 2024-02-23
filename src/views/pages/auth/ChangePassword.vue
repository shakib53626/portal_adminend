<script setup>
import { useAuth, useNotification } from "@/stores";
import { ref } from "vue";
import { useRouter } from "vue-router";

const auth = useAuth();
const router = useRouter();
const notification = useNotification();

const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const errors = ref();

const submit = async () => {
    const res = await auth.changePassword({
        old_password         : oldPassword.value,
        new_password             : newPassword.value,
        new_password_confirmation: confirmPassword.value
    });
    if (res.success) {
        const response = await auth.logout();
        if (response.status === 200) {
            router.push({ name: 'login' });
            notification.Success('Password Changed Successfully');
        }
    } else {
        errors.value = res.errors ? res.errors : res;
    }
}
</script>

<template>
    <div class="change-password-box">
        <div class="card">
            <h4>Change Password</h4>
            <div class="form-group mb-2">
                <input type="password" class="form-control" placeholder="Old Password" v-model="oldPassword">
                <span class="text-danger" v-if="errors">
                    <span v-for="(error, index) in errors.old_password" :key="index">{{ error }}</span>
                </span>
                <span class="text-danger" v-if="errors">
                    <span>{{ errors?.message }}</span>
                </span>
            </div>
            <div class="form-group mb-2">
                <input type="password" class="form-control" placeholder="New Password" v-model="newPassword">
                <span class="text-danger" v-if="errors">
                    <span v-for="(error, index) in errors.new_password" :key="index">{{ error }}</span>
                </span>
            </div>
            <div class="form-group mb-4">
                <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmPassword">
            </div>
            <div>
                <button class="btn change-password" v-if="auth.loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading....</button>
                <button class="btn change-password" @click="submit" v-else>Change Password</button>
            </div>
        </div>
    </div>
</template>
<style Scoped>
.change-password-box {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 400px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: none;
    border-top: 5px solid #1C5990;
}

.card h4 {
    font-weight: 700;
    color: #1C5990;
    margin-bottom: 20px;
    text-align: center;
}

.btn.change-password {
    width: 100%;
    background-color: #1C5990;
    color: #fff;
    border: none;
}

.btn.change-password:hover {
    background-color: #1670be;
}</style>