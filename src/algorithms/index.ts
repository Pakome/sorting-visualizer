import { bubbleSort } from "./BubbleSort";
import { mergeSort } from "./MergeSort";

export default [
  {
    id: 'bubble-sort',
    formattedName: 'Bubble Sort',
    run: bubbleSort,
  },
  {
    id: 'merge-sort',
    formattedName: 'Merge Sort',
    run: mergeSort,
  },
];
