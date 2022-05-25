// add whatever parameters you deem necessary
function constructNote(message, letters) {
	if (letters.length < message.length) return false;
	const msg = {};
	const ltrs = {};
	for (let char of letters) {
		ltrs[char] = ltrs[char] + 1 || 1;
	}
	for (let char of message) {
		msg[char] = msg[char] + 1 || 1;
	}
	for (let char in msg) {
		if (!ltrs[char] || msg[char] > ltrs[char]) return false;
	}
	return true;
}
