import{d as s,c as l,o as t,a,b as e,e as o,F as c,r as i,f as r}from"./vendor.efa8e0a6.js";var d=s({name:"SigninModal"});const n={class:"modal fade",tabindex:"-1",role:"dialog"},m=a("div",{class:"modal-dialog modal-dialog-centered",role:"document"},[a("div",{class:"modal-content"},[a("div",{class:"modal-header bg-secondary"},[a("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[a("li",{class:"nav-item"},[a("a",{class:"nav-link fw-medium active",href:"#signin-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"true"},[a("i",{class:"ci-unlocked me-2 mt-n1"}),e("登录 ")])]),a("li",{class:"nav-item"},[a("a",{class:"nav-link fw-medium",href:"#signup-tab","data-bs-toggle":"tab",role:"tab","aria-selected":"false"},[a("i",{class:"ci-user me-2 mt-n1"}),e("注册 ")])])]),a("button",{class:"btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})]),a("div",{class:"modal-body tab-content py-4"},[a("form",{class:"needs-validation tab-pane fade show active",autocomplete:"off",novalidate:"",id:"signin-tab"},[a("div",{class:"mb-3"},[a("label",{class:"form-label",for:"si-email"},"邮箱地址"),a("input",{class:"form-control",type:"email",id:"si-email",placeholder:"johndoe@example.com",required:""}),a("div",{class:"invalid-feedback"},"Please provide a valid email address.")]),a("div",{class:"mb-3"},[a("label",{class:"form-label",for:"si-password"},"密码"),a("div",{class:"password-toggle"},[a("input",{class:"form-control",type:"password",id:"si-password",required:""}),a("label",{class:"password-toggle-btn","aria-label":"Show/hide password"},[a("input",{class:"password-toggle-check",type:"checkbox"}),a("span",{class:"password-toggle-indicator"})])])]),a("div",{class:"mb-3 d-flex flex-wrap justify-content-between"},[a("div",{class:"form-check mb-2"},[a("input",{class:"form-check-input",type:"checkbox",id:"si-remember"}),a("label",{class:"form-check-label",for:"si-remember"},"记住我")]),a("a",{class:"fs-sm",href:"#"},"忘记密码?")]),a("button",{class:"btn btn-primary btn-shadow d-block w-100",type:"submit"},"登录")]),a("form",{class:"needs-validation tab-pane fade",autocomplete:"off",novalidate:"",id:"signup-tab"},[a("div",{class:"mb-3"},[a("label",{class:"form-label",for:"su-name"},"真实姓名"),a("input",{class:"form-control",type:"text",id:"su-name",placeholder:"John Doe",required:""}),a("div",{class:"invalid-feedback"},"请填上你的名字")]),a("div",{class:"mb-3"},[a("label",{for:"su-email"},"邮箱地址"),a("input",{class:"form-control",type:"email",id:"su-email",placeholder:"johndoe@example.com",required:""}),a("div",{class:"invalid-feedback"},"Please provide a valid email address.")]),a("div",{class:"mb-3"},[a("label",{class:"form-label",for:"su-password"},"密码"),a("div",{class:"password-toggle"},[a("input",{class:"form-control",type:"password",id:"su-password",required:""}),a("label",{class:"password-toggle-btn","aria-label":"Show/hide password"},[a("input",{class:"password-toggle-check",type:"checkbox"}),a("span",{class:"password-toggle-indicator"})])])]),a("div",{class:"mb-3"},[a("label",{class:"form-label",for:"su-password-confirm"},"确认密码"),a("div",{class:"password-toggle"},[a("input",{class:"form-control",type:"password",id:"su-password-confirm",required:""}),a("label",{class:"password-toggle-btn","aria-label":"Show/hide password"},[a("input",{class:"password-toggle-check",type:"checkbox"}),a("span",{class:"password-toggle-indicator"})])])]),a("button",{class:"btn btn-primary btn-shadow d-block w-100",type:"submit"},"注册")])])])],-1);d.render=function(s,a,e,o,c,i){return t(),l("div",n,[m])};var h=s({name:"Navbar"});const p={class:"bg-light shadow-sm navbar-sticky"},b=a("div",{class:"navbar navbar-expand-lg navbar-light"},[a("div",{class:"container"},[a("a",{class:"navbar-brand d-none d-sm-block me-4 order-lg-1",href:"index.html"},[a("img",{src:"/assets/logo-dark.6cadf965.png",width:"142",alt:"Cartzilla"})]),a("a",{class:"navbar-brand d-sm-none me-2 order-lg-1",href:"index.html"},[a("img",{src:"/assets/logo-icon.4c048469.png",width:"74",alt:"Cartzilla"})]),a("div",{class:"navbar-toolbar d-flex align-items-center order-lg-3"},[a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse"},[a("span",{class:"navbar-toggler-icon"})]),a("a",{class:"btn btn-primary btn-shadow",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart me-2"}),e("Buy now ")])]),a("div",{class:"collapse navbar-collapse me-auto order-lg-2",id:"navbarCollapse"},[a("hr",{class:"my-3"}),a("ul",{class:"navbar-nav"},[a("li",{class:"nav-item dropdown active"},[a("a",{class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"首页"),a("ul",{class:"dropdown-menu"},[a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2 border-bottom",href:"home-fashion-store-v1.html"},[a("span",{class:"d-block text-heading"},"时尚店铺 v.1"),a("small",{class:"d-block text-muted"},"经典店铺布局")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-fashion-store-v1.html",style:{width:"250px"}},[a("img",{src:"/assets/th01.29f5ed74.jpg",alt:"时尚店铺 v.1"})])])]),a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2 border-bottom",href:"home-electronics-store.html"},[a("span",{class:"d-block text-heading"},"电子产品商店"),a("small",{class:"d-block text-muted"},"滑动 + 促销宣传")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-electronics-store.html",style:{width:"250px"}},[a("img",{src:"/assets/th03.ceb61f69.jpg",alt:"Electronics Store"})])])]),a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2 border-bottom",href:"home-marketplace.html"},[a("span",{class:"d-block text-heading"},"市场"),a("small",{class:"d-block text-muted"},"多供应商、数码产品")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-marketplace.html",style:{width:"250px"}},[a("img",{src:"/assets/th04.383948bd.jpg",alt:"Marketplace"})])])]),a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2 border-bottom",href:"home-grocery-store.html"},[a("span",{class:"d-block text-heading"},"杂货店"),a("small",{class:"d-block text-muted"},"全宽+侧菜单")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-grocery-store.html",style:{width:"250px"}},[a("img",{src:"/assets/th06.7865913f.jpg",alt:"Grocery Store"})])])]),a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2 border-bottom",href:"home-food-delivery.html"},[a("span",{class:"d-block text-heading"},"食品外卖服务"),a("small",{class:"d-block text-muted"},"食物 & 饮料交付")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-food-delivery.html",style:{width:"250px"}},[a("img",{src:"/assets/th07.e9415fcf.jpg",alt:"Food Delivery Service"})])])]),a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2 border-bottom",href:"home-fashion-store-v2.html"},[a("span",{class:"d-block text-heading"},"时尚商店 v.2"),a("small",{class:"d-block text-muted"},"滑块 +有特色的类别")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-fashion-store-v2.html",style:{width:"250px"}},[a("img",{src:"/assets/th02.621178c0.jpg",alt:"Fashion Store v.2"})])])]),a("li",{class:"dropdown position-static mb-0"},[a("a",{class:"dropdown-item py-2",href:"home-single-store.html"},[a("span",{class:"d-block text-heading"},"单一产品商店"),a("small",{class:"d-block text-muted"},"单一产品/单一品牌")]),a("div",{class:"dropdown-menu h-100 animation-none mt-0 p-3"},[a("a",{class:"d-block",href:"home-single-store.html",style:{width:"250px"}},[a("img",{src:"/assets/th05.12d3f44d.jpg",alt:"Single Product / Brand Store"})])])])])]),a("li",{class:"nav-item dropdown"},[a("a",{class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"Shop"),a("div",{class:"dropdown-menu p-0"},[a("div",{class:"d-flex flex-wrap flex-sm-nowrap px-2"},[a("div",{class:"mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3"},[a("div",{class:"widget widget-links mb-4"},[a("h6",{class:"fs-base mb-3"},"店铺布局"),a("ul",{class:"widget-list"},[a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-grid-ls.html"},"商店网格-左侧侧边栏")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-grid-rs.html"},"商店网格-右侧边栏")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-grid-ft.html"},"商店网格 - 顶部过滤器")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-list-ls.html"},"商店列表 - 左侧栏")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-list-rs.html"},"商店列表 - 右侧栏")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-list-ft.html"},"商店列表 - 顶部过滤器")])])]),a("div",{class:"widget widget-links"},[a("h6",{class:"fs-base mb-3"},"市场"),a("ul",{class:"widget-list"},[a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"marketplace-category.html"},"分类页面")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"marketplace-single.html"},"单项页面")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"marketplace-vendor.html"},"供应商页面")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"marketplace-cart.html"},"大车")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"marketplace-checkout.html"},"查看")])])])]),a("div",{class:"mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3"},[a("div",{class:"widget widget-links"},[a("h6",{class:"fs-base mb-3"},"商店页面"),a("ul",{class:"widget-list"},[a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-categories.html"},"商店类别")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-single-v1.html"},"产品页面 v.1")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-single-v2.html"},"产品页面 v.2")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"shop-cart.html"},"Cart")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"checkout-details.html"},"结账 - 详细信息")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"checkout-shipping.html"},"结账 - 运输")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"checkout-payment.html"},"结账 - 付款")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"checkout-review.html"},"结账 - 评论")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"checkout-complete.html"},"结账 - 完整")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"order-tracking.html"},"订单跟踪")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"comparison.html"},"产品对比")])])])]),a("div",{class:"mega-dropdown-column pt-1 pt-lg-4 pb-4 px-2 px-lg-3"},[a("div",{class:"widget widget-links mb-4"},[a("h6",{class:"fs-base mb-3"},"杂货店"),a("ul",{class:"widget-list"},[a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"grocery-catalog.html"},"产品目录")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"grocery-single.html"},"单一产品页面")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"grocery-checkout.html"},"查看")])])]),a("div",{class:"widget widget-links"},[a("h6",{class:"fs-base mb-3"},"送外卖"),a("ul",{class:"widget-list"},[a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"food-delivery-category.html"},"分类页面")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"food-delivery-single.html"},"单件（餐厅）")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"food-delivery-cart.html"},"购物车（您的订单）")]),a("li",{class:"widget-list-item"},[a("a",{class:"widget-list-link",href:"food-delivery-checkout.html"},"查看 (地址 & 支付)")])])])])])])]),a("li",{class:"nav-item dropdown"},[a("a",{class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"帐户"),a("ul",{class:"dropdown-menu"},[a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"商店用户帐户"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"account-orders.html"},"订单历史")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-profile.html"},"配置文件设置")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-address.html"},"帐户地址")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-payment.html"},"支付方式")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-wishlist.html"},"愿望清单")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-tickets.html"},"我的门票")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-single-ticket.html"},"单票")])])]),a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"供应商仪表板"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-settings.html"},"设置")]),a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-purchases.html"},"购买")]),a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-favorites.html"},"最爱")]),a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-sales.html"},"销售量")]),a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-products.html"},"产品")]),a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-add-new-product.html"},"添加新产品t")]),a("li",null,[a("a",{class:"dropdown-item",href:"dashboard-payouts.html"},"支出")])])]),a("li",null,[a("a",{class:"dropdown-item",href:"account-signin.html"},"登录注册")]),a("li",null,[a("a",{class:"dropdown-item",href:"account-password-recovery.html"},"找回密码")])])]),a("li",{class:"nav-item dropdown"},[a("a",{class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"页面"),a("ul",{class:"dropdown-menu"},[a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#"},"导航条变异"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"navbar-1-level-light.html"},"1 水平光")]),a("li",null,[a("a",{class:"dropdown-item",href:"navbar-1-level-dark.html"},"1级黑暗")]),a("li",null,[a("a",{class:"dropdown-item",href:"navbar-2-level-light.html"},"2 水平光")]),a("li",null,[a("a",{class:"dropdown-item",href:"navbar-2-level-dark.html"},"2 级黑暗")]),a("li",null,[a("a",{class:"dropdown-item",href:"navbar-3-level-light.html"},"3 水平光")]),a("li",null,[a("a",{class:"dropdown-item",href:"navbar-3-level-dark.html"},"3 级黑暗")]),a("li",null,[a("a",{class:"dropdown-item",href:"home-electronics-store.html"},"电子产品商店")]),a("li",null,[a("a",{class:"dropdown-item",href:"home-marketplace.html"},"市场")]),a("li",null,[a("a",{class:"dropdown-item",href:"home-grocery-store.html"},"侧菜单(杂货)")])])]),a("li",{class:"dropdown-divider"}),a("li",null,[a("a",{class:"dropdown-item",href:"about.html"},"关于我们")]),a("li",null,[a("a",{class:"dropdown-item",href:"contacts.html"},"联系人")]),a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"帮助中心"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"help-topics.html"},"帮助主题")]),a("li",null,[a("a",{class:"dropdown-item",href:"help-single-topic.html"},"单一的主题")]),a("li",null,[a("a",{class:"dropdown-item",href:"help-submit-request.html"},"提交一个请求")])])]),a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"404 没有找到"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"404-simple.html"},"404 - 简单的文本")]),a("li",null,[a("a",{class:"dropdown-item",href:"404-illustration.html"},"404 - 插图")])])])])]),a("li",{class:"nav-item dropdown"},[a("a",{class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"博客"),a("ul",{class:"dropdown-menu"},[a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"博客列表布局"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"blog-list-sidebar.html"},"列表与侧边栏")]),a("li",null,[a("a",{class:"dropdown-item",href:"blog-list.html"},"列表没有侧边栏")])])]),a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#"},"Blog Grid Layouts"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"blog-grid-sidebar.html"},"网格与侧边栏")]),a("li",null,[a("a",{class:"dropdown-item",href:"blog-grid.html"},"网格没有侧边栏")])])]),a("li",{class:"dropdown"},[a("a",{class:"dropdown-item dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"单后的布局"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"blog-single-sidebar.html"},"文章与侧边栏")]),a("li",null,[a("a",{class:"dropdown-item",href:"blog-single.html"},"文章没有侧边栏")])])])])]),a("li",{class:"nav-item dropdown"},[a("a",{class:"nav-link dropdown-toggle",href:"#","data-bs-toggle":"dropdown"},"文档 / 组件"),a("ul",{class:"dropdown-menu"},[a("li",null,[a("a",{class:"dropdown-item",href:"docs/dev-setup.html"},[a("div",{class:"d-flex"},[a("div",{class:"lead text-muted pt-1"},[a("i",{class:"ci-book"})]),a("div",{class:"ms-2"},[a("span",{class:"d-block text-heading"},"文档"),a("small",{class:"d-block text-muted"},"启动定制")])])])]),a("li",{class:"dropdown-divider"}),a("li",null,[a("a",{class:"dropdown-item",href:"components/typography.html"},[a("div",{class:"d-flex"},[a("div",{class:"lead text-muted pt-1"},[a("i",{class:"ci-server"})]),a("div",{class:"ms-2"},[a("span",{class:"d-block text-heading"},[e(" 组件 "),a("span",{class:"badge bg-info ms-2"},"40+")]),a("small",{class:"d-block text-muted"},"更快的页面构建")])])])]),a("li",{class:"dropdown-divider"}),a("li",null,[a("a",{class:"dropdown-item",href:"docs/changelog.html"},[a("div",{class:"d-flex"},[a("div",{class:"lead text-muted pt-1"},[a("i",{class:"ci-edit"})]),a("div",{class:"ms-2"},[a("span",{class:"d-block text-heading"},[e(" 更新日志 "),a("span",{class:"badge bg-success ms-2"},"v2.0")]),a("small",{class:"d-block text-muted"},"定期更新")])])])]),a("li",{class:"dropdown-divider"}),a("li",null,[a("a",{class:"dropdown-item",href:"mailto:support@createx.studio"},[a("div",{class:"d-flex"},[a("div",{class:"lead text-muted pt-1"},[a("i",{class:"ci-help"})]),a("div",{class:"ms-2"},[a("span",{class:"d-block text-heading"},"支持"),a("small",{class:"d-block text-muted"},"support@createx.studio")])])])])])])])])])],-1);h.render=function(s,a,e,o,c,i){return t(),l("header",p,[b])};var g=s({name:"HeroSection"});const u={id:"HeroSection",class:"bg-accent bg-position-center bg-size-cover py-3 py-sm-5",style:{"background-image":"url(img/intro/intro-hero.jpg)"}},w=o('<div class="container py-5"><div class="row pt-md-5 pb-lg-5 justify-content-center"><div class="col-xl-7 col-lg-8 col-md-10 text-center py-xl-3"><h1 class="text-light pb-sm-3"><span class="fw-light">Multipurpose</span> Bootstrap 5 <br>E-Commerce <span class="fw-light">Template</span></h1><span class="d-inline-block h5 text-light fw-light mx-2 opacity-70">单身的 / 多-小贩</span><span class="d-inline-block h3 text-light fw-light mx-2">市场</span><span class="d-inline-block h4 text-light fw-light mx-2 opacity-70">时尚</span><span class="d-inline-block h3 text-light fw-light mx-2 opacity-90">电子产品</span><span class="d-inline-block h6 text-light fw-light mx-2 opacity-60">大车</span><span class="d-inline-block h3 text-light fw-light mx-2">杂货店</span><span class="d-inline-block h5 text-light fw-light mx-2 opacity-80">查看</span><span class="d-inline-block h4 text-light fw-light mx-2">Food Delivery</span><span class="d-inline-block fs-lg text-light fw-light mx-2 opacity-60">帐户 / 抄写板</span><div class="py-4 py-sm-5"><a class="btn btn-primary btn-lg" href="#demos" data-scroll> 看法 演示 <i class="ci-arrow-down-circle ms-2"></i></a></div></div></div></div>',1);g.render=function(s,a,e,o,c,i){return t(),l("section",u,[w])};var f=s({name:"DemosSection"});const v={class:"container pt-5 pb-3 pb-lg-5"},k=a("div",{class:"text-center pt-md-4 pb-2"},[a("h2",null,[a("span",{class:"fw-light"},"Explore"),e(" Cartzilla 演示 ")]),a("p",{class:"text-muted"},"探索仔细构建主页的集合。更多来来很快!")],-1),x=a("div",{class:"row pt-4"},[a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-fashion-store-v1.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-fashion-store-v1.html"}),a("img",{src:"/assets/01.c680111a.jpg",alt:"Fashion Store v.1"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-fashion-store-v1.html"},"时尚 店铺 v.1")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-electronics-store.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:" blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-electronics-store.html"}),a("img",{src:"/assets/03.b9183bdb.jpg",alt:"Electronics Store"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-electronics-store.html"},"电子产品 店铺")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-food-delivery.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-food-delivery.html"}),a("img",{src:"/assets/07.b141dafb.jpg",alt:"Food Delivery Service"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-food-delivery.html"},"食物 交货 服务")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-marketplace.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-marketplace.html"}),a("img",{src:"/assets/04.7dfcae50.jpg",alt:"Multi-vendor Marketplace"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-marketplace.html"},"多-小贩 市场")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-grocery-store.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-grocery-store.html"}),a("img",{src:"/assets/06.31f89088.jpg",alt:"Grocery Store"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-grocery-store.html"},"杂货店 店铺")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-fashion-store-v2.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-fashion-store-v2.html"}),a("img",{src:"/assets/02.97195eb7.jpg",alt:"Fashion Store v.2"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-fashion-store-v2.html"},"时尚 店铺 v.2")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb border"},[a("div",{class:"product-card-actions"},[a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"home-single-store.html"},[a("i",{class:"ci-eye"})]),a("a",{class:"btn btn-light btn-icon btn-shadow fs-base mx-2",href:"https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/",target:"_blank",rel:"noopener"},[a("i",{class:"ci-cart"})])]),a("a",{class:"product-thumb-overlay",href:"home-single-store.html"}),a("img",{src:"/assets/05.f0877886.jpg",alt:"Single Product / Brand Store"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"product-title fs-lg pt-2"},[a("a",{href:"home-single-store.html"},"单身的 产品 / 牌 店铺")])])])]),a("div",{class:"col-sm-6 mb-4"},[a("div",{class:"card product-card-alt"},[a("div",{class:"product-thumb"},[a("img",{src:"/assets/coming.58833392.png",alt:"Coming Soon"})]),a("div",{class:"card-body text-center"},[a("h3",{class:"fs-lg pt-2"},"未来 很快")])])])],-1);f.render=function(s,a,e,o,c,i){return t(),l("section",v,[k,x])};var y=s({name:"CartzillaPagesSection"});const A={class:"bg-dark py-5"},L=a("div",{class:"container py-3 py-lg-4"},[a("div",{class:"row align-items-center"},[a("div",{class:"col-xl-4 col-lg-5 pb-4 pb-lg-0"},[a("h2",{class:"text-light"},[a("span",{class:"fw-light"},"Complete"),e(" E-商业 正面-结尾 "),a("span",{class:"fw-light"},"解决方案")]),a("p",{class:"text-light opacity-70"},"您所需要的所有电子商务项目"),a("ul",{class:"text-light list-unstyled pt-3"},[a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("商店网格/列表布局选项 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("多个产品页面变体 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("完成订单工作流程：购物车+结帐 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("商店客户帐户页面 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("多供应商市场的供应商仪表板 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("准备好任何内容：时尚，电子，数字（可下载）产品，等等. ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("博客页面：博客布局+单个帖子 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("帮助中心/支持页面 ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("辅助页面：关于，联系人，404等. ")]),a("li",null,[a("i",{class:"ci-check-circle text-success me-2"}),e("40多个柔性组件 ")])])]),a("div",{class:"col-lg-7 offset-xl-1"},[a("img",{src:"/assets/pages-showcase.055d1fc1.jpg",alt:"Cartzilla pages"})])])],-1);y.render=function(s,a,e,o,c,i){return t(),l("section",A,[L])};var z=s({name:"CartzillHandheldToolbar"});const C={class:"bg-secondary py-4"},j=a("div",{class:"container pt-4 pt-md-0"},[a("div",{class:"row align-items-center"},[a("div",{class:"col-xl-4 offset-xl-1 col-lg-5 offset-lg-1 col-md-6 text-center text-md-left"},[a("span",{class:"badge badge-info fs-sm mb-4"},"From v1.2"),a("h2",null,[a("span",{class:"fw-light"},"甚至 更多的"),e(" 移动的 友谊赛 "),a("span",{class:"fw-light"},"界面")]),a("p",{class:"text-muted pb-2"},[e(" 新的 "),a("span",{class:"fw-medium"},"工具栏"),e(" 专为手持设备而设计，以进一步提高用户体验. ")]),a("p",{class:"fs-sm"},"扫描下面的QR码在您的设备上测试:"),a("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ0RDcyNzk0QjZGMTFFQjk5RjZBMTU0RjcyN0EwOEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ0RDcyN0E0QjZGMTFFQjk5RjZBMTU0RjcyN0EwOEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDRENzI3NzRCNkYxMUVCOTlGNkExNTRGNzI3QTA4QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDRENzI3ODRCNkYxMUVCOTlGNkExNTRGNzI3QTA4QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmfWedsAAABFUExURfP0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",width:"150",alt:"QR code"})]),a("div",{class:"col-md-6"},[a("img",{class:"d-block mx-auto",src:"/assets/handheld-toolbar.6530dc95.jpg",alt:"Toolbar"})])])],-1);z.render=function(s,a,e,o,c,i){return t(),l("section",C,[j])};var W=s({name:"FooterPage"});const G={class:"border-top py-5"},S=o('<div class="container text-center pt-3 pt-lg-4"><h3 class="fw-light">仍然不相信?</h3><h2 class="pb-4">添加保费支持和生命周期更新.</h2><a class="btn btn-primary btn-lg" href="https://themes.getbootstrap.com/product/cartzilla-bootstrap-e-commerce-template-ui-kit/" target="_blank" rel="noopener"><i class="ci-cart me-2"></i>买cartzilla. </a><hr class="my-5"><div class="fs-ms text-muted text-center"> © 版权所有。由制成 <a class="text-muted" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div></div>',1);W.render=function(s,a,e,o,c,i){return t(),l("footer",G,[S])};var D=s({name:"ToolbarForHandheldDevices"});const Z={class:"handheld-toolbar"},I=a("div",{class:"d-table table-layout-fixed w-100"},[a("a",{class:"d-table-cell handheld-toolbar-item",href:"account-wishlist.html"},[a("span",{class:"handheld-toolbar-icon"},[a("i",{class:"ci-heart"})]),a("span",{class:"handheld-toolbar-label"},"Wishlist")]),a("a",{class:"d-table-cell handheld-toolbar-item",href:"javascript:void(0)","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse",onclick:"window.scrollTo(0, 0)"},[a("span",{class:"handheld-toolbar-icon"},[a("i",{class:"ci-menu"})]),a("span",{class:"handheld-toolbar-label"},"Menu")]),a("a",{class:"d-table-cell handheld-toolbar-item",href:"shop-cart.html"},[a("span",{class:"handheld-toolbar-icon"},[a("i",{class:"ci-cart"}),a("span",{class:"badge bg-primary rounded-pill ms-1"},"4")]),a("span",{class:"handheld-toolbar-label"},"$265.00")])],-1);D.render=function(s,a,e,o,c,i){return t(),l("div",Z,[I])};var F=s({name:"BackToTopButton"});const T={class:"btn-scroll-top",href:"#top","data-scroll":""},P=a("span",{class:"btn-scroll-top-tooltip text-muted fs-sm me-2"},"Top",-1),B=a("i",{class:"btn-scroll-top-icon ci-arrow-up"},null,-1);F.render=function(s,a,e,o,c,i){return t(),l("a",T,[P,B])};var E=s({name:"App",components:{Signin:d,Navbar:h,HeroSection:g,DemosSection:f,CartzillaPagesSection:y,CartzillHandheldToolbar:z,FooterPage:W,ToolbarForHandheldDevices:D,BackToTopButton:F}});const N=e("> ");E.render=function(s,e,o,r,d,n){const m=i("Signin"),h=i("Navbar"),p=i("HeroSection"),b=i("DemosSection"),g=i("CartzillaPagesSection"),u=i("CartzillHandheldToolbar"),w=i("FooterPage"),f=i("ToolbarForHandheldDevices"),v=i("BackToTopButton");return t(),l(c,null,[a(m),a(h),N,a(p),a(b),a(g),a(u),a(w),a(f),a(v)],64)},r(E).mount("#app");
