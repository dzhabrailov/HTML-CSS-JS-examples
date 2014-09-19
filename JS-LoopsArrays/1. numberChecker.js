// Problem 1.  Number Checker
// Write a JavaScript function printNumbers(n) that accepts as parameter integer n
// The function finds all integer numbers from 1 to n that are not divisible 
// by 4 or by 5. Write a JS program numberChecker.js that invokes 
// your function with the sample input data below and prints the 
// output at the console. Examples:


function numberChecker(numbs) {
    var checkNumb = false;
    
    for (var index = 1; index <= numbs; index+=1) {
        if (index % 4 == 0 || index % 5 == 0) {
            
            checkNumb = true;
            console.log(index);
        }
    }
    if (!checkNumb) {
        console.log("No");
    }
}

numberChecker(-5);
numberChecker(13);
