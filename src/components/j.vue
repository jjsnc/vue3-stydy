<script setup>

import {computed} from 'vue';


const props = defineProps(['title','lastName'])
const emit = defineEmits(['update:title','update:lastName'])
const value = computed({
  get() {
    return props.title
  },
  set(value) {
    emit('update:title', value)
  }
})

const lastName = computed({
  get() {
    return props.lastName
  },
  set(value) {
    emit('update:lastName', value)
  }
})


</script>

<template>
  <input v-model="value" />

  <input
    type="text"
    v-model="lastName"
  />
</template>
