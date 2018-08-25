console.log('You are at ' + window.location);

//

/*let money = window.prompt('Сколько у вас с собой есть денег?');
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
*/


let haveEnough = (money, apple, bread, applePriceForOne, breadPriceForOne) => {
    let appleTotalCost = parseFloat(applePriceForOne) * parseFloat(apple);
    let breadTotalCost = parseFloat(breadPriceForOne) * parseFloat(bread);
    let busket = parseFloat(money) - (breadTotalCost + appleTotalCost);
    let booleanAnswer = (busket <= money && busket >= 0);
    if (booleanAnswer == true){
        document.body.innerHTML = 'Вам хватает денег на покупки';
    } else {
        document.body.innerHTML = 'Вам не хватает денег';
    }
};

haveEnough(window.prompt('Сколько у вас с собой есть денег?'),
    apple = window.prompt('Сколько вы купили яблок?'),
    window.prompt('Сколько вы купили батонов хлеба?'),
    applePriceForOne = window.prompt('Сколько стоит одно яблоко?'),
    breadPriceForOne = window.prompt('Сколько стоит один батон хлеба?'));

