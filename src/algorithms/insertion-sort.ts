import { Ref } from "vue";
import { ArrayElement } from "../models";
import { setAllAsSorted } from "../utils";

export async function insertionSort(array: Ref<ArrayElement[]>, latency = 100) {
  for (let i = 1; i < array.value.length; i++) {
    for (let y = i - 1; y >= -1; y--) {
      const comparedElement = array.value[y] || {};
      comparedElement.isSelected = true;
      const numberToCompare = array.value[y]?.value === undefined ? -Infinity : array.value[y].value;
      if (array.value[i].value >= numberToCompare) {
        const deletedElement = array.value.splice(i, 1)[0];
        array.value.splice(y + 1, 0, deletedElement);
        comparedElement.isSelected = false;
        break;
      }
      await new Promise(r => setTimeout(r, latency));
      comparedElement.isSelected = false;
    }
  }
  setAllAsSorted(array);
  return array;
}
