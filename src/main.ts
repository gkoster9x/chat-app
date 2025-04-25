import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import global styles
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app') 