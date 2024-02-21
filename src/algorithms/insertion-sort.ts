import { Ref } from "vue";

export async function insertionSort(array: Ref<number[]>) {
  for (let i = 1; i < array.value.length; i++) {
    for (let y = i - 1; y >= -1; y--) {
      const numberToCompare = array.value[y] === undefined ? -Infinity : array.value[y];
      if (array.value[i] >= numberToCompare) {
        const number = array.value[i];
        array.value.splice(i, 1);
        array.value.splice(y + 1, 0, number);
        break;
      }
    }
    await new Promise(r => setTimeout(r, 100));
  }
  return array;
}
