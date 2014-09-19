function createArray(value) {
	var arr = new Array(value);
	for (var i = 0; i < arr.length; i++) {
		arr[i] = i * 5;
	}
	console.log(arr);
}

createArray(20);