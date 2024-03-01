import { ref } from "vue";
import { ShuffleType } from "../models";
import { shuffleArray } from "../utils";

const selectedShuffleType = ref(ShuffleType.Random);

export function useShuffle() {
  function setShuffleType(shuffleType: ShuffleType) {
    selectedShuffleType.value = shuffleType;
  }

  function shuffle<T>(array: Array<T>) {
    console.log(selectedShuffleType.value);
    switch (selectedShuffleType.value) {
      case ShuffleType.Random:
        return shuffleArray(array);
      case ShuffleType.AlmostSorted:
        return sortArrayLastTenPercent(array);
      case ShuffleType.Inversed:
        return array.toReversed();
      default:
        throw Error(`Unkowkn shuffle type ${selectedShuffleType.value}`)
    }
  }

  function sortArrayLastTenPercent<T>(array: Array<T>) {
    console.log('array :>> ', array);
    const sortedArray = (array as any).sort((a: any, b: any) => (a.value - b.value));
    console.log('sortedArray :>> ', sortedArray);
    const lastTenPercent = Math.round(array.length / 10);
    console.log('lastTenPercent :>> ', lastTenPercent);
    // console.log('array :>> ', array);
    for (let i = array.length - 1; i > lastTenPercent; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return {
    selectedShuffleType,
    setShuffleType,
    shuffle,
  };
}
