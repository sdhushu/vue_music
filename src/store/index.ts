import { defineStore } from "pinia";
export const useCounterStore  = defineStore('counter',{
    state:  ()=>{
        return {
            count: 0
        }
    },
    getters: {

    },
    actions: {
        increment() {
            this.count++
        }
    }
})

