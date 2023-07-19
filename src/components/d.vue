<template>
  <div>
    {{ A2 }}
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  watchEffect,
  onRenderTracked,
  onRenderTriggered,
} from "vue";

const A0 = ref(0);
const A1 = ref(1);

const A2 = computed(() => A0.value + A1.value, {
  onTrack(e) {
    // 当 count.value 被追踪为依赖时触发
    debugger;
  },
  onTrigger(e) {
    // 当 count.value 被更改时触发
    debugger;
  },
});

// 访问 plusOne，会触发 onTrack
// console.log(A2.value)

// // 更改 A0.value，应该会触发 onTrigger
// A0.value++

// const count = ref(0);

// watchEffect(() => {
//   document.body.innerHTML = `计数:${count.value}`;
// });

// count.value++;

// onRenderTracked((event) => {
//   debugger;
// });

// onRenderTriggered((event) => {
//   debugger;
// });
</script>
