import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import BlogSingle from "../views/BlogSingle.vue";

const routes=[ 
    { path: '/', component: Home },
    { path: '/About',name:'首页', component: ()=>import('../views/About.vue') },
    { path: '/BlogSingle',name:'博客', component: BlogSingle },
]



export default createRouter({
    history:createWebHistory(),
    routes
})


  
