<template>
  <div class="container" >
    <mt-swipe :auto="4000" :continuous='Continuous' v-show="!isShowLoading" >
    <mt-swipe-item v-for="(item,index) of items" :index="index" :key="index" @click.native="handleitemClick(item.id)">
    <img :src="item.images.large"  :class="{Imgheight : isImgExpend}">
    <mt-button  v-if="(index==items.length-1 && isShowButton)"
                @click="handleClick" 
                class="button" :plain="true">
                开始体验
                </mt-button>
    </mt-swipe-item>
    </mt-swipe>
    <div v-show="isShowLoading" class="spinner">
      <mt-spinner type="fading-circle"></mt-spinner>
    </div>
    </div>
</template>
  
    
<script>
  import { Swipe, SwipeItem ,Button, Spinner} from 'mint-ui'
  import axios from "axios"
  export default{
      props:{
          isShowButton:{
              type:Boolean,
              required:true
          },
          imgCount:{
              type:Number,
              default:5
          },
          isImgExpend:{
              type:Boolean,
              required:true
          },
          Continuous:{
              type :Boolean,
              default:false
          },
          enableClick:{
              type: Boolean,
              required:true
          }
      },
     data:()=>({
       items:[],
       isShowLoading:true
        }),
        components:{
          [Button.name]:Button,
          [Swipe.name]:Swipe,
          [SwipeItem.name]:SwipeItem,
          [Spinner.name]:Spinner
        },
    methods:{
        handleClick(){
            this.$router.replace({
                name:"index"
            })
        },
        handleitemClick(id){
          if( this.enableClick ){
            this.$router.push({
              name:'detail',
              query:{
                  id
              }
          })
          }
          
        }
    },

    mounted(){
      
      axios.get("/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count="+this.imgCount)
      .then((result)=>{
         this.items=result.data.subjects
         this.isShowLoading=false
        //console.log(result)
      })
    }
  }
</script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.container{
  height: 100%;
  width: 100%;
  position: relative;
  img{
    width: 100%;
  }
  .Imgheight{
      height:100%;
  }
  .button{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 20%;
  color:azure;
  }
  .spinner{
  height: 100%;
  @include flexbox();
  @include align-items(center);
  @include justify-content(center);
} 
}
</style>