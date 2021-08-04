import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './icons' // icon
// import jquery from './utils/jquery';
// console.log(jquery,999);
// var $ = jquery;
// console.log($==jquery,888);
// 引入axios
import axios from 'axios';
// 安装
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
	store,
    router,
    render: h => h(App)
}).$mount('#app')