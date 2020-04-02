var fs = require('fs');

function sayTwo(){
    fs.readFile(__dirname + '/data.json');
    console.log('two');
}

function say(){
    console.log('one');
    sayTwo();
    console.log('three');
}
say();