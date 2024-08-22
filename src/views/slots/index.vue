<template>
  <MyComponent class="my-class" id="my-id" aria-label="description">
    <template #header>
      <p>Slot header 我是header区域的内容</p>
    </template>
    <template #default>
      <p>Slot content</p>
    </template>
  </MyComponent>
</template>

<script setup lang="ts">
import MyComponent from "./MyComponent.vue";
</script>
