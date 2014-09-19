function biggerNeighbors(index, arr) {
    
    if ((index === 0) || (index === arr.length - 1)) {
        console.log("Only one neighbour");
    } 
    else if ((arr[index] > arr[index - 1]) && (arr[index] > arr[index + 1])) {
        console.log("Bigger");
    } 
    else if((index >= arr.length) || (index < 0)) {
        console.log("Invalid index");
    } 
    else {
        console.log("Not bigger");
    }
}

biggerNeighbors(2, [1, 2, 3, 3, 5 ]);
biggerNeighbors(2, [1, 2, 5, 3, 4 ]);
biggerNeighbors(5, [1, 2, 5, 3, 4 ]);
biggerNeighbors(0, [1, 2, 5, 3, 4 ]);