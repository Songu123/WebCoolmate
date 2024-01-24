// start .navbar

var nav_collapse = document.querySelector('.nav-inner');
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
nav.forEach(function(navElement, i) {
    navElement.addEventListener("mouseover", function(e) {
        parent[i].classList.add("d-block");
        nav_bg.style.display = "block";
        // nav_main.classList.add("translateX-navbar");
    });
    navElement.addEventListener("mouseleave", function(e) {
        parent[i].classList.remove("d-block");
        nav_bg.style.display = "none";

        // nav_main.classList.add("translateX-navbar");
    });
    hihi[i].addEventListener("mouseenter", function(e) {
        parent[i].classList.remove("d-block");
        nav_bg.style.display = "none";

        // nav_main.classList.add("translateX-navbar");
    });
});


// Ẩn hiện .sub-nav khi click
nav.forEach(function(navElement, i) {
    navElement.addEventListener("focus", function(e) {
        parent[i].classList.add("d-block");
        // nav_main.classList.add("translateX-navbar");
    });
})

exit_parent.forEach(function(exit, j) {
    exit.addEventListener("click", function(e) {
        parent[j].classList.remove("d-block");
        // nav_main.classList.add("translateX-navbar");
    });
});

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

nav_collapse.addEventListener("mouseenter", function() {
    nav_content.style.display = "none";
    nav_bg.style.display = "none";
    menu_togger_first.style.display = "block";
    menu_togger_second.style.display = "none";
})


nav_bg.addEventListener("click", function(e) {
    nav_content.style.display = "none";
    nav_bg.style.display = "none";
    menu_togger_first.style.display = "block";
    menu_togger_second.style.display = "none";
    nav_content.style.display = "none";
})



// hide .header when scrolling
var wrapper = document.querySelector("#wrapper");
var header = document.querySelector(".header");
var content = document.querySelector("#content");
var menu_control = document.querySelector(".header-search");
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
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
var search_control = document.querySelector(".menu-toggle i");
var exit_menu = document.querySelector(".exit-menu-search");
var pseudo_search = document.querySelector(".pseudo-search");

form_menu.addEventListener("click", function() {
    menu_control.style.display = "block"
})
exit_menu.addEventListener("click", function() {
    menu_control.style.display = "none"

})
pseudo_search.addEventListener("click", function() {
    menu_control.style.display = "none"
})


search_control.addEventListener("click", function() {
        if (menu_control.style.display === "none") {
            menu_control.style.display = "block"
        } else {
            menu_control.style.display = "none"

        }
    })
    // end navbar
    // var btn1 = document.querySelector(".product_tab button:first-child");
var btn = document.querySelectorAll(".product_tab button");

btn.forEach(function(e, i) {
    e.addEventListener("click", function() {
        e.style.background = "#000"
        e.style.color = "#fff"
        btn.forEach(bt => {
            if (bt !== e) {
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
    fm.addEventListener("click", function() {
        if (footer_menu_content[e].style.display === "block") {
            icon_first[e].style.display = "block";
            icon_second[e].style.display = "none";
            footer_menu_content[e].style.display = "none";
        } else {
            icon_first[e].style.display = "none";
            icon_second[e].style.display = "block";
            footer_menu_content[e].style.display = "block";
        }
    });
});

var banchay = JSON.parse(localStorage.getItem("banchay"))
var banchay_html = document.querySelectorAll(".content-products .product-slider")[0]

banchay.forEach((p) => {
    banchay_html.innerHTML += `<div class="item-product col-6 col-sm-6 col-md-3 col-lg-2 px-2">
    <div class="product-thumnail w-100 position-relative overflow-hidden rounded-4">
        <div class="product-container-img">
            <img src="${p.img_1}" class="position-absolute product-img-01 w-100 rounded-4" alt="">
            <img src="${p.img_2}" class="product-img-02 w-100 rounded-4" alt="">
            <span class="product-tags position-absolute top-0 end-0 m-3 px-2 py-1 rounded-2 text-light fw-bold">New</span>
        </div>
        <div class="product-select">
            <p class="text-dark fw-bold mb-2">Thêm nhanh vào giỏ hàng +</p>
            <form class="d-flex flex-wrap text-center gap-1">
                <button class="size">
<span>M</span>
</button>
                <button class="size">
<span>L</span>
</button>
                <button class="size">
<span>XL</span>
</button>
                <button class="size">
<span>2XL</span>
</button>
                <button class="size">
<span>3XL</span>
</button>
            </form>
        </div>
    </div>
    <div class="mt-3">
        <div class="container-options mb-none d-flex">
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
        </div>
        <h3 class="mb-0">
            <a href="" class="text-decoration-none fw-normal text-dark">${p.name}</a>
        </h3>
        <p class="mb-0 text-body-secondary">Thoáng mát / Mix màu</p>
        <div class="product-price my-2">
            <div class="">
                <ins class="fw-bold text-decoration-none">${p.price}</ins>
                <del class="fst-italic opacity-75 mx-2">500.000đ</del>
                <span class="text-danger">-18%</span>
            </div>
        </div>
        <div class="product-hint">
            <span class="fst-italic text-primary">Mua 2 giảm thêm 10%</span>
        </div>
    </div>
</div>`
})




var quandai = JSON.parse(localStorage.getItem("quandai"))
var quandai_html = document.querySelectorAll(".content-products .product-slider")[1]

quandai.forEach((q) => {
    quandai_html.innerHTML += `<div class="item-product col-6 col-sm-6 col-md-3 col-lg-2 px-2">
    <div class="product-thumnail w-100 position-relative">
        <div class="product-container-img">
            <img src="${q.img_1}" class="position-absolute product-img-01 w-100 rounded-4" alt="">
            <img src="${q.img_2}" class="product-img-02 w-100 rounded-4" alt="">
            <span class="product-tags position-absolute top-0 end-0 m-3 px-2 py-1 rounded-2 text-light fw-bold">New</span>
        </div>
        <div class="product-select">
            <p class="text-dark fw-bold mb-2">Thêm nhanh vào giỏ hàng +</p>
            <form class="d-flex flex-wrap text-center gap-1">
                <button class="size">
<span>M</span>
</button>
                <button class="size">
<span>L</span>
</button>
                <button class="size">
<span>XL</span>
</button>
                <button class="size">
<span>2XL</span>
</button>
                <button class="size">
<span>3XL</span>
</button>
            </form>
        </div>
    </div>
    <div class="mt-3">
        <div class="container-options mb-none d-flex">
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
        </div>
        <h3 class="mb-0">
            <a href="" class="text-decoration-none fw-normal text-dark">${q.name}</a>
        </h3>
        <p class="mb-0 text-body-secondary">Thoáng mát / Mix màu</p>
        <div class="product-price my-2">
            <div class="">
                <ins class="fw-bold text-decoration-none">${q.price}</ins>
                <del class="fst-italic opacity-75 mx-2">500.000đ</del>
                <span class="text-danger">-18%</span>
            </div>
        </div>
        <div class="product-hint">
            <span class="fst-italic text-primary">Mua 2 giảm thêm 10%</span>
        </div>
    </div>
</div>`
})


var thudong = JSON.parse(localStorage.getItem("thudong"))
var thudong_html = document.querySelectorAll(".content-products .product-slider")[2]

thudong.forEach((t) => {
    thudong_html.innerHTML += `<div class="item-product col-6 col-sm-6 col-md-3 col-lg-2 px-2">
    <div class="product-thumnail w-100 position-relative">
        <div class="product-container-img">
            <img src="${t.img_1}" class="position-absolute product-img-01 w-100 rounded-4" alt="">
            <img src="${t.img_2}" class="product-img-02 w-100 rounded-4" alt="">
            <span class="product-tags position-absolute top-0 end-0 m-3 px-2 py-1 rounded-2 text-light fw-bold">New</span>
        </div>
        <div class="product-select">
            <p class="text-dark fw-bold mb-2">Thêm nhanh vào giỏ hàng +</p>
            <form class="d-flex flex-wrap text-center gap-1">
                <button class="size">
<span>M</span>
</button>
                <button class="size">
<span>L</span>
</button>
                <button class="size">
<span>XL</span>
</button>
                <button class="size">
<span>2XL</span>
</button>
                <button class="size">
<span>3XL</span>
</button>
            </form>
        </div>
    </div>
    <div class="mt-3">
        <div class="container-options mb-none d-flex">
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
        </div>
        <h3 class="mb-0">
            <a href="" class="text-decoration-none fw-normal text-dark">${t.name}</a>
        </h3>
        <p class="mb-0 text-body-secondary">Thoáng mát / Mix màu</p>
        <div class="product-price my-2">
            <div class="">
                <ins class="fw-bold text-decoration-none">${t.price}</ins>
                <del class="fst-italic opacity-75 mx-2">500.000đ</del>
                <span class="text-danger">-18%</span>
            </div>
        </div>
        <div class="product-hint">
            <span class="fst-italic text-primary">Mua 2 giảm thêm 10%</span>
        </div>
    </div>
</div>`
})

var chaybo = JSON.parse(localStorage.getItem("chaybo"))
var chaybo_html = document.querySelectorAll(".content-products .product-slider")[3]

chaybo.forEach((c) => {
    chaybo_html.innerHTML += `<div class="item-product col-6 col-sm-6 col-md-3 col-lg-2 px-2">
    <div class="product-thumnail w-100 position-relative">
        <div class="product-container-img">
            <img src="${c.img_1}" class="position-absolute product-img-01 w-100 rounded-4" alt="">
            <img src="${c.img_2}" class="product-img-02 w-100 rounded-4" alt="">
            <span class="product-tags position-absolute top-0 end-0 m-3 px-2 py-1 rounded-2 text-light fw-bold">New</span>
        </div>
        <div class="product-select">
            <p class="text-dark fw-bold mb-2">Thêm nhanh vào giỏ hàng +</p>
            <form class="d-flex flex-wrap text-center gap-1">
                <button class="size">
<span>M</span>
</button>
                <button class="size">
<span>L</span>
</button>
                <button class="size">
<span>XL</span>
</button>
                <button class="size">
<span>2XL</span>
</button>
                <button class="size">
<span>3XL</span>
</button>
            </form>
        </div>
    </div>
    <div class="mt-3">
        <div class="container-options mb-none d-flex">
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
            <div class="product-container-option">
                <div class="option-color rounded-5 bg-secondary"></div>
            </div>
        </div>
        <h3 class="mb-0">
            <a href="" class="text-decoration-none fw-normal text-dark">${c.name}</a>
        </h3>
        <p class="mb-0 text-body-secondary">Thoáng mát / Mix màu</p>
        <div class="product-price my-2">
            <div class="">
                <ins class="fw-bold text-decoration-none">${c.price}</ins>
                <del class="fst-italic opacity-75 mx-2">500.000đ</del>
                <span class="text-danger">-18%</span>
            </div>
        </div>
        <div class="product-hint">
            <span class="fst-italic text-primary">Mua 2 giảm thêm 10%</span>
        </div>
    </div>
</div>`
})