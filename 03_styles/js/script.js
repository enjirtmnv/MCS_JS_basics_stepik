console.log('You are at ' + window.location);

const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style); //rabotaet tolko s atributom style

let quest = prompt('Kakoy ty hochesh svet');

Colored.style.backgroundColor = 'gray';
Colored.style['background-color'] = quest;