let menu = document.querySelector('#menu__bar');
let navbar = document.querySelector('.nav');

menu.addEventListener('click',  () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll' , () =>  {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
})


let slides = document.querySelectorAll('.slide-container'),
    index = 0;

  
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


