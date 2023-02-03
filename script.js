'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const UInumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const UIscore = function (score) {
  document.querySelector('.score').textContent = score;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    UInumber(secretNumber);

    backgroundColor('#60b347');
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      UIscore(score);
    } else {
      displayMessage('💥 You lost the game!');
      UIscore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  UIscore(score);
  UInumber('?');
  document.querySelector('.guess').value = '';

  backgroundColor('#222');
  numberWidth('15rem');
});

console.log(score);
