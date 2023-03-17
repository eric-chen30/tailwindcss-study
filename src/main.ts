import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/tailwind.css'

const app = createApp(App)

/** 
 * createApp 允许在同一个页面中创建多个共存的Vue应用
*/
// const app1 = createApp({})
// const app2 = createApp({})
// app1.mount('#container1')
// app1.mount('#container2')

app.config.errorHandler = (err) => {
  // 应用级错误处理器
}

// 注册应用范围内可用的组件
// app.component('TodoDeleteButton', TodoDeleteButton)

// Pinia是Vue专属状态管理库，它允许你跨组件或者页面共享状态
// 对于单页面应用，或许可以 export const state = reactive({}) 共享一个全局状态，但如果应用在服务端渲染，会使你的应用暴露一些安全问题

// Store就是一个状态管理器，承载全局状态，每个组件都可以读取和写入它。
// 三个核心概念：state、getter、actions 方便理解，可以对应组件中 data、computed、methods
// 创建一个pinia实例，并将其传递给应用
app.use(createPinia())
app.use(router)

app.mount('#app')
