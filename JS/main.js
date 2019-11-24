$('.carousel').slick();

document.querySelector ('.navbar-wrapper').onclick = function() {
    document.querySelector ('.navbar').classList.toggle('navbar__active');
}

let menuElem = document.getElementById('filter');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};


