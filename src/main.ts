import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Axios from "./plugins/axios"
import { Button, Image,Lazyload,NavBar,Icon,Form,CellGroup,Field,ConfigProvider,Swipe,SwipeItem,Cell,Loading } from 'vant'

const option = {
    // baseURL: '/api',
}

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Button)
    .use(Image)
    .use(Lazyload)
    .use(NavBar)
    .use(Icon)
    .use(Form)
    .use(CellGroup)
    .use(Field)
    .use(ConfigProvider)
    .use(Swipe)
    .use(SwipeItem)
    .use(Cell)
    .use(Loading)
    // .use(Axios,option)
    .mount('#app')