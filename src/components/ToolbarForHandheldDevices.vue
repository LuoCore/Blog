<template>
    <div class="handheld-toolbar">
        <div class="d-table table-layout-fixed w-100">

            <router-link to="/About" class="d-table-cell handheld-toolbar-item" @click="ActiveClassValue('2')">
                <span class="handheld-toolbar-icon">
                    <i class="ci-heart"></i>
                </span>
                <span class="handheld-toolbar-label">关于我们</span>
            </router-link>
            <a
                class="d-table-cell handheld-toolbar-item"
                href="javascript:void(0)"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                onclick="window.scrollTo(0, 0)"
            >
                <span class="handheld-toolbar-icon">
                    <i class="ci-menu"></i>
                </span>
                <span class="handheld-toolbar-label">菜单</span>
            </a>
            <router-link to="/BlogSingle" class="d-table-cell handheld-toolbar-item" @click="ActiveClassValue('3')">
                <span class="handheld-toolbar-icon">
                    <i class="ci-cart"></i>
                    <span class="badge bg-primary rounded-pill ms-1">4</span>
                </span>
                <span class="handheld-toolbar-label">博客</span>
            </router-link>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dddd from './Navbar.vue'
export default defineComponent({
    name: 'ToolbarForHandheldDevices',
    methods: {
        ActiveClassValue: function(req:string) {
            this.$emit('activeClassValue', req)
        }
    }
    
})
</script>