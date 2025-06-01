let menu = document.querySelector(".menu-cont-parent");
let menui = document.querySelector(".fa-bars");
let crossi = document.querySelector(".fa-circle-xmark");
let logo = document.querySelector(".head");

menui.addEventListener("click", function () {
  menu.style.top = "0%";
});

crossi.addEventListener("click", function () {
  menu.style.top = "-100%";
});

let lasth1 = document.querySelector(".loader-last-h1");
let loader = document.querySelector(".loader");

lasth1.addEventListener("animationend", function () {
  loader.classList.add("hide");
});

