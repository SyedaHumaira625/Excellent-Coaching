 let lasth1 = document.querySelector(".loader-last-h1")
let loader = document.querySelector(".loader")

lasth1.addEventListener("animationend", function() {
  loader.classList.add('hide');
})

let menu = document.querySelector(".menu-div")
let menui = document.querySelector(".fa-bars")
let crossi = document.querySelector(".fa-times")

menui.addEventListener("click", function() {
    menu.style.top = "0"
})

crossi.addEventListener("click", function() {
    menu.style.top = "-100%"
})

