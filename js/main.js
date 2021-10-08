// sticky header start 
$(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 200) {
      $(".navbar").addClass("bg");
    } else {
      $(".navbar").removeClass("bg");
    }
  });
});
// sticky header end 

// banner slider start
$('.banner-item-part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
  nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
  responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// banner slider end 