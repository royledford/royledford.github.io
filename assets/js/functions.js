// $(document).ready(function() {


// -----------------------------------------------------------
// Landing navbar clicks
// -----------------------------------------------------------
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement
        // text = target.textContent || text.innerText;
    if (target.classList.contains("nav-link")) {
      setActiveLandingNav(target);
    }
}, false);


// -----------------------------------------------------------
// Show / Hide the landing navbar when on smaller screen sizes
// -----------------------------------------------------------
function toggleMobileNav() {
  var x = document.getElementsByClassName("landing-nav");
  // alert(x[0].className);
  if (x[0].className === "landing-nav") {
      x[0].className += " show-mobile-nav";
  } else {
      x[0].className = "landing-nav";
  }
};



// -----------------------------------------------------------
// Add class active to the landing nav that was clicked in the
// landing page navbar
// -----------------------------------------------------------
function setActiveLandingNav(el) {
  // el.siblings().removeClass('active');
  var siblings = getSiblings(el.parentNode);
  // removeClassFromArray(siblings, "active");
  // alert(siblings.length);
  el.classList.toggle('active');
  for (i = 0; i < siblings.length; i++) {
    // alert(siblings[i].childNodes[0].classList);
    siblings[i].childNodes[0].classList.remove("active");
  }

};



// -----------------------------------------------------
// From stack overflow (how jquery does siblings)
// -----------------------------------------------------
function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
};

function getChildren(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling )
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );
    return r;
};

// -----------------------------------------------------
// Remove a class from an array of elements
// -----------------------------------------------------
function removeClassFromArray(elList, className) {
  for (i = 0; i < elList.length; i++) {
    elList[i].classList.remove(className);
  }
};

//
//   //-----------------------------------------
//   // Setup var and handle window scroll events
//   //-----------------------------------------
//   var didScroll = false;
//   var lastScrollTop = 0; // used by header scroll
//
//   $(window).scroll(function(event) {
//     didScroll = true;
//   });
//
//   // only call our functions on an interval to not interfere with user scrolling
//   setInterval(function() {
//     if (didScroll) {
//       windowdidScroll();
//       didScroll = false;
//     }
//   }, 150);
//
//   function windowdidScroll() {
//
//     // Place calls to functions that react to window scrolling here.
//     launchWorkSection();
//     headerScroll();
//
//   };
//
//
//   //-----------------------------------------
//   // Move the work thumbs on screen when the user scrolls down.
//   //-----------------------------------------
//   function launchWorkSection() {
//     var scrollPosition = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     var workTop = $('.home-work').position().top;
//
//     if (scrollPosition >= (workTop / 4)) {
//       $('.work-wrap').addClass('launched');
//     };
//   };
//
//   //-----------------------------------------
//   // hide the header when scrolling down, show when scrolling up
//   //-----------------------------------------
//   function headerScroll() {
//     var delta = 30;
//     var navbarHeight = $('.nav-bar').outerHeight();
//     var st = $(this).scrollTop();
//
//     if (Math.abs(lastScrollTop - st) <= delta)
//       return;
//
//     // If they scrolled down and are past the navbar, add class .nav-up
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight) {
//       // Scroll Down
//       $('.nav-bar').removeClass('nav-down').addClass('nav-up');
//     } else {
//       // Scroll Up
//       if (st + $(window).height() < $(document).height()) {
//         $('.nav-bar').removeClass('nav-up').addClass('nav-down');
//       };
//     };
//     lastScrollTop = st;
//   };
//
//
//   //-----------------------------------------
//   // Remove current navigation highlight in header when clicked
//   //-----------------------------------------
//   $(".navbutton").click(function() {
//     var $this = $(this);
//     // $("#ccc").toggle().animate();
//     $this.toggleClass('active');
//     $this.siblings().removeClass("active");
//   });
//
//
//
// }); //_on ready
