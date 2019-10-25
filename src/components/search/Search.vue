<template>
    <div>
      <ul>
          <li v-for="v of in_theaters" :key="v.id">{{v.title}}</li>
      </ul>
    </div>
</template>

<script>
    export default{
        name:'Search',
        data(){
            return{
            }
        },
        computed:{
            in_theaters(){
                return this.$store.state.movielist.in_theaters.subjects
            }
        },
        created(){
            this.$store.commit('changeTitle','搜索')
            //this.$store.dispatch('getData')
            console.log(this.$store.state.movielist);
            
        },
        updated(){
            console.log(this.$store.state.movielist);
        }
    }
</script>