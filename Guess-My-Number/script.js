'use strict';

// Select elements
const checkbtn = document.querySelector('.check')
const number = Math.trunc(Math.random() * 20) + 1;
const again = document.querySelector('.again')
let score = 20;
let highscore = 0


checkbtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    // when there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '❌ No number!';

      // When player wins
    } else if (guess === number) {
      document.querySelector('.message').textContent = '🍺 Correct Number!';

      document.querySelector('.number').textContent = number;

      document.querySelector('body').style.backgroundColor = '#60b347'
      document.querySelector('.number').style.width = '30rem'

      if (score > highscore) {
        highscore = score
        document.querySelector('.highscore').textContent = highscore;
      }

      // When guess is too high
    } else if (guess > number) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }

      // When guess is too high
    } else if (guess < number) {

      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
})

// Rset the game
again.addEventListener('click', () => {
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ""
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = "?";
  document.querySelector('.number').style.width = ""
  document.querySelector('.message').textContent = 'Start guessing...';
})