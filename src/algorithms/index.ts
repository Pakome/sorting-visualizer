import { bubbleSort } from "./bubble-sort";
import { insertionSort } from "./insertion-sort";
import { quickSort } from "./quick-sort";
import { selectionSort } from "./selection-sort";

export default [
  {
    id: "bubble-sort",
    label: "Bubble Sort",
    run: bubbleSort,
  },
  {
    id: "selection-sort",
    label: "Selection Sort",
    run: selectionSort,
  },
  {
    id: "insertion-sort",
    label: "Insertion Sort",
    run: insertionSort,
  },
  {
    id: "quick-sort",
    label: "Quick Sort",
    run: quickSort,
  },
];
