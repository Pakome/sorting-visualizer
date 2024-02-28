import { Ref } from "vue";
import { swap } from "../utils";
import { ArrayElement } from "../models";
import { setAllAsSorted } from "../utils";

export async function bubbleSort(array: Ref<ArrayElement[]>, latency = 0.1) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.value.length - 1 - counter; i++) {
      const element = array.value[i];
      element.isSelected = true;

      if (array.value[i].value > array.value[i + 1].value) {
        await swap(array, i, i + 1, latency);
        isSorted = false;
      }

      element.isSelected = false;
    }

    const sortedElement = array.value[array.value.length - counter - 1];
    sortedElement.isSorted = true;
    counter++;
  }

  setAllAsSorted(array);

  return array;
}
