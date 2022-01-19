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
        },
        {
            path:'/register',
            name:'register',
            component: ()=>import('../view/register.vue')
        },
        {
            path:'/home',
            name:'home',
            component: ()=>import('../view/home.vue')
        },
        {
            path:'/type',
            name:'type',
            component: ()=>import('../view/classification.vue')
        }
    ]
})

export default router