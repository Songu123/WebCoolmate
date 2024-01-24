// #content

var checkbox_main = document.querySelector(".check-box-container")
var checkbox = document.querySelector(".check-box")
var icon_check = document.querySelector(".icon-check")
var pay_item = document.querySelectorAll(".pay-item")
var pay_icon = document.querySelectorAll(".click-choose span:last-child")

checkbox_main.addEventListener("click", function(e) {
    if (icon_check.style.opacity === "0") {
        checkbox.classList.add("border-content")
        icon_check.style.opacity = "1"
    } else {
        checkbox.classList.remove("border-content")
        icon_check.style.opacity = "0"
    }
})

pay_item.forEach(function(e, i) {
    e.addEventListener("click", function() {
        e.style.opacity = "1"
        e.classList.add("border-content")
        pay_icon[i].style.opacity = "1";
        pay_item.forEach(function(element, j) {
            if (element !== e) {
                element.style.opacity = ".7"
                element.classList.remove("border-content")
                pay_icon[j].style.opacity = "0";
            }
        })
    })
});

// end #content