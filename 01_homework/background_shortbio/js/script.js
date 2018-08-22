console.log('You are at ' + window.location);




let pageBackground = document.querySelector('body');
let questBackground = prompt('Какой будет фон у страницы?');
pageBackground.style.backgroundColor = questBackground;

let pageFont = document.querySelector('.page');
let questFont = prompt('Какой будет цвет текста на странице?');
pageFont.style.color = questFont;

let inspireName = document.querySelector('span.name');
let questName = prompt('Как зовут человека, который вас вдохновляет');
inspireName.innerHTML = questName;

let newImage = document.querySelector('img');
let questImage = prompt('Введите адрес картинки');
newImage.removeAttribute('src');
//console.log(newImage.hasAttribute('src'));
newImage.setAttribute('src', questImage);
//http://oboifullhd.ru/_ph/15/932057821.jpg

let newBio = document.querySelector('.shortBio');
let questBio = prompt('Введите текст страницы');
newBio.innerHTML = questBio;
newBio.className += ' animated';
console.log(newBio.className);
