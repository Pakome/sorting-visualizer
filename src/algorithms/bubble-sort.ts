import { Ref } from "vue";
import { swap, wait } from "../utils";
import { ArrayElement } from "../models";
import { setAllAsSorted } from "../utils";

export async function bubbleSort(array: Ref<ArrayElement[]>, latency = 250) {
  let isSorted = false;
  let counter = array.value.length - 1;
  const lat = latency - array.value.length * 6;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < counter; i++) {
      const selectedElement = array.value[i];
      selectedElement.isSelected = true;

      if (array.value[i].value > array.value[i + 1].value) {
        await wait(lat);
        swap(array, i, i + 1);
        isSorted = false;
      }

      selectedElement.isSelected = false;
    }

    array.value[counter].isSorted = true;
    counter--;
  }

  setAllAsSorted(array);

  return array;
}
