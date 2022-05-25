// add whatever parameters you deem necessary
function averagePair(sortedArr, val) {
	if (sortedArr.length <= 1) return false;

	let left = 0;
	let right = sortedArr.length - 1;

	while (left < right) {
		let avg = (sortedArr[left] + sortedArr[right]) / 2;
		if (avg === val) {
			return true;
		} else if (avg > val) {
			right--;
		} else {
			left++;
		}
	}
	return false;
}
