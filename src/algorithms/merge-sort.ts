export const mergeSort = (array: number[]): number[] => {
	if (array.length === 1) {
		return array;
	}

	let firstArray: number[] = [];
	let secondArray = [];

	const middle = Math.ceil(array.length / 2);
	const firstHalf = array.slice(0, middle);
	const secondHalf = array.slice(middle, array.length);

	firstArray = mergeSort(firstHalf);
	secondArray = mergeSort(secondHalf);

	const sortedArray = compareAndSort(firstArray, secondArray);

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
