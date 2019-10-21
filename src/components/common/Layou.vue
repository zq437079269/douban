<template>
  <div class="index-container">
  <div>
    <router-view/>
  </div>
   <mt-tabbar v-model="selected">
  <mt-tab-item v-for="(v,i) of tabbars" @click.native="handelClick(v.path)" :id='v.id' :key="i">
    <i slot="icon" class="yo-ico" v-html="v.icon"></i>
    {{v.name}}
  </mt-tab-item>
</mt-tabbar>

  </div>
</template>

<script>
// @ is an alias to /src
// import List from '@/components/Board/List.vue'
import {Tabbar , TabItem} from "mint-ui"
export default {
  name: 'layou',
  data (){
    return {
      selected:"t1",
      tabbars:[
        {
          id : "t1",
          name:"榜单",
          icon:"&#xe504",
          path:"/index/board"
        },
        {
          id : "t2",
          name:"搜索",
          icon:"&#xe87c;",
          path:'/index/search'
        },
        {
          id : "t3",
          name:"我的",
          icon:"&#xe626;",
          path:'/index/profil'
        }
      ]
    }
  },
  components:{
    [Tabbar.name]:Tabbar,
    [TabItem.name]:TabItem
  },
  methods:{
    handelClick(path){
     // console.log(path);
      
      this.$router.push({
        path
      })
      
    }
  }
}
</script>
<style lang="scss" scoped >
  @import "@/style/usage/core/reset.scss";
  @font-face {
  font-family: 'yofont'; // ?
  src: 
      url('../../assets/iconfons/iconfont.woff') format('woff'),
      url('../../assets/iconfons/iconfont.ttf') format('truetype'),
}

  .index-container{
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    >div:first-child{
      @include flex();
      // overflow-x: hidden;
      // overflow: auto;
      // overflow: scroll;
      overflow: hidden;
      margin-bottom: 55px;
      width:100%;
    }
    a{
      color:#666;
    }
    span{
      font-size: 18px;
    }
  }
</style>