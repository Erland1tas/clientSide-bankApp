import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MainBackground from './slots/MainBackground.vue'

import App from './App.vue'
import router from './router'

import './assets/resets.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('MainBackground', MainBackground)

app.mount('#app')
