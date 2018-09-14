console.log('You are at ' + window.location);


const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

button.onclick = () => {
    lorems.forEach(function(lorem){
        lorem.style.fontSize = '30px';
    })
};


/*button.onclick = () => {
    lorems.forEach((lorem) => {
        lorem.style.fontSize = '30px';
    })
};*/

/*var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
    console.log(element);
});*/


/*let arr = [1, 20, 4, 2, 5, 3, 24, 6, 45];
arr.filter((num) => {
    return num > 5;
});

console.log(arr);*/


/*var arrFruits = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (массив:" + arr + ")" );
});*/

/*var nums = [10, 20, 30, 40, 50];
var sum = nums.reduce(function(result, num) {
    return result += num;
}, 0);

console.log(sum);*/


let arrs = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
let strs = ['JavaScript', 'is', 'awesome'];

let strResults = strs.reduce(function(phrase, word, index) {
    return (index === 0) ? phrase + word : phrase + ' ' + word;}, '');


let arrResults = arrs.reduce(function(result, current) {
    return result.concat(current);
}, []);

console.log(strResults); // JavaScript is awesome
console.log(arrResults); // [1,2,3,4,5,6,7,8,9,10,11]




let friends = [
    {name: 'Kolya', books: [ 'Harry Potter', 'Bible']},
    {name: 'Anjela', books: [ 'Flowers for E', 'Mickey Mouse']},
    {name: 'Gucci', books: [ 'Dior', 'Balenciaga']}
];


let friendsBook =friends.reduce(function(result, current) {
    return result.concat(current.books);
}, []);
console.log(friendsBook);




