import { ComplexityType, SortingAlgorithm } from "../models";
import { bubbleSort } from "./bubble-sort";
import { insertionSort } from "./insertion-sort";
import { quickSort } from "./quick-sort";
import { selectionSort } from "./selection-sort";

const sortingAlgorithms: SortingAlgorithm[] = [
  {
    id: "bubble-sort",
    label: "Bubble Sort",
    run: bubbleSort,
    description: "Simple algorithm that works well on small sets of data and almost sorted arrays. With each iteration the biggest values 'bubbles' up to the top of the array.",
    complexity: {
      average: ComplexityType.Quadratic,
      best: ComplexityType.Quadratic,
      worst: ComplexityType.Quadratic,
    },
  },
  {
    id: "selection-sort",
    label: "Selection Sort",
    run: selectionSort,
    description: "Another simple algorithm, kind of the 'inverse' of bubble sort, small values bubble to the bottom with each set traversal.",
    complexity: {
      average: ComplexityType.Quadratic,
      best: ComplexityType.Quadratic,
      worst: ComplexityType.Quadratic,
    },
  },
  {
    id: "insertion-sort",
    label: "Insertion Sort",
    run: insertionSort,
    description: "Doesn't have the best complexity but can work very well on small set of datas as it keeps the left side of the array always sorted.",
    complexity: {
      average: ComplexityType.Quadratic,
      best: ComplexityType.Quadratic,
      worst: ComplexityType.Quadratic,
    },
  },
  {
    id: "quick-sort",
    label: "Quick Sort",
    run: quickSort,
    description:
      "The complexity will depend on how the pivot is chosen. If the pivot is the first element of the array and the array is already sorted, each number already has it's final position but the algorithm will still have to compare them all. Thus we wouldn't take advantage of the divide and conquer approach.",
    complexity: {
      average: ComplexityType.Linearithmic,
      best: ComplexityType.Linearithmic,
      worst: ComplexityType.Quadratic,
    },
  },
];

export default sortingAlgorithms;
