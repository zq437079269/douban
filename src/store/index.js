import Vue from 'vue'
import Vuex from 'vuex'
import {CHANGETITLE,SETDATA} from './mutation-types'
import {GETDATA} from './action.types'

Vue.use(Vuex)
import $ from 'axios'
export default new Vuex.Store({
    state: {
        title: '',
        movielist:{
            in_theaters:[],
            coming_soon:[],
            top250:[]
        }
    },
    mutations: {
        [CHANGETITLE](state, payload){
            state.title=payload
        },
        [SETDATA](state, payload){
            state.movielist=payload
        }
    },
    actions:{
        [GETDATA]({commit}){
           const in_theaters= $.get('/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then((result)=>{
                return result
            })
            const coming_soon = $.get('/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a')
                .then((result) => {
                    return result
                })
            const top250 = $.get('/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a')
                .then((result) => {
                    return result
                })
                Promise.all([in_theaters , coming_soon , top250])
                .then((result)=>{
                    commit(SETDATA,{
                        in_theaters: result[0].data,
                        coming_soon: result[1].data,
                        top250: result[2].data,

                    })
                })
        }
    }
})
