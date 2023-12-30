var nav = document.querySelectorAll(".navbar .navbar-collapse .sub-nav");
var parent = document.querySelectorAll(".background-col");
var child = document.querySelectorAll(".dropdown-content-wrapper");
var nav_main = document.querySelector(".nav-main")
var timeoutId;

// nav_main.addEventListener("mouseenter", function(e) {
//   timeoutId = setTimeout(() => {
//     nav.forEach(function (navElement, i) {
//       navElement.addEventListener("mouseenter", function(e) {
//         parent[i].classList.add("d-block");
//       });
//       navElement.addEventListener("mouseleave", function (e) {
//         parent[i].classList.remove("d-block");
//       });
//       child[i].addEventListener("mouseleave", function (e) {
//         parent[i].classList.remove("d-block");
//       })
//     });
//   }, 300);
// });

nav.forEach(function (navElement, i) {
  navElement.addEventListener("mouseenter", function(e) {
    parent[i].classList.add("d-block");
  });
  navElement.addEventListener("mouseleave", function (e) {
    parent[i].classList.remove("d-block");
  });
  child[i].addEventListener("mouseleave", function (e) {
    parent[i].classList.remove("d-block");
  })
});

nav_main.addEventListener("mouseout", function(e) {
  clearTimeout(timeoutId);
});


nav_main.addEventListener("mouseleave", function(){
  
})

var dropdown_main = document.querySelectorAll(".dropdown-main")

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    dropdown_main.forEach(function (dropdownElement, i) {
      dropdownElement.classList.add("fixed-top");
    });
    document.querySelector(".wrapper").classList.add("hide-navbar");
    // document.querySelector(".wrapper").classList.add("position-absolute");
  } else {
    dropdown_main.forEach(function (dropdownElement, i) {
      dropdownElement.classList.remove("fixed-top");
    });    document.querySelector(".wrapper").classList.remove("hide-navbar");
    // document.querySelector(".wrapper").classList.remove("position-absolute");
    // remove padding top from body
  }
});

// var lastScrollTop;
// navbar = document.getElementById('navbar');
// window.addEventListener('scroll',function(){
// var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// if(scrollTop > lastScrollTop){
// navbar.style.top='-80px';
// }
// else{
// navbar.style.top='0';
// }
// lastScrollTop = scrollTop;
// });