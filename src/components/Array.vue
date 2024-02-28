<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

import Element from "./Element.vue";
import algorithms from "../algorithms";
import { ArrayElement } from "../models";
import { shuffleArray } from "../utils";

const props = defineProps<{ size: number }>();

const array = ref<ArrayElement[]>([]);
const arraySize = ref(0);
const selectedAlgo = ref(algorithms[0]);
const isRunning = ref(false);

onMounted(() => {
  generateNewArray(props.size);
  arraySize.value = array.value.length;
});

function generateNewArray(size: number) {
  const newArray = [...Array(size).keys()].map(num => ({
    showNumber: false,
    isSorted: false,
    isSelected: false,
    value: num,
  }));
  array.value = shuffleArray(newArray);
};

async function sortArray() {
  isRunning.value = true;
  await selectedAlgo.value.run(array as any);
  isRunning.value = false;
};

window.addEventListener("keyup", (ev) => {
  if (isRunning.value) {
    return;
  }

  switch (ev.key) {
    case "Enter":
      sortArray();
      break;
    case "g":
      generateNewArray(arraySize.value);
      break;
    case "ArrowUp":
      generateNewArray(arraySize.value++);
      break;
    case "ArrowDown":
      if (arraySize.value < 2) {
        return;
      }
      generateNewArray(arraySize.value--);
      break;
    case "ArrowRight":
      generateNewArray((arraySize.value += 10));
      break;
    case "ArrowLeft":
      if (arraySize.value > 11) {
        generateNewArray((arraySize.value -= 10));
      }
      break;
    default:
      break;
  }
});
</script>

<template>
  <h1>Sorting Visualizer</h1>
  <button @click="sortArray()" :disabled="isRunning">Start</button>
  <button @click="generateNewArray(arraySize)" :disabled="isRunning">
    Regenerate
  </button>
  <input
    type="number"
    v-model="arraySize"
    @change="generateNewArray(arraySize)"
    :disabled="isRunning"
  />
  <select
    name="sorts"
    id="sort-select"
    v-model="selectedAlgo"
    :disabled="isRunning"
  >
    <option v-for="algo in algorithms" :value="algo">{{ algo.label }}</option>
  </select>
  <div :style="{ height: 20 + (array.length * 10) - 400 + 'px' }"></div>
  <div class="array-container">
    <Element v-for="element in array" :number="element" />
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
  gap: 2px
}
</style>
