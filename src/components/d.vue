<template>
  <div>
  123
  </div>
</template>

<script setup lang="ts">


function simpleDecorator(
  value:any,
  context:any
) {
  console.log(`hi, this is ${context.kind} ${context.name}`);
  return value;
}

@simpleDecorator(27,{kind:'13',name:'damon'})
class A {} // "hi, this is class A"


</script>
