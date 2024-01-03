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

// nav_bar.addEventListener("mouseenter", function(){
//   timeoutId = setTimeout(function(){
//     nav.forEach(function (navElement, i) {
//       navElement.addEventListener("mouseenter", function(e) {
//           parent[i].classList.add("d-block");
//         // setTimeout(function(){
//         //   clearTimeout(timeoutId);
//         // }, 100)
//       });
//       navElement.addEventListener("mouseleave", function (e) {
//           parent[i].classList.remove("d-block");
//       });
//       hihi[i].addEventListener("mouseenter", function (e) {
//           parent[i].classList.remove("d-block");
//       })
//     });
//   }, 200)
// })

// nav_bar.addEventListener("mouseout", function(){
//     clearTimeout(timeoutId);
// })


var dropdown_main = document.querySelectorAll(".dropdown-main")

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     dropdown_main.forEach(function (dropdownElement, i) {
//       // dropdownElement.classList.add("fixed-top");
//     });
//     document.querySelector(".wrapper").classList.add("hide-navbar");
//     // document.querySelector(".wrapper").classList.add("position-absolute");
//   } else {
//     dropdown_main.forEach(function (dropdownElement, i) {
//       // dropdownElement.classList.remove("fixed-top");
//     });    document.querySelector(".wrapper").classList.remove("hide-navbar");
//     // document.querySelector(".wrapper").classList.remove("position-absolute");
//     // remove padding top from body
//   }
// });

window.addEventListener("scroll", function () {
  var wrapper = document.querySelector(".wrapper");

  if (window.scrollY > 0) {
    dropdown_main.forEach(function (dropdownElement, i) {
      // dropdownElement.classList.toggle("fixed-top", true);
    });
    wrapper.classList.add("hide-navbar");
    // wrapper.classList.add("position-absolute");
  } else {
    dropdown_main.forEach(function (dropdownElement, i) {
      // dropdownElement.classList.toggle("fixed-top", false);
    });
    wrapper.classList.remove("hide-navbar");
    // wrapper.classList.remove("position-absolute");
  }
});


var wrapper = document.querySelector("#wrapper");
var header = document.querySelector("#header");
// var lastScrollTop;
// // navbar = document.getElementById('navbar');
// window.addEventListener('scroll',function(){
// var scrollTop = wrapper.pageYOffset || document.documentElement.scrollTop;
// if(scrollTop > lastScrollTop){
// header.style.top='0';
// }
// else{
// header.style.top='-80px';
// }
// lastScrollTop = scrollTop;
// });

// var prevScrollpos = wrapper.pageYOffset;
// wrapper.onscroll = function() {
// var currentScrollPos = wrapper.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     header.classList.add("hide-navbar");
//   } else {
//     header.classList.remove("hide-navbar");
//   }
//   prevScrollpos = currentScrollPos;
// }

var form_menu = document.querySelector(".form-search");
var menu_control = document.querySelector(".header-search");
var exit_menu = document.querySelector(".btn-close");
var pseudo_search = document.querySelector(".pseudo-search");

form_menu.addEventListener("click", function() {menu_control.classList.add("d-block")})
exit_menu.addEventListener("click", function() {
  menu_control.classList.remove("d-block")
})
pseudo_search.addEventListener("click", function() {menu_control.classList.remove("d-block")})

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
// function changeColor(element) {
//   // Change color of the focused box
//   element.style.border = '1px solid #000'

//   // Reset color of the remaining boxes
//   document.querySelectorAll('.product-container-option').forEach(box => {
//     if (box !== element) {
//       box.style.border = ''
//     }
//   });
// }