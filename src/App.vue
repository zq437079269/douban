<template> 
    <router-view/>
</template>

<script>
import  {GETDATA} from './store/action.types'
import {mapActions} from 'vuex' 
export default {
    created(){
        this[GETDATA]()
    },
    methods:{
        ...mapActions([GETDATA])
        // getData(){
        //     this.$store.dispatch(GETDATA)
        // }
    }
}
</script>

<style lang="scss" >
@import "./style/usage/core/reset.scss"
</style>
