'use strict';

let cislo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let najlepsie = 0;

const odkaz = function (odkaz) {
  document.querySelector('.odkaz').textContent = odkaz;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    odkaz('⛔️ Žiadne číslo!');
  } else if (guess === cislo) {
    odkaz('🎉 Správne číslo!');
    document.querySelector('.cislo').textContent = cislo;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.cislo').style.width = '30rem';

    if (score > najlepsie) {
      najlepsie = score;
      document.querySelector('.highscore').textContent = najlepsie;
    }
  } else if (guess !== cislo) {
    if (score > 1) {
      odkaz(guess > cislo ? '📈 Príliš veľa!' : '📉 Príliš málo!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      odkaz('💥 Prehral si!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.znova').addEventListener('click', function () {
  score = 20;
  cislo = Math.trunc(Math.random() * 50) + 1;

  odkaz('Hádaj...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.cislo').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(54, 19, 68)';
  document.querySelector('.cislo').style.width = '15rem';
});
