import { defineStore }  from 'pinia';
import   axiosInstance  from '@/service/axiosService';
import { useToken }     from '@/stores'

export const useAuth = defineStore("auth", {
    state:() => ({
        user          : {},
        isLoggedIn    : false,
        logoutLoading : false,
        loading       : false,
        authPermission: {},
     }),

     persist:['user', 'isLoggedIn', 'authPermission'],

     getters:{
        getUser:(state) => {
            return state.user?.data;
        },
        getAuthStatus: (state) => {
            return state.isLoggedIn;
        }
     },

     actions:{
        async login(data){
            this.loading = true;
            const token = useToken();
            try {
                const res = await axiosInstance.post('/admin/login', data);
                console.log(res);
                if(res.status === 200){
                    this.user = res.data?.data;
                    token.setToken(res.data?.meta?.token)
                    this.isLoggedIn = true;
                    // this.authenticateUserPermission();
                    return res.data?.meta;
                }
            } catch (error) {
                if(error?.response?.data){
                    console.log(error?.response?.data);
                    throw(error?.response?.data)
                }
            }finally{
                this.loading = false;
            }
        },

        async logout(){
            const token = useToken();
            this.logoutLoading = true;
            try {
                const res = await axiosInstance.post('/admin/logout');
                if(res.status === 200){
                    token.removeToken();
                    this.$reset();
                    return res;
                }
            } catch (error) {
                if(error.response){
                    this.$reset();
                    return error.response;
                }
            }finally{
                this.logoutLoading = false;
            }
        },

        // async authenticateUserPermission(){
        //     try {
        //         const res = await axiosInstance.get('/admin/users/permission');
        //         if(res.data?.success){
        //             this.authPermission = res?.data?.result?.roles[0]?.permissions;
        //             return res?.data?.result?.roles[0]?.permissions;
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
     },

})
