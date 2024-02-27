import { Ref } from 'vue';
import { swap } from '../utils';

export async function selectionSort(array: Ref<number[]>, latency = 100) {
  for (let i = 0; i < array.value.length; i++) {
    let currentMinIndex = i;
    for (let y = i + 1; y < array.value.length; y++) {
      if (array.value[currentMinIndex] > array.value[y]) {
        currentMinIndex = y;
      }
    }
    if (i !== currentMinIndex) {
      swap(array, i, currentMinIndex);
      await new Promise(r => setTimeout(r, latency));
    }
  }
  return array;
}
