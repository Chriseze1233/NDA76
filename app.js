// Scroll Header
const header = document.querySelector('.header');

window.onscroll = function() {
    let headerHeight = header.getBoundingClientRect().height;
    let scroll_Y = window.scrollY;
    console.log(scroll_Y, headerHeight);
    if(scroll_Y > headerHeight) {
        header.classList.add('moved')
    } else {
        header.classList.remove('moved')
    }
}

// Close and open btn
const open_btn = document.querySelector('.open-btn');
const nav = document.querySelector('.nav');


open_btn.addEventListener('click', ()=> {
    nav.classList.toggle('open');
})

//  Background change
let index = 0;

function less_load() {
    if(index < 0) {
        index = 0
    }
        index++
}

function more_load() {
    if(index > 4) {
        index = 0
    }
        index = 0
}

window.addEventListener('load', () => {
    less_load()
    more_load()   
}) 
