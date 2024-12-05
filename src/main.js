import { createApp } from "vue";  
import App from "./App.vue";  
import "./assets/reset.css";  
import { Search } from '@element-plus/icons-vue';
// 引入 Element Plus 和其样式  
import ElementPlus from 'element-plus';  
import 'element-plus/dist/index.css';  

const app = createApp(App);  

// 使用 Element Plus  
app.use(ElementPlus);  

app.mount("#app"); 