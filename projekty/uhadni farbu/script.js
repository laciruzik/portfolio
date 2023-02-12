let pocetFarieb = 9;
let colors = genRandomFarby(pocetFarieb);
let farby = document.querySelectorAll(".farba");
let vybranaFarba = generovanaFarba();
let rgb = document.querySelector("#RGB");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
  colors = genRandomFarby(pocetFarieb);
  vybranaFarba = generovanaFarba();
  rgb.textContent = vybranaFarba;
  resetButton.textContent = "Nové Farby";
  for (let i = 0; i < farby.length; i++) {
    farby[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "rgb(255, 132, 16)";
});

rgb.textContent = vybranaFarba;

for (let i = 0; i < farby.length; i++) {
  farby[i].style.backgroundColor = colors[i];
  farby[i].addEventListener("click", function () {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === vybranaFarba) {
      resetButton.textContent = "Ďalšia hra?";
      zmenaFarby(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}

function zmenaFarby(zmena) {
  for (let i = 0; i < farby.length; i++) {
    farby[i].style.background = zmena;
  }
}

function generovanaFarba() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function genRandomFarby(genFarba) {
  let arr = [];
  for (let i = 0; i < genFarba; i++) {
    arr.push(randomFarba());
  }
  return arr;
}

function randomFarba() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
