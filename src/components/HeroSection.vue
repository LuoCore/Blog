<template>
    <section
        id="HeroSection"
        class="bg-accent bg-position-center bg-size-cover py-3 py-sm-5"
        style="background-image: url(img/intro/intro-hero.jpg);"
    >
        <div class="container py-5">
            <div class="row pt-md-5 pb-lg-5 justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-10 text-center py-xl-3">
                    <h1 class="text-light pb-sm-3">
                        <span class="fw-light">Multipurpose</span> Bootstrap 5
                        <br />E-Commerce
                        <span class="fw-light">Template</span>
                    </h1>
                    <span class="d-inline-block h5 text-light fw-light mx-2 opacity-70">单身的 / 多-小贩</span>
                    <span class="d-inline-block h3 text-light fw-light mx-2">市场</span>
                    <span class="d-inline-block h4 text-light fw-light mx-2 opacity-70">时尚</span>
                    <span class="d-inline-block h3 text-light fw-light mx-2 opacity-90">电子产品</span>
                    <span class="d-inline-block h6 text-light fw-light mx-2 opacity-60">大车</span>
                    <span class="d-inline-block h3 text-light fw-light mx-2">杂货店</span>
                    <span class="d-inline-block h5 text-light fw-light mx-2 opacity-80">查看</span>
                    <span class="d-inline-block h4 text-light fw-light mx-2">Food Delivery</span>
                    <span class="d-inline-block fs-lg text-light fw-light mx-2 opacity-60">帐户 / 抄写板</span>
                    <div class="py-4 py-sm-5">
                        <a class="btn btn-primary btn-lg" href="#demos" data-scroll>
                            看法 演示
                            <i class="ci-arrow-down-circle ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'HeroSection'
})
</script>