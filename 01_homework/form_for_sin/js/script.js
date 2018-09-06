
const form = document.forms[0];
const insert = document.querySelector('.total');


form.onsubmit = function (e) {
    e.preventDefault();
    if (form.elements.sin.value == 30){
        insert.innerHTML = (Math.sin((Math.PI / 180) * form.elements.sin.value)).toFixed(1)
    } else if (form.elements.sin.value % 90 == 0){
        insert.innerHTML = (Math.sin((Math.PI / 180) * form.elements.sin.value)).toFixed(0)
    } else {
        insert.innerHTML = (Math.sin((Math.PI / 180) * form.elements.sin.value)).toFixed(6)
    }
};

