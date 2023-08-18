<template>
  <div>

    <ul>
      <li v-for="item in list" ref="itemRefs">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import J from "./j.vue";
import { ref, onMounted, inject } from "vue";

const list = ref([1, 2, 3]);

const itemRefs = ref([]);

const i18n = inject("i18n");

let testValue = ref("test");
let name = ref("asf");

let age = ref("18");
console.log(i18n.greetings.hello);

function handleSubmit(email, password) {
  console.log(email, password);
}

onMounted(() => {
  console.log(itemRefs.value[0])
  alert(itemRefs.value.map((i) => i.textContent));
});
</script>
