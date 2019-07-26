//项目入口文件
console.log('项目运行了')
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
Vue.use(VueRouter)
import app from "./App.vue";
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
import './lib/mui/css/mui.css'

var vm = new Vue({
    el:'#app',
    router,
    render:c=>c(app)
})