import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Profile from './pages/Profile.vue'
import Login from './pages/Login.vue'
import './index.css'

const router = createRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/perfil", component: Profile },
        { path: "/login", component: Login }
    ],
    history: createWebHistory()
})

const app = createApp(App) // Criação da aplicação Vue
app.use(router) // Vue utilizar o VueRouter
app.mount('#app') // Injeção do Vue
