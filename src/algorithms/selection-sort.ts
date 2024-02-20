import { Ref } from 'vue';

export async function selectionSort(array: Ref<number[]>) {
  for (let i = 0; i < array.value.length; i++) {
    let currentMinIndex = i;
    for (let y = i + 1; y < array.value.length; y++) {
      if (array.value[currentMinIndex] > array.value[y]) {
        currentMinIndex = y;
      }
    }
    if (i !== currentMinIndex) {
      swap(array, i, currentMinIndex);
      await new Promise(r => setTimeout(r, 1000 / i));
    }
  }
  return array;
}

function swap(array: Ref<number[]>, a: number, b: number): void {
  const temp = array.value[a];
  array.value[a] = array.value[b];
  array.value[b] = temp;
}
