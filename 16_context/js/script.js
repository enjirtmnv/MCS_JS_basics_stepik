/*console.log(this);

window.onscroll = function(){
    console.log(this);
};


const button = document.querySelector('button');
button.onclick = function () {
    console.log(this);
};*/

const button = document.querySelector('button');
button.onclick = () => {
    //this.innerHTML = 'Pressed'
    console.log(this);
};