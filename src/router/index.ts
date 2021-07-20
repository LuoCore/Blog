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
    { path: '/blog/WTJYD',name:'客户无提交运单', component: ()=>import('../views/blog/WTJYD.vue') },
    { path: '/blog/FHFJ',name:'发货分拣', component: ()=>import('../views/blog/FHFJ.vue') },
    { path: '/home/JYXT',name:'集运系统', component: ()=>import('../views/home/JYXT.vue') },
    { path: '/home/PZ',name:'配载', component: ()=>import('../views/home/PZ.vue') },
    { path: '/home/CCXT',name:'仓储系统', component: ()=>import('../views/home/CCXT.vue') },
    { path: '/home/DSJJS',name:'大数据计算', component: ()=>import('../views/home/DSJJS.vue') },
    
]



export default createRouter({
    history:createWebHistory(),
    routes
})


  
