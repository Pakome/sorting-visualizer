<script setup lang="ts">
import algorithms from "../algorithms";
import { shuffleArray } from "./utils";
import Element from "./Element.vue";
import { Ref, reactive, ref, toRaw } from "vue";

const almostSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
const shuffledArray = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const inversedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// const algos = [algorithms.shift()];

// const arrayTypes = {
//   almostSorted:
//   random:
// };

let sortingAlgos = algorithms.map((algo) => {
  return {
    ...algo,
    arrayTypes: {
      shuffleArray: ref(structuredClone(shuffledArray)),
      almostSorted: ref(structuredClone(almostSortedArray)),
      inversedArray: ref(structuredClone(inversedArray)),
    },
  };
});

function runAll() {
  for (const algo of sortingAlgos) {
    for (const arrayTypeKey in algo.arrayTypes) {
      const arrayTypeValue = (algo.arrayTypes as any)[arrayTypeKey];
      algo.run!(arrayTypeValue, 200);
    }
  }
}

function resetAll() {
  for (const algo of sortingAlgos) {
    algo.arrayTypes = {
      shuffleArray: ref(structuredClone(shuffledArray)),
      almostSorted: ref(structuredClone(almostSortedArray)),
      inversedArray: ref(structuredClone(inversedArray)),
    };
  }
}
</script>

<template>
  <h1>Compare</h1>
  <button @click="runAll">Run all</button>
  <button @click="resetAll">Reset all</button>
  <table style="width: 100%">
    <tr>
      <th class="table-header">Algorithm</th>
      <th class="table-header">Shuffled</th>
      <th class="table-header">Almost sorted</th>
      <th class="table-header">Inversed</th>
    </tr>
    <template v-for="sortingAlgo in sortingAlgos">
      <tr>
        <td>
          {{ sortingAlgo.label }}
        </td>
        <template v-for="(value, name) in sortingAlgo.arrayTypes">
          <td>
            <div class="comparison-box">
              <div class="array-container">
                <Element v-for="element in value.value" :value="element" />
              </div>
            </div>
          </td>
        </template>
      </tr>
    </template>
  </table>
</template>

<style scoped>
.comparison-box {
  width: 100%;
}
.container {
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 72px;
}
.array-container {
  width: 100%;
  display: flex;
  align-items: flex-end;
}

td {
  border: 1px solid black;
}
.table-header {
  width: 25%;
}
</style>
