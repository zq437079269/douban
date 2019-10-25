<template>
        <div class="yo-header">
            <h2 class="title">{{title}}</h2>
            <span class="regret yo-ico" v-show="isShowheard" @click="handleClickBack">&#xf07d;</span>
        </div>
</template>

<script>
import {mapState , mapMutations} from 'vuex'
export default {
    name:"",
    props:{
        isShowheard:{
            type:Boolean,
            required:true
        }
    },
    data:()=>({

    }),
    methods:{
        handleClickBack(){
            this.$router.back()
        },
        ...mapMutations(['changeTitle'])
    },
    components:{

    },
    computed:{
        ...mapState(['title'])
    },
    created(){
        this.changeTitle('')
    }
    
}
</script>

<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
@import "@/style/usage/fragment/yo-header.scss";
    @include yo-header(
        $bgcolor:#40586b ,
        $border-color: #40586b,
        $item-ico-color:#fff
    )

</style>