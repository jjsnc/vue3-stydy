<template>
  <div>
    
    <h1>{{ $translate("greetings.hello") }}</h1>
    <j v-model:title="testValue" v-model:lastName="name" ></j>  {{testValue}} {{name}}
   </div>
</template>

<script setup>

import J from './j.vue'
import { inject,ref } from "vue";

const i18n = inject("i18n");

let  testValue = ref('test');
let  name = ref('lastName');

console.log(i18n.greetings.hello);
</script>
