//
//
// const apiString = '[{"city" : "Moscow","temp" : 10,"pressure" : 250},{"city" : "Miami","temp" : 28,"pressure" : 200},{"city" : "Beijing", "temp" : 15, "pressure" : 210}]';

const DATA = [
    {
        "city" : "Moscow",
        "temp" : 10,
        "pressure" : 250
    },
    {
        "city" : "Miami",
        "temp" : 28,
        "pressure" : 200
    },
    {
        "city" : "Beijing",
        "temp" : 15,
        "pressure" : 210
    }
];

// console.log(apiString);
//
// const DATA2 = JSON.parse(apiString);
//
// console.log(DATA2);

console.log(JSON.stringify(DATA));

