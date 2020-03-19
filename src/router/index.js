// 导入 Vue
import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
// 导入 login 组件
import Login from '../views/login/index.vue'
// 导入 useElement 组件
import UseElement from '../views/useElement/index.vue'
// 使用 vue-router
Vue.use(VueRouter)
// 创建一个新的 vue-router 对象
var router = new VueRouter({
    // 添加路由的规则
    routes: [
        // 路由重定向
        { path: '/', redirect: '/login' },
        // 登录
        { path: '/login', component: Login },
        // 使用 element 的路由规则
        { path: '/useElement', component: UseElement}
    ]
})
// 将新的对象暴露出去
export default router
