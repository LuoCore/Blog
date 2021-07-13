<template>
<div class="modal fade"  tabindex="-1" role="dialog">


    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header bg-secondary">
                <ul class="nav nav-tabs card-header-tabs" role="tablist">
                    <li class="nav-item">
                        <a
                            class="nav-link fw-medium active"
                            href="#signin-tab"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-selected="true"
                        >
                            <i class="ci-unlocked me-2 mt-n1"></i>登录
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link fw-medium"
                            href="#signup-tab"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-selected="false"
                        >
                            <i class="ci-user me-2 mt-n1"></i>注册
                        </a>
                    </li>
                </ul>
                <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body tab-content py-4">
                <form
                    class="needs-validation tab-pane fade show active"
                    autocomplete="off"
                    novalidate
                    id="signin-tab"
                >
                    <div class="mb-3">
                        <label class="form-label" for="si-email">邮箱地址</label>
                        <input
                            class="form-control"
                            type="email"
                            id="si-email"
                            placeholder="johndoe@example.com"
                            required
                        />
                        <div class="invalid-feedback">Please provide a valid email address.</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="si-password">密码</label>
                        <div class="password-toggle">
                            <input class="form-control" type="password" id="si-password" required />
                            <label class="password-toggle-btn" aria-label="Show/hide password">
                                <input class="password-toggle-check" type="checkbox" />
                                <span class="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                    <div class="mb-3 d-flex flex-wrap justify-content-between">
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="si-remember" />
                            <label class="form-check-label" for="si-remember">记住我</label>
                        </div>
                        <a class="fs-sm" href="#">忘记密码?</a>
                    </div>
                    <button class="btn btn-primary btn-shadow d-block w-100" type="submit">登录</button>
                </form>
                <form
                    class="needs-validation tab-pane fade"
                    autocomplete="off"
                    novalidate
                    id="signup-tab"
                >
                    <div class="mb-3">
                        <label class="form-label" for="su-name">真实姓名</label>
                        <input
                            class="form-control"
                            type="text"
                            id="su-name"
                            placeholder="John Doe"
                            required
                        />
                        <div class="invalid-feedback">请填上你的名字</div>
                    </div>
                    <div class="mb-3">
                        <label for="su-email">邮箱地址</label>
                        <input
                            class="form-control"
                            type="email"
                            id="su-email"
                            placeholder="johndoe@example.com"
                            required
                        />
                        <div class="invalid-feedback">Please provide a valid email address.</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="su-password">密码</label>
                        <div class="password-toggle">
                            <input class="form-control" type="password" id="su-password" required />
                            <label class="password-toggle-btn" aria-label="Show/hide password">
                                <input class="password-toggle-check" type="checkbox" />
                                <span class="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="su-password-confirm">确认密码</label>
                        <div class="password-toggle">
                            <input
                                class="form-control"
                                type="password"
                                id="su-password-confirm"
                                required
                            />
                            <label class="password-toggle-btn" aria-label="Show/hide password">
                                <input class="password-toggle-check" type="checkbox" />
                                <span class="password-toggle-indicator"></span>
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-shadow d-block w-100" type="submit">注册</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SigninModal'
})
</script>