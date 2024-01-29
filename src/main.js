import { createApp } from 'vue'
import "@/assets/css/global.css"
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.css"
import router from "./router";

createApp(App).use(router).mount('#app')
