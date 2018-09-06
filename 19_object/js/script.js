
let person = {
    name: 'Michelangelo',
    surname: 'Popov',
    age: 13,
    teacher: true,
    sayHello: function() {
        return 'Hello ' + this.name
    }
};

console.log(person.name);
console.log(person.sayHello());

person.hairColor = 'blond';

console.log(person);

console.log(person.hairColor);


person.age = 15;
console.log(person);
console.log(person['surname']);
console.log(person.surname);

console.log(Object.values(person))