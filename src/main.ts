import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";



router.beforeEach((to, from, next) => {
    // 让页面回到顶部
    document.documentElement.scrollTop = 0
    // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
   next()
})
createApp(App).use(router).mount('#app')







