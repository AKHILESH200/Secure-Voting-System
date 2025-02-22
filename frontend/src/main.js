import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app=createApp(App)
app.config.globalProperties.$url = 'http://localhost:3001/'
app.use(router).mount('#app')