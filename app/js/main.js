$(function () {

  $(".product-slider__rate").rateYo({
    rating: 4.5,
    starWidth: "15px",
    normalFill: "#ffffff",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px"
  });

  $(".product__rate").rateYo({
    rating: 4.5,
    starWidth: "15px",
    normalFill: "#ffffff",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px"
  });

  var swiper = new Swiper('.featured__slider', {
    navigation: {
      nextEl: '.featured__toright',
      prevEl: '.featured__toleft',
    },
  });

  $('.release__link').on('click', function () {
    $('.release__box-hidden').slideToggle("fast");
  });

  var mixer = mixitup('.release__items');

  var swiper = new Swiper('.followers__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.followers__toright',
      prevEl: '.followers__toleft',
    },
  });
});