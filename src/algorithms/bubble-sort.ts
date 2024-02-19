import { Ref } from 'vue';

export const bubbleSort = async (array: Ref<number[]>): Promise<Ref<number[]>> => {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.value.length - 1 - counter; i++) {
      await new Promise(r => setTimeout(r, 0.1));
      if (array.value[i] > array.value[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
}

const swap = (i: number, y: number, array: Ref<number[]>): void => {
  const temp = array.value[i];
  array.value[i] = array.value[y];
  array.value[y] = temp;
}
