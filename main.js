$(document).ready(function () {
  $(".slider-wrap").slick({
    slide: "div", 
    infinite: true, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    speed: 4000, 
    arrows: true, 
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: false, 
    prevArrow: "<button type='button' class='slick-next'>Next</button>", 
    nextArrow: "<button type='button' class='slick-prev'>Prev</button>", 
    

  });
});

