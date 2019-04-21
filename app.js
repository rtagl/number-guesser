/*
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);
  // validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    return
  }
  //check if winning num
  if(guess === winningNum) {

    gameOver(true, `${winningNum} is correct, YOU WIN!`)

  } else {

    guessesLeft -= 1;

    if (guessesLeft === 0) {

      gameOver(false, `Game over, you lost. The correct number was ${winningNum}.`)

    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
    }
  }

});

game.addEventListener('mousedown', (e) => {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color)

  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}