
//const buttons = document.querySelectorAll('button');


/*for (button of buttons) {
    button.style.backgroundColor = 'deeppink';
}*/

/*for (key in buttons) {
    buttons[key].style.backgroundColor = 'yellow';
}*/

let person = {
    name: 'Nikolos',
    surname: 'Popov',
    datascience: true
};
for (key in person){
    console.log(person[key]);
}
for (key in person){
    console.log(key);
}
