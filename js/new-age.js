(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  // button effect
  $('#feature-chat').click(function () {
    $('#feature-chat').addClass('active');
    $('#feature-chat-description').addClass('active');
    $('#feature-video').removeClass('active');
    $('#feature-video-description').removeClass('active');
    $('#feature-image').removeClass('active');
    $('#feature-image-description').removeClass('active');
  })

  $('#feature-video').click(function () {
    $('#feature-video').addClass('active');
    $('#feature-video-description').addClass('active');
    $('#feature-chat').removeClass('active');
    $('#feature-chat-description').removeClass('active');
    $('#feature-image').removeClass('active');
    $('#feature-image-description').removeClass('active');
  })

  $('#feature-image').click(function () {
    $('#feature-image').addClass('active');
    $('#feature-image-description').addClass('active');
    $('#feature-video').removeClass('active');
    $('#feature-video-description').removeClass('active');
    $('#feature-chat').removeClass('active');
    $('#feature-chat-description').removeClass('active');
  })

})(jQuery); // End of use strict
