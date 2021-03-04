'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//最初の状態
score0EL.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//サイコロを回す
btnRoll.addEventListener('click', function () {
  //1.ランダムなサイコロの目を作る
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. サイコロの目を表示する。
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. もしサイコロの目は１になったらプレイヤーをチェンジチェンジ
  if (dice !== 1) {
    //現在の得点に追加する。
    currentScore = currentScore + dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //プレイヤーをチェンジ
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
