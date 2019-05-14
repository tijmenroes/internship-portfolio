import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        scrollPos: 0,
    },
    mutations: {
        increment (state) {
            state.count++
        },scrollPos(state, scrollPos){
            state.scrollPos = scrollPos
        }
    },
    getters : {
        //getState: state => state.counter
        getscrollPos: state => () => state.scrollPos,

    }
})
