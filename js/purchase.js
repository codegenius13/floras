  (function () {
      "use strict"
      window.addEventListener("load", function () {
        // PRELOADER
    setTimeout(function () {
      var loader = document.querySelector(".preloader");
      loader.style.display = "none";  
    },2000)
     // END PRELOADER
     // STICKY HEADER NAV
      window.addEventListener('scroll', function () {
          var header = document.querySelector(".header");
          header.classList.toggle ('sticky', window.scrollY > 30); 
      });
     // END STICKY HEADER NAV 
// PAGE SCROLLING TOP BUTTON
let scrollingUp = () => {
  let scrollTop = document.getElementById("myBtn");
  let scl = document.documentElement.scrollTop;
  let sclLen = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((scl * 100) / sclLen);
  if (scl>100) {
    scrollTop.style.display = "block";
  }
  else {
    scrollTop.style.display = "none";
  }
  scrollTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
}
window.onscroll = scrollingUp;
// END PAGE SCROLLING TOP BUTTON
// SIDERBAR CLOSE AND OPEN 
var open = document.getElementById('show');
open.addEventListener("click", function () {
  var sidebar = document.querySelector('.sidebar');
  var body  = document.querySelector("body");
  sidebar.style.left = 0;
  body.style.overflow = "hidden";
});
var close = document.getElementById('remove');
close.addEventListener("click", function () {
  var sidebar = document.querySelector('.sidebar');
  var body  = document.querySelector("body");
  sidebar.style.left = -100 + '%';
  body.style.overflow = "auto";
});
// END SIDEBAR CLOSE AND OPEN
  });
})();