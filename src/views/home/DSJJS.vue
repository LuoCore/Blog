<template>

    <div class="container py-5 mt-md-2 mb-2">
        <div class="row">
          
            <div class="col-lg-12">
                <h2 class="h4 pb-3">运费大数据计算查询系统</h2>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                >电流仓派经过长期摸索实践，对当前物流行业运费进行算法融合，支持物流行业95%的运费计算要求：</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                > 1、支持按重量、按体积、按件、按商品数量计费。根据重量、体积计费比较常见；根据件数、商品数量计算运费在仓配运输上有应用。</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                > 2、支持快递、空运、海运、路运、铁路运输计费；运费计算方法存在差异。</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                > 3、支持阶梯、单价、一口价计费；把不同算法融合。</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                >  4、支持阶梯计费，升位阶梯任意值；如一般续费区间取值固定为0.1，0.5，1；融合算法可以灵活自由设置（3.14，6.18，5.21…）。</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                >  5、支持重量与体积取大值；如CBM/材积除&实际重，取大值。</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                > 6、支持分抛计算法；如（体积重-实际重量）*分泡比+实际重。</p>
                <p
                    class="fs-md"
                    style="text-indent:2em;"
                >  7、支持计价单位换算计费；如测量单位CM、运费设置单位CM、计算结果单位CBM。</p>
                <div class="row pt-3 pb-4 mb-2 mb-md-4">
                    <div class="col-md-12">
                        <img
                            class="w-100 img-thumbnail"
                            src="../../assets/images/home/preview/pages/02.png"
                            alt="Help image"
                        />
                    </div>
                </div>
                <h2 class="h4 pb-3">所有数据执行单数据表查询，核心算法支持大数据运算</h2>
                <div class="accordion accordion-flush" id="methods">
                    <div class="accordion-item">
                        <div
                            class="accordion-collapse collapse show"
                            id="methodOne"
                            data-bs-parent="#methods"
                        >
                            <div class="card-body fs-md">
                                <p> 当前物流公司在开展多种业务，已经是业界常态；比如国际货代公司同时代理国际快递、国际空运、国际海运等业务。因为计价方式差异，在系统融合综合报价上有诸多不便。传统开发方式，是把不同的算法，分离成独立模块处理。客户在查询报价时，要么根据业务类型选择查询报价，不能全面直观的了解运价体系；要么查询时间比较长。</p>
                                <p>   根据类型查询，海运只能查海运的价格，空运只能查空运的价格…不能把所有类型的运费计算结果集中展示，客户很难直观了解比较，选择优势渠道。</p>
                                <p>
                                    查询时间比较长的原因，是由系统在执行计算过程中，需要在多个运费计算模块中切换，最终需要汇总数据。需要经过一个比较长的计算过程，对服务器压力非常大。


                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
       
        
        <div class="mt-3 me-3">
                <strong style="color: burlywood;">*声明：本文部分配图来源于网络,相关版权归原作者所有,如有侵权,请联系我们删除,谢谢!</strong>
        <hr/>
              <span class="d-inline-block align-middle text-muted fs-sm me-3 mt-1 mb-2">联系方式：</span>
              <a class="btn-social bs-facebook me-2 mb-2" style="width: auto ;" href="#">
                <i class="ci-facebook">QQ：320637032</i>
              </a>
              <a class="btn-social bs-twitter me-2 mb-2" style="width: auto ;" href="#">
                <i class="ci-twitter">微信：Luo11395</i>
              </a>
            </div>
    </div>

    
</template>