<template>
    <header class="bg-light shadow-sm navbar-sticky">
        <Topbar />
        <div class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand d-none d-sm-block me-4 order-lg-1" href="index.html">
                    <img src="../assets/images/logo-dark.png" width="142" alt="Cartzilla" />
                </a>
                <a class="navbar-brand d-sm-none me-2 order-lg-1" href="index.html">
                    <img src="../assets/images/logo-icon.png" width="74" alt="Cartzilla" />
                </a>
                <div class="navbar-toolbar d-flex align-items-center order-lg-3">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a
                        class="btn btn-primary btn-shadow"
                        href="http://www.luocore.com"
                        target="_blank"
                        rel="noopener"
                    >
                        <i class="ci-cart me-2"></i>Luo Core
                    </a>
                </div>
                <div class="collapse navbar-collapse me-auto order-lg-2" id="navbarCollapse">
                    <hr class="my-3" />
                    <!-- Primary menu 主菜单-->
                    <ul class="navbar-nav">
                        <li
                            class="nav-item"
                            v-on:click="addActiveClass('1')"
                            :class="{ active: currentValue == '1' }"
                        >
                            <router-link class="nav-link" to="/">首页</router-link>
                        </li>
                        <li
                            class="nav-item"
                            v-on:click="addActiveClass('2')"
                            :class="{ active: currentValue == '2' }"
                        >
                            <router-link class="nav-link" to="/About">关于我们</router-link>
                        </li>
                        <li
                            class="nav-item"
                            @click="addActiveClass('3')"
                            :class="{ active: currentValue == '3' }"
                        >
                            <router-link class="nav-link" to="/BlogSingle">博客</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Topbar from './Topbar.vue'


export default defineComponent({
    name: 'Navbar',
    components: {
        Topbar
    },
    data() {

        return {
            currentValue: "1"
        }
    },
    methods: {
        addActiveClass: function(index: string) {
            this.currentValue = index;
        }
    },
    props: {
        activeClassValue: String
    },
    watch: {
        activeClassValue() {
            this.currentValue = this.activeClassValue + "";
        }
    }
})
</script>
