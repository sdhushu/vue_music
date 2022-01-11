import { createRouter,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: ()=> import('../view/index.vue')
        }
    ]
})

export default router