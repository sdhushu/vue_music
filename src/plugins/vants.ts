import { createApp } from 'vue'
import App from '../App.vue'
import {
    Button,
    Image,
    Lazyload,
    NavBar,
    Icon,
    Form,
    CellGroup,
    Field,
    ConfigProvider,
    Swipe,
    SwipeItem,
    Cell
} from 'vant'

createApp(App)
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
    .mount('#app')

