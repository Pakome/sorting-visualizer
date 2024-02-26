import { Ref } from 'vue';

export async function radixSort(array: Ref<number[]>) {
  const largestRadix = findLargestRadix(array);
  for (let i = 1; i <= largestRadix; i++) {
    const buckets: {[bucket: number]: number[]} = {};

    for (const num of array.value) {
      const digit = readDigit(num, i);
      if (!buckets[digit]) {
        buckets[digit] = [];
      }
      buckets[digit].push(num)
    }

    const newArray: number[] = [];

    for (const value of Object.values(buckets)) {
      newArray.push(...value);
    }

    array.value = newArray;
    await new Promise(r => setTimeout(r, 1000));
  }
  return array;
}

function readDigit(num: number, radix: number) {
  const number = String(num);
  const digit = number[number.length - radix] || 0;
  return Number(digit);
}

function findLargestRadix(array: Ref<number[]>) {
  let largestRadix = String(array.value[0]).length;
  for (const num of array.value) {
    const currentNumRadix = String(num).length;
    largestRadix = Math.max(largestRadix, currentNumRadix);
  }
  return largestRadix;
}
