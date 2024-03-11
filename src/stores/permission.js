import { defineStore }  from 'pinia';
import   axiosInstance  from '@/service/axiosService';

export const usePermission = defineStore("psermission", {
    state:() => ({
        loading: false,
     }),

     getters:{

     },

     actions:{
        async getPermissionsList(){
            this.loading = true;
            try {
                const res = await axiosInstance.get('/admin/permissions');
                console.log(res);
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                if(error.response?.data){
                    return error.response?.data;
                }
            }finally{
                this.loading = false;
            }
        },
        
        async getGroupPermissionsList(){
            this.loading = true;
            try {
                const res = await axiosInstance.get('/admin/permissions/group');
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                if(error.response?.data){
                    return error.response?.data;
                }
            }finally{
                this.loading = false;
            }
        },

        async permissionCreate(data){
            this.loading = true;
            try {
                const res = await axiosInstance.post('/admin/permissions', data);
                if(res.data?.success){
                    return res.data;
                }
            }catch(error){
                if(error.response?.data){
                    return error.response?.data;
                }
            }finally{
                this.loading = false;
            }
        },

        async getSinglePermissionData(id){
            try {
                const res = await axiosInstance.get(`/admin/permissions/${id}`);
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }
        },

        async permissionUpdate(id, data){
            this.loading = true;
            try {
                const res = await axiosInstance.put(`/admin/permissions/${id}`, data);
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                if(error.response?.data){
                    return error.response?.data;
                }
            }finally{
                this.loading = false;
            }
        }
     },

})
