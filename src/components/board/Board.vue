<template>
  <div class="board-container" id="board-scorll">
      <div> 
      <div>
    <swiper 
  :isImgExpend="false"
  :isShowButton="false"
  :Continuous="true">
  </swiper>
      </div>
  <list></list>
      </div>
    </div>
</template>
     
<script>
import Swiper from '@/components/common/Swiper.vue'
import List from '@/components/board/List.vue'
import BScroll from 'better-scroll'
export default {
  name:"board",
  components:{
    Swiper,
    List
  },
   mounted(){ 
    new BScroll("#board-scorll")
  }
}
</script>
<style lang="scss" scoped>
    .board-container{
      height:100%;
      >div{
        >div:first-child{
           height: 2.4rem;
        }
       
      }
        
        img{
            width:100%;
            //  height:80%;
        }
        
    }
</style>