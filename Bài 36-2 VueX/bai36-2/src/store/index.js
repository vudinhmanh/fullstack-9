import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const storeData = {
    state:{
        list:[
            {id:1, tittle:'Viec 1', completed:false},
            {id:2, tittle:'Viec 2', completed:false},
            {id:3, tittle:'Viec 3', completed:false},
            {id:4, tittle:'Viec 4', completed:false},
            {id:5, tittle:'Viec 5', completed:false}
        ]
    }
}
const store = new Vuex.Store(storeData)
export default store