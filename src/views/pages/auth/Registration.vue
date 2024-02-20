<script setup>
import { useAuth, useNotification } from '@/stores'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router       = useRouter()
const auth         = useAuth();
const notification = useNotification();
const { loading }  = storeToRefs(auth);

const firstName            = ref('');
const lastName             = ref('');
const email                = ref('');
const phoneNumber          = ref('');
const nidNumber            = ref('');
const permanentAddress     = ref('');
const presentAddress       = ref('');
const gender               = ref('');
const password             = ref('');
const passwordConfirmation = ref('');
const errors               = ref('');

const submit = async() =>{
  const res = await auth.register({
    first_name           : firstName.value,
    last_name            : lastName.value,
    email                : email.value,
    phone                : phoneNumber.value,
    national_id_number   : nidNumber.value,
    permanent_address    : permanentAddress.value,
    present_address      : presentAddress.value,
    gender               : gender.value,
    password             : password.value,
    password_confirmation: passwordConfirmation.value,
  })
  if(res.status){

  }else{
    errors.value = res?.errors;
  }
  // if(res?.token){
  //   router.push({name: 'dashboard'});
  //   notification.Success("Login Successfully");
  // }
}

</script>

<template>
    <div>
        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div class="signin" style="padding-top:15px;"> 

    <div class="content"> 

     <div class="registration-title pb-2">
        <h2 class="register-logo"><img src="@/assets/images/logo/servicekey-logo.png" alt=""></h2>
        <router-link :to="{name : 'login'}" class="login-btn">Login</router-link> 
     </div>
     <div class="text-center text-light"><h4>Registration Form</h4></div>

     <div class="form"> 

      <div class="row">
        <div class="col-md-6">
          <div class="inputBox p-2">
           <input type="text" required v-model="firstName"> <i style="margin-left:10px;">First Name</i> 
          </div>
          <div v-if="errors?.first_name">
            <p v-for="(error, index) in errors?.first_name" :key="index" class="text-danger">{{ error }}</p>
          </div> 
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="text" required v-model="lastName"> <i style="margin-left:10px;">Last Name</i> 
          </div> 
          <div v-if="errors?.last_name">
            <p v-for="(error, index) in errors?.last_name" :key="index" class="text-danger">{{ error }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="email" required v-model="email"> <i style="margin-left:10px;">Email</i> 
          </div> 
          <div v-if="errors?.email">
            <p v-for="(error, index) in errors?.email" :key="index" class="text-danger">{{ error }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="text" required v-model="phoneNumber"> <i style="margin-left:10px;">Phone Number</i> 
          </div> 
          <div v-if="errors?.phone">
            <p v-for="(error, index) in errors?.phone" :key="index" class="text-danger">{{ error }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="text" required v-model="nidNumber"> <i style="margin-left:10px;">National Id Number</i> 
          </div>
          <div v-if="errors?.national_id_number">
            <p v-for="(error, index) in errors?.national_id_number" :key="index" class="text-danger">{{ error }}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="text" required v-model="permanentAddress"> <i style="margin-left:10px;">Permanent Address</i> 
          </div>
          <div v-if="errors?.permanent_address">
            <p v-for="(error, index) in errors?.permanent_address" :key="index" class="text-danger">{{ error }}</p>
          </div> 
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="text" required v-model="presentAddress"> <i style="margin-left:10px;">Present Address</i> 
          </div> 
          <div v-if="errors?.present_address">
            <p v-for="(error, index) in errors?.present_address" :key="index" class="text-danger">{{ error }}</p>
          </div> 
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <select id="" class="form-control" v-model="gender">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div> 
          <div v-if="errors?.gender">
            <p v-for="(error, index) in errors?.gender" :key="index" class="text-danger">{{ error }}</p>
          </div> 
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="password" required v-model="password"> <i style="margin-left:10px;">Password</i> 
          </div> 
          <div v-if="errors?.password">
            <p v-for="(error, index) in errors?.password" :key="index" class="text-danger">{{ error }}</p>
          </div> 
        </div>
        <div class="col-md-6">
          <div class="inputBox p-2"> 
            <input type="password" required v-model="passwordConfirmation"> <i style="margin-left:10px;">Confirm Password</i>
          </div> 
        </div>
      </div>

      <div class="inputBox"> 

       <button class="login-submit" v-if="loading"><i class="fa-solid fa-spinner fa-spin"></i> Loading....</button> 
       <button class="login-submit" @click.prevent="submit" v-else>Submit Form</button> 

      </div> 

     </div> 

    </div> 

   </div> 

  </section> <!-- partial --> 
    </div>
</template>

<style scoped>
.register-logo img{
  max-width: 150px;
}
.registration-title{
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  border-bottom: 3px solid #0f0;
}
.registration-title h5{
  color: #fff;
}
.login-btn{
  font-size: 20px;
  color: #0f0;
  text-decoration: none;
}

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
body 
{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
}
section 
{
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  background-color: #000;
}
section::before 
{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(#000,#0f0,#000);
  animation: animate 5s linear infinite;
}
@keyframes animate 
{
  0%
  {
    transform: translateY(-100%);
  }
  100%
  {
    transform: translateY(100%);
  }
}
section span 
{
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background: #181818;
  z-index: 2;
  transition: 1.5s;
}
section span:hover 
{
  background: #0f0;
  transition: 0s;
}

section .signin
{
  position: absolute;
  width: 800px;
  background: #222;  
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(0,0,0,9);
  border-top: 5px solid #0F0;
}
section .signin .content 
{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
section .signin .content h2 
{
  font-size: 2em;
  color: #0f0;
  text-transform: uppercase;
}
section .signin .content .form 
{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
section .signin .content .form .inputBox
{
  position: relative;
  width: 100%;
}
section .signin .content .form .inputBox input
{
  position: relative;
  width: 100%;
  background: #333;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 1em;
}
section .signin .content .form .inputBox i 
{
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
}
.signin .content .form .inputBox input:focus ~ i,
.signin .content .form .inputBox input:valid ~ i
{
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: #fff;
}
.inputBox select{
  background-color: #333;
  color: #aaa;
  padding: 16px 10px;
  border: none;
  border-radius: 4px;
}
.signin .content .form .links 
{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.signin .content .form .links a 
{
  color: #fff;
  text-decoration: none;
}
.signin .content .form .links a:nth-child(2)
{
  color: #0f0;
  font-weight: 600;
}
.login-submit
{
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  background: #0f0;
  color: #000;
  font-weight: 600;
  font-size: 1.35em;
  letter-spacing: 0.05em;
  cursor: pointer;
}
.login-submit:hover{
  background: rgb(2, 160, 2);
}
@media (max-width: 900px)
{
  section span 
  {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}
@media (max-width: 600px)
{
  section span 
  {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
}
</style>