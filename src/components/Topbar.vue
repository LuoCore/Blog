<template>
    <div class="topbar topbar-dark bg-dark">
        <div class="container">
            <div class="topbar-text dropdown d-md-none">
                <a
                    class="topbar-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                >联系方式</a>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="tel:00331697720">
                            <i class="ci-support text-muted me-2"></i>微信：Luo11395
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="order-tracking.html">
                            <i class="ci-location text-muted me-2"></i>QQ：320637032
                        </a>
                    </li>
                </ul>
            </div>
            <div class="topbar-text text-nowrap d-none d-md-inline-block">
                <i class="ci-support"></i>
                <span class="text-muted me-1">技术支持</span>
                <a class="topbar-link" href="QQ：320637032">QQ：320637032</a>
            </div>
            <div class="tns-carousel tns-controls-static d-none d-md-block">
                <div
                    class="tns-carousel-inner"
                    data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}"
                >
                    <div class="topbar-text">EWMS仓储管理信息系统 5000￥</div>
                    <div class="topbar-text">物流运输系统(TMS) 20000￥</div>
                    <div class="topbar-text">客户管理系统(CRM) 10000￥</div>
                </div>
            </div>
            <div class="ms-3 text-nowrap">
                <a class="topbar-link me-4 d-none d-md-inline-block" href="order-tracking.html">
                    <i class="ci-location"></i>我们的服务
                </a>
                <div class="topbar-text dropdown disable-autohide">
                    <a class="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                        <img class="me-2" src="../assets/images/flags/zh.png" width="20" alt="China" />zh-cn / 中国
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li class="dropdown-item">
                            <select class="form-select form-select-sm">
                                <option value="CNY">中文简体 zh-cn</option>
                                <option value="TWD">中文繁体 zh-tw</option>
                                <option value="USD">英语 en</option>
                                <option value="JPY">日语 jp</option>
                            </select>
                        </li>
                        <li>
                            <a class="dropdown-item pb-1" href="#">
                                <img class="me-2" src="../assets/images/flags/fr.png" width="20" alt="Français" />Français
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item pb-1" href="#">
                                <img class="me-2" src="../assets/images/flags/de.png" width="20" alt="Deutsch" />Deutsch
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                <img class="me-2" src="../assets/images/flags/it.png" width="20" alt="Italiano" />Italiano
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Topbar'
})
</script>