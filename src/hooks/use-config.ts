import { ref } from "vue";
import { ArrayElement, ShuffleType } from "../models";

const selectedShuffleType = ref(ShuffleType.Random);

export function useShuffle() {
  function setShuffleType(shuffleType: ShuffleType) {
    selectedShuffleType.value = shuffleType;
  }

  function shuffleWithSelectedType<T>(array: Array<T>) {
    switch (selectedShuffleType.value) {
      case ShuffleType.Random:
        return shuffleArray(array);
      case ShuffleType.AlmostSorted:
        return sortArrayLastPercent(array as ArrayElement[], 10);
      case ShuffleType.Inversed:
        return array.toReversed();
      default:
        throw Error(`Unknown shuffle type ${selectedShuffleType.value}`);
    }
  }

  function shuffleArray<T>(array: Array<T>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  function sortArrayLastPercent(array: ArrayElement[], percent: number) {
    const almostSortedArray = structuredClone(array);
    const lastTenPercent = Math.round(almostSortedArray.length / percent) * 2;
    const subArray = almostSortedArray.splice(
      almostSortedArray.length - lastTenPercent,
      lastTenPercent
    );
    const shuffledSubArray = shuffleArray(subArray);
    almostSortedArray.push(...shuffledSubArray);

    return almostSortedArray;
  }

  return {
    selectedShuffleType,
    setShuffleType,
    shuffleWithSelectedType,
    shuffleArray,
  };
}
