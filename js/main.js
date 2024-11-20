// Hero swiper slider
var swiper = new Swiper(" .mySwiper", {
  effect: 'cube',
  speed: 5000,
  loop:true, 
      spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay:3000,
    },
  });