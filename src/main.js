import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import axios from "axios";

import * as ElIconModules from '@element-plus/icons-vue';

import * as echarts from 'echarts';

const app = createApp(App);

// 统一注册el-icon图标
for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
}

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$echarts = echarts;

app.use(ElementPlus);

app.use(store).use(router).mount('#app')
