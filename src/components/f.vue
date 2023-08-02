
<script setup>
import Modal from './Modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
      <template #body>
        <h3>custom body 内容</h3>
      </template>
      <template #footer>
        <h3>custom body 内容</h3>
      </template>
    </modal>
  </Teleport>
</template>

<style lang="scss">
.modal-body{ 
    color: #000;
}
.modal-footer{ 
    color: #000;
}
</style>