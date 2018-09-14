let names = [
    [
        ['куры', 'гуси', 'павлины'],
        ['сокол', 'орел', 'соловей']
    ],
    [
        ['собака', 'кошка'],
        ['обезьяна', 'рысь']
    ]
];


/*names.forEach(function (name) {
    console.log(name)
});*/

/*for (let name of names){
    console.log(name);
}*/

for ( let j = 0; j < names.length; j++ ){
    for ( let i = 0; i < names.length; i++ ){
        for (let name of names[i][j]){
            console.log(name);
        }
    }
}



/*

console.log(names[0][0][0]);
console.log(names[0][0][1]);
console.log(names[0][0][2]);
console.log(names[0][1][0]);
console.log(names[0][1][1]);
console.log(names[0][1][2]);
console.log(names[1][0][0]);
console.log(names[1][0][1]);
console.log(names[1][1][0]);
console.log(names[1][1][1]); */