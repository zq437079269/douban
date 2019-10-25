<template>
    <div class="list-container">
        <div v-if="!isShowLoading">
            <h3 @click="handleClick()">
            <span> {{title}} </span>
                <span class="yo-ico" >&#xf07f;</span>
            </h3>
            <div :id="`list-scroll-${scrollId}`">
                <div>
                    <figure v-for="(movie) of movielist" :key="movie.id" @click="handitenClick(movie.id)">
                        <img :src="movie.images.large" width="90" height="125" />
                        <figcaption>{{movie.title}}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    <div v-if="isShowLoading" class="spinner">
      <mt-spinner type="fading-circle"></mt-spinner>
    </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import $ from 'axios'
import {Spinner} from 'mint-ui'
export default {
    name:"MovieList",
    props:{
        movietype:{
            type:String,
            required:true
        }
    },
    data:()=>({
        movielist:[],
        title:'',
        scrollId:'new Date().getTime()',
        isShowLoading:true
    }),
    components:{
        [Spinner.name]:Spinner
    },
    methods:{
        genRandom(){
            return new Date().getTime()+Math.ceil(Math.random()*1000)
        },
        handleClick(){
            
            this.$router.push({
                name:"mvlist",
                query:{
                    uri:this.movietype
                }
            })
        },
        handitenClick(id){
            this.$router.push({
                name:"detail",
                query:{
                    id
                }
            })
        }
    },
    mounted(){
        // let changeid = this.genRandom()
        // this.scrollId = changeid
        // this.$nextTick(function(){
        //     new BScroll('#list-scroll-'+this.scrollId,{
        //         scrollX:true
        //     })
        // })
        $.get(`/v2/movie/${this.movietype}?apikey=0df993c66c0c636e29ecbb5344252a4a`)
        .then((result)=>{
            this.movielist=result.data.subjects
            this.title=result.data.title
            this.isShowLoading=false
            // console.log(this.movielist);
            
        })
        .catch(()=>{
            this.isShowLoading=true
        })
    },
    watch:{
        //被动渲染页面 会触发updated钩子
        //this.$forceUpdate()
        //nextTick;
        //将回调延迟到下次DOM更新循环后执行
        //在修改数据之后立即使用它，然后等待DOM更新。
        //它跟全局方法Vue.nextTick一样，不同的是回调的this自动绑定到调用它的实例上。
        isShowLoading(){
               let changeid = this.genRandom()
        this.scrollId = changeid
        this.$nextTick(function(){
            new BScroll('#list-scroll-'+this.scrollId,{
                scrollX:true,
                click:true
            })
        })
        }
    }
}
</script>>
<style lang="scss" scoped>
    @import '@/style/usage/core/reset.scss';
    .list-container{
        height: 1.9rem;
        padding :.1rem;
        background:#fff;
        margin-top: 0.2rem;
        >div{
            h3{
                font-size:12px;
                transform:font scale(0.86);
                display:flex; 
                justify-content:space-between;
            }
            >div{
                @include flexbox();
                overflow: hidden;
                // h3{
                //     @include flex();
                //     font-size:12px;
                //     transform:font scale(0.86);
                //     justify-content:space-between;
                //     display: flex;
                //     }
                figcaption{
                    font-size:12px;
                    transform:font scale(0.86);
                }
                figure{
                    width: 0.9rem;
                    margin:0.05rem;
                    figcaption{
                        @include ellipsis();
                    }
                }
                >div{
                    @include flexbox();
                    width:max-content;
                }
                
                }
                &.spinner{
                    height: 100%;
                    @include flexbox();
                    @include align-items(center);
                    @include justify-content(center);
            }
        }
    }
</style>