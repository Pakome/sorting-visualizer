import { Ref } from 'vue';
import { swap } from '../utils';

export async function bubbleSort(array: Ref<number[]>, latency = 0.1) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.value.length - 1 - counter; i++) {
      await new Promise(r => setTimeout(r, latency));
      if (array.value[i] > array.value[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
}
