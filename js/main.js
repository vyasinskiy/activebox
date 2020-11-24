/* Header fixer */

let currentScroll;
let containsFixed;
let header = document.getElementById('header');
let headerHeight = header.offsetHeight;

let toggleFixedHeader = () => {
    currentScroll = pageYOffset;
    containsFixed = header.classList.contains('fixed');
    if (currentScroll >= headerHeight && !containsFixed) {
        header.classList.add('fixed');
    } else if (currentScroll < headerHeight && containsFixed) {
        header.classList.remove('fixed');
    }
}

window.addEventListener("scroll", toggleFixedHeader);


/* Animated scroll */

const navLinks = document.querySelectorAll('.nav a');

for (let link of navLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('data-href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        nav.classList.toggle('show-menu');
    });
};

/* Show mobile menu */

let burger = document.querySelector('#burger');
let nav = document.querySelector('#nav');
burger.addEventListener('click', () => {
    nav.classList.toggle('show-menu')
})


/* Slick slider */

$(document).ready(function () {
    $('#reviews__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        arrows: false
    });
});

const setSliderHeight = () => {
    let sliders = document.getElementsByClassName('reviews__slider-item');
    let maxHeight = 0;
    for (slider of sliders) {
        if (slider.offsetHeight > maxHeight) {
            maxHeight = slider.offsetHeight;
        }
    }
    for (slider of sliders) {
        slider.style.height = maxHeight + 'px';
    }
    console.log(maxHeight)
}

window.addEventListener("resize", setSliderHeight);
window.addEventListener("load", setSliderHeight);