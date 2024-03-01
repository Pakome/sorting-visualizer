<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import {
  PlayCircleIcon,
  SparklesIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/vue/20/solid";
import { onMounted, provide, ref } from "vue";
import Modal from "./Modal.vue";

import algorithms from "../algorithms";
import { ArrayElement, SortingAlgorithm } from "../models";
import { shuffleArray } from "../utils";
import Element from "./Element.vue";

const props = defineProps<{ size: number }>();

const array = ref<ArrayElement[]>([]);
const arraySize = ref(0);
const selectedAlgo = ref(algorithms[0]);
const isRunning = ref(false);
const showModal = ref(false);

onMounted(() => {
  generateNewArray(props.size);
  arraySize.value = array.value.length;
});

function generateNewArray(size: number | string) {
  size = Number(size);
  const newArray = [...Array(size).keys()].map((num) => ({
    isSorted: false,
    isSelected: false,
    value: num + 1,
  }));
  array.value = shuffleArray(newArray);
}

async function sortArray() {
  isRunning.value = true;
  await selectedAlgo.value.run(array as any);
  isRunning.value = false;
}

function onClickSeePerf() {
  showModal.value = true;
}

function onModalClose() {
  showModal.value = false;
}

provide("arraySize", arraySize);

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
  <div class="array-visualizer">
    <!-- <h1 class="text-3xl mb-2">Sorting Visualizer</h1> -->
    <div class="flex justify-center items-center">
      <button
        @click="sortArray()"
        :disabled="isRunning"
        type="button"
        class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Start
        <PlayCircleIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
      <button
        @click="generateNewArray(arraySize)"
        type="button"
        class="inline-flex items-center gap-x-2 ml-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        New array
        <ArrowPathRoundedSquareIcon
          class="-mr-0.5 h-5 w-5"
          aria-hidden="true"
        />
      </button>

      <div class="ml-12 w-64">
        <label>Size and speed</label>
        <input
          id="range"
          type="range"
          class="block w-full py-2 mt-2 text-white bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          min="2"
          max="200"
          step="1"
          v-model="arraySize"
          @input="generateNewArray(arraySize)"
        />
      </div>
      <!-- <p>{{ arraySize }}</p> -->
    </div>

    <div class="array-container">
      <Element v-for="element in array" :number="element" />
    </div>

    <div class="container options-container">
      <div class="flex items-center justify-between">
        <h2 class="text-sm font-medium leading-6 text-gray-900">Algorithm</h2>
        <a
          href="#"
          class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
          @click.prevent="onClickSeePerf"
        >
          See performance specs
        </a>
      </div>

      <RadioGroup v-model="selectedAlgo" class="mt-2">
        <RadioGroupLabel class="sr-only">
          Choose an algorithm option
        </RadioGroupLabel>
        <div class="flex gap-4">
          <RadioGroupOption
            as="template"
            v-for="algo in algorithms"
            :key="algo.id"
            :value="algo"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                checked
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                  : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase cursor-pointer sm:flex-1',
              ]"
            >
              <RadioGroupLabel as="span">{{ algo.label }}</RadioGroupLabel>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>

  <Modal v-if="showModal" :algorithm="(selectedAlgo as SortingAlgorithm)" @close="onModalClose"></Modal>
</template>

<style scoped>
.array-visualizer {
  margin-left: 10%;
  margin-right: 10%;
}
.array-container {
  margin-top: 4rem;
  height: 75vh;
  display: flex;
  align-items: flex-end;
  gap: 2px;
}
</style>
