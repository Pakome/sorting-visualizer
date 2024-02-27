<script setup lang="ts">

defineProps<{ value: number }>()

</script>

<template>
  <span class="element" :style="{ height: 20 + (value * 10) + 'px' }"></span>
</template>

<style scoped>
.element {
  width: 100%;
  border: 1px solid #FFD3B6;
  border-radius: 5px;
  background-color: #A8E6CF;
}
</style>
