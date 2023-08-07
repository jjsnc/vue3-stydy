<template>
  <div>
    I
    <h1>{{ $translate("greetings.hello") }}</h1>
  </div>
</template>

<script setup>
import { inject } from "vue";

const i18n = inject("i18n");

console.log(i18n.greetings.hello);
</script>
