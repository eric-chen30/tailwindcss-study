import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

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

app.use(createPinia())
app.use(router)

app.mount('#app')
