// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	let str1Idx = 0;
	let str2Idx = 0;

	while (str1Idx <= str1.length) {
		if (str1Idx === str1.length) return true;
		if (str2Idx === str2.length) return false;

		if (str1[str1Idx] === str2[str2Idx]) {
			str1Idx++;
			str2Idx++;
		} else if (str1[str1Idx] !== str2[str2Idx]) {
			str2Idx++;
		}
	}
}
