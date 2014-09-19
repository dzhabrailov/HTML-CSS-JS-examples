function youngestMan(input) {
    var minAge = Number.MAX_VALUE;
    
    for (var i = 0; i < input.length; i+=1) {
        if (input[i].age < minAge) {
            var result = input[i];
            minAge = input[i].age;
        }
    }
    if (result) {
        console.log('The youngest person is %s %s', result.fname, result.lname);
    } 
    else {
        console.log('Age property is missing');
    }
}

var input = [
        { fname : 'George', lname: 'Kolev', age: 32},
        { fname : 'Bay', lname: 'Ivan', age: 81},
        { fname : 'Baba', lname: 'Ginka', age: 40}];

youngestMan(input);