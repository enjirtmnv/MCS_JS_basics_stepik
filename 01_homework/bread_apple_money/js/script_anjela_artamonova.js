console.log('You are at ' + window.location);


let money = window.prompt('Сколько у вас с собой есть денег?');
let apple = window.prompt('Сколько вы купили яблок?');
let bread = window.prompt('Сколько вы купили батонов хлеба?');
let applePriceForOne = window.prompt('Сколько стоит одно яблоко?');
let appleTotalCost = parseFloat(applePriceForOne) * parseFloat(apple);
let breadPriceForOne = window.prompt('Сколько стоит один батон хлеба?');
let breadTotalCost = parseFloat(breadPriceForOne) * parseFloat(bread);
let busket = parseFloat(money) - (breadTotalCost + appleTotalCost);
console.log(money, appleTotalCost, breadTotalCost, busket);
let booleanAnswer = (busket <= money && busket >= 0);
console.log(booleanAnswer);

document.body.innerHTML = booleanAnswer;