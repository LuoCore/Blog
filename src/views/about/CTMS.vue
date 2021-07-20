<template>
    <section class="container mb-3 pb-3">
        <div class="bg-light shadow-lg rounded-3 overflow-hidden">
            <div class="row">
                <!-- Content-->
                <section class="col-lg-8 pt-2 pt-lg-4 pb-4 mb-lg-3">
                    <div class="pt-3 px-4 pe-lg-0 ps-xl-5">
                        <!-- Product gallery-->
                        <div class="gallery">
                            <a
                                class=" gallery-item rounded-3 mb-grid-gutter"
                                href="#"
                            >
                                <img
                                    src="../../assets/images/about/pages/ctms-01.jpg"
                                    alt="Gallery preview"
                                />
                                <span class="gallery-item-caption">LuoCore 集运仓储管理系统 CTMS</span>
                            </a>
                            <div class="row">
                                <div class="col-sm-6">
                                    <a
                                        class="gallery-item rounded-3 mb-grid-gutter"
                                        href="#"
                                    >
                                        <img
                                            src="../../assets/images/about/pages/ctms-02.png"
                                            alt="Gallery preview"
                                        />
                                        <span
                                            class="gallery-item-caption"
                                        >LuoCore 集运仓储管理系统 CTMS</span>
                                    </a>
                                </div>
                                <div class="col-sm-6">
                                    <a
                                        class="gallery-item rounded-3 mb-grid-gutter"
                                        href="#"
                                    >
                                        <img
                                        src="../../assets/images/about/pages/ctms-03.png"
                                            alt="Gallery preview"
                                        />
                                        <span class="gallery-item-caption">LuoCore 集运仓储管理系统 CTMS</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- Wishlist + Sharing-->
                        <div
                            class="d-flex flex-wrap justify-content-between align-items-center border-top pt-3"
                        >
                            <div class="py-2 me-2">
                                <button class="btn btn-outline-accent" type="button">
                                    <i class="ci-heart fs-lg me-2"></i>给我投资
                                </button>
                            </div>
                            <div class="py-2">
                                <i class="ci-share-alt fs-lg align-middle text-muted me-2"></i>
                                <a class="btn-social bs-outline bs-facebook bs-sm ms-2" href="#">
                                    <i class="ci-facebook"></i>
                                </a>
                                <a class="btn-social bs-outline bs-twitter bs-sm ms-2" href="#">
                                    <i class="ci-twitter"></i>
                                </a>
                                <a class="btn-social bs-outline bs-pinterest bs-sm ms-2" href="#">
                                    <i class="ci-pinterest"></i>
                                </a>
                                <a class="btn-social bs-outline bs-instagram bs-sm ms-2" href="#">
                                    <i class="ci-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Sidebar-->
                <aside class="col-lg-4 ps-xl-5">
                    <hr class="d-lg-none" />
                    <div class="bg-white h-100 p-4 ms-auto border-start">
                        <div class="px-lg-2">
                            <div class="accordion accordion-flush" id="licenses">
                                <div class="accordion-item border-bottom">
                                    <div
                                        class="accordion-header d-flex justify-content-between align-items-center py-3"
                                    >
                                        <div
                                            class="form-check"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#standard-license"
                                        >
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="license"
                                                id="license-std"
                                                checked
                                            />
                                            <label
                                                class="form-check-label fw-medium text-dark"
                                                for="license-std"
                                            >标准的许可证</label>
                                        </div>
                                        <h5 class="mb-0 text-accent fw-normal">
                                            20000￥
                                            <small>00</small>
                                        </h5>
                                    </div>
                                    <div
                                        class="accordion-collapse collapse show"
                                        id="standard-license"
                                        data-bs-parent="#licenses"
                                    >
                                        <div class="accordion-body py-0 pb-2">
                                            <ul class="list-unstyled fs-sm">
                                                <li class="d-flex align-items-center">
                                                    <i class="ci-check-circle text-success me-1"></i>
                                                    <span class="fs-ms">质量验证</span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="ci-check-circle text-success me-1"></i>
                                                    <span class="fs-ms">用于单个项目</span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="ci-check-circle text-success me-1"></i>
                                                    <span class="fs-ms">基础项目配置</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div
                                        class="accordion-header d-flex justify-content-between align-items-center py-3"
                                    >
                                        <div
                                            class="form-check"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#extended-license"
                                        >
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="license"
                                                id="license-ext"
                                            />
                                            <label
                                                class="form-check-label fw-medium text-dark"
                                                for="license-ext"
                                            >延长许可证</label>
                                        </div>
                                        <h5 class="mb-0 text-accent fw-normal">
                                            10000￥
                                            <small>00</small>
                                        </h5>
                                    </div>
                                    <div
                                        class="accordion-collapse collapse border-0"
                                        id="extended-license"
                                        data-bs-parent="#licenses"
                                    >
                                        <div class="accordion-body py-0 pb-2">
                                            <ul class="list-unstyled fs-sm">
                                                <li class="d-flex align-items-center">
                                                    <i class="ci-check-circle text-success me-1"></i>
                                                    <span class="fs-ms">质量验证</span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="ci-check-circle text-success me-1"></i>
                                                    <span class="fs-ms">用于单个项目</span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="ci-check-circle text-success me-1"></i>
                                                    <span class="fs-ms">付费用户允许</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <button
                                class="btn btn-primary btn-shadow d-block w-100 mt-4"
                                type="button"
                            >
                                <i class="ci-cart fs-lg me-2"></i>支持CTMS
                            </button>
                            <div class="bg-secondary rounded p-3 mt-4 mb-2">
                                <a class="d-flex align-items-center" href="#">
                                    <img
                                        class="rounded-circle"
                                        src="../../assets/logo.png"
                                        width="50"
                                        alt="Sara Palson"
                                    />
                                    <div class="ps-2">
                                        <span class="fs-ms text-muted">创建人</span>
                                        <h6 class="fs-sm mb-0">LuoCore</h6>
                                    </div>
                                </a>
                            </div>
                            <div class="bg-secondary rounded p-3 mb-2">
                                <i class="ci-download h5 text-muted align-middle mb-0 mt-n1 me-2"></i>
                                <span class="d-inline-block h6 mb-0 me-1">715</span>
                                <span class="fs-sm">下载量</span>
                            </div>
                            <div class="bg-secondary rounded p-3 mb-4">
                                <div class="star-rating">
                                    <i class="star-rating-icon ci-star-filled active"></i>
                                    <i class="star-rating-icon ci-star-filled active"></i>
                                    <i class="star-rating-icon ci-star-filled active"></i>
                                    <i class="star-rating-icon ci-star-filled active"></i>
                                    <i class="star-rating-icon ci-star"></i>
                                </div>
                                <span class="fs-ms ms-2">4.1/5</span>
                                <div class="fs-ms text-muted">基于74个评论</div>
                            </div>
                            <ul class="list-unstyled fs-sm">
                                <li class="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="text-dark fw-medium">最新更新</span>
                                    <span class="text-muted">2021-07-20</span>
                                </li>
                                <li class="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="text-dark fw-medium">发布</span>
                                    <span class="text-muted">2020-12-27</span>
                                </li>
                                <li class="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="text-dark fw-medium">分类</span>
                                    <a class="product-meta" href="#">CRM</a>
                                </li>
                                <li class="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="text-dark fw-medium">使用技术</span>
                                    <span class="text-muted">C# WinForm</span>
                                </li>
                                <li class="d-flex justify-content-between mb-3 pb-3 border-bottom">
                                    <span class="text-dark fw-medium">文件类型</span>
                                    <span class="text-muted">exe</span>
                                </li>
                                <li class="d-flex justify-content-between pb-3 border-bottom">
                                    <span class="text-dark fw-medium">文件大小</span>
                                    <span class="text-muted">200 MB</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>