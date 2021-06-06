<template>
  <div>Child Counter: {{ childCounter }} </div>
  <!-- <button @click="increment">Increment Counter</button> -->
  <button @click="incrementStoreCounter">Increment Counter</button>
</template>
<script>
import store from '../store/store'
export default {
    data: () => ({
        childCounter: 0
    }),
    props: {
        counter: {
            type: Number
        }
    },
    created() {
        this.childCounter = this.counter
    },
    computed: {
        storeCounter() {
            return store.state.counter
        }
    },
    methods: {
        increment() {
            this.childCounter++
            this.$emit('update:counter', this.childCounter)
        },
        incrementStoreCounter() {
            store.commit('increment')
        }
    }
}
</script>