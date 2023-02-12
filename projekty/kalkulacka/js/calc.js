let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    text = e.target.innerText;

    if (text == "×") {
      text = "*";
    }

    if (text == "÷") {
      text = "/";
    }
    screen.value += text;
  });
}

function degToRad() {
  screen.value = screen.value * (Math.PI / 180);
}

function radToDeg() {
  screen.value = screen.value / (Math.PI / 180);
}

function sin() {
  screen.value = Math.sin(screen.value);
}

function asin() {
  screen.value = Math.asin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}
function acos() {
  screen.value = Math.acos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}
function atan() {
  screen.value = Math.atan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function tenx() {
  screen.value = 10 ** screen.value;
}

//je to ln
function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value += Math.round(Math.PI * 100000) / 100000;
}

function e() {
  screen.value += Math.round(Math.E * 100000) / 100000;
}

function fact() {
  let num, f;
  f = 1;
  num = screen.value;
  for (let i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function percent() {
  screen.value = screen.value / 100;
}

function ex() {
  screen.value = Math.E ** screen.value;
}

function log10() {
  screen.value = Math.log10(screen.value);
}

function log2() {
  screen.value = Math.log2(screen.value);
}
