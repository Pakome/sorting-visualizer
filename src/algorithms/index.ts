import { bubbleSort } from "./bubble-sort";
import { mergeSort } from "./merge-sort";
import { selectionSort } from "./selection-sort";

export default [
  {
    id: 'bubble-sort',
    label: 'Bubble Sort',
    run: bubbleSort,
  },
  // {
  //   id: 'merge-sort',
  //   label: 'Merge Sort',
  //   run: mergeSort,
  // },
  {
    id: 'selection-sort',
    label: 'Selection Sort',
    run: selectionSort,
  },
];
