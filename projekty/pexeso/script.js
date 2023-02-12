const karty = document.querySelectorAll(".karta");
let pair = 0;
let prvaKarta, druhaKarta;
let vypnuty = false;

function flipCard({ target: clickedCard }) {
  if (prvaKarta !== clickedCard && !vypnuty) {
    clickedCard.classList.add("flip");
    if (!prvaKarta) {
      return (prvaKarta = clickedCard);
    }
    druhaKarta = clickedCard;
    vypnuty = true;
    let prvaKartaLogo = prvaKarta.querySelector(".back-view img").src;
    let druhaKartaLogo = druhaKarta.querySelector(".back-view img").src;
    matchCards(prvaKartaLogo, druhaKartaLogo);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    pair++;
    if (pair == 8) {
      setTimeout(() => {
        return shuffleCard();
      }, 1000);
    }
    prvaKarta.removeEventListener("click", flipCard);
    druhaKarta.removeEventListener("click", flipCard);
    prvaKarta = druhaKarta = "";
    return (vypnuty = false);
  }
  setTimeout(() => {
    prvaKarta.classList.add("shake");
    druhaKarta.classList.add("shake");
  }, 400);
  setTimeout(() => {
    prvaKarta.classList.remove("shake", "flip");
    druhaKarta.classList.remove("shake", "flip");
    prvaKarta = druhaKarta = "";
    vypnuty = false;
  }, 1200);
}

function shuffleCard() {
  pair = 0;
  vypnuty = false;
  prvaKarta = druhaKarta = "";
  let arr = [
    "css",
    "react-dark",
    "javascript",
    "typescript",
    "postgresql-dark",
    "html",
    "vuejs-light",
    "angular-light",
    "css",
    "react-dark",
    "javascript",
    "typescript",
    "postgresql-dark",
    "html",
    "vuejs-light",
    "angular-light",
  ];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  karty.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `https://api.iconify.design/skill-icons/${arr[i]}.svg`;
    card.addEventListener("click", flipCard);
  });
}
shuffleCard();

karty.forEach((card) => {
  card.addEventListener("click", flipCard);
});
