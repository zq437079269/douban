<template>
     
    <div class="detail-container"> 
       <my-heard :isShowheard="true" ></my-heard>         
        <div 
        :style="{
            'background-image':bgUrl,
            'background-size':'cover',  
            opacity:0.1
        }">
        </div>      
        <div class="detail-scroll" >
            <div v-if="isShowInfo">
                
                <section>
                    <figure> 
                        <img :src="data.images.large" alt="">
                    <figcaption>{{data.title}}</figcaption>
                    </figure>
                        <p>评分：{{data.rating.average}}</p>
                        <p>导演：{{data.directors[0].name}}</p>
                        <p>主演：<span v-for="v of data.casts" :key="v.id">{{v.name}}</span></p>               
                    </section>
                    <section>
                        <h2>摘要：</h2>
                        <p>{{data.summary}}</p>
                </section>
                
            </div>
        </div>
        
    </div>
</template>

<script>
    import {Indicator} from 'mint-ui'
    import {mapMutations} from 'vuex'
    import BScroll from 'better-scroll'
    import MyHeard from  '@/components/common/MyHeard.vue'
    import $ from 'axios'
    export default{
        name:'Details',
        data:()=>({
            bgUrl:"url()",
            data:{},
            isShowInfo:false
        }),
        components:{
            MyHeard
        },
        methods:{
            ...mapMutations(['changeTitle'])
        },
        mounted(){
            Indicator.open()
           $.get(`/v2/movie/subject/${this.$route.query.id}`)
            .then((result)=>{
            this.isShowInfo=true           
            this.data=result.data
            // console.log(this.data)
            this.bgUrl='url('+result.data.images.large+')'
            this.$nextTick(()=>{
                new BScroll(".detail-scroll")
            })          
            Indicator.close()
            this.changeTitle(result.data.title)
             //console.log(this.changeTitle);
        })
        }
    }
 </script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.detail-container{
    @include flexbox();
    @include flex-direction(column);
    height:100%;
    position: relative;
>div:nth-child(2){
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
>div:nth-child(3){
    @include flex();
    width: 100%;
    // z-index: 200;
    overflow: hidden;
    //  position: absolute;
    >div{
        padding:.4rem .2rem;
        section:first-child{
            figure{
                img{
                    width: 3.35rem;
                    height: 4rem;
                }
                figcaption{
                    font-size: .2rem;
                    color: #444;
                    margin: .2rem 0;
                    text-align: center;
                }
            }
            p{
                font-size: .12rem;
                color: #888;
                line-height: .2rem;
            }
        }
        section:last-child{
            h2{
                font-size: .16rem;
                line-height: .6rem;
            }
            p{
                font-size: .12rem;
                color: #666;
                padding: .2rem;
                padding-top:0;
            }
        }
    }
}
}

</style>