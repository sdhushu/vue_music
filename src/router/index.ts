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
        },
        {
            path: '/login',
            name: 'login',
            component: ()=> import('../view/login.vue')
        }
    ]
})

export default router