 // Problem 2.	Find Min and Max Number
 // Write a JavaScript function findMinAndMax(value) that accepts as parameter
 // an array of numbers. The function finds the minimum and the maximum number. 
 // Write a JS program minMaxNumbers.js that invokes your function with 
 // the sample input data below and prints the output at the console

 function findMinAndMax (numbs) {

  var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;
    for (var index in numbs) {
        if (numbs[index] > max) {
            max = numbs[index];
        }
        if (numbs[index] < min) {
            min = numbs[index];
        }
    }
	    // if (min === max)				
	    // {
	    // 	throw ("No found min and max value!");
	    // }	
		console.log("Min value is: " + min + " and Max value is: " + max);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]); 
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);



