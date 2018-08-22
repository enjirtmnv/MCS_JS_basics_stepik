console.log('You are at ' + window.location);


let Value = prompt('VVedite lyuboe chislo');
let absoluteValue = Number(Value);
//console.log(typeof absoluteValue);
if (absoluteValue == 0){
    console.log(0);
}else if (absoluteValue < 0){
    console.log(absoluteValue - absoluteValue * 2);
}else if(absoluteValue > 0){
    console.log(absoluteValue);
}