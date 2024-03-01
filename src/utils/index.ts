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

export function setAllAsSorted(array: Ref<ArrayElement[]>) {
  for (const element of array.value) {
    element.isSorted = true;
  }
}
