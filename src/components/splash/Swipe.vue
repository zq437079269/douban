<template>
  <swiper 
  :imgCount="6"
  :isImgExpend="true"
  :isShowButton="true">
  </swiper>
</template>

<script>
import Swiper from '@/components/common/Swiper.vue'
export default {
  name:"swipe",
  components:{
    Swiper
  }
}
</script>