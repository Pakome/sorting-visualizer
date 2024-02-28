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
      'selected-element': number.isSelected,
      'sorted-element': number.isSorted,
    }"
    :style="{ height: 20 + number.value * 10 + 'px' }"
  >
    <span v-if="arrayLength <= 40">{{ number.value }}</span>
  </span>
</template>

<style scoped>
.element {
  width: 100%;
  border-radius: 5px;
  background-color: #5aa9e6;
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
