(function () {
    'use strict'
    window.addEventListener('load', function () {
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

       // SMOOTH SCROLL ONCLICK
       /*const navLinks = document.querySelectorAll("nav ul li a");
       navLinks.forEach(function (eachLink) {
       eachLink.addEventListener('click', smoothScroll)
       });
       function smoothScroll(event) {
        event.preventDefault();
      const targetID = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetID);
      const originalTop = Math.floor(targetSection.getBoundingClientRect().top) -130;
      window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
  
    };
    // END SMOOTH SCROLL ONCLICK
    // SMOOTH SCROLL ONSCROLL AUTOMATIC
    const posts = document.querySelectorAll("section");
      let postTops = [];
      let pageTop;
      let counter = 1;
      let prevCounter = 1;
      let doneResizing;
      resetPagePosition();
      window.addEventListener('scroll', function () {
        pageTop = window.pageYOffset + 200;
        //console.log(pageTop);
        if (pageTop > postTops[counter]) {
          counter++;
          //console.log(`scrolling down ${counter}`);
        }
        else if (counter > 1 && pageTop < postTops[counter - 1]) {
          counter--;
          //console.log(`scrolling up ${counter}`);
        }
        if (counter != prevCounter) {
          navLinks.forEach(function (eachLink) {
              eachLink.removeAttribute('class'); 
          });
          const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
          thisLink.className = 'active';
          prevCounter = counter;
        }
      });
      // WHEN THE USER IS RESIZING OR REFRESHING THE PAGE
      window.addEventListener("resize", function () {
      clearTimeout(doneResizing);
      doneResizing = setTimeout(function () {
          resetPagePosition;
      }, 100);
      });
      function resetPagePosition() {
      postTops = [];
      posts.forEach(function (eachPost) {
          postTops.push(Math.floor(eachPost.getBoundingClientRect().top + window.pageYOffset));
        });
        var pagePosition = window.pageYOffset + 200;
        counter = 0;
        postTops.forEach(function (eachPost) {
          if (pagePosition > eachPost) {
              counter++;
          }
        });
        navLinks.forEach(function (eachLink) {
          eachLink.removeAttribute('class'); 
        });
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
        thisLink.className = 'active';
      };
      // END WHEN THE USER IS RESIZING OR REFRESHING THE PAGE
    // END SMOOTH SCROLL ONSCROLL AUTOMATIC// Smoothscroll Script...*/

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
  });
})();

// GALLERY FILTER 
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gal .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hid"); 
          image.classList.add("reveal"); 
        }else{
          image.classList.add("hid"); 
          image.classList.remove("reveal"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)");
  }
}
  
  const previewBox = document.querySelector(".preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  previewTi = previewBox.querySelector(".ti"),
  previewP = previewBox.querySelector(".p")
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

  function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector(".cont-img").src; 
    let selectedTi = element.querySelector(".ti").innerText;
    let selectedP = element.querySelector(".p").innerText;
    let selectedImgCategory = element.getAttribute("data-name"); 
    previewImg.src = selectedPrevImg; 
    categoryName.textContent = selectedImgCategory; 
    previewTi.textContent = selectedTi;
    previewP.textContent = selectedP;
    previewBox.classList.add("show"); 
    shadow.classList.add("show"); 
    closeIcon.onclick = ()=>{ 
      previewBox.classList.remove("show"); 
      shadow.classList.remove("show"); 
      document.querySelector("body").style.overflow = "auto"; 
    }
  }
// END GALLERY FILTER
