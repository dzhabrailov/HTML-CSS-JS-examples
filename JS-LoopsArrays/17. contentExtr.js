function extraxtContent(value) {
    var temp = value.split(/[<>]+/);
    console.log(temp);
}

extraxtContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");
