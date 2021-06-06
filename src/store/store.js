import { createStore } from 'vuex'

const state = {
    counter: 0
}

const mutations = {
    increment: (state) => state.counter++
}

export default createStore({
    state,
    mutations
})