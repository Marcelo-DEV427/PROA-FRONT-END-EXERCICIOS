document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Habilitar loop infinito
        slidesPerView: 3, // Número de slides a serem exibidos por vez
        spaceBetween: 0, // Espaço entre os slides
        centeredSlides: false, // Não centraliza slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
