<script setup lang="ts">
import { ref } from 'vue';

import { bubbleSort } from '../algorithms/bubble-sort';
import Element from './Element.vue';
import { shuffleArray } from './utils';

const props = defineProps<{ size: number }>();
const shuffledArray = shuffleArray([...Array(props.size).keys()]);
let array = ref(shuffledArray);
let arraySize = ref(props.size);

const generateNewArray = (size: number): void => {
  const newArray = [...Array(size).keys()];
  array.value = shuffleArray(newArray);
}

const sortArray = async (): Promise<void> => {
  const sortedArray = await bubbleSort(array);
}
</script>

<template>
  <h1>Array Visualizer - size {{ arraySize }}</h1>
  <button @click="generateNewArray(size)">Generate new</button>
  <button @click="sortArray()">Sort & Visualize</button>
  <input type="number" v-model="arraySize" @change="generateNewArray(arraySize)" />
  <div class="array-container">
    <Element v-for="element in array" :value="element" />
  </div>
</template>

<style scoped>
.array-container {
  margin-top: 20rem;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  height: 20vh;
  display: flex;
  align-items: flex-end;
  /* justify-content: flex-end; */
}
</style>
