console.log('You are at ' + window.location);


const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

const allBySelector = document.querySelectorAll('coolClass.mine');
const firstBySelector = document.querySelector('div');

const quest = prompt('Shto hotite napisat na stranise?');

console.log(byTag, byClass, byId);


byId.innerHTML = "<h1>Hello I am Id div</h1>";
firstBySelector.innerHTML = quest;
