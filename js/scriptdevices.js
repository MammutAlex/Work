var link = document.querySelector('.login-but');
var popupLogin = document.querySelector('.write-us-popup');
var overlay = document.querySelector('.overlay');

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
};