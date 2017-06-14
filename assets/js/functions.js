$(document).ready(function() {

  //-----------------------------------------
  // Setup var and handle window scroll events
  //-----------------------------------------
  var didScroll = false;
  var lastScrollTop = 0; // used by header scroll

  $(window).scroll(function(event) {
    didScroll = true;
  });

  // only call our functions on an interval to not interfere with user scrolling
  setInterval(function() {
    if (didScroll) {
      windowdidScroll();
      didScroll = false;
    }
  }, 150);

  function windowdidScroll() {

    // Place calls to functions that react to window scrolling here.
    launchWorkSection();
    headerScroll();

  };


  //-----------------------------------------
  // Move the work thumbs on screen when the user scrolls down.
  //-----------------------------------------
  function launchWorkSection() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var workTop = $('.home-work').position().top;

    if (scrollPosition >= (workTop / 4)) {
      $('.work-wrap').addClass('launched');
    };
  };

  //-----------------------------------------
  // hide the header when scrolling down, show when scrolling up
  //-----------------------------------------
  function headerScroll() {
    var delta = 30;
    var navbarHeight = $('.nav-bar').outerHeight();
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.nav-bar').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.nav-bar').removeClass('nav-up').addClass('nav-down');
      };
    };
    lastScrollTop = st;
  };


  //-----------------------------------------
  // Remove current navigation highlight in header when clicked
  //-----------------------------------------
  $(".navbutton").click(function() {
    var $this = $(this);
    // $("#ccc").toggle().animate();
    $this.toggleClass('active');
    $this.siblings().removeClass("active");
  });



});
