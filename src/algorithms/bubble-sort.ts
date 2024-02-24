import { Ref } from 'vue';
import { swap } from '../utils';

export async function bubbleSort(array: Ref<number[]>) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.value.length - 1 - counter; i++) {
      await new Promise(r => setTimeout(r, 0.1));
      if (array.value[i] > array.value[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
}
