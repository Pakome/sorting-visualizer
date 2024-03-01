<script setup lang="ts">
import Array from "./Array.vue";
import Comparison from "./Comparison.vue";

const DEFAULT_ARRAY_SIZE = 40;
</script>

<template>
  <Array :size="DEFAULT_ARRAY_SIZE" />
  <!-- <Comparison /> -->
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
