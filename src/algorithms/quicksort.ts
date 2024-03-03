import { Ref } from "vue";
import { swap } from "../utils";
import { ArrayElement } from "../models";

let lat = 250;

export async function quicksort(array: Ref<ArrayElement[]>, latency = 300) {
  lat = latency - array.value.length * 7;
  await quicksortHelper(array, 0, array.value.length - 1, latency);
  return array;
}

async function quicksortHelper(array: Ref<ArrayElement[]>, left: number, right: number, latency: number) {
  const pivot = array.value[left]?.value;
  const selectedElement = array.value[left] || {};
  selectedElement.isSelected = true;
  let swappedNumbers = 0;

  if (right <= left) {
    selectedElement.isSelected = false;
    selectedElement.isSorted = true;
    return;
  }

  for (let i = left + 1; i <= right; i++) {
    const comparedElement = array.value[i];
    comparedElement.isSelected = true;
    await new Promise(r => setTimeout(r, lat));
    if (array.value[i].value < pivot) {
      swappedNumbers++;
      swap(array, i, left + swappedNumbers);
    }
    comparedElement.isSelected = false;
  }

  const pivotIndex = left + swappedNumbers;
  swap(array, left, pivotIndex);

  selectedElement.isSelected = false;
  selectedElement.isSorted = true;

  await quicksortHelper(array, left, pivotIndex - 1, lat);
  await quicksortHelper(array, pivotIndex + 1, right, lat);
}
