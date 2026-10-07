const rollButton = document.getElementById("rollButton");
const diceResult = document.getElementById("diceResult");
const player = document.getElementById("player");
const spaces = document.querySelectorAll(".space");

let playerPosition = 0;

rollButton.addEventListener("click", function () {

  const dice = Math.floor(Math.random() * 6) + 1;

  diceResult.textContent = "🎲 Dice: " + dice;

  playerPosition = playerPosition + dice;

  if (playerPosition >= spaces.length - 1) {
    playerPosition = spaces.length - 1;
  }

  spaces[playerPosition].appendChild(player);

  if (playerPosition === spaces.length - 1) {
    diceResult.textContent =
      "🎉 You reached the canteen! You win!";

    rollButton.disabled = true;
  }
});
