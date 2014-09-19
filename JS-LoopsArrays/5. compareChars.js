function compareChars(firstArr, secondArr) {
   
    var firstArr = firstArr.length,
        secondArr = secondArr.length,
        isEqual = true;
        
    if (firstArr == secondArr) {
        for (var i = 0; i < firstArr; i++) {
            if (firstArr[i] !== secondArr[i]) {
                isEqual = false; 
                break;
            }
        }
    } 
    else {
        isEqual = false;
    }
    if (isEqual == true) {
        return "Equal";
    }
    else {
        return "Not Equal";
    }
}

console.log(compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']));
console.log(compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']));
console.log(compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']));