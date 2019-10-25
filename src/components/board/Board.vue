<template>
  <div class="board-container" id="board-scorll">
      <div> 
      <div>
    <swiper 
  :isImgExpend="false"
  :isShowButton="false"
  :Continuous="true"
  :enableClick="true">
  </swiper>
      </div>
  <list></list>
      </div>
    </div>
</template>
     
<script>
import Swiper from '@/components/common/Swiper.vue'
import List from '@/components/board/List.vue'
import {mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name:"board",
    data(){
      return{

      }
    },
    methods:{
        ...mapMutations(['changeTitle'])
    },
    components:{
      Swiper,
      List
    },
      created(){
        this.changeTitle('榜单')
      },
    mounted(){ 
        new BScroll("#board-scorll",{
        click:true
      })
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