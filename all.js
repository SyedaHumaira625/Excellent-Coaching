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

// FAQ section Logic Start

let QAcont = document.querySelectorAll(".ques-ans-cont");

QAcont.forEach(function (QAparent) {
  let dropicon = QAparent.querySelector(".fa-circle-chevron-down");

  let answerone = QAparent.querySelectorAll(".answer");

  dropicon.addEventListener("click", function () {
    answerone.forEach(function (ans) {
      ans.classList.toggle("close");
    });
    dropicon.classList.toggle("fa-xmark");
  });
});

// Faq Section End