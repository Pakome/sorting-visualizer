import { Ref } from "vue";
import { ArrayElement } from "../models";

export async function swap<T>(
  array: Ref<Array<T>>,
  a: number,
  b: number,
  latency = 0
) {
  await new Promise((r) => setTimeout(r, latency));
  const temp = array.value[a];
  array.value[a] = array.value[b];
  array.value[b] = temp;
}

export function shuffleArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function setAllAsSorted(array: Ref<ArrayElement[]>) {
  for (const element of array.value) {
    element.isSorted = true;
  }
}
