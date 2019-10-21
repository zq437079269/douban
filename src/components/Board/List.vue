<template>
    <div>
        <movie-list movietype="in_theaters" />
        <movie-list movietype="coming_soon" />
        <!-- <movie-list movietype="weekly" /> -->
        <movie-list movietype="top250" />
    </div>
</template>
<script>
import MovieList from '@/components/common/MovieList.vue'
export default {
    name:"list",
    components:{
        MovieList,
    }
}
</script>