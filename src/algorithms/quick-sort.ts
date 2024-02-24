import { Ref } from "vue";
import { swap } from "../utils";

export async function quickSort(array: Ref<number[]>) {
  await quickSortHelper(array, 0, array.value.length - 1);
  return array;
}

async function quickSortHelper(array: Ref<number[]>, left: number, right: number) {
  const pivot = array.value[left];
  let swappedNumbers = 0;

  if (right <= left) {
    return;
  }

  for (let i = left + 1; i <= right; i++) {
    if (array.value[i] < pivot) {
      swappedNumbers++;
      swap(array, i, left + swappedNumbers);
      await new Promise(r => setTimeout(r, 50));
    }
  }

  const pivotIndex = left + swappedNumbers;
  swap(array, left, pivotIndex);

  quickSortHelper(array, left, pivotIndex - 1);
  quickSortHelper(array, pivotIndex + 1, right);
}
