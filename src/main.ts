import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import {Button} from 'vant'

createApp(App)
.use(router)
.use(createPinia())
.use(Button)
.mount('#app')

