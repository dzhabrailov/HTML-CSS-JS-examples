function finDigit(input) {
    var numb = input[1].toString().replace('.','').replace('-','');
    
    if (numb.length < input[0]) {
        return "The number doesn't have " + input[0] + " digits";
    }
    numb = Number(numb);
    for (var index = 0; index < input[0] - 1; index+=1) {
        numb = Math.floor(numb / 10);
    }
    return numb % 10;
}

console.log(finDigit([1, 6]));
console.log(finDigit([2, -55]));
console.log(finDigit([6, 923456]));
console.log(finDigit([3, 1451.78]));
console.log(finDigit([6, 888.88]));