$(document).ready(function () {
  // FAQ
  $(".faq-head").on("click", function () {
    // Get next element
    var speed = 300;
    var ans = $(this).parent().find(".faq-ans");
    var icon = $(this).parent().find(".faq-icon");
    if (ans.hasClass("active")) {
      ans.slideUp(speed);
      ans.removeClass("active");
      icon.text("+");
    } else {
      ans.slideDown(speed);
      ans.addClass("active");
      icon.text("-");
    }
    // .slideToggle(500);
  });

  var owl = $(".testi_slider").owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  /****************************/

  jQuery(document.documentElement).keydown(function (event) {
    // var owl = jQuery("#carousel");

    // handle cursor keys
    if (event.keyCode == 37) {
      // go left
      owl.trigger("prev.owl.carousel", [400]);
      //owl.trigger('owl.prev');
    } else if (event.keyCode == 39) {
      // go right
      owl.trigger("next.owl.carousel", [400]);
      //owl.trigger('owl.next');
    }
  });

  LottieInteractivity.create({
    mode: "scroll",
    player: "#CirclesLottie",
    actions: [
      {
        visibility: [0, 1.0],
        type: "play",
      },
    ],
  });
});
