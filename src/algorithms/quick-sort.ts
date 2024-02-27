import { Ref } from "vue";
import { swap } from "../utils";

export async function quickSort(array: Ref<number[]>, latency = 50) {
  await quickSortHelper(array, 0, array.value.length - 1, latency);
  return array;
}

async function quickSortHelper(array: Ref<number[]>, left: number, right: number, latency: number) {
  const pivot = array.value[left];
  let swappedNumbers = 0;

  if (right <= left) {
    return;
  }

  for (let i = left + 1; i <= right; i++) {
    if (array.value[i] < pivot) {
      swappedNumbers++;
      swap(array, i, left + swappedNumbers);
      await new Promise(r => setTimeout(r, latency));
    }
  }

  const pivotIndex = left + swappedNumbers;
  swap(array, left, pivotIndex);

  quickSortHelper(array, left, pivotIndex - 1, latency);
  quickSortHelper(array, pivotIndex + 1, right, latency);
}
