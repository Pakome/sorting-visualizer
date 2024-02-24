import { Ref } from "vue";

export function swap(array: Ref<number[]>, a: number, b: number): void {
  const temp = array.value[a];
  array.value[a] = array.value[b];
  array.value[b] = temp;
}
