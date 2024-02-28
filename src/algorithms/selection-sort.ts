import { Ref } from 'vue';
import { swap } from '../utils';
import { ArrayElement } from '../models';

export async function selectionSort(array: Ref<ArrayElement[]>, latency = 100) {
  for (let i = 0; i < array.value.length; i++) {
    let currentMinIndex = i;
    const comparedElement = array.value[i];
    comparedElement.isSelected = true;
    for (let y = i + 1; y < array.value.length; y++) {
      if (array.value[currentMinIndex].value > array.value[y].value) {
        currentMinIndex = y;
      }
    }
    await new Promise(r => setTimeout(r, latency));
    comparedElement.isSelected = false;
    if (i !== currentMinIndex) {
      await swap(array, i, currentMinIndex);
    }
    array.value[i].isSorted = true;
  }
  return array;
}
