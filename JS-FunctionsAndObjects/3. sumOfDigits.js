function sumOfDigits(input) {
   
    if (arguments.length < 1) {
        return undefined;
    }

    var sumMax = 0;
    for (var i = 0; i < input.length; i++) {
        if (parseInt(input[i]) !== input[i]) {
            return undefined;
        }

        var currentNumb = Math.abs(input[i]).toString();
        var currentSum = 0;
        for (var g = 0; g < currentNumb.length; g++) {
            currentSum += Number(currentNumb[g]);
        }

        if (currentSum >= sumMax) {
            var result = input[i];
            sumMax = currentSum;
        }
    }
    return result;
}

console.log(sumOfDigits([5, 10, 15, 111]));
console.log(sumOfDigits([33, 44, -99, 0, 20]));
console.log(sumOfDigits(['hello']));
console.log(sumOfDigits([5, 3.3]));