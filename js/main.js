let header = document.querySelector('.header__container');
let navbar = document.querySelector('.header__container .navbar');
let menu = document.querySelector('.menu__btn');

/**     toggle menu       */
menu.onclick = () => {
  if (navbar.classList.toggle('active')) {
    menu.src = './assets/background/close.png';
  }
  else {
    menu.src = './assets/background/menu.png';
  }
}

/**     on scroll       */
window.onscroll = () => {
  navbar.classList.remove('active');
  menu.src = './assets/background/menu.png';
}
window.addEventListener('scroll', () => {
  header.classList.toggle('on__scroll', window.scrollY > 0);
});

/**     category slider     */
var swiper = new Swiper(".category__slider", {
  spaceBetween: 20,
  loop: true,
  centerSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
AOS.init({
  duration: 1500
})
/**       show slides on scroll      
function showSlides() {
  var slideContent = document.querySelector('.category__container');
  var slidePosition = slideContent.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (slidePosition < screenPosition) {
    slideContent.classList.add('show__slide');
  }
}

window.addEventListener('scroll', showSlides);*/