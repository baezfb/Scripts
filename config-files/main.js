document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("load", init);
})


const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName, 'animate__delay-1s');

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName, 'animate__delay-1s');
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

function animateSlides() {
    animateCSS('.slide-01-img', 'slideInRight');
    animateCSS('.slide-01-title', 'slideInUp');
    animateCSS('.slide-02-img', 'slideInRight');
    animateCSS('.slide-02-title', 'slideInUp');
}


var elems = document.querySelectorAll('.carousel.carousel-slider');
var instance = M.Carousel.init(elems, {
    onCycleTo: animateSlides
});

const carouselElem = document.querySelector('.carousel.carousel-slider');
const carouselInst = M.Carousel.getInstance(elems[0]);
const autoplayInterval = parseInt(carouselElem.dataset.autoplayInterval) * 1000 || 4000;

let intervalID
let intervalReload
let minute = 1000 * 60

function autoPlay() {
    if (carouselElem.dataset.autoplay === "true") {
        intervalID = setInterval(() => {
            carouselInst.next();
        }, autoplayInterval);
    }
}


function init() {
    autoPlay();
    reloadPage();
}


function reloadPage(){
    intervalReload = setTimeout(() => {
        window.location.reload();
    }, minute * 5)
}
