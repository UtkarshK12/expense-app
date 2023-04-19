import axios from "axios";
import { defineStore } from "pinia";

export const neededDetailStore = defineStore('neededExpenses',{
        state:()=>{
            return {details:{}}
        },

        actions:{                                                               
            async fetchDetails(){
                try{
                    const res=await axios.get('https://www.boredapi.com/api/activity')
                    this.details=res.data
                }
                catch(error){
                    console.error(error)
                }
            }

        },

       

}) 