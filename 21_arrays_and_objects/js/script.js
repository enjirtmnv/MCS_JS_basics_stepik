console.log('You are at ' + window.location);

//const cools = document.getElementsByClassName('cool');
//const cools = document.getElementsByTagName('div');
const cools = document.querySelectorAll('.cool');
console.log(cools[0]);

cools[0].style.color = 'deeppink';
/*cools[0].style.color = 'yellow';
//cools[0].style.border = 3 + 'px';

myBlock = function () {
    cools[0].innerHTML = 'kdkdk'
};*/