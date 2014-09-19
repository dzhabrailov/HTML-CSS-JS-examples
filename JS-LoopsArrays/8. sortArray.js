
//short cut :)
function orderArr(x, y) {
    return (x == y) ? 0 : x > y ? 1 : -1;
};

var arr = [5, 4, 3, 2, 1];
arr.sort(orderArr);
console.log(arr);

var arr = [12, 12, 50, 2, 6, 4, 3, 22, 51, 712, 3, 6, 3];
arr.sort(orderArr);
console.log(arr);

// it was my firt idea:
// function sortArray(arr) {
//     var i, j, tmp, swap;

//     for (i = 0; i < arr.length - 1; i+=1) {
//         tmp = i;
//         for (j = i + 1; j < arr.length; j+=1) {
//             if (arr[j] < arr[tmp]) {
//                 tmp = j;
//             }
//         }
//         swap = arr[tmp];
//         arr[tmp] = arr[i];
//         arr[i] = swap;
//     }
//     console.log(arr);
// }

// sortArray([5, 4, 3, 2, 1])
// sortArray([12, 12, 50, 2, 6, 4, 3, 22, 51, 712, 3, 6, 3]);