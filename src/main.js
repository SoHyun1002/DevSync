// import './assets/main.css'
// import './assets/tailwind.output.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import router from '@/routes'
import Markdown from 'vue3-markdown-it';

import { Amplify } from 'aws-amplify'
// import awsConfig from './aws-exports.js'
import awsConfig from './amplifyconfiguration.json'
import '@aws-amplify/ui-vue/styles.css';
Amplify.configure(awsConfig)

createApp(App)
.use(router)
.use(Markdown)
.mount('#app')
