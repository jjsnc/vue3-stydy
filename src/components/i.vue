<template>
  <div>
    <h1>{{ $translate("greetings.hello") }}</h1>
    <j v-model:title.capitalize="testValue" v-model:lastName="name" @submit="handleSubmit"></j>
    {{ testValue }} {{ name }}
  </div>
</template>

<script setup>
import J from "./j.vue";
import { inject, ref } from "vue";

const i18n = inject("i18n");

let testValue = ref("test");
let name = ref("asf");

let age = ref("18");
console.log(i18n.greetings.hello);


function handleSubmit(email,password){
  console.log(email,password)
}
</script>
