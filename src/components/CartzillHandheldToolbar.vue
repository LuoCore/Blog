<template>
    <section class="bg-secondary py-4">
        <div class="container pt-4 pt-md-0">
            <div class="row align-items-center">
                <div
                    class="col-xl-4 offset-xl-1 col-lg-5 offset-lg-1 col-md-6 text-center text-md-left"
                >
                    <span class="badge badge-info fs-sm mb-4">From v1.2</span>
                    <h2>
                        <span class="fw-light">甚至 更多的</span> 移动的 友谊赛
                        <span class="fw-light">界面</span>
                    </h2>
                    <p class="text-muted pb-2">
                        新的
                        <span class="fw-medium">工具栏</span> 专为手持设备而设计，以进一步提高用户体验.
                    </p>
                    <p class="fs-sm">扫描下面的QR码在您的设备上测试:</p>
                    <img src="../assets/images/intro/qrcode.png" width="150" alt="QR code" />
                </div>
                <div class="col-md-6">
                    <img class="d-block mx-auto" src="../assets/images/intro/handheld-toolbar.jpg" alt="Toolbar" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CartzillHandheldToolbar'
})
</script>