import { bubbleSort } from "./bubble-sort";
import { insertionSort } from "./insertion-sort";
import { quickSort } from "./quick-sort";
import { radixSort } from "./radix-sort";
import { selectionSort } from "./selection-sort";

export default [
  {
    id: "bubble-sort",
    label: "Bubble Sort",
    run: bubbleSort,
  },
  {
    id: "insertion-sort",
    label: "Insertion Sort",
    run: insertionSort,
  },
  {
    id: "selection-sort",
    label: "Selection Sort",
    run: selectionSort,
  },
  {
    id: "quick-sort",
    label: "Quick Sort",
    run: quickSort,
  },
  {
    id: "radix-sort",
    label: "Radix Sort",
    run: radixSort,
  },
];
