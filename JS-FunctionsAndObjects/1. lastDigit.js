function lastDigit(input) {
    var lastOne = Math.abs(input % 10);
    switch (lastOne) {
        case 1: return "One";
            break;
        case 2: return "Two";
            break;
        case 3: return "Three";
            break;
        case 4: return "Four";  
            break;
        case 5: return "Five";
            break;
        case 6: return "Six";
            break;
        case 7: return "Seven";
            break;
        case 8: return "Eight";
            break;
        case 9: return "Nine";
            break;
        case 0: return "Zero";
            break;
        default: return "Invalid input";
            break;
    }
}
console.log(lastDigit(6));
console.log(lastDigit(-55));
console.log(lastDigit(133));