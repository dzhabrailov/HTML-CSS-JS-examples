function checkBrackets(expr) {
    var leftCount = 0;
    var rightCount = 0;

    var length, i;
    for (i = 0, length = expr.length; i < length; i+=1) {
        if (expr[i] === '(') {
            leftCount+=1;
        }
        if (expr[i] === ')') {
            rightCount+=1;
        }
    }
    if (leftCount == rightCount) {
        console.log('correct');
    }
    else {
        console.log('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');