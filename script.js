"use script";
const btn = document.querySelectorAll(".head-nav__btn");

const arrowBtns = document.querySelectorAll(".head-nav__img");

const menus = document.querySelectorAll(".head-nav__list");

const menuBtn = document.querySelector(".head-top__menu-btn");

const menuBtnImg = document.querySelector(".head-top__menu-img");

const menuBox = document.querySelector(".head-top__nav-box");

const menu = [...menus];

const arrowBtn = [...arrowBtns];

menuBox.classList.remove("viewMenu");

let resizeTimer;

/* Eventi listener for change in viewport size to change nav to dropdown */

window.matchMedia("(min-width: 47em)").addEventListener("change", function (e) {
  if (e.target.matches) {
    menuBox.classList.remove("viewMenu");
    menuBtnImg.src = "images/icon-hamburger.svg";
  }
});

/* Navigation btns event listener  */

[...btn].forEach((btn, i) => {
  btn.addEventListener("mouseover", function (e) {
    menu[i].classList.add("visible");
    arrowBtn[i].style.transform = "rotate(180deg)";
  });

  btn.addEventListener("mouseout", function (e) {
    if (menu[i].classList.contains("visible")) {
      menu[i].classList.remove("visible");
      arrowBtn[i].style.transform = "rotate(0deg)";
    }
  });
});

/* Menu btn event listener */

menuBtn.addEventListener("click", function () {
  if (menuBox.classList.contains("viewMenu")) {
    menuBox.classList.remove("viewMenu");
    menuBtnImg.src = "images/icon-hamburger.svg";
  } else {
    menuBox.classList.add("viewMenu");
    menuBtnImg.src = "images/icon-close.svg";
  }
});

/* Debounce function to avert firing of transition animation wile resize */

window.addEventListener("resize", (e) => {
  document.body.classList.add("preload");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("preload");
  }, 300);
});
