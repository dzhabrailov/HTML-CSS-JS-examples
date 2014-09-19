function reverseWordsInString(input) {
	var result = "";
	var words = input.split(" ");

	for (var i = 0; i < words.length; i+=1) {
		result += words[i].split("").reverse().join("") + " ";
	}
	return result.trim();
}

console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good isn\'t it?"));