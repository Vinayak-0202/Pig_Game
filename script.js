'use strict';
let player1Score = 0;
let player2Score = 0;
let current1 = 0,
  current2 = 0;
let diceValue = Math.trunc(Math.random() * 6) + 1;
console.log(diceValue);

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const diceImg = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const currentSore_1 = document.getElementById('current--0');
const currentSore_2 = document.getElementById('current--1');
const score_1 = document.getElementById('score--0');
const score_2 = document.getElementById('score--1');
const player_1_name = document.getElementById('name--0');
const player_2_name = document.getElementById('name--1');

function Winner() {
  if (player1Score >= 100) {
    player_1_name.textContent = '🎉You Win! 🎆';
    player_2_name.textContent = ' You Lose  BestLuck Next Time 👍';
  } else if (player2Score >= 100) {
    player_2_name.textContent = '🎉You Win! 🎆';
    player_1_name.textContent = ' You Lose  BestLuck Next Time 👍';
  }
}

if (player1Score >= 100 || player2Score >= 100) Winner();

function ChangePlayer() {
  if (player1.classList.contains('player--active')) {
    current1 = 0;
    currentSore_1.textContent = current1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else if (player2.classList.contains('player--active')) {
    current2 = 0;
    currentSore_2.textContent = current1;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
  diceValue = Math.trunc(Math.random() * 6) + 1;
}

function OnRollDice() {
  diceImg.setAttribute('src', `dice-${diceValue}.png`);
  document.querySelector('.dice').classList.remove('hidden');
  //diceImg.src = `dice-${diceValue}.png`;
  if (player1Score >= 100 || player2Score >= 100) Winner();

  if (diceValue !== 1) {
    if (player1.classList.contains('player--active')) {
      current1 += diceValue;
      currentSore_1.textContent = current1;
    } else if (player2.classList.contains('player--active')) {
      current2 += diceValue;
      currentSore_2.textContent = current2;
    }
  } else if (diceValue === 1) {
    if (player1Score >= 100 || player2Score >= 100) Winner();
    ChangePlayer();
  }

  diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);
}

function OnHold() {
  if (player1Score >= 100 || player2Score >= 100) Winner();
  if (player1.classList.contains('player--active')) {
    player1Score += current1;
    current1 = 0;
    score_1.textContent = player1Score;
  } else if (player2.classList.contains('player--active')) {
    player2Score += current2;
    current2 = 0;
    score_2.textContent = player2Score;
  }

  ChangePlayer();
  diceValue = Math.trunc(Math.random() * 6) + 1;
}

function restart() {
  player1Score = 0;
  player2Score = 0;
  current1 = 0;
  current2 = 0;

  currentSore_1.textContent = '0';
  currentSore_2.textContent = '0';
  score_1.textContent = '0';
  score_2.textContent = '0';
  document.querySelector('.dice').classList.add('hidden');

  if (!player1.classList.contains('player--active'))
    player1.classList.add('player--active');
  player_1_name.textContent = 'PLAYER 1';
  player_2_name.textContent = 'PLAYER 2';
  diceValue = Math.trunc(Math.random() * 6) + 1;
}

rollDice.addEventListener('click', OnRollDice);
hold.addEventListener('click', OnHold);
newGame.addEventListener('click', restart);
