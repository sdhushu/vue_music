import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Button, Image } from 'vant'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Button)
    .use(Image)
    .mount('#app')

