var link = document.querySelector('.login-but');
var popupLogin = document.querySelector('.write-us-popup');
var overlay = document.querySelector('.overlay');
var slide01 = document.querySelector('.slide1');
var slide02 = document.querySelector('.slide2');
var slide03 = document.querySelector('.slide3');
var buttonOnSlide12 = document.querySelector('.but-slide-1-2');
var buttonOnSlide13 = document.querySelector('.but-slide-1-3');
var buttonOnSlide21 = document.querySelector('.but-slide-2-1');
var buttonOnSlide23 = document.querySelector('.but-slide-2-3');
var buttonOnSlide31 = document.querySelector('.but-slide-3-1');
var buttonOnSlide32 = document.querySelector('.but-slide-3-2');
var butMenuCatalog = document.querySelector('.catalog');
var catalogMenu = document.querySelector('.catalog-menu');

// Окно при нажатии на кнопку "Login"
link.addEventListener('click', function (event) {
    event.preventDefault();
    popupLogin.classList.add('modal-content-show');
    overlay.classList.add('modal-content-show');
});

overlay.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.remove('modal-content-show');
    popupLogin.classList.remove('modal-content-show');
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popupLogin.classList.contains('modal-content-show')) {
            popupLogin.classList.remove('modal-content-show');
            overlay.classList.remove('modal-content-show');
        }
    }
});

// Переключение слайдов
buttonOnSlide12.addEventListener('click', function () {
    if (slide01.classList.contains('modal-content-show')) {
        slide01.classList.remove('modal-content-show');
        slide01.classList.add('modal-content-hide');
    }
    slide02.classList.remove('modal-content-hide');
    slide02.classList.add('modal-content-show');
});

buttonOnSlide13.addEventListener('click', function () {
    if (slide01.classList.contains('modal-content-show')) {
        slide01.classList.remove('modal-content-show');
        slide01.classList.add('modal-content-hide');
    }
    slide03.classList.remove('modal-content-hide');
    slide03.classList.add('modal-content-show');
});

buttonOnSlide21.addEventListener('click', function () {
    if (slide02.classList.contains('modal-content-show')) {
        slide02.classList.remove('modal-content-show');
        slide02.classList.add('modal-content-hide');
    }
    slide01.classList.remove('modal-content-hide');
    slide01.classList.add('modal-content-show');
});

buttonOnSlide23.addEventListener('click', function () {
    if (slide02.classList.contains('modal-content-show')) {
        slide02.classList.remove('modal-content-show');
        slide02.classList.add('modal-content-hide');
    }
    slide03.classList.remove('modal-content-hide');
    slide03.classList.add('modal-content-show');
});

buttonOnSlide31.addEventListener('click', function () {
    if (slide03.classList.contains('modal-content-show')) {
        slide03.classList.remove('modal-content-show');
        slide03.classList.add('modal-content-hide');
    }
    slide01.classList.remove('modal-content-hide');
    slide01.classList.add('modal-content-show');
});

buttonOnSlide32.addEventListener('click', function () {
    if (slide03.classList.contains('modal-content-show')) {
        slide03.classList.remove('modal-content-show');
        slide03.classList.add('modal-content-hide');
    }
    slide02.classList.remove('modal-content-hide');
    slide02.classList.add('modal-content-show');
});

// Раскрытие верхнего меню при наведении
butMenuCatalog.addEventListener('mouseover', function (event) {
    event.preventDefault();
    catalogMenu.classList.remove('modal-content-hide');
    catalogMenu.classList.add('modal-content-show');
});

butMenuCatalog.addEventListener('mouseout', function (event) {
    event.preventDefault();
    catalogMenu.classList.add('modal-content-hide');
    catalogMenu.classList.remove('modal-content-show');
});