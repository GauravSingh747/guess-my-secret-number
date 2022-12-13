'use strict';
// document.querySelector('.message').textContent = '🎉 correct number';
// document.querySelector('.number').textContent = '10';
// document.querySelector('.score').textContent = '13';
// document.querySelector('.guess').value = '25';

// to generate random number
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//  code for what to happen when you click the click button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😯 no number';
  }

  // when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess no is Too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎃 You lose the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess no is Too Low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎃 You lose the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
});
