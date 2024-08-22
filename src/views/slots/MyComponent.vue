<!-- MyComponent.vue -->
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useSlots, useAttrs } from "vue";

const slots = useSlots();
const attrs = useAttrs();

// 检查是否有 'header' 插槽
if (slots.header) {
  console.log("Header slot content is provided.");
}
console.log(attrs, "333");
</script>
