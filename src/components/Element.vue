<script setup lang="ts">
import { inject } from "vue";
import { ArrayElement } from "../models";
defineProps<{
  number: ArrayElement
}>();

const arrayLength: number = inject("arraySize") || 0;
</script>

<template>
  <span
    class="element"
    :class="{
      'bg-indigo-600 text-white': !number.isSelected && !number.isSorted,
      'bg-orange-300': number.isSelected,
      'bg-green-300': number.isSorted,
    }"
    :style="{ height: ((number.value / arrayLength) * 100) + 5 + '%' }"
  >
    <span v-if="arrayLength <= 40">{{ number.value }}</span>
  </span>
</template>

<style scoped>
.element {
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.selected-element {
  background-color: #fac898 !important;
}
.sorted-element {
  background-color: #a8e6cf;
}
</style>
