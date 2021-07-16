<template>
  <a class="btn-scroll-top" :class="{ show:isShowTopBtn  }" href="#top" data-scroll>
    <span class="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
    <i class="btn-scroll-top-icon ci-arrow-up"></i>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BackToTopButton',
  data(){
    return {
      isShowTopBtn:false
    }
      
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>3000){
       this.isShowTopBtn=true;
      }
      else{
        this.isShowTopBtn=false;
      }
    },
    //离开该页面需要移除这个监听的事件，不然会报错;
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop);
    }

  }

});

</script>


<!-- <script>
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
 methods: {
    //监听回到顶部按钮距浏览器顶部的距离，滚动的距离如果大于浏览器高度时，设置 toTop 为true,否则就是false;
    scrollToTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log("距离顶部的距离:" + scrollTop);
    },
    scrollToTop(el) {
      let topBtn = document.getElementById("to-top-btn");
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    },
    //离开该页面需要移除这个监听的事件，不然会报错;
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop);
    }
    }
</script> -->