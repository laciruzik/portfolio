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

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function pi() {
  screen.value += Math.round(Math.PI * 100000) / 100000;
}

function fact() {
  let num, f;
  f = 1;
  num = screen.value;
  for (let i = 1; i <= num; i++) {
    f = f * i;
  }
  screen.value = f;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

function percent() {
  screen.value = screen.value / 100;
}
