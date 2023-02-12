"use strict";

///////////////////CLOCK////////////

{
  function showTime() {
    let date = new Date();
    let hodina = date.getHours();
    let minuta = date.getMinutes();
    let sekunda = date.getSeconds();

    hodina = hodina < 10 ? "0" + hodina : hodina;
    minuta = minuta < 10 ? "0" + minuta : minuta;
    sekunda = sekunda < 10 ? "0" + sekunda : sekunda;

    let time = hodina + ":" + minuta + ":" + sekunda;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }

  showTime();
}

///tabbed//////
{
  const tab = document.querySelectorAll(".tab");
  const tabKarty = document.querySelector(".tabbed__component__karty");
  const tabObsah = document.querySelectorAll(".tab__obsah");

  tabKarty.addEventListener("click", function (e) {
    const clicked = e.target.closest(".tab");

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tab.forEach((t) => t.classList.remove("tab__active"));
    tabObsah.forEach((c) => c.classList.remove("tab__obsah__active"));

    // Activate tab
    clicked.classList.add("tab__active");

    // Activate content area
    document
      .querySelector(`.tab__obsah__${clicked.dataset.tab}`)
      .classList.add("tab__obsah__active");
  });
}

////////////////////////////

//Javascript for Navigation effect on scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Javascript for responsive navigation sidebar Nav
let menu = document.querySelector(".navbar__menu");
let tladicloMenu = document.querySelector(".tlacidlo__menu");
let tlacidloX = document.querySelector(".tlacidlo__X");

tladicloMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

tlacidloX.addEventListener("click", () => {
  menu.classList.remove("active");
});

///////////////////////

let gmail = document.querySelectorAll(".gmail").forEach((a) => {
  a.addEventListener("click", function (e) {
    window.open("mailto:laci.ruzik@gmail.com");
    e.preventDefault();
  });
});
