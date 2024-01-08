// start .navbar
var nav = document.querySelectorAll(".navbar .navbar-collapse .sub-nav");
var parent = document.querySelectorAll(".background-col");
var child = document.querySelectorAll(".dropdown-main");
var nav_main = document.querySelector(".nav-main")
var nav_bar = document.querySelector(".navbar-main")
var hihi = document.querySelectorAll(".hihi")
var timeoutId;


nav.forEach(function (navElement, i) {
  navElement.addEventListener("mouseenter", function(e) {
  // timeoutId = setTimeout(function(){
      parent[i].classList.add("d-block");
      // clearTimeout(timeoutId);
    // }, 100)
  });
  navElement.addEventListener("mouseleave", function (e) {
      parent[i].classList.remove("d-block");
  });
  hihi[i].addEventListener("mouseenter", function (e) {
      parent[i].classList.remove("d-block");
  })
});


// var wrapper = document.querySelector("#wrapper");
// var header = document.querySelector(".header");
// var content = document.querySelector("#content");
// var lastScrollTop = 0;

// // navbar = document.getElementById('navbar');
// window.addEventListener('scroll',function(){
// var scrollTop = wrapper.pageYOffset || document.documentElement.scrollTop;
// if(scrollTop > lastScrollTop){
//   // if(content.top <= '150px'){
//     header.style.top='-152px';
//   // }
// }
// else{
// header.style.top='0';
// }
// lastScrollTop = scrollTop;
// });

// var wrapper = document.querySelector("#wrapper");
// var header = document.querySelector(".header");
// var content = document.querySelector("#content");
// var lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
//   // Get the top position of the content element
//   var contentTop = content.getBoundingClientRect().top;

//   if (scrollTop > lastScrollTop) {
//     if (contentTop <= 50) {
//       header.style.top = '-152px';
//     }
//   } else {
//     header.style.top = '0';
//   }

//   lastScrollTop = scrollTop;
// });

// 

// hide .header when scrolling
var wrapper = document.querySelector("#wrapper");
var header = document.querySelector(".header");
var content = document.querySelector("#content");
var menu_control = document.querySelector(".header-search");
var lastScrollTop = 0;

window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Get the top position of the content element
  var contentTop = content.getBoundingClientRect().top;

  // Check if menu_control is set to display: none
  var isMenuHidden = getComputedStyle(menu_control).display === "none";

  if (scrollTop > lastScrollTop) {
    if (contentTop <= 100 && isMenuHidden) {
      header.style.top = '-152px';
    }
  } else {
    header.style.top = '0';
  }

  lastScrollTop = scrollTop;
});



var form_menu = document.querySelector(".form-search");
var menu_control = document.querySelector(".header-search");
var exit_menu = document.querySelector(".btn-close");
var pseudo_search = document.querySelector(".pseudo-search");

form_menu.addEventListener("click", function() {
  menu_control.classList.add("d-block")
  // header.classList.add("fixed-top")
})
exit_menu.addEventListener("click", function() {
  menu_control.classList.remove("d-block")
  // header.classList.remove("fixed-top")

})
pseudo_search.addEventListener("click", function() {
  menu_control.classList.remove("d-block")
  // header.classList.remove("fixed-top")
})

// end navbar
// var btn1 = document.querySelector(".product_tab button:first-child");
var btn = document.querySelectorAll(".product_tab button");

btn.forEach(function(e,i) {
  e.addEventListener("click", function(){
    e.style.background = "#000"
    e.style.color = "#fff"
    btn.forEach(bt => {
      if(bt !== e){
        bt.style.background = "#fff"
        bt.style.color = "#000"
      }
    })
  })
})

// carosel slider-products
var container = document.querySelectorAll(".container-options")
var option = document.querySelectorAll(".container-options .product-container-option")

option.forEach(function(element, i) {
  element.addEventListener("click", function(){
    element.style.border = '1px solid #000'
    option.forEach(box => {
      if(box !== element){
        box.style.border = 'none'
      }
    })
})

})