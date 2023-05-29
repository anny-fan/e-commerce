import './style.css'

import { createApp } from 'vue'
import router from '@/router'
import naive from 'naive-ui'

import App from './App.vue'

createApp(App).use(router).use(naive).mount('#app')
