
<template>
    <input v-focus:foo.bar="baz" />
  </template>
<script setup>
import {ref} from 'vue'

let baz = ref('hello')
// 在模板中启用 v-focus

</script>
