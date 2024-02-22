import { defineStore }  from 'pinia';
import   axiosInstance  from '@/service/axiosService';

export const useThemeSetting = defineStore("themeSetting", {
    state:() => ({
        isCollops: false,
     }),

     persist:['isCollops'],

     getters:{

     },

     actions:{

     },

})
