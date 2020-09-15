$(function () {

  $(".card__rate").rateYo({
    rating: 4.5,
    starWidth: "15px",
    normalFill: "#ffffff",
    ratedFill: "#ffc000",
    readOnly: true,
    spacing: "3px"
  });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.featured__toright',
      prevEl: '.featured__toleft',
    },
  });
});