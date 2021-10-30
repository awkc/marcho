$(function() {

$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active')
  
});

$('.related__btn').on('click', function () {
  $('.related__btn').removeClass('related__btn--active');
  $(this).addClass('related__btn--active')
});


  $('.product-tabs__item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $(this).addClass('product-tabs__item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active')
  });


$('.product-content__number').styler();

$('.product-details__big').slick({
  asNavFor: '.product-details__thumb',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: false
});
$('.product-details__thumb').slick({
  asNavFor: '.product-details__big',
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  vertical: true,
  draggable: false
});

$('.shop-content__btn').on('click', function () {
  $('.shop-content__btn').removeClass('shop-content__btn--active');
  $(this).addClass('shop-content__btn--active')
});

$(".product-content__star").rateYo({
    rating: 4,
    starWidth: "19px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px" 
  });

  $(".filter__products__star").rateYo({
    rating: 4,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px" 
  });

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
     prefix:'$',
     onStart: function (data) {
       $('.filter-price__from').text(data.from);
       $('.filter-price__to').text(data.to);
     },
     onChange: function (data) {
       $('.filter-price__from').text(data.from);
       $('.filter-price__to').text(data.to);
     },
  })

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  
});