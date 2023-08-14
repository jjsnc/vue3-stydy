<script setup>
import { computed } from "vue";

const props = defineProps(["title", "lastName", "titleModifiers"]);
const emit = defineEmits({
  "update:title": null,
  "update:lastName": null,
  submit: ({ email, password }) => {
    if (email && password) {
      return true;
    } else {
      console.warn("Invalid submit event payload!");
      return false;
    }
  },
  click: null,
});

function emitValue(e) {
  let value = e.target.value;
  if (props.titleModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emit("update:title", value);
}

const myName = computed({
  get() {
    return props.lastName;
  },
  set(value) {
    emit("update:lastName", value);
  },
});

function submitForm(email, password) {
  emit("submit", { email, password });
}
</script>

<template>
  <input type="text" :value="title" @input="emitValue" />

  <el-button @click="submitForm('zhuowangyi@163.com', '2013')"
    >测试效验按钮</el-button
  >
</template>
