$( document ).ready(function() {

  //-----------------------------------------
  // Setup var and handle window scroll events
  //-----------------------------------------
  var scrolled = false;
  $(window).scroll(function(event) {
    scrolled = true;
  });

  // only call our functions on an interval to not interfere with user scrolling
  setInterval(function() {
    if (scrolled) {
      windowScrolled();
      scrolled = false;
    }
  }, 150);

  function windowScrolled() {

    // Place calls to functions that react to window scrolling here.
    launchWorkSection();


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
    }
  }


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
