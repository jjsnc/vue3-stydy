<template>
  <div>
    <div>hello</div>

    <div>
      <button @click="increment">Count: {{ state.count }}</button>
    </div>
    <div>
      <button @click="incrementCount">Count: {{ count }}</button>
    </div>
  </div>
</template>

<script setup>
import { watch, reactive, ref } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
// 监听一个getter 函数

watch(
  () => state.count,
  (count, prevCount) => {
    console.log(count, prevCount);
  }
);

// 侦听一个ref

const count = ref(0);

function incrementCount() {
  count.value++;
}

watch(count, (count, prevCount) => {
  console.log(count, prevCount);
});

// 监听多个数据源

watch(
  [() => state.count, count],
  ([newValue1, newValue2], [prevValue1, prevValue2]) => {
    console.log(newValue1, newValue2, prevValue1, prevValue2);
  }
);

//   当使用 getter 函数作为源时 需要手动开启深层监听

watch(
  () => state,
  (newValue, oldValue) => {
    console.log(newValue, oldValue, 333);
  },
  { deep: true }
);

// 当直接侦听一个响应式对象时，侦听器会自动启用深层模式

watch(state, (value) => {
  console.log(value, 666);
});
</script>
