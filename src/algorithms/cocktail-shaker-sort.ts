import { Ref } from "vue";
import { swap, wait } from "../utils";
import { ArrayElement } from "../models";
import { setAllAsSorted } from "../utils";

export async function cocktailSort(array: Ref<ArrayElement[]>) {
  let isSorted = false;
  let right = array.value.length - 1;
  let left = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < right; i++) {
      const selectedElement = array.value[i];
      selectedElement.isSelected = true;

      if (array.value[i].value > array.value[i + 1].value) {
        await wait(0);
        swap(array, i, i + 1);
        isSorted = false;
      }

      selectedElement.isSelected = false;
    }
    array.value[right].isSorted = true;
    right--;

    for (let i = right; i > left; i--) {
      const selectedElement = array.value[i];
      selectedElement.isSelected = true;

      if (array.value[i].value < array.value[i - 1].value) {
        await wait(0);
        swap(array, i, i - 1);
        isSorted = false;
      }

      selectedElement.isSelected = false;
    }
    array.value[left].isSorted = true;
    left++;
  }

  setAllAsSorted(array);

  return array;
}
