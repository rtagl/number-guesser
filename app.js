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
    winningNum = 2,
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
  }
  //check if winning num
  if(guess === winningNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`Game over, you lost. The correct number was ${winningNum}.`, 'red')
    } else {
      // game continues - answer wrong
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
    }
  }

});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}