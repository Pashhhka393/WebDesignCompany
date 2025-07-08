let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let colorsPalette = document.querySelector('.colors-palette');


let sendBtn = document.querySelector('.send-btn');
let responseBtn = document.querySelector('.response-btn');


menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    colorsPalette.classList.remove('active');
}

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    colorsPalette.classList.remove('active');
}

colorBtn.onclick = () => {
    colorsPalette.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active')
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    colorsPalette.classList.remove('active');
}

document.querySelectorAll('.colors-palette .color').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector('&').style.setProperty('--main-color', color);
    }
});

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-moon');
    if(themeBtn.classList.contains('fa-moon')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}


sendBtn.onclick = () => {
    responseBtn.classList.add('active'); 

    setTimeout(() => {
        responseBtn.classList.remove('active'); 
    }, 1500);
}

// stst(() => {})