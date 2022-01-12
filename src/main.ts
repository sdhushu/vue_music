import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Button, Image,Lazyload } from 'vant'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Button)
    .use(Image)
    .use(Lazyload)
    .mount('#app')

