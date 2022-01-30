<script setup lang="ts">
import { ref } from 'vue';

import { bubbleSort } from '../algorithms/bubble-sort';
import Element from './Element.vue';
import { shuffleArray } from './utils';

const props = defineProps<{ size: number }>();
const shuffledArray = shuffleArray([...Array(props.size).keys()]);
let array = ref(shuffledArray);
let arraySize = ref(props.size);
let isComputing = false;

const generateNewArray = (size: number): void => {
  if (isComputing) {
    return;
  }
  const newArray = [...Array(size).keys()];
  array.value = shuffleArray(newArray);
}

const sortArray = async (): Promise<void> => {
  isComputing = true;
  await bubbleSort(array);
  isComputing = false;
}

window.addEventListener('keyup', (ev) => {
  if (isComputing) {
    return;
  }
  if (ev.key === 'Enter') {
    sortArray();
  }
  if (ev.key === 'g') {
    generateNewArray(arraySize.value);
  }
  if (ev.key === 'ArrowUp') {
    generateNewArray(arraySize.value++);
  }
  if (ev.key === 'ArrowDown') {
    if (arraySize.value < 2) {
      return;
    }
    generateNewArray(arraySize.value--);
  }
  if (ev.key === 'ArrowRight') {
    generateNewArray(arraySize.value += 10);
  }
  if (ev.key === 'ArrowLeft') {
    if (arraySize.value < 11) {
      return;
    }
    generateNewArray(arraySize.value -= 10);
  }
});

// TODO: Add generation animation
// TODO: Add color to currently selected element
// TODO: Format display

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
}
</style>
