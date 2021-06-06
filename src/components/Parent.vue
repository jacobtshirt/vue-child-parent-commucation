<template>
    <div>Parent Counter: {{ storeCounter }}</div>
    <!-- <child v-model:counter="counter" /> -->
    <child />
</template>
<script>
import store from '../store/store'
import Child from './Child'
export default {
    components: {
        Child,
    },
    data: () => ({
        counter: 0,
    }),
    computed: {
        storeCounter() {
            return store.state.counter
        },
    }
}
</script>