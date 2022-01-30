<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ value: number }>()

const count = ref(0)
</script>

<template>
  <span class="element" :style="{ height: 20 + (value * 10) + 'px' }"></span>
</template>

<style scoped>
.element {
  width: 1rem;
  border: 1px solid #FFD3B6;
  border-radius: 5px;
  background-color: #A8E6CF;
}
</style>
