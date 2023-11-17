// import './assets/main.css'
// import './assets/tailwind.output.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import router from '@/routes'
import Markdown from 'vue3-markdown-it';

createApp(App)
.use(router)
.use(Markdown)
.mount('#app')
