import { Ref } from "vue";
import { ArrayElement } from "../models";
import { setAllAsSorted } from "../utils";

export async function insertionSort(array: Ref<ArrayElement[]>, latency = 250) {
  const lat = latency - array.value.length * 6;
  setFirstElementAsSorted(array);

  for (let i = 1; i < array.value.length; i++) {
    const selectedElement = array.value[i] || {};
    selectedElement.isSelected = true;

    for (let y = i - 1; y >= -1; y--) {
      const comparedElement = array.value[y] || {};
      comparedElement.isSelected = true;
      const numberToCompare = array.value[y]?.value === undefined ? -Infinity : array.value[y].value;
      await new Promise(r => setTimeout(r, lat));

      if (array.value[i].value >= numberToCompare) {
        const deletedElement = array.value.splice(i, 1)[0];
        array.value.splice(y + 1, 0, deletedElement);
        comparedElement.isSelected = false;
        deletedElement.isSorted = true;
        break;
      }

      comparedElement.isSelected = false;
    }

    selectedElement.isSelected = false;
  }

  setAllAsSorted(array);
  return array;
}

function setFirstElementAsSorted(array: Ref<ArrayElement[]>) {
  array.value[0].isSorted = true;
}
