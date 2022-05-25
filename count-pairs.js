// add whatever parameters you deem necessary
function countPairs(nums, val) {
	let count = 0;
	nums.sort((a, b) => a - b);

	left = 0;
	right = nums.length - 1;

	while (left < right) {
		let sum = nums[left] + nums[right];

		if (sum === val) {
			count++;
			left++;
		} else if (sum < val) {
			left++;
		} else {
			right--;
		}
	}

	return count;
}
