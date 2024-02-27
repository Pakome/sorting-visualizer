import { Ref } from 'vue';

export async function radixSort(array: Ref<number[]>, latency = 1000) {
  const largestRadix = findLargestDigitCount(array);
  for (let i = 0; i <= largestRadix; i++) {
    const buckets: {[bucket: number]: number[]} = {};

    for (const num of array.value) {
      const digit = readDigit(num, i);
      if (!buckets[digit]) {
        buckets[digit] = [];
      }
      buckets[digit].push(num);
    }

    const newArray: number[] = [];

    for (const value of Object.values(buckets)) {
      newArray.push(...value);
    }

    array.value = newArray;
    await new Promise(r => setTimeout(r, latency));
  }
  return array;
}

function readDigit(num: number, radix: number) {
  return Math.floor(Math.abs(num / Math.pow(10, radix))) % 10;
}

function findLargestDigitCount(array: Ref<number[]>) {
  let largestDigits = getDigitCount(array.value[0]);
  for (const num of array.value) {
    const currentNumDigits = getDigitCount(num);
    largestDigits = Math.max(largestDigits, currentNumDigits);
  }
  return largestDigits;
}

function getDigitCount(number: number) {
  if (number === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}
