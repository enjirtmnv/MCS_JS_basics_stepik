const form = document.forms[0];
const insert = document.querySelector('.total');
console.log(form);

form.onsubmit = function(e) {
    e.preventDefault();
    console.log('Submitted');
    insert.innerHTML = form.elements.quantity.value * form.elements.price.value
 };