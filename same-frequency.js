// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	num1Freq = {};
	num2Freq = {};

	for (let num of String(num1).split('')) {
		num1Freq[num] = num1Freq[num] + 1 || 1;
	}
	for (let num of String(num2).split('')) {
		num2Freq[num] = num2Freq[num] + 1 || 1;
	}
	for (let num in num1Freq) {
		if (!num2Freq[num] || num1Freq[num] !== num2Freq[num]) return false;
	}
	return true;
}
