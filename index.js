let loader = document.querySelector(".loader");

setTimeout(function () {
  loader.style.top = "-100%";
}, 3000);

let navBar = document.querySelector("nav");
let iconXmark = document.querySelector("#cross-icon");
let iconMenu = document.querySelector("#menu-icon");

iconXmark.addEventListener("click", function () {
  navBar.style.transform = "translateY(-100%)";
});


