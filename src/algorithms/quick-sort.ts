import { Ref } from "vue";
import { swap } from "../utils";
import { ArrayElement } from "../models";

export async function quickSort(array: Ref<ArrayElement[]>, latency = 50) {
  await quickSortHelper(array, 0, array.value.length - 1, latency);
  return array;
}

async function quickSortHelper(array: Ref<ArrayElement[]>, left: number, right: number, latency: number) {
  const pivot = array.value[left]?.value;
  const comparedElement = array.value[left] || {};
  comparedElement.isSelected = true;
  let swappedNumbers = 0;

  if (right <= left) {
    comparedElement.isSelected = false;
    comparedElement.isSorted = true;
    return;
  }

  for (let i = left + 1; i <= right; i++) {
    if (array.value[i].value < pivot) {
      swappedNumbers++;
      await swap(array, i, left + swappedNumbers);
      await new Promise(r => setTimeout(r, latency));
    }
  }

  const pivotIndex = left + swappedNumbers;
  await swap(array, left, pivotIndex);

  comparedElement.isSelected = false;
  comparedElement.isSorted = true;

  await quickSortHelper(array, left, pivotIndex - 1, latency);
  await quickSortHelper(array, pivotIndex + 1, right, latency);
}
