<template>
  <div>
    <div>watchEffect</div>
    <div>
      <button @click="handleAdd">Count: {{ count }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref,watchEffect } from "vue";
// 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
let count = ref(0);

function handleAdd() {
  count.value++;
}
const stop= watchEffect(()=>{
    console.log(count.value)
})

</script>
