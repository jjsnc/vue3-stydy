<script setup>

import {computed} from 'vue';


const props = defineProps(['title','lastName','titleModifiers'])
const emit = defineEmits(['update:title','update:lastName'])

console.log(props.titleModifiers)
function emitValue(e) {
  let value = e.target.value
  if (props.titleModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:title', value)
}



const myName = computed({
  get() {
    return props.lastName
  },
  set(value) {
    emit('update:lastName', value)
  }
})


</script>

<template>
  <input type="text" :value="title" @input="emitValue" />


</template>
