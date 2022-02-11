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

router.beforeEach((to,from,next)=>{
    console.log(navigator.userAgent,111)
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    const token = localStorage.getItem('token')
    if (to.name === 'home' && !token) next({name:'login'})
    else next()
})
export default router