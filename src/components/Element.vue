<script setup lang="ts">
defineProps<{
  number: {
    showNumber: boolean;
    isSorted: boolean;
    isSelected: boolean;
    value: number;
  };
}>();
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
    <!-- <span>{{ number.value }}</span> -->
  </span>
</template>

<style scoped>
.element {
  width: 100%;
  /* border: 1px solid #ffd3b6; */
  border-radius: 5px;
  background-color: #5AA9E6;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.selected-element {
  background-color: #fac898;
}
.sorted-element {
  background-color: #a8e6cf;
}
</style>
