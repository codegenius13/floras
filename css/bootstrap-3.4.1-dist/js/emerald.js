// HEADER SECTION OF THE WEBPAGE
  // COLLAPSABLE NAV
$(function () { // Same as document .addEventListener("DONContentLoaded"...
    
    // Same as document .querySelector("#navbarToggle").addEventListener("blur"...
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 708) {
            $("#collapsable-nav").collapse('hide');
        }
    });
    window.addEventListener("scroll", function () {
        var header = document.querySelector ("header");
        header.classList.toggle("sticky", window.scrollY > 20)
    });
});
// END COLLAPSABLE NAV
// WHEN THE USER SCROLLS DOWN THE PAGE
 // Get the button
 let mybutton =
 document.getElementById("myBtn")

 // When the user scrolls down 20px from the top of th document show the button
 window.onscroll = function () {
  scrollFunction ()
 };
 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      mybutton.style.display = "block"
  }
  else {
      mybutton.style.display = "none"
  }
 }
 // When the user clicks on the button, scroll to the top of the document
 function topFuntion() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }
 // END SCROLL SECTION
// LOADING IMAGES AND WINDOW
function emerald() {
    'use strict'
    // LODING LOGO-IMG
    var logo = document.getElementById('logo-pic').addEventListener('load');
    // END LOADING LOGO-IMG

    // LOADING HOME PAGE IMG
    var jumbotron = document.getElementById('jumbotron').addEventListener('load');
    var menu = document.getElementById('shop').addEventListener('load'); 
    var specials = document.getElementById('specials').addEventListener('load');
    // END LOADING HOME PAGE IMG

    // LOADING SVG ICONS
    var whatsapp = document.getElementById('whatsapp-icon').addEventListener('load');
    var instagram = document.getElementById('instagram-icon').addEventListener('load');
    var facebook = document.getElementById('facebook-icon').addEventListener('load');
    var twitter = document.getElementById('twitter-icon').addEventListener('load');
    // END LOADING SVG ICON

    // LOADING CATEGOTY PAGES IMG
    var stationeryHolderOne = document.getElementById('stationery-one').addEventListener('load');
    var stationery = document.getElementById('stationery').addEventListener('load');
    var note = document.getElementById('note').addEventListener('load');
    var palmflet = document.getElementById('palmflet').addEventListener('load');
    var purses = document.getElementById('purses').addEventListener('load');
    var Bags = document.getElementById('Bags').addEventListener('load')
    var bags = document.getElementById('bags').addEventListener('load');
    var books = document.getElementById('books').addEventListener('load');
    // END LOADING CATEGORY PAGES IMG
    
    // LOADING BUY CATEGORY IMG
    var mastercard = document.getElementById('mastercard').addEventListener('load');
    var visa = document.getElementById('visa').addEventListener('load');
    var verve = document.getElementById('verve').addEventListener('load');
    var pos = document.getElementById('pos').addEventListener('load');
    // END LOADING BUY CATEGORY IMG
}
emerald();