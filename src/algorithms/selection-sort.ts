import { Ref } from 'vue';
import { swap } from '../utils';
import { ArrayElement } from '../models';

export async function selectionSort(array: Ref<ArrayElement[]>, latency = 200) {
  const lat = latency - array.value.length * 6;

  for (let i = 0; i < array.value.length; i++) {
    let currentMinIndex = i;
    const selectedElement = array.value[i];
    selectedElement.isSelected = true;

    for (let y = i + 1; y < array.value.length; y++) {
      const comparedElement = array.value[y];
      comparedElement.isSelected = true;
      await new Promise(r => setTimeout(r, lat));

      if (array.value[currentMinIndex].value > array.value[y].value) {
        comparedElement.isSelected = false;
        currentMinIndex = y;
      }

      comparedElement.isSelected = false;
    }

    selectedElement.isSelected = false;
    if (i !== currentMinIndex) {
      await swap(array, i, currentMinIndex);
    }
    array.value[i].isSorted = true;
  }
  return array;
}
