import { Ref } from "vue";

export interface ArrayElement {
  value: number;
  isSorted: boolean;
  isSelected: boolean;
}

export interface SortingAlgorithm {
  id: string;
  label: string;
  description: string;
  run: (array: Ref<ArrayElement[]>) => Promise<Ref<ArrayElement[]>>;
  complexity: {
    average: ComplexityType;
    best: ComplexityType;
    worst: ComplexityType;
  };
}

export enum ComplexityType {
  Constant = "O(1)",
  Linear = "O(n)",
  Quadratic = "O(n ^ 2)",
  Linearithmic = "O(n log(n))",
  Exponential = "O(2n)",
  Factorial = "O(n!)",
}

export enum ShuffleType {
  Random,
  AlmostSorted,
  Inversed,
}
