import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import BlogSingle from "../views/BlogList.vue";

const routes=[ 
    { path: '/', component: Home },
    { path: '/About',name:'关于我们', component: ()=>import('../views/About.vue') },
    { path: '/BlogList',name:'博客', component: BlogSingle },
    { path: '/blog/JYMZYL',name:'集运名字由来', component: ()=>import('../views/blog/JYMZYL.vue') },
    { path: '/blog/JYXTKFCZ',name:'集运系统开发初衷', component: ()=>import('../views/blog/JYXTKFCZ.vue') },
    { path: '/blog/WYBRK',name:'无预报入库', component: ()=>import('../views/blog/WYBRK.vue') },
    
]



export default createRouter({
    history:createWebHistory(),
    routes
})


  
