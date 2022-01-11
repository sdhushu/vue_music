<script setup lang="ts">
import { computed } from 'vue-demi';
import {useCounterStore} from '../store';
const counter = useCounterStore()
let count = computed(()=> counter.count)
// const increment =  () => { counter.count++ }
</script>

<template >
    <div class="test">
        1233
        {{count}}
        <van-button type="primary" @click="counter.increment">点击增加</van-button>
    </div>
</template>

<style lang="less" scoped>
.test {
    width: 750px;
    height: 400px;
    background-color: antiquewhite;
}
</style>