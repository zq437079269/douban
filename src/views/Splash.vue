<template>
  <!-- <div class="about">
    <h1>Splash</h1>
  </div> -->
  <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  methods:{
    handleClick(){
      this.$router.replace({ // replace 不可退回 push可退回
        name:"index"
      })
    }
  },
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem 
  }
}
</script>>