// start .navbar

var nav_main = document.querySelector(".navbar-container")
var nav = document.querySelectorAll(".navbar .navbar-collapse .sub-nav");
var nav_bg = document.querySelector(".navbar-bg");

var nav_content = document.querySelector(".navbar-main_content");
var menu_togger = document.querySelector(".icon-toggle");
var menu_togger_first = document.querySelector(".menu-toggle div span:first-child");
var menu_togger_second = document.querySelector(".menu-toggle div span:last-child")
var parent = document.querySelectorAll(".background-col");
var hihi = document.querySelectorAll(".hihi");
var exit_parent = document.querySelectorAll(".exit-background-icon");
var timeoutId;

// Ẩn hiện khi hover navbar
nav.forEach(function (navElement, i) {
  navElement.addEventListener("mouseover", function (e) {
    parent[i].classList.add("d-block");
    nav_bg.style.display = "block";
    // nav_main.classList.add("translateX-navbar");
  });
  navElement.addEventListener("mouseleave", function (e) {
    parent[i].classList.remove("d-block");
    nav_bg.style.display = "none";

    // nav_main.classList.add("translateX-navbar");
  });
  hihi[i].addEventListener("mouseenter", function (e) {
    parent[i].classList.remove("d-block");
    nav_bg.style.display = "none";

    // nav_main.classList.add("translateX-navbar");
  });
});


// Ẩn hiện .sub-nav khi click
nav.forEach(function (navElement, i) {
  navElement.addEventListener("focus", function (e) {
    parent[i].classList.add("d-block");
    // nav_main.classList.add("translateX-navbar");
  });
})


// var nav_item = document.querySelectorAll(".navbar-collapse ul .nav-item");

// nav_item.forEach(function (nav, e){
//   nav.addEventListener("click", function(){
//     parent[e].classList.add("d-block");
//   })

// });
exit_parent.forEach(function (exit, j) {
  exit.addEventListener("click", function (e) {
      parent[j].classList.remove("d-block");
      // nav_main.classList.add("translateX-navbar");
  });
});
// nav.forEach(function (navElement, i) {
//   nav[0].addEventListener("click", function(e) {
//       parent[0].classList.add("d-block");
//   });
// })


// Ẳn hiện navbar khi reponsive
menu_togger.addEventListener("click", function() {
  // Check the current state of nav_content
  if (nav_content.style.display === "block") {
    // If it's currently visible, hide it
    nav_content.style.display = "none";
    nav_bg.style.display = "none";
    menu_togger_first.style.display = "block";
    menu_togger_second.style.display = "none";
   
  } else {
    // If it's currently hidden, show it
    nav_content.style.display = "block";
    nav_bg.style.display = "block";
    menu_togger_first.style.display = "none";
    menu_togger_second.style.display = "block";
  }
});

nav_main.addEventListener("mouseleave", function(){
  // if (nav_content.style.display === "block") {
  //   // If it's currently visible, hide it
  nav_content.style.display = "none";
    nav_bg.style.display = "none";
    menu_togger_first.style.display = "block";
    menu_togger_second.style.display = "none";
    nav_content.style.display = "none";
  //   menu_togger_first.style.display = "block";
  //   menu_togger_second.style.display = "none";
  // }
})



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
    if (contentTop <= 50 && isMenuHidden) {
      header.style.top = '-152px';
    }
  } else {
    header.style.top = '0';
  }

  lastScrollTop = scrollTop;
});


// Ẩn hiện form-search
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
// var container = document.querySelectorAll(".container-options")
// var option = document.querySelectorAll(".container-options .product-container-option")

// container.forEach(function(phan,i){
//   phan.addEventListener("mouseenter", function(){
//   })
// })
// option[i].forEach(function(element, e) {
//   element.addEventListener("click", function(){
//     element.style.border = '1px solid #000'
//     // option.forEach(box => {
//       if(element[i] !== element){
//         box.style.border = 'none'
//       }
//     // })
//   })

// })
var containers = document.querySelectorAll(".container-options");

containers.forEach(function(container, i) {
  var options = container.querySelectorAll(".product-container-option");

  container.addEventListener("mouseenter", function() {
    options.forEach(function(option, e) {
      option.addEventListener("click", function() {
        options.forEach(function(box) {
          if (box !== option) {
            box.style.border = 'none';
          }
        });
        option.style.border = '1px solid #000';
      });
    });
  });
});

var footer_menu = document.querySelectorAll(".footer-menu-container");
var icon_first = document.querySelectorAll(".footer-menu-container div span:first-child");
var icon_second = document.querySelectorAll(".footer-menu-container div span:last-child");
var footer_menu = document.querySelectorAll(".footer-menu-container");
var footer_menu_content = document.querySelectorAll(".footer-menu_content ul");

footer_menu.forEach((fm, e) => {
  fm.addEventListener("click", function(){
    if (footer_menu_content[e].style.display === "block") {
      icon_first[e].style.display="block";
      icon_second[e].style.display="none";
      footer_menu_content[e].style.display = "none";
    } else {
      icon_first[e].style.display="none";
      icon_second[e].style.display="block";
      footer_menu_content[e].style.display = "block";
    }
  });
});
