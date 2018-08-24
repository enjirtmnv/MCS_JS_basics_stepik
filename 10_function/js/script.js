console.log('You are at ' + window.location);

function sayHi() {
    return 'Hello, student!';
}

document.body.innerHTML = sayHi();

function sayName(name) {
    return 'Hello, ' + name;
}


console.log(sayName('Malvina'));
console.log(sayName('Michelangelo'));