/* -------------------------- Tahmin Tanimlamalari -------------------------- */

const inputValue = document.querySelector(
  ".enter-number-input"
);
const tryBtn = document.querySelector(
  ".enter-number-button"
);
const countText = document.querySelector(
  ".message-attempt"
);
const preGuessNumber = document.querySelector(
  ".message-preguess"
);
const restartBtn = document.querySelector(
  ".game-start-button"
);
const message = document.querySelector(".message-text");
const body = document.querySelector("body");

let minNumber = 1,
  maxNumber = 20;
let toGuess = 10;

function randomNumber() {
  return Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
}
let random = randomNumber();

body.onload = function () {
  inputValue.focus();
};

function info(msj, color) {
  message.textContent = msj;
  message.style.color = color;
}

tryBtn.addEventListener("click", () => {
  let number = inputValue.value;

  if (number == random) {
    info(`Congratulation!`, "green");
    tryBtn.disabled = true;
    inputValue.value = "";
  } else if (
    isNaN(number) ||
    number < minNumber ||
    number > maxNumber
  ) {
    info(
      `Please enter a number between ${minNumber} and ${maxNumber}`,
      "red"
    );
    inputValue.value = "";
  } else if (number > random) {
    toGuess--;
    info(
      `Less than ${number}. You have ${toGuess} guesses left`,
      "red"
    );
    inputValue.value = "";

    if (toGuess === 0) {
      info(
        `Game over. Restart the game. The number was ${random}`
      );
      check.disabled = true;
      inputValue.value = "";
    }
  } else if (number < random) {
    toGuess--;
    info(
      `Greater than ${number}. You have ${toGuess} guesses left`,
      "red"
    );
    inputValue.value = "";
    if (toGuess === 0) {
      info(
        `Game over. Restart the game. The number was ${random}`
      );
      check.disabled = true;
      inputValue.value = "";
    }
  }
});

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
