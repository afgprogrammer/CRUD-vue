import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './routes'

const app = createApp(App)

// Register routes
app.use(Router)

app.mount('#app')
