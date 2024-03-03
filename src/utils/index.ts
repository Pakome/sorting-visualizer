import { Ref } from "vue";
import { ArrayElement } from "../models";

export function swap<T>(
  array: Ref<Array<T>>,
  a: number,
  b: number,
) {
  const temp = array.value[a];
  array.value[a] = array.value[b];
  array.value[b] = temp;
}

export function setAllAsSorted(array: Ref<ArrayElement[]>) {
  for (const element of array.value) {
    element.isSorted = true;
  }
}

export async function wait(timeInMs: number) {
  await new Promise(r => setTimeout(r, timeInMs));
}
