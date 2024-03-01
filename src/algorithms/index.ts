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
    details: '',
    complexity: {
      average: ComplexityType.Quadratic,
      best: ComplexityType.Quadratic,
      worst: ComplexityType.Quadratic,
    }
  },
  {
    id: "selection-sort",
    label: "Selection Sort",
    run: selectionSort,
    details: '',
    complexity: {
      average: ComplexityType.Quadratic,
      best: ComplexityType.Quadratic,
      worst: ComplexityType.Quadratic,
    }
  },
  {
    id: "insertion-sort",
    label: "Insertion Sort",
    run: insertionSort,
    details: '',
    complexity: {
      average: ComplexityType.Quadratic,
      best: ComplexityType.Quadratic,
      worst: ComplexityType.Quadratic,
    }
  },
  {
    id: "quick-sort",
    label: "Quick Sort",
    run: quickSort,
    details: 'Complexity will depend on how the pivot is chosen',
    complexity: {
      average: ComplexityType.Linearithmic,
      best: ComplexityType.Linearithmic,
      worst: ComplexityType.Quadratic,
    }
  },
];

export default sortingAlgorithms;
