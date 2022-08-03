document.addEventListener('DOMContentLoaded', function () {

    AOS.init();

    var interval = 2
    var elems = document.querySelectorAll('.carousel.carousel-slider');
    var instances = M.Carousel.init(elems, {
        fullwidth: true,
        duration: 150
    });

    // var caruselItemElem = document.querySelectorAll('.carousel-item');

    // for (i = 0; i < caruselItemElem.length; i++) {
    //     document.write(caruselItemElem[i] + "<br/>");
    // }


    setInterval(() => {
        M.Carousel.getInstance(elems[0]).next();
    }, interval * 1000);
})