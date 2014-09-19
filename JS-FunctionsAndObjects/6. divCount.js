function divCount(htmlDoc) {
    var result = 0;
    var index = 0;
   
    while (htmlDoc.indexOf('<div', index) != -1) {
        result+=1;
        index = htmlDoc.indexOf('<div', index) + 1;
    }
    return result;
}

console.log(divCount(
'<!DOCTYPE html>' +
'<html>' +
'<head lang="en">' +
    '<meta charset="UTF-8">' +
        '<title>index</title>' +
        '<script src="/yourScript.js" defer></script>' +
    '</head>' +
    '<body>' +
        '<div id="outerDiv">' +
           '<div' +
            'class="first">' +
               '<div><div>hello</div></div>' +
            '</div>' +
            '<div>hi<div></div></div>' +
            '<div>I am a div</div>' +
        '</div>' +
    '</body>' +
'</html>'
));