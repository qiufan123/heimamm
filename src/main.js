// 导入了 vue
import Vue from 'vue'
// 导入了 App.vue （根组件）
import App from './App.vue'
// 导入 router 
import router from './router'
// 导入 elementui
import Element from  'element-ui'
// 导入 elementui 的样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import './style/index.css'

// 使用 element
Vue.use(Element)
Vue.config.productionTip = false

// 创建了一个新的 vue 实例
new Vue({
  router: router, // 将路由对象挂载到 vue 实例中
  render: h => h(App), // 将根组件 App.vue 中的内容渲染到 vue 实例中
}).$mount('#app')
