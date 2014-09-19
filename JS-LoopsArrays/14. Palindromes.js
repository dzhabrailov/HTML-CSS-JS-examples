
function findPalindromes(input) {
    input = input.toLowerCase().split(/[\W]+/).filter(Boolean);
    var output = [];
    for (var i = 0; i < input.length; i+=1) {
        if (input[i] == input[i].split('').reverse().join('')) {
            output.push(input[i]);
        }
    }
    console.log(output);
}

findPalindromes('There is a man, his name was Bob.');