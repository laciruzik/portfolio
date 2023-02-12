'use strict';

const player0 = document.querySelector('.hrac__0');
const player1 = document.querySelector('.hrac__1');
const score0 = document.querySelector('#score__0');
const score1 = document.getElementById('score__1');
const current0 = document.getElementById('current__0');
const current1 = document.getElementById('current__1');
const kocka = document.querySelector('.kocka');
const btnNovaHra = document.querySelector('.btn__nova__hra');
const btnHoditKockou = document.querySelector('.btn__hodit__kockou');
const btnPodrzat = document.querySelector('.btn__podrzat');

let scores, currentScore, activePlayer, playing;

const novaHra = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  kocka.classList.add('hidden');
  player0.classList.remove('hrac__winner');
  player1.classList.remove('hrac__winner');
  player0.classList.add('hrac__active');
  player1.classList.remove('hrac__active');
};
novaHra();

const switchPlayer = function () {
  document.getElementById(`current__${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('hrac__active');
  player1.classList.toggle('hrac__active');
};

btnHoditKockou.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    kocka.classList.remove('hidden');
    kocka.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current__${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnPodrzat.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score__${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      kocka.classList.add('hidden');
      document
        .querySelector(`.hrac__${activePlayer}`)
        .classList.add('hrac__winner');
      document
        .querySelector(`.hrac__${activePlayer}`)
        .classList.remove('hrac__active');
    } else {
      switchPlayer();
    }
  }
});

btnNovaHra.addEventListener('click', novaHra);

let modal = document.getElementById('myModal');
let button = document.getElementById('myBtn');
let close = document.getElementsByClassName('close')[0];

button.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
