window.addEventListener('load', function () {
    const button = document.querySelector('.button');
    const ball = document.querySelector('.ball');
    const par = document.querySelector('p');
    button.addEventListener('click', ()=>{
        ball.style.animationPlayState = 'running';
    });

    window.onscroll = function () {
        if(scrollY >= 600){
            par.style.opacity = 1;
        } else {
            par.style.opacity = 0.5;
        }
    }


});

