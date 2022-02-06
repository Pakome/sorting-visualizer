import { ref, Ref } from 'vue';

export const mergeSort = async (array: Ref<number[]>): Promise<Ref<number[]>> => {
	if (array.value.length === 1) {
		return array;
	}

	let firstArray = ref([]);
	let secondArray = ref([]);

	const middle = Math.ceil(array.value.length / 2);
	const firstHalf = ref(array.value.slice(0, middle));
	const secondHalf = ref(array.value.slice(middle, array.value.length));

	firstArray = mergeSort(firstHalf);
	secondArray = mergeSort(secondHalf);

	const sortedArray = ref(compareAndSort(firstArray, secondArray));

	return sortedArray;
}

function compareAndSort(firstArray: number[], secondArray: number[]) {
	let x = 0;
	let y = 0;
	const sortedArray = [];
	const maxLength = firstArray.length + secondArray.length;

	while(sortedArray.length < maxLength) {
		if (firstArray[x] <= secondArray[y]) {
			sortedArray.push(firstArray[x]);
			x++;
		} else {
			sortedArray.push(secondArray[y]);
			y++;
		}

		if (x === firstArray.length && sortedArray.length !== maxLength) {
			sortedArray.push(...secondArray.slice(y));
		}
		if (y === secondArray.length && sortedArray.length !== maxLength) {
			sortedArray.push(...firstArray.slice(x));
		}
	}

	return sortedArray;
}
