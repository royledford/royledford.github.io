$( document ).ready(function() {

  // Get started!

  //-----------------------------------------
  // Remove current navigation highlight in header when clicked
  //-----------------------------------------
  $(".navbutton").click(function() {
    console.log('test');
    var $this = $(this);
      // $("#ccc").toggle().animate();
      $this.toggleClass('active');
      $this.siblings().removeClass("active");

  });



});
