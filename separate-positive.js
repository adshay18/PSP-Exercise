// add whatever parameters you deem necessary
function separatePositive(ints) {
	let left = 0;
	let right = ints.length - 1;
	while (left < right) {
		let temp1 = ints[left];
		let temp2 = ints[right];
		if (ints[left] < 0) {
			ints.splice(left, 1);
			ints.push(temp1);
			right--;
		} else if (ints[right] > 0) {
			ints.splice(right, 1);
			ints.unshift(temp2);
			left++;
		} else {
			left++;
			right--;
		}
	}
	return ints;
}
