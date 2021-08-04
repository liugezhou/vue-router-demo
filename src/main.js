import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TestPlugin from './test/TestPlugin'
const app = createApp(App)
app.use(router)
app.use(TestPlugin)
// 自定义Vue插件
// app.provide(跨组件通信传递数据) & inject(接收)
app.mount('#app')
