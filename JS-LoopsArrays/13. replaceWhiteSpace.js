function replaceSpaces(input) {
    var temp = input.split("");
    var result = '';

    var i;
    for (i = 0; i < temp.length; i+=1) {
        if (temp[i] === " ") {
            temp.splice(i, 1);
        }
        result += temp[i];
    }

    console.log(result);
}

replaceSpaces('But you were living in another world tryin\' to get your message through');